import { notFound } from "next/navigation";

import { ArchiveView } from "@/components/layout/ArchiveView";
import { SiteChrome } from "@/components/layout/SiteChrome";
import { buildProjectRuntime, getProjectBySlug, getProjectCatalog } from "@/lib/projects/catalog";

export function generateStaticParams() {
  return getProjectCatalog().flatMap((project) => {
    const runtime = buildProjectRuntime(project, "project");
    return runtime.registry.domainTabs.map((domain) => ({
      projectSlug: project.slug,
      domain: domain.key,
    }));
  });
}

export default async function ProjectDomainArchivePage({
  params,
}: {
  params: Promise<{ projectSlug: string; domain: string }>;
}) {
  const { projectSlug, domain } = await params;
  const project = getProjectBySlug(projectSlug);

  if (!project) {
    notFound();
  }

  const runtime = buildProjectRuntime(project, "project");
  const domainEntry = runtime.registry.domainTabs.find((item) => item.key === domain);

  if (!domainEntry) {
    notFound();
  }

  const entries = runtime.registry.entries.filter((entry) => entry.domain === domainEntry.key);

  if (!entries.length) {
    notFound();
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
      <ArchiveView
        title={`${domainEntry.title} archive`}
        eyebrow={domainEntry.eyebrow ?? domainEntry.title}
        description={domainEntry.description}
        entries={entries}
        archiveHref={runtime.archiveHref}
        contentRegistry={runtime.registry}
      />
    </SiteChrome>
  );
}
