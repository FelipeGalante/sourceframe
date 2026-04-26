// @ts-expect-error The runtime helper is a plain ESM module for Node test compatibility.
import { renderMdxToMarkup as renderMdxToMarkupImpl } from "./mdx-runtime.mjs";

export async function MdxRenderer({
  markdown,
  sourceRelativePath = "content/index.mdx",
}: {
  markdown: string;
  sourceRelativePath?: string;
}) {
  return renderMdxToMarkupImpl(markdown, sourceRelativePath);
}

export async function renderMdxToMarkup(
  markdown: string,
  sourceRelativePath = "content/index.mdx",
) {
  return renderMdxToMarkupImpl(markdown, sourceRelativePath);
}
