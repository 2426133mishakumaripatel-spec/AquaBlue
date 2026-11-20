# Project memory

## Product intent & audience

- E-commerce site for **Aqua Blue**, a packaged drinking water brand
- Core flows: product catalog, shopping cart, checkout, and direct WhatsApp ordering
- Audience: retail customers ordering water online

## Brand personality & voice

- Clean, refreshing, trustworthy water-brand identity
- User communicates in Gujarati (romanized); assistant has responded bilingually (English + Gujarati)

## Visual design & UX direction

- Aqua/water-themed palette (blues, cyans, whites) inferred from brand name "Aqua Blue"
- **Logo must have a transparent background** — no black or solid fill behind logo artwork
- Logo used in both header and footer with transparent variant
- Responsive layout; production-quality, non-cookie-cutter UI
- Stack: Vite + React, Tailwind CSS, Lucide React icons, `@/` path alias for `src/`

## Decisions, constraints & rationale

- Transparent logo asset replaces original black-background version to blend with site backgrounds
- Header and footer logo references updated to point at cleaned transparent asset
- Production build verified after logo change
- WhatsApp integration chosen for direct ordering (low-friction, local-market friendly)

## Open questions & assumptions

- Exact product variants and pricing not yet documented
- Checkout flow details (payment vs. WhatsApp-only ordering) unconfirmed
- Whether transparent logo is final asset or will be replaced with official brand file
- Color system and typography scale not yet explicitly defined