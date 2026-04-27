import { SiteChrome } from "@/components/layout/SiteChrome";
import { ArchiveView } from "@/components/layout/ArchiveView";
import { getFullArchiveEntries } from "@/lib/content";
import { buildProjectRuntime, getDefaultProject } from "@/lib/projects/catalog";

export default function FullArchivePage() {
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
        title="Full archive"
        entries={getFullArchiveEntries()}
        contentRegistry={runtime.registry}
      />
    </SiteChrome>
  );
}
