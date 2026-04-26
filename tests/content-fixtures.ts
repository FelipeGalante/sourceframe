import fs from "node:fs";
import os from "node:os";
import path from "node:path";

export function writeFile(root: string, filePath: string, contents: string) {
  const fullPath = path.join(root, filePath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, contents, "utf8");
}

export function createTempContent(files: Record<string, string>) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "sourceframe-content-"));
  for (const [filePath, contents] of Object.entries(files)) {
    writeFile(root, filePath, contents);
  }
  return root;
}
