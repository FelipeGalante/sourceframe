import path from "node:path";

import { siteConfig } from "@/site.config";

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

function sortEntries(entries: ContentEntry[]) {
  const typePriority: Record<ContentType, number> = {
    "site-index": 0,
    "domain-index": 1,
    section: 2,
    "section-index": 3,
    "section-full-extraction": 4,
    "database-relationships": 5,
    "database-mermaid": 6,
    "database-sql-reference": 7,
    "database-domain": 8,
    "database-table": 9,
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
    } satisfies DomainNavItem;
  });
}

function buildSearchIndex(entries: ContentEntry[], domainTabs: DomainNavItem[]) {
  const domainTitleByKey = new Map(domainTabs.map((domain) => [domain.key, domain.title]));

  return entries.map((entry) => {
    const domainTitle = entry.domain
      ? (domainTitleByKey.get(entry.domain) ?? entry.domain)
      : siteConfig.name;
    const sectionTitle = entry.navLabel;
    const text = [
      entry.title,
      entry.navLabel,
      domainTitle,
      sectionTitle,
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
      path: entry.route,
      href: entry.href,
      headings: entry.headings,
      text,
      excerpt: entry.excerpt,
    } satisfies SearchRecord;
  });
}

export function buildContentRegistry(rootDir = defaultContentRoot): ContentRegistry {
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
  const searchIndex = buildSearchIndex(entries, domainTabs);
  const rootEntry = entryByRoute.get("/") ?? undefined;

  return {
    entries: sortEntries(entries),
    entryByRoute,
    entryByRelativePath: new Map(entries.map((entry) => [entry.relativePath, entry])),
    childrenByRoute,
    domainTabs,
    searchIndex,
    rootEntry,
    siteConfig,
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
    return entry.route;
  }

  const candidate = getSectionRoute(entry);
  const registry = getContentRegistry();
  if (registry.entryByRoute.has(candidate)) {
    return candidate;
  }

  return entry.route;
}

export function getArchiveRoots() {
  const registry = getContentRegistry();
  return registry.childrenByRoute.get("/") ?? [];
}

export function getArchiveEntries() {
  const registry = getContentRegistry();
  const walk = (route: string): ContentEntry[] => {
    const nodes = registry.childrenByRoute.get(route) ?? [];
    const result: ContentEntry[] = [];

    for (const node of nodes) {
      result.push(node);
      result.push(...walk(node.route));
    }

    return result;
  };

  const roots = registry.rootEntry ? [registry.rootEntry] : [];
  return [...roots, ...walk("/")];
}

export function resolveContentHref(href: string, sourceRelativePath: string) {
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
  if (!pathPart.endsWith(".md")) {
    return href;
  }

  const sourceDir = path.posix.dirname(sourceRelativePath.replaceAll(path.sep, "/"));
  const resolvedRelative = path.posix.normalize(path.posix.join(sourceDir, pathPart));
  const entry = getContentEntryByRelativePath(resolvedRelative);

  if (!entry) {
    return href;
  }

  return `${entry.route}${hashPart ? `#${hashPart}` : ""}`;
}
