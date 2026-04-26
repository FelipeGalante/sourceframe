import Link from "next/link";

import type { DomainNavItem, SearchRecord } from "@/lib/content";
import type { SiteConfig } from "@/site.config";

import { DomainTabs } from "./DomainTabs";
import { SearchBox } from "./SearchBox";

export function Topbar({
  domains,
  searchIndex,
  config,
  activeDomain,
}: {
  domains: DomainNavItem[];
  searchIndex: SearchRecord[];
  config: SiteConfig;
  activeDomain: string;
}) {
  return (
    <header className="pm-topbar">
      <div className="pm-topbar-inner">
        <Link href="/" className="pm-brand" aria-label={`${config.name} home`}>
          <span className="pm-brand-mark" aria-hidden="true" />
          <span className="pm-brand-text">
            <span className="pm-brand-name">{config.name}</span>
            <span className="pm-brand-subtitle">{config.subtitle}</span>
          </span>
        </Link>

        <div className="pm-topbar-main">
          <DomainTabs domains={domains} activeDomain={activeDomain} />
        </div>

        <div className="pm-topbar-actions">
          <SearchBox records={searchIndex} />
          <Link href="/full-archive" className="pm-action-button">
            Full archive
          </Link>
        </div>
      </div>
    </header>
  );
}
