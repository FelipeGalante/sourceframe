import { ArchiveIndex, ArchiveNotice, SourceProvenance } from "@/components/archive";
import { DecisionIndex, DecisionRecord } from "@/components/decision";
import { EndpointCard, EndpointTable } from "@/components/api";
import { ChangelogIndex, ReleaseNoteIndex, StaleContentWarning } from "@/components/lifecycle";
import { ContentRenderer } from "@/components/markdown/ContentRenderer";
import { ProductTemplate } from "@/components/product";
import { RelationshipMap } from "@/components/schema/RelationshipMap";
import { SchemaDomainIndex } from "@/components/schema/SchemaDomainIndex";
import { SchemaTableCard } from "@/components/schema/SchemaTableCard";
import { SectionLayout } from "@/components/layout/SectionLayout";
import { buildDecisionCatalog } from "@/lib/decision-docs";
import { buildSchemaCatalog } from "@/lib/schema-docs/loader";
import { getStaleContentState } from "@/lib/content";
import type { ContentEntry, ContentRegistry, SectionNavItem } from "@/lib/content";

function buildSchemaDocument(entry: ContentEntry) {
  return entry.schema
    ? {
        route: entry.route,
        href: entry.href,
        relativePath: entry.relativePath,
        sourcePath: entry.schemaSource ?? entry.relativePath,
        sourceFormat: entry.schemaSourceFormat ?? "frontmatter",
        definition: entry.schema,
      }
    : null;
}

export function ContentRouteView({
  entry,
  registry,
  domainEntry,
  sections,
  archiveHref,
  activeSectionRoute,
}: {
  entry: ContentEntry;
  registry: ContentRegistry;
  domainEntry: { title: string; description?: string; eyebrow?: string; href: string; key: string };
  sections: SectionNavItem[];
  archiveHref: string;
  activeSectionRoute: string;
}) {
  const schemaDocument = buildSchemaDocument(entry);
  const apiDefinition = entry.api ?? null;
  const staleState = getStaleContentState(entry);
  const decisionCatalog = buildDecisionCatalog(
    registry.entries,
    new Map(registry.domainTabs.map((domain) => [domain.key, domain.title])),
  );
  const schemaCatalog = buildSchemaCatalog(
    registry.entries,
    new Map(registry.domainTabs.map((domain) => [domain.key, domain.title])),
  );

  return (
    <SectionLayout
      entry={entry}
      domainTitle={domainEntry.title}
      domainDescription={domainEntry.description}
      domainEyebrow={domainEntry.eyebrow}
      archiveHref={archiveHref}
      sections={sections}
      activeSectionRoute={activeSectionRoute}
    >
      {staleState.isStale ? (
        <StaleContentWarning entry={entry} reason={staleState.reason ?? "review-due"} />
      ) : null}
      {entry.route === "/about/archive" ? <ArchiveIndex entries={registry.entries} /> : null}
      {entry.route === "/about/changelog" ? <ChangelogIndex entries={registry.entries} /> : null}
      {entry.route === "/about/releases" ? <ReleaseNoteIndex entries={registry.entries} /> : null}
      {(entry.route === "/about/decisions" || entry.contentType === "decision-log") &&
      decisionCatalog.length ? (
        <DecisionIndex groups={decisionCatalog} />
      ) : null}
      {entry.decision ? <DecisionRecord entry={entry} /> : null}
      {entry.product ? <ProductTemplate entry={entry} /> : null}
      {apiDefinition ? (
        <section className="pm-card pm-content-card pm-api-summary-card">
          <div className="pm-content-body">
            <div className="pm-kicker">API reference</div>
            <h2 className="pm-title pm-title-lg">{entry.title}</h2>
            {entry.summary ? <p className="pm-subtitle">{entry.summary}</p> : null}
            {apiDefinition.title ? <p className="pm-subtitle">{apiDefinition.title}</p> : null}
            {apiDefinition.description ? (
              <p className="pm-subtitle">{apiDefinition.description}</p>
            ) : null}
            <EndpointTable endpoints={apiDefinition.endpoints} />
            <div className="pm-endpoint-grid">
              {apiDefinition.endpoints.map((endpoint) => (
                <EndpointCard
                  key={`${endpoint.group}:${endpoint.method}:${endpoint.path}`}
                  endpoint={endpoint}
                />
              ))}
            </div>
          </div>
        </section>
      ) : null}
      {entry.route === "/technology/database" ||
      (entry.type === "section-index" && entry.section === "database") ? (
        <SchemaDomainIndex groups={schemaCatalog} />
      ) : null}
      {entry.type === "database-table" && schemaDocument ? (
        <SchemaTableCard document={schemaDocument} />
      ) : null}
      {entry.type === "database-relationships" && schemaDocument ? (
        <section className="pm-card pm-content-card">
          <div className="pm-content-body">
            <div className="pm-kicker">Relationships</div>
            <h2 className="pm-title pm-title-lg">{entry.title}</h2>
            {entry.description ? <p className="pm-subtitle">{entry.description}</p> : null}
            <RelationshipMap relationships={schemaDocument.definition.relationships} />
          </div>
        </section>
      ) : null}
      {entry.contentType === "source-archive" ? (
        <section className="pm-card pm-content-card pm-archive-card">
          <div className="pm-content-body">
            <ArchiveNotice entry={entry} />
            <SourceProvenance entry={entry} />
            <ContentRenderer
              format={entry.format}
              markdown={entry.body}
              sourceRelativePath={entry.relativePath}
              contentRegistry={registry}
              archiveMode
            />
          </div>
        </section>
      ) : null}
      {entry.contentType !== "source-archive" ? (
        <section className="pm-card pm-content-card">
          <div className="pm-content-body">
            <ContentRenderer
              format={entry.format}
              markdown={entry.body}
              sourceRelativePath={entry.relativePath}
              contentRegistry={registry}
            />
          </div>
        </section>
      ) : null}
    </SectionLayout>
  );
}
