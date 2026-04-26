import fs from "node:fs";
import path from "node:path";

import matter from "gray-matter";

import {
  apiDefinitionSchema,
  type ApiCatalogGroup,
  type ApiDefinition,
  type ApiDocument,
} from "./types";

function normalizeApiPath(value: string) {
  return value.replaceAll(path.sep, "/");
}

function routeFromRelativePath(relativePath: string) {
  const normalized = normalizeApiPath(relativePath).replace(/\.(md|mdx)$/, "");
  const segments = normalized.split("/").filter(Boolean);

  if (segments.at(-1) === "index") {
    segments.pop();
  }

  return segments.length ? `/${segments.join("/")}` : "/";
}

function parseApiSource(raw: string, ext: string) {
  if (ext === ".json") {
    return JSON.parse(raw);
  }

  const wrapped = raw.includes("\n---\n") ? raw : `---\n${raw}\n---`;
  return matter(wrapped).data;
}

export function normalizeApiDefinition(input: unknown): ApiDefinition {
  return apiDefinitionSchema.parse(input);
}

export function loadApiDocumentFromSidecar(filePath: string, relativePath: string) {
  const candidates = [".api.json", ".api.yaml", ".api.yml"];

  for (const suffix of candidates) {
    const candidatePath = filePath.replace(/\.(md|mdx)$/, suffix);
    if (!fs.existsSync(candidatePath)) {
      continue;
    }

    const ext = path.extname(candidatePath).toLowerCase();
    const raw = fs.readFileSync(candidatePath, "utf8");
    const parsed = normalizeApiDefinition(parseApiSource(raw, ext));

    return {
      route: routeFromRelativePath(relativePath),
      href: routeFromRelativePath(relativePath),
      relativePath: normalizeApiPath(relativePath),
      sourcePath: normalizeApiPath(path.relative(process.cwd(), candidatePath)),
      sourceFormat: ext === ".json" ? "json" : "yaml",
      definition: parsed,
    } satisfies ApiDocument;
  }

  return null;
}

export function loadApiDocumentFromFrontmatter(
  filePath: string,
  relativePath: string,
  api: unknown,
) {
  if (!api) {
    return null;
  }

  const parsed = normalizeApiDefinition(api);
  const route = routeFromRelativePath(relativePath);

  return {
    route,
    href: route,
    relativePath: normalizeApiPath(relativePath),
    sourcePath: normalizeApiPath(path.join("content", relativePath)),
    sourceFormat: "frontmatter",
    definition: parsed,
  } satisfies ApiDocument;
}

export function loadApiDocument(filePath: string, relativePath: string, api: unknown) {
  return (
    loadApiDocumentFromFrontmatter(filePath, relativePath, api) ??
    loadApiDocumentFromSidecar(filePath, relativePath)
  );
}

export function buildApiCatalog(
  entries: Array<{
    api?: ApiDefinition;
  }>,
) {
  const groups = new Map<string, ApiCatalogGroup>();

  for (const entry of entries) {
    if (!entry.api) {
      continue;
    }

    for (const endpoint of entry.api.endpoints) {
      const bucket =
        groups.get(endpoint.group) ??
        ({
          group: endpoint.group,
          endpoints: [],
        } satisfies ApiCatalogGroup);

      bucket.endpoints.push(endpoint);
      groups.set(endpoint.group, bucket);
    }
  }

  return [...groups.values()].sort((left, right) => left.group.localeCompare(right.group));
}
