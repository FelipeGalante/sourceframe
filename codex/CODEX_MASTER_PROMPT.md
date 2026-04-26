# Codex Master Prompt

Use this prompt to start the build in Codex.

```text
You are building a reusable TypeScript/Next.js documentation and product-source-of-truth template.

Goal:
Create a content-driven site that preserves the design language and interaction model of the provided PathMerit HTML page, but moves all project content into Markdown files under /content. The application must be reusable for future projects by replacing Markdown content and editing a small site config.

Use the provided specs in /specs as the source of truth:
- 00-project-brief.md
- 01-product-requirements.md
- 02-technical-architecture.md
- 03-content-model-and-frontmatter.md
- 04-design-system-spec.md
- 05-markdown-rendering-and-search.md
- 06-content-migration-spec.md
- 07-implementation-roadmap.md
- 08-acceptance-criteria.md

Also use the migrated content in /content as the initial project content.

Implementation requirements:
1. Use Next.js App Router and TypeScript strict mode.
2. Implement a build-time Markdown content loader using gray-matter, unified/remark/rehype, remark-gfm, and Zod.
3. Generate a typed navigation tree from content frontmatter. Do not hard-code PathMerit domains or section names in React components.
4. Implement the app shell: sticky topbar, brand lockup, domain tabs, search input, full archive button, domain header, secondary subnav, and content card layout.
5. Render Markdown with support for GFM tables, fenced code blocks, Mermaid diagrams, heading anchors, details/summary, and responsive overflow for large tables/code blocks.
6. Implement client-side search from a build-generated search index.
7. Implement /full-archive to render all content in canonical order.
8. Add responsive styling and print styling.
9. Ensure the extracted PathMerit content renders without runtime errors, including the large About > Source Archive section.
10. Add clear README instructions for creating a new project from the template.

Quality bar:
- pnpm lint, typecheck, and build must pass.
- Components must be generic and reusable.
- Content-specific decisions belong in Markdown/frontmatter, not component code.
- Keep the UI polished and close to the original source design.

Start by scaffolding the project and implementing the content loader before building the UI.
```
