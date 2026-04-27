import React from "react";

const toneMap: Record<string, string> = {
  draft: "pm-decision-draft",
  proposed: "pm-decision-proposed",
  accepted: "pm-decision-accepted",
  superseded: "pm-decision-superseded",
  deprecated: "pm-decision-deprecated",
};

export function DecisionStatusBadge({ status }: { status: string }) {
  const tone = toneMap[status.toLowerCase()] ?? "pm-decision-generic";

  return <span className={`pm-pill pm-decision-badge ${tone}`}>{status}</span>;
}
