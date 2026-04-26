import { buildContentRegistry } from "@/lib/content";

try {
  const registry = buildContentRegistry();
  console.log(
    `Validated ${registry.entries.length} content files across ${registry.domainTabs.length} domains.`
  );
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
}
