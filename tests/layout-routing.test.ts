import assert from "node:assert/strict";
import test from "node:test";

import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";

import { DomainTabs } from "@/components/layout/DomainTabs";
import { SectionLayout } from "@/components/layout/SectionLayout";
import { buildContentRegistry } from "@/lib/content";

import { createTempContent } from "./content-fixtures";

test("content registry exposes every non-root content route", () => {
  const root = createTempContent({
    "index.md": ["---", 'title: "Home"', 'type: "site-index"', "---", "# Home"].join("\n"),
    "technology/index.md": [
      "---",
      'title: "Technology"',
      'domain: "technology"',
      'type: "domain-index"',
      "order: 1",
      "---",
      "",
      "# Technology",
    ].join("\n"),
    "technology/database.md": [
      "---",
      'title: "Database"',
      'domain: "technology"',
      'section: "database"',
      'type: "section"',
      "order: 1",
      "---",
      "",
      "# Database",
    ].join("\n"),
    "about/index.md": [
      "---",
      'title: "About"',
      'domain: "about"',
      'type: "domain-index"',
      "order: 2",
      "---",
      "",
      "# About",
    ].join("\n"),
  });
  const registry = buildContentRegistry(root);
  const routes = registry.entries
    .filter((entry) => entry.route !== "/")
    .map((entry) => entry.route);

  assert.equal(routes.length, registry.entries.length - 1);
  assert.ok(routes.includes("/technology/database"));
  assert.ok(routes.includes("/about"));
});

test("DomainTabs marks the active domain as current", () => {
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
    "docs/getting-started.md": [
      "---",
      'title: "Getting Started"',
      'domain: "docs"',
      'section: "getting-started"',
      'type: "section"',
      "order: 1",
      "---",
      "",
      "# Getting Started",
    ].join("\n"),
  });
  const registry = buildContentRegistry(root);
  const html = renderToStaticMarkup(
    createElement(DomainTabs, {
      domains: registry.domainTabs,
      activeDomain: "docs",
    }),
  );

  assert.match(html, /aria-current="page"/);
  assert.match(html, /data-active="true"/);
});

test("SectionLayout marks the active section as current", () => {
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
    "docs/database.md": [
      "---",
      'title: "Database"',
      'domain: "docs"',
      'section: "database"',
      'type: "section"',
      "order: 1",
      "---",
      "",
      "# Database",
    ].join("\n"),
  });
  const registry = buildContentRegistry(root);
  const domain = registry.domainTabs.find((item) => item.key === "docs");
  const entry = registry.entryByRoute.get("/docs/database");

  if (!domain || !entry) {
    throw new Error("Missing fixture entries for route chrome test.");
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
        activeSectionRoute: "/docs/database",
      },
      createElement("div", null, "content"),
    ),
  );

  assert.match(html, /aria-current="page"/);
  assert.match(html, /data-active="true"/);
});
