# The Human-Core Initiative

**A free, open, evidence-based framework for human development in the age of AI.**

We build on what the science of learning already shows, and we point AI at empowering teachers and teaching children to master it, never at surveilling them. Everything here is free, forkable, and translatable, owned by no company, adoptable by anyone on earth.

This is early work: a founding proposal and a first set of written, pilotable materials, not a finished system and not a guarantee. We would rather say that plainly than oversell it.

---

## The two crises this responds to

1. **Children are not learning the foundations.** The World Bank estimates that around seven in ten 10-year-olds in low- and middle-income countries cannot read and understand a simple story, a figure that rose from 57% to roughly 70% through the pandemic. Wealthy systems are not exempt: foundational skills are declining across many developed countries too, and teaching is too often unresponsive.
2. **AI changes what learning is for, and how it is avoided.** AI now does most of what the old system trained children for, while also giving them a frictionless way to avoid the thinking that builds their minds.

This initiative exists to act on both at once, in the open, rather than to complain about them.

---

## The principles

These are constitutional. They are the test every contribution must pass, and they cannot be overridden by contribution, funding, or convenience. See [CONSTITUTION.md](CONSTITUTION.md) for the full text.

- **Human first, evidence first.**
- **AI points at the adults and at empowerment, never at surveilling children's feelings.**
- **Knowledge before skill, at every age.**
- **The child does the thinking.**
- **Teach each child at their actual level.**
- **Open by default, global by design.**

## The boundary

The initiative draws one hard line, and it holds everywhere, not only under European law:

> **We do not build systems that infer the emotional or inner states of children.**

The reason is not merely regulatory. Such inference is scientifically unreliable, context-dependent, and aimed at people who cannot refuse it. Everything the original vision wanted from it is delivered better by pointing the technology at the teaching and at development. This is a feature to celebrate, never to soften.

---

## The three pillars

**Pillar 1. An open, evidence-based pedagogy.** A complete, age-banded curriculum and methods guide (the MYCELIUM Learning Framework) that any teacher or parent can adopt without permission or payment. One principle in three developmental forms: an adult guides the child's mental effort toward a clear goal, at a difficulty that is hard but achievable, starting from the child's actual level.

**Pillar 2. AI that empowers teachers.** A private, teacher-owned coach that listens to the teaching, not to the children's feelings, and turns coaching from a scarce luxury into something every teacher can have. By constitution it never infers a child's state, never scores or profiles children, and never becomes a surveillance dashboard for administrators.

**Pillar 3. AI mastery for children.** Teaching children to use AI as a thinking partner they control, to audit it for error and bias, to understand how it works and fails, and to reason about its ethics. The governing test: if the AI increases how much the child thinks, it is a tutor; if it replaces the child's thinking, it is a crutch.

---

## The resources

All resources are free, with no signup and no email gate. Read them on the site or download the Markdown. Each lives in [`/content`](content) as a canonical document.

| Document | For | What it is |
|----------|-----|-----------|
| **[Pillar 3 Teacher Workbook](content/03-pillar-3-teacher-workbook.md)** | Teachers | The most complete draw. Eight ready-to-run sessions teaching children (ages 10 to 12) to use, question, and out-think AI. Runs even without AI in the room, using printable materials. |
| [MYCELIUM Learning Framework](content/02-pillar-1-curriculum.md) | Teachers and parents | Pillar 1. The evidence-based curriculum and methods, ages 0 to 12. |
| [Pillar 3, Part II: The Frontier](content/04-pillar-3-part-ii-frontier.md) | Teachers | The advanced track, ages 12 to 14: reasoning models, compute and power, authorship, research, and the skills school forgot. |
| [The Facilitator's Guide](content/05-facilitators-guide.md) | Teachers | How to run hard debates with children as a community of inquiry, without it becoming chaos or your opinion. |
| [The Human-Core AI Curriculum](content/06-school-implementation-guide.md) | Teachers and directors | The implementation layer: sixteen modules and 6 to 24 hour pathways that slot into subjects you already teach. |
| [Founding Proposal](content/01-founding-proposal.md) | Everyone | The mission, the evidence, the theory of change, the strategy, and the risks. |

If you adopt a school, **start with the Teacher Workbook.**

---

## Repository structure

```
.
├── content/            The canonical Markdown documents. Single source of truth.
├── site/               The Astro website (static, Tailwind, Markdown-native).
├── resources/          Downloadable copies, synced from /content (do not edit).
├── README.md           This file.
├── CONSTITUTION.md     The non-negotiable principles and the boundary.
├── CONTRIBUTING.md     How to contribute, and the evidence standard.
├── LICENSE             Dual license (content CC BY-SA 4.0, code MIT).
├── NOTICE              Explains the license split.
├── Dockerfile          Static build served by nginx, for a VPS.
└── docker-compose.yml  Deploy behind Traefik.
```

**The documents in [`/content`](content) are the single source of truth.** The website renders them directly, and the downloadable copies in [`/resources`](resources) are generated from them. Edit `/content` only; never edit the copies by hand.

---

## The website

A small, static [Astro](https://astro.build) site styled with Tailwind CSS v4, deliberately simple so it survives on little maintenance. It is Markdown-native: `/content` drives the resource pages. The content structure is built so additional locales (German and Italian are planned) slot in without restructuring.

```bash
cd site
npm install
npm run dev      # local dev server (runs the content sync first)
npm run build    # static build into site/dist (runs the sync first)
npm run preview  # serve the built site locally
```

`npm run sync` copies the canonical documents into the downloadable mirrors. It runs automatically before `dev` and `build`, so you rarely call it directly.

See [DEPLOY.md](DEPLOY.md) for deployment (Vercel, or your own VPS behind Traefik).

---

## Contributing

Teachers, parents, researchers, and translators all make this stronger. Read [CONTRIBUTING.md](CONTRIBUTING.md). The one rule above all others: **the constitution cannot be overridden by contribution.** We will never accept anything that senses, scores, or infers children's emotions or inner states. Claims cite their evidence, and we publish what fails as openly as what works.

We are actively seeking a research partner to validate the pedagogy, and volunteer schools for small, well-observed pilots. See the About page on the site for how to reach us.

## License

Dual-licensed. Content and site copy under **CC BY-SA 4.0**; code under **MIT**. See [LICENSE](LICENSE) and [NOTICE](NOTICE) for which applies to what. Free forever, derivatives kept open.
