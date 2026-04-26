import React from "react";

import type { SchemaRelationship } from "@/lib/schema-docs";

export function RelationshipMap({ relationships }: { relationships: SchemaRelationship[] }) {
  if (!relationships.length) {
    return null;
  }

  return (
    <section className="pm-schema-block">
      <div className="pm-schema-section-title">Relationships</div>
      <div className="pm-schema-relationships">
        {relationships.map((relationship) => (
          <article
            key={`${relationship.tableName}:${relationship.cardinality ?? "related"}`}
            className="pm-schema-relation"
          >
            <div className="pm-schema-relation-head">
              <strong>{relationship.tableName}</strong>
              <span>{relationship.cardinality ?? "related"}</span>
            </div>
            {relationship.purpose ? (
              <p className="pm-schema-relation-body">{relationship.purpose}</p>
            ) : null}
            {relationship.through ? (
              <p className="pm-schema-relation-note">Through {relationship.through}</p>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
