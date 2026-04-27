import React from "react";

import type { ProductPersona } from "@/lib/product-docs";

export function PersonaCard({ personas }: { personas: ProductPersona[] }) {
  if (!personas.length) {
    return null;
  }

  return (
    <section className="pm-product-block">
      <div className="pm-api-section-title">Personas</div>
      <div className="pm-product-list">
        {personas.map((persona) => (
          <article key={persona.name} className="pm-product-card">
            <div className="pm-schema-domain-head">
              <strong>{persona.name}</strong>
              <span>{persona.role}</span>
            </div>
            {persona.summary ? <p className="pm-subtitle">{persona.summary}</p> : null}
            {persona.context ? <p className="pm-schema-relation-body">{persona.context}</p> : null}
            {persona.goals.length ? (
              <div className="pm-schema-relation-group">
                <div className="pm-schema-relation-label">Goals</div>
                <ul className="pm-schema-list">
                  {persona.goals.map((goal) => (
                    <li key={goal}>{goal}</li>
                  ))}
                </ul>
              </div>
            ) : null}
            {persona.pains.length ? (
              <div className="pm-schema-relation-group">
                <div className="pm-schema-relation-label">Pains</div>
                <ul className="pm-schema-list">
                  {persona.pains.map((pain) => (
                    <li key={pain}>{pain}</li>
                  ))}
                </ul>
              </div>
            ) : null}
            {persona.quote ? <p className="pm-schema-relation-body">“{persona.quote}”</p> : null}
          </article>
        ))}
      </div>
    </section>
  );
}
