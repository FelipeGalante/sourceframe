import fs from "node:fs";
import path from "node:path";

import matter from "gray-matter";

import { extractMarkdownMeta } from "./markdown-meta";
import { frontmatterSchema } from "./schemas";
import {
  normalizeRelativePath,
  relativeSegmentsForFile,
  routeFromSegments,
  toKebabCase,
} from "./routes";
import type { ContentEntry, ContentFormat } from "./types";
import { loadApiDocument } from "@/lib/api-docs";
import { loadDecisionDocument } from "@/lib/decision-docs";
import { loadProductTemplate } from "@/lib/product-docs";
import { loadSchemaDocument } from "@/lib/schema-docs/loader";

function isContentFile(name: string) {
  return name.endsWith(".md") || name.endsWith(".mdx");
}

function getContentFormat(filePath: string): ContentFormat {
  return filePath.endsWith(".mdx") ? "mdx" : "markdown";
}

export function discoverContentFiles(dir: string): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files: string[] = [];

  for (const entry of entries) {
    if (entry.name.startsWith(".")) {
      continue;
    }

    const nextPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...discoverContentFiles(nextPath));
    } else if (entry.isFile() && isContentFile(entry.name)) {
      files.push(nextPath);
    }
  }

  return files;
}

export function discoverMarkdownFiles(dir: string): string[] {
  return discoverContentFiles(dir);
}

export function readContentFile(filePath: string, rootDir: string) {
  const source = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(source);
  const parsedFrontmatter = frontmatterSchema.safeParse(data);
  if (!parsedFrontmatter.success) {
    const message = parsedFrontmatter.error.issues
      .map((issue) => {
        const location = issue.path.length ? issue.path.join(".") : "frontmatter";
        return `${location}: ${issue.message}`;
      })
      .join("; ");

    throw new Error(
      `${normalizeRelativePath(filePath)}: invalid frontmatter${message ? ` (${message})` : ""}`,
    );
  }

  const frontmatter = parsedFrontmatter.data;
  const relativePath = normalizeRelativePath(path.relative(rootDir, filePath));
  const slugSegments = relativeSegmentsForFile(relativePath);
  const route = routeFromSegments(slugSegments);
  const format = getContentFormat(filePath);

  if (frontmatter.type !== "site-index") {
    const domainSlug = toKebabCase(frontmatter.domain ?? "");
    if (!domainSlug) {
      throw new Error(`Missing domain in frontmatter for ${relativePath}`);
    }

    const firstSegment = slugSegments[0];
    if (firstSegment !== domainSlug) {
      throw new Error(
        `Route mismatch in ${relativePath}: expected first segment "${domainSlug}" but found "${firstSegment ?? "(none)"}"`,
      );
    }
  }

  if (frontmatter.section) {
    const domainSlug = toKebabCase(frontmatter.domain ?? "");
    const sectionSlug = toKebabCase(frontmatter.section);
    const expectedPrefix = `/${domainSlug}/${sectionSlug}`;
    if (!route.startsWith(expectedPrefix)) {
      throw new Error(
        `Route mismatch in ${relativePath}: expected route to start with "${expectedPrefix}" but resolved to "${route}"`,
      );
    }
  }

  const meta = extractMarkdownMeta(content);
  const navLabel = frontmatter.nav_label ?? frontmatter.title;
  const apiDocument = loadApiDocument(filePath, relativePath, frontmatter.api);
  const decisionDocument = loadDecisionDocument(filePath, relativePath, frontmatter.decision);
  const productDocument = loadProductTemplate(filePath, relativePath, frontmatter.product);
  const schemaDocument = loadSchemaDocument(filePath, relativePath, frontmatter.schema);

  return {
    id: relativePath,
    route,
    href: route,
    filePath,
    relativePath,
    parentRoute: route === "/" ? null : route.split("/").slice(0, -1).join("/") || "/",
    depth: slugSegments.length,
    slugSegments,
    title: frontmatter.title,
    navLabel,
    type: frontmatter.type,
    domain: frontmatter.domain,
    section: frontmatter.section,
    order: frontmatter.order,
    contentType: frontmatter.contentType,
    summary: frontmatter.summary,
    owner: frontmatter.owner,
    status: frontmatter.status,
    visibility: frontmatter.visibility,
    updated: frontmatter.updated,
    api: apiDocument?.definition,
    apiSource: apiDocument?.sourcePath,
    apiSourceFormat: apiDocument?.sourceFormat,
    decision: decisionDocument?.definition,
    decisionSource: decisionDocument?.sourcePath,
    decisionSourceFormat: decisionDocument?.sourceFormat,
    product: productDocument?.definition,
    productSource: productDocument?.sourcePath,
    productSourceFormat: productDocument?.sourceFormat,
    schema: schemaDocument?.definition,
    schemaSource: schemaDocument?.sourcePath,
    schemaSourceFormat: schemaDocument?.sourceFormat,
    tags: frontmatter.tags,
    eyebrow: frontmatter.eyebrow,
    description: frontmatter.description,
    kicker: frontmatter.kicker,
    source: frontmatter.source,
    sourcePanel: frontmatter.source_panel,
    databaseDomain: frontmatter.database_domain,
    tableName: frontmatter.table_name,
    origin: frontmatter.origin,
    sourceFile: frontmatter.sourceFile,
    importedAt: frontmatter.importedAt,
    importedBy: frontmatter.importedBy,
    canonicalStatus: frontmatter.canonicalStatus,
    relatedCanonicalPages: frontmatter.relatedCanonicalPages,
    body: content,
    format,
    plainText: meta.plainText,
    excerpt: meta.excerpt || frontmatter.description || frontmatter.title,
    headings: meta.headings,
    frontmatter,
  } satisfies ContentEntry;
}

export function readMarkdownFile(filePath: string, rootDir: string) {
  return readContentFile(filePath, rootDir);
}
