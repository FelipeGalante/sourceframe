import { z } from "zod";

export type ApiExample = {
  title?: string;
  language?: string;
  body: string;
};

export type ApiError = {
  code: string;
  message?: string;
  description?: string;
};

export type ApiAuthRequirement = {
  label: string;
  details?: string;
};

export type ApiEndpoint = {
  group: string;
  method: string;
  path: string;
  summary: string;
  auth?: ApiAuthRequirement;
  requestBodyExample?: ApiExample;
  responseExample?: ApiExample;
  errorCodes?: ApiError[];
};

export type ApiDefinition = {
  title?: string;
  description?: string;
  endpoints: ApiEndpoint[];
};

const apiExampleSchema = z
  .object({
    title: z.string().min(1).optional(),
    language: z.string().min(1).optional(),
    body: z.string().min(1),
  })
  .transform((example) => ({
    title: example.title?.trim(),
    language: example.language?.trim(),
    body: example.body.trim(),
  }));

const apiErrorSchema = z
  .object({
    code: z.string().min(1),
    message: z.string().min(1).optional(),
    description: z.string().min(1).optional(),
  })
  .transform((error) => ({
    code: error.code.trim(),
    message: error.message?.trim(),
    description: error.description?.trim(),
  }));

const apiAuthSchema = z
  .object({
    label: z.string().min(1),
    details: z.string().min(1).optional(),
  })
  .transform((auth) => ({
    label: auth.label.trim(),
    details: auth.details?.trim(),
  }));

const apiEndpointSchema = z
  .object({
    group: z.string().min(1),
    method: z.string().min(1),
    path: z.string().min(1),
    summary: z.string().min(1),
    auth: apiAuthSchema.optional(),
    requestBodyExample: apiExampleSchema.optional(),
    responseExample: apiExampleSchema.optional(),
    errorCodes: z.array(apiErrorSchema).default([]),
  })
  .transform((endpoint) => ({
    group: endpoint.group.trim(),
    method: endpoint.method.trim().toUpperCase(),
    path: endpoint.path.trim(),
    summary: endpoint.summary.trim(),
    auth: endpoint.auth,
    requestBodyExample: endpoint.requestBodyExample,
    responseExample: endpoint.responseExample,
    errorCodes: endpoint.errorCodes,
  }));

export const apiDefinitionSchema = z
  .object({
    title: z.string().min(1).optional(),
    description: z.string().min(1).optional(),
    endpoints: z.array(apiEndpointSchema).default([]),
  })
  .transform((definition) => ({
    title: definition.title?.trim(),
    description: definition.description?.trim(),
    endpoints: definition.endpoints,
  }));

export type ApiSourceFormat = "frontmatter" | "json" | "yaml";

export type ApiDocument = {
  route: string;
  href: string;
  relativePath: string;
  sourcePath: string;
  sourceFormat: ApiSourceFormat;
  definition: ApiDefinition;
};

export type ApiCatalogGroup = {
  group: string;
  endpoints: ApiEndpoint[];
};

export type ApiExampleInput = z.input<typeof apiExampleSchema>;
export type ApiErrorInput = z.input<typeof apiErrorSchema>;
export type ApiAuthRequirementInput = z.input<typeof apiAuthSchema>;
export type ApiEndpointInput = z.input<typeof apiEndpointSchema>;
