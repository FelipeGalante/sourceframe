import { z } from "zod";

const productRequirementSchema = z
  .object({
    id: z.string().min(1).optional(),
    title: z.string().min(1),
    description: z.string().min(1).optional(),
    priority: z.string().min(1).optional(),
    rationale: z.string().min(1).optional(),
    status: z.string().min(1).optional(),
  })
  .transform((requirement) => ({
    id: requirement.id?.trim(),
    title: requirement.title.trim(),
    description: requirement.description?.trim(),
    priority: requirement.priority?.trim(),
    rationale: requirement.rationale?.trim(),
    status: requirement.status?.trim(),
  }));

const productFeatureSchema = z
  .object({
    feature: z.string().min(1),
    audience: z.string().min(1).optional(),
    problem: z.string().min(1).optional(),
    value: z.string().min(1).optional(),
    priority: z.string().min(1).optional(),
    status: z.string().min(1).optional(),
    notes: z.string().min(1).optional(),
  })
  .transform((feature) => ({
    feature: feature.feature.trim(),
    audience: feature.audience?.trim(),
    problem: feature.problem?.trim(),
    value: feature.value?.trim(),
    priority: feature.priority?.trim(),
    status: feature.status?.trim(),
    notes: feature.notes?.trim(),
  }));

const productRoadmapItemSchema = z
  .object({
    phase: z.string().min(1),
    timeframe: z.string().min(1).optional(),
    focus: z.string().min(1).optional(),
    deliverables: z.array(z.string().min(1)).default([]),
    dependencies: z.array(z.string().min(1)).default([]),
    exitCriteria: z.array(z.string().min(1)).default([]),
  })
  .transform((item) => ({
    phase: item.phase.trim(),
    timeframe: item.timeframe?.trim(),
    focus: item.focus?.trim(),
    deliverables: item.deliverables.map((value) => value.trim()),
    dependencies: item.dependencies.map((value) => value.trim()),
    exitCriteria: item.exitCriteria.map((value) => value.trim()),
  }));

const productPersonaSchema = z
  .object({
    name: z.string().min(1),
    role: z.string().min(1),
    summary: z.string().min(1).optional(),
    goals: z.array(z.string().min(1)).default([]),
    pains: z.array(z.string().min(1)).default([]),
    quote: z.string().min(1).optional(),
    context: z.string().min(1).optional(),
  })
  .transform((persona) => ({
    name: persona.name.trim(),
    role: persona.role.trim(),
    summary: persona.summary?.trim(),
    goals: persona.goals.map((value) => value.trim()),
    pains: persona.pains.map((value) => value.trim()),
    quote: persona.quote?.trim(),
    context: persona.context?.trim(),
  }));

const productMetricSchema = z
  .object({
    name: z.string().min(1),
    target: z.string().min(1).optional(),
    definition: z.string().min(1).optional(),
    signal: z.string().min(1).optional(),
    cadence: z.string().min(1).optional(),
    owner: z.string().min(1).optional(),
    notes: z.string().min(1).optional(),
  })
  .transform((metric) => ({
    name: metric.name.trim(),
    target: metric.target?.trim(),
    definition: metric.definition?.trim(),
    signal: metric.signal?.trim(),
    cadence: metric.cadence?.trim(),
    owner: metric.owner?.trim(),
    notes: metric.notes?.trim(),
  }));

const productScopeRowSchema = z
  .object({
    area: z.string().min(1),
    inScope: z.string().min(1),
    outOfScope: z.string().min(1).optional(),
    notes: z.string().min(1).optional(),
  })
  .transform((row) => ({
    area: row.area.trim(),
    inScope: row.inScope.trim(),
    outOfScope: row.outOfScope?.trim(),
    notes: row.notes?.trim(),
  }));

const productReleasePlanItemSchema = z
  .object({
    release: z.string().min(1),
    date: z.string().min(1).optional(),
    focus: z.string().min(1).optional(),
    scope: z.array(z.string().min(1)).default([]),
    risks: z.array(z.string().min(1)).default([]),
    notes: z.string().min(1).optional(),
  })
  .transform((release) => ({
    release: release.release.trim(),
    date: release.date?.trim(),
    focus: release.focus?.trim(),
    scope: release.scope.map((value) => value.trim()),
    risks: release.risks.map((value) => value.trim()),
    notes: release.notes?.trim(),
  }));

const productTemplateSchema = z
  .object({
    title: z.string().min(1).optional(),
    description: z.string().min(1).optional(),
    requirements: z.array(productRequirementSchema).default([]),
    featureMatrix: z.array(productFeatureSchema).default([]),
    roadmap: z.array(productRoadmapItemSchema).default([]),
    personas: z.array(productPersonaSchema).default([]),
    metrics: z.array(productMetricSchema).default([]),
    scope: z.array(productScopeRowSchema).default([]),
    releasePlan: z.array(productReleasePlanItemSchema).default([]),
  })
  .transform((product) => ({
    title: product.title?.trim(),
    description: product.description?.trim(),
    requirements: product.requirements,
    featureMatrix: product.featureMatrix,
    roadmap: product.roadmap,
    personas: product.personas,
    metrics: product.metrics,
    scope: product.scope,
    releasePlan: product.releasePlan,
  }));

export const productTemplateDefinitionSchema = productTemplateSchema;

export type ProductRequirement = z.infer<typeof productRequirementSchema>;
export type ProductFeature = z.infer<typeof productFeatureSchema>;
export type ProductRoadmapItem = z.infer<typeof productRoadmapItemSchema>;
export type ProductPersona = z.infer<typeof productPersonaSchema>;
export type ProductMetric = z.infer<typeof productMetricSchema>;
export type ProductScopeRow = z.infer<typeof productScopeRowSchema>;
export type ProductReleasePlanItem = z.infer<typeof productReleasePlanItemSchema>;
export type ProductTemplateDefinition = z.infer<typeof productTemplateDefinitionSchema>;

export type ProductSourceFormat = "frontmatter" | "json" | "yaml";

export type ProductTemplateDocument = {
  route: string;
  href: string;
  relativePath: string;
  sourcePath: string;
  sourceFormat: ProductSourceFormat;
  definition: ProductTemplateDefinition;
};
