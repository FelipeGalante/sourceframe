import { SiteChrome } from "@/components/layout/SiteChrome";
import { notFound } from "next/navigation";

import { ArchiveView } from "@/components/layout/ArchiveView";
import { getDomainArchiveEntries, getDomainEntry, getVisibleDomainTabs } from "@/lib/content";
import { buildProjectRuntime, getDefaultProject } from "@/lib/projects/catalog";

export function generateStaticParams() {
  return getVisibleDomainTabs().map((domain) => ({
    domain: domain.key,
  }));
}

export default async function DomainArchivePage({
  params,
}: {
  params: Promise<{ domain: string }>;
}) {
  const { domain } = await params;
  const domainEntry = getDomainEntry(domain);

  if (!domainEntry) {
    notFound();
  }

  const entries = getDomainArchiveEntries(domainEntry.key);
  if (!entries.length) {
    notFound();
  }

  const project = getDefaultProject();
  const runtime = buildProjectRuntime(project, "root");

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
