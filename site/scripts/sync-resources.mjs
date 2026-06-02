// Sync the canonical documents from /content into the downloadable mirrors.
//
// Single source of truth: ../content/*.md
// Destinations:
//   1. ../resources         (committed mirror, for direct download from the repo)
//   2. ./public/downloads   (served by the site, generated, git-ignored)
//
// Run manually with `npm run sync`. Runs automatically on `npm run dev`
// and `npm run build` via the predev / prebuild hooks. Never edit the
// destinations by hand; edit the canonical files in /content only.

import { readdir, readFile, writeFile, mkdir, rm } from "node:fs/promises";
import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const siteDir = path.resolve(fileURLToPath(import.meta.url), "../..");
const repoRoot = path.resolve(siteDir, "..");

const contentDir = path.join(repoRoot, "content");
const destinations = [
  path.join(repoRoot, "resources"),
  path.join(siteDir, "public", "downloads"),
];

async function sync() {
  if (!existsSync(contentDir)) {
    console.error(`[sync] content directory not found: ${contentDir}`);
    process.exit(1);
  }

  const files = (await readdir(contentDir)).filter((f) => f.endsWith(".md"));
  if (files.length === 0) {
    console.warn("[sync] no markdown files found in /content");
  }

  for (const dest of destinations) {
    // Recreate the destination so deleted/renamed docs do not linger.
    if (existsSync(dest)) {
      await rm(dest, { recursive: true, force: true });
    }
    await mkdir(dest, { recursive: true });

    for (const file of files) {
      const body = await readFile(path.join(contentDir, file), "utf-8");
      await writeFile(path.join(dest, file), body, "utf-8");
    }
    console.log(`[sync] wrote ${files.length} docs -> ${path.relative(repoRoot, dest)}`);
  }
}

sync().catch((err) => {
  console.error("[sync] failed:", err);
  process.exit(1);
});
