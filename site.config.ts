import { projectCatalog } from "@/projects.config";

import { validateSiteConfig } from "@/lib/site-config";

export const siteConfig = validateSiteConfig(projectCatalog[0].siteConfig);

export type { SiteConfig } from "@/lib/site-config";
