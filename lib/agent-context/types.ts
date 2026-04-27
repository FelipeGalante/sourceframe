import type { ContentEntry, ContentRegistry } from "@/lib/content";

export type AgentContextFilters = {
  projectSlugs: string[];
  domains: string[];
  contentTypes: string[];
  tags: string[];
};

export type AgentContextSource = {
  slug: string;
  name: string;
  subtitle?: string;
  description?: string;
  themeAccent?: string;
  contentRoot: string;
  contentRootLabel?: string;
  routeBase: string;
  registry: ContentRegistry;
};

export type AgentContextProjectSummary = {
  slug: string;
  name: string;
  subtitle?: string;
  description?: string;
  themeAccent?: string;
  contentRoot: string;
  routeBase: string;
  homeHref: string;
  archiveHref: string;
  entryCount: number;
  domainCount: number;
  domainKeys: string[];
  domains: Array<{
    key: string;
    title: string;
    href: string;
    sectionCount: number;
  }>;
};

export type AgentContextDocument = {
  projectSlug: string;
  projectName: string;
  projectSubtitle?: string;
  projectRouteBase: string;
  projectContentRoot: string;
  projectThemeAccent?: string;
  route: string;
  href: string;
  sourcePath: string;
  relativePath: string;
  title: string;
  navLabel: string;
  type: ContentEntry["type"];
  domain?: string;
  section?: string;
  contentType?: string;
  summary?: string;
  owner?: string;
  status?: string;
  visibility?: "public" | "internal";
  version?: string;
  updated?: string;
  reviewAfter?: string;
  lastReviewed?: string;
  deprecatedSince?: string;
  tags: string[];
  sourceFormat: ContentEntry["format"];
  category: string;
};

export type AgentContextSection = {
  key: string;
  title: string;
  description: string;
  entries: AgentContextDocument[];
};

export type AgentContextBundle = {
  version: 1;
  filters: AgentContextFilters;
  projects: AgentContextProjectSummary[];
  sections: AgentContextSection[];
  entries: AgentContextDocument[];
};
