# Importing Content

SourceFrame includes deterministic import tools for bringing existing documentation into the template without touching the current source tree.

## Normalize raw Markdown

Use this when you already have a folder of Markdown or MDX files and want SourceFrame-style frontmatter and provenance fields added or normalized.

```bash
pnpm normalize:markdown -- --input /path/to/markdown --output /path/to/imported --overwrite
```

This workflow:

- keeps existing files safe unless `--overwrite` is supplied
- fills in frontmatter where practical
- adds provenance metadata such as `origin`, `sourceFile`, `importedAt`, and `canonicalStatus`
- writes an `import-report.md` alongside the imported files

## Import a single HTML source file

Use this when you have one large exported HTML document that should be split into practical Markdown sections.

```bash
pnpm import:html -- --input /path/to/source.html --output /path/to/imported --overwrite
```

The importer:

- preserves provenance metadata
- creates a section index page and section files where practical
- writes an import report with created files, skipped files, missing metadata, warnings, and suggested next steps

## Common migration sources

### Raw Markdown

- Use `pnpm normalize:markdown` to standardize frontmatter and provenance before moving content into `content/`.

### Exported HTML

- Use `pnpm import:html` to split a single HTML export into a Markdown structure that can be refined manually afterward.

### Notion export

- Export the Notion workspace to HTML or Markdown first.
- Then normalize or import the exported files into SourceFrame.
- Preserve the original page title, created date, and source URL in provenance metadata if available.

### GitBook export

- Export the content as Markdown if possible.
- Run the Markdown normalizer on the exported folder.
- If GitBook generated HTML, use the HTML importer first and then refine the generated Markdown.

## After import

- Review the generated frontmatter.
- Add internal links to canonical pages.
- Mark historical material with `visibility: "internal"` or `visibility: "private"` when it is not canonical guidance, and use `contentType: "source-archive"` when you want to preserve it as literal source material.
- Run `pnpm validate:content` before publishing.
