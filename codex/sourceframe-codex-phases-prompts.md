# SourceFrame Codex Build Phases and Prompts

Use one phase at a time. Do not ask Codex to build the entire product in one run.

## Always Tell Codex

```txt
You are working on SourceFrame, a generic Markdown-driven source-of-truth framework for product, engineering, strategy, brand, operations, and implementation documentation.

Important rules:
- SourceFrame must be reusable across many products and companies.
- PathMerit is only example content, not the framework identity.
- Do not hard-code PathMerit domains, labels, routes, or content inside React components.
- Load documentation from Markdown/MDX, frontmatter, typed config, and generated manifests.
- Prefer small, reviewable diffs.
- Add tests for content loading, routing, search, validation, and generated data.
- Run lint, typecheck, tests, and content validation whenever available.
- At the end, summarize files changed, commands run, and remaining risks.
```

---

## Phase 0: Repository Preparation and SourceFrame Renaming

### Goal

Make the repo clearly represent SourceFrame, while preserving PathMerit as an example project.

### Codex Prompt

```txt
Implement Phase 0 only: repository preparation and naming cleanup.

Tasks:
1. Rename generic docsite-template language to SourceFrame.
2. Treat PathMerit as example content only.
3. Move or mark PathMerit content under an example structure such as /examples/pathmerit/content.
4. Add a root AGENTS.md file with durable Codex instructions.
5. Add or update README.md with SourceFrame positioning and repo structure.
6. Do not scaffold the full app yet unless it already exists.

AGENTS.md must say:
- SourceFrame is a generic Markdown-driven source-of-truth framework.
- PathMerit is an example project only.
- React components must be generic.
- Navigation must come from config and content metadata.
- Content must come from Markdown/MDX, not hard-coded React.
- Use TypeScript, validation, and small reviewable diffs.

Acceptance criteria:
1. Repo identity is SourceFrame.
2. PathMerit content is preserved as example content.
3. README explains SourceFrame and next steps.
4. AGENTS.md exists.
5. No large implementation work is done yet.
```

---

## Phase 1: Next.js App Scaffold

### Goal

Create the first runnable SourceFrame web app.

### Codex Prompt

```txt
Implement Phase 1 only: app scaffold.

Tasks:
1. Create a Next.js App Router app with TypeScript, preferably under /apps/web.
2. Add Tailwind CSS or CSS variables for styling.
3. Add lint, typecheck, dev, and build scripts.
4. Create a minimal SourceFrame homepage.
5. Add basic app shell placeholders for topbar, domain tabs, sidebar, and content panel.
6. Update README setup instructions.

Do not implement Markdown loading, search, Mermaid, schemas, API docs, or PathMerit rendering yet.

Acceptance criteria:
1. pnpm install works.
2. pnpm dev starts the app.
3. Homepage renders SourceFrame branding.
4. pnpm lint and pnpm typecheck work or are documented.
5. No PathMerit-specific content appears in React components.
```

---

## Phase 2: Site Configuration System

### Goal

Make branding, domains, theme, and project identity configurable.

### Codex Prompt

```txt
Implement Phase 2 only: site configuration.

Tasks:
1. Add a typed site config model.
2. Support siteName, tagline, logo, theme, accent color, and domains.
3. Domain config must support id, label, description, order, icon, and visibility.
4. Add a default SourceFrame config.
5. Add an example PathMerit config.
6. Update layout placeholders to read branding and domains from config.
7. Add type checks or validation for required config fields.

Do not implement Markdown content loading yet.

Acceptance criteria:
1. Site name and tagline render from config.
2. Domain tabs render from config.
3. Adding/removing a domain in config changes navigation.
4. PathMerit is an example config only.
```

---

## Phase 3: Markdown and MDX Content Loader

### Goal

Make content file-driven.

### Codex Prompt

```txt
Implement Phase 3 only: Markdown/MDX content loading.

Tasks:
1. Read .md and .mdx files from a configurable content root.
2. Parse frontmatter.
3. Normalize every page into a SourceFramePage object:
   - id
   - title
   - slug
   - route
   - domain
   - section
   - contentType
   - status
   - visibility
   - order
   - owner
   - summary
   - tags
   - updated
   - sourcePath
   - headings
   - body
4. Require title, domain, and order.
5. Provide defaults for optional fields.
6. Extract headings for future TOC/search.
7. Add sample content.
8. Add tests for manifest generation and required frontmatter.

Acceptance criteria:
1. At least one Markdown page renders.
2. A typed content manifest is generated.
3. Missing required frontmatter gives a clear error.
4. Slugs and routes are stable.
```

---

## Phase 4: Generated Routing and Navigation

### Goal

Generate all navigation from config and content metadata.

### Codex Prompt

```txt
Implement Phase 4 only: generated routing and navigation.

Tasks:
1. Generate domain tabs from site config.
2. Generate sidebar navigation from content manifest.
3. Sort pages by order, then title.
4. Create dynamic routes for content pages.
5. Add active domain and active page states.
6. Add breadcrumbs.
7. Hide draft/private pages from public navigation unless enabled.
8. Add tests for route and navigation generation.

Acceptance criteria:
1. Adding a Markdown page creates a route.
2. Sidebar updates from content metadata.
3. Domain nav updates from config.
4. Draft/private visibility rules work.
5. Active states work.
```

---

## Phase 5: SourceFrame Layout and Design System

### Goal

Recreate the premium PathMerit-inspired layout as a reusable SourceFrame design system.

### Codex Prompt

```txt
Implement Phase 5 only: layout and design system.

Tasks:
1. Build a reusable app shell with:
   - sticky topbar
   - brand lockup
   - domain tabs
   - search input placeholder
   - full archive button placeholder
2. Build reusable page layout components:
   - hero strip
   - domain header
   - secondary sidebar
   - content panel
   - responsive main container
3. Add design tokens:
   - dark background
   - elevated panels
   - text and muted text
   - accent color
   - borders
   - radius
   - shadows
   - monospace and sans fonts
4. Make the layout responsive.
5. Preserve the original premium source-of-truth feel without PathMerit-specific identity.

Acceptance criteria:
1. The app visually resembles the original dark source-of-truth layout.
2. Branding and domains come from config.
3. Markdown pages render inside the layout.
4. Mobile behavior works.
5. Components are generic.
```

---

## Phase 6: Markdown Rendering Components

### Goal

Make Markdown content rich, readable, and reusable.

### Codex Prompt

```txt
Implement Phase 6 only: Markdown rendering components.

Tasks:
1. Style standard Markdown:
   - headings
   - paragraphs
   - lists
   - blockquotes
   - links
   - inline code
   - fenced code blocks
   - tables
   - images
2. Add reusable components:
   - Callout
   - Card
   - CardGrid
   - MetricGrid
   - Badge
   - MethodBadge
   - CopyableCodeBlock
3. Add responsive table behavior.
4. Add code block copy buttons.
5. Add a sample page demonstrating all components.

Acceptance criteria:
1. Markdown renders with polished styling.
2. Tables and code blocks work on mobile.
3. Copy buttons work.
4. Plain Markdown remains supported.
5. MDX can be used for richer pages.
```

---

## Phase 7: Content Validation and Quality Gates

### Goal

Prevent broken or inconsistent documentation.

### Codex Prompt

```txt
Implement Phase 7 only: content validation.

Tasks:
1. Validate required frontmatter: title, domain, order.
2. Validate known values for contentType, status, and visibility.
3. Detect duplicate slugs and duplicate routes.
4. Detect unknown domains.
5. Check internal Markdown links where practical.
6. Add clear errors that include source file paths.
7. Add pnpm validate:content.
8. Add tests for validation failures and valid content.

Acceptance criteria:
1. Invalid frontmatter fails with helpful errors.
2. Duplicate routes fail validation.
3. Unknown domains fail validation.
4. Valid content passes.
5. Validation can run independently.
```

---

## Phase 8: Static Search

### Goal

Add search across all content without a backend.

### Codex Prompt

```txt
Implement Phase 8 only: static search.

Tasks:
1. Generate a static search index from:
   - title
   - summary
   - headings
   - body
   - tags
   - domain
   - contentType
   - owner
   - status
2. Add topbar search UI.
3. Show results with title, domain, content type, summary/snippet, and route.
4. Add empty state.
5. Add Cmd/Ctrl + K shortcut.
6. Add tests for search index generation.

Do not add hosted search or a backend.

Acceptance criteria:
1. Search finds pages across domains.
2. Results link to correct routes.
3. Empty state works.
4. Search works in static deployment.
```

---

## Phase 9: Full Archive and Print Mode

### Goal

Preserve the full archive concept as a core SourceFrame feature.

### Codex Prompt

```txt
Implement Phase 9 only: full archive and print mode.

Tasks:
1. Add a full archive route that renders all visible domains and pages in order.
2. Add a domain archive route or mode.
3. Add a full archive button in the layout.
4. In archive mode, render all pages sequentially.
5. Hide or simplify sidebar in archive mode.
6. Add print-friendly CSS.
7. Preserve metadata such as status, owner, updated date, and source path.
8. Add tests for archive ordering.

Acceptance criteria:
1. Full archive view works.
2. Domain archive view works.
3. Browser print output is usable.
4. No duplicated content is required.
```

---

## Phase 10: Mermaid and Diagram Support

### Goal

Support architecture diagrams, ERDs, flowcharts, and sequences.

### Codex Prompt

```txt
Implement Phase 10 only: Mermaid support.

Tasks:
1. Detect fenced mermaid code blocks.
2. Render Mermaid diagrams on the client.
3. Provide fallback source display if rendering fails.
4. Add copy button for Mermaid source.
5. Style diagrams for SourceFrame dark theme.
6. Add sample flowchart, sequence, and ERD pages.

Acceptance criteria:
1. Mermaid diagrams render.
2. Failed diagrams show a readable fallback.
3. Diagram source can be copied.
4. Static deployment still works.
```

---

## Phase 11: Database and Schema Documentation

### Goal

Generalize the PathMerit database section into reusable schema docs.

### Codex Prompt

```txt
Implement Phase 11 only: database and schema documentation blocks.

Tasks:
1. Add a generic schema model:
   - tableName
   - domain
   - lifecycle
   - description
   - columns
   - indexes
   - constraints
   - relationships
2. Column fields:
   - name
   - type
   - default
   - size
   - keyRole
   - nullable
   - purpose
3. Build components:
   - SchemaTableCard
   - ColumnTable
   - IndexList
   - RelationshipMap
   - SchemaDomainIndex
4. Support schema data from Markdown frontmatter or colocated JSON/YAML.
5. Add example schema pages using PathMerit as example content.
6. Add tests for schema normalization.

Do not assume every project uses PostgreSQL.

Acceptance criteria:
1. Database index lists tables by domain.
2. Individual schema pages render column details.
3. Relationships render clearly.
4. Mermaid ERD can be displayed or rendered.
5. Components are generic.
```

---

## Phase 12: API Documentation Blocks

### Goal

Support generic API documentation before full OpenAPI integration.

### Codex Prompt

```txt
Implement Phase 12 only: API documentation blocks.

Tasks:
1. Add components:
   - EndpointTable
   - EndpointCard
   - MethodBadge
   - RequestExample
   - ResponseExample
   - ErrorExample
   - AuthRequirement
2. Support endpoint data in Markdown/MDX or colocated JSON/YAML.
3. Endpoint fields:
   - group
   - method
   - path
   - summary
   - auth
   - request body example
   - response example
   - error codes
4. Add sample API documentation page.
5. Add OpenAPI registration placeholder in config, but do not implement OpenAPI parsing.

Acceptance criteria:
1. Endpoint tables render with method badges.
2. Endpoint detail cards render examples.
3. API docs work from content files.
4. Components are generic.
```

---

## Phase 13: Decision Logs and ADRs

### Goal

Make decision history first-class.

### Codex Prompt

```txt
Implement Phase 13 only: decision logs and ADR support.

Tasks:
1. Add content types:
   - adr
   - decision-log
   - product-decision
2. Add components:
   - DecisionRecord
   - DecisionIndex
   - DecisionStatusBadge
   - RelatedDecisionLinks
3. Decision metadata:
   - title
   - domain
   - status
   - date
   - owner
   - decisionType
   - relatedPages
   - supersedes
   - supersededBy
4. Support decision body sections:
   - Context
   - Decision
   - Rationale
   - Consequences
   - Alternatives considered
   - Related links
5. Add generated decision index.
6. Add sample ADR and product decision files.

Acceptance criteria:
1. Decision records render with metadata.
2. Decision index is generated.
3. Superseded/deprecated decisions are visually distinct.
4. Related links render.
```

---

## Phase 14: Product, Research, Roadmap, and Requirement Templates

### Goal

Support product source-of-truth documentation.

### Codex Prompt

```txt
Implement Phase 14 only: product documentation templates.

Tasks:
1. Add templates for:
   - Product Requirements Document
   - Product Research
   - Roadmap
   - Feature Matrix
   - Personas
   - Success Metrics
   - Release Plan
2. Add components:
   - RequirementList
   - FeatureMatrix
   - RoadmapTimeline
   - PersonaCard
   - MetricCard
   - ScopeTable
3. Store templates as Markdown/MDX examples users can copy.
4. Add a sample Product domain using these templates.

Acceptance criteria:
1. User can copy a PRD template and create a page.
2. Product research and roadmap pages render well.
3. Feature matrix and requirement components are reusable.
4. Templates are not PathMerit-specific.
```

---

## Phase 15: Source Archive and Provenance

### Goal

Preserve imported or historical source material without confusing it with canonical guidance.

### Codex Prompt

```txt
Implement Phase 15 only: source archive and provenance.

Tasks:
1. Add source-archive content type.
2. Add metadata fields:
   - origin
   - sourceFile
   - importedAt
   - importedBy
   - canonicalStatus
   - relatedCanonicalPages
3. Add components:
   - ArchiveNotice
   - SourceProvenance
   - ArchiveIndex
4. Make archived pages searchable but visually distinct.
5. Add archive index page.
6. Add example archived content from PathMerit source material where appropriate.

Acceptance criteria:
1. Archived pages render with clear archive notice.
2. Provenance metadata is visible.
3. Archive index lists archived content.
4. Active and archived docs are visually distinct.
```

---

## Phase 16: Starter Templates and Domain Packs

### Goal

Make SourceFrame reusable for many company and product types.

### Codex Prompt

```txt
Implement Phase 16 only: starter templates and domain packs.

Create these starter templates:
1. Product Source of Truth
2. Developer Documentation
3. Internal Company Handbook
4. Client Project Portal
5. Technical Architecture Handbook
6. AI Product Documentation

Each template must include:
- site config example
- domain definitions
- starter Markdown content
- recommended content types
- README instructions
- example routes

Do not create separate apps. Templates should be config/content examples.

Acceptance criteria:
1. Each starter has config and content root.
2. Documentation explains how to copy/select a starter.
3. At least one non-PathMerit starter renders.
4. Templates are small but representative.
```

---

## Phase 17: Multi-Project Foundation

### Goal

Prepare for agencies, consultants, and teams managing multiple products.

### Codex Prompt

```txt
Implement Phase 17 only: multi-project foundation.

Tasks:
1. Support multiple project configs.
2. Support separate content roots per project.
3. Add project slug routing, such as /projects/:projectSlug.
4. Add project switcher.
5. Allow each project to define its own:
   - site name
   - tagline
   - domains
   - theme accent
   - content root
6. Keep single-project mode supported.
7. Add tests for project config loading and routing.

Do not add auth, billing, or SaaS multi-tenancy.

Acceptance criteria:
1. At least two projects render from separate content roots.
2. Project-specific navigation and branding work.
3. Single-project mode still works.
4. Tests cover project selection.
```

---

## Phase 18: Versioning, Changelog, and Stale Content Warnings

### Goal

Help teams manage documentation lifecycle.

### Codex Prompt

```txt
Implement Phase 18 only: versioning, changelog, and stale content warnings.

Tasks:
1. Add content types:
   - changelog
   - release-note
2. Add optional metadata:
   - version
   - updated
   - lastReviewed
   - reviewAfter
   - deprecatedSince
3. Render updated/reviewed metadata.
4. Show stale content warnings when reviewAfter is past.
5. Add changelog and release note indexes.
6. Add sample changelog and release note content.
7. Add tests for stale content detection.

Do not implement full version snapshots yet.

Acceptance criteria:
1. Changelog pages render.
2. Release notes render.
3. Stale warnings appear when configured.
4. Tests cover stale content logic.
```

---

## Phase 19: AI Agent Context Bundle

### Goal

Make SourceFrame useful as implementation context for Codex and other coding agents.

### Codex Prompt

```txt
Implement Phase 19 only: AI agent context bundle.

Tasks:
1. Generate a machine-readable content manifest as JSON.
2. Generate a human-readable build context Markdown file.
3. Include:
   - project summary
   - domains
   - active PRDs
   - architecture pages
   - decisions
   - requirements
   - API docs
   - database/schema docs
   - implementation prompts
4. Add pnpm generate:agent-context.
5. Allow filtering by project, domain, contentType, or tag.
6. Document how to use the generated bundle with Codex.

Do not call external AI APIs. Generate deterministically from existing content.

Acceptance criteria:
1. Script creates an agent context bundle.
2. Bundle includes routes and source paths.
3. Filters work.
4. Documentation explains Codex usage.
```

---

## Phase 20: Importers and Migration Tools

### Goal

Make it easier to bring existing documentation into SourceFrame.

### Codex Prompt

```txt
Implement Phase 20 only: importers and migration tooling.

Tasks:
1. Add a script to normalize a folder of Markdown files.
2. Add a documented workflow or script for importing a single HTML source file into Markdown sections where practical.
3. Generate frontmatter for imported pages.
4. Generate an import report with:
   - created files
   - skipped files
   - missing metadata
   - warnings
   - suggested next steps
5. Preserve source provenance metadata.
6. Document migration from:
   - raw Markdown
   - exported HTML
   - Notion export
   - GitBook export
7. Add tests for Markdown import normalization.

Do not overwrite existing files without a safe flag.

Acceptance criteria:
1. Markdown folder can be normalized.
2. Imported pages receive valid frontmatter.
3. Import report is generated.
4. Existing files are safe from accidental overwrite.
```

---

## Phase 21: Private Docs Preparation

### Goal

Prepare for internal and client-facing documentation without building full SaaS auth.

### Codex Prompt

```txt
Implement Phase 21 only: private docs preparation.

Tasks:
1. Support visibility metadata:
   - public
   - internal
   - private
2. Add config options to include/exclude internal/private pages at build time.
3. Ensure navigation respects visibility filters.
4. Ensure search does not index excluded pages.
5. Add badges for internal/private pages when included.
6. Document private deployment patterns.
7. Add tests for visibility filtering.

Do not implement authentication, users, teams, billing, or a database.

Acceptance criteria:
1. Private pages can be excluded from public builds.
2. Search does not leak excluded content.
3. Navigation does not show excluded pages.
4. Tests cover visibility filtering.
```

---

## Phase 22: Deployment, CI, and Production Readiness

### Goal

Make SourceFrame reliable enough for real projects.

### Codex Prompt

```txt
Implement Phase 22 only: deployment, CI, and production readiness.

Tasks:
1. Add CI workflow to run:
   - install
   - lint
   - typecheck
   - tests
   - content validation
   - build
2. Add Vercel deployment documentation.
3. Add production build script.
4. Add troubleshooting notes.
5. Confirm static generation works for example content.
6. Add a smoke-test checklist.

Do not add unnecessary infrastructure or backend services.

Acceptance criteria:
1. CI passes.
2. Production build succeeds.
3. Deployment documentation is clear.
4. Content validation runs in CI.
5. README has setup and deployment path.
```

---

## Phase 23: Final Polish and Developer Experience

### Goal

Make SourceFrame pleasant to customize and maintain.

### Codex Prompt

```txt
Implement Phase 23 only: final polish and developer experience.

Tasks:
1. Improve config and content validation errors.
2. Add customization guide:
   - branding
   - domains
   - content types
   - templates
   - theme tokens
   - examples
3. Add or document common scripts:
   - validate content
   - generate manifest
   - generate agent context
   - build
4. Improve accessibility:
   - keyboard navigation
   - focus states
   - semantic landmarks
   - contrast where practical
5. Improve responsive behavior.
6. Remove unused code.
7. Add final visual documentation placeholders if appropriate.

Do not introduce major new features.

Acceptance criteria:
1. New users can customize SourceFrame from docs.
2. Core scripts are documented.
3. Layout is responsive and accessible.
4. Project feels template-ready.
```

---

## Recommended Execution Order

1. Phase 0: Repository Preparation and SourceFrame Renaming
2. Phase 1: Next.js App Scaffold
3. Phase 2: Site Configuration System
4. Phase 3: Markdown and MDX Content Loader
5. Phase 4: Generated Routing and Navigation
6. Phase 5: SourceFrame Layout and Design System
7. Phase 6: Markdown Rendering Components
8. Phase 7: Content Validation and Quality Gates
9. Phase 8: Static Search
10. Phase 9: Full Archive and Print Mode
11. Phase 10: Mermaid and Diagram Support
12. Phase 11: Database and Schema Documentation
13. Phase 12: API Documentation Blocks
14. Phase 13: Decision Logs and ADRs
15. Phase 14: Product, Research, Roadmap, and Requirement Templates
16. Phase 15: Source Archive and Provenance
17. Phase 16: Starter Templates and Domain Packs
18. Phase 17: Multi-Project Foundation
19. Phase 18: Versioning, Changelog, and Stale Content Warnings
20. Phase 19: AI Agent Context Bundle
21. Phase 20: Importers and Migration Tools
22. Phase 21: Private Docs Preparation
23. Phase 22: Deployment, CI, and Production Readiness
24. Phase 23: Final Polish and Developer Experience

---

## Suggested Commit Pattern

```bash
git add .
git commit -m "Implement SourceFrame phase 01 app scaffold"
```

Use one commit per completed phase when possible.
