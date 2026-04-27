import React from "react";

import type { ProductReleasePlanItem } from "@/lib/product-docs";

export function ReleasePlan({ releases }: { releases: ProductReleasePlanItem[] }) {
  if (!releases.length) {
    return null;
  }

  return (
    <section className="pm-product-block">
      <div className="pm-api-section-title">Release plan</div>
      <div className="pm-product-timeline">
        {releases.map((release) => (
          <article key={release.release} className="pm-product-timeline-item">
            <div className="pm-schema-domain-head">
              <strong>{release.release}</strong>
              <span>{release.date ?? "Planned"}</span>
            </div>
            {release.focus ? <p className="pm-subtitle">{release.focus}</p> : null}
            {release.scope.length ? (
              <ul className="pm-schema-list">
                {release.scope.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
            {release.risks.length ? (
              <p className="pm-schema-relation-body">Risks: {release.risks.join(", ")}</p>
            ) : null}
            {release.notes ? <p className="pm-schema-relation-body">{release.notes}</p> : null}
          </article>
        ))}
      </div>
    </section>
  );
}
