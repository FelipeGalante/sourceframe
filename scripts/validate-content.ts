import { summarizeContentTree, validateContentTree } from "@/lib/content";

try {
  const registry = validateContentTree();
  const summary = summarizeContentTree(registry);
  console.log(
    [
      `Validated ${summary.contentFiles} content files across ${summary.domains} domains.`,
      `Checked ${summary.routes} routes, ${summary.relativeLinksChecked} relative Markdown links, and ${summary.absoluteLinksChecked} internal route links.`,
    ].join(" "),
  );
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
}
