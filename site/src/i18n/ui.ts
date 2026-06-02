// Interface strings live here so new languages slot in without restructuring.
// English is complete. To add German or Italian: add a `de` or `it` object
// with the same keys, add the locale to astro.config.mjs, and the helper
// below will pick it up. Document copy (the long-form pages) is translated
// separately in /content.

export const languages = {
  en: "English",
  // de: "Deutsch",   // planned
  // it: "Italiano",  // planned
} as const;

export const defaultLang = "en";

export const ui = {
  en: {
    "nav.principles": "Principles",
    "nav.pillars": "The Three Pillars",
    "nav.resources": "Resources",
    "nav.contribute": "Contribute",
    "nav.about": "About",
    "nav.skip": "Skip to content",
    "nav.menu": "Menu",
    "footer.license":
      "Content under CC BY-SA 4.0. Code under MIT.",
    "footer.tagline":
      "A free, open, evidence-based framework for human development in the age of AI.",
    "footer.repo": "Repository",
    "common.readDocument": "Read the document",
    "common.download": "Download (.md)",
    "common.backToResources": "All resources",
    "common.audience": "For",
    "common.onThisPage": "On this page",
  },
} as const;

export type Lang = keyof typeof ui;

export function useTranslations(lang: Lang = defaultLang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}
