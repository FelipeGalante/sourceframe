import { ArchiveView } from "@/components/layout/ArchiveView";
import { getFullArchiveEntries } from "@/lib/content";

export default function FullArchivePage() {
  return <ArchiveView title="Full archive" entries={getFullArchiveEntries()} />;
}
