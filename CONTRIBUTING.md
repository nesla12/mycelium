# Contributing to the Human-Core Initiative

Thank you for considering it. This is a free, open, evidence-based framework for human development in the age of AI, and it gets better when teachers, parents, researchers, and translators improve it and give the improvement back.

Before anything else, please read the [Constitution](CONSTITUTION.md). It is short, and it is the one thing you cannot argue with.

---

## The one rule above all others

**The constitution cannot be overridden by contribution.**

No pull request, translation, grant, or partnership changes the principles or the boundary. In particular, we will never accept anything that senses, scores, or infers children's emotions or inner states. That line holds everywhere. A contribution that crosses it is declined, regardless of how useful it seems.

---

## The evidence standard

This framework earns trust by being honest about evidence. So:

- **Claims cite their evidence.** If you add or change a claim about how children learn or how AI behaves, point to the research, study, or source behind it. Where the evidence is contested, say so plainly rather than hiding it.
- **Keep existing citations as written** unless you are correcting an error, in which case explain the correction.
- **Critique is welcome.** Pointing out where the framework is wrong, overstated, or unsupported is one of the most valuable contributions you can make. We would rather be corrected than be confident.
- **We publish what fails.** If you piloted something and it did not work, that is worth contributing too.

No invented statistics, studies, quotes, or claims. If it is not supported, it does not go in.

---

## How different people can help

**Teachers and facilitators.** Run a session, then tell us what broke. Suggest clearer wording, better example topics, missing support for strugglers, or a runsheet that fits real timetables better. Real classroom experience is the most valuable input we get.

**Parents.** Tell us where the home-use guidance is unclear or impractical. Suggest what would actually help at the kitchen table.

**Researchers.** Stress-test the pedagogy. Flag where we have overstated an effect, leaned on weak evidence, or missed a stronger source. We are actively seeking a research partner to validate and challenge the framework; if that could be you or your institution, please reach out.

**Translators and localizers.** English is the founding language. German and Italian are the first planned translations, and any language is welcome. See the localization notes below.

**Developers.** The website is a small, static Astro site, deliberately simple so it survives on little maintenance. Improvements that keep it simple, fast, and accessible are welcome. Please do not add features that increase the maintenance burden without a clear reason, and never anything that conflicts with the constitution.

---

## The source of truth

The canonical documents live in [`/content`](content) as Markdown. Everything else is generated from them:

- The website (`/site`) renders these files directly.
- The downloadable copies (`/resources`) are synced from them.

**Edit the canonical files in `/content` only.** Do not edit the copies in `/resources` by hand; they are regenerated. After editing content, run `npm run sync` from `/site` (it also runs automatically on every build) to refresh the downloads.

---

## Localization notes

The framework is built to be translated.

- The English canonical documents in `/content` are the source.
- The website interface strings live in one small dictionary so new languages slot in without restructuring (see `/site/src/i18n`).
- When translating a document, keep the structure, the citations, and above all the constitution and the boundary intact. Translate the meaning faithfully, including the hard line on not inferring children's states.
- If a phrase has no clean equivalent in your language, translate the intent and add a short translator's note rather than dropping the meaning.

---

## How to propose a change

1. Open an issue describing what you want to change and why, with evidence where relevant. For small fixes (typos, broken links, clearer wording) a pull request on its own is fine.
2. For changes to the canonical content, edit the files in `/content`.
3. Keep changes simple and focused. Small, clear contributions are easier to review and easier to maintain.
4. By contributing, you agree your contribution is licensed under the same terms as the part of the project it touches: content under CC BY-SA 4.0, code under MIT. See [LICENSE](LICENSE) and [NOTICE](NOTICE).

---

## A note on tone

This is a serious public good, written plainly and without hype. Please match that. Understated and accurate beats grand and unsupported, every time.
