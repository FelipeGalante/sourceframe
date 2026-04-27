import assert from "node:assert/strict";
import test from "node:test";

import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";

import { ChangelogIndex, ReleaseNoteIndex } from "@/components/lifecycle";
import { getContentRegistry } from "@/lib/content";

test("lifecycle indexes render changelog and release note entries", () => {
  const registry = getContentRegistry();
  const changelogHtml = renderToStaticMarkup(
    createElement(ChangelogIndex, { entries: registry.entries }),
  );
  const releaseHtml = renderToStaticMarkup(
    createElement(ReleaseNoteIndex, { entries: registry.entries }),
  );

  assert.match(changelogHtml, /Change history/);
  assert.match(changelogHtml, /April 2026 docs refresh/);
  assert.match(releaseHtml, /Version updates/);
  assert.match(releaseHtml, /Release v1\.2\.0/);
});
