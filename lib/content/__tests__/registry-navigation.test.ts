import assert from "node:assert/strict";
import test from "node:test";

import { buildContentRegistry } from "@/lib/content";

import { createTempContent } from "../../../tests/content-fixtures";

test("buildContentRegistry builds a search index and navigation tree", () => {
  const root = createTempContent({
    "index.md": ["---", 'title: "Home"', 'type: "site-index"', "---", "", "# Home"].join("\n"),
    "alpha/index.md": [
      "---",
      'title: "Alpha"',
      'domain: "alpha"',
      'type: "domain-index"',
      "order: 1",
      "---",
      "",
      "# Alpha",
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
      "See [details](./details.md).",
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
    ].join("\n"),
  });

  const registry = buildContentRegistry(root);

  assert.equal(registry.domainTabs[0]?.sectionCount, 2);
  assert.deepEqual(
    registry.domainTabs[0]?.sections.map((section) => section.href),
    ["/alpha/intro", "/alpha/details"],
  );
  assert.match(registry.searchIndex[2]?.text ?? "", /See/);
  assert.match(registry.searchIndex[2]?.text ?? "", /Alpha/);
});
