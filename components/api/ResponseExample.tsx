import React from "react";

import type { ApiExample } from "@/lib/api-docs";

export function ResponseExample({ example }: { example?: ApiExample }) {
  if (!example) {
    return null;
  }

  return (
    <section className="pm-api-example">
      <div className="pm-api-example-head">
        <strong>Response example</strong>
        {example.language ? <span>{example.language}</span> : null}
      </div>
      {example.title ? <div className="pm-api-example-title">{example.title}</div> : null}
      <pre className="pm-code-block pm-api-code">
        <code>{example.body}</code>
      </pre>
    </section>
  );
}
