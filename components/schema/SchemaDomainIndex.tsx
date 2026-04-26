import React from "react";
import Link from "next/link";

import type { SchemaDomainGroup } from "@/lib/schema-docs";

export function SchemaDomainIndex({ groups }: { groups: SchemaDomainGroup[] }) {
  if (!groups.length) {
    return null;
  }

  return (
    <section className="pm-card pm-content-card pm-schema-index">
      <div className="pm-content-body">
        <div className="pm-kicker">Schema index</div>
        <h2 className="pm-title pm-title-lg">Tables by domain</h2>
        <div className="pm-schema-domain-grid">
          {groups.map((group) => (
            <article key={group.domain} className="pm-schema-domain-card">
              <div className="pm-schema-domain-head">
                <strong>{group.title ?? group.domain}</strong>
                <span>{group.documents.length} tables</span>
              </div>
              <ul className="pm-schema-list">
                {group.documents.map((document) => (
                  <li key={document.route}>
                    <Link href={document.href} className="pm-schema-link">
                      <span className="pm-schema-list-label">{document.definition.tableName}</span>
                      <span className="pm-schema-list-meta">
                        {document.definition.lifecycle ?? "Schema doc"}
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
