# Brand Building Skills for AI Agents

A collection of AI agent skills focused on brand building services. Built for brand strategists, agency owners, and founders who want AI coding agents to help with brand strategy, naming, identity, voice, positioning, messaging, and launch. Works with Claude Code, Cursor, Windsurf, and any agent that supports the [Agent Skills spec](https://agentskills.io).

## Install

```bash
npx skills add arnabbagxd/Brand-building-skills
```

**Contributions welcome!** Found a way to improve a skill or have a new one to add? Open a PR.

## What are Skills?

Skills are markdown files that give AI agents specialized knowledge and workflows for specific tasks. When you add these to your project, your agent can recognize when you're working on a brand task and apply the right frameworks and best practices.

## How Skills Work Together

Skills reference each other and build on shared context. The `brand-context` skill is the foundation — every other skill checks it first to understand the brand, audience, and positioning before doing anything.

```
                        ┌──────────────────────────────────┐
                        │           brand-context           │
                        │   (read by all other skills first) │
                        └──────────────┬───────────────────┘
                                       │
    ┌──────────────┬────────────┬──────┴──────┬──────────────┬──────────────┐
    ▼              ▼            ▼             ▼              ▼              ▼
┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌───────────┐ ┌──────────┐
│ Strategy │ │ Identity │ │  Voice & │ │Audience &│ │  Launch & │ │  Audit & │
│          │ │          │ │Messaging │ │Positioning│  Transform │ │ Standards│
├──────────┤ ├──────────┤ ├──────────┤ ├──────────┤ ├───────────┤ ├──────────┤
│brand-    │ │brand-    │ │brand-    │ │target-   │ │brand-     │ │brand-    │
│strategy  │ │identity  │ │voice     │ │audience  │ │launch     │ │audit     │
│brand-    │ │brand-    │ │brand-    │ │brand-    │ │rebranding │ │brand-    │
│naming    │ │story     │ │messaging │ │positioning│ │           │ │guidelines│
│          │ │          │ │          │ │competitor│ │           │ │          │
│          │ │          │ │          │ │-branding │ │           │ │          │
└──────────┘ └──────────┘ └──────────┘ └──────────┘ └───────────┘ └──────────┘
```

Skills cross-reference each other:
- `brand-strategy` ↔ `brand-positioning` ↔ `brand-messaging`
- `brand-identity` ↔ `brand-voice` ↔ `brand-guidelines`
- `brand-audit` → `rebranding` → `brand-launch`
- `target-audience` → `brand-messaging`, `brand-voice`, `brand-positioning`
- `competitor-branding` → `brand-positioning`, `brand-strategy`

## Available Skills

<!-- SKILLS:START -->
| Skill | Description |
|-------|-------------|
| [brand-context](skills/brand-context/) | Foundation skill. Captures and stores core brand DNA — identity, audience, positioning, values, and voice — that every other skill reads first. |
| [brand-strategy](skills/brand-strategy/) | Full brand strategy workflow for agencies and consultants. Collects client info via questionnaire, then generates a complete brand strategy report. |
| [brand-naming](skills/brand-naming/) | Full brand naming workflow. Generates names with strategic rationale, or evaluates existing name options. Auto-detects which mode to run. |
| [brand-identity](skills/brand-identity/) | Creates a visual identity brief — logo direction, color palette, typography, imagery style, and design principles for briefing a designer. |
| [brand-voice](skills/brand-voice/) | Defines the brand's verbal identity — tone, voice qualities, vocabulary, writing style rules, and channel adaptations. |
| [brand-story](skills/brand-story/) | Crafts the brand's origin story and founder narrative in three versions: long (About Us), short (homepage), and one-liner. |
| [brand-positioning](skills/brand-positioning/) | Defines the brand's market position — competitive landscape mapping, positioning territory, positioning statement, and proof points. |
| [brand-messaging](skills/brand-messaging/) | Builds the full messaging hierarchy — taglines, value proposition, key messages, proof points, and audience-specific messaging. |
| [brand-audit](skills/brand-audit/) | Assesses brand health across 6 dimensions: positioning clarity, visual identity, messaging consistency, voice, audience alignment, and differentiation. |
| [brand-guidelines](skills/brand-guidelines/) | Creates a comprehensive brand standards document covering logo usage, color, typography, voice, messaging, and application rules. |
| [target-audience](skills/target-audience/) | Defines the brand's ICP with deep personas, psychographics, behavioral patterns, and audience language analysis. |
| [competitor-branding](skills/competitor-branding/) | Maps how competitors brand themselves to find gaps, patterns, and differentiation opportunities in the brand landscape. |
| [brand-launch](skills/brand-launch/) | Plans the brand's public debut — launch strategy, pre-launch assets, launch day sequence, content plan, and post-launch momentum. |
| [rebranding](skills/rebranding/) | Guides a brand through strategic transformation — diagnosis, equity audit, scope definition, transition narrative, and rollout plan. |
| [personal-brand](skills/personal-brand/) | Build a personal brand strategy for founders, executives, and creators — positioning, point of view, platform strategy, content pillars, and 90-day launch plan. |
| [brand-manifesto](skills/brand-manifesto/) | Write a bold, belief-driven manifesto that declares what the brand stands for, fights against, and exists to change. |
| [brand-architecture](skills/brand-architecture/) | Define how multiple brands, sub-brands, and product lines relate — branded house, house of brands, endorsed, or hybrid model with naming system. |
| [brand-measurement](skills/brand-measurement/) | Define KPIs, metrics, and tracking systems to measure brand health, awareness, perception, and equity over time. |
| [brand-packaging](skills/brand-packaging/) | Create a packaging design brief — structure, visual direction, hierarchy, materials, and unboxing experience. |
<!-- SKILLS:END -->

## Getting Started

### Install with Claude Code

Add these skills to your Claude Code project by pointing to this repository in your project settings, or copy the skills directory into your project.

### Use with any Agent Skills-compatible tool

Skills install to `.agents/skills/` following the [Agent Skills specification](https://agentskills.io).

### Start with brand-context

Before running any other brand skill, run `brand-context` to set up the foundation:

```
Set brand context for [Brand Name] — [what it does], targeting [audience]
```

This creates `.agents/brand-context.md` that all other skills read automatically.

### Example workflows

**Starting a new brand from scratch:**
1. `brand-context` — capture brand basics
2. `target-audience` — define the ICP
3. `competitor-branding` — map the landscape
4. `brand-positioning` — find the position
5. `brand-strategy` — full strategy report
6. `brand-naming` — name the brand
7. `brand-identity` — visual identity brief
8. `brand-voice` — verbal identity
9. `brand-messaging` — messaging framework
10. `brand-guidelines` — document everything
11. `brand-launch` — plan the launch

**Auditing an existing brand:**
1. `brand-context` — document current state
2. `brand-audit` — diagnose what's working and what isn't
3. `rebranding` — if significant change is needed

**Agency client work:**
1. `brand-strategy` — presents questionnaire, generates full report
2. `brand-naming` — evaluates or generates name options
3. `brand-identity` — briefs the design team
4. `brand-guidelines` — final deliverable to the client

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for full contribution guidelines.

### Adding a new skill

1. Create the directory: `skills/your-skill-name/`
2. Create `SKILL.md` with valid YAML frontmatter
3. Add to `.claude-plugin/marketplace.json`
4. Add to the skills table in this README
5. Update `VERSIONS.md`

### Skill structure

```
skills/your-skill-name/
├── SKILL.md           # Required - main instructions (under 500 lines)
├── evals/
│   └── evals.json     # Optional - test cases
└── references/        # Optional - additional reference docs
    └── guide.md
```

### Validate skills

```bash
bash validate-skills.sh
```

## License

MIT — see [LICENSE](LICENSE)
