import Link from "next/link";
import React from "react";

import type { DecisionGroup } from "@/lib/decision-docs";

import { DecisionStatusBadge } from "./DecisionStatusBadge";

export function DecisionIndex({ groups }: { groups: DecisionGroup[] }) {
  if (!groups.length) {
    return null;
  }

  return (
    <section className="pm-card pm-content-card pm-decision-index">
      <div className="pm-content-body">
        <div className="pm-kicker">Decision index</div>
        <h2 className="pm-title pm-title-lg">Decisions by domain</h2>
        <div className="pm-schema-domain-grid">
          {groups.map((group) => (
            <article key={group.domain} className="pm-schema-domain-card">
              <div className="pm-schema-domain-head">
                <strong>{group.title ?? group.domain}</strong>
                <span>{group.documents.length} records</span>
              </div>
              <ul className="pm-schema-list">
                {group.documents.map((document) => (
                  <li key={document.route}>
                    <Link href={document.href} className="pm-schema-link">
                      <span className="pm-schema-list-label">{document.definition.title}</span>
                      <span className="pm-schema-list-meta">
                        <DecisionStatusBadge status={document.definition.status} />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
