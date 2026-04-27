import fs from "node:fs";
import path from "node:path";

import matter from "gray-matter";

import { frontmatterSchema } from "@/lib/content/schemas";

import { createImportReport } from "./report";
import type { HtmlImportOptions } from "./types";

function stripTags(html: string) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function splitHtmlIntoSections(html: string) {
  const headingPattern = /<h2[^>]*>([\s\S]*?)<\/h2>/gi;
  const sections: Array<{ title: string; body: string }> = [];
  let match: RegExpExecArray | null;
  let lastIndex = 0;
  let lastTitle = "Overview";

  while ((match = headingPattern.exec(html))) {
    if (match.index > lastIndex) {
      sections.push({
        title: lastTitle,
        body: html.slice(lastIndex, match.index),
      });
    }

    lastTitle = stripTags(match[1] ?? "").trim() || "Section";
    lastIndex = headingPattern.lastIndex;
  }

  const tail = html.slice(lastIndex);
  sections.push({ title: lastTitle, body: tail });
  return sections.filter((section) => stripTags(section.body).trim().length > 0);
}

function toKebabCase(value: string) {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase();
}

function titleCase(value: string) {
  return value
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => word[0]?.toUpperCase() + word.slice(1))
    .join(" ");
}

function ensureDirectory(filePath: string) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
}

function removeUndefined<T extends Record<string, unknown>>(value: T) {
  return Object.fromEntries(
    Object.entries(value).filter(([, entry]) => entry !== undefined),
  ) as Partial<T>;
}

export function importHtmlSource(
  sourceFile: string,
  outputDir: string,
  options: HtmlImportOptions = {},
) {
  const overwrite = options.overwrite ?? false;
  const source = fs.readFileSync(sourceFile, "utf8");
  const sections = splitHtmlIntoSections(source);
  const createdFiles: { path: string; reason?: string }[] = [];
  const skippedFiles: { path: string; reason?: string }[] = [];
  const missingMetadata: { path: string; reason?: string }[] = [];
  const warnings: { path: string; reason?: string }[] = [];

  if (!sections.length) {
    missingMetadata.push({
      path: sourceFile,
      reason: "no h2 sections found; wrote a single fallback page",
    });
  }

  const baseSlug = toKebabCase(path.basename(sourceFile, path.extname(sourceFile)));
  const topLevelTarget = path.join(outputDir, `${baseSlug}.md`);
  const indexTitle = titleCase(baseSlug.replace(/-/g, " "));
  const topLevelFrontmatter = {
    title: indexTitle || "Imported Source",
    type: "section-index",
    domain: "imported",
    section: baseSlug || "imported",
    order: 1,
    contentType: "source-archive",
    visibility: "internal" as const,
    origin: path.basename(sourceFile),
    sourceFile: path.basename(sourceFile),
    importedAt: new Date().toISOString().slice(0, 10),
    canonicalStatus: "imported",
  };

  const topLevelValidated = frontmatterSchema.safeParse(topLevelFrontmatter);
  if (!topLevelValidated.success) {
    missingMetadata.push({
      path: sourceFile,
      reason: topLevelValidated.error.issues.map((issue) => issue.message).join("; "),
    });
    return createImportReport({
      source: sourceFile,
      output: outputDir,
      createdFiles,
      skippedFiles,
      missingMetadata,
      warnings,
      suggestedNextSteps: ["Review the HTML structure and add explicit metadata before importing."],
    });
  }

  if (fs.existsSync(topLevelTarget) && !overwrite) {
    skippedFiles.push({
      path: topLevelTarget,
      reason: "exists; rerun with --overwrite to replace it",
    });
  } else {
    ensureDirectory(topLevelTarget);
    fs.writeFileSync(
      topLevelTarget,
      `${matter.stringify("", removeUndefined(topLevelValidated.data))}\n`,
      "utf8",
    );
    createdFiles.push({ path: topLevelTarget, reason: "created import index" });
  }

  for (const [index, section] of sections.entries()) {
    const slug = toKebabCase(section.title) || `section-${index + 1}`;
    const targetPath = path.join(outputDir, `${baseSlug}/${slug}.md`);
    const frontmatter = {
      title: titleCase(section.title) || `Section ${index + 1}`,
      type: "section",
      domain: "imported",
      section: baseSlug || "imported",
      order: index + 1,
      contentType: "source-archive",
      visibility: "internal" as const,
      origin: path.basename(sourceFile),
      sourceFile: path.basename(sourceFile),
      importedAt: new Date().toISOString().slice(0, 10),
      canonicalStatus: "imported",
    };

    const validated = frontmatterSchema.safeParse(frontmatter);
    if (!validated.success) {
      missingMetadata.push({
        path: targetPath,
        reason: validated.error.issues.map((issue) => issue.message).join("; "),
      });
      continue;
    }

    const body = stripTags(section.body)
      .replace(/\r\n/g, "\n")
      .replace(/\n{3,}/g, "\n\n")
      .trim();

    if (fs.existsSync(targetPath) && !overwrite) {
      skippedFiles.push({
        path: targetPath,
        reason: "exists; rerun with --overwrite to replace it",
      });
      continue;
    }

    ensureDirectory(targetPath);
    fs.writeFileSync(
      targetPath,
      `${matter.stringify(body ? `\n${body}` : "", removeUndefined(validated.data))}\n`,
      "utf8",
    );
    createdFiles.push({ path: targetPath, reason: "created from HTML section" });
    warnings.push({
      path: targetPath,
      reason: "review the generated Markdown headings and add richer structure where needed",
    });
  }

  return createImportReport({
    source: sourceFile,
    output: outputDir,
    createdFiles,
    skippedFiles,
    missingMetadata,
    warnings,
    suggestedNextSteps: [
      "Review the generated Markdown structure and replace fallback sections with richer content.",
      "Add provenance metadata if the source is historical or imported from a third party.",
      "Split large HTML sources into smaller sections if the importer produced coarse output.",
    ],
  });
}
