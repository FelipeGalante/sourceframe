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
- Install command: `pnpm install`
- Output directory: leave default

## Environment

- Most template sites do not need environment variables.
- If you later add search, analytics, or external APIs, set them in the Vercel dashboard.
- Keep `site.config.ts` in the repo so content swaps remain explicit.

## Recommended workflow

1. Push the repository to GitHub, GitLab, or Bitbucket.
2. Import the repo into Vercel.
3. Confirm the Node runtime is set to 24 or newer.
4. Let Vercel run `pnpm build`.
5. Verify the deployed home page, a content page, and `/full-archive`.

## Content updates

- Use `pnpm validate:content` locally before pushing content changes.
- Use `pnpm generate:content` if you want the checked-in migration manifests refreshed.
- Keep template-only docs marked `visibility: "internal"` so they do not leak into the public manifest.
