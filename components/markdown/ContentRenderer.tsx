import type { ContentFormat } from "@/lib/content";

import { MarkdownRenderer } from "@/lib/markdown";

import { MdxRenderer } from "./MdxRenderer";

export function ContentRenderer({
  format,
  markdown,
  sourceRelativePath,
  archiveMode = false,
}: {
  format: ContentFormat;
  markdown: string;
  sourceRelativePath: string;
  archiveMode?: boolean;
}) {
  if (archiveMode) {
    return (
      <MarkdownRenderer markdown={markdown} sourceRelativePath={sourceRelativePath} literalSource />
    );
  }

  if (format === "mdx") {
    return <MdxRenderer markdown={markdown} sourceRelativePath={sourceRelativePath} />;
  }

  return <MarkdownRenderer markdown={markdown} sourceRelativePath={sourceRelativePath} />;
}
