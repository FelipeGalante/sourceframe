import fs from "node:fs";
import path from "node:path";

import { chromium } from "@playwright/test";

const baseUrl = process.env.SOURCEFRAME_URL ?? "http://127.0.0.1:3000";
const outputDir = path.join(process.cwd(), "public", "screenshots");

const shots = [
  { path: "/", file: "home.png" },
  { path: "/technology", file: "domain.png" },
  { path: "/full-archive", file: "archive.png" },
];

async function main() {
  fs.mkdirSync(outputDir, { recursive: true });

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({
    viewport: { width: 1440, height: 1280 },
    deviceScaleFactor: 1,
  });

  for (const shot of shots) {
    await page.goto(new URL(shot.path, baseUrl).toString(), { waitUntil: "networkidle" });
    await page.screenshot({
      path: path.join(outputDir, shot.file),
      fullPage: false,
    });
  }

  await browser.close();
  console.log(`Captured ${shots.length} screenshots in ${outputDir}`);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
