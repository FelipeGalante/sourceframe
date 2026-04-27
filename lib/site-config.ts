import { z } from "zod";

export const siteConfigSchema = z.object({
  name: z.string().min(1),
  subtitle: z.string().min(1),
  eyebrow: z.string().min(1),
  title: z.string().min(1),
  description: z.string().min(1),
  defaultDomain: z.string().min(1),
  themeAccent: z.string().min(1).optional(),
  repositoryUrl: z.string().url().optional(),
  openapi: z
    .object({
      registrations: z
        .array(
          z.object({
            name: z.string().min(1),
            path: z.string().min(1),
            description: z.string().min(1).optional(),
            version: z.string().min(1).optional(),
          }),
        )
        .default([]),
    })
    .optional(),
});

export type SiteConfig = z.infer<typeof siteConfigSchema>;

export function validateSiteConfig(config: unknown) {
  return siteConfigSchema.parse(config);
}
