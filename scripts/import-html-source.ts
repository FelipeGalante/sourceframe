import fs from "node:fs";
import path from "node:path";

import { importHtmlSource } from "@/lib/import-tools";
import { renderImportReport } from "@/lib/import-tools/report";

function parseArgs(argv = process.argv.slice(2)) {
  const args = {
    input: "",
    output: "",
    overwrite: false,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];
    if (!token.startsWith("--")) {
      continue;
    }

    const [flag, inlineValue] = token.slice(2).split("=", 2);
    const nextValue =
      inlineValue ?? (argv[index + 1]?.startsWith("--") ? undefined : argv[index + 1]);
    if (inlineValue === undefined && nextValue !== undefined && flag !== "overwrite") {
      index += 1;
    }

    if (flag === "input") {
      args.input = nextValue ?? "";
    } else if (flag === "output") {
      args.output = nextValue ?? "";
    } else if (flag === "overwrite" || flag === "safe") {
      args.overwrite = true;
    } else if (flag === "help" || flag === "h") {
      return {
        ...args,
        help: true as const,
      };
    }
  }

  return args;
}

function helpText() {
  return [
    "Import a single HTML source file into Markdown sections where practical.",
    "",
    "Usage:",
    "  pnpm import:html -- --input <source.html> --output <target-folder> [--overwrite]",
    "",
    "Options:",
    "  --input       Source HTML file",
    "  --output      Output folder",
    "  --overwrite   Replace existing files",
    "  --safe        Alias for --overwrite",
    "  --help, -h    Show this help",
  ].join("\n");
}

function printHelp() {
  console.log(helpText());
}

const args = parseArgs();

if ("help" in args && args.help) {
  printHelp();
  process.exitCode = 0;
} else if (!args.input || !args.output) {
  console.error(helpText());
  process.exitCode = 1;
} else {
  const inputFile = path.resolve(args.input);
  const outputDir = path.resolve(args.output);

  if (!fs.existsSync(inputFile)) {
    console.error(`Input file does not exist: ${inputFile}`);
    process.exitCode = 1;
  } else {
    const report = importHtmlSource(inputFile, outputDir, { overwrite: args.overwrite });
    fs.writeFileSync(
      path.join(outputDir, "import-report.md"),
      `${renderImportReport(report)}\n`,
      "utf8",
    );
    console.log(
      [
        `Imported ${report.createdFiles.length} files`,
        `${report.skippedFiles.length} skipped`,
        `${report.missingMetadata.length} missing metadata`,
        `${report.warnings.length} warnings`,
      ].join(" · "),
    );
  }
}
