import fs from "node:fs";
import path from "node:path";

import matter from "gray-matter";

import { frontmatterSchema } from "@/lib/content/schemas";

import { createImportReport } from "./report";
import type { MarkdownNormalizeOptions } from "./types";

function isMarkdownFile(filePath: string) {
  return filePath.endsWith(".md") || filePath.endsWith(".mdx");
}

function discoverFiles(dir: string): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files: string[] = [];

  for (const entry of entries) {
    if (entry.name.startsWith(".")) {
      continue;
    }

    const nextPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...discoverFiles(nextPath));
    } else if (entry.isFile() && isMarkdownFile(entry.name)) {
      files.push(nextPath);
    }
  }

  return files;
}

function guessContentType(relativePath: string) {
  const lower = relativePath.toLowerCase();
  if (lower.includes("/changelog/")) {
    return "changelog";
  }
  if (lower.includes("/releases/")) {
    return "release-note";
  }
  if (lower.includes("/prd")) {
    return "prd";
  }
  if (lower.includes("/roadmap")) {
    return "roadmap";
  }
  if (lower.includes("/research")) {
    return "research";
  }
  if (lower.includes("/api")) {
    return "api";
  }
  if (lower.includes("/architecture")) {
    return "architecture";
  }
  if (lower.includes("/decision")) {
    return "decision-log";
  }
  return "reference";
}

function titleFromFileName(filePath: string) {
  return path.basename(filePath, path.extname(filePath)).replace(/[-_]+/g, " ");
}

function titleCase(value: string) {
  return value
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => word[0]?.toUpperCase() + word.slice(1))
    .join(" ");
}

function inferDomain(relativePath: string) {
  const segments = relativePath.split(path.sep).filter(Boolean);
  return segments[0] === "content" ? segments[1] : segments[0];
}

function inferSection(relativePath: string) {
  const segments = relativePath.split(path.sep).filter(Boolean);
  return segments.length > 2 ? segments[segments.length - 2] : undefined;
}

function normalizeBody(content: string) {
  return content
    .replace(/\r\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trimEnd();
}

function removeUndefined<T extends Record<string, unknown>>(value: T) {
  return Object.fromEntries(
    Object.entries(value).filter(([, entry]) => entry !== undefined),
  ) as Partial<T>;
}

function buildFrontmatter(relativePath: string, source: string) {
  const domain = inferDomain(relativePath);
  const section = inferSection(relativePath);
  const contentType = guessContentType(relativePath);
  const title = titleCase(titleFromFileName(relativePath));
  return {
    title,
    domain,
    section,
    type: section ? "section" : "domain-index",
    order: 1,
    contentType,
    visibility: "public" as const,
    origin: path.basename(source),
    sourceFile: path.basename(source),
    importedAt: new Date().toISOString().slice(0, 10),
    canonicalStatus: "imported",
  };
}

function writeFileSafe(
  targetPath: string,
  contents: string,
  overwrite: boolean,
  createdFiles: { path: string; reason?: string }[],
  skippedFiles: { path: string; reason?: string }[],
) {
  if (fs.existsSync(targetPath) && !overwrite) {
    skippedFiles.push({
      path: targetPath,
      reason: "exists; rerun with --overwrite to replace it",
    });
    return false;
  }

  fs.mkdirSync(path.dirname(targetPath), { recursive: true });
  fs.writeFileSync(targetPath, contents, "utf8");
  createdFiles.push({
    path: targetPath,
    reason: fs.existsSync(targetPath) ? "written" : undefined,
  });
  return true;
}

export function normalizeMarkdownFolder(
  sourceDir: string,
  outputDir: string,
  options: MarkdownNormalizeOptions = {},
) {
  const overwrite = options.overwrite ?? false;
  const files = discoverFiles(sourceDir);
  const createdFiles: { path: string; reason?: string }[] = [];
  const skippedFiles: { path: string; reason?: string }[] = [];
  const missingMetadata: { path: string; reason?: string }[] = [];
  const warnings: { path: string; reason?: string }[] = [];

  for (const filePath of files) {
    const source = fs.readFileSync(filePath, "utf8");
    const parsed = matter(source);
    const relativePath = path.relative(sourceDir, filePath);
    const targetPath = path.join(outputDir, relativePath);

    if (!parsed.data.title) {
      missingMetadata.push({
        path: filePath,
        reason: "missing title frontmatter; generated a fallback title",
      });
    }

    const frontmatter = {
      ...buildFrontmatter(relativePath, filePath),
      ...parsed.data,
    };

    const validated = frontmatterSchema.safeParse(frontmatter);
    if (!validated.success) {
      missingMetadata.push({
        path: filePath,
        reason: validated.error.issues.map((issue) => issue.message).join("; "),
      });
      continue;
    }

    const body = normalizeBody(parsed.content);
    const nextContents = `${matter.stringify(
      body ? `\n${body}` : "",
      removeUndefined(validated.data),
    )}\n`;

    if (writeFileSafe(targetPath, nextContents, overwrite, createdFiles, skippedFiles)) {
      warnings.push({
        path: filePath,
        reason: `normalized to ${path.relative(outputDir, targetPath)}`,
      });
    }
  }

  return createImportReport({
    source: sourceDir,
    output: outputDir,
    createdFiles,
    skippedFiles,
    missingMetadata,
    warnings,
    suggestedNextSteps: [
      "Review the generated frontmatter and adjust domain/section values where needed.",
      "Add provenance metadata for historical imports if the content is not canonical.",
      "Replace fallback titles on files that are still missing title frontmatter.",
    ],
  });
}
