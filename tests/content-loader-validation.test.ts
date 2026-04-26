import assert from "node:assert/strict";
import test from "node:test";

import { buildContentRegistry } from "@/lib/content";

import { createTempContent } from "./content-fixtures";

test("buildContentRegistry throws on duplicate routes", () => {
  const root = createTempContent({
    "index.md": ["---", 'title: "Home"', 'type: "site-index"', "---", "# Home"].join("\n"),
    "docs.md": [
      "---",
      'title: "Docs"',
      'domain: "docs"',
      'type: "domain-index"',
      "order: 1",
      "---",
      "",
      "# Docs",
    ].join("\n"),
    "docs/index.md": [
      "---",
      'title: "Docs Duplicate"',
      'domain: "docs"',
      'type: "domain-index"',
      "order: 2",
      "---",
      "",
      "# Docs Duplicate",
    ].join("\n"),
  });

  assert.throws(() => buildContentRegistry(root), /Duplicate route/);
});

test("buildContentRegistry throws on missing required frontmatter", () => {
  const root = createTempContent({
    "index.md": ["---", 'title: "Home"', 'type: "site-index"', "---", "# Home"].join("\n"),
    "docs/index.md": [
      "---",
      'domain: "docs"',
      'type: "domain-index"',
      "order: 1",
      "---",
      "",
      "# Docs",
    ].join("\n"),
  });

  assert.throws(() => buildContentRegistry(root), /title/i);
});

test("buildContentRegistry accepts quoted numeric order values", () => {
  const root = createTempContent({
    "index.md": ["---", 'title: "Home"', 'type: "site-index"', "---", "# Home"].join("\n"),
    "docs/index.md": [
      "---",
      'title: "Docs"',
      'domain: "docs"',
      'type: "domain-index"',
      'order: "1"',
      "---",
      "",
      "# Docs",
    ].join("\n"),
  });

  const registry = buildContentRegistry(root);

  assert.equal(registry.domainTabs[0]?.order, 1);
});

test("buildContentRegistry records MDX content format", () => {
  const root = createTempContent({
    "index.md": ["---", 'title: "Home"', 'type: "site-index"', "---", "# Home"].join("\n"),
    "docs/index.mdx": [
      "---",
      'title: "Docs"',
      'domain: "docs"',
      'type: "domain-index"',
      "order: 1",
      "---",
      "",
      "# Docs",
    ].join("\n"),
  });

  const registry = buildContentRegistry(root);

  assert.equal(registry.entryByRelativePath.get("docs/index.mdx")?.format, "mdx");
});
