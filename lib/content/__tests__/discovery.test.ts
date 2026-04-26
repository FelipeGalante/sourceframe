import assert from "node:assert/strict";
import test from "node:test";

import { discoverMarkdownFiles } from "@/lib/content";

import { createTempContent } from "../../../tests/content-fixtures";

test("discoverMarkdownFiles ignores dotfiles and non-markdown files", () => {
  const root = createTempContent({
    "index.md": "# Home",
    "alpha/intro.md": "# Intro",
    "alpha/notes.mdx": "# Notes",
    "alpha/notes.txt": "skip me",
    ".cache/ignored.md": "# Ignore",
    "beta/.draft.md": "# Draft",
  });

  const files = discoverMarkdownFiles(root).map((file) =>
    file.replaceAll(root, "").replace(/^[/\\]/, ""),
  );

  assert.deepEqual(files.sort(), ["alpha/intro.md", "alpha/notes.mdx", "index.md"]);
});
