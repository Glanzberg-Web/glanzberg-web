import { chromium } from "playwright";
import fs from "node:fs/promises";
import path from "node:path";

const projects = [
  ["harborline", "harborline-auto-demo"],
  ["verdant", "verdant-landscaping-demo"],
  ["solara", "solara-cafe-demo"],
  ["tideline", "tideline-cleaning-demo"],
  ["ironwood", "ironwood-contracting-demo"],
  ["luma", "luma-aesthetics-demo"],
];
const output = path.resolve("public/previews");
await fs.mkdir(output, { recursive: true });
const browser = await chromium.launch({ headless: true, args: ["--no-sandbox"] });
try {
  for (const [slug, repo] of projects) {
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });
    const url = `https://glanzberg-web.github.io/${repo}/`;
    try {
      const response = await page.goto(url, { waitUntil: "domcontentloaded", timeout: 40000 });
      if (!response?.ok()) throw new Error(`HTTP ${response?.status() || "unknown"}`);
      await page.evaluate(async () => { await document.fonts.ready; });
      await page.waitForTimeout(1800);
      const destination = path.join(output, `${slug}.webp`);
      await page.screenshot({ path: destination, type: "webp", quality: 82, animations: "disabled" });
      console.log(`Captured ${slug}: ${url}`);
    } catch (error) {
      console.error(`Unable to capture ${slug} (${url}): ${error.message}`);
      throw error; // Fail rather than publish invented or misleading previews.
    } finally {
      await page.close();
    }
  }
} finally {
  await browser.close();
}
