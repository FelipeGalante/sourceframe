import { notFound } from "next/navigation";

import { HomeView } from "@/components/layout/HomeView";
import { SiteChrome } from "@/components/layout/SiteChrome";
import { buildProjectRuntime, getProjectBySlug, getProjectCatalog } from "@/lib/projects/catalog";

export function generateStaticParams() {
  return getProjectCatalog().map((project) => ({
    projectSlug: project.slug,
  }));
}

export default async function ProjectHomePage({
  params,
}: {
  params: Promise<{ projectSlug: string }>;
}) {
  const { projectSlug } = await params;
  const project = getProjectBySlug(projectSlug);

  if (!project) {
    notFound();
  }

  const runtime = buildProjectRuntime(project, "project");
  const entry = runtime.registry.rootEntry;

  if (!entry) {
    throw new Error(`Missing root site index content for project "${project.slug}".`);
  }

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
      <HomeView
        entry={entry}
        domains={runtime.registry.domainTabs}
        contentRegistry={runtime.registry}
      />
    </SiteChrome>
  );
}
