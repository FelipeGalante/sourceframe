import React from "react";
import Link from "next/link";
import type { ReactNode } from "react";

import type { ContentEntry, SectionNavItem } from "@/lib/content";

function sourcePills(entry: ContentEntry) {
  const pills: Array<{ label: string; value: string }> = [];

  if (entry.type) {
    pills.push({ label: "Type", value: entry.type.replace(/-/g, " ") });
  }
  if (entry.order !== undefined) {
    pills.push({ label: "Order", value: String(entry.order) });
  }
  if (entry.version) {
    pills.push({ label: "Version", value: entry.version });
  }
  if (entry.sourcePanel) {
    pills.push({ label: "Source panel", value: entry.sourcePanel });
  }
  if (entry.databaseDomain) {
    pills.push({ label: "Database domain", value: entry.databaseDomain });
  }
  if (entry.tableName) {
    pills.push({ label: "Table", value: entry.tableName });
  }
  if (entry.updated) {
    pills.push({ label: "Updated", value: entry.updated });
  }
  if (entry.lastReviewed) {
    pills.push({ label: "Reviewed", value: entry.lastReviewed });
  }
  if (entry.reviewAfter) {
    pills.push({ label: "Review after", value: entry.reviewAfter });
  }
  if (entry.deprecatedSince) {
    pills.push({ label: "Deprecated", value: entry.deprecatedSince });
  }

  return pills;
}

export function SectionLayout({
  entry,
  domainTitle,
  domainDescription,
  domainEyebrow,
  archiveHref,
  sections,
  activeSectionRoute,
  children,
}: {
  entry: ContentEntry;
  domainTitle: string;
  domainDescription?: string;
  domainEyebrow?: string;
  archiveHref?: string;
  sections: SectionNavItem[];
  activeSectionRoute: string;
  children?: ReactNode;
}) {
  const pills = sourcePills(entry);

  return (
    <div className="pm-page-grid">
      <aside className="pm-domain-panel">
        <div className="pm-domain-card">
          <div className="pm-kicker">{domainEyebrow ?? "Source of truth"}</div>
          <h1 className="pm-title pm-title-lg">{domainTitle}</h1>
          {domainDescription ? <p className="pm-subtitle">{domainDescription}</p> : null}
          <div className="pm-meta-row">
            {pills.map((pill) => (
              <span key={`${pill.label}:${pill.value}`} className="pm-pill">
                <strong>{pill.label}:</strong> {pill.value}
              </span>
            ))}
          </div>
          {archiveHref ? (
            <Link href={archiveHref} className="pm-action-button pm-domain-archive-link">
              View archive
            </Link>
          ) : null}
          <nav className="pm-section-nav" aria-label={`${domainTitle} sections`}>
            {sections.map((section) => (
              <Link
                key={section.key}
                href={section.href}
                className="pm-section-link"
                aria-current={activeSectionRoute === section.href ? "page" : undefined}
                data-active={activeSectionRoute === section.href}
              >
                <span className="pm-section-link-title">
                  <span>{section.navLabel}</span>
                </span>
                <span className="pm-section-link-type">{section.type.replace(/-/g, " ")}</span>
              </Link>
            ))}
          </nav>
        </div>
      </aside>

      <div className="pm-content-stack">{children}</div>
    </div>
  );
}
