import { notFound } from "next/navigation";

import { ContentRouteView } from "@/components/layout/ContentRouteView";
import { SiteChrome } from "@/components/layout/SiteChrome";
import { ContentRenderer } from "@/components/markdown/ContentRenderer";
import { buildProjectRuntime, getProjectBySlug, getProjectCatalog } from "@/lib/projects/catalog";

export function generateStaticParams() {
  return getProjectCatalog().flatMap((project) => {
    const runtime = buildProjectRuntime(project, "project");
    return runtime.registry.entries
      .filter((entry) => entry.route !== "/")
      .map((entry) => ({
        projectSlug: project.slug,
        slug: entry.route.replace(/^\//, "").split("/"),
      }));
  });
}

export default async function ProjectContentPage({
  params,
}: {
  params: Promise<{ projectSlug: string; slug?: string[] }>;
}) {
  const { projectSlug, slug = [] } = await params;
  const project = getProjectBySlug(projectSlug);

  if (!project) {
    notFound();
  }

  const runtime = buildProjectRuntime(project, "project");
  const route = `/${slug.join("/")}`;
  const entry = runtime.registry.entryByRoute.get(route);

  if (!entry) {
    notFound();
  }

  if (!entry.domain) {
    return (
      <SiteChrome
        domains={runtime.registry.domainTabs}
        searchIndex={runtime.registry.searchIndex}
        config={runtime.registry.siteConfig}
        homeHref={runtime.homeHref}
        archiveHref={runtime.archiveHref}
        projects={runtime.projectSwitcher}
        routeBase={runtime.routeBase}
        themeAccent={project.themeAccent}
      >
        <section className="pm-card pm-content-card">
          <div className="pm-content-body">
            <ContentRenderer
              format={entry.format}
              markdown={entry.body}
              sourceRelativePath={entry.relativePath}
              contentRegistry={runtime.registry}
            />
          </div>
        </section>
      </SiteChrome>
    );
  }

  const domainEntry = runtime.registry.domainTabs.find((item) => item.key === entry.domain);

  if (!domainEntry) {
    notFound();
  }

  const domainRoute = domainEntry.href.slice(runtime.routeBase.length) || "/";
  const sections = (runtime.registry.childrenByRoute.get(domainRoute) ?? []).filter(
    (section) => section.type !== "site-index",
  );

  return (
    <SiteChrome
      domains={runtime.registry.domainTabs}
      searchIndex={runtime.registry.searchIndex}
      config={runtime.registry.siteConfig}
      homeHref={runtime.homeHref}
      archiveHref={runtime.archiveHref}
      projects={runtime.projectSwitcher}
      routeBase={runtime.routeBase}
      themeAccent={project.themeAccent}
    >
      <ContentRouteView
        entry={entry}
        registry={runtime.registry}
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
