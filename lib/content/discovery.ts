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
import type { ContentEntry } from "./types";

export function discoverMarkdownFiles(dir: string): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files: string[] = [];

  for (const entry of entries) {
    if (entry.name.startsWith(".")) {
      continue;
    }

    const nextPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...discoverMarkdownFiles(nextPath));
    } else if (entry.isFile() && entry.name.endsWith(".md")) {
      files.push(nextPath);
    }
  }

  return files;
}

export function readMarkdownFile(filePath: string, rootDir: string) {
  const source = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(source);
  const frontmatter = frontmatterSchema.parse(data);
  const relativePath = normalizeRelativePath(path.relative(rootDir, filePath));
  const slugSegments = relativeSegmentsForFile(relativePath);
  const route = routeFromSegments(slugSegments);

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
    eyebrow: frontmatter.eyebrow,
    description: frontmatter.description,
    kicker: frontmatter.kicker,
    source: frontmatter.source,
    sourcePanel: frontmatter.source_panel,
    databaseDomain: frontmatter.database_domain,
    tableName: frontmatter.table_name,
    body: content,
    plainText: meta.plainText,
    excerpt: meta.excerpt || frontmatter.description || frontmatter.title,
    headings: meta.headings,
    frontmatter,
  } satisfies ContentEntry;
}
