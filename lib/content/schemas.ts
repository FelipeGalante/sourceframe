import { z } from "zod";
import { apiDefinitionSchema } from "@/lib/api-docs";
import { decisionDefinitionSchema } from "@/lib/decision-docs";
import { productTemplateDefinitionSchema } from "@/lib/product-docs";
import { schemaDefinitionSchema } from "@/lib/schema-docs/types";

const contentTypeValueSchema = z.enum([
  "overview",
  "prd",
  "research",
  "architecture",
  "api",
  "database",
  "schema",
  "adr",
  "decision-log",
  "product-decision",
  "roadmap",
  "release-note",
  "runbook",
  "playbook",
  "brand",
  "marketing",
  "prompt",
  "source-archive",
  "reference",
  "guide",
  "tutorial",
  "changelog",
  "feature-matrix",
  "personas",
  "success-metrics",
  "release-plan",
]);

const contentTypeSchema = z.union([
  z.literal("site-index"),
  z.literal("domain-index"),
  z.literal("section"),
  z.literal("section-index"),
  z.literal("section-full-extraction"),
  z.literal("database-domain"),
  z.literal("database-table"),
  z.literal("database-sql-reference"),
  z.literal("database-relationships"),
  z.literal("database-mermaid"),
]);

const sharedSchema = z.object({
  title: z.string().min(1),
  type: contentTypeSchema,
  contentType: contentTypeValueSchema.optional(),
  status: z
    .enum(["draft", "active", "archived", "deprecated", "proposed", "accepted", "superseded"])
    .optional(),
  visibility: z.enum(["public", "internal"]).optional(),
  summary: z.string().min(1).optional(),
  tags: z.array(z.string().min(1)).optional(),
  owner: z.string().min(1).optional(),
  version: z.string().min(1).optional(),
  updated: z.string().min(1).optional(),
  lastReviewed: z.string().min(1).optional(),
  reviewAfter: z.string().min(1).optional(),
  deprecatedSince: z.string().min(1).optional(),
  api: apiDefinitionSchema.optional(),
  schema: schemaDefinitionSchema.optional(),
  decision: decisionDefinitionSchema.optional(),
  product: productTemplateDefinitionSchema.optional(),
  domain: z.string().min(1).optional(),
  section: z.string().min(1).optional(),
  order: z.coerce.number().int().nonnegative().optional(),
  nav_label: z.string().min(1).optional(),
  eyebrow: z.string().min(1).optional(),
  description: z.string().min(1).optional(),
  kicker: z.string().min(1).optional(),
  source: z.string().min(1).optional(),
  source_panel: z.string().min(1).optional(),
  database_domain: z.string().min(1).optional(),
  table_name: z.string().min(1).optional(),
  origin: z.string().min(1).optional(),
  sourceFile: z.string().min(1).optional(),
  importedAt: z.string().min(1).optional(),
  importedBy: z.string().min(1).optional(),
  canonicalStatus: z.string().min(1).optional(),
  relatedCanonicalPages: z.array(z.string().min(1)).optional(),
});

export const frontmatterSchema = z.discriminatedUnion("type", [
  sharedSchema.extend({ type: z.literal("site-index") }),
  sharedSchema.extend({
    type: z.literal("domain-index"),
    domain: z.string().min(1),
    order: z.coerce.number().int().nonnegative(),
    eyebrow: z.string().min(1).optional(),
  }),
  sharedSchema.extend({
    type: z.literal("section"),
    domain: z.string().min(1),
    section: z.string().min(1),
    order: z.coerce.number().int().nonnegative(),
  }),
  sharedSchema.extend({
    type: z.literal("section-index"),
    domain: z.string().min(1),
    section: z.string().min(1),
    order: z.coerce.number().int().nonnegative(),
  }),
  sharedSchema.extend({
    type: z.literal("section-full-extraction"),
    domain: z.string().min(1),
    section: z.string().min(1),
    order: z.coerce.number().int().nonnegative(),
  }),
  sharedSchema.extend({
    type: z.literal("reference"),
    domain: z.string().min(1),
    section: z.string().min(1),
    order: z.coerce.number().int().nonnegative(),
  }),
  sharedSchema.extend({
    type: z.literal("database-domain"),
    domain: z.string().min(1),
    section: z.string().min(1),
    order: z.coerce.number().int().nonnegative(),
  }),
  sharedSchema.extend({
    type: z.literal("database-table"),
    domain: z.string().min(1),
    section: z.string().min(1),
    order: z.coerce.number().int().nonnegative(),
    database_domain: z.string().min(1),
    table_name: z.string().min(1),
  }),
  sharedSchema.extend({
    type: z.literal("database-sql-reference"),
    domain: z.string().min(1),
    section: z.string().min(1),
    order: z.coerce.number().int().nonnegative(),
  }),
  sharedSchema.extend({
    type: z.literal("database-relationships"),
    domain: z.string().min(1),
    section: z.string().min(1),
  }),
  sharedSchema.extend({
    type: z.literal("database-mermaid"),
    domain: z.string().min(1),
    section: z.string().min(1),
  }),
]);

export type Frontmatter = z.infer<typeof frontmatterSchema>;
