import { notFound } from "next/navigation";

import { SectionLayout } from "@/components/layout/SectionLayout";
import { getChildren, getContentEntry, getContentRegistry, getDomainEntry, getSectionRoute } from "@/lib/content";
import { MarkdownRenderer } from "@/lib/markdown";

export function generateStaticParams() {
  return getContentRegistry().entries
    .filter((entry) => entry.route !== "/")
    .map((entry) => ({
      slug: entry.route.replace(/^\//, "").split("/"),
    }));
}

export default async function ContentPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
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
          <MarkdownRenderer markdown={entry.body} sourceRelativePath={entry.relativePath} />
        </div>
      </section>
    );
  }

  const domainEntry = getDomainEntry(entry.domain);
  if (!domainEntry) {
    notFound();
  }

  const sections = getChildren(domainEntry.href).filter((section) => section.type !== "site-index");

  return (
    <SectionLayout
      entry={entry}
      domainTitle={domainEntry.title}
      domainDescription={domainEntry.description}
      domainEyebrow={domainEntry.eyebrow}
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
      <section className="pm-card pm-content-card">
        <div className="pm-content-body">
          <MarkdownRenderer markdown={entry.body} sourceRelativePath={entry.relativePath} />
        </div>
      </section>
    </SectionLayout>
  );
}
