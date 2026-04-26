import fs from "node:fs";
import path from "node:path";

import matter from "gray-matter";

import {
  schemaDefinitionSchema,
  type SchemaDefinition,
  type SchemaDocument,
  type SchemaDomainGroup,
} from "./types";

function normalizeSchemaPath(value: string) {
  return value.replaceAll(path.sep, "/");
}

function routeFromRelativePath(relativePath: string) {
  const normalized = normalizeSchemaPath(relativePath).replace(/\.(md|mdx)$/, "");
  const segments = normalized.split("/").filter(Boolean);

  if (segments.at(-1) === "index") {
    segments.pop();
  }

  return segments.length ? `/${segments.join("/")}` : "/";
}

function parseSchemaSource(raw: string, ext: string) {
  if (ext === ".json") {
    return JSON.parse(raw);
  }

  const wrapped = raw.includes("\n---\n") ? raw : `---\n${raw}\n---`;
  return matter(wrapped).data;
}

export function normalizeSchemaDefinition(input: unknown): SchemaDefinition {
  return schemaDefinitionSchema.parse(input);
}

export function loadSchemaDocumentFromSidecar(filePath: string, relativePath: string) {
  const candidates = [".schema.json", ".schema.yaml", ".schema.yml"];

  for (const suffix of candidates) {
    const candidatePath = filePath.replace(/\.(md|mdx)$/, suffix);
    if (!fs.existsSync(candidatePath)) {
      continue;
    }

    const ext = path.extname(candidatePath).toLowerCase();
    const raw = fs.readFileSync(candidatePath, "utf8");
    const parsed = normalizeSchemaDefinition(parseSchemaSource(raw, ext));

    return {
      route: routeFromRelativePath(relativePath),
      href: routeFromRelativePath(relativePath),
      relativePath: normalizeSchemaPath(relativePath),
      sourcePath: normalizeSchemaPath(path.relative(process.cwd(), candidatePath)),
      sourceFormat: ext === ".json" ? "json" : "yaml",
      definition: parsed,
    } satisfies SchemaDocument;
  }

  return null;
}

export function loadSchemaDocumentFromFrontmatter(
  filePath: string,
  relativePath: string,
  schema: unknown,
) {
  if (!schema) {
    return null;
  }

  const parsed = normalizeSchemaDefinition(schema);
  const route = routeFromRelativePath(relativePath);

  return {
    route,
    href: route,
    relativePath: normalizeSchemaPath(relativePath),
    sourcePath: normalizeSchemaPath(path.join("content", relativePath)),
    sourceFormat: "frontmatter",
    definition: parsed,
  } satisfies SchemaDocument;
}

export function loadSchemaDocument(filePath: string, relativePath: string, schema: unknown) {
  return (
    loadSchemaDocumentFromFrontmatter(filePath, relativePath, schema) ??
    loadSchemaDocumentFromSidecar(filePath, relativePath)
  );
}

export function buildSchemaCatalog(
  entries: Array<{
    domain?: string;
    title: string;
    route: string;
    href: string;
    relativePath: string;
    schema?: SchemaDefinition;
    schemaSource?: string;
    schemaSourceFormat?: SchemaDocument["sourceFormat"];
  }>,
  domainTitles = new Map<string, string>(),
) {
  const groups = new Map<string, SchemaDomainGroup>();

  for (const entry of entries) {
    if (!entry.schema) {
      continue;
    }

    const definition = entry.schema;
    const bucket =
      groups.get(definition.domain) ??
      ({
        domain: definition.domain,
        title: domainTitles.get(definition.domain) ?? definition.domain,
        documents: [],
      } satisfies SchemaDomainGroup);

    bucket.documents.push({
      route: entry.route,
      href: entry.href,
      relativePath: entry.relativePath,
      sourcePath: entry.schemaSource ?? entry.relativePath,
      sourceFormat: entry.schemaSourceFormat ?? "frontmatter",
      definition,
    });
    groups.set(definition.domain, bucket);
  }

  return [...groups.values()]
    .map((group) => ({
      ...group,
      documents: group.documents.sort((left, right) =>
        left.definition.tableName.localeCompare(right.definition.tableName),
      ),
    }))
    .sort((left, right) => (left.title ?? left.domain).localeCompare(right.title ?? right.domain));
}
