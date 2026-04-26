"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useId, useMemo, useRef, useState } from "react";
import type { KeyboardEvent as ReactKeyboardEvent } from "react";

import type { SearchRecord } from "@/lib/content";
import { buildSearchExcerpt } from "./search-utils";
import {
  groupSearchResults,
  highlightText,
  isSearchFocusShortcut,
  normalizeSearchText,
  rankSearchRecord,
  tokenizeSearchQuery,
} from "./search-utils";

function useDebouncedValue<T>(value: T, delay = 140) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const timeout = window.setTimeout(() => setDebounced(value), delay);
    return () => window.clearTimeout(timeout);
  }, [delay, value]);

  return debounced;
}

export function SearchBox({ records }: { records: SearchRecord[] }) {
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const pathname = usePathname();
  const router = useRouter();
  const debouncedQuery = useDebouncedValue(query);
  const listboxId = useId();
  const activeQuery = normalizeSearchText(query);

  useEffect(() => {
    setQuery("");
    setActiveIndex(0);
  }, [pathname]);

  useEffect(() => {
    function handleGlobalShortcut(event: globalThis.KeyboardEvent) {
      if (document.activeElement !== inputRef.current && isSearchFocusShortcut(event)) {
        event.preventDefault();
        inputRef.current?.focus();
      }
    }

    window.addEventListener("keydown", handleGlobalShortcut);
    return () => window.removeEventListener("keydown", handleGlobalShortcut);
  }, []);

  const results = useMemo(() => {
    const normalized = normalizeSearchText(debouncedQuery);
    if (!normalized) {
      return [] as SearchRecord[];
    }

    const terms = tokenizeSearchQuery(normalized);
    return records
      .map((record) => ({
        record,
        score: rankSearchRecord(record, terms, normalized),
      }))
      .filter((item) => item.score > 0)
      .sort(
        (left, right) =>
          right.score - left.score || left.record.title.localeCompare(right.record.title),
      )
      .slice(0, 8)
      .map((item) => item.record);
  }, [debouncedQuery, records]);

  useEffect(() => {
    setActiveIndex(results.length ? 0 : -1);
  }, [results]);

  function navigateToResult(index: number) {
    const target = results[index];
    if (!target) {
      return;
    }
    router.push(target.href);
  }

  function handleKeyDown(event: ReactKeyboardEvent<HTMLInputElement>) {
    if (!results.length) {
      if (event.key === "Escape") {
        setQuery("");
      }
      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((current) => (current + 1) % results.length);
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((current) => (current <= 0 ? results.length - 1 : current - 1));
      return;
    }

    if (event.key === "Home") {
      event.preventDefault();
      setActiveIndex(0);
      return;
    }

    if (event.key === "End") {
      event.preventDefault();
      setActiveIndex(results.length - 1);
      return;
    }

    if (event.key === "Enter") {
      event.preventDefault();
      navigateToResult(activeIndex >= 0 ? activeIndex : 0);
      return;
    }

    if (event.key === "Escape") {
      event.preventDefault();
      setQuery("");
      setActiveIndex(0);
    }
  }

  const visible = Boolean(activeQuery);
  const terms = tokenizeSearchQuery(query);
  const groupedResults = groupSearchResults(results);

  return (
    <div className="pm-search">
      <input
        ref={inputRef}
        aria-label="Search project content"
        aria-activedescendant={activeIndex >= 0 ? `${listboxId}-option-${activeIndex}` : undefined}
        aria-autocomplete="list"
        aria-controls={listboxId}
        aria-haspopup="listbox"
        aria-expanded={visible}
        className="pm-search-input"
        placeholder="Search content"
        role="combobox"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button
        type="button"
        className="pm-search-button"
        aria-label="Clear search"
        onClick={() => setQuery("")}
      >
        ×
      </button>
      <div className="pm-search-hint">Press Cmd/Ctrl+K or / to focus search</div>
      {visible ? (
        <div
          className="pm-search-results"
          id={listboxId}
          role="listbox"
          aria-label="Search results"
        >
          <div className="pm-search-query" aria-live="polite">
            <span>Search results for “{query}”</span>
            <span className="pm-search-count">
              {results.length ? `${results.length} matches` : "No matches"}
            </span>
          </div>
          <div className="pm-search-shortcuts" aria-label="Search keyboard shortcuts">
            <span className="pm-search-shortcut">
              <kbd>⌘</kbd>
              <kbd>K</kbd> focus search
            </span>
            <span className="pm-search-shortcut">
              <kbd>/</kbd> focus search
            </span>
            <span className="pm-search-shortcut">
              <kbd>↑</kbd>
              <kbd>↓</kbd> navigate
            </span>
            <span className="pm-search-shortcut">
              <kbd>Enter</kbd> open
            </span>
            <span className="pm-search-shortcut">
              <kbd>Esc</kbd> clear
            </span>
          </div>
          <div className="pm-search-results-list">
            {results.length ? (
              groupedResults.map((group) => (
                <div
                  key={group.domain}
                  className="pm-search-group"
                  role="group"
                  aria-label={group.domain}
                >
                  <div className="pm-search-group-title">
                    <span>{group.domain}</span>
                    <span className="pm-search-count">{group.records.length} results</span>
                  </div>
                  {group.records.map((record) => {
                    const index = results.findIndex((item) => item.id === record.id);
                    const active = index === activeIndex;
                    return (
                      <Link
                        key={record.id}
                        id={`${listboxId}-option-${index}`}
                        href={record.href}
                        className="pm-search-result"
                        role="option"
                        aria-selected={active}
                        data-active={active}
                      >
                        <span className="pm-search-result-title">
                          {highlightText(record.title, terms).map((part, partIndex) =>
                            part.matched ? (
                              <mark key={partIndex}>{part.text}</mark>
                            ) : (
                              <span key={partIndex}>{part.text}</span>
                            ),
                          )}
                        </span>
                        <span className="pm-search-result-meta">
                          <span>
                            {highlightText(record.domain, terms).map((part, partIndex) =>
                              part.matched ? (
                                <mark key={partIndex}>{part.text}</mark>
                              ) : (
                                <span key={partIndex}>{part.text}</span>
                              ),
                            )}
                          </span>
                          <span>
                            ·{" "}
                            {highlightText(record.contentType.replace(/-/g, " "), terms).map(
                              (part, partIndex) =>
                                part.matched ? (
                                  <mark key={partIndex}>{part.text}</mark>
                                ) : (
                                  <span key={partIndex}>{part.text}</span>
                                ),
                            )}
                          </span>
                        </span>
                        <span className="pm-search-result-summary">
                          {highlightText(
                            buildSearchExcerpt(record.text, terms, record.summary),
                            terms,
                          ).map((part, partIndex) =>
                            part.matched ? (
                              <mark key={partIndex}>{part.text}</mark>
                            ) : (
                              <span key={partIndex}>{part.text}</span>
                            ),
                          )}
                        </span>
                        <span className="pm-search-result-route">
                          {highlightText(record.route, terms).map((part, partIndex) =>
                            part.matched ? (
                              <mark key={partIndex}>{part.text}</mark>
                            ) : (
                              <span key={partIndex}>{part.text}</span>
                            ),
                          )}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              ))
            ) : (
              <div className="pm-search-empty">
                <p>No matching section found. Try another term or switch to Full archive view.</p>
                <Link href="/full-archive" className="pm-action-button">
                  Open full archive
                </Link>
              </div>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
}
