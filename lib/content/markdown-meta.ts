import { unified } from "unified";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import { visit } from "unist-util-visit";

function collectText(node: unknown): string {
  if (!node || typeof node !== "object") {
    return "";
  }

  const current = node as { value?: unknown; children?: unknown };

  if (typeof current.value === "string") {
    return current.value;
  }

  if (Array.isArray(current.children)) {
    return current.children.map((child) => collectText(child)).join(" ");
  }

  return typeof node === "string" ? node : "";
}

export function extractMarkdownMeta(markdown: string) {
  const tree = unified().use(remarkParse).use(remarkGfm).parse(markdown) as unknown;
  const headings: string[] = [];

  visit(tree as never, "heading", (node) => {
    const text = collectText(node as unknown)
      .replace(/\s+/g, " ")
      .trim();
    if (text) {
      headings.push(text);
    }
  });

  const plainText = collectText(tree).replace(/\s+/g, " ").trim();
  const excerpt = plainText.slice(0, 220);

  return {
    headings,
    plainText,
    excerpt,
  };
}
