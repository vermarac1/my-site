# Fix List — ScaleBuz Website

**Source:** 5-person expert panel review, May 2026
**File reviewed:** my-site/index2.html

---

## P0 — Launch Blockers (fix before deploying)

### P0-1: Remove the $200M+ pipeline stat
**File:** index2.html, hero stats section
**Problem:** "$200M+ Pipeline influenced" appears as a headline stat while case studies on the same page show $2M+ revenue contribution. The order-of-magnitude gap will be flagged by every analytical B2B buyer this site targets. Even with "pipeline influenced" vs "revenue attributed" as a distinction, the unexplained gap creates doubt that contaminates every other number on the page.
**Fix:** Replace with the verifiable, case-study-backed stat. Change to `$2M+` with label `Revenue attributed to pipeline` — this matches the AgreeYa case study exactly and is defensible. Remove the "50+ Global campaigns delivered" stat (filler, no outcome context) and replace with "8 Companies · Marketing built from zero" which is specific and verifiable.

### P0-2: Add a favicon
**File:** index2.html `<head>`
**Problem:** No favicon. Any link share (Slack, WhatsApp, email) shows a blank icon. Bookmarks show blank. Unprofessional at launch.
**Fix:** Add an inline SVG favicon to `<head>` using the brand mark (ink circle + oxblood diamond).

### P0-3: Fix hero h1 hardcoded `<br>` line breaks
**File:** index2.html, hero section h1
**Problem:** `<br>` tags force line breaks at specific points that will produce awkward orphans or text overflow on mobile viewports (320–600px range).
**Fix:** Remove `<br>` from h1. Add `max-width` CSS constraint to the h1 and let it wrap naturally. The display-1 font size already handles visual hierarchy without forced breaks.

### P0-4: Change "Operators" to "Team" in the nav
**File:** index2.html, nav links (desktop and mobile)
**Problem:** "Operators" is not immediately parseable to a first-time visitor. It reads as operations team, CIA operators, or brand jargon. Navigation labels must be universally clear. First-time visitors are skipping the section entirely.
**Fix:** Change nav label from "Operators" to "Team" in both the desktop nav and mobile nav. The section ID and section header can keep the brand language internally.

---

## P1 — Important (fix soon)

### P1-1: Reduce CTA repetition from 9 to 3
**File:** index2.html, multiple sections
**Problem:** "Book a diagnostic" appears 9 times. CTA depletion — after the 3rd or 4th instance, the button has lost psychological weight. Converting visitors requires scarcity of the ask, not repetition.
**Fix:** Keep 3 CTAs: (1) hero, (2) after case files (strongest proof section), (3) final CTA section. Remove or replace mid-page CTAs in the Diagnosis callout, Framework card, and each individual Engagement tier with lower-friction secondary links ("Learn more →" style or no CTA at all).

### P1-2: Describe the Diagnostic Call in the CTA section
**File:** index2.html, final CTA section and/or FAQ
**Problem:** The entire conversion mechanism is "Book a 30-minute Diagnostic Call" but there is no description of what happens before/during/after. Cold visitors (the ones this site most needs to convert) don't know what they're clicking into.
**Fix:** Add 2–3 sentences to the final CTA section or as a FAQ answer: what to prepare, who they'll speak with, what the "one specific observation" means in practice, what happens after the call.

### P1-3: Replace CSS circle-dot logo mark with logo-v1 inline SVG diamond mark
**File:** index2.html, nav and footer brand sections
**Problem:** The CSS `.brand-mark` is a plain circle with a dot — generic, indistinguishable from any startup's placeholder logo. The editorial design system is sophisticated; the mark undermines it. logo-v1.svg has a diamond inside the circle which is distinctive.
**Fix:** Replace the CSS div-based mark in both nav and footer with inline SVG using the logo-v1 diamond design (circle + polygon + center dot). Hardcode design-system hex values.

### P1-4: Trim services section or add scope framing
**File:** index2.html, services section
**Problem:** 8 service tiles from 2 operators looks like a 50-person agency rate card. It signals either strategic confusion or overreach, both of which damage the "senior operators accountable for everything" positioning.
**Fix:** Either reduce to 5 core services (remove AI Automation, Events & Webinars, Website & Digital — all of which are outside the core revenue architecture story) OR add a framing line above the grid: "The following are components of a full Pipeline Architecture Sprint. They are available standalone when the strategic diagnosis has already been completed."

### P1-5: Add one human voice moment (first person)
**File:** index2.html, methodology or hero section
**Problem:** Zero first-person writing anywhere on the site. The product is a person. The credibility is a person. "We" throughout reads as institutional performance from a 2-person firm. One direct statement in Rachit's voice would do more for conversion than any copy polish.
**Fix:** Add a pull quote or a single paragraph in first person in the methodology section: something like "I have been inside this problem eight times. Each time, the issue wasn't effort — it was an architecture that hadn't been designed to produce pipeline. That pattern is why ScaleBuz exists."

---

## P2 — Nice to Have

### P2-1: OG image for social sharing
Add a 1200×630 image for OpenGraph. The current link preview when shared on Slack or LinkedIn will be blank. A simple typographic OG image with the brand mark and positioning line would serve.

### P2-2: Hero eyebrow label cleanup
"Index 01 — Revenue Architecture / B2B SaaS · FinTech · NaaS · IT" reads like an internal file label. Either remove the "Index 01" numbering system from the hero eyebrow (it makes sense in section headers but not in the very first element a visitor reads) or replace with something that communicates faster: "Revenue Architecture · B2B SaaS · India & Global".

### P2-3: FAQ structured data markup
Add `application/ld+json` schema for FAQPage. This improves Google rich snippet eligibility and is a 15-minute implementation.

### P2-4: Sticky CTA for long scrollers
After 50% scroll depth, a sticky bottom bar with "Book the diagnostic →" would capture visitors who are engaged but haven't found the right CTA moment. Low effort, meaningful conversion lift on mobile.
