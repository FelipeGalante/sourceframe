import React from "react";

import type { ProductRoadmapItem } from "@/lib/product-docs";

export function RoadmapTimeline({ roadmap }: { roadmap: ProductRoadmapItem[] }) {
  if (!roadmap.length) {
    return null;
  }

  return (
    <section className="pm-product-block">
      <div className="pm-api-section-title">Roadmap timeline</div>
      <div className="pm-product-timeline">
        {roadmap.map((item) => (
          <article key={item.phase} className="pm-product-timeline-item">
            <div className="pm-schema-domain-head">
              <strong>{item.phase}</strong>
              <span>{item.timeframe ?? "Timeline"}</span>
            </div>
            {item.focus ? <p className="pm-subtitle">{item.focus}</p> : null}
            {item.deliverables.length ? (
              <ul className="pm-schema-list">
                {item.deliverables.map((deliverable) => (
                  <li key={deliverable}>{deliverable}</li>
                ))}
              </ul>
            ) : null}
            {item.dependencies.length ? (
              <p className="pm-schema-relation-body">
                Dependencies: {item.dependencies.join(", ")}
              </p>
            ) : null}
            {item.exitCriteria.length ? (
              <p className="pm-schema-relation-body">
                Exit criteria: {item.exitCriteria.join(", ")}
              </p>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
