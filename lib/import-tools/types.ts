export type ImportReportFile = {
  path: string;
  reason?: string;
};

export type ImportReport = {
  source: string;
  output: string;
  createdFiles: ImportReportFile[];
  skippedFiles: ImportReportFile[];
  missingMetadata: ImportReportFile[];
  warnings: ImportReportFile[];
  suggestedNextSteps: string[];
};

export type MarkdownNormalizeOptions = {
  overwrite?: boolean;
};

export type HtmlImportOptions = {
  overwrite?: boolean;
};
