import Link from "next/link";
import React from "react";

import type { DecisionRelatedPage } from "@/lib/decision-docs";

function isExternalHref(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

export function RelatedDecisionLinks({
  relatedPages,
  supersedes = [],
  supersededBy = [],
}: {
  relatedPages: DecisionRelatedPage[];
  supersedes?: string[];
  supersededBy?: string[];
}) {
  const items = [
    ...relatedPages.map((page) => ({
      key: `related:${page.href}`,
      label: page.title ?? page.href,
      href: page.href,
    })),
    ...supersedes.map((href) => ({ key: `supersedes:${href}`, label: `Supersedes ${href}`, href })),
    ...supersededBy.map((href) => ({
      key: `supersededBy:${href}`,
      label: `Superseded by ${href}`,
      href,
    })),
  ];

  if (!items.length) {
    return null;
  }

  return (
    <section className="pm-decision-links">
      <div className="pm-api-section-title">Related links</div>
      <ul className="pm-schema-list">
        {items.map((item) => (
          <li key={item.key}>
            {isExternalHref(item.href) ? (
              <a className="pm-schema-link" href={item.href}>
                <span className="pm-schema-list-label">{item.label}</span>
                <span className="pm-schema-list-meta">{item.href}</span>
              </a>
            ) : (
              <Link href={item.href} className="pm-schema-link">
                <span className="pm-schema-list-label">{item.label}</span>
                <span className="pm-schema-list-meta">{item.href}</span>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
