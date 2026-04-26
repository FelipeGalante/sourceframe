import assert from "node:assert/strict";
import test from "node:test";

import { extractMarkdownMeta } from "@/lib/content";

test("extractMarkdownMeta collects headings and normalizes plain text", () => {
  const meta = extractMarkdownMeta([
    "# Title",
    "",
    "Paragraph with",
    "line breaks.",
    "",
    "## Section",
    "",
    "- Item one",
    "- Item two",
  ].join("\n"));

  assert.deepEqual(meta.headings, ["Title", "Section"]);
  assert.equal(meta.plainText, "Title Paragraph with line breaks. Section Item one Item two");
  assert.equal(meta.excerpt, "Title Paragraph with line breaks. Section Item one Item two");
});

test("extractMarkdownMeta trims long excerpts", () => {
  const meta = extractMarkdownMeta(`# Title\n\n${"a".repeat(260)}`);

  assert.equal(meta.headings[0], "Title");
  assert.equal(meta.excerpt.length, 220);
  assert.equal(meta.excerpt, meta.plainText.slice(0, 220));
});
