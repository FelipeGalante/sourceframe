import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";

import matter from "gray-matter";

import { normalizeMarkdownFolder } from "@/lib/import-tools";

function writeFile(root: string, filePath: string, contents: string) {
  const fullPath = path.join(root, filePath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, contents, "utf8");
}

function createTempDir() {
  return fs.mkdtempSync(path.join(os.tmpdir(), "sourceframe-import-"));
}

test("normalizeMarkdownFolder creates frontmatter and preserves existing files without overwrite", () => {
  const sourceDir = createTempDir();
  const outputDir = createTempDir();

  writeFile(
    sourceDir,
    "docs/index.md",
    [
      "---",
      'title: "Docs"',
      'domain: "docs"',
      'type: "domain-index"',
      "order: 1",
      "---",
      "",
      "# Docs",
    ].join("\n"),
  );
  writeFile(
    sourceDir,
    "docs/guide/intro.md",
    ["", "# Intro", "", "Welcome to the guide."].join("\n"),
  );
  writeFile(
    outputDir,
    "docs/guide/intro.md",
    [
      "---",
      'title: "Existing Intro"',
      'domain: "docs"',
      'section: "guide"',
      'type: "section"',
      "order: 1",
      "---",
      "",
      "# Existing Intro",
    ].join("\n"),
  );

  const report = normalizeMarkdownFolder(sourceDir, outputDir);

  assert.equal(report.createdFiles.length, 1);
  assert.equal(report.skippedFiles.length, 1);
  assert.equal(report.missingMetadata.length, 1);
  assert.equal(report.warnings.length, 1);
  assert.match(report.createdFiles[0]?.path ?? "", /docs\/index\.md$/);
  assert.match(report.skippedFiles[0]?.path ?? "", /docs\/guide\/intro\.md$/);
  assert.match(report.missingMetadata[0]?.reason ?? "", /missing title/i);

  const created = matter.read(path.join(outputDir, "docs/index.md"));
  assert.equal(created.data.title, "Docs");
  assert.equal(created.data.domain, "docs");
  assert.equal(created.data.type, "domain-index");
  assert.equal(created.data.contentType, "reference");
  assert.equal(created.data.visibility, "public");
  assert.equal(created.data.canonicalStatus, "imported");
  assert.equal(created.data.sourceFile, "index.md");
  assert.equal(created.data.origin, "index.md");

  const preserved = matter.read(path.join(outputDir, "docs/guide/intro.md"));
  assert.equal(preserved.data.title, "Existing Intro");
  assert.equal(preserved.content.trim(), "# Existing Intro");
});

test("import scripts print help text", () => {
  const normalizeOutput = execFileSync(
    "node",
    ["--import", "tsx", "scripts/normalize-markdown-folder.ts", "--help"],
    {
      cwd: process.cwd(),
      encoding: "utf8",
      env: {
        ...process.env,
        PATH: `/opt/homebrew/bin:${process.env.PATH ?? ""}`,
      },
    },
  );

  const htmlOutput = execFileSync(
    "node",
    ["--import", "tsx", "scripts/import-html-source.ts", "--help"],
    {
      cwd: process.cwd(),
      encoding: "utf8",
      env: {
        ...process.env,
        PATH: `/opt/homebrew/bin:${process.env.PATH ?? ""}`,
      },
    },
  );

  assert.match(normalizeOutput, /Normalize a folder of Markdown files/);
  assert.match(normalizeOutput, /--input/);
  assert.match(normalizeOutput, /--overwrite/);
  assert.match(htmlOutput, /Import a single HTML source file/);
  assert.match(htmlOutput, /--input/);
  assert.match(htmlOutput, /--safe/);
});
