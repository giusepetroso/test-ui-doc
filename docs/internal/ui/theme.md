# Theme Definition

## App Context

App di consulenza nutrizionale per professionisti (nutrizionisti). Interfaccia usata da esperti del settore per gestire pazienti, piani alimentari e referti clinici. L'utente è un professionista della salute che vuole precisione, efficienza e uno strumento che trasmetta autorevolezza.

## Mood

**Pulito · Professionale · Giovanile**

L'interfaccia evoca un laboratorio di ricerca nutrizionale di alta gamma: strumenti di precisione con una veste calda e viva. Rigore scientifico senza freddezza clinica. La palette verde rimanda alla natura, all'alimentazione sana e alla crescita — senza scivolare nel cliché del "benessere consumer".

## Color System

- **Primary**: `#1E6B3D` — verde foresta profondo, autorevole e professionale
- **Primary accent**: `#3BAA6E` — verde giada fresco, usato per highlights e stati attivi
- **Surface background**: `#F8FAF8` — bianco con caldissima tinta verde, quasi impercettibile
- **Panel**: `#FFFFFF` — bianco puro per card e form
- **Border**: `#C5D9CC` — bordo verde-grigio tenue
- **Text primary**: `#1A2620` — quasi nero con tinta verde scura
- **Text muted**: `#52685C` — grigio-verde per label e hint
- **Semantic**:
  - Success: `#1E6B3D` (coincide con il primary)
  - Error/Danger: `#C8302A`
  - Warning: `#B45309`
  - Info: `#1D4ED8`
- **Mode**: light only

## Typography

- **Font heading**: Plus Jakarta Sans (Google Fonts) — moderna, geometrica ma umanista, professionale e leggibile. Weights: 600, 700.
- **Font body**: DM Sans (Google Fonts) — estremamente leggibile, leggermente umanista, non fredda. Weight: 400, 500.
- **Scale**: compact
- **Heading weights**: 700 (h1–h2), 600 (h3–h6)
- **Body weight**: 400, medium 500

## Shape & Spacing

- **Border radius base**: `8px` — abbastanza morbido da sentirsi fresco e giovane, abbastanza netto da restare professionale
- **Spacing unit**: `4px`
- **Density**: compact (input h: 32px, label spacing ridotto)

## CSS Custom Properties (tokens)

```css
/* Primary */
--bb-primary-base: #1E6B3D;
--bb-primary: var(--bb-primary-base);
--bb-primary-dark: #5CB88A;
--bb-contrasting: #ffffff;
--bb-contrasting-dark: #000000;
--bb-danger: #C8302A;

/* Surface */
--bb-panel-light: #ffffff;
--bb-panel: var(--bb-panel-light);
--bb-panel-disabled-light: #EEF4F0;
--bb-panel-disabled: var(--bb-panel-disabled-light);

/* Border */
--bb-border-light: #C5D9CC;
--bb-border: var(--bb-border-light);

/* Text */
--bb-text-light: #1A2620;
--bb-text: var(--bb-text-light);

/* Shape */
--bb-radius: 8px;

/* Compact inputs */
--bb-input-h: 32px;
--bb-input-compact-h: 26px;
--bb-input-py: 3px;
--bb-input-compact-py: 1px;
--bb-input-spacing: 6px;
--bb-label-spacing-y: 4px;
--bb-label-compact-spacing-y: 3px;

/* Icon & hint colors */
--bb-input-color: #1A2620;
--bb-icon-color: #52685C;
--bb-hint: #52685C;

/* Custom semantic */
--color-primary: #1E6B3D;
--color-primary-light: #3BAA6E;
--color-surface: #F8FAF8;
--color-surface-raised: #ffffff;
--color-border: #C5D9CC;
--color-text: #1A2620;
--color-text-muted: #52685C;
--color-success: #1E6B3D;
--color-warning: #B45309;
--color-error: #C8302A;
--color-info: #1D4ED8;
```
