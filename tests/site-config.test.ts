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

test("validateSiteConfig accepts visibility filters", () => {
  const config = validateSiteConfig({
    name: "Example",
    subtitle: "Workspace",
    eyebrow: "Workspace",
    title: "Example workspace",
    description: "A reusable site.",
    defaultDomain: "example",
    repositoryUrl: "https://example.com/repo",
    contentVisibility: {
      include: ["public", "internal"],
      exclude: ["private"],
    },
  });

  assert.deepEqual(config.contentVisibility.include, ["public", "internal"]);
  assert.deepEqual(config.contentVisibility.exclude, ["private"]);
});

test("validateSiteConfig rejects overlapping visibility filters", () => {
  assert.throws(
    () =>
      validateSiteConfig({
        name: "Example",
        subtitle: "Workspace",
        eyebrow: "Workspace",
        title: "Example workspace",
        description: "A reusable site.",
        defaultDomain: "example",
        repositoryUrl: "https://example.com/repo",
        contentVisibility: {
          include: ["public"],
          exclude: ["public"],
        },
      }),
    /overlap/i,
  );
});
