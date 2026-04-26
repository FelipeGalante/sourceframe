import React from "react";

import type { SchemaColumn } from "@/lib/schema-docs";

function nullableLabel(value?: boolean) {
  if (value === true) {
    return "Yes";
  }

  if (value === false) {
    return "No";
  }

  return "—";
}

export function ColumnTable({ columns }: { columns: SchemaColumn[] }) {
  if (!columns.length) {
    return null;
  }

  return (
    <div className="pm-schema-table-shell">
      <div className="pm-schema-section-title">Columns</div>
      <div className="pm-table-scroll">
        <table className="pm-schema-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Default</th>
              <th>Size</th>
              <th>Key role</th>
              <th>Nullable</th>
              <th>Purpose</th>
            </tr>
          </thead>
          <tbody>
            {columns.map((column) => (
              <tr key={column.name}>
                <td>
                  <strong>{column.name}</strong>
                </td>
                <td>{column.type}</td>
                <td>{column.default ?? "—"}</td>
                <td>{column.size ?? "—"}</td>
                <td>{column.keyRole ?? "—"}</td>
                <td>{nullableLabel(column.nullable)}</td>
                <td>{column.purpose ?? "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
