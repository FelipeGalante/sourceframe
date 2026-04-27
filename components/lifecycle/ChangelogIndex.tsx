import React from "react";
import Link from "next/link";

import type { ContentEntry } from "@/lib/content";

export function ChangelogIndex({ entries }: { entries: ContentEntry[] }) {
  const changelogEntries = entries.filter((entry) => entry.contentType === "changelog");

  if (!changelogEntries.length) {
    return null;
  }

  return (
    <section className="pm-card pm-content-card pm-lifecycle-index">
      <div className="pm-content-body">
        <div className="pm-kicker">Changelog</div>
        <h2 className="pm-title pm-title-lg">Change history</h2>
        <div className="pm-lifecycle-grid">
          {changelogEntries.map((entry) => (
            <article key={entry.href} className="pm-lifecycle-card">
              <div className="pm-schema-domain-head">
                <strong>{entry.title}</strong>
                <span>{entry.version ?? entry.updated ?? entry.status ?? "changelog"}</span>
              </div>
              {entry.summary ? <p className="pm-subtitle">{entry.summary}</p> : null}
              <div className="pm-meta-row">
                {entry.updated ? (
                  <span className="pm-pill">
                    <strong>Updated:</strong> {entry.updated}
                  </span>
                ) : null}
                {entry.lastReviewed ? (
                  <span className="pm-pill">
                    <strong>Reviewed:</strong> {entry.lastReviewed}
                  </span>
                ) : null}
              </div>
              <Link href={entry.href} className="pm-schema-link">
                <span className="pm-schema-list-label">Open changelog entry</span>
                <span className="pm-schema-list-meta">→</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
