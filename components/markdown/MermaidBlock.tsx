"use client";

import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";

let mermaidPromise: Promise<typeof import("mermaid")> | null = null;

function loadMermaid() {
  mermaidPromise ??= import("mermaid");
  return mermaidPromise;
}

export function MermaidFallback({ code, error }: { code: string; error?: string }) {
  return jsxs("div", {
    className: "pm-mermaid-fallback",
    children: [
      jsx("p", {
        className: "pm-mermaid-error",
        children: error ?? "Unable to render Mermaid diagram. Showing the source instead.",
      }),
      jsx("div", {
        className: "pm-code-block pm-mermaid-source",
        children: jsx("div", {
          className: "pm-code-scroll",
          children: jsx("pre", {
            children: jsx("code", { children: code }),
          }),
        }),
      }),
    ],
  });
}

export function MermaidBlock({ code }: { code: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    let active = true;

    async function render() {
      try {
        const mermaid = await loadMermaid();
        mermaid.default.initialize({
          startOnLoad: false,
          theme: "dark",
          securityLevel: "loose",
        });

        const id = `mermaid-${Math.random().toString(36).slice(2)}`;
        const { svg } = await mermaid.default.render(id, code);

        if (!active || !ref.current) {
          return;
        }

        ref.current.innerHTML = svg;
        setError(null);
      } catch (cause) {
        if (!active) {
          return;
        }

        setError(cause instanceof Error ? cause.message : "Unable to render Mermaid diagram.");
      }
    }

    render();

    return () => {
      active = false;
    };
  }, [code]);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1400);
    } catch {
      setCopied(false);
    }
  }

  return jsxs("div", {
    className: "pm-code-block pm-mermaid-block",
    children: [
      jsx("div", {
        className: "pm-code-bar",
        children: [
          jsx("span", { children: "mermaid" }, "label"),
          jsx(
            "button",
            {
              className: "pm-copy-button",
              type: "button",
              onClick: handleCopy,
              children: copied ? "Copied" : "Copy source",
            },
            "copy",
          ),
        ],
      }),
      error
        ? jsx(MermaidFallback, { code, error })
        : jsx("div", {
            className: "pm-mermaid-stage",
            children: jsx("div", { ref, className: "pm-mermaid-canvas" }),
          }),
    ],
  });
}
