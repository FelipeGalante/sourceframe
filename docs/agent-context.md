# Agent Context Bundles

SourceFrame can generate a deterministic build-context bundle for coding agents without calling any external AI API.

The bundle is created from the current content registry and includes:

- project summaries
- domains
- active PRDs
- architecture pages
- decisions
- requirements
- API docs
- database and schema docs
- implementation prompts
- routes and source paths

## Generate the bundle

```bash
pnpm generate:agent-context
```

That writes two files:

- `generated/agent-context.json`
- `generated/agent-context.md`

If you need a quick reminder of the available flags, run:

```bash
pnpm generate:agent-context -- --help
```

## Filter the bundle

You can narrow the bundle before generating it:

```bash
pnpm generate:agent-context -- --project pathmerit --domain technology --contentType prd --tag prompt
```

Supported filters:

- `--project`
- `--domain`
- `--contentType`
- `--tag`

You can repeat a flag or pass comma-separated values.

## Use with Codex

Open `generated/agent-context.md` and attach it to your Codex session when you want implementation context.

If you need structured data or want to script follow-up processing, use `generated/agent-context.json`.

## Use with Claude Code

Use the Markdown bundle as the briefing document and the JSON bundle when you need a machine-readable context map.

For focused work, regenerate the bundle with filters so Claude Code only sees the relevant project or domain slice.
