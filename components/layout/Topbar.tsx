import Link from "next/link";

import type { DomainNavItem, SearchRecord } from "@/lib/content";
import type { SiteConfig } from "@/lib/site-config";
import type { ProjectSwitcherItem } from "@/lib/projects/catalog";

import { DomainTabs } from "./DomainTabs";
import { ProjectSwitcher } from "./ProjectSwitcher";
import { SearchBox } from "./SearchBox";

export function Topbar({
  domains,
  searchIndex,
  config,
  activeDomain,
  homeHref,
  archiveHref,
  projects,
}: {
  domains: DomainNavItem[];
  searchIndex: SearchRecord[];
  config: SiteConfig;
  activeDomain: string;
  homeHref: string;
  archiveHref: string;
  projects: ProjectSwitcherItem[];
}) {
  return (
    <header className="pm-topbar">
      <div className="pm-topbar-inner">
        <Link href={homeHref} className="pm-brand" aria-label={`${config.name} home`}>
          <span className="pm-brand-mark" aria-hidden="true" />
          <span className="pm-brand-text">
            <span className="pm-brand-name">{config.name}</span>
            <span className="pm-brand-subtitle">{config.subtitle}</span>
          </span>
        </Link>

        <div className="pm-topbar-main">
          <ProjectSwitcher projects={projects} />
          <DomainTabs domains={domains} activeDomain={activeDomain} />
        </div>

        <div className="pm-topbar-actions">
          <SearchBox records={searchIndex} />
          <Link href={archiveHref} className="pm-action-button">
            Full archive
          </Link>
        </div>
      </div>
    </header>
  );
}
