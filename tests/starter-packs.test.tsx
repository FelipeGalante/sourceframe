import assert from "node:assert/strict";
import path from "node:path";
import test from "node:test";

import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";

import { MarkdownRenderer } from "@/lib/markdown";
import { buildContentRegistry } from "@/lib/content";

test("client project portal starter renders from its content root", () => {
  const root = path.join(process.cwd(), "templates/starter-packs/client-project-portal/content");
  const registry = buildContentRegistry(root);
  const home = registry.entryByRoute.get("/");
  const portal = registry.entryByRoute.get("/portal");

  if (!home || !portal) {
    throw new Error("Missing starter pack routes.");
  }

  const homeHtml = renderToStaticMarkup(
    createElement(MarkdownRenderer, {
      markdown: home.body,
      sourceRelativePath: home.relativePath,
    }),
  );
  const portalHtml = renderToStaticMarkup(
    createElement(MarkdownRenderer, {
      markdown: portal.body,
      sourceRelativePath: portal.relativePath,
    }),
  );

  assert.match(homeHtml, /Client Project Portal/i);
  assert.match(homeHtml, /\/portal/i);
  assert.match(portalHtml, /Portal/i);
  assert.match(portalHtml, /project updates/i);
});
