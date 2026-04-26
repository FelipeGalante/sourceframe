import { z } from "zod";

export const siteConfigSchema = z.object({
  name: z.string().min(1),
  subtitle: z.string().min(1),
  eyebrow: z.string().min(1),
  title: z.string().min(1),
  description: z.string().min(1),
  defaultDomain: z.string().min(1),
  repositoryUrl: z.string().url().optional(),
});

export type SiteConfig = z.infer<typeof siteConfigSchema>;

export function validateSiteConfig(config: unknown) {
  return siteConfigSchema.parse(config);
}
