import assert from "node:assert/strict";
import test from "node:test";

import { summarizeContentTree, validateContentTree } from "@/lib/content";

import { createTempContent } from "./content-fixtures";

test("validateContentTree reports file paths for missing required frontmatter", () => {
  const missingTitleRoot = createTempContent({
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

  assert.throws(() => validateContentTree(missingTitleRoot), /docs\/index\.md/);
  assert.throws(() => validateContentTree(missingTitleRoot), /title/i);

  const missingDomainRoot = createTempContent({
    "index.md": ["---", 'title: "Home"', 'type: "site-index"', "---", "# Home"].join("\n"),
    "docs/index.md": [
      "---",
      'title: "Docs"',
      'type: "domain-index"',
      "order: 1",
      "---",
      "",
      "# Docs",
    ].join("\n"),
  });

  assert.throws(() => validateContentTree(missingDomainRoot), /docs\/index\.md/);
  assert.throws(() => validateContentTree(missingDomainRoot), /domain/i);

  const missingOrderRoot = createTempContent({
    "index.md": ["---", 'title: "Home"', 'type: "site-index"', "---", "# Home"].join("\n"),
    "docs/index.md": [
      "---",
      'title: "Docs"',
      'domain: "docs"',
      'type: "domain-index"',
      "---",
      "",
      "# Docs",
    ].join("\n"),
  });

  assert.throws(() => validateContentTree(missingOrderRoot), /docs\/index\.md/);
  assert.throws(() => validateContentTree(missingOrderRoot), /order/i);
});

test("validateContentTree rejects invalid enum frontmatter values", () => {
  const root = createTempContent({
    "index.md": ["---", 'title: "Home"', 'type: "site-index"', "---", "# Home"].join("\n"),
    "docs/index.md": [
      "---",
      'title: "Docs"',
      'domain: "docs"',
      'type: "domain-index"',
      "order: 1",
      'status: "pending"',
      'visibility: "private"',
      'contentType: "invalid"',
      "---",
      "",
      "# Docs",
    ].join("\n"),
  });

  assert.throws(() => validateContentTree(root), /docs\/index\.md/);
  assert.throws(() => validateContentTree(root), /status/i);
  assert.throws(() => validateContentTree(root), /visibility/i);
  assert.throws(() => validateContentTree(root), /contentType/i);
});

test("validateContentTree rejects duplicate routes and unknown domains", () => {
  const duplicateRouteRoot = createTempContent({
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

  assert.throws(() => validateContentTree(duplicateRouteRoot), /Duplicate route/);

  const unknownDomainRoot = createTempContent({
    "index.md": ["---", 'title: "Home"', 'type: "site-index"', "---", "# Home"].join("\n"),
    "guide/intro.md": [
      "---",
      'title: "Intro"',
      'domain: "guide"',
      'section: "intro"',
      'type: "section"',
      "order: 1",
      "---",
      "",
      "# Intro",
    ].join("\n"),
  });

  assert.throws(() => validateContentTree(unknownDomainRoot), /unknown domain/i);
  assert.throws(() => validateContentTree(unknownDomainRoot), /guide\/intro\.md/);
});

test("validateContentTree rejects broken internal markdown links", () => {
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
      "",
      "See [missing](./missing.md).",
    ].join("\n"),
  });

  assert.throws(() => validateContentTree(root), /broken relative link/i);
  assert.throws(() => validateContentTree(root), /docs\/index\.md/);
});

test("validateContentTree accepts valid content", () => {
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
      "",
      "See [intro](./intro.md).",
    ].join("\n"),
    "docs/intro.md": [
      "---",
      'title: "Intro"',
      'domain: "docs"',
      'section: "intro"',
      'type: "section"',
      "order: 1",
      "---",
      "",
      "# Intro",
      "",
      "Welcome to the docs.",
    ].join("\n"),
  });

  const registry = validateContentTree(root);
  const summary = summarizeContentTree(registry);

  assert.equal(registry.domainTabs.length, 1);
  assert.equal(registry.entryByRoute.has("/docs/intro"), true);
  assert.equal(summary.contentFiles, 3);
  assert.equal(summary.domains, 1);
  assert.equal(summary.relativeLinksChecked, 1);
});
