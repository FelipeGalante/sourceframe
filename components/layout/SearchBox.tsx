"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

import type { SearchRecord } from "@/lib/content";

function useDebouncedValue<T>(value: T, delay = 140) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const timeout = window.setTimeout(() => setDebounced(value), delay);
    return () => window.clearTimeout(timeout);
  }, [delay, value]);

  return debounced;
}

function normalize(value: string) {
  return value.toLowerCase().replace(/\s+/g, " ").trim();
}

function rankRecord(record: SearchRecord, terms: string[]) {
  const haystack = normalize([record.title, record.domain, record.section, record.headings.join(" "), record.text].join(" "));
  if (!haystack) {
    return 0;
  }

  let score = 0;
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

export function SearchBox({ records }: { records: SearchRecord[] }) {
  const [query, setQuery] = useState("");
  const pathname = usePathname();
  const debouncedQuery = useDebouncedValue(query);

  useEffect(() => {
    setQuery("");
  }, [pathname]);

  const results = useMemo(() => {
    const normalized = normalize(debouncedQuery);
    if (!normalized) {
      return [] as SearchRecord[];
    }

    const terms = normalized.split(" ").filter(Boolean);
    return records
      .map((record) => ({
        record,
        score: rankRecord(record, terms),
      }))
      .filter((item) => item.score > 0)
      .sort((left, right) => right.score - left.score || left.record.title.localeCompare(right.record.title))
      .slice(0, 8)
      .map((item) => item.record);
  }, [debouncedQuery, records]);

  const visible = Boolean(normalize(query));

  return (
    <div className="pm-search">
      <input
        aria-label="Search project content"
        className="pm-search-input"
        placeholder="Search content"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <button
        type="button"
        className="pm-search-button"
        aria-label="Clear search"
        onClick={() => setQuery("")}
      >
        ×
      </button>
      {visible ? (
        <div className="pm-search-results" role="listbox" aria-label="Search results">
          <div className="pm-search-query">Search results for “{query}”</div>
          <div className="pm-search-results-list">
            {results.length ? (
              results.map((record) => (
                <Link key={record.id} href={record.href} className="pm-search-result">
                  <span className="pm-search-result-title">{record.title}</span>
                  <span className="pm-search-result-meta">
                    <span>{record.domain}</span>
                    {record.section ? <span>· {record.section}</span> : null}
                  </span>
                  <span className="pm-search-result-excerpt">{record.excerpt}</span>
                </Link>
              ))
            ) : (
              <div className="pm-search-empty">
                No matching section found. Try another term or switch to Full archive view.
              </div>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
}
