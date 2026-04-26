# Content Authoring Guide

SourceFrame keeps content in Markdown or MDX files under `/content`. The app reads frontmatter at build time, generates navigation automatically, and renders each page from the content tree.

## File structure

- `content/index.md` is the site overview page.
- `content/<domain>/index.md` defines each top-level domain tab.
- `content/<domain>/<section>.md` defines a content page within a domain.
- `content/<domain>/<section>/index.md` is useful for a nested section landing page.
- `content/about/sources.md` is reserved for the literal source archive.

## Frontmatter rules

- Every file needs frontmatter.
- `title` is required.
- `type` must match the page kind.
- `domain`, `section`, and `order` control routing and navigation.
- `nav_label` is optional and overrides the visible section label.
- `contentType` is optional and, when used, must be one of the documented content-type values.
- `status` is optional and must be one of `draft`, `active`, `archived`, or `deprecated` when present.
- `visibility: "internal"` keeps implementation-only docs in the repo while excluding them from the public migration manifest.
- `source` and `source_panel` help trace migrated files back to the original extraction.

## Recommended patterns

- Use relative Markdown links for cross-references. The renderer rewrites them to app routes when possible.
- Prefer Markdown tables and fenced code blocks over raw HTML when either will work.
- Use `details` and `summary` for collapsible notes.
- Keep domain-specific wording in content files, not in layout components.

## Validation workflow

- Run `pnpm validate:content` after changing content files.
- Run `pnpm generate:content` when you want to refresh the checked-in migration artifacts.
- Run `pnpm build` before publishing to catch route or frontmatter issues.

## Example frontmatter

```yaml
---
title: "Getting Started"
nav_label: "Getting Started"
domain: "guide"
section: "getting-started"
type: "section"
order: 1
---
```
