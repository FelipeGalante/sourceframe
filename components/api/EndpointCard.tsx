import React from "react";

import type { ApiEndpoint } from "@/lib/api-docs";

import { AuthRequirement } from "./AuthRequirement";
import { ErrorExample } from "./ErrorExample";
import { RequestExample } from "./RequestExample";
import { ResponseExample } from "./ResponseExample";
import { MethodBadge } from "./MethodBadge";
import { endpointAnchorId } from "./shared";

export function EndpointCard({ endpoint }: { endpoint: ApiEndpoint }) {
  return (
    <section
      id={endpointAnchorId(endpoint.path)}
      className="pm-card pm-content-card pm-endpoint-card"
    >
      <div className="pm-content-body">
        <div className="pm-api-card-head">
          <div>
            <div className="pm-kicker">{endpoint.group}</div>
            <h2 className="pm-title pm-title-lg">{endpoint.path}</h2>
          </div>
          <MethodBadge method={endpoint.method} />
        </div>

        <p className="pm-subtitle">{endpoint.summary}</p>

        <div className="pm-api-auth-row">
          <AuthRequirement auth={endpoint.auth} />
        </div>

        <RequestExample example={endpoint.requestBodyExample} />
        <ResponseExample example={endpoint.responseExample} />
        <ErrorExample errors={endpoint.errorCodes ?? []} />
      </div>
    </section>
  );
}
