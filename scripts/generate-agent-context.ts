import fs from "node:fs";
import path from "node:path";

import { buildAgentContextBundle, buildAgentContextMarkdown } from "@/lib/agent-context";
import { buildProjectRuntime, getProjectCatalog } from "@/lib/projects/catalog";

type ParsedArgs = {
  projectSlugs: string[];
  domains: string[];
  contentTypes: string[];
  tags: string[];
};

const generatedDir = path.join(process.cwd(), "generated");

function ensureGeneratedDir() {
  fs.mkdirSync(generatedDir, { recursive: true });
}

function writeJson(filePath: string, data: unknown) {
  fs.writeFileSync(filePath, `${JSON.stringify(data, null, 2)}\n`, "utf8");
}

function parseValues(value: string | undefined) {
  return (value ?? "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function formatHelp() {
  return [
    "SourceFrame agent context generator",
    "",
    "Usage:",
    "  pnpm generate:agent-context [-- --project <slug>] [--domain <domain>] [--contentType <type>] [--tag <tag>]",
    "",
    "Options:",
    "  --project, --projectSlug, --project-slug  Filter to one or more project slugs",
    "  --domain                                  Filter to one or more domains",
    "  --contentType, --content-type             Filter to one or more content types",
    "  --tag                                     Filter to one or more tags",
    "  -h, --help                                Show this help text",
    "",
    "Examples:",
    "  pnpm generate:agent-context",
    "  pnpm generate:agent-context -- --project pathmerit --domain technology",
    "  pnpm generate:agent-context -- --contentType prd --tag prompt",
  ].join("\n");
}

export function parseAgentContextArgs(argv = process.argv.slice(2)): ParsedArgs {
  const parsed: ParsedArgs = {
    projectSlugs: [],
    domains: [],
    contentTypes: [],
    tags: [],
  };

  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];
    if (!token.startsWith("--")) {
      continue;
    }

    const [flag, inlineValue] = token.slice(2).split("=", 2);
    const nextValue =
      inlineValue ?? (argv[index + 1]?.startsWith("--") ? undefined : argv[index + 1]);
    if (inlineValue === undefined && nextValue !== undefined) {
      index += 1;
    }

    const values = parseValues(nextValue);

    if (flag === "project" || flag === "projectSlug" || flag === "project-slug") {
      parsed.projectSlugs.push(...values);
    } else if (flag === "domain") {
      parsed.domains.push(...values);
    } else if (flag === "contentType" || flag === "content-type") {
      parsed.contentTypes.push(...values);
    } else if (flag === "tag") {
      parsed.tags.push(...values);
    }
  }

  return {
    projectSlugs: Array.from(new Set(parsed.projectSlugs)),
    domains: Array.from(new Set(parsed.domains)),
    contentTypes: Array.from(new Set(parsed.contentTypes)),
    tags: Array.from(new Set(parsed.tags)),
  };
}

const argv = process.argv.slice(2);

if (argv.includes("-h") || argv.includes("--help")) {
  console.log(formatHelp());
  process.exitCode = 0;
} else {
  try {
    ensureGeneratedDir();

    const filters = parseAgentContextArgs(argv);
    const projectRuntimes = getProjectCatalog().map((project) =>
      buildProjectRuntime(project, "project"),
    );
    const sources = projectRuntimes.map((runtime) => ({
      slug: runtime.project.slug,
      name: runtime.project.siteConfig.name,
      subtitle: runtime.project.siteConfig.subtitle,
      description: runtime.project.siteConfig.description,
      themeAccent: runtime.project.themeAccent,
      contentRoot: runtime.project.contentRoot,
      contentRootLabel: path
        .relative(process.cwd(), runtime.project.contentRoot)
        .split(path.sep)
        .join("/"),
      routeBase: runtime.routeBase,
      registry: runtime.registry,
    }));

    const bundle = buildAgentContextBundle(sources, filters);
    const markdown = buildAgentContextMarkdown(bundle);

    writeJson(path.join(generatedDir, "agent-context.json"), bundle);
    fs.writeFileSync(path.join(generatedDir, "agent-context.md"), `${markdown}\n`, "utf8");

    console.log(
      [
        `Generated agent context for ${bundle.projects.length} project(s)`,
        `${bundle.entries.length} matched documents`,
        `${bundle.sections.length} sections`,
      ].join(" · "),
    );
  } catch (error) {
    console.error(error instanceof Error ? error.message : error);
    process.exitCode = 1;
  }
}
