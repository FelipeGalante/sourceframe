import type { SearchRecord } from "@/lib/content";

export type SearchResultGroup = {
  domain: string;
  records: SearchRecord[];
};

export function normalizeSearchText(value: string) {
  return value.toLowerCase().replace(/\s+/g, " ").trim();
}

export function tokenizeSearchQuery(value: string) {
  const normalized = normalizeSearchText(value);
  return normalized ? normalized.split(" ").filter(Boolean) : [];
}

export function rankSearchRecord(record: SearchRecord, terms: string[], phrase?: string) {
  const haystack = normalizeSearchText(
    [record.title, record.domain, record.section, record.headings.join(" "), record.text].join(" "),
  );
  if (!haystack) {
    return 0;
  }

  let score = 0;
  const normalizedPhrase = phrase ? normalizeSearchText(phrase) : "";
  if (normalizedPhrase) {
    if (record.title.toLowerCase().includes(normalizedPhrase)) score += 80;
    if (record.domain.toLowerCase().includes(normalizedPhrase)) score += 24;
    if (record.section.toLowerCase().includes(normalizedPhrase)) score += 22;
    if (record.headings.some((heading) => heading.toLowerCase().includes(normalizedPhrase))) {
      score += 18;
    }
    if (haystack.includes(normalizedPhrase)) score += 14;
  }

  for (const term of terms) {
    if (!term) continue;
    if (record.title.toLowerCase().includes(term)) score += 45;
    if (record.domain.toLowerCase().includes(term)) score += 18;
    if (record.section.toLowerCase().includes(term)) score += 16;
    if (record.headings.some((heading) => heading.toLowerCase().includes(term))) score += 12;
    if (haystack.includes(term)) score += 6;
  }

  return score;
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function highlightText(text: string, terms: string[]) {
  const normalizedTerms = terms.filter(Boolean).map((term) => term.toLowerCase());
  if (!normalizedTerms.length) {
    return [{ text, matched: false }];
  }

  const pattern = normalizedTerms.map(escapeRegExp).join("|");
  const matcher = new RegExp(`(${pattern})`, "ig");
  const parts: Array<{ text: string; matched: boolean }> = [];

  for (const part of text.split(matcher)) {
    if (!part) continue;
    parts.push({
      text: part,
      matched: normalizedTerms.includes(part.toLowerCase()),
    });
  }

  return parts.length ? parts : [{ text, matched: false }];
}

export function buildSearchExcerpt(text: string, terms: string[], fallback: string, limit = 160) {
  const normalizedTerms = terms.filter(Boolean).map((term) => term.toLowerCase());
  if (!text.trim()) {
    return fallback;
  }

  if (!normalizedTerms.length) {
    return text.length > limit ? `${text.slice(0, limit).trimEnd()}…` : text;
  }

  const lower = text.toLowerCase();
  let matchIndex = -1;
  let matchLength = 0;

  for (const term of normalizedTerms) {
    const found = lower.indexOf(term);
    if (found !== -1 && (matchIndex === -1 || found < matchIndex)) {
      matchIndex = found;
      matchLength = term.length;
    }
  }

  if (matchIndex === -1) {
    return fallback;
  }

  const start = Math.max(0, matchIndex - Math.floor(limit / 3));
  const end = Math.min(text.length, matchIndex + matchLength + Math.floor((limit * 2) / 3));
  const prefix = start > 0 ? "…" : "";
  const suffix = end < text.length ? "…" : "";
  return `${prefix}${text.slice(start, end).trim()}${suffix}`;
}

export function isSearchFocusShortcut(
  event: Pick<KeyboardEvent, "key" | "metaKey" | "ctrlKey" | "altKey" | "defaultPrevented">,
) {
  return (
    event.key === "/" &&
    !event.metaKey &&
    !event.ctrlKey &&
    !event.altKey &&
    !event.defaultPrevented
  );
}

export function groupSearchResults(records: SearchRecord[]) {
  const groups = new Map<string, SearchRecord[]>();

  for (const record of records) {
    const bucket = groups.get(record.domain) ?? [];
    bucket.push(record);
    groups.set(record.domain, bucket);
  }

  return [...groups.entries()].map(([domain, groupedRecords]) => ({
    domain,
    records: groupedRecords,
  })) satisfies SearchResultGroup[];
}
