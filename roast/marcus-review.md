# Marcus Tan — Product Designer Review

**Assignment:** Visual hierarchy, CTAs, whitespace, mobile responsiveness, load time. What's broken?

---

## Verdict: The design system is strong. Execution has 6 fixable problems.

---

### What Works

The color system is genuinely sophisticated. Bone paper (#ECE7DC) + near-black ink (#14130F) + oxblood (#A8341B) is a distinctive combination that communicates premium without shouting. Almost no competitor in B2B SaaS consulting is doing this.

Newsreader italic for display + Geist for body is an excellent pairing. The editorial rhythm — section marks, rails, hairline rules — creates a visual language that is unlike anything in the category. The framework grid (F-01 through F-04) with corner labels is the best-designed section on the page.

---

### What's Broken

**1. The logo mark is catastrophically generic.**

The nav logo is a CSS circle with a dot in the center. On a website that charges premium consulting rates and uses the word "architecture," the brand mark looks like it was made in a free logo generator. The mismatch between the sophisticated editorial design system and the generic circle-dot mark is the single biggest visual credibility problem on the page.

There is a logo-v1.svg in the project with a diamond inside the circle, which is significantly better. The current CSS mark doesn't even use the diamond. This should be the inline SVG from logo-v1, not a CSS div.

**2. The hero `<br>` tags will break on mobile.**

The h1 uses hardcoded `<br>` tags:
```
Your pipeline is not failing<br>
because of effort.
```
On viewports between ~480–700px, this creates a forced line break that produces awkward orphans or clips text. The heading should wrap naturally via CSS max-width, not hardcoded HTML breaks.

**3. There is no favicon.**

Zero. Nothing. When someone bookmarks this page, shares it on Slack, or opens it in a tab, there is a blank browser icon. For a site positioning itself as premium and credible, this is embarrassing. It takes 10 minutes to fix.

**4. CTA fatigue — 9 "Book a diagnostic" instances on a single scroll.**

Count them: hero (1), diagnosis callout (2), framework card (3), engagement 01 (2), engagement 02 (1), engagement 03 (1), faq section (1), final CTA (2). The visitor is asked to book a diagnostic before they have read enough to want to. By the 4th or 5th repetition the button has lost all weight. Conversion buttons need scarcity to retain meaning.

**5. The stats in the hero do not survive scrutiny.**

"$200M+ · Pipeline influenced" appears as a headline stat. The case studies on the same page show $2M+ in revenue contribution. The order-of-magnitude gap will be noticed by every analytical B2B buyer this site is trying to attract. "Pipeline influenced" vs "revenue contribution" is a meaningful distinction, but a first-time visitor will not make that distinction — they will make a note that the numbers do not add up.

**6. The services grid (8 tiles) from a 2-person firm creates a credibility gap.**

Eight capability areas — Strategy, Brand, Demand, Authority, Lifecycle, AI, Web, Events — from two operators. At premium pricing. The ambition is admirable. The presentation is not. A prospect who is evaluating whether to trust this firm with their pipeline will look at 8 tiles and think: "Which of these will actually get Rachit's attention?"

---

### Minor Issues

- No OG image for social/Slack sharing — the link preview will be blank
- The `<br>` in the hero is also present in display-2 headings in some sections — same problem
- The mobile nav uses Newsreader italic at large sizes, which is good, but the close button (×) is not visually prominent enough
- The `.diag-card--dark` section has good use of contrast but the CTA button within it has `style="background:var(--accent)"` inline — this should live in CSS

---

### One Fix That Would Change the Most

**Swap the CSS circle-dot brand mark for the logo-v1 inline SVG with the diamond.** The rest of the design is working. The mark is the one element actively damaging credibility.
