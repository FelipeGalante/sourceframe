import React from "react";

import type { ContentEntry } from "@/lib/content";

export function StaleContentWarning({
  entry,
  reason,
}: {
  entry: ContentEntry;
  reason: "review-due" | "deprecated";
}) {
  const isDeprecated = reason === "deprecated";

  return (
    <aside className={`pm-stale-warning ${isDeprecated ? "is-deprecated" : ""}`}>
      <div className="pm-stale-warning-kicker">
        {isDeprecated ? "Deprecated content" : "Review needed"}
      </div>
      <strong>
        {isDeprecated
          ? "This page has been marked deprecated."
          : "This page is past its review date."}
      </strong>
      <p>
        {isDeprecated
          ? "Treat this as historical guidance. Prefer a newer canonical page when one exists."
          : "Check the content for freshness before treating it as current guidance."}
      </p>
      <div className="pm-meta-row">
        {entry.reviewAfter ? (
          <span className="pm-pill">
            <strong>Review after:</strong> {entry.reviewAfter}
          </span>
        ) : null}
        {entry.lastReviewed ? (
          <span className="pm-pill">
            <strong>Last reviewed:</strong> {entry.lastReviewed}
          </span>
        ) : null}
        {entry.deprecatedSince ? (
          <span className="pm-pill">
            <strong>Deprecated since:</strong> {entry.deprecatedSince}
          </span>
        ) : null}
      </div>
    </aside>
  );
}
