import React from "react";

import type { ProductScopeRow } from "@/lib/product-docs";

export function ScopeTable({ scope }: { scope: ProductScopeRow[] }) {
  if (!scope.length) {
    return null;
  }

  return (
    <section className="pm-product-block">
      <div className="pm-api-section-title">Scope</div>
      <div className="pm-table-scroll">
        <table className="pm-schema-table pm-product-table">
          <thead>
            <tr>
              <th>Area</th>
              <th>In scope</th>
              <th>Out of scope</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {scope.map((row) => (
              <tr key={row.area}>
                <td>
                  <strong>{row.area}</strong>
                </td>
                <td>{row.inScope}</td>
                <td>{row.outOfScope ?? "—"}</td>
                <td>{row.notes ?? "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
