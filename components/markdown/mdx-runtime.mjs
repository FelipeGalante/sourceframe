import { evaluate } from "@mdx-js/mdx";
import path from "node:path";
import React from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

const mdxModuleCache = new Map();

function flattenText(children) {
  if (children === null || children === undefined || typeof children === "boolean") {
    return "";
  }

  if (typeof children === "string" || typeof children === "number") {
    return String(children);
  }

  if (Array.isArray(children)) {
    return children.map(flattenText).join("");
  }

  if (React.isValidElement(children)) {
    return flattenText(children.props.children);
  }

  return "";
}

function getCodeLanguage(className) {
  if (!className) {
    return "";
  }

  const match = className.match(/language-([a-z0-9_-]+)/i);
  return match?.[1] ?? "";
}

function resolveContentHref(href, sourceRelativePath, contentRegistry) {
  if (
    href.startsWith("#") ||
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:")
  ) {
    return href;
  }

  const [pathPart, hashPart] = href.split("#");
  if (!pathPart.endsWith(".md") && !pathPart.endsWith(".mdx")) {
    return href;
  }

  const sourceDir = path.posix.dirname(sourceRelativePath.replaceAll(path.sep, "/"));
  const resolved = path.posix.normalize(path.posix.join(sourceDir, pathPart));
  const entry = contentRegistry?.entryByRelativePath?.get(resolved);

  if (!entry) {
    return href;
  }

  return `${entry.href}${hashPart ? `#${hashPart}` : ""}`;
}

function TableWrapper(props) {
  return jsx("div", {
    className: "pm-table-scroll",
    children: jsx("table", { ...props }),
  });
}

function CodeBlock({ code, language }) {
  return jsxs("div", {
    className: "pm-code-block",
    children: [
      jsxs("div", {
        className: "pm-code-bar",
        children: [
          jsx("span", { children: language || "code" }),
          jsx("button", {
            className: "pm-copy-button",
            type: "button",
            children: "Copy",
          }),
        ],
      }),
      jsx("div", {
        className: "pm-code-scroll",
        children: jsx("pre", {
          children: jsx("code", {
            className: language ? `language-${language}` : undefined,
            children: code,
          }),
        }),
      }),
    ],
  });
}

function MermaidBlock({ code }) {
  return jsxs("div", {
    className: "pm-code-block",
    children: [
      jsx("div", {
        className: "pm-code-bar",
        children: jsx("span", { children: "mermaid" }),
      }),
      jsx("div", {
        className: "pm-content-body",
        children: jsx("pre", {
          className: "pm-code-scroll",
          style: { margin: 0 },
          children: jsx("code", { children: code }),
        }),
      }),
    ],
  });
}

function PreBlock(props) {
  const onlyChild = React.Children.toArray(props.children)[0];
  if (React.isValidElement(onlyChild)) {
    const className = onlyChild.props.className;
    const language = getCodeLanguage(className);
    const code = flattenText(onlyChild.props.children).replace(/\n$/, "");

    if (language === "mermaid") {
      return jsx(MermaidBlock, { code });
    }

    return jsx(CodeBlock, { code, language });
  }

  return jsx("pre", { ...props });
}

function InlineCode(props) {
  return jsx("code", { ...props });
}

function createAnchor(sourceRelativePath, contentRegistry) {
  return function Anchor(props) {
    const href =
      typeof props.href === "string"
        ? resolveContentHref(props.href, sourceRelativePath, contentRegistry)
        : props.href;
    return jsx("a", { ...props, href: typeof href === "string" ? href : props.href });
  };
}

function getMarkdownComponents(sourceRelativePath, contentRegistry) {
  return {
    a: createAnchor(sourceRelativePath, contentRegistry),
    pre: PreBlock,
    code: InlineCode,
    table: TableWrapper,
  };
}

async function getCompiledMdx(markdown, sourceRelativePath, contentRegistry) {
  const cacheKey = `${contentRegistry?.routeBase ?? ""}\0${sourceRelativePath}\0${markdown}`;
  const cached = mdxModuleCache.get(cacheKey);
  if (cached) {
    return cached;
  }

  const compiled = evaluate(markdown, {
    Fragment,
    jsx,
    jsxs,
    baseUrl: import.meta.url,
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: "append",
          content: { type: "text", value: "#" },
          properties: {
            ariaHidden: "true",
            tabIndex: -1,
          },
        },
      ],
    ],
    useMDXComponents: () => getMarkdownComponents(sourceRelativePath, contentRegistry),
  });

  mdxModuleCache.set(cacheKey, compiled);
  return compiled;
}

export async function renderMdxToMarkup(
  markdown,
  sourceRelativePath = "content/index.mdx",
  contentRegistry,
) {
  const { default: Content } = await getCompiledMdx(markdown, sourceRelativePath, contentRegistry);
  const components = getMarkdownComponents(sourceRelativePath, contentRegistry);

  return jsx("div", {
    className: "pm-markdown",
    children: jsx(Content, { components }),
  });
}
