import assert from "node:assert/strict";
import test from "node:test";

import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";

import { SectionLayout } from "@/components/layout/SectionLayout";
import { buildContentRegistry } from "@/lib/content";
import { validateSiteConfig } from "@/lib/site-config";
import { siteConfig as defaultSiteConfig } from "@/site.config.base";

import { createTempContent } from "./content-fixtures";

test("buildContentRegistry excludes internal and private pages when configured", () => {
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
    "docs/public.md": [
      "---",
      'title: "Public Page"',
      'domain: "docs"',
      'section: "public"',
      'type: "section"',
      "order: 1",
      "---",
      "",
      "# Public Page",
    ].join("\n"),
    "docs/internal.md": [
      "---",
      'title: "Internal Page"',
      'domain: "docs"',
      'section: "internal"',
      'type: "section"',
      "order: 2",
      'visibility: "internal"',
      "---",
      "",
      "# Internal Page",
    ].join("\n"),
    "docs/private.md": [
      "---",
      'title: "Private Page"',
      'domain: "docs"',
      'section: "private"',
      'type: "section"',
      "order: 3",
      'visibility: "private"',
      "---",
      "",
      "# Private Page",
    ].join("\n"),
  });

  const publicOnlyConfig = validateSiteConfig({
    ...defaultSiteConfig,
    contentVisibility: {
      include: ["public"],
      exclude: [],
    },
  });
  const registry = buildContentRegistry({ rootDir: root, siteConfig: publicOnlyConfig });

  assert.deepEqual(
    registry.entries.map((entry) => entry.route),
    ["/", "/docs", "/docs/public"],
  );
  assert.equal(registry.domainTabs[0]?.sectionCount, 1);
  assert.equal(
    registry.searchIndex.some((record) => record.route === "/docs/internal"),
    false,
  );
  assert.equal(
    registry.searchIndex.some((record) => record.route === "/docs/private"),
    false,
  );
  assert.equal(
    registry.searchIndex.some((record) => /Internal Page|Private Page/.test(record.text)),
    false,
  );
});

test("layout chrome shows visibility badges when private content is included", () => {
  const root = createTempContent({
    "index.md": ["---", 'title: "Home"', 'type: "site-index"', "---", "# Home"].join("\n"),
    "docs/index.md": [
      "---",
      'title: "Docs"',
      'domain: "docs"',
      'type: "domain-index"',
      "order: 1",
      'visibility: "private"',
      "---",
      "",
      "# Docs",
    ].join("\n"),
    "docs/public.md": [
      "---",
      'title: "Public Page"',
      'domain: "docs"',
      'section: "public"',
      'type: "section"',
      "order: 1",
      "---",
      "",
      "# Public Page",
    ].join("\n"),
    "docs/internal.md": [
      "---",
      'title: "Internal Page"',
      'domain: "docs"',
      'section: "internal"',
      'type: "section"',
      "order: 2",
      'visibility: "internal"',
      "---",
      "",
      "# Internal Page",
    ].join("\n"),
    "docs/private.md": [
      "---",
      'title: "Private Page"',
      'domain: "docs"',
      'section: "private"',
      'type: "section"',
      "order: 3",
      'visibility: "private"',
      "---",
      "",
      "# Private Page",
    ].join("\n"),
  });

  const registry = buildContentRegistry(root);
  const domain = registry.domainTabs[0];
  const entry = registry.entryByRoute.get("/docs");

  if (!domain || !entry) {
    throw new Error("Missing visibility fixture entries.");
  }

  const html = renderToStaticMarkup(
    createElement(
      SectionLayout,
      {
        entry,
        domainTitle: domain.title,
        domainDescription: domain.description,
        domainEyebrow: domain.eyebrow,
        sections: domain.sections,
        activeSectionRoute: "/docs",
      },
      createElement("div", null, "content"),
    ),
  );

  assert.match(html, /pm-visibility-badge pm-visibility-private/);
});
