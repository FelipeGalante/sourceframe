# Smoke-Test Checklist

Use this checklist before merging or deploying a SourceFrame change.

## Local checks

- Run `pnpm install`
- Run `pnpm validate:content`
- Run `pnpm test`
- Run `pnpm typecheck`
- Run `pnpm lint`
- Run `pnpm build:prod`

## Static generation checks

- Confirm the home page renders from the example content tree.
- Confirm at least one domain page renders.
- Confirm `/full-archive` renders.
- Confirm a domain archive route renders.
- Confirm search results appear without a backend.
- Confirm Mermaid pages render or fall back cleanly.

## Visibility checks

- Confirm internal and private pages are hidden when excluded in config.
- Confirm visibility badges appear when included.
- Confirm hidden pages do not appear in navigation or search.

## Deployment checks

- Confirm the deployed site uses Node.js 24.
- Confirm Vercel is using `pnpm build`.
- Confirm the production site loads without runtime errors.
