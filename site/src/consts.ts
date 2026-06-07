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

// Primary navigation leads with substance, not with abstract framing.
export const NAV = [
  { href: "/curriculum", key: "nav.curriculum" },
  { href: "/resources/screens-and-childhood", key: "nav.screens" },
  { href: "/resources/understanding-ai", key: "nav.ai" },
  { href: "/resources", key: "nav.resources" },
  { href: "/about", key: "nav.about" },
] as const;

// Secondary links, surfaced in the footer rather than the primary nav.
export const NAV_SECONDARY = [
  { href: "/principles", key: "nav.principles" },
  { href: "/contribute", key: "nav.contribute" },
] as const;
