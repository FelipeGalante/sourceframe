import assert from "node:assert/strict";
import test from "node:test";

import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";

import { StaleContentWarning } from "@/components/lifecycle";
import { getStaleContentState } from "@/lib/content";
import type { ContentEntry } from "@/lib/content";

const baseEntry = {
  id: "about/releases/1-1-0.md",
  route: "/about/releases/1-1-0",
  href: "/about/releases/1-1-0",
  filePath: "/tmp/about/releases/1-1-0.md",
  relativePath: "about/releases/1-1-0.md",
  parentRoute: "/about/releases",
  depth: 3,
  slugSegments: ["about", "releases", "1-1-0"],
  title: "Release v1.1.0",
  navLabel: "Release v1.1.0",
  type: "section",
  domain: "about",
  section: "releases",
  contentType: "release-note",
  status: "deprecated",
  version: "1.1.0",
  updated: "2026-02-01",
  lastReviewed: "2026-02-01",
  reviewAfter: "2026-03-01",
  deprecatedSince: "2026-04-01",
  body: "# Release v1.1.0",
  format: "markdown",
  plainText: "Release v1.1.0",
  excerpt: "Release v1.1.0",
  headings: ["Release v1.1.0"],
  frontmatter: {
    title: "Release v1.1.0",
    type: "section",
    domain: "about",
    section: "releases",
    order: 2,
  },
} satisfies ContentEntry;

const reviewDueEntry = {
  ...baseEntry,
  id: "about/changelog/2026-02-14.md",
  route: "/about/changelog/2026-02-14",
  href: "/about/changelog/2026-02-14",
  title: "February 2026 maintenance update",
  navLabel: "February 2026 maintenance update",
  contentType: "changelog",
  version: "2026.02.14",
  updated: "2026-02-14",
  lastReviewed: "2026-02-14",
  reviewAfter: "2026-03-01",
  deprecatedSince: undefined,
} satisfies ContentEntry;

test("getStaleContentState marks review-due pages as stale", () => {
  const state = getStaleContentState(reviewDueEntry, new Date("2026-04-26T00:00:00Z"));

  assert.equal(state.isStale, true);
  assert.equal(state.reason, "review-due");
});

test("StaleContentWarning renders review metadata", () => {
  const html = renderToStaticMarkup(
    createElement(StaleContentWarning, {
      entry: baseEntry,
      reason: "deprecated",
    }),
  );

  assert.match(html, /Deprecated content/);
  assert.match(html, /Deprecated since:/);
  assert.match(html, /Review after:/);
  assert.match(html, /Last reviewed:/);
});
