import React from "react";

import type { ContentEntry } from "@/lib/content";

import { FeatureMatrix } from "./FeatureMatrix";
import { MetricCard } from "./MetricCard";
import { PersonaCard } from "./PersonaCard";
import { ReleasePlan } from "./ReleasePlan";
import { RequirementList } from "./RequirementList";
import { RoadmapTimeline } from "./RoadmapTimeline";
import { ScopeTable } from "./ScopeTable";

export function ProductTemplate({ entry }: { entry: ContentEntry }) {
  if (!entry.product) {
    return null;
  }

  const template = entry.product;

  return (
    <section className="pm-card pm-content-card pm-product-template">
      <div className="pm-content-body">
        <div className="pm-kicker">Product template</div>
        <h2 className="pm-title pm-title-lg">{template.title ?? entry.title}</h2>
        {template.description ? <p className="pm-subtitle">{template.description}</p> : null}
        <div className="pm-meta-row">
          <span className="pm-pill">{template.requirements.length} requirements</span>
          <span className="pm-pill">{template.featureMatrix.length} features</span>
          <span className="pm-pill">{template.personas.length} personas</span>
        </div>
        <div className="pm-schema-relation-group">
          <div className="pm-schema-relation-label">Template source</div>
          <p className="pm-schema-relation-body">
            Copy this file, replace the sample <code>product:</code> block, and keep the headings
            that help the page stay readable.
          </p>
          {entry.productSource ? (
            <p className="pm-schema-relation-body">Source file: {entry.productSource}</p>
          ) : null}
          {entry.productSourceFormat ? (
            <p className="pm-schema-relation-body">Source format: {entry.productSourceFormat}</p>
          ) : null}
        </div>

        <RequirementList requirements={template.requirements} />
        <FeatureMatrix features={template.featureMatrix} />
        <RoadmapTimeline roadmap={template.roadmap} />
        <PersonaCard personas={template.personas} />
        <MetricCard metrics={template.metrics} />
        <ScopeTable scope={template.scope} />
        <ReleasePlan releases={template.releasePlan} />
      </div>
    </section>
  );
}
