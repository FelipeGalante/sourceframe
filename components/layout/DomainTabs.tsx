import React from "react";
import Link from "next/link";

import type { DomainNavItem } from "@/lib/content";
import { VisibilityBadge } from "./VisibilityBadge";

export function DomainTabs({
  domains,
  activeDomain,
}: {
  domains: DomainNavItem[];
  activeDomain: string;
}) {
  return (
    <nav className="pm-domain-tabs" aria-label="Project domains">
      {domains.map((domain) => (
        <Link
          key={domain.key}
          href={domain.href}
          className="pm-domain-tab"
          aria-current={domain.key === activeDomain ? "page" : undefined}
          data-active={domain.key === activeDomain}
        >
          <span>{domain.title}</span>
          <span className="pm-domain-tab-count">{domain.sectionCount}</span>
          <VisibilityBadge visibility={domain.visibility} />
        </Link>
      ))}
    </nav>
  );
}
