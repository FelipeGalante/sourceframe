import assert from "node:assert/strict";
import test from "node:test";

import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";

import { DomainTabs } from "@/components/layout/DomainTabs";
import { SectionLayout } from "@/components/layout/SectionLayout";
import { getContentRegistry } from "@/lib/content";

test("content registry exposes every non-root content route", () => {
  const registry = getContentRegistry();
  const routes = registry.entries
    .filter((entry) => entry.route !== "/")
    .map((entry) => entry.route);

  assert.equal(routes.length, registry.entries.length - 1);
  assert.ok(routes.includes("/technology/database"));
  assert.ok(routes.includes("/about/top"));
});

test("DomainTabs marks the active domain as current", () => {
  const registry = getContentRegistry();
  const html = renderToStaticMarkup(
    createElement(DomainTabs, {
      domains: registry.domainTabs,
      activeDomain: "technology",
    }),
  );

  assert.match(html, /aria-current="page"/);
  assert.match(html, /data-active="true"/);
});

test("SectionLayout marks the active section as current", () => {
  const registry = getContentRegistry();
  const domain = registry.domainTabs.find((item) => item.key === "technology");
  const entry = registry.entryByRoute.get("/technology/database");

  if (!domain || !entry) {
    throw new Error("Missing fixture entries for route chrome test.");
  }

  const html = renderToStaticMarkup(
    createElement(
      SectionLayout,
      {
        entry,
        domainTitle: domain.title,
        domainDescription: domain.description,
        domainEyebrow: domain.eyebrow,
        sections: domain.sections,
        activeSectionRoute: "/technology/database",
        children: createElement("div", null, "content"),
      },
    ),
  );

  assert.match(html, /aria-current="page"/);
  assert.match(html, /data-active="true"/);
});
