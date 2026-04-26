import React from "react";

import type { ApiAuthRequirement } from "@/lib/api-docs";

export function AuthRequirement({ auth }: { auth?: ApiAuthRequirement }) {
  if (!auth) {
    return <span className="pm-pill">No auth required</span>;
  }

  return (
    <div className="pm-api-auth">
      <strong>{auth.label}</strong>
      {auth.details ? <span>{auth.details}</span> : null}
    </div>
  );
}
