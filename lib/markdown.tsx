import React from "react";
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { toJsxRuntime } from "hast-util-to-jsx-runtime";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeRaw from "rehype-raw";
import rehypeSanitize, { defaultSchema } from "rehype-sanitize";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

import { CodeBlock } from "@/components/markdown/CodeBlock";
import { MermaidBlock } from "@/components/markdown/MermaidBlock";
import { TableWrapper } from "@/components/markdown/TableWrapper";
import { resolveContentHref } from "@/lib/content";

function flattenText(children: React.ReactNode): string {
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
    return flattenText(
      (children as React.ReactElement<{ children?: React.ReactNode }>).props.children,
    );
  }

  return "";
}

function getCodeLanguage(className?: string) {
  if (!className) {
    return "";
  }

  const match = className.match(/language-([a-z0-9_-]+)/i);
  return match?.[1] ?? "";
}

function PreBlock(props: React.ComponentPropsWithoutRef<"pre">) {
  const onlyChild = React.Children.toArray(props.children)[0];
  if (React.isValidElement(onlyChild)) {
    const child = onlyChild as React.ReactElement<{
      className?: string;
      children?: React.ReactNode;
    }>;
    const childProps = child.props;
    const className = childProps.className;
    const language = getCodeLanguage(className);
    const code = flattenText(childProps.children).replace(/\n$/, "");

    if (language === "mermaid") {
      return <MermaidBlock code={code} />;
    }

    return <CodeBlock code={code} language={language} />;
  }

  return <pre {...props} />;
}

function InlineCode(props: React.ComponentPropsWithoutRef<"code">) {
  const className = props.className;
  if (className?.includes("language-")) {
    return <code {...props} />;
  }

  return <code {...props} />;
}

function createAnchor(sourceRelativePath: string) {
  return function Anchor(props: React.ComponentPropsWithoutRef<"a">) {
    const href =
      typeof props.href === "string"
        ? resolveContentHref(props.href, sourceRelativePath)
        : props.href;
    return <a {...props} href={typeof href === "string" ? href : props.href} />;
  };
}

type JsxRuntimeNode = Parameters<typeof toJsxRuntime>[0];

function sanitizeSchema() {
  const schema = structuredClone(defaultSchema);
  const tags = [
    "details",
    "summary",
    "svg",
    "path",
    "rect",
    "circle",
    "line",
    "polyline",
    "polygon",
    "g",
    "defs",
    "mask",
    "pattern",
    "linearGradient",
    "stop",
    "text",
    "tspan",
  ];

  schema.tagNames = [...new Set([...(schema.tagNames ?? []), ...tags])];
  schema.attributes = {
    ...(schema.attributes ?? {}),
    "*": [
      ...(schema.attributes?.["*"] ?? []),
      "id",
      "className",
      "role",
      "ariaLabel",
      "ariaHidden",
      "ariaCurrent",
      "tabIndex",
      "viewBox",
      "xmlns",
      "width",
      "height",
      "fill",
      "stroke",
      "strokeWidth",
      "strokeLinecap",
      "strokeLinejoin",
      "d",
      "x",
      "y",
      "rx",
      "ry",
      "cx",
      "cy",
      "r",
      "points",
      "transform",
      "preserveAspectRatio",
      "target",
      "rel",
      "fontFamily",
      "fontSize",
      "fontWeight",
      "letterSpacing",
      "fillRule",
      "clipRule",
    ],
    a: [
      ...(schema.attributes?.a ?? []),
      "href",
      "title",
      "target",
      "rel",
      "className",
      "ariaHidden",
      "tabIndex",
    ],
    code: [...(schema.attributes?.code ?? []), "className"],
    pre: [...(schema.attributes?.pre ?? []), "className"],
    details: [...(schema.attributes?.details ?? []), "open"],
    summary: [...(schema.attributes?.summary ?? [])],
    table: [...(schema.attributes?.table ?? []), "className"],
    th: [...(schema.attributes?.th ?? []), "scope", "colSpan", "rowSpan"],
    td: [...(schema.attributes?.td ?? []), "colSpan", "rowSpan"],
    svg: [
      ...(schema.attributes?.svg ?? []),
      "viewBox",
      "xmlns",
      "role",
      "ariaLabel",
      "width",
      "height",
      "fill",
    ],
    path: [...(schema.attributes?.path ?? []), "d", "fill", "stroke", "strokeWidth", "transform"],
    rect: [
      ...(schema.attributes?.rect ?? []),
      "x",
      "y",
      "width",
      "height",
      "rx",
      "ry",
      "fill",
      "stroke",
    ],
    circle: [...(schema.attributes?.circle ?? []), "cx", "cy", "r", "fill", "stroke"],
    line: [...(schema.attributes?.line ?? []), "x1", "y1", "x2", "y2", "stroke"],
    polyline: [...(schema.attributes?.polyline ?? []), "points", "fill", "stroke"],
    polygon: [...(schema.attributes?.polygon ?? []), "points", "fill", "stroke"],
    g: [...(schema.attributes?.g ?? []), "fill", "stroke", "transform"],
    text: [...(schema.attributes?.text ?? []), "x", "y", "fill", "textAnchor", "fontSize"],
    tspan: [
      ...(schema.attributes?.tspan ?? []),
      "x",
      "dy",
      "fill",
      "fontFamily",
      "fontSize",
      "fontWeight",
    ],
  };

  return schema;
}

const markdownSanitizeSchema = sanitizeSchema();

export function MarkdownRenderer({
  markdown,
  sourceRelativePath = "content/index.md",
  allowRawHtml = true,
  literalSource = false,
}: {
  markdown: string;
  sourceRelativePath?: string;
  allowRawHtml?: boolean;
  literalSource?: boolean;
}) {
  if (literalSource || sourceRelativePath.endsWith("about/sources.md")) {
    // The source archive is intentionally rendered as literal text so the
    // raw source stays auditable and cannot be reinterpreted as markdown.
    return (
      <div className="pm-markdown">
        <div className="pm-code-block">
          <div className="pm-code-bar">
            <span>markdown</span>
          </div>
          <div className="pm-code-scroll">
            <pre>
              <code>{markdown}</code>
            </pre>
          </div>
        </div>
      </div>
    );
  }

  const processor = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: allowRawHtml });
  if (allowRawHtml) {
    processor.use(rehypeRaw);
  }
  processor
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, {
      behavior: "append",
      content: { type: "text", value: "#" },
      properties: {
        ariaHidden: "true",
        tabIndex: -1,
      },
    })
    .use(rehypeSanitize, markdownSanitizeSchema)
    .freeze();

  const parsed = processor.parse(markdown);
  const hast = processor.runSync(parsed as never) as JsxRuntimeNode;

  return (
    <div className="pm-markdown">
      {toJsxRuntime(hast, {
        Fragment,
        jsx,
        jsxs,
        components: {
          a: createAnchor(sourceRelativePath),
          pre: PreBlock,
          code: InlineCode,
          table: TableWrapper,
        },
      })}
    </div>
  );
}
