import assert from "node:assert/strict";
import test from "node:test";

import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";

import { EndpointCard, EndpointTable, MethodBadge } from "@/components/api";

test("method badges and endpoint tables render api metadata", () => {
  const html = renderToStaticMarkup(
    createElement(EndpointTable, {
      endpoints: [
        {
          group: "Auth",
          method: "POST",
          path: "/auth/login",
          summary: "Log in.",
          auth: { label: "JWT", details: "Protected" },
        },
      ],
    }),
  );

  assert.match(html, /POST/);
  assert.match(html, /\/auth\/login/);
  assert.match(html, /Log in\./);
  assert.match(html, /JWT/);
});

test("endpoint cards render examples and errors", () => {
  const html = renderToStaticMarkup(
    createElement(EndpointCard, {
      endpoint: {
        group: "Auth",
        method: "GET",
        path: "/auth/me",
        summary: "Return the current user.",
        auth: { label: "JWT", details: "Protected" },
        requestBodyExample: { language: "json", body: '{\n  "demo": true\n}' },
        responseExample: { language: "json", body: '{\n  "data": null\n}' },
        errorCodes: [{ code: "401", message: "Unauthorized", description: "Missing token." }],
      },
    }),
  );

  assert.match(html, /Request example/);
  assert.match(html, /Response example/);
  assert.match(html, /Error codes/);
  assert.match(html, /Missing token/);
});

test("method badges keep the generic tone styling", () => {
  const html = renderToStaticMarkup(createElement(MethodBadge, { method: "PATCH" }));
  assert.match(html, /PATCH/);
});
