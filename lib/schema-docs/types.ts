import { z } from "zod";

export type SchemaColumn = {
  name: string;
  type: string;
  default?: string;
  size?: string;
  keyRole?: string;
  nullable?: boolean;
  purpose?: string;
};

export type SchemaIndex = {
  name: string;
  columns?: string[];
  purpose?: string;
};

export type SchemaRelationship = {
  tableName: string;
  cardinality?: string;
  purpose?: string;
  through?: string;
};

export type SchemaDefinition = {
  tableName: string;
  domain: string;
  lifecycle?: string;
  description?: string;
  columns: SchemaColumn[];
  indexes: SchemaIndex[];
  constraints: string[];
  relationships: SchemaRelationship[];
};

const schemaColumnSchema = z
  .object({
    name: z.string().min(1),
    type: z.string().min(1),
    default: z.string().min(1).optional(),
    size: z.string().min(1).optional(),
    keyRole: z.string().min(1).optional(),
    nullable: z.boolean().optional(),
    purpose: z.string().min(1).optional(),
  })
  .transform((column) => ({
    name: column.name.trim(),
    type: column.type.trim(),
    default: column.default?.trim(),
    size: column.size?.trim(),
    keyRole: column.keyRole?.trim(),
    nullable: column.nullable,
    purpose: column.purpose?.trim(),
  }));

const schemaIndexSchema = z
  .object({
    name: z.string().min(1),
    columns: z.array(z.string().min(1)).optional(),
    purpose: z.string().min(1).optional(),
  })
  .transform((index) => ({
    name: index.name.trim(),
    columns: index.columns?.map((column) => column.trim()) ?? [],
    purpose: index.purpose?.trim(),
  }));

const schemaRelationshipSchema = z
  .object({
    tableName: z.string().min(1),
    cardinality: z.string().min(1).optional(),
    purpose: z.string().min(1).optional(),
    through: z.string().min(1).optional(),
  })
  .transform((relationship) => ({
    tableName: relationship.tableName.trim(),
    cardinality: relationship.cardinality?.trim(),
    purpose: relationship.purpose?.trim(),
    through: relationship.through?.trim(),
  }));

export const schemaDefinitionSchema = z
  .object({
    tableName: z.string().min(1),
    domain: z.string().min(1),
    lifecycle: z.string().min(1).optional(),
    description: z.string().min(1).optional(),
    columns: z.array(schemaColumnSchema).default([]),
    indexes: z.array(schemaIndexSchema).default([]),
    constraints: z.array(z.string().min(1)).default([]),
    relationships: z.array(schemaRelationshipSchema).default([]),
  })
  .transform((definition) => ({
    tableName: definition.tableName.trim(),
    domain: definition.domain.trim(),
    lifecycle: definition.lifecycle?.trim(),
    description: definition.description?.trim(),
    columns: definition.columns,
    indexes: definition.indexes,
    constraints: definition.constraints.map((constraint) => constraint.trim()),
    relationships: definition.relationships,
  }));

export type SchemaColumnInput = z.input<typeof schemaColumnSchema>;
export type SchemaIndexInput = z.input<typeof schemaIndexSchema>;
export type SchemaRelationshipInput = z.input<typeof schemaRelationshipSchema>;

export type SchemaSourceFormat = "frontmatter" | "json" | "yaml";

export type SchemaDocument = {
  route: string;
  href: string;
  relativePath: string;
  sourcePath: string;
  sourceFormat: SchemaSourceFormat;
  definition: SchemaDefinition;
};

export type SchemaDomainGroup = {
  domain: string;
  title?: string;
  documents: SchemaDocument[];
};
