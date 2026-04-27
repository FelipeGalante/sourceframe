---
title: "Decision Log"
nav_label: "Decision Log"
domain: "about"
section: "decisions"
type: "section"
contentType: "decision-log"
order: 3
summary: "Canonical decision history for the reusable SourceFrame template."
source_panel: "panel-decisions"
source: "PathMerit_Domain_Navigation_Source_of_Truth_DATABASE_REWORKED_CLEAN_COLUMNS.html"
---

## Decision Log

| Date    | Decision          | Rationale                                                                                                                                      |
| ------- | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| 2026-04 | Name              | PathMerit selected over StackMerit, RoleMerit, TrackMerit, etc. because it is broader, brandable, and exact .com was available in user checks. |
| 2026-04 | Tagline           | Build your path. Prove your merit.                                                                                                             |
| 2026-04 | Architecture      | Use Vercel + Railway + Neon + Resend + Stripe; defer Cloud Run/Cloud SQL/Redis/BullMQ.                                                         |
| 2026-04 | Backend framework | Keep NestJS as a real backend service rather than forcing it into Vercel Functions.                                                            |
| 2026-04 | Jobs              | Use Postgres-backed jobs table for PoC/MVP before Redis/BullMQ.                                                                                |
| 2026-04 | Logo              | Signal Frame selected as primary identity direction; no green in logo.                                                                         |
| 2026-04 | Design system     | Use tokens + CVA + Tailwind; no hardcoded colors/spacing in components.                                                                        |
| 2026-04 | MVP focus         | Ship core workflow before advanced ATS simulation or heavy AI.                                                                                 |
