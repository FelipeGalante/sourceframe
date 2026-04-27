---
title: "Roadmap Template"
nav_label: "Roadmap Template"
domain: "product"
section: "templates"
type: "reference"
contentType: "roadmap"
order: 3
summary: "Use this page to show a phased product roadmap."
status: "draft"
owner: "Product"
product:
  title: "Example roadmap"
  description: "A roadmap template that separates the near-term release plan from the longer-term sequence of product phases."
  roadmap:
    - phase: "Phase 1"
      timeframe: "Now"
      focus: "Prove the core workflow."
      deliverables:
        - "Landing page"
        - "Primary user flow"
        - "Basic tracking"
      dependencies:
        - "Content model"
      exitCriteria:
        - "Users can complete the core task"
    - phase: "Phase 2"
      timeframe: "Next"
      focus: "Strengthen retention."
      deliverables:
        - "Reminders"
        - "Search"
        - "Templates"
      dependencies:
        - "Phase 1 feedback"
      exitCriteria:
        - "Users return without prompting"
  releasePlan:
    - release: "Alpha"
      date: "2026-05-01"
      focus: "Prove the core workflow with a small audience."
      scope:
        - "Essential screens"
        - "Feedback loop"
      risks:
        - "Scope creep"
    - release: "Beta"
      date: "2026-05-15"
      focus: "Add polish and improve discoverability."
      scope:
        - "Templates"
        - "Metrics"
      risks:
        - "Too much new surface area"
---

## How to use this template

Use the roadmap section for phase-by-phase planning, then move release planning into the release-plan template if you need a separate launch checklist.
