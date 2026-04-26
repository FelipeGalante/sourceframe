export function endpointAnchorId(path: string) {
  return path
    .replaceAll("/", "-")
    .replaceAll(":", "")
    .replaceAll("{", "")
    .replaceAll("}", "")
    .replaceAll("_", "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}
