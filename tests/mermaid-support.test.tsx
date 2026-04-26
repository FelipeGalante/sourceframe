import assert from "node:assert/strict";
import test from "node:test";

import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";

import { MermaidBlock, MermaidFallback } from "@/components/markdown/MermaidBlock";

test("MermaidBlock renders a client shell with copy affordance", () => {
  const html = renderToStaticMarkup(
    createElement(MermaidBlock, {
      code: ["flowchart TD", "  A-->B"].join("\n"),
    }),
  );

  assert.match(html, /pm-mermaid-block/);
  assert.match(html, /Copy source/);
  assert.match(html, /pm-mermaid-stage/);
});

test("MermaidFallback renders readable source when diagrams fail", () => {
  const html = renderToStaticMarkup(
    createElement(MermaidFallback, {
      code: ["sequenceDiagram", "  Browser->>Next.js: Request page"].join("\n"),
      error: "Mermaid parser failed.",
    }),
  );

  assert.match(html, /Mermaid parser failed\./);
  assert.match(html, /pm-mermaid-fallback/);
  assert.match(html, /sequenceDiagram/);
  assert.match(html, /Browser-&gt;&gt;Next\.js: Request page/);
});
