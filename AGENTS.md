# AGENTS.md

Guidelines for AI agents working in this repository.

## Repository Overview

This repository contains **Agent Skills** for AI agents following the [Agent Skills specification](https://agentskills.io/specification.md). Skills install to `.agents/skills/` (the cross-agent standard). This repo also serves as a **Claude Code plugin marketplace** via `.claude-plugin/marketplace.json`.

- **Name**: Brand Building Skills
- **GitHub**: [brandbuilding-skills](https://github.com)
- **License**: MIT

## Repository Structure

```
brandbuilding-skills/
├── .claude-plugin/
│   └── marketplace.json   # Claude Code plugin marketplace manifest
├── skills/                # Agent Skills
│   └── skill-name/
│       ├── SKILL.md       # Required skill file
│       ├── evals/
│       │   └── evals.json
│       └── references/    # Optional reference docs
├── CONTRIBUTING.md
├── LICENSE
└── README.md
```

## Build / Lint / Test Commands

**Skills** are content-only (no build step). Verify manually:
- YAML frontmatter is valid
- `name` field matches directory name exactly
- `name` is 1-64 chars, lowercase alphanumeric and hyphens only
- `description` is 1-1024 characters

Run the validation script:
```bash
bash validate-skills.sh
```

## Agent Skills Specification

Skills follow the [Agent Skills spec](https://agentskills.io/specification.md).

### Skill File Format

```yaml
---
name: skill-name          # Required. Must match directory name.
description: When to...   # Required. 1-1024 chars. Include trigger phrases.
metadata:
  version: 1.0.0
---

# Skill Title

Instructions for the agent...
```

### Required Fields

| Field | Rules |
|-------|-------|
| `name` | 1-64 chars, lowercase a-z, 0-9, hyphens only. Must match directory. |
| `description` | 1-1024 chars. Include trigger phrases for agent detection. |

### Optional Fields

| Field | Notes |
|-------|-------|
| `license` | Defaults to MIT |
| `metadata` | author, version, etc. |

## Skill Structure

```
skills/skill-name/
├── SKILL.md           # Required - main instructions
├── evals/
│   └── evals.json     # Optional - test cases
└── references/        # Optional - additional documentation
    └── guide.md
```

## Foundation Skill

`brand-context` is the foundation skill — every other skill reads it first to understand the brand, audience, and positioning before doing anything.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for full guidelines.

When adding a new skill:
1. Create the directory: `skills/your-skill-name/`
2. Create `SKILL.md` with valid YAML frontmatter
3. Add to `.claude-plugin/marketplace.json` skills list
4. Update `README.md` skills table
5. Update `VERSIONS.md`
