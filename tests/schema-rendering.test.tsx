import assert from "node:assert/strict";
import test from "node:test";

import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";

import { SchemaDomainIndex } from "@/components/schema/SchemaDomainIndex";
import { SchemaTableCard } from "@/components/schema/SchemaTableCard";

test("schema components render column, index, and relationship details", () => {
  const html = renderToStaticMarkup(
    createElement(SchemaTableCard, {
      document: {
        route: "/technology/database/tables/users",
        href: "/technology/database/tables/users",
        relativePath: "technology/database/tables/users.md",
        sourcePath: "content/technology/database/tables/users.md",
        sourceFormat: "frontmatter",
        definition: {
          tableName: "users",
          domain: "Auth",
          lifecycle: "MVP Core",
          description: "Primary user record.",
          columns: [{ name: "id", type: "uuid", purpose: "Stable identifier." }],
          indexes: [{ name: "unique(email)", columns: ["email"], purpose: "Lookup" }],
          constraints: ["email must be unique"],
          relationships: [{ tableName: "sessions", cardinality: "1:N", purpose: "Owns sessions." }],
        },
      },
    }),
  );

  assert.match(html, /users/);
  assert.match(html, /Columns/);
  assert.match(html, /Indexes/);
  assert.match(html, /Constraints/);
  assert.match(html, /Relationships/);
  assert.match(html, /Stable identifier/);
  assert.match(html, /Owns sessions/);
});

test("schema domain index groups tables by domain", () => {
  const html = renderToStaticMarkup(
    createElement(SchemaDomainIndex, {
      groups: [
        {
          domain: "Auth",
          title: "Authentication",
          documents: [
            {
              route: "/technology/database/tables/users",
              href: "/technology/database/tables/users",
              relativePath: "technology/database/tables/users.md",
              sourcePath: "content/technology/database/tables/users.md",
              sourceFormat: "frontmatter",
              definition: {
                tableName: "users",
                domain: "Auth",
                columns: [],
                indexes: [],
                constraints: [],
                relationships: [],
              },
            },
          ],
        },
      ],
    }),
  );

  assert.match(html, /Tables by domain/);
  assert.match(html, /Authentication/);
  assert.match(html, /users/);
});
