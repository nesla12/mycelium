// @ts-check
import { defineConfig } from "astro/config";
import stripLeadingTitle from "./remark/strip-leading-title.mjs";

// Static site. English first; German and Italian are planned and slot in
// by adding locales here and per-locale content, with no other restructuring.
// Tailwind CSS v4 is configured via PostCSS (see postcss.config.mjs).
export default defineConfig({
  markdown: {
    // Remove each document's own title block when rendering on the site; the
    // page header shows the title instead. Downloads keep the full document.
    remarkPlugins: [stripLeadingTitle],
  },
  // Replace with the production domain before deploying. Used for canonical
  // URLs and the sitemap. A wrong value here does not break the build.
  site: "https://human-core-initiative.org",
  output: "static",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
