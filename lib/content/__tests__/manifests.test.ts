import assert from "node:assert/strict";
import test from "node:test";

import {
  buildContentManifest,
  buildContentRegistry,
  buildDatabaseTableManifest,
  buildExtractionReport,
} from "@/lib/content";

import { createTempContent } from "../../../tests/content-fixtures";

test("content manifest generation keeps the domain tree intact", () => {
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
      'source_panel: "panel-intro"',
      "---",
      "",
      "# Intro",
    ].join("\n"),
    "alpha/internal.md": [
      "---",
      'title: "Internal"',
      'nav_label: "Internal"',
      'domain: "alpha"',
      'section: "internal"',
      'type: "section"',
      'visibility: "internal"',
      "order: 2",
      'source_panel: "panel-internal"',
      "---",
      "",
      "# Internal",
    ].join("\n"),
    "alpha/data/users.md": [
      "---",
      'title: "Users"',
      'domain: "alpha"',
      'section: "data"',
      'type: "database-table"',
      "order: 1",
      'database_domain: "Data"',
      'table_name: "users"',
      'kicker: "Data"',
      'description: "User records"',
      "---",
      "",
      "# Users",
    ].join("\n"),
  });

  const registry = buildContentRegistry(root);
  const manifest = buildContentManifest(registry);
  const databaseTables = buildDatabaseTableManifest(registry);
  const report = buildExtractionReport(registry, manifest, databaseTables);

  assert.equal(manifest.source_file.length > 0, true);
  assert.equal(manifest.domains.length, 1);
  assert.equal(manifest.domains[0]?.key, "alpha");
  assert.deepEqual(
    manifest.domains[0]?.sections.map((section) => section.key),
    ["intro"],
  );
  assert.equal(manifest.domains[0]?.sections[0]?.panel_id, "panel-intro");
  assert.equal(manifest.domains[0]?.sections[0]?.path, "alpha/intro.md");

  assert.equal(databaseTables.length, 1);
  assert.equal(databaseTables[0]?.table_name, "users");
  assert.equal(databaseTables[0]?.database_domain, "Data");
  assert.equal(databaseTables[0]?.path, "alpha/data/users.md");

  assert.match(report, /Public content files discovered: 4/);
  assert.match(report, /Domains extracted: 1/);
  assert.match(report, /Database table files generated: 1/);
});
