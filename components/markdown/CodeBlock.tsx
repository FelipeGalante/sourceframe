"use client";

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
    <div className="pm-code-block">
      <div className="pm-code-bar">
        <span>{language || "code"}</span>
        <button className="pm-copy-button" type="button" onClick={handleCopy}>
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <div className="pm-code-scroll">
        <pre>
          <code className={language ? `language-${language}` : undefined}>{code}</code>
        </pre>
      </div>
    </div>
  );
}
