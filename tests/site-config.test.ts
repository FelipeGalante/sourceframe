import assert from "node:assert/strict";
import test from "node:test";

import { siteConfig } from "@/site.config";
import { siteConfigSchema, validateSiteConfig } from "@/lib/site-config";

test("siteConfig matches the validated schema", () => {
  assert.doesNotThrow(() => siteConfigSchema.parse(siteConfig));
});

test("validateSiteConfig rejects invalid config", () => {
  assert.throws(
    () =>
      validateSiteConfig({
        name: "Example",
        subtitle: "Workspace",
        eyebrow: "Workspace",
        title: "Example workspace",
        description: "A reusable site.",
        defaultDomain: "example",
        repositoryUrl: "not-a-url",
      }),
    /repositoryUrl/i,
  );
});
