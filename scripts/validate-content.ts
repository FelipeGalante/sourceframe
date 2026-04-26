import fs from "node:fs";
import path from "node:path";

import {
  buildContentManifest,
  buildContentRegistry,
  buildDatabaseTableManifest,
  buildExtractionReport,
} from "@/lib/content";

const generatedDir = path.join(process.cwd(), "generated");

function readGeneratedFile(filePath: string) {
  return fs.readFileSync(filePath, "utf8");
}

try {
  const registry = buildContentRegistry();
  const contentManifest = buildContentManifest(registry, { pathPrefix: "content/" });
  const databaseTableManifest = buildDatabaseTableManifest(registry, { pathPrefix: "content/" });
  const extractionReport = buildExtractionReport(registry, contentManifest, databaseTableManifest);

  const expectedContentManifest = `${JSON.stringify(contentManifest, null, 2)}\n`;
  const expectedDatabaseTableManifest = `${JSON.stringify(databaseTableManifest, null, 2)}\n`;
  const expectedExtractionReport = `${extractionReport}\n`;

  const contentManifestPath = path.join(generatedDir, "content-manifest.json");
  const databaseTableManifestPath = path.join(generatedDir, "database-table-manifest.json");
  const extractionReportPath = path.join(generatedDir, "extraction-report.md");

  if (readGeneratedFile(contentManifestPath) !== expectedContentManifest) {
    throw new Error(`Generated file is out of date: ${contentManifestPath}`);
  }

  if (readGeneratedFile(databaseTableManifestPath) !== expectedDatabaseTableManifest) {
    throw new Error(`Generated file is out of date: ${databaseTableManifestPath}`);
  }

  if (readGeneratedFile(extractionReportPath) !== expectedExtractionReport) {
    throw new Error(`Generated file is out of date: ${extractionReportPath}`);
  }

  console.log(
    `Validated ${registry.entries.length} content files across ${registry.domainTabs.length} domains.`,
  );
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
}
