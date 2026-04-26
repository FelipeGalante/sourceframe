import path from "node:path";

export function toKebabCase(value: string) {
  return value
    .trim()
    .replace(/['"’]/g, "")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();
}

export function toRouteSegment(value: string) {
  return value
    .trim()
    .replace(/['"’]/g, "")
    .replace(/[\s_]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();
}

export function routeFromSegments(segments: string[]) {
  if (!segments.length) {
    return "/";
  }

  return `/${segments.map((segment) => toRouteSegment(segment)).join("/")}`;
}

export function relativeSegmentsForFile(relativePath: string) {
  const normalized = relativePath.replaceAll(path.sep, "/");
  const withoutExt = normalized.replace(/\.(md|mdx)$/, "");
  const parts = withoutExt.split("/").filter(Boolean);
  if (parts.at(-1) === "index") {
    parts.pop();
  }
  return parts;
}

export function normalizeRelativePath(value: string) {
  return value.replaceAll(path.sep, "/");
}
