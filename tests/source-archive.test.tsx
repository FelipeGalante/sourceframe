import assert from "node:assert/strict";
import test from "node:test";

import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";

import { ArchiveIndex, ArchiveNotice, SourceProvenance } from "@/components/archive";
import { MarkdownRenderer } from "@/lib/markdown";
import { buildContentRegistry } from "@/lib/content";

import { createTempContent } from "./content-fixtures";

test("source archive pages remain searchable and render provenance metadata", () => {
  const root = createTempContent({
    "index.md": ["---", 'title: "Home"', 'type: "site-index"', "---", "# Home"].join("\n"),
    "about/index.md": [
      "---",
      'title: "About"',
      'domain: "about"',
      'type: "domain-index"',
      "order: 1",
      "---",
      "",
      "# About",
    ].join("\n"),
    "about/archive.md": [
      "---",
      'title: "Archive Index"',
      'domain: "about"',
      'section: "archive"',
      'type: "section-index"',
      "order: 2",
      "---",
      "",
      "# Archive Index",
    ].join("\n"),
    "about/sources.md": [
      "---",
      'title: "Source Archive"',
      'domain: "about"',
      'section: "sources"',
      'type: "section"',
      'contentType: "source-archive"',
      'status: "archived"',
      "order: 4",
      'origin: "PathMerit original brief"',
      'sourceFile: "preview.html"',
      'importedAt: "2026-04-26"',
      'importedBy: "SourceFrame"',
      'canonicalStatus: "superseded"',
      "relatedCanonicalPages:",
      '  - "/about/archive"',
      '  - "/product"',
      "---",
      "",
      "Historical source text.",
    ].join("\n"),
    "about/archive/product-brief.md": [
      "---",
      'title: "Product Brief Archive"',
      'domain: "about"',
      'section: "archive"',
      'type: "reference"',
      'contentType: "source-archive"',
      'status: "archived"',
      "order: 1",
      'origin: "PathMerit original brief"',
      'sourceFile: "preview.html"',
      'importedAt: "2026-04-26"',
      'importedBy: "SourceFrame"',
      'canonicalStatus: "superseded"',
      "relatedCanonicalPages:",
      '  - "/product"',
      "---",
      "",
      "Historical product excerpt.",
    ].join("\n"),
  });

  const registry = buildContentRegistry(root);
  const sources = registry.entryByRoute.get("/about/sources");

  if (!sources) {
    throw new Error("Missing source archive fixture.");
  }

  assert.equal(sources.contentType, "source-archive");
  assert.match(
    registry.searchIndex.find((record) => record.route === "/about/sources")?.text ?? "",
    /PathMerit original brief/i,
  );

  const noticeHtml = renderToStaticMarkup(createElement(ArchiveNotice, { entry: sources }));
  const provenanceHtml = renderToStaticMarkup(createElement(SourceProvenance, { entry: sources }));
  const indexHtml = renderToStaticMarkup(
    createElement(ArchiveIndex, {
      entries: registry.entries,
    }),
  );
  const literalHtml = renderToStaticMarkup(
    createElement(MarkdownRenderer, {
      markdown: "Historical source text.",
      sourceRelativePath: "about/sources.md",
      literalSource: true,
    }),
  );

  assert.match(noticeHtml, /Archived source/i);
  assert.match(noticeHtml, /superseded/i);
  assert.match(provenanceHtml, /Source provenance/i);
  assert.match(provenanceHtml, /PathMerit original brief/i);
  assert.match(provenanceHtml, /preview\.html/i);
  assert.match(indexHtml, /Historical source material/i);
  assert.match(indexHtml, /\/about\/sources/i);
  assert.match(indexHtml, /\/about\/archive\/product-brief/i);
  assert.match(literalHtml, /Historical source text\./i);
});
