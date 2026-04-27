# Troubleshooting

Use this guide when the repo builds locally but fails in CI or on Vercel.

## Node version problems

- Make sure Node.js 24 is installed.
- Check `node --version` before running any scripts.
- If `pnpm` or `next` behaves strangely, reinstall dependencies after switching Node versions.

## Dependency installation problems

- Run `corepack enable` if pnpm is missing.
- Run `pnpm install --frozen-lockfile` in CI-style environments.
- Delete `node_modules` and reinstall if package resolution becomes inconsistent.

## Content validation failures

- Run `pnpm validate:content` to get the first failing file path.
- Fix missing frontmatter, duplicate routes, unknown domains, or invalid metadata values before building.
- If a page is intentionally internal or private, set the correct `visibility` frontmatter and confirm your build config includes it.

## Build or routing failures

- Run `pnpm typegen` or `pnpm typecheck` if Next route type errors mention `.next/types`.
- Run `pnpm build` or `pnpm build:prod` locally before pushing.
- Confirm new pages have the expected `domain`, `section`, and `order` frontmatter.

## Search or archive issues

- Rebuild after changing content so the search index and archive registry are regenerated.
- Confirm that pages meant to stay hidden are marked `visibility: "internal"` or `visibility: "private"` and excluded in config.

## Vercel deployment issues

- Confirm the project uses Node.js 24.
- Use `pnpm build` as the build command.
- Keep `site.config.ts` and `projects.config.ts` checked in so deployment behavior stays reproducible.
