import Link from "next/link";
import React from "react";

import type { ContentEntry } from "@/lib/content";

export function ArchiveIndex({ entries }: { entries: ContentEntry[] }) {
  const archivedEntries = entries.filter((entry) => entry.contentType === "source-archive");

  return (
    <section className="pm-card pm-content-card pm-archive-index">
      <div className="pm-content-body">
        <div className="pm-kicker">Archive index</div>
        <h2 className="pm-title pm-title-lg">Historical source material</h2>
        <p className="pm-subtitle">
          Archived pages are preserved for provenance and migration context. They remain searchable
          but are visually separated from canonical guidance.
        </p>
        <div className="pm-product-list">
          {archivedEntries.map((entry) => (
            <article key={entry.href} className="pm-product-card pm-archive-index-card">
              <div className="pm-schema-domain-head">
                <strong>{entry.title}</strong>
                <span>{entry.status ?? entry.contentType ?? "archived"}</span>
              </div>
              {entry.summary ? <p className="pm-subtitle">{entry.summary}</p> : null}
              <p className="pm-schema-relation-body">{entry.href}</p>
              <div className="pm-meta-row">
                {entry.origin ? <span className="pm-pill">{entry.origin}</span> : null}
                {entry.importedAt ? <span className="pm-pill">{entry.importedAt}</span> : null}
                {entry.canonicalStatus ? (
                  <span className="pm-pill">{entry.canonicalStatus}</span>
                ) : null}
              </div>
              <Link href={entry.href} className="pm-schema-link pm-archive-index-link">
                <span className="pm-schema-list-label">Open archive page</span>
                <span className="pm-schema-list-meta">→</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
