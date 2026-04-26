import assert from "node:assert/strict";
import test from "node:test";

import {
  buildSearchExcerpt,
  groupSearchResults,
  highlightText,
  isSearchFocusShortcut,
  normalizeSearchText,
  rankSearchRecord,
  tokenizeSearchQuery,
} from "@/components/layout/search-utils";

const record = {
  id: "alpha",
  title: "Alpha Intro",
  domain: "Alpha Domain",
  section: "Intro",
  route: "/alpha/intro",
  href: "/alpha/intro",
  summary: "A short intro to alpha content.",
  contentType: "guide",
  owner: "Docs Team",
  status: "published",
  tags: ["alpha", "intro"],
  headings: ["Getting Started"],
  text: "Alpha content with docs and examples",
  excerpt: "Alpha content with docs and examples",
};

test("search helpers normalize and tokenize queries", () => {
  assert.equal(normalizeSearchText("  Alpha\n Beta  "), "alpha beta");
  assert.deepEqual(tokenizeSearchQuery("  Alpha\n Beta  "), ["alpha", "beta"]);
});

test("search helpers rank title, domain, headings, and body matches", () => {
  const terms = tokenizeSearchQuery("alpha docs");
  assert.ok(rankSearchRecord(record, terms) > 0);
});

test("search helpers boost exact phrase matches", () => {
  const phraseMatch = rankSearchRecord(record, tokenizeSearchQuery("alpha intro"), "alpha intro");
  const looseMatch = rankSearchRecord(record, tokenizeSearchQuery("alpha intro"));

  assert.ok(phraseMatch > looseMatch);
});

test("search helpers highlight matching text segments", () => {
  const parts = highlightText("Alpha content with docs", ["alpha", "docs"]);

  assert.deepEqual(
    parts.map((part) => ({ text: part.text, matched: part.matched })),
    [
      { text: "Alpha", matched: true },
      { text: " content with ", matched: false },
      { text: "docs", matched: true },
    ],
  );
});

test("search helpers build a focused excerpt around the first match", () => {
  const excerpt = buildSearchExcerpt(
    "First paragraph. Later in the document we mention alpha and continue with more context.",
    ["alpha"],
    "Fallback excerpt",
  );

  assert.match(excerpt, /alpha/);
  assert.match(excerpt, /context/);
  assert.match(excerpt, /^…|alpha/);
});

test("search helpers identify the keyboard shortcut", () => {
  assert.equal(
    isSearchFocusShortcut({
      key: "/",
      metaKey: false,
      ctrlKey: false,
      altKey: false,
      defaultPrevented: false,
    }),
    true,
  );
  assert.equal(
    isSearchFocusShortcut({
      key: "/",
      metaKey: true,
      ctrlKey: false,
      altKey: false,
      defaultPrevented: false,
    }),
    false,
  );
  assert.equal(
    isSearchFocusShortcut({
      key: "k",
      metaKey: true,
      ctrlKey: false,
      altKey: false,
      defaultPrevented: false,
    }),
    true,
  );
});

test("search helpers group results by domain", () => {
  const groups = groupSearchResults([
    {
      ...record,
      id: "alpha-1",
      domain: "Alpha Domain",
    },
    {
      ...record,
      id: "beta-1",
      domain: "Beta Domain",
    },
    {
      ...record,
      id: "alpha-2",
      domain: "Alpha Domain",
    },
  ]);

  assert.deepEqual(
    groups.map((group) => ({
      domain: group.domain,
      ids: group.records.map((item) => item.id),
    })),
    [
      { domain: "Alpha Domain", ids: ["alpha-1", "alpha-2"] },
      { domain: "Beta Domain", ids: ["beta-1"] },
    ],
  );
});
