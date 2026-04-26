import React from "react";
import Link from "next/link";

import type { SchemaDocument } from "@/lib/schema-docs";

import { ColumnTable } from "./ColumnTable";
import { IndexList } from "./IndexList";
import { RelationshipMap } from "./RelationshipMap";

export function SchemaTableCard({ document }: { document: SchemaDocument }) {
  const { definition } = document;

  return (
    <section className="pm-card pm-content-card pm-schema-card">
      <div className="pm-content-body">
        <div className="pm-kicker">{definition.domain}</div>
        <h2 className="pm-title pm-title-lg">{definition.tableName}</h2>
        {definition.lifecycle ? <p className="pm-subtitle">{definition.lifecycle}</p> : null}
        {definition.description ? <p className="pm-subtitle">{definition.description}</p> : null}
        <div className="pm-meta-row">
          <span className="pm-pill">{definition.columns.length} columns</span>
          <span className="pm-pill">{definition.indexes.length} indexes</span>
          <span className="pm-pill">{definition.relationships.length} relationships</span>
        </div>
        <div className="pm-meta-row">
          <span className="pm-pill">
            <strong>Source:</strong> {document.sourcePath}
          </span>
          <span className="pm-pill">
            <strong>Format:</strong> {document.sourceFormat}
          </span>
        </div>

        <ColumnTable columns={definition.columns} />
        <IndexList title="Indexes" items={definition.indexes} />
        <IndexList title="Constraints" items={definition.constraints} />
        <RelationshipMap relationships={definition.relationships} />

        <div className="pm-schema-footer">
          <Link href={document.href} className="pm-action-button">
            Open source page
          </Link>
        </div>
      </div>
    </section>
  );
}
