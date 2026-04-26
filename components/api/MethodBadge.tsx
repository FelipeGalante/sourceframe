import React from "react";

const methodTone: Record<string, string> = {
  GET: "pm-method-get",
  POST: "pm-method-post",
  PUT: "pm-method-put",
  PATCH: "pm-method-patch",
  DELETE: "pm-method-delete",
  OPTIONS: "pm-method-options",
};

export function MethodBadge({ method }: { method: string }) {
  const tone = methodTone[method.toUpperCase()] ?? "pm-method-generic";

  return <span className={`pm-method-badge ${tone}`}>{method.toUpperCase()}</span>;
}
