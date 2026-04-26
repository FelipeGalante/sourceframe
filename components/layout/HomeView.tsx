import Link from "next/link";

import type { ContentEntry, DomainNavItem } from "@/lib/content";
import { MarkdownRenderer } from "@/lib/markdown";

export function HomeView({
  entry,
  domains,
}: {
  entry: ContentEntry;
  domains: DomainNavItem[];
}) {
  return (
    <div className="pm-home-grid">
      <section className="pm-domain-card">
        <div className="pm-kicker">Overview</div>
        <h1 className="pm-title pm-title-xl">{entry.title}</h1>
        {entry.description ? <p className="pm-subtitle">{entry.description}</p> : null}
        <div className="pm-meta-row">
          <span className="pm-pill">{domains.length} domains</span>
          <span className="pm-pill">{domains.reduce((sum, domain) => sum + domain.sectionCount, 0)} sections</span>
          <span className="pm-pill">Markdown source</span>
        </div>
      </section>

      <section className="pm-card pm-content-card">
        <div className="pm-content-body">
          <MarkdownRenderer markdown={entry.body} sourceRelativePath={entry.relativePath} />
        </div>
      </section>

      <section className="pm-home-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
        {domains.map((domain) => (
          <Link key={domain.key} href={domain.href} className="pm-domain-card">
            <div className="pm-kicker">{domain.eyebrow ?? "Domain"}</div>
            <h2 className="pm-title" style={{ fontSize: "1.6rem" }}>
              {domain.title}
            </h2>
            {domain.description ? <p className="pm-subtitle">{domain.description}</p> : null}
            <div className="pm-meta-row">
              <span className="pm-pill">{domain.sectionCount} sections</span>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
