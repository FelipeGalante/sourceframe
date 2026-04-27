import path from "node:path";

import type { ContentEntry } from "@/lib/content";

import type {
  AgentContextBundle,
  AgentContextDocument,
  AgentContextFilters,
  AgentContextProjectSummary,
  AgentContextSection,
  AgentContextSource,
} from "./types";

type NormalizedFilters = AgentContextFilters;

type AgentContextCategory = {
  key: string;
  title: string;
  description: string;
  matches: (entry: ContentEntry) => boolean;
};

const categoryDefinitions: AgentContextCategory[] = [
  {
    key: "active-prds",
    title: "Active PRDs",
    description: "Current product requirements and core product planning pages.",
    matches: (entry) =>
      entry.contentType === "prd" &&
      entry.status !== "deprecated" &&
      entry.status !== "superseded" &&
      entry.visibility !== "internal",
  },
  {
    key: "architecture-pages",
    title: "Architecture Pages",
    description: "Architecture, diagrams, and implementation guidance.",
    matches: (entry) => entry.contentType === "architecture",
  },
  {
    key: "decisions",
    title: "Decisions",
    description: "ADRs, decision logs, and product decision notes.",
    matches: (entry) =>
      entry.contentType === "adr" ||
      entry.contentType === "decision-log" ||
      entry.contentType === "product-decision" ||
      Boolean(entry.decision),
  },
  {
    key: "requirements",
    title: "Requirements",
    description: "Supporting requirement artifacts and planning pages.",
    matches: (entry) =>
      entry.contentType === "prd" ||
      entry.contentType === "feature-matrix" ||
      entry.contentType === "roadmap" ||
      entry.contentType === "success-metrics" ||
      entry.contentType === "release-plan",
  },
  {
    key: "api-docs",
    title: "API Docs",
    description: "Endpoint references and API usage pages.",
    matches: (entry) => entry.contentType === "api" || Boolean(entry.api),
  },
  {
    key: "schema-docs",
    title: "Database and Schema Docs",
    description: "Database tables, relationships, and schema reference pages.",
    matches: (entry) =>
      Boolean(entry.schema) ||
      entry.type === "database-domain" ||
      entry.type === "database-table" ||
      entry.type === "database-sql-reference" ||
      entry.type === "database-relationships" ||
      entry.type === "database-mermaid",
  },
  {
    key: "implementation-prompts",
    title: "Implementation Prompts",
    description: "Prompt-style docs and execution plans for coding agents.",
    matches: (entry) => {
      if (entry.contentType === "source-archive") {
        return false;
      }

      const text = `${entry.title}\n${entry.summary ?? ""}\n${entry.plainText}`.toLowerCase();
      return (
        /implementation prompt|plan-mode prompt|claude code phases|claude code session/.test(
          text,
        ) ||
        (entry.visibility === "internal" && /claude code|prompt|phase/.test(text))
      );
    },
  },
];

function normalize(values?: string[]) {
  return Array.from(
    new Set(
      (values ?? []).map((value) => value.trim().toLowerCase()).filter((value) => value.length > 0),
    ),
  );
}

function normalizeFilters(filters: Partial<AgentContextFilters> = {}): NormalizedFilters {
  return {
    projectSlugs: normalize(filters.projectSlugs),
    domains: normalize(filters.domains),
    contentTypes: normalize(filters.contentTypes),
    tags: normalize(filters.tags),
  };
}

function matchesFilter(value: string | undefined, values: string[]) {
  if (!values.length) {
    return true;
  }

  if (!value) {
    return false;
  }

  return values.includes(value.trim().toLowerCase());
}

function matchesTagFilter(tags: string[] | undefined, values: string[]) {
  if (!values.length) {
    return true;
  }

  if (!tags?.length) {
    return false;
  }

  const normalized = new Set(tags.map((tag) => tag.trim().toLowerCase()));
  return values.some((value) => normalized.has(value));
}

function sourceRootRelativePath(source: AgentContextSource) {
  if (source.contentRootLabel) {
    return path.posix.normalize(source.contentRootLabel);
  }

  return path.posix.normalize(
    path.relative(process.cwd(), source.contentRoot).split(path.sep).join("/"),
  );
}

function sourceContentPath(source: AgentContextSource, entry: ContentEntry) {
  return path.posix.join(sourceRootRelativePath(source), entry.relativePath);
}

function sourceSummary(source: AgentContextSource, selectedEntries: ContentEntry[]) {
  const selectedDomains = source.registry.domainTabs.filter((domain) =>
    selectedEntries.some((entry) => entry.domain === domain.key),
  );

  return {
    slug: source.slug,
    name: source.name,
    subtitle: source.subtitle,
    description: source.description,
    themeAccent: source.themeAccent,
    contentRoot: sourceRootRelativePath(source),
    routeBase: source.routeBase,
    homeHref: source.routeBase || "/",
    archiveHref: source.routeBase ? `${source.routeBase}/full-archive` : "/full-archive",
    entryCount: selectedEntries.length,
    domainCount: selectedDomains.length,
    domainKeys: selectedDomains.map((domain) => domain.key),
    domains: selectedDomains.map((domain) => ({
      key: domain.key,
      title: domain.title,
      href: domain.href,
      sectionCount: selectedEntries.filter((entry) => entry.domain === domain.key).length,
    })),
  } satisfies AgentContextProjectSummary;
}

function entryCategory(entry: ContentEntry) {
  return (
    categoryDefinitions.find((definition) => definition.matches(entry))?.key ?? "uncategorized"
  );
}

function toDocument(source: AgentContextSource, entry: ContentEntry): AgentContextDocument {
  return {
    projectSlug: source.slug,
    projectName: source.name,
    projectSubtitle: source.subtitle,
    projectRouteBase: source.routeBase,
    projectContentRoot: sourceRootRelativePath(source),
    projectThemeAccent: source.themeAccent,
    route: entry.href,
    href: entry.href,
    sourcePath: sourceContentPath(source, entry),
    relativePath: entry.relativePath,
    title: entry.title,
    navLabel: entry.navLabel,
    type: entry.type,
    domain: entry.domain,
    section: entry.section,
    contentType: entry.contentType,
    summary: entry.summary,
    owner: entry.owner,
    status: entry.status,
    visibility: entry.visibility,
    version: entry.version,
    updated: entry.updated,
    reviewAfter: entry.reviewAfter,
    lastReviewed: entry.lastReviewed,
    deprecatedSince: entry.deprecatedSince,
    tags: entry.tags ?? [],
    sourceFormat: entry.format,
    category: entryCategory(entry),
  };
}

function selectEntries(source: AgentContextSource, filters: NormalizedFilters) {
  return source.registry.entries.filter((entry) => {
    if (filters.domains.length && !matchesFilter(entry.domain, filters.domains)) {
      return false;
    }

    const contentType = entry.contentType ?? entry.type;
    if (filters.contentTypes.length && !matchesFilter(contentType, filters.contentTypes)) {
      return false;
    }

    if (filters.tags.length && !matchesTagFilter(entry.tags, filters.tags)) {
      return false;
    }

    return true;
  });
}

export function buildAgentContextBundle(
  sources: AgentContextSource[],
  filters: Partial<AgentContextFilters> = {},
): AgentContextBundle {
  const normalizedFilters = normalizeFilters(filters);
  const selectedSources = normalizedFilters.projectSlugs.length
    ? sources.filter((source) => normalizedFilters.projectSlugs.includes(source.slug))
    : sources;

  if (normalizedFilters.projectSlugs.length && selectedSources.length === 0) {
    throw new Error(
      `No projects matched the requested filter: ${normalizedFilters.projectSlugs.join(", ")}`,
    );
  }

  const docs: AgentContextDocument[] = [];
  const projects = selectedSources.map((source) => {
    const selectedEntries = selectEntries(source, normalizedFilters);
    docs.push(...selectedEntries.map((entry) => toDocument(source, entry)));
    return sourceSummary(source, selectedEntries);
  });

  const sections = categoryDefinitions
    .map((definition) => {
      const entries = docs.filter((doc) => doc.category === definition.key);
      if (!entries.length) {
        return null;
      }

      return {
        key: definition.key,
        title: definition.title,
        description: definition.description,
        entries,
      } satisfies AgentContextSection;
    })
    .filter((section): section is AgentContextSection => Boolean(section));

  return {
    version: 1,
    filters: normalizedFilters,
    projects,
    sections,
    entries: docs,
  };
}

export function buildAgentContextMarkdown(bundle: AgentContextBundle) {
  const lines: string[] = [
    "# SourceFrame Agent Context Bundle",
    "",
    "Deterministic build context generated from the current content registry.",
    "",
    "## Filters",
    "",
    `- Projects: ${bundle.filters.projectSlugs.length ? bundle.filters.projectSlugs.join(", ") : "all"}`,
    `- Domains: ${bundle.filters.domains.length ? bundle.filters.domains.join(", ") : "all"}`,
    `- Content types: ${
      bundle.filters.contentTypes.length ? bundle.filters.contentTypes.join(", ") : "all"
    }`,
    `- Tags: ${bundle.filters.tags.length ? bundle.filters.tags.join(", ") : "all"}`,
    "",
    "## Projects",
    "",
  ];

  for (const project of bundle.projects) {
    lines.push(
      `### ${project.name}`,
      "",
      `- Slug: \`${project.slug}\``,
      `- Route base: \`${project.routeBase || "/"}\``,
      `- Content root: \`${project.contentRoot}\``,
      `- Domains: ${project.domainKeys.length ? project.domainKeys.join(", ") : "none"}`,
      `- Selected entries: ${project.entryCount}`,
      "",
    );

    if (project.domains.length) {
      lines.push("| Domain | Route | Sections |", "| --- | --- | --- |");
      for (const domain of project.domains) {
        lines.push(`| ${domain.title} | \`${domain.href}\` | ${domain.sectionCount} |`);
      }
      lines.push("");
    }
  }

  for (const section of bundle.sections) {
    lines.push(`## ${section.title}`, "", section.description, "");

    const byProject = new Map<string, AgentContextDocument[]>();
    for (const entry of section.entries) {
      const current = byProject.get(entry.projectSlug) ?? [];
      current.push(entry);
      byProject.set(entry.projectSlug, current);
    }

    for (const project of bundle.projects) {
      const projectEntries = byProject.get(project.slug) ?? [];
      if (!projectEntries.length) {
        continue;
      }

      lines.push(`### ${project.name}`, "");
      for (const entry of projectEntries) {
        const sourceLink = path.posix.relative("generated", entry.sourcePath);
        const summary = entry.summary ? ` - ${entry.summary}` : "";
        const metadata = [
          entry.contentType ? `contentType: \`${entry.contentType}\`` : null,
          entry.status ? `status: \`${entry.status}\`` : null,
          entry.owner ? `owner: \`${entry.owner}\`` : null,
        ]
          .filter(Boolean)
          .join(", ");
        lines.push(
          `- [${entry.title}](${entry.href}) — route: \`${entry.route}\` — source: \`${sourceLink}\`${metadata ? ` — ${metadata}` : ""}${summary}`,
        );
      }
      lines.push("");
    }
  }

  if (!bundle.sections.length) {
    lines.push("_No entries matched the current filters._", "");
  }

  lines.push("## Usage", "", "### Codex", "");
  lines.push(
    "Use this bundle as build context for Codex by attaching `generated/agent-context.md` and, when needed, `generated/agent-context.json`.",
  );
  lines.push(
    "If you only need a slice, regenerate with `pnpm generate:agent-context -- --project <slug> --domain <domain> --contentType <type> --tag <tag>`.",
  );
  lines.push("", "### Claude Code", "");
  lines.push(
    "Use the Markdown bundle as a briefing document and the JSON bundle for structured tooling or follow-up scripts.",
  );
  lines.push(
    "For focused sessions, regenerate with the same filters and paste the relevant section into Claude Code.",
  );

  return lines.join("\n");
}
