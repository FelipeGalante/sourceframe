import Link from "next/link";

export default function NotFound() {
  return (
    <section className="pm-card pm-content-card">
      <div className="pm-content-body">
        <div className="pm-kicker">Not found</div>
        <h1 className="pm-title pm-title-lg">That page does not exist.</h1>
        <p className="pm-subtitle">Try a different section or return to the overview.</p>
        <div className="pm-meta-row">
          <Link href="/" className="pm-action-button">
            Back to home
          </Link>
          <Link href="/full-archive" className="pm-action-button">
            Full archive
          </Link>
        </div>
      </div>
    </section>
  );
}
