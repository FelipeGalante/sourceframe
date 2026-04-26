# SourceFrame Agent Instructions

SourceFrame is a generic Markdown-driven source-of-truth framework for generating polished product, engineering, strategy, brand, operations, and implementation documentation sites.

PathMerit is only an example project and visual/content migration source. Do not hard-code PathMerit-specific labels, routes, domains, content, or assumptions into reusable SourceFrame components.

## Product Direction

SourceFrame should be built as a reusable documentation framework, not as a PathMerit-specific site.

The framework should support many types of companies and products, including:

- SaaS products
- developer tools
- internal company handbooks
- client project portals
- architecture handbooks
- AI product documentation
- product/source-of-truth workspaces

## Implementation Principles

- Use TypeScript.
- Prefer small, reviewable diffs.
- Prefer configuration-driven behavior over hard-coded behavior.
- Prefer Markdown/MDX content and frontmatter metadata over React-hard-coded content.
- Keep React components generic and reusable.
- Treat `examples/pathmerit` as example content only.
- Use typed content models and validation wherever practical.
- Preserve the premium dark, domain-based layout direction from the original PathMerit HTML, but make it themeable and generic.
- Do not add a database, authentication, billing, or hosted SaaS behavior unless a later phase explicitly asks for it.

## Source Documents

Before major implementation work, review:

- `specs/sourceframe-product-research-prd.md`
- `codex/sourceframe-codex-phases-prompts.md`
- existing extracted content under `content/` or `examples/pathmerit/content/`

## Build Order

Follow the phases in:

`codex/sourceframe-codex-phases-prompts.md`

Do not skip ahead unless the user explicitly asks.

## Quality Gates

When available, run:

- `pnpm lint`
- `pnpm typecheck`
- `pnpm test`
- `pnpm validate:content`
- `pnpm build`

If a command does not exist yet, either add it when appropriate for the phase or clearly state that it is not available yet.

## Done Means

A phase is complete only when:

1. The implementation matches the phase scope.
2. Acceptance criteria are satisfied.
3. The app still runs or builds where applicable.
4. No PathMerit-specific logic has been added to generic components.
5. The changed files are summarized clearly.
