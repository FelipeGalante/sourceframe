import { z } from "zod";

export type DecisionRelatedPage = {
  title?: string;
  href: string;
};

export type DecisionDefinition = {
  title: string;
  domain: string;
  status: string;
  date: string;
  owner?: string;
  decisionType: "adr" | "decision-log" | "product-decision";
  relatedPages: DecisionRelatedPage[];
  supersedes: string[];
  supersededBy: string[];
};

function trimString(value: unknown) {
  return typeof value === "string" ? value.trim() : value;
}

const decisionRelatedPageSchema = z
  .object({
    title: z.string().min(1).optional(),
    href: z.string().min(1),
  })
  .transform((page) => ({
    title: page.title?.trim(),
    href: page.href.trim(),
  }));

const decisionMetadataSchema = z
  .object({
    title: z.string().min(1),
    domain: z.string().min(1),
    status: z.preprocess(trimString, z.string().min(1)),
    date: z.string().min(1),
    owner: z.string().min(1).optional(),
    decisionType: z.preprocess(trimString, z.enum(["adr", "decision-log", "product-decision"])),
    relatedPages: z.array(decisionRelatedPageSchema).default([]),
    supersedes: z.array(z.string().min(1)).default([]),
    supersededBy: z.array(z.string().min(1)).default([]),
  })
  .transform((decision) => ({
    title: decision.title.trim(),
    domain: decision.domain.trim(),
    status: decision.status.trim(),
    date: decision.date.trim(),
    owner: decision.owner?.trim(),
    decisionType: decision.decisionType,
    relatedPages: decision.relatedPages,
    supersedes: decision.supersedes.map((value) => value.trim()),
    supersededBy: decision.supersededBy.map((value) => value.trim()),
  }));

export const decisionDefinitionSchema = decisionMetadataSchema;

export type DecisionSourceFormat = "frontmatter" | "json" | "yaml";

export type DecisionDocument = {
  route: string;
  href: string;
  relativePath: string;
  sourcePath: string;
  sourceFormat: DecisionSourceFormat;
  definition: DecisionDefinition;
};

export type DecisionGroup = {
  domain: string;
  title?: string;
  documents: DecisionDocument[];
};
