import { notFound } from "next/navigation";

import { SiteChrome } from "@/components/layout/SiteChrome";
import { ContentRouteView } from "@/components/layout/ContentRouteView";
import { ContentRenderer } from "@/components/markdown/ContentRenderer";
import { getChildren, getContentEntry, getContentRegistry, getDomainEntry } from "@/lib/content";
import { buildProjectRuntime, getDefaultProject } from "@/lib/projects/catalog";

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
  const project = getDefaultProject();
  const runtime = buildProjectRuntime(project, "root");
  const registry = runtime.registry;
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
            contentRegistry={registry}
          />
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
    <SiteChrome
      domains={registry.domainTabs}
      searchIndex={registry.searchIndex}
      config={registry.siteConfig}
      homeHref={runtime.homeHref}
      archiveHref={runtime.archiveHref}
      projects={runtime.projectSwitcher}
      routeBase={runtime.routeBase}
      themeAccent={project.themeAccent}
    >
      <ContentRouteView
        entry={entry}
        registry={registry}
        domainEntry={domainEntry}
        sections={sections.map((section) => ({
          key: section.route,
          title: section.title,
          navLabel: section.navLabel,
          order: section.order ?? 0,
          href: section.href,
          type: section.type,
        }))}
        archiveHref={`${domainEntry.href}/archive`}
        activeSectionRoute={entry.href}
      />
    </SiteChrome>
  );
}
