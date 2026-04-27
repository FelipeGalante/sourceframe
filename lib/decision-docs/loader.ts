import fs from "node:fs";
import path from "node:path";

import matter from "gray-matter";

import {
  decisionDefinitionSchema,
  type DecisionDefinition,
  type DecisionDocument,
  type DecisionGroup,
} from "./types";

function normalizeDecisionPath(value: string) {
  return value.replaceAll(path.sep, "/");
}

function routeFromRelativePath(relativePath: string) {
  const normalized = normalizeDecisionPath(relativePath).replace(/\.(md|mdx)$/, "");
  const segments = normalized.split("/").filter(Boolean);

  if (segments.at(-1) === "index") {
    segments.pop();
  }

  return segments.length ? `/${segments.join("/")}` : "/";
}

function parseDecisionSource(raw: string, ext: string) {
  if (ext === ".json") {
    return JSON.parse(raw);
  }

  const wrapped = raw.includes("\n---\n") ? raw : `---\n${raw}\n---`;
  return matter(wrapped).data;
}

export function normalizeDecisionDefinition(input: unknown): DecisionDefinition {
  return decisionDefinitionSchema.parse(input);
}

export function loadDecisionDocumentFromSidecar(filePath: string, relativePath: string) {
  const candidates = [".decision.json", ".decision.yaml", ".decision.yml"];

  for (const suffix of candidates) {
    const candidatePath = filePath.replace(/\.(md|mdx)$/, suffix);
    if (!fs.existsSync(candidatePath)) {
      continue;
    }

    const ext = path.extname(candidatePath).toLowerCase();
    const raw = fs.readFileSync(candidatePath, "utf8");
    const parsed = normalizeDecisionDefinition(parseDecisionSource(raw, ext));

    return {
      route: routeFromRelativePath(relativePath),
      href: routeFromRelativePath(relativePath),
      relativePath: normalizeDecisionPath(relativePath),
      sourcePath: normalizeDecisionPath(path.relative(process.cwd(), candidatePath)),
      sourceFormat: ext === ".json" ? "json" : "yaml",
      definition: parsed,
    } satisfies DecisionDocument;
  }

  return null;
}

export function loadDecisionDocumentFromFrontmatter(
  filePath: string,
  relativePath: string,
  decision: unknown,
) {
  if (!decision) {
    return null;
  }

  const parsed = normalizeDecisionDefinition(decision);
  const route = routeFromRelativePath(relativePath);

  return {
    route,
    href: route,
    relativePath: normalizeDecisionPath(relativePath),
    sourcePath: normalizeDecisionPath(path.join("content", relativePath)),
    sourceFormat: "frontmatter",
    definition: parsed,
  } satisfies DecisionDocument;
}

export function loadDecisionDocument(filePath: string, relativePath: string, decision: unknown) {
  return (
    loadDecisionDocumentFromFrontmatter(filePath, relativePath, decision) ??
    loadDecisionDocumentFromSidecar(filePath, relativePath)
  );
}

export function buildDecisionCatalog(
  entries: Array<{
    domain?: string;
    title: string;
    route: string;
    href: string;
    relativePath: string;
    decision?: DecisionDefinition;
    decisionSource?: string;
    decisionSourceFormat?: DecisionDocument["sourceFormat"];
  }>,
  domainTitles = new Map<string, string>(),
) {
  const groups = new Map<string, DecisionGroup>();

  for (const entry of entries) {
    if (!entry.decision) {
      continue;
    }

    const definition = entry.decision;
    const bucket =
      groups.get(definition.domain) ??
      ({
        domain: definition.domain,
        title: domainTitles.get(definition.domain) ?? definition.domain,
        documents: [],
      } satisfies DecisionGroup);

    bucket.documents.push({
      route: entry.route,
      href: entry.href,
      relativePath: entry.relativePath,
      sourcePath: entry.decisionSource ?? entry.relativePath,
      sourceFormat: entry.decisionSourceFormat ?? "frontmatter",
      definition,
    });
    groups.set(definition.domain, bucket);
  }

  return [...groups.values()]
    .map((group) => ({
      ...group,
      documents: group.documents.sort((left, right) =>
        left.definition.date.localeCompare(right.definition.date),
      ),
    }))
    .sort((left, right) => (left.title ?? left.domain).localeCompare(right.title ?? right.domain));
}
