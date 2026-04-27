import path from "node:path";

import { siteConfig as defaultSiteConfig } from "@/site.config";

import { discoverMarkdownFiles, readMarkdownFile } from "./discovery";
import { toKebabCase } from "./routes";
import type {
  ContentEntry,
  ContentRegistry,
  ContentType,
  DomainNavItem,
  SearchRecord,
} from "./types";

const defaultContentRoot = path.join(process.cwd(), "content");

type BuildContentRegistryOptions = {
  rootDir?: string;
  siteConfig?: typeof defaultSiteConfig;
  routeBase?: string;
};

function normalizeBuildOptions(rootDirOrOptions?: string | BuildContentRegistryOptions) {
  if (typeof rootDirOrOptions === "string") {
    return {
      rootDir: rootDirOrOptions,
      siteConfig: defaultSiteConfig,
      routeBase: "",
    };
  }

  return {
    rootDir: rootDirOrOptions?.rootDir ?? defaultContentRoot,
    siteConfig: rootDirOrOptions?.siteConfig ?? defaultSiteConfig,
    routeBase: rootDirOrOptions?.routeBase ?? "",
  };
}

function joinRouteBase(routeBase: string, route: string) {
  if (!routeBase) {
    return route;
  }

  if (route === "/") {
    return routeBase;
  }

  return `${routeBase}${route}`;
}

function sortEntries(entries: ContentEntry[]) {
  const typePriority: Record<ContentType, number> = {
    "site-index": 0,
    "domain-index": 1,
    section: 2,
    "section-index": 3,
    "section-full-extraction": 4,
    reference: 5,
    "database-relationships": 6,
    "database-mermaid": 7,
    "database-sql-reference": 8,
    "database-domain": 9,
    "database-table": 10,
  };

  return [...entries].sort((left, right) => {
    const leftType = typePriority[left.type];
    const rightType = typePriority[right.type];
    if (leftType !== rightType) {
      return leftType - rightType;
    }

    const leftOrder = left.order ?? Number.POSITIVE_INFINITY;
    const rightOrder = right.order ?? Number.POSITIVE_INFINITY;
    if (leftOrder !== rightOrder) {
      return leftOrder - rightOrder;
    }

    if (left.title !== right.title) {
      return left.title.localeCompare(right.title);
    }

    return left.route.localeCompare(right.route);
  });
}

function buildChildrenMap(entries: ContentEntry[]) {
  const childrenByRoute = new Map<string, ContentEntry[]>();

  for (const entry of entries) {
    const parent = entry.parentRoute ?? "/";
    const bucket = childrenByRoute.get(parent) ?? [];
    bucket.push(entry);
    childrenByRoute.set(parent, bucket);
  }

  for (const [route, children] of childrenByRoute) {
    childrenByRoute.set(route, sortEntries(children));
  }

  return childrenByRoute;
}

function buildDomainTabs(entries: ContentEntry[], childrenByRoute: Map<string, ContentEntry[]>) {
  const domainEntries = entries.filter((entry) => entry.type === "domain-index" && entry.domain);
  return sortEntries(domainEntries).map((entry) => {
    const domainRoute = entry.route;
    const directChildren = (childrenByRoute.get(domainRoute) ?? []).filter(
      (child) => child.type !== "domain-index" && child.type !== "site-index",
    );

    return {
      key: entry.domain!,
      title: entry.title,
      eyebrow: entry.eyebrow,
      description: entry.description,
      order: entry.order ?? 0,
      href: entry.href,
      sectionCount: directChildren.length,
      sections: directChildren.map((child) => ({
        key: child.route,
        title: child.title,
        navLabel: child.navLabel,
        order: child.order ?? 0,
        href: child.href,
        type: child.type,
      })),
      visibility: entry.visibility,
    } satisfies DomainNavItem;
  });
}

function buildSearchIndex(
  entries: ContentEntry[],
  domainTabs: DomainNavItem[],
  siteConfig: typeof defaultSiteConfig,
) {
  const domainTitleByKey = new Map(domainTabs.map((domain) => [domain.key, domain.title]));

  return entries.map((entry) => {
    const summary = entry.summary ?? entry.description ?? entry.excerpt;
    const contentType = entry.contentType ?? entry.type;
    const tags = entry.tags ?? [];
    const domainTitle = entry.domain
      ? (domainTitleByKey.get(entry.domain) ?? entry.domain)
      : siteConfig.name;
    const sectionTitle = entry.navLabel;
    const text = [
      entry.title,
      summary,
      entry.navLabel,
      domainTitle,
      sectionTitle,
      contentType,
      entry.owner,
      entry.status,
      entry.origin,
      entry.sourceFile,
      entry.importedAt,
      entry.importedBy,
      entry.canonicalStatus,
      ...(entry.relatedCanonicalPages ?? []),
      ...tags,
      ...entry.headings,
      entry.plainText,
    ]
      .filter(Boolean)
      .join(" ");

    return {
      id: entry.id,
      title: entry.navLabel,
      domain: domainTitle,
      section: entry.section ?? "",
      route: entry.route,
      href: entry.href,
      summary,
      contentType,
      owner: entry.owner,
      status: entry.status,
      tags,
      headings: entry.headings,
      text,
      excerpt: entry.excerpt,
    } satisfies SearchRecord;
  });
}

export function buildContentRegistry(
  rootDirOrOptions: string | BuildContentRegistryOptions = defaultContentRoot,
): ContentRegistry {
  const { rootDir, siteConfig, routeBase } = normalizeBuildOptions(rootDirOrOptions);

  if (!path.isAbsolute(rootDir)) {
    throw new Error(`Content root must be an absolute path: ${rootDir}`);
  }

  const files = discoverMarkdownFiles(rootDir);
  if (!files.length) {
    throw new Error(`No Markdown files found in ${rootDir}`);
  }

  const entries = files.map((filePath) => readMarkdownFile(filePath, rootDir));
  const entryByRoute = new Map<string, ContentEntry>();

  for (const entry of entries) {
    if (entryByRoute.has(entry.route)) {
      const existing = entryByRoute.get(entry.route)!;
      throw new Error(
        `Duplicate route "${entry.route}" found in ${existing.relativePath} and ${entry.relativePath}`,
      );
    }
    entryByRoute.set(entry.route, entry);
  }

  const childrenByRoute = buildChildrenMap(entries);
  const domainTabs = buildDomainTabs(entries, childrenByRoute);
  const entriesWithHref = entries.map((entry) => ({
    ...entry,
    href: joinRouteBase(routeBase, entry.route),
  }));
  const childrenByRouteWithHref = new Map(
    [...childrenByRoute.entries()].map(([route, children]) => [
      route,
      children.map((child) => ({
        ...child,
        href: joinRouteBase(routeBase, child.route),
      })),
    ]),
  );
  const searchIndex = buildSearchIndex(entriesWithHref, domainTabs, siteConfig);
  const domainTabsWithHref = domainTabs.map((domain) => ({
    ...domain,
    href: joinRouteBase(routeBase, domain.href),
    sections: domain.sections.map((section) => ({
      ...section,
      href: joinRouteBase(routeBase, section.href),
    })),
  }));

  return {
    entries: sortEntries(entriesWithHref),
    entryByRoute: new Map(entriesWithHref.map((entry) => [entry.route, entry])),
    entryByRelativePath: new Map(entriesWithHref.map((entry) => [entry.relativePath, entry])),
    childrenByRoute: childrenByRouteWithHref,
    domainTabs: domainTabsWithHref,
    searchIndex,
    rootEntry: entriesWithHref.find((entry) => entry.route === "/"),
    siteConfig,
    routeBase,
  };
}

let cachedRegistry: ContentRegistry | null = null;

export function getContentRegistry() {
  cachedRegistry ??= buildContentRegistry();
  return cachedRegistry;
}

export function getContentEntry(route: string) {
  return getContentRegistry().entryByRoute.get(route);
}

export function getContentEntryByRelativePath(relativePath: string) {
  return getContentRegistry().entryByRelativePath.get(relativePath.replaceAll(path.sep, "/"));
}

export function getChildren(route: string) {
  return getContentRegistry().childrenByRoute.get(route) ?? [];
}

export function getDomainEntry(domainKey: string) {
  return getContentRegistry().domainTabs.find((domain) => domain.key === domainKey);
}

export function getSectionRoute(entry: ContentEntry) {
  if (!entry.domain) {
    return entry.route;
  }

  if (!entry.section) {
    return `/${toKebabCase(entry.domain)}`;
  }

  return `/${toKebabCase(entry.domain)}/${toKebabCase(entry.section)}`;
}

export function getActiveSectionRoute(entry: ContentEntry) {
  if (!entry.domain) {
    return entry.href;
  }

  const candidate = getSectionRoute(entry);
  const registry = getContentRegistry();
  if (registry.entryByRoute.has(candidate)) {
    if (registry.routeBase) {
      return entry.href;
    }
    return candidate;
  }

  return entry.href;
}

export function getArchiveRoots() {
  return getVisibleArchiveRoots();
}

export function getVisibleArchiveRoots() {
  const registry = getContentRegistry();
  return registry.childrenByRoute.get("/")?.filter(isVisibleEntry) ?? [];
}

export function getArchiveEntries() {
  return getFullArchiveEntries();
}

function isVisibleEntry(entry: ContentEntry) {
  return entry.visibility !== "internal";
}

export function getFullArchiveEntries() {
  return getContentRegistry().entries.filter(isVisibleEntry);
}

export function getDomainArchiveEntries(domainKey: string) {
  return getContentRegistry()
    .entries.filter(isVisibleEntry)
    .filter((entry) => entry.domain === domainKey);
}

export function getVisibleDomainTabs() {
  return getContentRegistry().domainTabs.filter((domain) => domain.visibility !== "internal");
}

export function resolveContentHref(
  href: string,
  sourceRelativePath: string,
  registry = getContentRegistry(),
) {
  if (
    href.startsWith("#") ||
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:")
  ) {
    return href;
  }

  const [pathPart, hashPart] = href.split("#");
  if (!pathPart.endsWith(".md") && !pathPart.endsWith(".mdx")) {
    return href;
  }

  const sourceDir = path.posix.dirname(sourceRelativePath.replaceAll(path.sep, "/"));
  const resolvedRelative = path.posix.normalize(path.posix.join(sourceDir, pathPart));
  const entry = registry.entryByRelativePath.get(resolvedRelative);

  if (!entry) {
    return href;
  }

  return `${entry.href}${hashPart ? `#${hashPart}` : ""}`;
}
