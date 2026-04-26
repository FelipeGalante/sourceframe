"use client";

import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";

let mermaidPromise: Promise<typeof import("mermaid")> | null = null;

function loadMermaid() {
  mermaidPromise ??= import("mermaid");
  return mermaidPromise;
}

export function MermaidBlock({ code }: { code: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);

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

  return (
    jsxs("div", {
      className: "pm-code-block",
      children: [
        jsx("div", {
          className: "pm-code-bar",
          children: jsx("span", { children: "mermaid" }),
        }),
        jsx("div", {
          className: "pm-content-body",
          children: error
            ? jsx("pre", {
                className: "pm-code-scroll",
                style: { margin: 0 },
                children: jsx("code", { children: code }),
              })
            : jsx("div", { ref }),
        }),
      ],
    })
  );
}
