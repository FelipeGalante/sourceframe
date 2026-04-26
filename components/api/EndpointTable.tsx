import React from "react";
import type { ApiEndpoint } from "@/lib/api-docs";

import { MethodBadge } from "./MethodBadge";
import { AuthRequirement } from "./AuthRequirement";
import { endpointAnchorId } from "./shared";

export function EndpointTable({
  endpoints,
  title = "Endpoints",
}: {
  endpoints: ApiEndpoint[];
  title?: string;
}) {
  if (!endpoints.length) {
    return null;
  }

  return (
    <section className="pm-schema-block">
      <div className="pm-api-section-title">{title}</div>
      <div className="pm-table-scroll">
        <table className="pm-schema-table pm-api-table">
          <thead>
            <tr>
              <th>Method</th>
              <th>Path</th>
              <th>Group</th>
              <th>Summary</th>
              <th>Auth</th>
            </tr>
          </thead>
          <tbody>
            {endpoints.map((endpoint) => (
              <tr key={`${endpoint.method}:${endpoint.path}:${endpoint.group}`}>
                <td>
                  <MethodBadge method={endpoint.method} />
                </td>
                <td>
                  <a href={`#${endpointAnchorId(endpoint.path)}`} className="pm-api-path-link">
                    {endpoint.path}
                  </a>
                </td>
                <td>{endpoint.group}</td>
                <td>{endpoint.summary}</td>
                <td>
                  <AuthRequirement auth={endpoint.auth} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
