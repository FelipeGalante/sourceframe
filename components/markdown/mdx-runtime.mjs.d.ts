declare module "./mdx-runtime.mjs" {
  import type { ReactElement } from "react";

  export function renderMdxToMarkup(
    markdown: string,
    sourceRelativePath?: string,
  ): Promise<ReactElement>;
}

export {};
