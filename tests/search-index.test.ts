import assert from "node:assert/strict";
import test from "node:test";

import { rankSearchRecord, tokenizeSearchQuery } from "@/components/layout/search-utils";
import { buildContentRegistry } from "@/lib/content";

import { createTempContent } from "./content-fixtures";

test("buildContentRegistry generates a static search index with content metadata", () => {
  const root = createTempContent({
    "index.md": ["---", 'title: "Home"', 'type: "site-index"', "---", "# Home"].join("\n"),
    "alpha/index.md": [
      "---",
      'title: "Alpha"',
      'domain: "alpha"',
      'type: "domain-index"',
      "order: 1",
      'summary: "Alpha summary"',
      'contentType: "guide"',
      'owner: "Docs"',
      'status: "active"',
      'tags: ["alpha", "static"]',
      "---",
      "",
      "# Alpha",
    ].join("\n"),
    "alpha/intro.md": [
      "---",
      'title: "Alpha Intro"',
      'domain: "alpha"',
      'section: "intro"',
      'type: "section"',
      "order: 1",
      'summary: "How alpha works"',
      'contentType: "reference"',
      'owner: "Platform"',
      'status: "draft"',
      'tags: ["alpha", "intro"]',
      "---",
      "",
      "# Alpha Intro",
      "",
      "This body text explains the alpha system.",
      "",
      "## Deep Dive",
      "",
      "More details appear here.",
    ].join("\n"),
    "beta/index.md": [
      "---",
      'title: "Beta"',
      'domain: "beta"',
      'type: "domain-index"',
      "order: 2",
      "---",
      "",
      "# Beta",
    ].join("\n"),
    "beta/reference.md": [
      "---",
      'title: "Beta Reference"',
      'domain: "beta"',
      'section: "reference"',
      'type: "section"',
      "order: 1",
      'summary: "Beta rollout details"',
      'contentType: "guide"',
      'owner: "Product"',
      'status: "active"',
      'tags: ["beta", "launch"]',
      "---",
      "",
      "# Beta Reference",
      "",
      "This body text documents the beta release plan.",
      "",
      "## Release Notes",
      "",
      "Shipping details and rollout guidance.",
    ].join("\n"),
  });

  const registry = buildContentRegistry(root);
  const alphaRecord = registry.searchIndex.find((record) => record.route === "/alpha/intro");
  const betaRecord = registry.searchIndex.find((record) => record.route === "/beta/reference");

  assert.ok(alphaRecord);
  assert.ok(betaRecord);

  assert.equal(alphaRecord?.summary, "How alpha works");
  assert.equal(alphaRecord?.contentType, "reference");
  assert.equal(alphaRecord?.owner, "Platform");
  assert.equal(alphaRecord?.status, "draft");
  assert.deepEqual(alphaRecord?.tags, ["alpha", "intro"]);
  assert.match(alphaRecord?.text ?? "", /How alpha works/);
  assert.match(alphaRecord?.text ?? "", /Platform/);
  assert.match(alphaRecord?.text ?? "", /active|draft/);
  assert.match(alphaRecord?.text ?? "", /reference|guide/);

  assert.equal(betaRecord?.route, "/beta/reference");
  assert.equal(betaRecord?.summary, "Beta rollout details");
  assert.equal(betaRecord?.contentType, "guide");
  assert.equal(betaRecord?.owner, "Product");
  assert.equal(betaRecord?.status, "active");
  assert.deepEqual(betaRecord?.tags, ["beta", "launch"]);

  const ranked = registry.searchIndex
    .map((record) => ({
      route: record.route,
      score: rankSearchRecord(record, tokenizeSearchQuery("beta rollout")),
    }))
    .filter((item) => item.score > 0)
    .sort((left, right) => right.score - left.score);

  assert.equal(ranked[0]?.route, "/beta/reference");
});
