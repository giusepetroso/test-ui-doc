---
name: theme-builder
description: "Sub-skill of bitboss-ui. Initialize a new visual theme by collecting answers to 5 key questions, generating a theme document, and scaffolding CSS files."
---

# Theme Builder

## When to Apply

Load this sub-skill **only when the user explicitly requests to initialize or create a new theme**. Trigger phrases include:

- "voglio inizializzare un nuovo tema"
- "crea un tema"
- "inizializza il tema"
- "set up the theme"
- "build a theme"

Do **not** load this skill for general styling tasks or component edits.

---

## Step 1 — Ask the 5 Questions

Ask all 5 questions in a single message. Wait for the user's answers before proceeding.

```
To build your theme I need 5 quick answers:

1. **App type** — What kind of app is this? (e.g. SaaS dashboard, marketing site, e-commerce, internal tool)
2. **Mood** — Describe the vibe in 3 words. (e.g. "clean, modern, professional" / "bold, energetic, consumer")
3. **Colors** — Primary color (hex or name) + dark mode? (yes / no / both)
4. **Typography** — Preferred font or leave it to me? If custom, name it. Scale: compact / default / large.
5. **Shape & Spacing** — Border radius: sharp / rounded / pill — Density: compact / default / spacious
```

---

## Step 2 — Generate the Theme Document

Once the user answers all 5 questions, create the file `./docs/internal/ui/theme.md`.

The document must include:

```markdown
# Theme Definition

## App Context
[app type and intended audience]

## Mood
[3 words + 1-2 sentence interpretation]

## Color System
- Primary: [hex]
- Surface: [derived neutral]
- Semantic: success / error / warning / info (derive from primary if not specified)
- Mode: light / dark / both

## Typography
- Font family: [name or system stack]
- Scale: compact / default / large
- Heading weights: [e.g. 600, 700]
- Body weight: [e.g. 400]

## Shape & Spacing
- Border radius base: [e.g. 4px / 8px / 9999px]
- Spacing unit: [e.g. 4px]
- Density: compact / default / spacious

## CSS Custom Properties (tokens)
[List all --bb-* tokens derived from the above, e.g.]
--bb-color-primary: #...;
--bb-color-surface: #...;
--bb-radius-base: ...;
--bb-spacing-unit: ...;
--bb-font-family-heading: ...;
--bb-font-family-body: ...;
```

---

## Step 3 — Install the frontend-design Skill

Before generating CSS files, install the `frontend-design` skill by running:

```bash
npx skills add https://github.com/anthropics/skills --skill frontend-design
```

Activate it before writing any CSS file.

---

## Step 4 — Generate CSS Files

Using the theme document and the `frontend-design` skill, generate the following CSS files under `resources/css/`:

### Files to create

| File | Purpose |
|------|---------|
| `resources/css/tokens.css` | All CSS custom properties (--bb-* tokens) derived from the theme |
| `resources/css/typography.css` | Font imports, heading/body styles, type scale |
| `resources/css/layout.css` | Grid, container, breakpoints, spacing utilities |
| `resources/css/components/buttons.css` | BbButton overrides |
| `resources/css/components/inputs.css` | BbTextInput, BbTextarea, BbSelect, BbNumberInput overrides |
| `resources/css/components/feedback.css` | BbAlert, BbBadge, BbChip, BbToast, BbProgress overrides |
| `resources/css/components/navigation.css` | BbTab, BbAccordion, BbBreadcrumbs, BbPagination overrides |
| `resources/css/components/overlays.css` | BbDialog, BbDropdown, BbPopover, BbTooltip overrides |
| `resources/css/components/data-display.css` | BbTable, BbAvatar, BbIcon overrides |

### Rules for CSS generation

- All values must reference `tokens.css` custom properties — no hardcoded hex or px values.
- Use `resources/css/showroom.css` as a reference for how component overrides are currently structured in this project.
- Scope component overrides to the component's rendered HTML structure. Read `./node_modules/bitboss-ui/dist/ai/[ComponentName].md` before overriding a component.
- Do not use `!important` unless strictly necessary for specificity.
- Each file must import `tokens.css` at the top: `@import './tokens.css';` (adjust path for nested files).

---

## Step 5 — Import in Main Entry

Add all generated files to the main CSS entry point (typically `resources/css/app.css`). Check the existing imports structure before adding.

---

## Completion Checklist

- [ ] Theme document created at `./docs/internal/ui/theme.md`
- [ ] `frontend-design` skill installed and activated
- [ ] `tokens.css` generated with all custom properties
- [ ] `typography.css` generated
- [ ] `layout.css` generated
- [ ] Component CSS files generated under `resources/css/components/`
- [ ] All files imported in the main CSS entry point
