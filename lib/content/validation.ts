import path from "node:path";

import { buildContentRegistry } from "./registry";
import type { ContentEntry, ContentRegistry } from "./types";

export type ContentValidationIssue = {
  filePath: string;
  message: string;
};

export type ContentValidationSummary = {
  contentFiles: number;
  domains: number;
  routes: number;
  relativeLinksChecked: number;
  absoluteLinksChecked: number;
};

export class ContentValidationError extends Error {
  issues: ContentValidationIssue[];

  constructor(issues: ContentValidationIssue[]) {
    super(
      [
        "Content validation failed:",
        ...issues.map((issue) => `- ${issue.filePath}: ${issue.message}`),
      ].join("\n"),
    );
    this.name = "ContentValidationError";
    this.issues = issues;
  }
}

const allowedInternalRoutes = new Set(["/", "/full-archive"]);

function stripFencedCodeBlocks(markdown: string) {
  return markdown.replace(/```[\s\S]*?```/g, "");
}

function findMarkdownLinks(markdown: string) {
  const linkPattern = /(!?)\[[^\]]*]\(([^)\s]+)(?:\s+"[^"]*")?\)/g;
  const links: string[] = [];
  let match: RegExpExecArray | null;

  while ((match = linkPattern.exec(markdown))) {
    if (match[1] === "!") {
      continue;
    }

    links.push(match[2] ?? "");
  }

  return links;
}

function isMarkdownLinkTarget(href: string) {
  return href.endsWith(".md") || href.endsWith(".mdx");
}

function validateKnownDomains(registry: ContentRegistry) {
  const issues: ContentValidationIssue[] = [];
  const knownDomains = new Set(
    registry.entries
      .filter((entry) => entry.type === "domain-index" && entry.domain)
      .map((entry) => entry.domain!),
  );

  for (const entry of registry.entries) {
    if (entry.type === "site-index" || entry.type === "domain-index") {
      continue;
    }

    if (entry.domain && !knownDomains.has(entry.domain)) {
      issues.push({
        filePath: entry.relativePath,
        message: `unknown domain "${entry.domain}" - add a matching domain-index page or correct the frontmatter`,
      });
    }
  }

  return issues;
}

function validateInternalLinks(registry: ContentRegistry) {
  const issues: ContentValidationIssue[] = [];
  let relativeLinksChecked = 0;
  let absoluteLinksChecked = 0;

  for (const entry of registry.entries) {
    if (entry.relativePath === "about/sources.md") {
      continue;
    }

    const body = stripFencedCodeBlocks(entry.body);
    for (const href of findMarkdownLinks(body)) {
      if (
        href.startsWith("http://") ||
        href.startsWith("https://") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        href.startsWith("#")
      ) {
        continue;
      }

      const [pathPart] = href.split("#");
      if (!pathPart) {
        continue;
      }

      if (pathPart.startsWith("/")) {
        absoluteLinksChecked++;
        if (allowedInternalRoutes.has(pathPart) || registry.entryByRoute.has(pathPart)) {
          continue;
        }

        issues.push({
          filePath: entry.relativePath,
          message: `broken internal link "${href}" - no matching route found`,
        });
        continue;
      }

      if (!isMarkdownLinkTarget(pathPart)) {
        continue;
      }

      relativeLinksChecked++;

      const sourceDir = path.posix.dirname(entry.relativePath);
      const resolvedRelative = path.posix.normalize(path.posix.join(sourceDir, pathPart));
      if (registry.entryByRelativePath.has(resolvedRelative)) {
        continue;
      }

      issues.push({
        filePath: entry.relativePath,
        message: `broken relative link "${href}" - no matching content file found at ${resolvedRelative}`,
      });
    }
  }

  return { issues, relativeLinksChecked, absoluteLinksChecked };
}

function validateDuplicateSlugs(registry: ContentRegistry) {
  const issues: ContentValidationIssue[] = [];
  const seenRoutes = new Map<string, ContentEntry>();

  for (const entry of registry.entries) {
    const previous = seenRoutes.get(entry.route);
    if (previous) {
      issues.push({
        filePath: entry.relativePath,
        message: `duplicate slug/route "${entry.route}" also used by ${previous.relativePath}`,
      });
      continue;
    }

    seenRoutes.set(entry.route, entry);
  }

  return issues;
}

export function validateContentTree(rootDir = path.join(process.cwd(), "content")) {
  const registry = buildContentRegistry(rootDir);
  const linkCheck = validateInternalLinks(registry);
  const issues = [
    ...validateDuplicateSlugs(registry),
    ...validateKnownDomains(registry),
    ...linkCheck.issues,
  ];

  if (issues.length) {
    throw new ContentValidationError(issues);
  }

  return registry;
}

export function summarizeContentTree(registry: ContentRegistry): ContentValidationSummary {
  return {
    contentFiles: registry.entries.length,
    domains: registry.domainTabs.length,
    routes: registry.entries.length,
    relativeLinksChecked: registry.entries.reduce((count, entry) => {
      if (entry.relativePath === "about/sources.md") {
        return count;
      }

      const body = stripFencedCodeBlocks(entry.body);
      return (
        count +
        findMarkdownLinks(body).filter((href) => {
          if (
            href.startsWith("http://") ||
            href.startsWith("https://") ||
            href.startsWith("mailto:") ||
            href.startsWith("tel:") ||
            href.startsWith("#")
          ) {
            return false;
          }

          const [pathPart] = href.split("#");
          return Boolean(pathPart) && isMarkdownLinkTarget(pathPart) && !pathPart.startsWith("/");
        }).length
      );
    }, 0),
    absoluteLinksChecked: registry.entries.reduce((count, entry) => {
      if (entry.relativePath === "about/sources.md") {
        return count;
      }

      const body = stripFencedCodeBlocks(entry.body);
      return (
        count +
        findMarkdownLinks(body).filter((href) => {
          if (
            href.startsWith("http://") ||
            href.startsWith("https://") ||
            href.startsWith("mailto:") ||
            href.startsWith("tel:") ||
            href.startsWith("#")
          ) {
            return false;
          }

          const [pathPart] = href.split("#");
          return Boolean(pathPart) && pathPart.startsWith("/");
        }).length
      );
    }, 0),
  };
}
