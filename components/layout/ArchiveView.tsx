import type { ContentEntry } from "@/lib/content";
export function ArchiveView({ entries }: { entries: ContentEntry[] }) {
  return (
    <div className="pm-archive">
      {entries.map((entry) => (
        <section key={entry.id} className="pm-card pm-content-card">
          <div className="pm-content-body">
            <div className="pm-kicker">{entry.domain ?? "Site"}</div>
            <h2 className="pm-title pm-title-lg">{entry.title}</h2>
            {entry.description ? <p className="pm-subtitle">{entry.description}</p> : null}
            <div className="pm-meta-row">
              <span className="pm-pill">{entry.type.replace(/-/g, " ")}</span>
              {entry.section ? <span className="pm-pill">/{entry.section}</span> : null}
            </div>
            <div className="pm-code-block">
              <div className="pm-code-bar">
                <span>markdown</span>
              </div>
              <div className="pm-code-scroll">
                <pre>
                  <code>{entry.body}</code>
                </pre>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
