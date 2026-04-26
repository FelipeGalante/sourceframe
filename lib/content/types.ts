import type { Frontmatter } from "./schemas";
import type { SiteConfig } from "@/lib/site-config";

export type ContentType =
  | "site-index"
  | "domain-index"
  | "section"
  | "section-index"
  | "section-full-extraction"
  | "reference"
  | "database-domain"
  | "database-table"
  | "database-sql-reference"
  | "database-relationships"
  | "database-mermaid";

export type ContentFormat = "markdown" | "mdx";

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
  contentType?: string;
  summary?: string;
  owner?: string;
  status?: string;
  tags?: string[];
  eyebrow?: string;
  description?: string;
  kicker?: string;
  source?: string;
  sourcePanel?: string;
  databaseDomain?: string;
  tableName?: string;
  body: string;
  format: ContentFormat;
  plainText: string;
  excerpt: string;
  headings: string[];
  frontmatter: Frontmatter;
};

export type SectionNavItem = {
  key: string;
  title: string;
  navLabel: string;
  order: number;
  href: string;
  type: string;
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

export type SearchRecord = {
  id: string;
  title: string;
  domain: string;
  section: string;
  route: string;
  href: string;
  summary: string;
  contentType: string;
  owner?: string;
  status?: string;
  tags: string[];
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
  siteConfig: SiteConfig;
};
