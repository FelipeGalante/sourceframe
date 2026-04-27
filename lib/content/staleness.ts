import type { ContentEntry } from "./types";

export type StaleContentState = {
  isStale: boolean;
  reviewAfter?: string;
  lastReviewed?: string;
  deprecatedSince?: string;
  reason?: "review-due" | "deprecated";
};

function toDate(value?: string) {
  if (!value) {
    return null;
  }

  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? null : date;
}

export function getStaleContentState(entry: ContentEntry, now = new Date()): StaleContentState {
  const reviewAfterDate = toDate(entry.reviewAfter);
  const deprecatedSinceDate = toDate(entry.deprecatedSince);

  if (deprecatedSinceDate && deprecatedSinceDate <= now) {
    return {
      isStale: true,
      reviewAfter: entry.reviewAfter,
      lastReviewed: entry.lastReviewed,
      deprecatedSince: entry.deprecatedSince,
      reason: "deprecated",
    };
  }

  if (reviewAfterDate && reviewAfterDate <= now) {
    return {
      isStale: true,
      reviewAfter: entry.reviewAfter,
      lastReviewed: entry.lastReviewed,
      deprecatedSince: entry.deprecatedSince,
      reason: "review-due",
    };
  }

  return {
    isStale: false,
    reviewAfter: entry.reviewAfter,
    lastReviewed: entry.lastReviewed,
    deprecatedSince: entry.deprecatedSince,
  };
}
