import React from "react";

import type { ProductFeature } from "@/lib/product-docs";

export function FeatureMatrix({ features }: { features: ProductFeature[] }) {
  if (!features.length) {
    return null;
  }

  return (
    <section className="pm-product-block">
      <div className="pm-api-section-title">Feature matrix</div>
      <div className="pm-table-scroll">
        <table className="pm-schema-table pm-product-table">
          <thead>
            <tr>
              <th>Feature</th>
              <th>Audience</th>
              <th>Problem</th>
              <th>Value</th>
              <th>Priority</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {features.map((feature) => (
              <tr key={feature.feature}>
                <td>
                  <strong>{feature.feature}</strong>
                </td>
                <td>{feature.audience ?? "—"}</td>
                <td>{feature.problem ?? "—"}</td>
                <td>{feature.value ?? "—"}</td>
                <td>{feature.priority ?? "—"}</td>
                <td>{feature.status ?? "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
