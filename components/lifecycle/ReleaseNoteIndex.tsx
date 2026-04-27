import React from "react";
import Link from "next/link";

import type { ContentEntry } from "@/lib/content";

export function ReleaseNoteIndex({ entries }: { entries: ContentEntry[] }) {
  const releaseEntries = entries.filter((entry) => entry.contentType === "release-note");

  if (!releaseEntries.length) {
    return null;
  }

  return (
    <section className="pm-card pm-content-card pm-lifecycle-index">
      <div className="pm-content-body">
        <div className="pm-kicker">Release notes</div>
        <h2 className="pm-title pm-title-lg">Version updates</h2>
        <div className="pm-lifecycle-grid">
          {releaseEntries.map((entry) => (
            <article key={entry.href} className="pm-lifecycle-card">
              <div className="pm-schema-domain-head">
                <strong>{entry.title}</strong>
                <span>{entry.version ?? entry.updated ?? entry.status ?? "release note"}</span>
              </div>
              {entry.summary ? <p className="pm-subtitle">{entry.summary}</p> : null}
              <div className="pm-meta-row">
                {entry.version ? (
                  <span className="pm-pill">
                    <strong>Version:</strong> {entry.version}
                  </span>
                ) : null}
                {entry.updated ? (
                  <span className="pm-pill">
                    <strong>Updated:</strong> {entry.updated}
                  </span>
                ) : null}
                {entry.deprecatedSince ? (
                  <span className="pm-pill">
                    <strong>Deprecated:</strong> {entry.deprecatedSince}
                  </span>
                ) : null}
              </div>
              <Link href={entry.href} className="pm-schema-link">
                <span className="pm-schema-list-label">Open release note</span>
                <span className="pm-schema-list-meta">→</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
