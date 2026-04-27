# SourceFrame Agent Context Bundle

Deterministic build context generated from the current content registry.

## Filters

- Projects: all
- Domains: all
- Content types: all
- Tags: all

## Projects

### PathMerit

- Slug: `pathmerit`
- Route base: `/projects/pathmerit`
- Content root: `content`
- Domains: technology, product, marketing, brand, about
- Selected entries: 105

| Domain | Route | Sections |
| --- | --- | --- |
| Technology | `/projects/pathmerit/technology` | 68 |
| Product | `/projects/pathmerit/product` | 15 |
| Marketing | `/projects/pathmerit/marketing` | 3 |
| Brand / Design | `/projects/pathmerit/brand` | 4 |
| About | `/projects/pathmerit/about` | 14 |

### Client Portal

- Slug: `client-portal`
- Route base: `/projects/client-portal`
- Content root: `projects/client-portal/content`
- Domains: operations, knowledge
- Selected entries: 5

| Domain | Route | Sections |
| --- | --- | --- |
| Operations | `/projects/client-portal/operations` | 2 |
| Knowledge | `/projects/client-portal/knowledge` | 2 |

## Active PRDs

Current product requirements and core product planning pages.

### PathMerit

- [PRD Template](/projects/pathmerit/product/templates/prd) — route: `/projects/pathmerit/product/templates/prd` — source: `../content/product/templates/prd.md` — contentType: `prd`, status: `draft`, owner: `Product` - Copy this page when you need a structured product requirements document.

## Architecture Pages

Architecture, diagrams, and implementation guidance.

### PathMerit

- [Flowchart Example](/projects/pathmerit/technology/flowchart) — route: `/projects/pathmerit/technology/flowchart` — source: `../content/technology/flowchart.md` — contentType: `architecture`, status: `active`, owner: `SourceFrame`
- [Sequence Example](/projects/pathmerit/technology/sequence) — route: `/projects/pathmerit/technology/sequence` — source: `../content/technology/sequence.md` — contentType: `architecture`, status: `active`, owner: `SourceFrame`

## Decisions

ADRs, decision logs, and product decision notes.

### PathMerit

- [Decision Log](/projects/pathmerit/about/decisions) — route: `/projects/pathmerit/about/decisions` — source: `../content/about/decisions.md` — contentType: `decision-log` - Canonical decision history for the reusable SourceFrame template.
- [ADR: Use Vercel for the frontend](/projects/pathmerit/technology/adr) — route: `/projects/pathmerit/technology/adr` — source: `../content/technology/adr.md` — contentType: `adr`, status: `accepted`, owner: `Platform` - Decide on Vercel for the public frontend and keep deploy previews simple.
- [Decision: Keep pricing simple](/projects/pathmerit/product/decisions/decision-pricing) — route: `/projects/pathmerit/product/decisions/decision-pricing` — source: `../content/product/decisions/decision-pricing.md` — contentType: `product-decision`, status: `superseded`, owner: `Product` - Keep the initial pricing model easy to explain and easy to change.

## Requirements

Supporting requirement artifacts and planning pages.

### PathMerit

- [Roadmap Template](/projects/pathmerit/product/templates/roadmap) — route: `/projects/pathmerit/product/templates/roadmap` — source: `../content/product/templates/roadmap.md` — contentType: `roadmap`, status: `draft`, owner: `Product` - Use this page to show a phased product roadmap.
- [Feature Matrix Template](/projects/pathmerit/product/templates/feature-matrix) — route: `/projects/pathmerit/product/templates/feature-matrix` — source: `../content/product/templates/feature-matrix.md` — contentType: `feature-matrix`, status: `draft`, owner: `Product` - Use this page to compare features by audience, problem, value, and priority.
- [Success Metrics Template](/projects/pathmerit/product/templates/success-metrics) — route: `/projects/pathmerit/product/templates/success-metrics` — source: `../content/product/templates/success-metrics.md` — contentType: `success-metrics`, status: `draft`, owner: `Product` - Use this page to define the metrics that prove the product is working.
- [Release Plan Template](/projects/pathmerit/product/templates/release-plan) — route: `/projects/pathmerit/product/templates/release-plan` — source: `../content/product/templates/release-plan.md` — contentType: `release-plan`, status: `draft`, owner: `Product` - Use this page to define the near-term release sequence and launch risks.

## API Docs

Endpoint references and API usage pages.

### PathMerit

- [API Endpoint Design](/projects/pathmerit/technology/api) — route: `/projects/pathmerit/technology/api` — source: `../content/technology/api.md` — contentType: `api` - Manual endpoint catalog for the PathMerit backend surface.
- [API Reference Example](/projects/pathmerit/technology/api/reference) — route: `/projects/pathmerit/technology/api/reference` — source: `../content/technology/api/reference.md` — contentType: `api` - A colocated JSON example for a single API endpoint.

## Database and Schema Docs

Database tables, relationships, and schema reference pages.

### PathMerit

- [DRE / ERD Relationships](/projects/pathmerit/technology/database/relationships) — route: `/projects/pathmerit/technology/database/relationships` — source: `../content/technology/database/relationships.md`
- [Copyable Mermaid ERD Source](/projects/pathmerit/technology/database/mermaid-erd) — route: `/projects/pathmerit/technology/database/mermaid-erd` — source: `../content/technology/database/mermaid-erd.md`
- [Auth](/projects/pathmerit/technology/database/domains/auth) — route: `/projects/pathmerit/technology/database/domains/auth` — source: `../content/technology/database/domains/auth.md`
- [Lookup](/projects/pathmerit/technology/database/domains/lookup) — route: `/projects/pathmerit/technology/database/domains/lookup` — source: `../content/technology/database/domains/lookup.md`
- [Product Core](/projects/pathmerit/technology/database/domains/product-core) — route: `/projects/pathmerit/technology/database/domains/product-core` — source: `../content/technology/database/domains/product-core.md`
- [Tracker](/projects/pathmerit/technology/database/domains/tracker) — route: `/projects/pathmerit/technology/database/domains/tracker` — source: `../content/technology/database/domains/tracker.md`
- [Resume Builder](/projects/pathmerit/technology/database/domains/resume-builder) — route: `/projects/pathmerit/technology/database/domains/resume-builder` — source: `../content/technology/database/domains/resume-builder.md`
- [Documents](/projects/pathmerit/technology/database/domains/documents) — route: `/projects/pathmerit/technology/database/domains/documents` — source: `../content/technology/database/domains/documents.md`
- [Interviewing Tracker](/projects/pathmerit/technology/database/domains/interviewing-tracker) — route: `/projects/pathmerit/technology/database/domains/interviewing-tracker` — source: `../content/technology/database/domains/interviewing-tracker.md`
- [Networking CRM](/projects/pathmerit/technology/database/domains/networking-crm) — route: `/projects/pathmerit/technology/database/domains/networking-crm` — source: `../content/technology/database/domains/networking-crm.md`
- [Job Saver Extension](/projects/pathmerit/technology/database/domains/job-saver-extension) — route: `/projects/pathmerit/technology/database/domains/job-saver-extension` — source: `../content/technology/database/domains/job-saver-extension.md`
- [ATS](/projects/pathmerit/technology/database/domains/ats) — route: `/projects/pathmerit/technology/database/domains/ats` — source: `../content/technology/database/domains/ats.md`
- [ATS Intelligence](/projects/pathmerit/technology/database/domains/ats-intelligence) — route: `/projects/pathmerit/technology/database/domains/ats-intelligence` — source: `../content/technology/database/domains/ats-intelligence.md`
- [Preparation](/projects/pathmerit/technology/database/domains/preparation) — route: `/projects/pathmerit/technology/database/domains/preparation` — source: `../content/technology/database/domains/preparation.md`
- [Retention](/projects/pathmerit/technology/database/domains/retention) — route: `/projects/pathmerit/technology/database/domains/retention` — source: `../content/technology/database/domains/retention.md`
- [Communication](/projects/pathmerit/technology/database/domains/communication) — route: `/projects/pathmerit/technology/database/domains/communication` — source: `../content/technology/database/domains/communication.md`
- [Background Jobs](/projects/pathmerit/technology/database/domains/background-jobs) — route: `/projects/pathmerit/technology/database/domains/background-jobs` — source: `../content/technology/database/domains/background-jobs.md`
- [Exports](/projects/pathmerit/technology/database/domains/exports) — route: `/projects/pathmerit/technology/database/domains/exports` — source: `../content/technology/database/domains/exports.md`
- [Billing](/projects/pathmerit/technology/database/domains/billing) — route: `/projects/pathmerit/technology/database/domains/billing` — source: `../content/technology/database/domains/billing.md`
- [users](/projects/pathmerit/technology/database/tables/users) — route: `/projects/pathmerit/technology/database/tables/users` — source: `../content/technology/database/tables/users.md`
- [sessions](/projects/pathmerit/technology/database/tables/sessions) — route: `/projects/pathmerit/technology/database/tables/sessions` — source: `../content/technology/database/tables/sessions.md`
- [technologies](/projects/pathmerit/technology/database/tables/technologies) — route: `/projects/pathmerit/technology/database/tables/technologies` — source: `../content/technology/database/tables/technologies.md`
- [institutions](/projects/pathmerit/technology/database/tables/institutions) — route: `/projects/pathmerit/technology/database/tables/institutions` — source: `../content/technology/database/tables/institutions.md`
- [roles](/projects/pathmerit/technology/database/tables/roles) — route: `/projects/pathmerit/technology/database/tables/roles` — source: `../content/technology/database/tables/roles.md`
- [certifications](/projects/pathmerit/technology/database/tables/certifications) — route: `/projects/pathmerit/technology/database/tables/certifications` — source: `../content/technology/database/tables/certifications.md`
- [application_statuses](/projects/pathmerit/technology/database/tables/application-statuses) — route: `/projects/pathmerit/technology/database/tables/application-statuses` — source: `../content/technology/database/tables/application-statuses.md`
- [target_roles](/projects/pathmerit/technology/database/tables/target-roles) — route: `/projects/pathmerit/technology/database/tables/target-roles` — source: `../content/technology/database/tables/target-roles.md`
- [companies](/projects/pathmerit/technology/database/tables/companies) — route: `/projects/pathmerit/technology/database/tables/companies` — source: `../content/technology/database/tables/companies.md`
- [resumes](/projects/pathmerit/technology/database/tables/resumes) — route: `/projects/pathmerit/technology/database/tables/resumes` — source: `../content/technology/database/tables/resumes.md`
- [resume_headers](/projects/pathmerit/technology/database/tables/resume-headers) — route: `/projects/pathmerit/technology/database/tables/resume-headers` — source: `../content/technology/database/tables/resume-headers.md`
- [resume_summaries](/projects/pathmerit/technology/database/tables/resume-summaries) — route: `/projects/pathmerit/technology/database/tables/resume-summaries` — source: `../content/technology/database/tables/resume-summaries.md`
- [work_experiences](/projects/pathmerit/technology/database/tables/work-experiences) — route: `/projects/pathmerit/technology/database/tables/work-experiences` — source: `../content/technology/database/tables/work-experiences.md`
- [work_experience_technologies](/projects/pathmerit/technology/database/tables/work-experience-technologies) — route: `/projects/pathmerit/technology/database/tables/work-experience-technologies` — source: `../content/technology/database/tables/work-experience-technologies.md`
- [educations](/projects/pathmerit/technology/database/tables/educations) — route: `/projects/pathmerit/technology/database/tables/educations` — source: `../content/technology/database/tables/educations.md`
- [certifications_resume](/projects/pathmerit/technology/database/tables/certifications-resume) — route: `/projects/pathmerit/technology/database/tables/certifications-resume` — source: `../content/technology/database/tables/certifications-resume.md`
- [technical_skills](/projects/pathmerit/technology/database/tables/technical-skills) — route: `/projects/pathmerit/technology/database/tables/technical-skills` — source: `../content/technology/database/tables/technical-skills.md`
- [technical_skill_items](/projects/pathmerit/technology/database/tables/technical-skill-items) — route: `/projects/pathmerit/technology/database/tables/technical-skill-items` — source: `../content/technology/database/tables/technical-skill-items.md`
- [cover_letters](/projects/pathmerit/technology/database/tables/cover-letters) — route: `/projects/pathmerit/technology/database/tables/cover-letters` — source: `../content/technology/database/tables/cover-letters.md`
- [applications](/projects/pathmerit/technology/database/tables/applications) — route: `/projects/pathmerit/technology/database/tables/applications` — source: `../content/technology/database/tables/applications.md`
- [application_contacts](/projects/pathmerit/technology/database/tables/application-contacts) — route: `/projects/pathmerit/technology/database/tables/application-contacts` — source: `../content/technology/database/tables/application-contacts.md`
- [interactions](/projects/pathmerit/technology/database/tables/interactions) — route: `/projects/pathmerit/technology/database/tables/interactions` — source: `../content/technology/database/tables/interactions.md`
- [saved_jobs](/projects/pathmerit/technology/database/tables/saved-jobs) — route: `/projects/pathmerit/technology/database/tables/saved-jobs` — source: `../content/technology/database/tables/saved-jobs.md`
- [job_descriptions](/projects/pathmerit/technology/database/tables/job-descriptions) — route: `/projects/pathmerit/technology/database/tables/job-descriptions` — source: `../content/technology/database/tables/job-descriptions.md`
- [ats_analyses](/projects/pathmerit/technology/database/tables/ats-analyses) — route: `/projects/pathmerit/technology/database/tables/ats-analyses` — source: `../content/technology/database/tables/ats-analyses.md`
- [study_guides](/projects/pathmerit/technology/database/tables/study-guides) — route: `/projects/pathmerit/technology/database/tables/study-guides` — source: `../content/technology/database/tables/study-guides.md`
- [study_guide_modules](/projects/pathmerit/technology/database/tables/study-guide-modules) — route: `/projects/pathmerit/technology/database/tables/study-guide-modules` — source: `../content/technology/database/tables/study-guide-modules.md`
- [questions](/projects/pathmerit/technology/database/tables/questions) — route: `/projects/pathmerit/technology/database/tables/questions` — source: `../content/technology/database/tables/questions.md`
- [question_responses](/projects/pathmerit/technology/database/tables/question-responses) — route: `/projects/pathmerit/technology/database/tables/question-responses` — source: `../content/technology/database/tables/question-responses.md`
- [weekly_goals](/projects/pathmerit/technology/database/tables/weekly-goals) — route: `/projects/pathmerit/technology/database/tables/weekly-goals` — source: `../content/technology/database/tables/weekly-goals.md`
- [email_templates](/projects/pathmerit/technology/database/tables/email-templates) — route: `/projects/pathmerit/technology/database/tables/email-templates` — source: `../content/technology/database/tables/email-templates.md`
- [jobs](/projects/pathmerit/technology/database/tables/jobs) — route: `/projects/pathmerit/technology/database/tables/jobs` — source: `../content/technology/database/tables/jobs.md`
- [export_files](/projects/pathmerit/technology/database/tables/export-files) — route: `/projects/pathmerit/technology/database/tables/export-files` — source: `../content/technology/database/tables/export-files.md`
- [billing_customers](/projects/pathmerit/technology/database/tables/billing-customers) — route: `/projects/pathmerit/technology/database/tables/billing-customers` — source: `../content/technology/database/tables/billing-customers.md`
- [subscriptions](/projects/pathmerit/technology/database/tables/subscriptions) — route: `/projects/pathmerit/technology/database/tables/subscriptions` — source: `../content/technology/database/tables/subscriptions.md`

## Implementation Prompts

Prompt-style docs and execution plans for coding agents.

### PathMerit

- [PathMerit Master Source of Truth](/projects/pathmerit) — route: `/projects/pathmerit` — source: `../content/index.md`
- [Technology](/projects/pathmerit/technology) — route: `/projects/pathmerit/technology` — source: `../content/technology/index.md`
- [Development Tracking](/projects/pathmerit/technology/dev) — route: `/projects/pathmerit/technology/dev` — source: `../content/technology/dev.md`
- [Execution Source](/projects/pathmerit/technology/execution) — route: `/projects/pathmerit/technology/execution` — source: `../content/technology/execution.md`
- [PathMerit Claude Code Phases v2](/projects/pathmerit/technology/phases) — route: `/projects/pathmerit/technology/phases` — source: `../content/technology/phases.md` — status: `active`
- [Phase Manifest](/projects/pathmerit/technology/phase-manifest) — route: `/projects/pathmerit/technology/phase-manifest` — source: `../content/technology/phase-manifest.md`

## Usage

### Codex

Use this bundle as build context for Codex by attaching `generated/agent-context.md` and, when needed, `generated/agent-context.json`.
If you only need a slice, regenerate with `pnpm generate:agent-context -- --project <slug> --domain <domain> --contentType <type> --tag <tag>`.

### Claude Code

Use the Markdown bundle as a briefing document and the JSON bundle for structured tooling or follow-up scripts.
For focused sessions, regenerate with the same filters and paste the relevant section into Claude Code.
