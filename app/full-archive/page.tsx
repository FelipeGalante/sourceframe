import { ArchiveView } from "@/components/layout/ArchiveView";
import { getContentRegistry } from "@/lib/content";

export default function FullArchivePage() {
  return <ArchiveView entries={getContentRegistry().entries} />;
}
