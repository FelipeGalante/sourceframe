import assert from "node:assert/strict";
import test from "node:test";

import { renderToStaticMarkup } from "react-dom/server";

import { renderMdxToMarkup } from "../components/markdown/mdx-runtime.mjs";

test("MdxRenderer supports JSX components, tables, code blocks, and anchors", async () => {
  const html = renderToStaticMarkup(
    await renderMdxToMarkup(
      [
        "# MDX Heading",
        "",
        '<strong className="mdx-callout">MDX callout</strong>',
        "",
        "| A | B |",
        "| --- | --- |",
        "| 1 | 2 |",
        "",
        "```ts",
        "const answer = 42;",
        "```",
      ].join("\n"),
      "content/about/top.mdx",
    ),
  );

  assert.match(html, /pm-markdown/);
  assert.match(html, /MDX Heading/);
  assert.match(html, /mdx-callout/);
  assert.match(html, /MDX callout/);
  assert.match(html, /pm-table-scroll/);
  assert.match(html, /pm-code-block/);
  assert.match(html, /language-ts/);
  assert.match(html, /href="#mdx-heading"/);
});
