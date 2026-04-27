import { z } from "zod";

import { siteConfigSchema } from "@/lib/site-config";

export const projectConfigSchema = z.object({
  slug: z.string().min(1),
  contentRoot: z.string().min(1),
  themeAccent: z.string().min(1),
  siteConfig: siteConfigSchema,
});

export const projectCatalogSchema = z
  .array(projectConfigSchema)
  .min(1)
  .superRefine((projects, ctx) => {
    const seen = new Map<string, number>();

    for (const [index, project] of projects.entries()) {
      const previous = seen.get(project.slug);
      if (previous !== undefined) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: [index, "slug"],
          message: `duplicate project slug "${project.slug}" also used at index ${previous}`,
        });
      } else {
        seen.set(project.slug, index);
      }
    }
  });

export type ProjectConfig = z.infer<typeof projectConfigSchema>;
export type ProjectCatalog = z.infer<typeof projectCatalogSchema>;

export function validateProjectConfig(config: unknown) {
  return projectConfigSchema.parse(config);
}

export function validateProjectCatalog(config: unknown) {
  return projectCatalogSchema.parse(config);
}
