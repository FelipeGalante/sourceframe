import Link from "next/link";
import React from "react";

import type { ContentEntry } from "@/lib/content";

export function SourceProvenance({ entry }: { entry: ContentEntry }) {
  const relatedCanonicalPages = entry.relatedCanonicalPages ?? [];

  return (
    <section className="pm-archive-provenance">
      <div className="pm-api-section-title">Source provenance</div>
      <div className="pm-product-list">
        {entry.origin ? (
          <article className="pm-product-card">
            <div className="pm-schema-domain-head">
              <strong>Origin</strong>
              <span>{entry.origin}</span>
            </div>
          </article>
        ) : null}
        {entry.sourceFile ? (
          <article className="pm-product-card">
            <div className="pm-schema-domain-head">
              <strong>Source file</strong>
              <span>{entry.sourceFile}</span>
            </div>
          </article>
        ) : null}
        {entry.importedAt || entry.importedBy ? (
          <article className="pm-product-card">
            <div className="pm-schema-domain-head">
              <strong>Imported</strong>
              <span>{entry.importedAt ?? "Unknown date"}</span>
            </div>
            {entry.importedBy ? (
              <p className="pm-schema-relation-body">Imported by {entry.importedBy}</p>
            ) : null}
          </article>
        ) : null}
        {entry.canonicalStatus ? (
          <article className="pm-product-card">
            <div className="pm-schema-domain-head">
              <strong>Canonical status</strong>
              <span>{entry.canonicalStatus}</span>
            </div>
          </article>
        ) : null}
        {relatedCanonicalPages.length ? (
          <article className="pm-product-card">
            <div className="pm-schema-domain-head">
              <strong>Related canonical pages</strong>
              <span>{relatedCanonicalPages.length}</span>
            </div>
            <ul className="pm-schema-list">
              {relatedCanonicalPages.map((href) => (
                <li key={href}>
                  <Link href={href} className="pm-schema-link">
                    <span className="pm-schema-list-label">{href}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </article>
        ) : null}
      </div>
    </section>
  );
}
