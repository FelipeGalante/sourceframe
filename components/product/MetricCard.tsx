import React from "react";

import type { ProductMetric } from "@/lib/product-docs";

export function MetricCard({ metrics }: { metrics: ProductMetric[] }) {
  if (!metrics.length) {
    return null;
  }

  return (
    <section className="pm-product-block">
      <div className="pm-api-section-title">Success metrics</div>
      <div className="pm-product-list">
        {metrics.map((metric) => (
          <article key={metric.name} className="pm-product-card">
            <div className="pm-schema-domain-head">
              <strong>{metric.name}</strong>
              <span>{metric.cadence ?? "Metric"}</span>
            </div>
            {metric.definition ? <p className="pm-subtitle">{metric.definition}</p> : null}
            {metric.target ? (
              <p className="pm-schema-relation-body">Target: {metric.target}</p>
            ) : null}
            {metric.signal ? (
              <p className="pm-schema-relation-body">Signal: {metric.signal}</p>
            ) : null}
            {metric.owner ? <p className="pm-schema-relation-body">Owner: {metric.owner}</p> : null}
            {metric.notes ? <p className="pm-schema-relation-body">{metric.notes}</p> : null}
          </article>
        ))}
      </div>
    </section>
  );
}
