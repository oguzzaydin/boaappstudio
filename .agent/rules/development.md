---
trigger: always_on
---

# ⚙️ NEXT.JS + REACT DEVELOPMENT RULES  
## Developer Website – App Listing Platform

This document defines **mandatory, non-negotiable rules** for developing a developer website using **Next.js** and **React**.

The website is designed to be:
- Google Play reviewer-safe
- Apple App Store reviewer-safe
- Transparent, boring (in a good way), and long-term maintainable

No shortcuts. No improvisation.

---

## 01. Tech Stack Rules (Immutable)

- Framework: **Next.js (App Router only)**
- Language: **TypeScript (strict mode enabled)**
- Styling: **Tailwind CSS**
- State management: **None** (static content only)
- Animations: **Minimal or none**
- Icons: Static SVGs only

❌ Create React App  
❌ Vite  
❌ Pages Router  
❌ Client-side-only rendering  
❌ CSS frameworks other than Tailwind

---

## 02. Rendering Strategy (Mandatory)

- Homepage (`/`) → **Static Site Generation (SSG)**
- App Detail Pages (`/apps/[slug]`) → **SSG**
- Privacy Policy pages → **SSG**
- Support pages → **SSG**

❌ No runtime fetching  
❌ No client-side fetching for core content  
❌ No loading spinners for main pages

---

## 03. Routing & URL Structure (Strict)

Required route structure:

/
/apps
/apps/[app-slug]
/privacy-policy/[app-slug]
/support

Rules:
- Each app **must** have its own detail page
- Each app **must** have its own privacy policy page
- Slugs must be lowercase and kebab-case
- No query-based routing

---

## 04. Data Source Rules (Single Source of Truth)

All app data must come from a **static data layer**:

Allowed:
- JSON files
- Markdown files
- Local static data module

Each app entry must include:
- App name
- Slug
- Description
- Store links (Google Play / App Store)
- Screenshot paths
- Monetization type
- Privacy policy reference
- Support contact

❌ No CMS  
❌ No remote APIs  
❌ No runtime content generation

---

## 05. Homepage Rules (Apps Listing)

Homepage purpose:
> List applications. Nothing else.

Mandatory elements:
- Studio name
- Short neutral tagline
- App listing grid or list
- Each app card must link to its detail page

Forbidden:
- Marketing claims
- Popups
- Newsletter forms
- Cookie banners
- Analytics banners

---

## 06. App Detail Page Rules

Each app detail page **must include**:

1. App header
   - Icon
   - App name
   - Short description
   - Store badges (clickable)

2. Screenshots section
   - Static images only
   - Official store screenshots

3. Description
   - Clear, factual explanation
   - No exaggerated claims
   - Entertainment disclaimer if applicable

4. Monetization transparency
   - Clear statement (e.g. ad-supported)

5. Privacy & Legal
   - Direct link to app-specific privacy policy
   - Optional terms of service

6. Support
   - Visible support email

Forbidden:
- Fake system UI simulations
- Auto-playing media
- Misleading UX patterns

---

## 07. Privacy Policy Rules (Critical)

- Each app must have a **dedicated privacy policy**
- Privacy policy must include:
  - Data collected
  - Advertising usage
  - Third-party SDKs
  - Contact email

Rules:
- Policy content must match:
  - Google Play Data Safety
  - Apple App Privacy form

❌ One generic policy for all apps  
❌ External hosted documents (Google Docs, Notion)

---

## 08. Support Page Rules

Support page must:
- Be accessible without login
- Show a support email clearly
- Avoid ticket systems or chat widgets

Purpose:
> Allow reviewers and users to reach the developer.

---

## 09. Visual & UX Rules

Design principles:
- Neutral colors
- White or light background
- System or modern sans-serif fonts
- Predictable layout

Explicitly forbidden:
- Dark patterns
- Fake urgency
- “Official” or “Certified” claims
- Affiliate links

---

## 10. SEO & Metadata Rules

Each page must include:
- Title
- Meta description
- Canonical URL

Allowed:
- Basic OpenGraph metadata

❌ Aggressive SEO  
❌ Keyword stuffing

---

## 11. Analytics & Tracking Rules

- Analytics are optional
- If used, must be disclosed in privacy policy
- No behavioral tracking without disclosure

---

## 12. Deployment Rules

- Static hosting preferred
- HTTPS mandatory
- Domain email must match support email

---

## 13. Final Principle

This website exists to:
> Prove legitimacy, transparency, and policy compliance.

If a feature does not serve this goal, it must not be implemented.





