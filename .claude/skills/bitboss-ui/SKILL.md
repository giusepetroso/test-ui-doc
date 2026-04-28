---
name: bitboss-ui
description: "Apply this skill when creating or editing frontend code in .vue files. Ensures bitboss-ui components are used instead of writing custom equivalents."
---

# bitboss-ui

## Sub-skills

| Sub-skill | File | When to load |
|-----------|------|--------------|
| theme-builder | [theme-builder.md](./theme-builder.md) | Only when the user explicitly asks to initialize or create a new theme |

---

## When to Apply

Load this skill **only when creating or modifying frontend code inside `.vue` files**.

---

## Rule: Always Use bitboss-ui Components

This project uses the `bitboss-ui` package. When building UI that falls into any of the categories below, you **must** use the corresponding bitboss-ui component. Do not write a custom implementation when a bitboss-ui component already covers the use case.

### Data Display
Use for avatars, icons, and tabular data.
- `BbAvatar` — avatar with fallback slot
- `BbIcon` — SVG icon renderer
- `BbTable` — configurable data table

### Feedback
Use for status messages, badges, loading states, and notifications.
- `BbAlert` — contextual status messages
- `BbBadge` — status counters or notification dot
- `BbChip` — labeled tokens with optional clear action
- `BbProgress` — task/operation progress
- `BbSpinner` — loading/pending indicator
- `BbToast` — transient notifications

### Inputs
Use for any form input of any type.
- `BbButton` — button with loading, tooltip, and icon support (prefer over `BaseButton` in templates)
- `BbTextInput` — single-line text input
- `BbTextarea` — multi-line text input
- `BbNumberInput` — numeric input
- `BbColorInput` — color picker input
- `BbDatePickerInput` — date input with calendar picker
- `BbDropzone` — drag-and-drop file input
- `BbTag` — tag/token input

### Layout & Utility
Use for row-based layouts and animated height transitions.
- `BbRows` — row-based layout blocks
- `BbSmoothHeight` — animated height transitions

### Navigation
Use for accordions, breadcrumbs, pagination, tabs, and trees.
- `BbAccordion` — collapsible content panel
- `BbBreadcrumbs` — hierarchical navigation path
- `BbCollapsible` — toggleable content visibility
- `BbPagination` — paginated data navigation
- `BbTab` — tabbed content views
- `BbTree` — hierarchical expandable tree

### Overlay
Use for modals, dropdowns, popovers, tooltips, and off-canvas panels.
- `BbDialog` — modal dialog
- `BbConfirm` — confirmation dialog
- `BbDropdown` — contextual action menu
- `BbDropdownButton` — button with primary action + dropdown
- `BbOffCanvas` — side-panel overlay
- `BbPopover` — anchored floating content
- `BbTooltip` — contextual helper text on hover
- `BbColorPalette` — anchored color palette popover

### Selection
Use for checkboxes, radios, selects, sliders, switches, and ratings.
- `BbCheckbox` — single boolean toggle
- `BbCheckboxGroup` — grouped checkboxes
- `BbRadio` — single exclusive choice
- `BbRadioGroup` — grouped exclusive choices
- `BbSelect` — single or multi-option select
- `BbSelectPopover` — popover-driven option selection with search
- `BbSlider` — numeric range slider
- `BbSwitch` — two-state toggle switch
- `BbSwitchGroup` — grouped switches
- `BbRating` — scalar rating input

---

## How to Look Up a Component

When you need to understand a component's **API and usage** or its **HTML structure** (e.g. to write targeted CSS):

1. Open `./node_modules/bitboss-ui/dist/ai/index.md`
2. Find the component by name in the index
3. Follow the linked `.md` file (e.g. `./node_modules/bitboss-ui/dist/ai/BbButton.md`)
4. Read the full file — it contains props, slots, events, and rendered HTML structure

Do not guess props or slots. Always read the component's `.md` file first.

> **Note:** Components listed under "Components (Reference Only - Internal)" in the index are internal primitives. Do not use them directly in templates.
