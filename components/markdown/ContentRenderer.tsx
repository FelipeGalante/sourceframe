import type { ContentFormat } from "@/lib/content";
import type { ContentRegistry } from "@/lib/content";

import { MarkdownRenderer } from "@/lib/markdown";

import { MdxRenderer } from "./MdxRenderer";

export function ContentRenderer({
  format,
  markdown,
  sourceRelativePath,
  contentRegistry,
  archiveMode = false,
}: {
  format: ContentFormat;
  markdown: string;
  sourceRelativePath: string;
  contentRegistry?: ContentRegistry;
  archiveMode?: boolean;
}) {
  if (archiveMode) {
    return (
      <MarkdownRenderer
        markdown={markdown}
        sourceRelativePath={sourceRelativePath}
        literalSource
        contentRegistry={contentRegistry}
      />
    );
  }

  if (format === "mdx") {
    return (
      <MdxRenderer
        markdown={markdown}
        sourceRelativePath={sourceRelativePath}
        contentRegistry={contentRegistry}
      />
    );
  }

  return (
    <MarkdownRenderer
      markdown={markdown}
      sourceRelativePath={sourceRelativePath}
      contentRegistry={contentRegistry}
    />
  );
}
