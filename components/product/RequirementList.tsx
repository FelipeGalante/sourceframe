import React from "react";

import type { ProductRequirement } from "@/lib/product-docs";

export function RequirementList({ requirements }: { requirements: ProductRequirement[] }) {
  if (!requirements.length) {
    return null;
  }

  return (
    <section className="pm-product-block">
      <div className="pm-api-section-title">Requirements</div>
      <div className="pm-product-list">
        {requirements.map((requirement) => (
          <article key={requirement.id ?? requirement.title} className="pm-product-card">
            <div className="pm-schema-domain-head">
              <strong>{requirement.title}</strong>
              <span>{requirement.priority ?? "Requirement"}</span>
            </div>
            {requirement.description ? (
              <p className="pm-subtitle">{requirement.description}</p>
            ) : null}
            {requirement.rationale ? (
              <p className="pm-schema-relation-body">{requirement.rationale}</p>
            ) : null}
            {requirement.status ? (
              <p className="pm-schema-relation-body">Status: {requirement.status}</p>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
