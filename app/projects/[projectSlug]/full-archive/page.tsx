import { notFound } from "next/navigation";

import { ArchiveView } from "@/components/layout/ArchiveView";
import { SiteChrome } from "@/components/layout/SiteChrome";
import { buildProjectRuntime, getProjectBySlug, getProjectCatalog } from "@/lib/projects/catalog";

export function generateStaticParams() {
  return getProjectCatalog().map((project) => ({
    projectSlug: project.slug,
  }));
}

export default async function ProjectFullArchivePage({
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
  const entries = runtime.registry.entries;

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
      <ArchiveView
        title={`${project.siteConfig.name} archive`}
        entries={entries}
        contentRegistry={runtime.registry}
      />
    </SiteChrome>
  );
}
