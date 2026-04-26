"use client";

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
    <div className="pm-code-block">
      <div className="pm-code-bar">
        <span>mermaid</span>
      </div>
      <div className="pm-content-body">
        {error ? (
          <pre className="pm-code-scroll" style={{ margin: 0 }}>
            <code>{code}</code>
          </pre>
        ) : (
          <div ref={ref} />
        )}
      </div>
    </div>
  );
}
