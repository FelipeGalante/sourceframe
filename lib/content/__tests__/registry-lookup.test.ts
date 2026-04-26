import assert from "node:assert/strict";
import test from "node:test";

import { buildContentRegistry } from "@/lib/content";

import { createTempContent } from "../../../tests/content-fixtures";

test("buildContentRegistry indexes entries by relative path and route", () => {
  const root = createTempContent({
    "index.md": ["---", 'title: "Home"', 'type: "site-index"', "---", "# Home"].join("\n"),
    "docs/index.md": [
      "---",
      'title: "Docs"',
      'domain: "docs"',
      'type: "domain-index"',
      "order: 1",
      "---",
      "",
      "# Docs",
    ].join("\n"),
    "docs/intro.md": [
      "---",
      'title: "Intro"',
      'nav_label: "Intro"',
      'domain: "docs"',
      'section: "intro"',
      'type: "section"',
      "order: 1",
      "---",
      "",
      "# Intro",
      "",
      "Read [docs](./index.md).",
    ].join("\n"),
  });

  const registry = buildContentRegistry(root);

  assert.equal(registry.entryByRelativePath.get("docs/intro.md")?.route, "/docs/intro");
  assert.equal(registry.entryByRoute.get("/docs")?.title, "Docs");
});
