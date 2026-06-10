# Contributing

Thanks for your interest in contributing to Brand Building Skills! This guide will help you add new skills or improve existing ones.

## Requesting a Skill

You can suggest new skills by opening a skill request issue.

## Adding a New Skill

### 1. Create the skill directory

```bash
mkdir -p skills/your-skill-name
```

### 2. Create the SKILL.md file

Every skill needs a `SKILL.md` file with YAML frontmatter:

```yaml
---
name: your-skill-name
description: When to use this skill. Include trigger phrases and keywords that help agents identify relevant tasks.
metadata:
  version: 1.0.0
---

# Your Skill Name

Instructions for the agent go here...
```

Optional frontmatter fields: `license` (default: MIT), `metadata` (author, version, etc.)

### 3. Follow the naming conventions

- **Directory name**: lowercase, hyphens only (e.g., `brand-voice`)
- **Name field**: must match directory name exactly
- **Description**: 1-1024 characters, include trigger phrases

### 4. Structure your skill

```
skills/your-skill-name/
├── SKILL.md           # Required - main instructions
├── references/        # Optional - additional documentation
│   └── guide.md
└── evals/
    └── evals.json     # Optional - test cases
```

### 5. Write effective instructions

- Keep `SKILL.md` under 500 lines
- Move detailed reference material to `references/`
- Include step-by-step instructions
- Add examples of inputs and outputs
- Cover common edge cases

### 6. Add to the plugin manifest

Add your skill path to `.claude-plugin/marketplace.json`:

```json
"./skills/your-skill-name"
```

### 7. Update the README

Add your skill to the skills table in `README.md`.

## Improving Existing Skills

1. Read the existing skill thoroughly
2. Test your changes locally with an AI agent
3. Keep changes focused and minimal
4. Update the version in metadata if making significant changes

## Submitting Your Contribution

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-skill-name`)
3. Make your changes
4. Test locally with an AI agent
5. Submit a pull request

## Skill Quality Checklist

- [ ] `name` matches directory name
- [ ] `description` clearly explains when to use the skill (includes trigger phrases)
- [ ] Instructions are clear and actionable
- [ ] No sensitive data or credentials
- [ ] Added to `.claude-plugin/marketplace.json`
- [ ] Added to `README.md` skills table
- [ ] Follows existing skill patterns in the repo

## Questions?

Open an issue if you have questions or need help with your contribution.
