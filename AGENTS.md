# AGENTS.md — boaappstudio.com (site)

This repository is the **Boa Apps Studio marketing and legal site** (Next.js, `https://boaappstudio.com`). It is not a Flutter app.

Studio-wide product rules still apply where they talk about identity, legal URLs, secrets, metrics, and owner approval. Flutter-only definition-of-done (dart format, goldens, ARB, `scripts/gate.sh`) does **not** apply here.

## What this site must provide

For every shipped app, live pages at:

- `https://boaappstudio.com/apps/<appslug>`
- `https://boaappstudio.com/apps/<appslug>/privacy`
- `https://boaappstudio.com/apps/<appslug>/terms`
- `https://boaappstudio.com/apps/<appslug>/delete-data`

Also: `https://boaappstudio.com/app-ads.txt`, a support page, and sitemap entries. Older routes (`/privacy-policy`, `/terms-of-service`) should redirect to the canonical shape rather than disappear.

Never point a store listing at a personal GitHub Pages legal URL, or leave an app pointing at a different domain (`boaaps.com`, and so on) after the canonical pages exist.

## How you work

- Read this file and `.cursor/rules/` before changing legal or app pages.
- Stay inside the requested change. Do not drive-by redesign the whole site.
- Do not invent metrics. Label figures `observed` or `estimate`.
- Do not commit secrets, real AdMob unit IDs, or API keys.
- Do not publish, change DNS, or submit store listings unless the owner explicitly asked.
- Privacy and delete-data copy must match the app's actual SDKs (ads, purchases, analytics, crash reporting). If an SDK is added or removed, update the matching pages in the same change.

## Definition of done (site)

A page or content change is done only when:

1. The route is reachable, linked from the sitemap, and matches the URL shape above when it is an app legal page.
2. EN and TR are present for legal pages (privacy, terms, delete-data) unless the task is explicitly limited to one locale.
3. Lint / typecheck for the touched area passes (`pnpm` / `npm` scripts already in the repo).
4. No secrets were added.

## Cursor rules in this repo

Added from the Boa standards pack, plus one site-specific rule:

- `.cursor/rules/00-studio-overview.mdc` — studio identity and legal URL policy (always apply)
- `.cursor/rules/learnings.mdc` — evidence-based lessons (always apply)
- `.cursor/rules/store-release.mdc` — store / website blocking checklist (pack original; file globs target `docs/`, so also read `website-pages.mdc`)
- `.cursor/rules/website-pages.mdc` — this repo's URL and publishing constraints (always apply)

Flutter app rules (`flutter-architecture`, `admob`, `revenuecat`, `testing`, `i18n`, `ui-ux-standards`, and so on) are intentionally not copied here.
