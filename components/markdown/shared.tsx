import React from "react";

import { CodeBlock } from "@/components/markdown/CodeBlock";
import { MermaidBlock } from "@/components/markdown/MermaidBlock";
import { TableWrapper } from "@/components/markdown/TableWrapper";
import { resolveContentHref } from "@/lib/content";

export function flattenText(children: React.ReactNode): string {
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

export function getCodeLanguage(className?: string) {
  if (!className) {
    return "";
  }

  const match = className.match(/language-([a-z0-9_-]+)/i);
  return match?.[1] ?? "";
}

export function PreBlock(props: React.ComponentPropsWithoutRef<"pre">) {
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

export function InlineCode(props: React.ComponentPropsWithoutRef<"code">) {
  const className = props.className;
  if (className?.includes("language-")) {
    return <code {...props} />;
  }

  return <code {...props} />;
}

export function createAnchor(sourceRelativePath: string) {
  return function Anchor(props: React.ComponentPropsWithoutRef<"a">) {
    const href =
      typeof props.href === "string"
        ? resolveContentHref(props.href, sourceRelativePath)
        : props.href;
    return <a {...props} href={typeof href === "string" ? href : props.href} />;
  };
}

export function getMarkdownComponents(sourceRelativePath: string) {
  return {
    a: createAnchor(sourceRelativePath),
    pre: PreBlock,
    code: InlineCode,
    table: TableWrapper,
  };
}
