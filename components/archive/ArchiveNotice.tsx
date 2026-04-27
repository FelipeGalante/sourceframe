import React from "react";

import type { ContentEntry } from "@/lib/content";

export function ArchiveNotice({ entry }: { entry: ContentEntry }) {
  return (
    <section className="pm-archive-notice">
      <div className="pm-kicker">Archived source</div>
      <h2 className="pm-title pm-title-lg">{entry.title}</h2>
      <p className="pm-subtitle">
        This page preserves imported or historical source material. Treat it as provenance,
        comparison material, or migration context, not as canonical guidance.
      </p>
      <div className="pm-meta-row">
        <span className="pm-pill">{entry.contentType ?? "source-archive"}</span>
        {entry.status ? <span className="pm-pill">{entry.status}</span> : null}
        {entry.canonicalStatus ? <span className="pm-pill">{entry.canonicalStatus}</span> : null}
      </div>
    </section>
  );
}
