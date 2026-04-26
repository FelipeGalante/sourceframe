import assert from "node:assert/strict";
import path from "node:path";
import test from "node:test";

import {
  normalizeRelativePath,
  relativeSegmentsForFile,
  routeFromSegments,
  toKebabCase,
  toRouteSegment,
} from "@/lib/content";

test("route helpers normalize content slugs", () => {
  assert.equal(toKebabCase("Feature Flags"), "feature-flags");
  assert.equal(toKebabCase("Team's Roadmap"), "teams-roadmap");
  assert.equal(toRouteSegment("Source Archive"), "source-archive");
  assert.equal(routeFromSegments(["alpha", "intro"]), "/alpha/intro");
  assert.equal(routeFromSegments([]), "/");
});

test("route helpers read markdown-relative paths", () => {
  assert.deepEqual(relativeSegmentsForFile("alpha/index.md"), ["alpha"]);
  assert.deepEqual(relativeSegmentsForFile("alpha/beta/gamma.md"), ["alpha", "beta", "gamma"]);
  assert.equal(normalizeRelativePath(path.join("alpha", "beta", "gamma.md")), path.join("alpha", "beta", "gamma.md"));
});
