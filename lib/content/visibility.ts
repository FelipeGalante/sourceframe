export const contentVisibilityValues = ["public", "internal", "private"] as const;

export type ContentVisibility = (typeof contentVisibilityValues)[number];

export type ContentVisibilityPolicy = {
  include?: ContentVisibility[];
  exclude?: ContentVisibility[];
};

export type NormalizedContentVisibilityPolicy = {
  include: Set<ContentVisibility>;
  exclude: Set<ContentVisibility>;
};

export function normalizeContentVisibilityPolicy(
  policy?: ContentVisibilityPolicy,
): NormalizedContentVisibilityPolicy {
  return {
    include: new Set(policy?.include ?? contentVisibilityValues),
    exclude: new Set(policy?.exclude ?? []),
  };
}

export function resolveContentVisibility(visibility?: ContentVisibility): ContentVisibility {
  return visibility ?? "public";
}

export function isContentVisible(
  visibility: ContentVisibility | undefined,
  policy?: ContentVisibilityPolicy,
) {
  const normalized = normalizeContentVisibilityPolicy(policy);
  const value = resolveContentVisibility(visibility);
  return normalized.include.has(value) && !normalized.exclude.has(value);
}
