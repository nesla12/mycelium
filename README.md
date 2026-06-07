# The Human-Core Initiative

**Two forces are reshaping childhood at once, and most children are being prepared for neither.** Screens are displacing the things that build a mind, attention, sleep, play, language, and real relationships. At the same time, AI now does the thinking that school was built to teach, and offers an easy way to skip the mental effort that grows a brain.

Human-Core is one free, open, evidence-based curriculum, from the first months of life, that protects what builds a human and teaches children to master AI instead of being mastered by it. It gathers the methods the best global evidence shows actually work: the movement, language, and play that build the early brain, the foundations of reading and mathematics, the human skills school tends to skip, and, from about age ten, learning to think with and master AI. The aim is children who grow up able and whole, ready to thrive alongside AI rather than be displaced by it. Everything is free, forkable, and translatable, owned by no company.

This is early work: a founding proposal and a growing set of pilotable materials, not a finished system and not a guarantee. We would rather say that plainly than oversell it.

---

## The two crises this responds to

1. **Children are not learning the foundations.** The World Bank estimates that around seven in ten 10-year-olds in low- and middle-income countries cannot read and understand a simple story, a figure that rose from 57% to roughly 70% through the pandemic. Wealthy systems are not exempt: foundational skills are declining across many developed countries too, and teaching is too often unresponsive.
2. **AI changes what learning is for, and how it is avoided.** AI now does most of what the old system trained children for, while also giving them a frictionless way to avoid the thinking that builds their minds.

This initiative exists to act on both at once, in the open, rather than to complain about them.

---

## The principles

These are constitutional. Each is a short rule you can hold in your head and use to judge a decision. They cannot be overridden by contribution, funding, or convenience. See [CONSTITUTION.md](CONSTITUTION.md) for the full text.

- **Build the human before the skill.** Sleep, movement, play, language, and a present adult come first.
- **The child does the thinking.** Anything that thinks for the child is removed.
- **Knowledge before skill.** Judgment grows from a base of real knowledge.
- **Meet the child where they are.** Teach at the actual level, not the curriculum's.
- **Hard but achievable.** Guide effort at the edge of what the child can do.
- **Take what works, from anywhere.** Best global evidence in, fashion out.

Two commitments hold alongside them: the framework is **free and open** forever, and we hold one hard **boundary**, never building systems that infer the emotional or inner states of children.

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
| **[MYCELIUM Learning Framework](content/02-pillar-1-curriculum.md)** | Teachers and parents | Pillar 1, the spine. The evidence-based curriculum from birth to twelve, body and language first, then knowledge, then judgment. **Start here.** |
| [The Problem With Screens](content/07-screens-and-childhood.md) | Parents and teachers | What devices do to a developing child, the displacement problem, the evidence and where it is contested, and a practical plan by age. |
| [Understanding AI](content/08-understanding-ai.md) | Parents and teachers | What AI is, the cognitive offloading danger, and why teaching mastery beats both banning it and surrendering to it. |
| [Pillar 3 Teacher Workbook](content/03-pillar-3-teacher-workbook.md) | Teachers | The AI-mastery capstone, ages 10 to 12. Eight ready-to-run sessions teaching children to use, question, and out-think AI. Runs even without AI in the room, and the most ready-to-run module. |
| [Pillar 3, Part II: The Frontier](content/04-pillar-3-part-ii-frontier.md) | Teachers | The advanced track, ages 12 to 14: reasoning models, compute and power, authorship, research, and the skills school forgot. |
| [The Facilitator's Guide](content/05-facilitators-guide.md) | Teachers | How to run hard debates with children as a community of inquiry, without it becoming chaos or your opinion. |
| [The Human-Core AI Curriculum](content/06-school-implementation-guide.md) | Teachers and directors | The implementation layer: sixteen modules and 6 to 24 hour pathways that slot into subjects you already teach. |
| [Founding Proposal](content/01-founding-proposal.md) | Everyone | The mission, the evidence, the theory of change, the strategy, and the risks. |

The curriculum is the spine. **Start there.** If you want to begin teaching tomorrow, the Pillar 3 Teacher Workbook is the most ready-to-run module.

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
