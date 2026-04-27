import type { ContentRegistry } from "@/lib/content";

// @ts-expect-error The runtime helper is a plain ESM module for Node test compatibility.
import { renderMdxToMarkup as renderMdxToMarkupImpl } from "./mdx-runtime.mjs";

export async function MdxRenderer({
  markdown,
  sourceRelativePath = "content/index.mdx",
  contentRegistry,
}: {
  markdown: string;
  sourceRelativePath?: string;
  contentRegistry?: ContentRegistry;
}) {
  return renderMdxToMarkupImpl(markdown, sourceRelativePath, contentRegistry);
}

export async function renderMdxToMarkup(
  markdown: string,
  sourceRelativePath = "content/index.mdx",
  contentRegistry?: ContentRegistry,
) {
  return renderMdxToMarkupImpl(markdown, sourceRelativePath, contentRegistry);
}
