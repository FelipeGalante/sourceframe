"use client";

import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";

export function CodeBlock({ code, language }: { code: string; language?: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1400);
    } catch {
      setCopied(false);
    }
  }

  return (
    jsxs("div", {
      className: "pm-code-block",
      children: [
        jsxs("div", {
          className: "pm-code-bar",
          children: [
            jsx("span", { children: language || "code" }),
            jsx("button", {
              className: "pm-copy-button",
              type: "button",
              onClick: handleCopy,
              children: copied ? "Copied" : "Copy",
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
    })
  );
}
