import assert from "node:assert/strict";
import test from "node:test";

import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";

import { MarkdownRenderer } from "@/lib/markdown";

test("MarkdownRenderer supports GFM tables, code blocks, anchors, Mermaid, and details", () => {
  const html = renderToStaticMarkup(
    createElement(MarkdownRenderer, {
      markdown: [
        "# Heading",
        "",
        "Paragraph with [a route](./next.md).",
        "",
        "| A | B |",
        "| --- | --- |",
        "| 1 | 2 |",
        "",
        "```ts",
        "const answer = 42;",
        "```",
        "",
        "```mermaid",
        "flowchart TD",
        "  A-->B",
        "```",
        "",
        "<details>",
        "<summary>More</summary>",
        "<p>Hidden content</p>",
        "</details>",
      ].join("\n"),
      sourceRelativePath: "content/page.md",
    }),
  );

  assert.match(html, /pm-markdown/);
  assert.match(html, /pm-table-scroll/);
  assert.match(html, /pm-code-block/);
  assert.match(html, /language-ts/);
  assert.match(html, /href="#heading"/);
  assert.match(html, /mermaid/);
  assert.match(html, /<details>/);
  assert.match(html, /<summary>More<\/summary>/);
});

test("MarkdownRenderer keeps raw HTML enabled by default", () => {
  const html = renderToStaticMarkup(
    createElement(MarkdownRenderer, {
      markdown: [
        "# Safety",
        "",
        "<script>alert('xss')</script>",
        "",
        "<details>",
        "<summary>Safe</summary>",
        "<p>Allowed</p>",
        "</details>",
      ].join("\n"),
      sourceRelativePath: "content/page.md",
    }),
  );

  assert.doesNotMatch(html, /<script>/);
  assert.match(html, /<details>/);
  assert.match(html, /<summary>Safe<\/summary>/);
  assert.match(html, /Allowed/);
  assert.match(html, /Safety/);
});

test("MarkdownRenderer can disable raw HTML handling", () => {
  const html = renderToStaticMarkup(
    createElement(MarkdownRenderer, {
      markdown: [
        "# Plain markdown",
        "",
        "<details>",
        "<summary>Hidden</summary>",
        "<p>Removed</p>",
        "</details>",
      ].join("\n"),
      sourceRelativePath: "content/page.md",
      allowRawHtml: false,
    }),
  );

  assert.match(html, /Plain markdown/);
  assert.doesNotMatch(html, /<details>/);
  assert.doesNotMatch(html, /<summary>/);
  assert.doesNotMatch(html, /Removed/);
});

test("MarkdownRenderer renders the about source archive as literal code", () => {
  const html = renderToStaticMarkup(
    createElement(MarkdownRenderer, {
      markdown: [
        "# Archive Heading",
        "",
        "<script>alert('xss')</script>",
        "",
        "```md",
        "## Not a rendered heading",
        "```",
      ].join("\n"),
      sourceRelativePath: "content/about/sources.md",
    }),
  );

  assert.match(html, /pm-code-block/);
  assert.match(html, /Archive Heading/);
  assert.match(html, /&lt;script&gt;alert\(&#x27;xss&#x27;\)&lt;\/script&gt;/);
  assert.match(html, /## Not a rendered heading/);
  assert.doesNotMatch(html, /pm-table-scroll/);
  assert.doesNotMatch(html, /pm-content-body/);
});
