import React from "react";

import type { ApiError } from "@/lib/api-docs";

export function ErrorExample({ errors }: { errors: ApiError[] }) {
  if (!errors.length) {
    return null;
  }

  return (
    <section className="pm-api-errors">
      <div className="pm-api-section-title">Error codes</div>
      <ul className="pm-schema-list">
        {errors.map((error) => (
          <li key={error.code} className="pm-api-error-item">
            <strong>{error.code}</strong>
            <span className="pm-schema-list-meta">
              {[error.message, error.description].filter(Boolean).join(" · ") || "API error"}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
