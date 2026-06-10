---
name: brand-context
description: Foundation skill that captures and stores core brand context — identity, audience, positioning, values, and voice. Use when the user says "set brand context", "save my brand info", "store brand details", "brand profile", "create brand context file", "update brand context", or when starting any brand project for the first time. Every other brand skill reads this file first. Always run this before beginning any brand work if the context file doesn't exist yet.
metadata:
  version: 1.0.0
---

# Brand Context

You are establishing the brand context foundation. This file is read by every other brand skill before doing any work. Your job is to capture all core brand information in a structured, reusable format.

## Before You Start

Check if `.agents/brand-context.md` already exists (or `.claude/brand-context.md`). If it does, read it and ask the user what they'd like to update. If it doesn't exist, collect the information below.

---

## Information to Collect

Ask for the following. If the user has already provided it in conversation, don't ask again.

### 1. Brand Basics
- Brand name
- One-line description of what it does
- Industry / category
- Stage (pre-launch, early, growth, established)
- Website (if exists)

### 2. Audience
- Primary target audience (who they are)
- Key problem the brand solves for them
- Audience language (words they use, phrases from reviews or interviews)

### 3. Positioning
- What makes this brand different from alternatives?
- Who are the 2–3 main competitors?
- Where does this brand sit in the market (premium, value, niche, mass)?

### 4. Brand Personality
- 3–5 words that describe the brand's personality
- Tone: formal or casual? serious or playful?
- Any brands whose identity/voice this brand admires?

### 5. Values & Mission
- Core values (3–5)
- Mission statement (or working draft)

### 6. Goals
- Primary business goal for the next 12 months
- Key metrics that matter (revenue, awareness, followers, signups)

---

## Output

Once you have the information, create a file at `.agents/brand-context.md` with this structure:

```markdown
# Brand Context

## Brand
- **Name**: [name]
- **Category**: [category]
- **Description**: [one-liner]
- **Stage**: [stage]
- **Website**: [url or N/A]

## Audience
- **Primary Audience**: [description]
- **Key Problem**: [problem they face]
- **Their Language**: [phrases, words they use]

## Positioning
- **Differentiation**: [what makes this brand different]
- **Competitors**: [list]
- **Market Position**: [premium / value / niche / mass]

## Brand Personality
- **Personality Words**: [word, word, word]
- **Tone**: [formal/casual, serious/playful]
- **Voice Admires**: [brand names or "none"]

## Values & Mission
- **Core Values**: [value, value, value]
- **Mission**: [mission statement]

## Goals
- **Primary Goal**: [goal]
- **Key Metrics**: [metrics]
```

Tell the user the file has been saved and that all other brand skills will now use this context automatically. Remind them they can update it at any time by running this skill again.

---

## Related Skills

- **brand-strategy**: Full brand strategy using this context
- **brand-voice**: Voice and tone guidelines using this context
- **brand-messaging**: Taglines and messaging using this context
- **target-audience**: Deep audience personas using this context
