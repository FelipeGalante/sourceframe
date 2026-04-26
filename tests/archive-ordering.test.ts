import assert from "node:assert/strict";
import test from "node:test";

import { buildContentRegistry } from "@/lib/content";

import { createTempContent } from "./content-fixtures";

test("archive ordering keeps visible pages in canonical registry order", () => {
  const root = createTempContent({
    "index.md": ["---", 'title: "Home"', 'type: "site-index"', "---", "# Home"].join("\n"),
    "alpha/index.md": [
      "---",
      'title: "Alpha"',
      'domain: "alpha"',
      'type: "domain-index"',
      "order: 2",
      "---",
      "",
      "# Alpha",
    ].join("\n"),
    "alpha/one.md": [
      "---",
      'title: "Alpha One"',
      'domain: "alpha"',
      'section: "one"',
      'type: "section"',
      "order: 2",
      "---",
      "",
      "# Alpha One",
    ].join("\n"),
    "alpha/two.md": [
      "---",
      'title: "Alpha Two"',
      'domain: "alpha"',
      'section: "two"',
      'type: "section"',
      "order: 1",
      'visibility: "internal"',
      "---",
      "",
      "# Alpha Two",
    ].join("\n"),
    "beta/index.md": [
      "---",
      'title: "Beta"',
      'domain: "beta"',
      'type: "domain-index"',
      "order: 1",
      "---",
      "",
      "# Beta",
    ].join("\n"),
    "beta/guide.md": [
      "---",
      'title: "Beta Guide"',
      'domain: "beta"',
      'section: "guide"',
      'type: "section"',
      "order: 1",
      "---",
      "",
      "# Beta Guide",
    ].join("\n"),
  });

  const registry = buildContentRegistry(root);
  const visibleRoutes = registry.entries
    .filter((entry) => entry.visibility !== "internal")
    .map((entry) => entry.route);

  assert.deepEqual(visibleRoutes, ["/", "/beta", "/alpha", "/beta/guide", "/alpha/one"]);

  const alphaArchiveRoutes = registry.entries
    .filter((entry) => entry.visibility !== "internal")
    .filter((entry) => entry.domain === "alpha")
    .map((entry) => entry.route);

  assert.deepEqual(alphaArchiveRoutes, ["/alpha", "/alpha/one"]);
  assert.equal(alphaArchiveRoutes.includes("/alpha/two"), false);
});
