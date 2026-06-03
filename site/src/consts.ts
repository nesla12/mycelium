// Central place for the few project-wide constants. Change the repo URL here
// once and it updates everywhere.
export const SITE = {
  name: "The Human-Core Initiative",
  shortName: "Human-Core",
  // One-sentence mission, drawn from the founding proposal.
  tagline:
    "A free, open, evidence-based framework for human development in the age of AI.",
  // Replace with the real repository URL.
  repo: "https://github.com/nesla12/mycelium",
  url: "https://human-core-initiative.org",
} as const;

export const NAV = [
  { href: "/principles", key: "nav.principles" },
  { href: "/pillars", key: "nav.pillars" },
  { href: "/resources", key: "nav.resources" },
  { href: "/contribute", key: "nav.contribute" },
  { href: "/about", key: "nav.about" },
] as const;
