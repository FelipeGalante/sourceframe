import assert from "node:assert/strict";
import test from "node:test";

import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";

import { ProductTemplate } from "@/components/product";
import type { ContentEntry } from "@/lib/content";

test("ProductTemplate renders the reusable product blocks", () => {
  const entry = {
    title: "PRD Template",
    productSource: "content/product/templates/prd.md",
    productSourceFormat: "frontmatter",
    product: {
      title: "Launch-ready product requirements",
      description: "Reusable PRD format.",
      requirements: [
        {
          title: "Define the user problem",
          priority: "P0",
          description: "Explain why the page exists.",
          rationale: "Keeps the page grounded.",
        },
      ],
      featureMatrix: [
        {
          feature: "Core workflow",
          audience: "Primary users",
          problem: "Users need to complete the main task.",
          value: "Captures the essential flow.",
          priority: "High",
          status: "Planned",
        },
      ],
      roadmap: [
        {
          phase: "Phase 1",
          timeframe: "Now",
          focus: "Prove the core workflow.",
          deliverables: ["Landing page"],
          dependencies: ["Content model"],
          exitCriteria: ["Users can complete the task"],
        },
      ],
      personas: [
        {
          name: "Independent builder",
          role: "Solo founder",
          summary: "Values speed and clarity.",
          goals: ["Ship quickly"],
          pains: ["Tool sprawl"],
          quote: "I want one source of truth.",
        },
      ],
      metrics: [
        {
          name: "Activation",
          target: "60%+",
          definition: "Users reach the first outcome.",
          signal: "First success",
          cadence: "Weekly",
        },
      ],
      scope: [
        {
          area: "In scope",
          inScope: "First workflow and baseline content.",
          outOfScope: "Advanced analytics.",
        },
      ],
      releasePlan: [
        {
          release: "Alpha",
          date: "2026-04-26",
          focus: "Ship the first pass.",
          scope: ["Core pages"],
          risks: ["Scope creep"],
        },
      ],
    },
  } as ContentEntry;

  const html = renderToStaticMarkup(createElement(ProductTemplate, { entry }));

  assert.match(html, /Product template/i);
  assert.match(html, /Requirements/i);
  assert.match(html, /Feature matrix/i);
  assert.match(html, /Roadmap timeline/i);
  assert.match(html, /Personas/i);
  assert.match(html, /Success metrics/i);
  assert.match(html, /Scope/i);
  assert.match(html, /Release plan/i);
  assert.match(html, /content\/product\/templates\/prd\.md/i);
  assert.match(html, /Copy this file/i);
});
