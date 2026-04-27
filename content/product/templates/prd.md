---
title: "PRD Template"
nav_label: "PRD Template"
domain: "product"
section: "templates"
type: "reference"
contentType: "prd"
order: 1
summary: "Copy this page when you need a structured product requirements document."
status: "draft"
owner: "Product"
product:
  title: "Launch-ready product requirements"
  description: "A reusable PRD format that keeps scope, requirements, personas, and success criteria aligned."
  requirements:
    - title: "Define the user problem"
      description: "Explain why this page exists and what behavior it should change."
      priority: "P0"
      rationale: "Keeps the document anchored in a clear user pain."
    - title: "State what is in and out of scope"
      description: "List the boundaries before discussing implementation details."
      priority: "P0"
      rationale: "Prevents ambiguous scope creep."
  featureMatrix:
    - feature: "Core workflow"
      audience: "Primary users"
      problem: "Users need to complete the main task quickly."
      value: "Captures the essential flow."
      priority: "High"
    - feature: "Guided setup"
      audience: "New users"
      problem: "Users need help getting started."
      value: "Reduces time to first success."
      priority: "Medium"
  scope:
    - area: "In scope"
      inScope: "The minimum workflow, supporting content, and a basic settings model."
      outOfScope: "Advanced analytics, integrations, and experimentation tooling."
    - area: "Out of scope"
      inScope: "Anything required to ship a coherent first version."
      outOfScope: "Multi-tenant administration, enterprise workflows, and API extensibility."
---

## How to use this template

Duplicate this file, rename it, and replace the sample data in the `product:` frontmatter block. Keep the headings in place so the page remains readable even before the custom data is added.
