import { z } from "zod";
import { contentVisibilityValues } from "@/lib/content/visibility";

const contentVisibilitySchema = z
  .object({
    include: z.array(z.enum(contentVisibilityValues)).default([...contentVisibilityValues]),
    exclude: z.array(z.enum(contentVisibilityValues)).default([]),
  })
  .superRefine((policy, ctx) => {
    const overlap = policy.include.filter((value) => policy.exclude.includes(value));
    if (overlap.length) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["exclude"],
        message: `content visibility include/exclude overlap: ${overlap.join(", ")}`,
      });
    }
  })
  .default({
    include: [...contentVisibilityValues],
    exclude: [],
  });

export const siteConfigSchema = z.object({
  name: z.string().min(1),
  subtitle: z.string().min(1),
  eyebrow: z.string().min(1),
  title: z.string().min(1),
  description: z.string().min(1),
  defaultDomain: z.string().min(1),
  themeAccent: z.string().min(1).optional(),
  repositoryUrl: z.string().url().optional(),
  contentVisibility: contentVisibilitySchema,
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
