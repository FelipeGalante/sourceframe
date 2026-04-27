import assert from "node:assert/strict";
import path from "node:path";
import test from "node:test";

import {
  buildDecisionCatalog,
  loadDecisionDocument,
  normalizeDecisionDefinition,
} from "@/lib/decision-docs";

import { createTempContent, writeFile } from "./content-fixtures";

test("normalizeDecisionDefinition trims fields and defaults collections", () => {
  const decision = normalizeDecisionDefinition({
    title: "  Keep the frontend on Vercel  ",
    domain: " technology ",
    status: " accepted ",
    date: " 2026-04-26 ",
    owner: " Platform ",
    decisionType: " adr ",
    relatedPages: [{ title: " Architecture ", href: " /technology/architecture " }],
    supersedes: [" /technology/adr-v1 "],
    supersededBy: [" /technology/adr-v2 "],
  });

  assert.equal(decision.title, "Keep the frontend on Vercel");
  assert.equal(decision.domain, "technology");
  assert.equal(decision.status, "accepted");
  assert.equal(decision.date, "2026-04-26");
  assert.equal(decision.owner, "Platform");
  assert.equal(decision.decisionType, "adr");
  assert.equal(decision.relatedPages[0]?.href, "/technology/architecture");
  assert.equal(decision.supersedes[0], "/technology/adr-v1");
});

test("loadDecisionDocument reads frontmatter and sidecar decision data", () => {
  const root = createTempContent({
    "alpha/adr.md": [
      "---",
      'title: "ADR"',
      'domain: "alpha"',
      'section: "adr"',
      'type: "reference"',
      'contentType: "adr"',
      "decision:",
      '  title: "Use Vercel"',
      '  domain: "alpha"',
      '  status: "accepted"',
      '  date: "2026-04-26"',
      '  decisionType: "adr"',
      "  relatedPages: []",
      "  supersedes: []",
      "  supersededBy: []",
      "---",
      "",
      "# ADR",
    ].join("\n"),
    "beta/decision.md": [
      "---",
      'title: "Decision"',
      'domain: "beta"',
      'section: "decisions"',
      'type: "reference"',
      'contentType: "product-decision"',
      "---",
      "",
      "# Decision",
    ].join("\n"),
  });

  writeFile(
    root,
    "beta/decision.decision.yaml",
    [
      'title: "Keep pricing simple"',
      'domain: "beta"',
      'status: "superseded"',
      'date: "2026-04-20"',
      'owner: "Product"',
      'decisionType: "product-decision"',
      "relatedPages:",
      '  - href: "/product/primary"',
      '    title: "Product strategy"',
      "supersedes:",
      '  - "/product/pricing-v1"',
      "supersededBy:",
      '  - "/product/pricing-v2"',
    ].join("\n"),
  );

  const frontmatterDoc = loadDecisionDocument(path.join(root, "alpha/adr.md"), "alpha/adr.md", {
    title: "Use Vercel",
    domain: "alpha",
    status: "accepted",
    date: "2026-04-26",
    decisionType: "adr",
    relatedPages: [],
    supersedes: [],
    supersededBy: [],
  });
  const sidecarDoc = loadDecisionDocument(
    path.join(root, "beta/decision.md"),
    "beta/decision.md",
    undefined,
  );

  assert.equal(frontmatterDoc?.sourceFormat, "frontmatter");
  assert.equal(frontmatterDoc?.definition.decisionType, "adr");
  assert.equal(sidecarDoc?.sourceFormat, "yaml");
  assert.equal(sidecarDoc?.definition.decisionType, "product-decision");
});

test("buildDecisionCatalog groups decision docs by domain", () => {
  const catalog = buildDecisionCatalog([
    {
      title: "Technology",
      route: "/technology/adr",
      href: "/technology/adr",
      relativePath: "technology/adr.md",
      decision: {
        title: "Use Vercel",
        domain: "technology",
        status: "accepted",
        date: "2026-04-26",
        decisionType: "adr",
        relatedPages: [],
        supersedes: [],
        supersededBy: [],
      },
    },
    {
      title: "Product",
      route: "/product/decisions/decision-pricing",
      href: "/product/decisions/decision-pricing",
      relativePath: "product/decisions/decision-pricing.md",
      decision: {
        title: "Keep pricing simple",
        domain: "product",
        status: "superseded",
        date: "2026-04-20",
        decisionType: "product-decision",
        relatedPages: [],
        supersedes: [],
        supersededBy: [],
      },
    },
  ]);

  assert.deepEqual(
    catalog.map((group) => ({
      domain: group.domain,
      count: group.documents.length,
    })),
    [
      { domain: "product", count: 1 },
      { domain: "technology", count: 1 },
    ],
  );
});
