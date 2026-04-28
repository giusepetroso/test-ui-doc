---
name: showroom
description: "Sub-skill of bitboss-ui. Generates a component showroom page that previews all themed UI components grouped by category, with fully interactive behavior."
---

# Component Showroom

## Purpose

Generate a single page that renders every bitboss-ui component grouped by category, applying the project theme so the user can visually verify the result end-to-end.

---

## Step 1 — Detect the Stack

Before generating any files, determine the rendering context by reading the project structure:

| Signal | Stack |
|--------|-------|
| `routes/web.php` references `Inertia::render(...)` | Full-stack with Inertia.js |
| `resources/js/Pages/` directory exists | Full-stack with Inertia.js |
| Only `resources/views/` with Blade templates | Blade-only (no Inertia) |
| No Laravel back-end (only `index.html` / Vite entry) | Front-end only (Vue SPA) |

Use this to decide how to create the page (see Step 2).

---

## Step 2 — Create the Showroom Page

### Full-stack with Inertia (Vue 3)

1. Create `resources/js/Pages/Showroom.vue`.
2. Add a route in `routes/web.php`:
   ```php
   Route::get('/showroom', fn () => Inertia::render('Showroom'))->name('showroom');
   ```

### Blade-only

1. Create `resources/views/showroom.blade.php`.
2. Add a route in `routes/web.php`:
   ```php
   Route::get('/showroom', fn () => view('showroom'))->name('showroom');
   ```

### Front-end only (Vue SPA)

1. Create `src/pages/Showroom.vue` (or the equivalent path the project uses for pages).
2. Register the route in the project router file.

---

## Step 3 — Page Layout

Structure the showroom as a single scrollable page with a sticky sidebar for section navigation.

```
┌──────────────┬───────────────────────────────────────┐
│  Sidebar     │  Main content                          │
│  (sticky)    │                                        │
│              │  ## Typography                         │
│  • Typography│  [components...]                       │
│  • Buttons   │                                        │
│  • Inputs    │  ## Buttons                            │
│  • Feedback  │  [components...]                       │
│  • Navigation│                                        │
│  • Overlays  │  ...                                   │
│  • Data      │                                        │
└──────────────┴───────────────────────────────────────┘
```

### Sidebar

- Render section names as small pills (e.g. `<span class="pill">Typography</span>`).
- Each pill is an anchor link that smooth-scrolls to the corresponding section.
- Keep the sidebar minimal and non-invasive: no icons, no heavy borders. A subtle background or left border accent is enough.

### Section structure

Each section must have:
- An `id` attribute matching the sidebar anchor.
- A clear `<h2>` heading.
- A short descriptive subtitle.
- The component grid/list below (see Step 4).

---

## Step 4 — Component Sections

Implement every section listed below. For each component, render a **live, interactive** instance — not a static mockup.

---

### Typography

Display the full type scale using real HTML elements. Show:

- `h1` through `h6` headings.
- Body paragraph (lorem ipsum, ~30 words).
- Small / caption text.
- `<strong>` and `<em>` inline variants.
- A blockquote.
- An inline `<code>` snippet.

---

### Buttons

Show every `BbButton` variant and state:

- Variants: `primary`, `secondary`, `ghost`, `danger` (or whatever the component exposes).
- Sizes: `sm`, `md`, `lg`.
- States: default, `:hover` (just render), `disabled`, `loading` (bind `:loading="true"` on one button).
- Icon button (icon-only, no label).

Wire up a click handler that logs to the browser console so interactivity is verifiable.

---

### Inputs

Show every form input component with **working two-way binding** (`v-model`). Display the current bound value below each input.

Components to include:

| Component | Notes |
|-----------|-------|
| `BbTextInput` | Text, email, and password variants. Show label and optional helper text. |
| `BbTextarea` | Resize handle visible, character count if supported. |
| `BbSelect` | Populate with at least 5 options. |
| `BbNumberInput` | Show min/max/step constraints. |
| `BbCheckbox` | Checked and unchecked. |
| `BbRadioGroup` | Group of 3 options. |
| `BbToggle` (if available) | Bound boolean. |

For each input, also render one instance with `disabled` and one with a validation error state (use the component's error/invalid prop).

---

### Feedback

| Component | What to show |
|-----------|-------------|
| `BbAlert` | All severity variants: `info`, `success`, `warning`, `error`. Each dismissible. Wire the dismiss event to actually remove the alert from the DOM using `v-if`. |
| `BbBadge` | All color/size variants. |
| `BbChip` | Default and removable variant. Wire the remove event. |
| `BbToast` / toast system | A "Trigger toast" button that fires each severity variant. |
| `BbProgress` | Determinate (bind a reactive 0–100 value with a slider or auto-increment) and indeterminate. |

---

### Navigation

| Component | What to show |
|-----------|-------------|
| `BbTab` | A tab group with 3 tabs. Wire active tab state so switching actually changes the visible panel content. |
| `BbAccordion` | 3 items, first one open by default. Wire open/close state. |
| `BbBreadcrumbs` | A realistic 3-level path. |
| `BbPagination` | Bind a reactive `currentPage` value. Wire prev/next and page click. Display current page number. |

---

### Overlays

All overlay components must be **fully interactive** — they must open and close.

| Component | What to show |
|-----------|-------------|
| `BbDialog` | A "Open dialog" button that opens a dialog with a title, body text, confirm button, and cancel button. Wire confirm and cancel to close the dialog. |
| `BbDropdown` | A trigger button that opens a dropdown with at least 3 items. Wire item click to log or show a result. |
| `BbPopover` | A trigger element with a popover containing a short description. |
| `BbTooltip` | Wrap a button or icon with a tooltip. |

---

### Data Display

| Component | What to show |
|-----------|-------------|
| `BbTable` | A table with at least 4 columns and 5 rows of realistic fake data. Include a sortable column if supported. |
| `BbAvatar` | Image variant, initials variant, and fallback variant side by side. |
| `BbIcon` | A grid of 8–12 icons from the available icon set. |

---

## Step 5 — Interactive Logic Guidelines

When implementing interactive behavior, follow these rules:

1. **Declare all reactive state at the top** of `<script setup>` (or in `data()` for Options API) with descriptive names.
2. **Wire every event** — do not render components with dead props. Every `@click`, `@change`, `@close`, `@confirm`, `@dismiss` must be handled.
3. **Show the result** — for inputs, display the bound value below the input. For buttons and actions, update a visible status string or log to console.
4. **Overlay open/close** — use a dedicated `ref` per overlay component, e.g. `const isDialogOpen = ref(false)`.
5. **No placeholder TODOs** — every interactive section must be functional when the file is saved.

---

## Step 6 — Styling Rules

- The showroom page must import (or inherit) the project's CSS entry point so all theme tokens apply automatically.
- Add a `showroom`-scoped stylesheet only for layout (sidebar, section spacing, pill styles). Do not override component styles here.
- Sidebar pills: small, rounded, subtle background (`var(--bb-color-surface)` or similar), no aggressive color. Active section pill gets the primary color accent.
- Section headings use the project's typography scale (apply `h2` or the equivalent heading class).
- Keep a consistent horizontal padding and vertical gap between sections (`var(--bb-spacing-unit)` multiples).

---

## Step 7 — Verify

After generating all files:

1. Run `vendor/bin/sail npm run build` (or the project's equivalent build command) to confirm no compilation errors.
2. Instruct the user to open `/showroom` (or the equivalent route) and verify the page renders correctly.
3. Use `browser-logs` to check for any runtime errors.
