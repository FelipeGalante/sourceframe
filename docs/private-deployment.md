# Private Docs Deployment

SourceFrame can render private or internal documentation without adding auth logic to the app itself.

## Visibility model

- `public` pages are included in normal builds.
- `internal` pages are for repo-local or deployment-local docs that should stay out of a public site.
- `private` pages are for docs that should never appear in public navigation or public search.

## Build-time filtering

Use `contentVisibility` in `site.config.ts` or in a project config to choose which pages are included in a build.

Examples:

```ts
contentVisibility: {
  include: ["public"],
}
```

```ts
contentVisibility: {
  include: ["public", "internal"],
}
```

```ts
contentVisibility: {
  include: ["public", "internal", "private"],
}
```

## Recommended patterns

- Public marketing or docs site: include only `public`.
- Internal handbook or team wiki: include `public` and `internal`, then deploy behind a VPN, reverse proxy, or basic-auth layer.
- Client-facing portal: use a separate project config and include `public` plus any pages you want to expose to that client.
- Sensitive working docs: mark them `private` and keep them out of public builds entirely.

## What stays out of the build

- Navigation
- Search index
- Archive pages
- Static route generation

That means excluded pages do not leak through the app shell or the generated search data.
