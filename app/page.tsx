import { HomeView } from "@/components/layout/HomeView";
import { getContentRegistry } from "@/lib/content";

export default function Page() {
  const registry = getContentRegistry();
  const entry = registry.rootEntry;

  if (!entry) {
    throw new Error("Missing root site index content.");
  }

  return <HomeView entry={entry} domains={registry.domainTabs} />;
}
