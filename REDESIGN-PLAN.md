# Portfolio Redesign Plan

## Reference: cryptogennepal.com
Dark cybersecurity glassmorphism with red neon accents. Mouse-tracking glow orbs on cards. Poppins + Source Code Pro fonts.

---

## Task 1: Change Color Scheme from Green to Red

### Files to modify:

**`src/styles/global.css`**
- Change `--green: #7ee787` → `--red: #ef4444`
- Change `--green-dim: #3fb950` → `--red-dim: #dc2626`
- Update all CSS rules referencing `var(--green)` → `var(--red)`
- Update `--border-hover` if needed

**`src/components/Hero.astro`**
- All `var(--green)` → `var(--red)`
- All `#7ee787` → `#ef4444`
- Gradient: `linear-gradient(135deg,var(--green),var(--cyan))` → `linear-gradient(135deg,var(--red),var(--orange))`
- Typing cursor color
- Matrix rain color: `#7ee787` → `#ef4444`
- CRT overlay accent color

**`src/components/Navigation.astro`**
- Logo `var(--green)` → `var(--red)`
- Mobile menu button hover

**`src/components/About.astro`**
- Terminal prompt color, borders, stat highlights

**`src/components/Skills.astro`**
- Skill tag borders and hover states

**`src/components/Projects.astro`**
- Category badge colors, GitHub link, card borders

**`src/components/Writeups.astro`**
- Category badge colors, difficulty badges

**`src/components/Certifications.astro`**
- Card borders, verify button

**`src/components/Achievements.astro`**
- Card borders, badge colors

**`src/components/Contact.astro`**
- Email link, social link hovers, work authorization highlight

**`src/components/CurrentlyLearning.astro`**
- Accent colors

**`src/components/HotTakes.astro`**
- Border accents

**`src/components/LessonsLearned.astro`**
- Commit message highlights

**`src/components/Mentors.astro`**
- Card borders, starred highlight

**`src/components/Platforms.astro`**
- Platform link colors

**`src/components/Footer.astro`**
- Logo color, email link, terminal hint

**`src/components/Terminal.astro`**
- Prompt color `#7ee787` → `#ef4444`
- Command highlight colors
- Close button
- Scrollbar

**`src/pages/projects/[slug].astro`**
- Why It Matters border, Impact border, tags, tech stack

**`src/pages/writeups/[slug].astro`**
- Tags, content section headers

**`src/pages/certifications/[slug].astro`**
- Verify button, back link

**`src/pages/achievements/[slug].astro`**
- Download button, back link

**`src/pages/projects/index.astro`**
- Section label, heading gradient

**`src/pages/writeups/index.astro`**
- Section label, heading gradient

**`src/pages/privacy-policy.astro`**
- Link colors

**`src/pages/terms-of-use.astro`**
- Link colors

**`src/pages/cookie-policy.astro`**
- Link colors

**`public/admin/index.html`**
- All green references → red

---

## Task 2: Add 3D Anonymous/Hacker Background

### Approach:
- Add a full-page background image behind the hero section
- Use a dark, moody 3D rendered anonymous/hacker figure
- Semi-transparent overlay to maintain readability
- CSS `background-size: cover` + `background-position: center`

### Image options:
1. Generate using AI image tool (if available)
2. Use a free-to-use cybersecurity themed image from Unsplash/Pexels
3. Create an SVG silhouette (less realistic but lightweight)

### Files to modify:
- `src/components/Hero.astro` - Add background image div
- `src/styles/global.css` - Add background image class
- `public/` - Add the image file

---

## Task 3: Add Mouse-Tracking Glow Effects (Bonus from reference)

### Approach:
- Add a JavaScript-driven glow element that follows cursor on cards
- Creates a subtle red glow "scan" effect on hover
- Apply to project cards, writeup cards, certification cards

### Files to modify:
- `src/styles/global.css` - Add glow animation CSS
- `src/components/Projects.astro` - Add glow element + JS
- `src/components/Writeups.astro` - Add glow element + JS
- `src/components/Certifications.astro` - Add glow element + JS

---

## Task 4: Update Fonts to Poppins + Source Code Pro

### Files to modify:
- `src/layouts/BaseLayout.astro` - Change Google Fonts import
- `src/styles/global.css` - Update font-family declarations

---

## Execution Order:
1. Color scheme (all files)
2. Fonts
3. Background image
4. Mouse-tracking glow effects

## Verification:
- Run `npm run build` after each task
- Visual check on localhost
- Push to GitHub after all tasks complete
