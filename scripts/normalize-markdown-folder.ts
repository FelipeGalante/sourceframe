import fs from "node:fs";
import path from "node:path";

import { normalizeMarkdownFolder } from "@/lib/import-tools";
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
    "Normalize a folder of Markdown files into SourceFrame frontmatter.",
    "",
    "Usage:",
    "  pnpm normalize:markdown -- --input <source-folder> --output <target-folder> [--overwrite]",
    "",
    "Options:",
    "  --input       Source Markdown folder",
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
  const sourceDir = path.resolve(args.input);
  const outputDir = path.resolve(args.output);

  if (!fs.existsSync(sourceDir)) {
    console.error(`Input folder does not exist: ${sourceDir}`);
    process.exitCode = 1;
  } else {
    const report = normalizeMarkdownFolder(sourceDir, outputDir, { overwrite: args.overwrite });
    fs.writeFileSync(
      path.join(outputDir, "import-report.md"),
      `${renderImportReport(report)}\n`,
      "utf8",
    );
    console.log(
      [
        `Normalized ${report.createdFiles.length} files`,
        `${report.skippedFiles.length} skipped`,
        `${report.missingMetadata.length} missing metadata`,
      ].join(" · "),
    );
  }
}
