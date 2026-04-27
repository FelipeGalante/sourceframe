# Deploying on Vercel

SourceFrame is designed to deploy as a standard Next.js App Router project.

## Prerequisites

- Node.js 24
- pnpm
- A Vercel account
- A Git repository connected to the project

## Project settings

- Framework preset: Next.js
- Build command: `pnpm build`
- Production parity command: `pnpm build:prod`
- Install command: `pnpm install`
- Output directory: leave default

## Environment

- Most template sites do not need environment variables.
- If you later add search, analytics, or external APIs, set them in the Vercel dashboard.
- Keep `site.config.ts` in the repo so content swaps remain explicit.
- Use `contentVisibility.include` in `site.config.ts` to choose whether a deployment includes `public` only or also `internal`/`private` pages.

## Recommended workflow

1. Push the repository to GitHub, GitLab, or Bitbucket.
2. Import the repo into Vercel.
3. Confirm the Node runtime is set to 24 or newer.
4. Let Vercel run `pnpm build`.
5. Verify the deployed home page, a content page, and `/full-archive`.
6. Review [`docs/smoke-checklist.md`](./smoke-checklist.md) before promoting the build.

## Content updates

- Use `pnpm validate:content` locally before pushing content changes.
- Use `pnpm generate:content` if you want the checked-in migration manifests refreshed.
- Keep template-only docs marked `visibility: "internal"` or `visibility: "private"` so they do not leak into public builds or public search.

## Troubleshooting

- See [`docs/troubleshooting.md`](./troubleshooting.md) for common build, routing, and deployment failures.
