import assert from "node:assert/strict";
import test from "node:test";

import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";

import { ProjectSwitcher } from "@/components/layout/ProjectSwitcher";
import {
  buildProjectRuntime,
  getDefaultProject,
  getProjectBySlug,
  getProjectCatalog,
} from "@/lib/projects/catalog";

test("project catalog includes multiple validated project configs", () => {
  const catalog = getProjectCatalog();

  assert.ok(catalog.length >= 2);
  assert.equal(new Set(catalog.map((project) => project.slug)).size, catalog.length);
  assert.ok(catalog.every((project) => project.contentRoot.startsWith("/")));
});

test("single-project mode keeps the default project working at the root route", () => {
  const runtime = buildProjectRuntime(getDefaultProject(), "root");

  assert.equal(runtime.homeHref, "/");
  assert.equal(runtime.archiveHref, "/full-archive");
  assert.match(runtime.registry.rootEntry?.title ?? "", /PathMerit/);
  assert.ok(runtime.projectSwitcher.some((project) => project.href === "/projects/client-portal"));
});

test("project mode renders a separate content root and project-specific navigation", () => {
  const project = getProjectBySlug("client-portal");

  if (!project) {
    throw new Error("Missing client portal project fixture.");
  }

  const runtime = buildProjectRuntime(project, "project");

  assert.equal(runtime.homeHref, "/projects/client-portal");
  assert.equal(runtime.archiveHref, "/projects/client-portal/full-archive");
  assert.equal(runtime.registry.rootEntry?.title, "Client Portal");
  assert.ok(runtime.registry.domainTabs.some((domain) => domain.key === "operations"));
  assert.ok(runtime.registry.domainTabs.some((domain) => domain.key === "knowledge"));
  assert.ok(
    runtime.registry.searchIndex.every((record) =>
      record.href.startsWith("/projects/client-portal"),
    ),
  );
});

test("project switcher renders active project state", () => {
  const project = getProjectBySlug("client-portal");

  if (!project) {
    throw new Error("Missing client portal project fixture.");
  }

  const runtime = buildProjectRuntime(project, "project");
  const html = renderToStaticMarkup(
    createElement(ProjectSwitcher, {
      projects: runtime.projectSwitcher,
    }),
  );

  assert.match(html, /aria-current="page"/);
  assert.match(html, /Client Portal/);
  assert.match(html, /PathMerit/);
});
