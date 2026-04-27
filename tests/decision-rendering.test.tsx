import assert from "node:assert/strict";
import test from "node:test";

import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";

import { DecisionIndex, DecisionRecord, DecisionStatusBadge } from "@/components/decision";
import type { ContentEntry } from "@/lib/content";

test("decision record renders metadata and related links", () => {
  const entry = {
    route: "/technology/adr",
    href: "/technology/adr",
    relativePath: "technology/adr.md",
    format: "markdown",
    body: ["## Context", "", "The frontend needs a host."].join("\n"),
    decision: {
      title: "Use Vercel for the frontend",
      domain: "technology",
      status: "accepted",
      date: "2026-04-26",
      owner: "Platform",
      decisionType: "adr",
      relatedPages: [{ title: "Architecture", href: "/technology/architecture" }],
      supersedes: ["/technology/adr-v1"],
      supersededBy: [],
    },
  } as unknown as ContentEntry;

  const html = renderToStaticMarkup(createElement(DecisionRecord, { entry }));

  assert.match(html, /Use Vercel for the frontend/);
  assert.match(html, /accepted/);
  assert.match(html, /Architecture/);
  assert.match(html, /Supersedes/);
});

test("decision index groups by domain", () => {
  const html = renderToStaticMarkup(
    createElement(DecisionIndex, {
      groups: [
        {
          domain: "technology",
          title: "Technology",
          documents: [
            {
              route: "/technology/adr",
              href: "/technology/adr",
              relativePath: "technology/adr.md",
              sourcePath: "content/technology/adr.md",
              sourceFormat: "frontmatter",
              definition: {
                title: "Use Vercel for the frontend",
                domain: "technology",
                status: "accepted",
                date: "2026-04-26",
                owner: "Platform",
                decisionType: "adr",
                relatedPages: [],
                supersedes: [],
                supersededBy: [],
              },
            },
          ],
        },
      ],
    }),
  );

  assert.match(html, /Decision index/);
  assert.match(html, /Use Vercel for the frontend/);
  assert.match(html, /accepted/);
});

test("decision status badge keeps deprecated decisions visible", () => {
  const html = renderToStaticMarkup(createElement(DecisionStatusBadge, { status: "superseded" }));
  assert.match(html, /superseded/);
});
