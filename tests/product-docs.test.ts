import assert from "node:assert/strict";
import path from "node:path";
import test from "node:test";

import { loadProductTemplate, normalizeProductTemplateDefinition } from "@/lib/product-docs";

import { createTempContent, writeFile } from "./content-fixtures";

test("normalizeProductTemplateDefinition trims fields and defaults collections", () => {
  const template = normalizeProductTemplateDefinition({
    title: "  Product template  ",
    description: "  Template copy. ",
    requirements: [
      {
        id: "  req-1 ",
        title: "  Define scope  ",
        description: "  Keep the first release small. ",
        priority: " P0 ",
        rationale: "  Prevent scope creep. ",
        status: " draft ",
      },
    ],
    featureMatrix: [
      {
        feature: "  Guided setup  ",
        audience: " New users ",
        problem: " Users need a first success path. ",
        value: " Shortens time to value. ",
        priority: " High ",
        status: " planned ",
        notes: "  Keep it simple. ",
      },
    ],
    roadmap: [
      {
        phase: "  Phase 1  ",
        timeframe: " Now ",
        focus: "  Prove the core workflow. ",
        deliverables: ["  First page ", " Guided flow "],
        dependencies: [" Content model "],
        exitCriteria: [" Users can finish the core task "],
      },
    ],
    personas: [
      {
        name: "  Builder  ",
        role: " Power user ",
        summary: " Wants speed. ",
        goals: [" Move fast ", " Stay organized "],
        pains: [" Too many steps "],
        quote: " I want one source of truth. ",
        context: " Uses the product every day. ",
      },
    ],
    metrics: [
      {
        name: "  Activation ",
        target: " 60%+ ",
        definition: " Users reach the first outcome. ",
        signal: " First success ",
        cadence: " Weekly ",
        owner: " Product ",
        notes: " Watch onboarding. ",
      },
    ],
    scope: [
      {
        area: "  In scope ",
        inScope: " Keep the initial workflow focused. ",
        outOfScope: " Advanced analytics. ",
        notes: " Revisit later. ",
      },
    ],
    releasePlan: [
      {
        release: "  Alpha ",
        date: " 2026-04-26 ",
        focus: " Ship the first pass. ",
        scope: [" Core pages "],
        risks: [" Scope creep "],
        notes: " Keep feedback tight. ",
      },
    ],
  });

  assert.equal(template.title, "Product template");
  assert.equal(template.description, "Template copy.");
  assert.equal(template.requirements[0]?.title, "Define scope");
  assert.equal(template.requirements[0]?.priority, "P0");
  assert.equal(template.featureMatrix[0]?.feature, "Guided setup");
  assert.equal(template.roadmap[0]?.phase, "Phase 1");
  assert.equal(template.personas[0]?.name, "Builder");
  assert.equal(template.metrics[0]?.name, "Activation");
  assert.equal(template.scope[0]?.area, "In scope");
  assert.equal(template.releasePlan[0]?.release, "Alpha");
});

test("loadProductTemplate reads frontmatter and sidecar product data", () => {
  const root = createTempContent({
    "alpha/prd.md": [
      "---",
      'title: "PRD"',
      'domain: "alpha"',
      'section: "templates"',
      'type: "reference"',
      'contentType: "prd"',
      "product:",
      '  title: "Alpha PRD"',
      '  description: "A concise product brief."',
      "  requirements:",
      '    - title: "Ship core flow"',
      '      priority: "P0"',
      "---",
      "",
      "# PRD",
    ].join("\n"),
    "beta/research.md": [
      "---",
      'title: "Research"',
      'domain: "beta"',
      'section: "templates"',
      'type: "reference"',
      'contentType: "research"',
      "---",
      "",
      "# Research",
    ].join("\n"),
    "gamma/roadmap.md": [
      "---",
      'title: "Roadmap"',
      'domain: "gamma"',
      'section: "templates"',
      'type: "reference"',
      'contentType: "roadmap"',
      "---",
      "",
      "# Roadmap",
    ].join("\n"),
  });

  writeFile(
    root,
    "beta/research.product.json",
    JSON.stringify(
      {
        title: "Beta Research",
        description: "Research notes.",
        personas: [
          {
            name: "Operator",
            role: "Power user",
            goals: ["Move quickly"],
            pains: ["Too much context switching"],
          },
        ],
      },
      null,
      2,
    ),
  );

  writeFile(
    root,
    "gamma/roadmap.product.yaml",
    [
      'title: "Gamma Roadmap"',
      'description: "Roadmap plan."',
      "roadmap:",
      '  - phase: "Phase 1"',
      '    timeframe: "Now"',
      '    deliverables: ["Core flow"]',
      '    dependencies: ["Content model"]',
      '    exitCriteria: ["Users can complete the task"]',
    ].join("\n"),
  );

  const frontmatterDoc = loadProductTemplate(path.join(root, "alpha/prd.md"), "alpha/prd.md", {
    title: "Alpha PRD",
    description: "A concise product brief.",
    requirements: [{ title: "Ship core flow", priority: "P0" }],
  });
  const jsonDoc = loadProductTemplate(
    path.join(root, "beta/research.md"),
    "beta/research.md",
    undefined,
  );
  const yamlDoc = loadProductTemplate(
    path.join(root, "gamma/roadmap.md"),
    "gamma/roadmap.md",
    undefined,
  );

  assert.equal(frontmatterDoc?.sourceFormat, "frontmatter");
  assert.equal(frontmatterDoc?.definition.title, "Alpha PRD");
  assert.equal(jsonDoc?.sourceFormat, "json");
  assert.equal(jsonDoc?.definition.personas[0]?.name, "Operator");
  assert.equal(yamlDoc?.sourceFormat, "yaml");
  assert.equal(yamlDoc?.definition.roadmap[0]?.phase, "Phase 1");
});
