import fs from "node:fs";
import path from "node:path";

import {
  buildContentManifest,
  buildContentRegistry,
  buildDatabaseTableManifest,
  buildExtractionReport,
} from "@/lib/content";

const generatedDir = path.join(process.cwd(), "generated");

function writeJson(filePath: string, data: unknown) {
  fs.writeFileSync(filePath, `${JSON.stringify(data, null, 2)}\n`, "utf8");
}

function ensureGeneratedDir() {
  fs.mkdirSync(generatedDir, { recursive: true });
}

try {
  ensureGeneratedDir();

  const registry = buildContentRegistry();
  const contentManifest = buildContentManifest(registry, { pathPrefix: "content/" });
  const databaseTableManifest = buildDatabaseTableManifest(registry, { pathPrefix: "content/" });
  const extractionReport = buildExtractionReport(registry, contentManifest, databaseTableManifest);

  writeJson(path.join(generatedDir, "content-manifest.json"), contentManifest);
  writeJson(path.join(generatedDir, "database-table-manifest.json"), databaseTableManifest);
  fs.writeFileSync(
    path.join(generatedDir, "extraction-report.md"),
    `${extractionReport}\n`,
    "utf8",
  );

  console.log(
    `Generated content artifacts for ${contentManifest.domains.length} domains and ${databaseTableManifest.length} database tables.`,
  );
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
}
