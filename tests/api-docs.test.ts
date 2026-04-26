import assert from "node:assert/strict";
import path from "node:path";
import test from "node:test";

import { buildApiCatalog, loadApiDocument, normalizeApiDefinition } from "@/lib/api-docs";

import { createTempContent, writeFile } from "./content-fixtures";

test("normalizeApiDefinition trims fields and defaults optional collections", () => {
  const api = normalizeApiDefinition({
    title: "  Example API  ",
    description: "  A sample endpoint catalog. ",
    endpoints: [
      {
        group: " Auth ",
        method: " post ",
        path: " /auth/login ",
        summary: "  Authenticate a user. ",
        auth: { label: " JWT ", details: " Protected " },
        requestBodyExample: { language: " json ", body: ' {"demo":true} ' },
        responseExample: { language: " json ", body: ' {"data":null} ' },
        errorCodes: [{ code: " 401 ", message: " Unauthorized ", description: " Missing token " }],
      },
    ],
  });

  assert.equal(api.title, "Example API");
  assert.equal(api.description, "A sample endpoint catalog.");
  assert.equal(api.endpoints[0]?.group, "Auth");
  assert.equal(api.endpoints[0]?.method, "POST");
  assert.equal(api.endpoints[0]?.path, "/auth/login");
  assert.equal(api.endpoints[0]?.summary, "Authenticate a user.");
  assert.equal(api.endpoints[0]?.auth?.label, "JWT");
  assert.equal(api.endpoints[0]?.requestBodyExample?.body, '{"demo":true}');
  assert.equal(api.endpoints[0]?.responseExample?.body, '{"data":null}');
  assert.equal((api.endpoints[0]?.errorCodes ?? [])[0]?.code, "401");
});

test("loadApiDocument reads frontmatter and sidecar endpoint data", () => {
  const root = createTempContent({
    "alpha/api.md": [
      "---",
      'title: "API"',
      'domain: "alpha"',
      'section: "api"',
      'type: "section"',
      "api:",
      '  title: "Alpha API"',
      "  endpoints:",
      '    - group: "Alpha"',
      '      method: "get"',
      '      path: "/alpha/ping"',
      '      summary: "Health check."',
      "---",
      "",
      "# API",
    ].join("\n"),
    "beta/reference.md": [
      "---",
      'title: "Reference"',
      'domain: "beta"',
      'section: "api"',
      'type: "reference"',
      "---",
      "",
      "# Reference",
    ].join("\n"),
    "gamma/reference.md": [
      "---",
      'title: "Reference"',
      'domain: "gamma"',
      'section: "api"',
      'type: "reference"',
      "---",
      "",
      "# Reference",
    ].join("\n"),
  });

  writeFile(
    root,
    "beta/reference.api.json",
    JSON.stringify(
      {
        title: "Beta API",
        endpoints: [
          {
            group: "Beta",
            method: "POST",
            path: "/beta/demo",
            summary: "Create a beta demo.",
            responseExample: {
              language: "json",
              body: '{\n  "data": { "ok": true },\n  "error": null\n}',
            },
          },
        ],
      },
      null,
      2,
    ),
  );

  writeFile(
    root,
    "gamma/reference.api.yaml",
    [
      'title: "Gamma API"',
      "endpoints:",
      "  - group: Gamma",
      "    method: GET",
      '    path: "/gamma/ping"',
      '    summary: "Ping gamma."',
    ].join("\n"),
  );

  const frontmatterDoc = loadApiDocument(path.join(root, "alpha/api.md"), "alpha/api.md", {
    title: "Alpha API",
    endpoints: [{ group: "Alpha", method: "get", path: "/alpha/ping", summary: "Health check." }],
  });
  const jsonDoc = loadApiDocument(
    path.join(root, "beta/reference.md"),
    "beta/reference.md",
    undefined,
  );
  const yamlDoc = loadApiDocument(
    path.join(root, "gamma/reference.md"),
    "gamma/reference.md",
    undefined,
  );

  assert.equal(frontmatterDoc?.sourceFormat, "frontmatter");
  assert.equal(frontmatterDoc?.definition.endpoints[0]?.method, "GET");
  assert.equal(jsonDoc?.sourceFormat, "json");
  assert.equal(jsonDoc?.definition.endpoints[0]?.path, "/beta/demo");
  assert.equal(yamlDoc?.sourceFormat, "yaml");
  assert.equal(yamlDoc?.definition.endpoints[0]?.group, "Gamma");
});

test("buildApiCatalog groups api docs by group", () => {
  const catalog = buildApiCatalog([
    {
      api: {
        endpoints: [
          { group: "Auth", method: "GET", path: "/auth/me", summary: "Return current user." },
          { group: "Auth", method: "POST", path: "/auth/login", summary: "Log in." },
          { group: "Tracking", method: "GET", path: "/jobs", summary: "List jobs." },
        ],
      },
    },
  ]);

  assert.deepEqual(
    catalog.map((group) => ({
      group: group.group,
      count: group.endpoints.length,
    })),
    [
      { group: "Auth", count: 2 },
      { group: "Tracking", count: 1 },
    ],
  );
});
