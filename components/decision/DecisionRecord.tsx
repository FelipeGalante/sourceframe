import React from "react";

import type { ContentEntry } from "@/lib/content";

import { DecisionStatusBadge } from "./DecisionStatusBadge";
import { RelatedDecisionLinks } from "./RelatedDecisionLinks";

function decisionTone(status: string) {
  const normalized = status.toLowerCase();
  if (normalized === "deprecated" || normalized === "superseded") {
    return "pm-decision-card pm-decision-card-muted";
  }

  return "pm-decision-card";
}

export function DecisionRecord({ entry }: { entry: ContentEntry }) {
  if (!entry.decision) {
    return null;
  }

  const decision = entry.decision;

  return (
    <section className={`pm-card pm-content-card ${decisionTone(decision.status)}`}>
      <div className="pm-content-body">
        <div className="pm-kicker">{decision.decisionType.replace(/-/g, " ")}</div>
        <h2 className="pm-title pm-title-lg">{decision.title}</h2>
        <div className="pm-meta-row">
          <DecisionStatusBadge status={decision.status} />
          <span className="pm-pill">
            <strong>Date:</strong> {decision.date}
          </span>
          <span className="pm-pill">
            <strong>Domain:</strong> {decision.domain}
          </span>
          {decision.owner ? (
            <span className="pm-pill">
              <strong>Owner:</strong> {decision.owner}
            </span>
          ) : null}
        </div>

        <RelatedDecisionLinks
          relatedPages={decision.relatedPages}
          supersedes={decision.supersedes}
          supersededBy={decision.supersededBy}
        />
      </div>
    </section>
  );
}
