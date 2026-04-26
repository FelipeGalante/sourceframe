import React from "react";

import type { ApiExample } from "@/lib/api-docs";

export function RequestExample({ example }: { example?: ApiExample }) {
  if (!example) {
    return null;
  }

  return (
    <section className="pm-api-example">
      <div className="pm-api-example-head">
        <strong>Request example</strong>
        {example.language ? <span>{example.language}</span> : null}
      </div>
      {example.title ? <div className="pm-api-example-title">{example.title}</div> : null}
      <pre className="pm-code-block pm-api-code">
        <code>{example.body}</code>
      </pre>
    </section>
  );
}
