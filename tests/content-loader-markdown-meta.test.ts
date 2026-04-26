import assert from "node:assert/strict";
import test from "node:test";

import { extractMarkdownMeta } from "@/lib/content";

test("extractMarkdownMeta returns headings and plain text", () => {
  const meta = extractMarkdownMeta(
    ["# Title", "", "Some paragraph text.", "", "## Section", "", "- Item one", "- Item two"].join(
      "\n",
    ),
  );

  assert.deepEqual(meta.headings, ["Title", "Section"]);
  assert.match(meta.plainText, /Some paragraph text/);
  assert.match(meta.plainText, /Item one/);
});
