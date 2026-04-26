# SourceFrame

A reusable Next.js + TypeScript template for documentation sites and product source-of-truth libraries.

It keeps the PathMerit-style layout and interaction model, but the actual content lives in Markdown under [`/content`](./content). To create a new project, replace the Markdown files and edit [`site.config.ts`](./site.config.ts).

This template expects Node.js 24.

## What this template gives you

- App Router + strict TypeScript
- Build-time Markdown loading and frontmatter validation
- Generated domain tabs and section navigation from content metadata
- Client-side search over titles, headings, and body text
- Full archive view
- Markdown rendering for GFM tables, fenced code blocks, Mermaid, heading anchors, details/summary, and raw HTML from trusted content, plus a literal-text Source Archive exception for `content/about/sources.md`
- Responsive and print-friendly styling

## Quick start

```bash
node --version
pnpm install
pnpm dev
```

Then open `http://localhost:3000`.

## Scripts

- `pnpm dev` - start the Next.js dev server
- `pnpm format` - write Prettier formatting
- `pnpm format:check` - verify Prettier formatting
- `pnpm lint` - run ESLint
- `pnpm generate:content` - regenerate the checked-in content manifests and migration report
- `pnpm typegen` - generate Next.js route types without a full build
- `pnpm typecheck` - generate Next.js route types and then run the TypeScript compiler in no-emit mode
- `pnpm build` - create a production build
- `pnpm test` - run content loader tests
- `pnpm validate:content` - validate the real content tree and confirm generated artifacts are current

## Creating a new project from this template

1. Copy the repository into a new workspace.
2. Edit [`site.config.ts`](./site.config.ts).
3. Replace the files in [`/content`](./content) with your own Markdown.
4. Keep frontmatter on every content file.
5. Use `content/index.md` for the site overview.
6. Use one `index.md` file per top-level domain folder, such as `content/technology/index.md`.
7. Use nested Markdown files for sections and specialized content types.
8. Run `pnpm build` to catch frontmatter or route issues before publishing.

## Content rules

- Every content file must include frontmatter.
- `title` is required.
- Domain pages should use `type: "domain-index"`.
- Regular pages should set `domain`, `section`, `type`, and `order`.
- Database table pages should use `type: "database-table"` and include `table_name`.
- Keep cross-links as relative Markdown links. The renderer rewrites them to app routes automatically.

## Project structure

- [`app`](./app) - routes and layouts
- [`components`](./components) - reusable UI and Markdown components
- [`content`](./content) - Markdown source of truth
- [`lib`](./lib) - content loading, registry building, and Markdown helpers
- [`styles`](./styles) - global CSS and design tokens

## Notes for maintainers

- The navigation tree is generated from frontmatter and file paths.
- Search is client-side and uses the build-time registry.
- The app shell is intentionally generic so you can swap content without touching layout code.
- The source archive page is intentionally large and should be left as Markdown unless you have a strong reason to split it further.
- `content/about/sources.md` is rendered as literal source text so the archive stays auditable and cannot be reinterpreted as normal Markdown.
- Mark template-only docs with `visibility: "internal"` when they should stay in the repo but be excluded from the public migration manifest.
- Run `pnpm generate:content` after changing `/content` if you want to refresh the checked-in manifests in `/generated`.
