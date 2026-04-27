import path from "node:path";

import type { ImportReport, ImportReportFile } from "./types";

export function toPosixPath(filePath: string) {
  return filePath.split(path.sep).join("/");
}

export function createImportReport(input: {
  source: string;
  output: string;
  createdFiles: ImportReportFile[];
  skippedFiles: ImportReportFile[];
  missingMetadata: ImportReportFile[];
  warnings: ImportReportFile[];
  suggestedNextSteps: string[];
}): ImportReport {
  return {
    source: toPosixPath(input.source),
    output: toPosixPath(input.output),
    createdFiles: input.createdFiles.map((item) => ({ ...item, path: toPosixPath(item.path) })),
    skippedFiles: input.skippedFiles.map((item) => ({ ...item, path: toPosixPath(item.path) })),
    missingMetadata: input.missingMetadata.map((item) => ({
      ...item,
      path: toPosixPath(item.path),
    })),
    warnings: input.warnings.map((item) => ({ ...item, path: toPosixPath(item.path) })),
    suggestedNextSteps: input.suggestedNextSteps,
  };
}

export function renderImportReport(report: ImportReport) {
  const lines = [
    "# Import Report",
    "",
    `Source: \`${report.source}\``,
    `Output: \`${report.output}\``,
    "",
    "## Created Files",
    "",
    ...(report.createdFiles.length
      ? report.createdFiles.map((item) =>
          item.reason ? `- \`${item.path}\` - ${item.reason}` : `- \`${item.path}\``,
        )
      : ["- None"]),
    "",
    "## Skipped Files",
    "",
    ...(report.skippedFiles.length
      ? report.skippedFiles.map((item) =>
          item.reason ? `- \`${item.path}\` - ${item.reason}` : `- \`${item.path}\``,
        )
      : ["- None"]),
    "",
    "## Missing Metadata",
    "",
    ...(report.missingMetadata.length
      ? report.missingMetadata.map((item) =>
          item.reason ? `- \`${item.path}\` - ${item.reason}` : `- \`${item.path}\``,
        )
      : ["- None"]),
    "",
    "## Warnings",
    "",
    ...(report.warnings.length
      ? report.warnings.map((item) =>
          item.reason ? `- \`${item.path}\` - ${item.reason}` : `- \`${item.path}\``,
        )
      : ["- None"]),
    "",
    "## Suggested Next Steps",
    "",
    ...(report.suggestedNextSteps.length
      ? report.suggestedNextSteps.map((item) => `- ${item}`)
      : ["- Review imported pages and add internal links where needed."]),
  ];

  return lines.join("\n");
}
