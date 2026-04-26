import Link from "next/link";

import { ContentRenderer } from "@/components/markdown/ContentRenderer";
import type { ContentEntry } from "@/lib/content";

function archivePills(entry: ContentEntry) {
  const pills: Array<{ label: string; value: string }> = [];

  pills.push({ label: "Type", value: entry.type.replace(/-/g, " ") });
  if (entry.contentType) {
    pills.push({ label: "Content type", value: entry.contentType.replace(/-/g, " ") });
  }
  if (entry.status) {
    pills.push({ label: "Status", value: entry.status });
  }
  if (entry.owner) {
    pills.push({ label: "Owner", value: entry.owner });
  }
  if (entry.updated) {
    pills.push({ label: "Updated", value: entry.updated });
  }
  if (entry.section) {
    pills.push({ label: "Section", value: entry.section });
  }
  pills.push({ label: "Source path", value: `content/${entry.relativePath}` });

  return pills;
}

export function ArchiveView({
  title,
  eyebrow,
  description,
  entries,
  archiveHref,
}: {
  title: string;
  eyebrow?: string;
  description?: string;
  entries: ContentEntry[];
  archiveHref?: string;
}) {
  return (
    <div className="pm-archive-shell">
      <section className="pm-card pm-archive-header">
        <div className="pm-kicker">{eyebrow ?? "Archive mode"}</div>
        <h1 className="pm-title pm-title-xl">{title}</h1>
        {description ? <p className="pm-subtitle">{description}</p> : null}
        <div className="pm-meta-row">
          <span className="pm-pill">{entries.length} pages</span>
          <span className="pm-pill">Sequential reading order</span>
        </div>
        {archiveHref ? (
          <Link href={archiveHref} className="pm-action-button pm-archive-toggle">
            View full archive
          </Link>
        ) : null}
      </section>

      <div className="pm-archive">
        {entries.map((entry) => (
          <article key={entry.id} className="pm-card pm-content-card pm-archive-card">
            <div className="pm-content-body">
              <div className="pm-kicker">{entry.domain ?? "Site"}</div>
              <h2 className="pm-title pm-title-lg">{entry.title}</h2>
              {entry.description ? <p className="pm-subtitle">{entry.description}</p> : null}
              <div className="pm-meta-row">
                {archivePills(entry).map((pill) => (
                  <span key={`${entry.id}:${pill.label}:${pill.value}`} className="pm-pill">
                    <strong>{pill.label}:</strong> {pill.value}
                  </span>
                ))}
              </div>
              <div className="pm-archive-source">
                <span className="pm-archive-source-label">Source</span>
                <span>{entry.relativePath}</span>
              </div>
              <ContentRenderer
                format={entry.format}
                markdown={entry.body}
                sourceRelativePath={entry.relativePath}
              />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
