import path from "node:path";

import { validateProjectCatalog } from "@/lib/projects/types";

const rawProjectCatalog = [
  {
    slug: "pathmerit",
    contentRoot: path.join(process.cwd(), "content"),
    themeAccent: "#7c8cff",
    siteConfig: {
      name: "PathMerit",
      subtitle: "Master Source of Truth",
      eyebrow: "Domain-based Markdown workspace",
      title: "One reusable source-of-truth template, powered by Markdown.",
      description:
        "Use high-level domain tabs, section subnavigation, global search, and a full archive view to organize product, architecture, execution, brand, marketing, and source material.",
      defaultDomain: "technology",
      openapi: {
        registrations: [],
      },
      repositoryUrl: undefined,
      themeAccent: "#7c8cff",
    },
  },
  {
    slug: "client-portal",
    contentRoot: path.join(process.cwd(), "projects/client-portal/content"),
    themeAccent: "#45c2b6",
    siteConfig: {
      name: "Client Portal",
      subtitle: "Delivery workspace",
      eyebrow: "Project portal",
      title: "Track project decisions, delivery, and collaboration in one place.",
      description:
        "A compact project workspace for agencies and consultants to organize delivery, knowledge, and client-facing updates.",
      defaultDomain: "operations",
      openapi: {
        registrations: [],
      },
      repositoryUrl: undefined,
      themeAccent: "#45c2b6",
    },
  },
] as const;

export const projectCatalog = validateProjectCatalog(rawProjectCatalog);
