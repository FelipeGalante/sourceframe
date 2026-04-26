"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

import type { DomainNavItem, SearchRecord } from "@/lib/content";
import type { SiteConfig } from "@/lib/site-config";

import { Topbar } from "./Topbar";

export function SiteChrome({
  domains,
  searchIndex,
  config,
  children,
}: {
  domains: DomainNavItem[];
  searchIndex: SearchRecord[];
  config: SiteConfig;
  children: ReactNode;
}) {
  const pathname = usePathname();
  const activeDomain =
    pathname === "/" || pathname === "/full-archive"
      ? config.defaultDomain
      : (pathname.split("/").filter(Boolean)[0] ?? config.defaultDomain);

  return (
    <div className="pm-page">
      <Topbar
        domains={domains}
        searchIndex={searchIndex}
        config={config}
        activeDomain={activeDomain}
      />
      <main className="pm-shell">{children}</main>
    </div>
  );
}
