import { validateSiteConfig } from "@/lib/site-config";

const rawSiteConfig = {
  name: "PathMerit",
  subtitle: "Master Source of Truth",
  eyebrow: "Domain-based Markdown workspace",
  title: "One reusable source-of-truth template, powered by Markdown.",
  description:
    "Use high-level domain tabs, section subnavigation, global search, and a full archive view to organize product, architecture, execution, brand, marketing, and source material.",
  defaultDomain: "technology",
  repositoryUrl: undefined,
} as const;

export const siteConfig = validateSiteConfig(rawSiteConfig);

export type { SiteConfig } from "@/lib/site-config";
