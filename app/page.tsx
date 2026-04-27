import { SiteChrome } from "@/components/layout/SiteChrome";
import { HomeView } from "@/components/layout/HomeView";
import { buildProjectRuntime, getDefaultProject } from "@/lib/projects/catalog";

export default function Page() {
  const project = getDefaultProject();
  const runtime = buildProjectRuntime(project, "root");
  const registry = runtime.registry;
  const entry = registry.rootEntry;

  if (!entry) {
    throw new Error("Missing root site index content.");
  }

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
      <HomeView entry={entry} domains={registry.domainTabs} contentRegistry={registry} />
    </SiteChrome>
  );
}
