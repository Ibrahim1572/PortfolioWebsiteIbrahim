# Portfolio Design Specification

**Subject:** Personal portfolio for a Web Developer / AI-ML Engineer
**Audience:** Recruiters, hiring managers, and fellow engineers scanning quickly for proof of skill
**Primary job of the page:** Let someone understand who you are and what you've built in under a minute, without ever losing sight of your identity while they scroll.

This document is the design contract for the build. Sources referenced throughout: **Web 1** (brittanychiang.com — two-column layout), **Web 2** (Yuji Sato react-portfolio-template — header/hero treatment, career timeline), **Web 3** (Cleanfolio — project cards, skills/contact pattern). Two of these three (Web 2, Web 3) are client-rendered SPAs that couldn't be fetched directly, so their sections in this spec are built from the six screenshots supplied rather than live HTML — flagged here per your instruction not to assume beyond what I could actually verify.

---

## 1. Design Principles

1. **One accent, spent deliberately.** Amber-red (`#CC310E`) appears on interactive elements, the timeline nodes, the photo ring, and active states — never as a background wash or gradient. Everything else stays a disciplined neutral.
2. **The left column is the anchor; the right column is the proof.** Identity (photo, name, role, links) never moves. Evidence (history, projects, skills, contact) scrolls independently underneath it.
3. **Structure encodes meaning, not decoration.** The career history uses a timeline because it's genuinely sequential. Nav labels are literal wayfinding. Nothing is capitalized or bordered just for texture.
4. **One motion moment, not motion everywhere.** A single load-in reveal for the identity panel; every other motion is a direct response to a hover or click, never a scroll-triggered fade-up on each section.
5. **Warm accent against a cool neutral base.** Both the light and dark neutrals lean cool (slight blue-gray undertone); the accent is warm red-orange — a genuine complementary relationship, not a trend color.

---

## 2. Color System

Your three source colors form the entire backbone. Everything below is derived from them — no new hues introduced.

### Light mode

| Token | Hex | Use |
|---|---|---|
| `color-canvas` | `#C1C9CA` | Page background, left column background |
| `color-surface` | `#E7EAEA` | Right-column content panels, project cards |
| `color-surface-raised` | `#F4F5F5` | Hover state on cards/pills, innermost elevated surface |
| `color-border` | `#A9B3B4` | Card borders, dividers |
| `color-border-subtle` | `#B7BFC0` | Hairlines, timeline connector |
| `color-text-primary` | `#12151C` | Headings, body text *(reuses your dark-mode base — intentional symmetry)* |
| `color-text-secondary` | `#454C53` | Descriptions, secondary copy |
| `color-text-muted` | `#6D757B` | Timestamps, meta labels |
| `color-accent` | `#CC310E` | Buttons, icons, active nav, timeline nodes, photo ring |
| `color-accent-hover` | `#A6280B` | Hover/pressed states; also used for small accent-colored *text* on light backgrounds (needed for AA contrast — see §7) |
| `color-accent-subtle-bg` | `#F3D9D2` | Tinted background behind active nav item / badges |

### Dark mode

| Token | Hex | Use |
|---|---|---|
| `color-canvas` | `#12151C` | Page background, left column background |
| `color-surface` | `#1B1F29` | Right-column content panels, project cards |
| `color-surface-raised` | `#242A38` | Hover state on cards/pills |
| `color-border` | `#2C3240` | Card borders, dividers |
| `color-border-subtle` | `#232833` | Hairlines, timeline connector |
| `color-text-primary` | `#C1C9CA` | Headings, body text *(reuses your light-mode base — same symmetry, inverted)* |
| `color-text-secondary` | `#8B93A0` | Descriptions, secondary copy |
| `color-text-muted` | `#5B6270` | Timestamps, meta labels |
| `color-accent` | `#CC310E` | Buttons, icons, active nav, timeline nodes, photo ring, large text |
| `color-accent-light` | `#FF7A52` | Small inline links/text on dark backgrounds — the base accent alone is ~3.4:1 against `#12151C`, fine for large text/icons but not small text; this lighter tint clears AA |
| `color-accent-subtle-bg` | `#3A1B14` | Tinted background behind active nav item / badges |

**Why this works:** both neutral bases share the same cool blue-gray undertone, and the swap of primary text ↔ background between modes (light bg uses dark-mode's color as its text, and vice versa) keeps the two themes feeling like one system, not two unrelated palettes. The accent is the single warm note against an otherwise desaturated, cool page — the complementary contrast is what gives it presence without needing a gradient.

---

## 3. Typography

Two families, clearly distinct roles, both chosen for their "engineered" pedigree rather than defaulting to Inter (now itself a template tell):

| Role | Typeface | Weight(s) | Notes |
|---|---|---|---|
| Display / Headings | **Space Grotesk** | 500, 700 | Name in left column, section titles, job titles — geometric but with enough character to carry personality |
| Body / UI | **IBM Plex Sans** | 400, 500, 600 | Bio copy, nav links, descriptions, buttons |
| Meta / Tags / Code | **IBM Plex Mono** | 400, 500 | Tech-stack tags, dates, timestamps — same type family as the body face, so it reads as one considered system rather than a bolted-on monospace |

### Type scale (base 16px, ~1.25 ratio)

| Token | Size | Line-height | Used for |
|---|---|---|---|
| `text-micro` | 12px | 1.4 | Tag pills, timestamps |
| `text-sm` | 14px | 1.5 | Nav links, meta |
| `text-base` | 16px | 1.6 | Body copy |
| `text-lg` | 20px | 1.5 | Card titles, job titles |
| `text-xl` | 25px | 1.3 | Sub-section headers |
| `text-2xl` | 31px | 1.2 | Section headers (About, History, Projects, Skills, Contact) |
| `text-display` | clamp(2.25rem, 4vw, 3.25rem) | 1.1 | Name, in the fixed left column |

Line length capped at ~72 characters for body paragraphs (bio, project descriptions) per standard readability guidance.

---

## 4. Layout

### Desktop (≥1024px) — ASCII wireframe

```
┌──────────────────────────────────────────────────────────────────┐
│  ☀/☾                                                    (fixed)   │  ← top utility bar, full width, 60px
├───────────────────────────┬────────────────────────────────────--┤
│                           │                                      │
│      ●●●●●●●●             │   ABOUT                              │
│     ●  photo  ●           │   ─────────────────────────          │
│      ●●●●●●●●             │   Bio paragraph(s)...                │
│                           │                                      │
│      Your Name            │   HISTORY                            │
│      Role / Title         │        ●──┐ Current Role             │
│      One-line tagline     │        │  └─ dates, location, focus  │
│                           │   Job ─●                              │
│      [GitHub] [LinkedIn]  │        │  ┌─ dates, location, focus  │
│                           │        ●──┘ Earlier Role              │
│      — ABOUT              │                                      │
│        HISTORY            │   PROJECTS                            │
│        PROJECTS           │   ┌────────────┐ ┌────────────┐      │
│        SKILLS             │   │ card        │ │ card        │     │
│        CONTACT            │   └────────────┘ └────────────┘      │
│                           │                                      │
│   (fixed — does not       │   SKILLS                              │
│    scroll)                │   [pill][pill][pill][pill]...        │
│                           │                                      │
│                           │   CONTACT                             │
│                           │   [Email Me] [LinkedIn] [Résumé]     │
│                           │                                      │
│                           │        ↕ this column scrolls only    │
└───────────────────────────┴──────────────────────────────────────┘
        ~38% width                    ~62% width
```

- **Top utility bar:** fixed, full width, 60px tall, `color-canvas` at ~92% opacity with backdrop blur, 1px `color-border-subtle` bottom hairline. Contains only the theme toggle (sun/moon icon swap). See §8 for why nav isn't duplicated here.
- **Left column:** fixed width (~420px) or ~38% on larger screens, `position: fixed` (or `sticky` spanning full remaining viewport height), background `color-canvas`, no independent scrollbar — its content is short enough to always fit.
- **Right column:** remaining width, `overflow-y: auto`, own scrollbar, background `color-surface` for its content blocks against the `color-canvas` page.
- Alignment: left-aligned throughout. No centered text blocks — centered copy (as in the raw Cleanfolio placeholder cards) reads fine for lorem ipsum but hurts scannability for real project descriptions, so this spec deviates from the reference screenshot there intentionally.

### Mobile (<1024px)

Single column, everything scrolls together — the fixed/scroll split is a desktop-only affordance. Left column content collapses into a top block (photo, name, role, tagline, social icons), immediately followed by a horizontally scrollable pill-style nav (About · History · Projects · Skills · Contact), then all sections stack in order beneath it.

---

## 5. Component Specifications

### 5.1 Top utility bar
- Height 60px, fixed, full width, above both columns.
- Left-aligned theme toggle: circular icon button, 36px, sun icon in light mode / moon icon in dark mode, `color-text-secondary` default → `color-accent` on hover/focus.
- `aria-label="Toggle color theme"`, respects `prefers-color-scheme` on first load, persists choice after that.

### 5.2 Left column — Identity panel
- **Photo:** circular, 140–160px diameter, duotone treatment using `color-text-primary` (shadows) and `color-canvas`/white (highlights) rather than a flat grayscale filter — ties the photo into the palette instead of sitting outside it. 2px `color-accent` ring, offset 3px from the image edge.
- **Name:** `text-display`, Space Grotesk 700, `color-text-primary`.
- **Role/title:** `text-lg`, Space Grotesk 500, `color-text-secondary`.
- **Tagline:** one line, `text-base`, `color-text-secondary`.
- **Social row:** GitHub + LinkedIn as simple outline icon buttons, 40px, `color-text-secondary` default → filled `color-accent` background with `color-canvas` icon on hover.
- **Section nav:** vertical list, `text-sm`, Space Grotesk 500, uppercase (justified here — this is literal wayfinding copied directly from your reference sites, not a decorative eyebrow label). Inactive items `color-text-muted`; active item `color-text-primary` with a short horizontal rule in `color-accent` to its left, matching Web 1's active-indicator pattern.

### 5.3 About (right column, first section)
- `text-2xl` header "About."
- 2–3 short paragraphs, `text-base`, `color-text-secondary`, max ~72 characters per line. Bold inline treatment (Space Grotesk 600, `color-text-primary`) only on company/organization names — mirroring Web 1's pattern of bolding proper nouns, not random emphasis words.

### 5.4 Career History (timeline / tree)
- `text-2xl` header "History."
- Vertical center line (`color-border-subtle`, 2px) running the height of the section.
- Circular nodes, 40px, `color-accent` fill, white/canvas icon (briefcase or similar), placed on the line at each entry.
- Cards alternate left/right of the line on desktop (stack in one column on mobile), each containing: role title (`text-lg`, Space Grotesk 600), location (`text-sm`, `color-text-muted`), date range (`text-sm`, IBM Plex Mono, `color-text-muted`), and a short comma-separated list of focus areas (`text-base`, `color-text-secondary`).
- Card background `color-surface`, 1px `color-border`, no shadow (flat, consistent with the rest of the page — avoids the generic soft-drop-shadow SaaS-card look).

### 5.5 Projects
- `text-2xl` header "Projects."
- **2-column grid** (per your note that 2 is enough for this layout), gap ~24px, single column on mobile.
- Card anatomy, top to bottom:
  1. Title — `text-lg`, Space Grotesk 600, left-aligned
  2. Description — 2–3 lines, `text-base`, `color-text-secondary`
  3. Tech-stack tags — small `text-micro` pills, IBM Plex Mono, `color-surface-raised` background, `color-text-secondary` text, no accent color here (tags stay quiet so the accent doesn't get diluted)
  4. Icon row — GitHub icon (repo link) + external-link icon (live demo), `color-text-secondary` → `color-accent` on hover
- Card background `color-surface`, 1px `color-border`; on hover, border transitions to `color-accent` and the card lifts 2px (interaction-triggered motion — not a scroll animation).

### 5.6 Skills
- `text-2xl` header "Skills."
- Grid of static pill buttons matching the reference screenshot: `color-surface-raised` background, 1px `color-border`, `text-sm` IBM Plex Mono label, `color-text-primary`.
- **Suggested addition** given you're presenting both a web-dev and AI/ML identity: split into two labeled clusters — "Web Development" and "AI / ML" — each a sub-header (`text-sm`, `color-text-muted`, sentence case, not another all-caps label) above its own pill row. This is optional; a single flat grid also works if you'd rather not split identities visually. Flagged in §8 as a decision for you.

### 5.7 Contact
- `text-2xl` header "Contact."
- Three outline pill buttons, centered as a row (stacked on mobile): **Email Me**, **LinkedIn**, **View Résumé**.
- Default state: transparent background, 1px `color-accent` border, `color-accent` text. Hover: fills solid `color-accent`, text becomes `color-canvas`.

---

## 6. Motion

- **One load-in moment only:** on first paint, the left column's photo, name, and role fade + rise in over ~500ms, staggered slightly (photo first, then text, then social icons). This never replays on scroll or theme toggle.
- **Interaction-triggered only, everywhere else:** project card hover (lift + border color), nav active-state transition, button fills, theme toggle icon swap. No scroll-linked fade-ups on sections — that pattern is the most common tell of a templated/AI-generated page and is deliberately excluded here.
- All transitions 150–200ms, ease-out.
- `prefers-reduced-motion: reduce` disables the load-in animation entirely and drops hover transitions to instant state changes.

---

## 7. Accessibility & Quality Floor

- Visible keyboard focus ring on every interactive element (2px `color-accent` outline, 2px offset).
- Text contrast: use `color-accent-hover` (light mode) / `color-accent-light` (dark mode) instead of the base accent for any small accent-colored *text* — the base `#CC310E` only clears ~3:1 against both canvas colors, which is fine for large text, icons, and borders (WCAG large-text/UI threshold) but not small body text.
- Semantic landmarks: `<header>` for the utility bar, `<nav>` for the section links, `<main>` wrapping the right column, each section labelled via `aria-labelledby` pointing at its heading.
- Fully responsive down to ~360px width.

---

## 8. Assumptions & Open Questions

A few calls I made to keep this buildable — flag anything you'd rather change:

1. **No duplicate navigation.** Web 2's top bar had both a theme toggle *and* nav links (Expertise/History/Projects/Contact). Since Web 1's left column already carries section nav, I kept the top bar to just the toggle to avoid redundant chrome. If you'd actually prefer the nav links live in the top bar instead of (or in addition to) the left column, tell me and I'll restructure §5.1/§5.2.
2. **Skills grouping (web dev vs. AI/ML)** is proposed as optional in §5.6 — confirm if you want it split into two clusters or kept as one flat grid.
3. **Content is not yet specified** — this document is purely the visual/structural system. When you're ready, I'll need your actual name, role, bio, work history, project details, skill list, and contact links to populate it.
4. **Career History layout** assumes alternating left/right cards on desktop (as in the screenshot); let me know if you'd prefer all cards on one side of the line instead.

---

*Next step, when you're ready: I can scaffold this as an actual HTML/React build. Given how many interactive/scroll-behavior details are involved (independent-scroll columns, theme persistence, the timeline), this is also a good fit for Claude Code if you'd rather iterate on it locally.*
