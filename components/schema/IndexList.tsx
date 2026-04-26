import React from "react";

export function IndexList({
  title,
  items,
}: {
  title: string;
  items: Array<string | { name: string; purpose?: string; columns?: string[] }>;
}) {
  if (!items.length) {
    return null;
  }

  return (
    <section className="pm-schema-block">
      <div className="pm-schema-section-title">{title}</div>
      <ul className="pm-schema-list">
        {items.map((item) => {
          const label = typeof item === "string" ? item : item.name;
          const details =
            typeof item === "string"
              ? null
              : [item.columns?.length ? item.columns.join(", ") : null, item.purpose]
                  .filter(Boolean)
                  .join(" · ");

          return (
            <li key={label}>
              <span className="pm-schema-list-label">{label}</span>
              {details ? <span className="pm-schema-list-meta">{details}</span> : null}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
