import type { ContentEntry, ContentRegistry } from "./types";

export const migrationSourceFile =
  "PathMerit_Domain_Navigation_Source_of_Truth_DATABASE_REWORKED_CLEAN_COLUMNS.html";

export const migrationSourceSha256 =
  "d68a20b397084fd28eae3406958a5323dc1c9dfbc29ce35164ca573d7176d175";

export type ContentManifestSection = {
  key: string;
  title: string;
  nav_label: string;
  order: number;
  panel_id?: string;
  path: string;
};

export type ContentManifestDomain = {
  key: string;
  title: string;
  description?: string;
  order: number;
  sections: ContentManifestSection[];
};

export type ContentManifest = {
  source_file: string;
  source_sha256: string;
  extracted_at_note: string;
  domains: ContentManifestDomain[];
};

export type DatabaseTableManifestEntry = {
  table_name: string;
  database_domain: string;
  kicker?: string;
  description?: string;
  path: string;
};

function getSectionKey(entry: ContentEntry) {
  return entry.slugSegments.at(-1) ?? entry.section ?? entry.navLabel;
}

function getManifestPath(prefix: string, entry: ContentEntry) {
  return `${prefix}${entry.relativePath}`;
}

function isPublicEntry(entry: ContentEntry) {
  return entry.frontmatter.visibility !== "internal";
}

function getDomainSectionEntries(registry: ContentRegistry, domainKey: string) {
  const domain = registry.domainTabs.find((entry) => entry.key === domainKey);
  if (!domain) {
    return [];
  }

  return domain.sections
    .map((section) => registry.entryByRoute.get(section.href))
    .filter((entry): entry is ContentEntry => Boolean(entry));
}

export function buildContentManifest(
  registry: ContentRegistry,
  options: { pathPrefix?: string } = {},
): ContentManifest {
  const pathPrefix = options.pathPrefix ?? "";
  const publicDomains = registry.domainTabs
    .map((domain) => ({
      ...domain,
      sections: domain.sections.filter((section) => {
        const entry = registry.entryByRoute.get(section.href);
        return entry ? isPublicEntry(entry) : false;
      }),
    }))
    .filter((domain) => domain.sections.length > 0);

  return {
    source_file: migrationSourceFile,
    source_sha256: migrationSourceSha256,
    extracted_at_note: "Generated from the public content registry and checked-in Markdown tree.",
    domains: publicDomains.map((domain) => ({
      key: domain.key,
      title: domain.title,
      description: domain.description,
      order: domain.order,
      sections: getDomainSectionEntries(registry, domain.key)
        .filter(isPublicEntry)
        .map((entry) => ({
          key: getSectionKey(entry),
          title: entry.title,
          nav_label: entry.navLabel,
          order: entry.order ?? 0,
          panel_id: entry.sourcePanel,
          path: getManifestPath(pathPrefix, entry),
        })),
    })),
  };
}

export function buildDatabaseTableManifest(
  registry: ContentRegistry,
  options: { pathPrefix?: string } = {},
): DatabaseTableManifestEntry[] {
  const pathPrefix = options.pathPrefix ?? "";

  return registry.entries
    .filter((entry) => entry.type === "database-table" && isPublicEntry(entry))
    .map((entry) => ({
      table_name: entry.tableName ?? entry.navLabel,
      database_domain: entry.databaseDomain ?? "",
      kicker: entry.kicker,
      description: entry.description,
      path: getManifestPath(pathPrefix, entry),
    }));
}

export function buildExtractionReport(
  registry: ContentRegistry,
  manifest: ContentManifest,
  databaseTableManifest: DatabaseTableManifestEntry[],
) {
  const totalContentFiles = registry.entries.length;
  const publicEntries = registry.entries.filter(isPublicEntry);
  const markdownFiles = publicEntries.filter((entry) => entry.format === "markdown").length;
  const mdxFiles = publicEntries.filter((entry) => entry.format === "mdx").length;
  const topLevelPanels = manifest.domains.reduce(
    (count, domain) => count + domain.sections.length,
    0,
  );

  return [
    "# Content Extraction Report",
    "",
    `Source file: \`${manifest.source_file}\``,
    "",
    `SHA-256: \`${manifest.source_sha256}\``,
    "",
    "## Extracted output",
    "",
    `- Total content files discovered: ${totalContentFiles}`,
    `- Public content files discovered: ${publicEntries.length}`,
    `- Markdown files discovered: ${markdownFiles}`,
    `- MDX files discovered: ${mdxFiles}`,
    `- Domains extracted: ${manifest.domains.length}`,
    `- Top-level content panels extracted: ${topLevelPanels}`,
    `- Database table files generated: ${databaseTableManifest.length}`,
    "",
    "## Domains",
    "",
    ...manifest.domains.map((domain) => `- ${domain.title} — ${domain.sections.length} sections`),
    "",
    "## Notes",
    "",
    "- The database panel is preserved as a full extraction and also split into table-level Markdown files.",
    "- Source Archive is preserved under `content/about/sources.md`.",
    "- Styling-specific HTML wrappers are not treated as source content; the renderer recreates styling generically.",
  ].join("\n");
}
