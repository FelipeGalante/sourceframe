import assert from "node:assert/strict";
import path from "node:path";
import test from "node:test";

import {
  buildSchemaCatalog,
  loadSchemaDocument,
  normalizeSchemaDefinition,
} from "@/lib/schema-docs";

import { createTempContent, writeFile } from "./content-fixtures";

test("normalizeSchemaDefinition trims fields and defaults optional collections", () => {
  const schema = normalizeSchemaDefinition({
    tableName: "  users  ",
    domain: " Auth ",
    lifecycle: " MVP Core ",
    description: "  Primary user record. ",
    columns: [
      {
        name: " id ",
        type: " uuid ",
        default: " gen_random_uuid() ",
        size: " 16 bytes ",
        keyRole: " PK ",
        nullable: false,
        purpose: " Stable identifier ",
      },
    ],
    indexes: [{ name: " index(email) ", columns: [" email "], purpose: " lookup " }],
    constraints: [" email must be unique "],
    relationships: [{ tableName: " sessions ", cardinality: " 1:N ", purpose: " owns " }],
  });

  assert.equal(schema.tableName, "users");
  assert.equal(schema.domain, "Auth");
  assert.equal(schema.lifecycle, "MVP Core");
  assert.equal(schema.description, "Primary user record.");
  assert.deepEqual(schema.columns[0], {
    name: "id",
    type: "uuid",
    default: "gen_random_uuid()",
    size: "16 bytes",
    keyRole: "PK",
    nullable: false,
    purpose: "Stable identifier",
  });
  assert.deepEqual(schema.indexes[0], {
    name: "index(email)",
    columns: ["email"],
    purpose: "lookup",
  });
  assert.deepEqual(schema.constraints, ["email must be unique"]);
  assert.deepEqual(schema.relationships[0], {
    tableName: "sessions",
    cardinality: "1:N",
    purpose: "owns",
    through: undefined,
  });
});

test("loadSchemaDocument reads frontmatter, JSON, and YAML sidecar schema data", () => {
  const root = createTempContent({
    "alpha/users.md": [
      "---",
      'title: "Users"',
      'domain: "alpha"',
      'section: "tables"',
      'type: "database-table"',
      "order: 1",
      "schema:",
      '  tableName: "users"',
      '  domain: "Auth"',
      '  lifecycle: "MVP Core"',
      '  description: "Primary user record."',
      "  columns:",
      '    - name: "id"',
      '      type: "uuid"',
      "---",
      "",
      "# Users",
    ].join("\n"),
    "beta/sessions.md": [
      "---",
      'title: "Sessions"',
      'domain: "beta"',
      'type: "database-table"',
      "---",
      "# Sessions",
    ].join("\n"),
    "gamma/relationships.md": [
      "---",
      'title: "Relationships"',
      'domain: "gamma"',
      'type: "database-relationships"',
      "---",
      "",
      "# Relationships",
    ].join("\n"),
  });

  writeFile(
    root,
    "beta/sessions.schema.json",
    JSON.stringify(
      {
        tableName: "sessions",
        domain: "Auth",
        lifecycle: "MVP Core",
        description: "Session store.",
        columns: [
          { name: "id", type: "uuid", size: "16 bytes" },
          { name: "user_id", type: "uuid", keyRole: "FK" },
        ],
        indexes: [{ name: "index(user_id)" }],
      },
      null,
      2,
    ),
  );

  writeFile(
    root,
    "gamma/relationships.schema.yaml",
    [
      "tableName: Relationship Map",
      "domain: Database",
      "lifecycle: Reference",
      "description: Cross-table relationships.",
      "columns: []",
      "indexes: []",
      "constraints: []",
      "relationships:",
      "  - tableName: users",
      "    cardinality: 1:N",
      "    purpose: Owns sessions and profiles.",
    ].join("\n"),
  );

  const frontmatterDoc = loadSchemaDocument(path.join(root, "alpha/users.md"), "alpha/users.md", {
    tableName: "users",
    domain: "Auth",
    lifecycle: "MVP Core",
    description: "Primary user record.",
    columns: [{ name: "id", type: "uuid" }],
  });
  const jsonDoc = loadSchemaDocument(
    path.join(root, "beta/sessions.md"),
    "beta/sessions.md",
    undefined,
  );
  const yamlDoc = loadSchemaDocument(
    path.join(root, "gamma/relationships.md"),
    "gamma/relationships.md",
    undefined,
  );

  assert.equal(frontmatterDoc?.sourceFormat, "frontmatter");
  assert.equal(frontmatterDoc?.definition.tableName, "users");
  assert.equal(jsonDoc?.sourceFormat, "json");
  assert.equal(jsonDoc?.definition.tableName, "sessions");
  assert.equal(jsonDoc?.definition.columns.length, 2);
  assert.equal(yamlDoc?.sourceFormat, "yaml");
  assert.equal(yamlDoc?.definition.tableName, "Relationship Map");
  assert.equal(yamlDoc?.definition.relationships[0]?.tableName, "users");
});

test("buildSchemaCatalog groups schema docs by domain", () => {
  const catalog = buildSchemaCatalog(
    [
      {
        route: "/alpha/users",
        href: "/alpha/users",
        relativePath: "alpha/users.md",
        title: "Users",
        schema: {
          tableName: "users",
          domain: "Auth",
          columns: [{ name: "id", type: "uuid" }],
          indexes: [],
          constraints: [],
          relationships: [],
        },
      },
      {
        route: "/beta/sessions",
        href: "/beta/sessions",
        relativePath: "beta/sessions.md",
        title: "Sessions",
        schema: {
          tableName: "sessions",
          domain: "Auth",
          columns: [{ name: "id", type: "uuid" }],
          indexes: [],
          constraints: [],
          relationships: [],
        },
      },
      {
        route: "/gamma/certifications",
        href: "/gamma/certifications",
        relativePath: "gamma/certifications.md",
        title: "Certifications",
        schema: {
          tableName: "certifications",
          domain: "Lookup",
          columns: [{ name: "id", type: "uuid" }],
          indexes: [],
          constraints: [],
          relationships: [],
        },
      },
    ],
    new Map([
      ["Auth", "Authentication"],
      ["Lookup", "Lookup"],
    ]),
  );

  assert.deepEqual(
    catalog.map((group) => ({
      domain: group.domain,
      title: group.title,
      tables: group.documents.map((document) => document.definition.tableName),
    })),
    [
      { domain: "Auth", title: "Authentication", tables: ["sessions", "users"] },
      { domain: "Lookup", title: "Lookup", tables: ["certifications"] },
    ],
  );
});
