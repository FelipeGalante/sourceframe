import { buildContentRegistry } from "@/lib/content";

import { projectCatalog } from "@/projects.config";

import type { ContentRegistry } from "@/lib/content";
import type { ProjectConfig } from "./types";

export type ProjectSwitcherItem = {
  slug: string;
  title: string;
  subtitle: string;
  href: string;
  active: boolean;
};

export type ProjectRuntime = {
  project: ProjectConfig;
  registry: ContentRegistry;
  routeBase: string;
  homeHref: string;
  archiveHref: string;
  projectSwitcher: ProjectSwitcherItem[];
};

const registryCache = new Map<string, ContentRegistry>();

export function getProjectCatalog() {
  return projectCatalog;
}

export function getDefaultProject() {
  return projectCatalog[0];
}

export function getProjectBySlug(slug: string) {
  return projectCatalog.find((project) => project.slug === slug);
}

export function getProjectRouteBase(project: ProjectConfig, mode: "root" | "project") {
  return mode === "project" ? `/projects/${project.slug}` : "";
}

export function getProjectHomeHref(project: ProjectConfig, mode: "root" | "project") {
  const routeBase = getProjectRouteBase(project, mode);
  return routeBase || "/";
}

export function getProjectArchiveHref(project: ProjectConfig, mode: "root" | "project") {
  const routeBase = getProjectRouteBase(project, mode);
  return routeBase ? `${routeBase}/full-archive` : "/full-archive";
}

export function getProjectSwitcherItems(
  activeProjectSlug: string,
  mode: "root" | "project",
): ProjectSwitcherItem[] {
  return projectCatalog.map((project) => ({
    slug: project.slug,
    title: project.siteConfig.name,
    subtitle: project.siteConfig.subtitle,
    href:
      mode === "project"
        ? `/projects/${project.slug}`
        : project.slug === activeProjectSlug
          ? "/"
          : `/projects/${project.slug}`,
    active: project.slug === activeProjectSlug,
  }));
}

export function buildProjectRegistry(project: ProjectConfig, mode: "root" | "project") {
  const routeBase = getProjectRouteBase(project, mode);
  const cacheKey = `${project.slug}:${routeBase}`;
  const cached = registryCache.get(cacheKey);
  if (cached) {
    return cached;
  }

  const registry = buildContentRegistry({
    rootDir: project.contentRoot,
    siteConfig: project.siteConfig,
    routeBase,
  });
  registryCache.set(cacheKey, registry);
  return registry;
}

export function buildProjectRuntime(
  project: ProjectConfig,
  mode: "root" | "project",
): ProjectRuntime {
  const routeBase = getProjectRouteBase(project, mode);
  const registry = buildProjectRegistry(project, mode);

  return {
    project,
    registry,
    routeBase,
    homeHref: getProjectHomeHref(project, mode),
    archiveHref: getProjectArchiveHref(project, mode),
    projectSwitcher: getProjectSwitcherItems(project.slug, mode),
  };
}
