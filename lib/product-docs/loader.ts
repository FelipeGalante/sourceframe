import fs from "node:fs";
import path from "node:path";

import matter from "gray-matter";

import {
  productTemplateDefinitionSchema,
  type ProductTemplateDefinition,
  type ProductTemplateDocument,
} from "./types";

function normalizeProductPath(value: string) {
  return value.replaceAll(path.sep, "/");
}

function routeFromRelativePath(relativePath: string) {
  const normalized = normalizeProductPath(relativePath).replace(/\.(md|mdx)$/, "");
  const segments = normalized.split("/").filter(Boolean);

  if (segments.at(-1) === "index") {
    segments.pop();
  }

  return segments.length ? `/${segments.join("/")}` : "/";
}

function parseProductSource(raw: string, ext: string) {
  if (ext === ".json") {
    return JSON.parse(raw);
  }

  const wrapped = raw.includes("\n---\n") ? raw : `---\n${raw}\n---`;
  return matter(wrapped).data;
}

export function normalizeProductTemplateDefinition(input: unknown): ProductTemplateDefinition {
  return productTemplateDefinitionSchema.parse(input);
}

export function loadProductTemplateFromSidecar(filePath: string, relativePath: string) {
  const candidates = [".product.json", ".product.yaml", ".product.yml"];

  for (const suffix of candidates) {
    const candidatePath = filePath.replace(/\.(md|mdx)$/, suffix);
    if (!fs.existsSync(candidatePath)) {
      continue;
    }

    const ext = path.extname(candidatePath).toLowerCase();
    const raw = fs.readFileSync(candidatePath, "utf8");
    const parsed = normalizeProductTemplateDefinition(parseProductSource(raw, ext));

    return {
      route: routeFromRelativePath(relativePath),
      href: routeFromRelativePath(relativePath),
      relativePath: normalizeProductPath(relativePath),
      sourcePath: normalizeProductPath(path.relative(process.cwd(), candidatePath)),
      sourceFormat: ext === ".json" ? "json" : "yaml",
      definition: parsed,
    } satisfies ProductTemplateDocument;
  }

  return null;
}

export function loadProductTemplateFromFrontmatter(
  filePath: string,
  relativePath: string,
  product: unknown,
) {
  if (!product) {
    return null;
  }

  const parsed = normalizeProductTemplateDefinition(product);
  const route = routeFromRelativePath(relativePath);

  return {
    route,
    href: route,
    relativePath: normalizeProductPath(relativePath),
    sourcePath: normalizeProductPath(path.join("content", relativePath)),
    sourceFormat: "frontmatter",
    definition: parsed,
  } satisfies ProductTemplateDocument;
}

export function loadProductTemplate(filePath: string, relativePath: string, product: unknown) {
  return (
    loadProductTemplateFromFrontmatter(filePath, relativePath, product) ??
    loadProductTemplateFromSidecar(filePath, relativePath)
  );
}
