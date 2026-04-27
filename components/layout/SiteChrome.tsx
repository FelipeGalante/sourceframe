"use client";

import { usePathname } from "next/navigation";
import type { CSSProperties, ReactNode } from "react";

import type { DomainNavItem, SearchRecord } from "@/lib/content";
import type { SiteConfig } from "@/lib/site-config";
import type { ProjectSwitcherItem } from "@/lib/projects/catalog";

import { Topbar } from "./Topbar";

export function SiteChrome({
  domains,
  searchIndex,
  config,
  homeHref,
  archiveHref,
  projects,
  routeBase,
  themeAccent,
  children,
}: {
  domains: DomainNavItem[];
  searchIndex: SearchRecord[];
  config: SiteConfig;
  homeHref: string;
  archiveHref: string;
  projects: ProjectSwitcherItem[];
  routeBase: string;
  themeAccent?: string;
  children: ReactNode;
}) {
  const pathname = usePathname();
  const basePath = routeBase === "/" ? "" : routeBase;
  const relativePath =
    basePath && pathname.startsWith(basePath) ? pathname.slice(basePath.length) || "/" : pathname;
  const segments = relativePath.split("/").filter(Boolean);
  const activeDomain =
    !segments.length ||
    segments[0] === "full-archive" ||
    segments[segments.length - 1] === "archive"
      ? config.defaultDomain
      : segments[0];

  return (
    <div
      className="pm-page"
      style={themeAccent ? ({ "--pm-accent": themeAccent } as CSSProperties) : undefined}
    >
      <Topbar
        domains={domains}
        searchIndex={searchIndex}
        config={config}
        activeDomain={activeDomain}
        homeHref={homeHref}
        archiveHref={archiveHref}
        projects={projects}
      />
      <main className="pm-shell">{children}</main>
    </div>
  );
}
