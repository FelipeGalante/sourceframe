import fs from "node:fs";
import path from "node:path";

import matter from "gray-matter";
import { z } from "zod";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import { visit } from "unist-util-visit";

import { siteConfig } from "@/site.config";

const contentRoot = path.join(process.cwd(), "content");

const contentTypeSchema = z.union([
  z.literal("site-index"),
  z.literal("domain-index"),
  z.literal("section"),
  z.literal("section-index"),
  z.literal("section-full-extraction"),
  z.literal("database-domain"),
  z.literal("database-table"),
  z.literal("database-relationships"),
  z.literal("database-mermaid"),
]);

const sharedSchema = z.object({
  title: z.string().min(1),
  type: contentTypeSchema,
  domain: z.string().min(1).optional(),
  section: z.string().min(1).optional(),
  order: z.number().int().nonnegative().optional(),
  nav_label: z.string().min(1).optional(),
  eyebrow: z.string().min(1).optional(),
  description: z.string().min(1).optional(),
  kicker: z.string().min(1).optional(),
  source: z.string().min(1).optional(),
  source_panel: z.string().min(1).optional(),
  database_domain: z.string().min(1).optional(),
  table_name: z.string().min(1).optional(),
});

const siteIndexSchema = sharedSchema.extend({
  type: z.literal("site-index"),
});

const domainIndexSchema = sharedSchema.extend({
  type: z.literal("domain-index"),
  domain: z.string().min(1),
  order: z.number().int().nonnegative(),
  eyebrow: z.string().min(1).optional(),
});

const sectionContentSchema = sharedSchema.extend({
  type: z.literal("section"),
  domain: z.string().min(1),
  section: z.string().min(1),
  order: z.number().int().nonnegative(),
});

const sectionIndexSchema = sharedSchema.extend({
  type: z.literal("section-index"),
  domain: z.string().min(1),
  section: z.string().min(1),
  order: z.number().int().nonnegative(),
});

const sectionFullExtractionSchema = sharedSchema.extend({
  type: z.literal("section-full-extraction"),
  domain: z.string().min(1),
  section: z.string().min(1),
  order: z.number().int().nonnegative(),
});

const databaseDomainSchema = sharedSchema.extend({
  type: z.literal("database-domain"),
  domain: z.string().min(1),
  section: z.string().min(1),
  order: z.number().int().nonnegative(),
});

const databaseTableSchema = sharedSchema.extend({
  type: z.literal("database-table"),
  domain: z.string().min(1),
  section: z.string().min(1),
  order: z.number().int().nonnegative(),
  database_domain: z.string().min(1),
  table_name: z.string().min(1),
});

const databaseRelationshipsSchema = sharedSchema.extend({
  type: z.literal("database-relationships"),
  domain: z.string().min(1),
  section: z.string().min(1),
});

const databaseMermaidSchema = sharedSchema.extend({
  type: z.literal("database-mermaid"),
  domain: z.string().min(1),
  section: z.string().min(1),
});

const frontmatterSchema = z.discriminatedUnion("type", [
  siteIndexSchema,
  domainIndexSchema,
  sectionContentSchema,
  sectionIndexSchema,
  sectionFullExtractionSchema,
  databaseDomainSchema,
  databaseTableSchema,
  databaseRelationshipsSchema,
  databaseMermaidSchema,
]);

export type ContentType = z.infer<typeof contentTypeSchema>;
export type Frontmatter = z.infer<typeof frontmatterSchema>;
export type ContentEntry = {
  id: string;
  route: string;
  href: string;
  filePath: string;
  relativePath: string;
  parentRoute: string | null;
  depth: number;
  slugSegments: string[];
  title: string;
  navLabel: string;
  type: ContentType;
  domain?: string;
  section?: string;
  order?: number;
  eyebrow?: string;
  description?: string;
  kicker?: string;
  source?: string;
  sourcePanel?: string;
  databaseDomain?: string;
  tableName?: string;
  body: string;
  plainText: string;
  excerpt: string;
  headings: string[];
  frontmatter: Frontmatter;
};

export type DomainNavItem = {
  key: string;
  title: string;
  eyebrow?: string;
  description?: string;
  order: number;
  href: string;
  sectionCount: number;
  sections: SectionNavItem[];
};

export type SectionNavItem = {
  key: string;
  title: string;
  navLabel: string;
  order: number;
  href: string;
  type: string;
};

export type SearchRecord = {
  id: string;
  title: string;
  domain: string;
  section: string;
  path: string;
  href: string;
  headings: string[];
  text: string;
  excerpt: string;
};

export type ContentRegistry = {
  entries: ContentEntry[];
  entryByRoute: Map<string, ContentEntry>;
  entryByRelativePath: Map<string, ContentEntry>;
  childrenByRoute: Map<string, ContentEntry[]>;
  domainTabs: DomainNavItem[];
  searchIndex: SearchRecord[];
  rootEntry?: ContentEntry;
  siteConfig: typeof siteConfig;
};

function toKebabCase(value: string) {
  return value
    .trim()
    .replace(/['"’]/g, "")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();
}

function toRouteSegment(value: string) {
  return value
    .trim()
    .replace(/['"’]/g, "")
    .replace(/[\s_]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();
}

function routeFromSegments(segments: string[]) {
  if (!segments.length) {
    return "/";
  }

  return `/${segments.map((segment) => toRouteSegment(segment)).join("/")}`;
}

function relativeSegmentsForFile(relativePath: string) {
  const normalized = relativePath.replaceAll(path.sep, "/");
  const withoutExt = normalized.replace(/\.md$/, "");
  const parts = withoutExt.split("/").filter(Boolean);
  if (parts.at(-1) === "index") {
    parts.pop();
  }
  return parts;
}

function collectText(node: unknown): string {
  if (!node || typeof node !== "object") {
    return "";
  }

  const current = node as { value?: unknown; children?: unknown };

  if (typeof current.value === "string") {
    return current.value;
  }

  if (Array.isArray(current.children)) {
    return current.children.map((child) => collectText(child)).join(" ");
  }

  return typeof node === "string" ? node : "";
}

function extractMarkdownMeta(markdown: string) {
  const tree = unified().use(remarkParse).use(remarkGfm).parse(markdown) as unknown;
  const headings: string[] = [];

  visit(tree as never, "heading", (node) => {
    const text = collectText(node as unknown).replace(/\s+/g, " ").trim();
    if (text) {
      headings.push(text);
    }
  });

  const plainText = collectText(tree).replace(/\s+/g, " ").trim();
  const excerpt = plainText.slice(0, 220);

  return {
    headings,
    plainText,
    excerpt,
  };
}

function normalizeRelativePath(value: string) {
  return value.replaceAll(path.sep, "/");
}

function readMarkdownFile(filePath: string) {
  const source = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(source);
  const frontmatter = frontmatterSchema.parse(data);
  const relativePath = normalizeRelativePath(path.relative(contentRoot, filePath));
  const slugSegments = relativeSegmentsForFile(relativePath);
  const route = routeFromSegments(slugSegments);

  if (frontmatter.type !== "site-index") {
    const domainSlug = toKebabCase(frontmatter.domain ?? "");
    if (!domainSlug) {
      throw new Error(`Missing domain in frontmatter for ${relativePath}`);
    }

    const firstSegment = slugSegments[0];
    if (firstSegment !== domainSlug) {
      throw new Error(
        `Route mismatch in ${relativePath}: expected first segment "${domainSlug}" but found "${firstSegment ?? "(none)"}"`
      );
    }
  }

  if (frontmatter.section) {
    const domainSlug = toKebabCase(frontmatter.domain ?? "");
    const sectionSlug = toKebabCase(frontmatter.section);
    const expectedPrefix = `/${domainSlug}/${sectionSlug}`;
    if (!route.startsWith(expectedPrefix)) {
      throw new Error(
        `Route mismatch in ${relativePath}: expected route to start with "${expectedPrefix}" but resolved to "${route}"`
      );
    }
  }

  const meta = extractMarkdownMeta(content);
  const navLabel = frontmatter.nav_label ?? frontmatter.title;

  return {
    id: relativePath,
    route,
    href: route,
    filePath,
    relativePath,
    parentRoute: route === "/" ? null : route.split("/").slice(0, -1).join("/") || "/",
    depth: slugSegments.length,
    slugSegments,
    title: frontmatter.title,
    navLabel,
    type: frontmatter.type,
    domain: frontmatter.domain,
    section: frontmatter.section,
    order: frontmatter.order,
    eyebrow: frontmatter.eyebrow,
    description: frontmatter.description,
    kicker: frontmatter.kicker,
    source: frontmatter.source,
    sourcePanel: frontmatter.source_panel,
    databaseDomain: frontmatter.database_domain,
    tableName: frontmatter.table_name,
    body: content,
    plainText: meta.plainText,
    excerpt: meta.excerpt || frontmatter.description || frontmatter.title,
    headings: meta.headings,
    frontmatter,
  } satisfies ContentEntry;
}

function discoverMarkdownFiles(dir: string): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files: string[] = [];

  for (const entry of entries) {
    if (entry.name.startsWith(".")) {
      continue;
    }

    const nextPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...discoverMarkdownFiles(nextPath));
    } else if (entry.isFile() && entry.name.endsWith(".md")) {
      files.push(nextPath);
    }
  }

  return files;
}

function sortEntries(entries: ContentEntry[]) {
  const typePriority: Record<ContentType, number> = {
    "site-index": 0,
    "domain-index": 1,
    section: 2,
    "section-index": 3,
    "section-full-extraction": 4,
    "database-relationships": 5,
    "database-mermaid": 6,
    "database-domain": 7,
    "database-table": 8,
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
      (child) => child.type !== "domain-index" && child.type !== "site-index"
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
    const domainTitle = entry.domain ? domainTitleByKey.get(entry.domain) ?? entry.domain : siteConfig.name;
    const sectionTitle = entry.navLabel;
    const text = [entry.title, entry.navLabel, domainTitle, sectionTitle, ...entry.headings, entry.plainText]
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

function buildRegistry(): ContentRegistry {
  if (!fs.existsSync(contentRoot)) {
    throw new Error(`Missing content directory: ${contentRoot}`);
  }

  const files = discoverMarkdownFiles(contentRoot);
  if (!files.length) {
    throw new Error(`No Markdown files found in ${contentRoot}`);
  }

  const entries = files.map(readMarkdownFile);
  const entryByRoute = new Map<string, ContentEntry>();

  for (const entry of entries) {
    if (entryByRoute.has(entry.route)) {
      const existing = entryByRoute.get(entry.route)!;
      throw new Error(
        `Duplicate route "${entry.route}" found in ${existing.relativePath} and ${entry.relativePath}`
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
  cachedRegistry ??= buildRegistry();
  return cachedRegistry;
}

export function getContentEntry(route: string) {
  return getContentRegistry().entryByRoute.get(route);
}

export function getContentEntryByRelativePath(relativePath: string) {
  return getContentRegistry().entryByRelativePath.get(normalizeRelativePath(relativePath));
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
