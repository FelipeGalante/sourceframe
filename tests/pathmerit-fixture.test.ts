import assert from "node:assert/strict";
import path from "node:path";
import test from "node:test";

import { buildContentRegistry } from "@/lib/content";

test("pathmerit private fixture builds from its own content root", () => {
  const root = path.join(process.cwd(), "projects/pathmerit-fixture/content");
  const registry = buildContentRegistry(root);

  assert.equal(registry.rootEntry?.route, "/");
  assert.equal(registry.domainTabs.length, 3);
  assert.ok(registry.entryByRoute.has("/operations"));
  assert.ok(registry.entryByRoute.has("/knowledge"));
  assert.ok(registry.entryByRoute.has("/delivery"));
  assert.ok(registry.entries.some((entry) => entry.relativePath === "operations/kickoff.md"));
});
