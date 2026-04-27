import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import test from "node:test";

import { buildContentRegistry } from "@/lib/content";
import { buildAgentContextBundle, buildAgentContextMarkdown } from "@/lib/agent-context";
import { siteConfig as defaultSiteConfig } from "@/site.config.base";

import { createTempContent } from "./content-fixtures";

function makeSource(slug: string, contentRoot: string, routeBase: string) {
  const registry = buildContentRegistry({
    rootDir: contentRoot,
    siteConfig: defaultSiteConfig,
    routeBase,
  });

  return {
    slug,
    name: slug === "alpha" ? "Alpha Project" : "Beta Project",
    subtitle: `${slug} subtitle`,
    description: `${slug} description`,
    themeAccent: slug === "alpha" ? "#7c8cff" : "#45c2b6",
    contentRoot,
    contentRootLabel: `projects/${slug}/content`,
    routeBase,
    registry,
  };
}

test("buildAgentContextBundle includes routes and source paths across sections", () => {
  const alphaRoot = createTempContent({
    "index.md": ["---", 'title: "Home"', 'type: "site-index"', "---", "# Home"].join("\n"),
    "product/index.md": [
      "---",
      'title: "Product"',
      'domain: "product"',
      'type: "domain-index"',
      "order: 1",
      "---",
      "",
      "# Product",
    ].join("\n"),
    "product/prd.md": [
      "---",
      'title: "PRD"',
      'domain: "product"',
      'section: "prd"',
      'type: "section"',
      "order: 1",
      'contentType: "prd"',
      'status: "active"',
      'tags: ["alpha", "requirements"]',
      "---",
      "",
      "# PRD",
      "",
      "## Implementation prompt",
      "",
      "Use this when building the product.",
    ].join("\n"),
    "technology/index.md": [
      "---",
      'title: "Technology"',
      'domain: "technology"',
      'type: "domain-index"',
      "order: 2",
      "---",
      "",
      "# Technology",
    ].join("\n"),
    "technology/architecture.md": [
      "---",
      'title: "Architecture"',
      'domain: "technology"',
      'section: "architecture"',
      'type: "section"',
      "order: 1",
      'contentType: "architecture"',
      "---",
      "",
      "# Architecture",
    ].join("\n"),
    "technology/api.md": [
      "---",
      'title: "API Reference"',
      'domain: "technology"',
      'section: "api"',
      'type: "section"',
      "order: 2",
      'contentType: "api"',
      'tags: ["alpha", "api"]',
      "---",
      "",
      "# API Reference",
    ].join("\n"),
    "technology/database/index.md": [
      "---",
      'title: "Database"',
      'domain: "technology"',
      'section: "database"',
      'type: "section"',
      "order: 3",
      "---",
      "",
      "# Database",
    ].join("\n"),
    "technology/database/users.md": [
      "---",
      'title: "Users"',
      'domain: "technology"',
      'section: "database"',
      'type: "database-table"',
      "order: 1",
      'database_domain: "core"',
      'table_name: "users"',
      "---",
      "",
      "# Users",
    ].join("\n"),
    "technology/phases.md": [
      "---",
      'title: "Phases"',
      'domain: "technology"',
      'section: "phases"',
      'type: "section"',
      "order: 4",
      'visibility: "internal"',
      'contentType: "reference"',
      'tags: ["prompt"]',
      "---",
      "",
      "# Phases",
      "",
      "## Implementation prompt",
      "",
      "Build the docs workflow.",
    ].join("\n"),
  });

  const betaRoot = createTempContent({
    "index.md": ["---", 'title: "Home"', 'type: "site-index"', "---", "# Home"].join("\n"),
    "ops/index.md": [
      "---",
      'title: "Operations"',
      'domain: "ops"',
      'type: "domain-index"',
      "order: 1",
      "---",
      "",
      "# Operations",
    ].join("\n"),
    "ops/release.md": [
      "---",
      'title: "Release Note"',
      'domain: "ops"',
      'section: "release"',
      'type: "section"',
      "order: 1",
      'contentType: "release-note"',
      'status: "active"',
      'tags: ["launch"]',
      "---",
      "",
      "# Release Note",
    ].join("\n"),
  });

  const bundle = buildAgentContextBundle(
    [
      makeSource("alpha", alphaRoot, "/projects/alpha"),
      makeSource("beta", betaRoot, "/projects/beta"),
    ],
    {},
  );

  assert.equal(bundle.projects.length, 2);
  assert.ok(bundle.entries.some((entry) => entry.href === "/projects/alpha/product/prd"));
  assert.ok(
    bundle.entries.some((entry) => entry.sourcePath === "projects/alpha/content/product/prd.md"),
  );
  assert.ok(bundle.sections.some((section) => section.key === "active-prds"));
  assert.ok(bundle.sections.some((section) => section.key === "architecture-pages"));
  assert.ok(bundle.sections.some((section) => section.key === "decisions") === false);
  assert.ok(bundle.sections.some((section) => section.key === "api-docs"));
  assert.ok(bundle.sections.some((section) => section.key === "schema-docs"));
  assert.ok(bundle.sections.some((section) => section.key === "implementation-prompts"));

  const markdown = buildAgentContextMarkdown(bundle);
  assert.match(markdown, /SourceFrame Agent Context Bundle/);
  assert.match(markdown, /Codex/);
  assert.match(markdown, /Claude Code/);
  assert.match(markdown, /projects\/alpha\/product\/prd/);
  assert.match(markdown, /projects\/alpha\/content\/product\/prd\.md/);
});

test("buildAgentContextBundle filters by project, domain, contentType, and tag", () => {
  const alphaRoot = createTempContent({
    "index.md": ["---", 'title: "Home"', 'type: "site-index"', "---", "# Home"].join("\n"),
    "product/index.md": [
      "---",
      'title: "Product"',
      'domain: "product"',
      'type: "domain-index"',
      "order: 1",
      "---",
      "",
      "# Product",
    ].join("\n"),
    "product/prd.md": [
      "---",
      'title: "PRD"',
      'domain: "product"',
      'section: "prd"',
      'type: "section"',
      "order: 1",
      'contentType: "prd"',
      'status: "active"',
      'tags: ["alpha", "requirements"]',
      "---",
      "",
      "# PRD",
    ].join("\n"),
  });

  const betaRoot = createTempContent({
    "index.md": ["---", 'title: "Home"', 'type: "site-index"', "---", "# Home"].join("\n"),
    "ops/index.md": [
      "---",
      'title: "Operations"',
      'domain: "ops"',
      'type: "domain-index"',
      "order: 1",
      "---",
      "",
      "# Operations",
    ].join("\n"),
    "ops/release.md": [
      "---",
      'title: "Release Note"',
      'domain: "ops"',
      'section: "release"',
      'type: "section"',
      "order: 1",
      'contentType: "release-note"',
      'status: "active"',
      'tags: ["launch"]',
      "---",
      "",
      "# Release Note",
    ].join("\n"),
  });

  const bundle = buildAgentContextBundle(
    [
      makeSource("alpha", alphaRoot, "/projects/alpha"),
      makeSource("beta", betaRoot, "/projects/beta"),
    ],
    { projectSlugs: ["alpha"], domains: ["product"], contentTypes: ["prd"], tags: ["alpha"] },
  );

  assert.deepEqual(bundle.filters.projectSlugs, ["alpha"]);
  assert.equal(bundle.projects.length, 1);
  assert.equal(bundle.entries.length, 1);
  assert.equal(bundle.entries[0]?.href, "/projects/alpha/product/prd");
  assert.equal(bundle.entries[0]?.sourcePath, "projects/alpha/content/product/prd.md");
  assert.equal(bundle.sections.length, 1);
  assert.ok(bundle.sections.some((section) => section.key === "active-prds"));
});

test("generate-agent-context prints help text", () => {
  const output = execFileSync(
    "node",
    ["--import", "tsx", "scripts/generate-agent-context.ts", "--help"],
    {
      cwd: process.cwd(),
      encoding: "utf8",
      env: {
        ...process.env,
        PATH: `/opt/homebrew/bin:${process.env.PATH ?? ""}`,
      },
    },
  );

  assert.match(output, /SourceFrame agent context generator/);
  assert.match(output, /--project/);
  assert.match(output, /--contentType/);
  assert.match(output, /--help/);
});
