import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// The canonical documents live in /content at the repo root and are the
// single source of truth. The site reads them directly from there.
//
// To add a locale later: keep these English files, add e.g. /content/de/*.md,
// and extend the loader (or add a `resourcesDe` collection) plus a `lang`
// field. No other part of the site needs to change.
const resources = defineCollection({
  loader: glob({ pattern: "*.md", base: "../content" }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    version: z.string().optional(),
    slug: z.string(),
    order: z.number(),
    pillar: z.number().optional(),
    audience: z.string().optional(),
    featured: z.boolean().optional().default(false),
    summary: z.string(),
  }),
});

export const collections = { resources };
