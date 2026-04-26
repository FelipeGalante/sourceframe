import { notFound } from "next/navigation";

import { ContentRenderer } from "@/components/markdown/ContentRenderer";
import { SectionLayout } from "@/components/layout/SectionLayout";
import { SchemaDomainIndex } from "@/components/schema/SchemaDomainIndex";
import { RelationshipMap } from "@/components/schema/RelationshipMap";
import { SchemaTableCard } from "@/components/schema/SchemaTableCard";
import {
  getChildren,
  getContentEntry,
  getContentRegistry,
  getDomainEntry,
  getSectionRoute,
} from "@/lib/content";
import { buildSchemaCatalog } from "@/lib/schema-docs/loader";

export function generateStaticParams() {
  return getContentRegistry()
    .entries.filter((entry) => entry.route !== "/")
    .map((entry) => ({
      slug: entry.route.replace(/^\//, "").split("/"),
    }));
}

export default async function ContentPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const route = `/${slug.join("/")}`;
  const entry = getContentEntry(route);

  if (!entry) {
    notFound();
  }

  if (!entry.domain) {
    return (
      <section className="pm-card pm-content-card">
        <div className="pm-content-body">
          <ContentRenderer
            format={entry.format}
            markdown={entry.body}
            sourceRelativePath={entry.relativePath}
          />
        </div>
      </section>
    );
  }

  const domainEntry = getDomainEntry(entry.domain);
  if (!domainEntry) {
    notFound();
  }

  const registry = getContentRegistry();
  const schemaDocument = entry.schema
    ? {
        route: entry.route,
        href: entry.href,
        relativePath: entry.relativePath,
        sourcePath: entry.schemaSource ?? entry.relativePath,
        sourceFormat: entry.schemaSourceFormat ?? "frontmatter",
        definition: entry.schema,
      }
    : null;
  const schemaCatalog = buildSchemaCatalog(
    registry.entries,
    new Map(registry.domainTabs.map((domain) => [domain.key, domain.title])),
  );
  const sections = getChildren(domainEntry.href).filter((section) => section.type !== "site-index");

  return (
    <SectionLayout
      entry={entry}
      domainTitle={domainEntry.title}
      domainDescription={domainEntry.description}
      domainEyebrow={domainEntry.eyebrow}
      archiveHref={`${domainEntry.href}/archive`}
      sections={sections.map((section) => ({
        key: section.route,
        title: section.title,
        navLabel: section.navLabel,
        order: section.order ?? 0,
        href: section.href,
        type: section.type,
      }))}
      activeSectionRoute={getSectionRoute(entry)}
    >
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
      <section className="pm-card pm-content-card">
        <div className="pm-content-body">
          <ContentRenderer
            format={entry.format}
            markdown={entry.body}
            sourceRelativePath={entry.relativePath}
          />
        </div>
      </section>
    </SectionLayout>
  );
}
