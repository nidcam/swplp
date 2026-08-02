# Super Thyroid — Registration Landing Page

Single-page, mobile-first registration page for the free live webinar.
The only backend call is the lead submission — see "Lead submission" below.

## Run

```bash
npm install
```

```bash
npm run dev
```

```bash
npm run build
```

## Stack

React 18 + Vite + Tailwind CSS 3.

> After editing `tailwind.config.js`, restart the dev server. Vite keeps a cached
> Tailwind context, so new theme keys (colours, radii, gradients) silently fail to
> generate until it restarts — `npm run build` is unaffected.

## Structure

```
src/
  lib/webinar.js          WEBINAR_START + all webinar facts (single source of truth)
  lib/countdown.js        Pure countdown maths (getCountdownState)
  hooks/useCountdown.js   Ticks getCountdownState once per second
  hooks/useScrolledPast.js  IntersectionObserver — drives the sticky bar
  context/RegistrationModalContext.jsx  Global open/close for the form modal
  components/
    CountdownTimer.jsx    The ONE timer: hero, sticky bar, CTA band, modal
    RegistrationModal.jsx The registration form (the only form on the site)
    CtaBlock.jsx          Section-level CTA — every section ends with one
    StickyBottomBar.jsx
    BonusCard.jsx
    FormField.jsx         TextField / SelectField / PhoneField
    ui/                   Button, Card, Section, SectionHeading, InfoBadge, Icons
    sections/             One file per page section
```

There is no navigation bar. The only persistent chrome is the sticky bottom bar.

## Registration form

The form is **not** in the page — it lives in `RegistrationModal.jsx` and is
opened by every CTA through `RegistrationModalContext`. The modal locks body
scroll, closes on Escape or backdrop click, moves focus to the first field, and
is `aria-modal`. `CtaBand.jsx` is the accent-gradient conversion band that
carries the offer copy and opens the modal.

## Palette

| Token | Hex | Use |
| --- | --- | --- |
| `night` | `#1C1512` | page background |
| `dusk` | `#231A15` | alternating section background |
| `deep` | `#140F0C` | footer |
| `card` | `#2A2018` | cards |
| `line` | `#3D2F26` | card borders |
| `heading` | `#F5EDE4` | headings |
| `muted` | `#B8AA9C` | body text |
| `accent` | `#D97B5F` | primary accent |

Gradients are defined as `backgroundImage` utilities in `tailwind.config.js`:
`accent-grad` (buttons, timer boxes, check icons), `band-grad` (CTA band),
`card-grad` (modal + CTA card), `page-grad` (hero glow) and `dusk-grad`
(alternating sections). `accent-grad` never goes darker than `#D97B5F`, so dark
ink stays above 4.5:1 across the whole fill.

Corner radii are deliberately restrained: `rounded-card` is 10px and
`rounded-btn` is 8px. Only the testimonial avatar and the loading spinner are
still circular.

The background tokens are named `night`/`dusk` rather than `base`/`alt` because
`text-base` is already a Tailwind font-size utility — a colour named `base` would
silently collide.

**Text on accent fills is dark (`night`), not white.** White on `#D97B5F` is only
3.0:1, which fails AA for anything but large text; dark ink on the same fill is
5.9:1. This applies to the primary buttons, the countdown boxes and the attention
strip. Every text sample on the page was measured — no AA failures.

## Countdown behaviour

One `WEBINAR_START` constant (`2026-08-06T20:00:00+05:30`) drives all three
timers via one `CountdownTimer` component with three size variants:

- `full` — four boxes, hero
- `compact` — four boxes, registration card
- `bar` — hours/minutes/seconds only, sticky bottom bar

The target is always the earlier of the last second of the visitor's current
local day and the webinar start. The day rollover needs no special handling —
the target is recomputed from `now` on every tick. Once `now >= WEBINAR_START`
every instance is replaced with the going-live message and the interval clears.

No evergreen offsets, no `localStorage` / `sessionStorage` / cookies, no reset
on refresh, no looping.

Because registration closes at midnight each day, **DAYS always reads `00`** —
the remaining time is never more than 24 hours. That follows from the specified
rule; if the intent was a countdown to the webinar date itself, change
`getTarget` in `src/lib/countdown.js` to return `WEBINAR_START` directly.

## Sticky bottom bar

Revealed once `#top` (the hero) leaves the viewport, hidden again when the
visitor scrolls back into it, via `IntersectionObserver`. It uses a CSS
*transition* rather than a keyframe animation so its resting visible state is
correct even if the entrance animation never runs. The footer carries extra
bottom padding so the bar never permanently covers content.

## Lead submission

`src/lib/submitLead.js` posts to the multi-tenant Supabase Edge Function at
`${SUPABASE_URL}/functions/v1/submit-lead`, authenticated with the anon
publishable key. `client_slug` is hardcoded to `"super-women-thyroid"` and
`source` to `"lp.myhealthnourish.com"` — this page belongs to exactly one
tenant, so those aren't configurable.

The form has no free-text `message` field — the two MCQ answers
(`biggest_struggle`, `struggle_duration`) are folded into `message` as
`"Biggest struggle: <answer> | Duration: <answer>"` since the Edge Function has
no dedicated slot for them.

`RegistrationModal.jsx` calls `submitLead` from `handleSubmit`:

- **submitting** — button shows a spinner and is disabled; a second submit is a
  no-op.
- **success** — shows the "You're registered!" state, then redirects to the
  WhatsApp group after `REDIRECT_DELAY_MS`.
- **error** — `submitLead` rejects (network failure, or `{ success: false,
  error }` from the function) → an inline `role="alert"` message renders above
  the button, the button re-enables, and every field the visitor typed stays
  exactly as they left it. Editing any field clears the error so they can retry
  cleanly.

No other backend call exists anywhere on this page.

## Images

The four images live in `public/` and are referenced as `/b1.webp`, `/b2.webp`,
`/b3.webp`, `/nirmala.webp`. Vite serves `public/` at the site root, so the
`/public/...` prefix must not be included in the URL.
