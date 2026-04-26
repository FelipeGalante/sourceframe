import { notFound } from "next/navigation";

import { ArchiveView } from "@/components/layout/ArchiveView";
import { getDomainArchiveEntries, getDomainEntry, getVisibleDomainTabs } from "@/lib/content";

export function generateStaticParams() {
  return getVisibleDomainTabs().map((domain) => ({
    domain: domain.key,
  }));
}

export default async function DomainArchivePage({
  params,
}: {
  params: Promise<{ domain: string }>;
}) {
  const { domain } = await params;
  const domainEntry = getDomainEntry(domain);

  if (!domainEntry) {
    notFound();
  }

  const entries = getDomainArchiveEntries(domainEntry.key);
  if (!entries.length) {
    notFound();
  }

  return (
    <ArchiveView
      title={`${domainEntry.title} archive`}
      eyebrow={domainEntry.eyebrow ?? domainEntry.title}
      description={domainEntry.description}
      entries={entries}
      archiveHref="/full-archive"
    />
  );
}
