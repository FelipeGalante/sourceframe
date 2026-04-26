import assert from "node:assert/strict";
import test from "node:test";

import { buildContentRegistry } from "@/lib/content";

import { createTempContent } from "./content-fixtures";

test("buildContentRegistry creates a typed navigation tree", () => {
  const root = createTempContent({
    "index.md": [
      "---",
      'title: "Home"',
      'type: "site-index"',
      "---",
      "",
      "# Home",
      "",
      "Welcome to the docs.",
    ].join("\n"),
    "alpha/index.md": [
      "---",
      'title: "Alpha"',
      'domain: "alpha"',
      'type: "domain-index"',
      "order: 1",
      'eyebrow: "Alpha domain"',
      "---",
      "",
      "# Alpha",
      "",
      "Alpha overview.",
    ].join("\n"),
    "alpha/intro.md": [
      "---",
      'title: "Intro"',
      'nav_label: "Intro"',
      'domain: "alpha"',
      'section: "intro"',
      'type: "section"',
      "order: 1",
      "---",
      "",
      "# Intro",
      "",
      "First section.",
    ].join("\n"),
    "alpha/details.md": [
      "---",
      'title: "Details"',
      'nav_label: "Details"',
      'domain: "alpha"',
      'section: "details"',
      'type: "section"',
      "order: 2",
      "---",
      "",
      "# Details",
      "",
      "- Item one",
      "- Item two",
    ].join("\n"),
  });

  const registry = buildContentRegistry(root);

  assert.equal(registry.entries.length, 4);
  assert.equal(registry.domainTabs.length, 1);
  assert.equal(registry.domainTabs[0]?.key, "alpha");
  assert.deepEqual(
    registry.domainTabs[0]?.sections.map((section) => section.href),
    ["/alpha/intro", "/alpha/details"],
  );
  assert.match(registry.entries[0]?.plainText ?? "", /Welcome to the docs/);
  assert.match(registry.searchIndex[2]?.text ?? "", /First section/);
});
