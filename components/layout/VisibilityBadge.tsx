import React from "react";

import type { ContentVisibility } from "@/lib/content";

function visibilityLabel(visibility: ContentVisibility) {
  return visibility === "internal" ? "Internal" : "Private";
}

export function VisibilityBadge({ visibility }: { visibility?: ContentVisibility }) {
  if (!visibility || visibility === "public") {
    return null;
  }

  return (
    <span className={`pm-pill pm-visibility-badge pm-visibility-${visibility}`}>
      {visibilityLabel(visibility)}
    </span>
  );
}
