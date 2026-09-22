# The Traffic Law Firm — Implementation Plan

> Based on: `docs/client-requirements.md` (39 requirements extracted)
> Project: Next.js 16.2.7 / Tailwind v4 / Supabase / App Router
> Baseline build: ✅ Passes (52 pages, 6 API routes)

---

## Execution Order

Work proceeds incrementally. Each phase completes and verifies before the next.

---

### Phase A — Asset Preparation & Color System

**Goal**: Set up new brand assets and color palette before touching components.

| # | Task | Files | Priority |
|---|---|---|---|
| A1 | Copy DOCX logos to public/assets/images | `tlf-logo-3d.png`, `tlf-logo-white-bg.png`, `tlf-icon.png` | HIGH |
| A2 | Copy courthouse image for reviews page | `courthouse.jpg` | HIGH |
| A3 | Copy Miami nighttime skyline for CTA | `miami-night.png` | LOW |
| A4 | Update `globals.css` — new color system (blue/gold) | `src/app/globals.css` | HIGH |
| A5 | Remove dark theme as default; keep light only | `src/app/globals.css`, `layout.js` | HIGH |

**Verify**: Build passes after CSS changes.

---

### Phase B — Navigation Overhaul

**Goal**: Implement the 6-item centered-logo navigation with dropdowns and EN/ES toggle.

| # | Task | Files | Reqs |
|---|---|---|---|
| B1 | Create `LanguageToggle.jsx` (EN/ES switch) | NEW `src/components/LanguageToggle.jsx` | REQ-1.5 |
| B2 | Rewrite `Navbar.jsx` — centered logo, 6 items, dropdowns | `src/components/layout/Navbar.jsx` | REQ-1.1–1.6 |
| B3 | Update `Footer.jsx` — firm name, email, blue/gold colors | `src/components/layout/Footer.jsx` | REQ-6.3, REQ-8.1 |
| B4 | Update `layout.js` — metadata, remove theme toggle | `src/app/layout.js` | REQ-8.3 |

**Verify**: Build passes. Nav renders 6 items. Dropdowns open/close. Mobile drawer works. Logo centered.

---

### Phase C — Home Page Video Hero

**Goal**: Replace static hero with fullscreen video background.

| # | Task | Files | Reqs |
|---|---|---|---|
| C1 | Rewrite `Hero.jsx` — video hero with highway-video.mp4 | `src/components/sections/Hero.jsx` | REQ-2.1, 2.2 |
| C2 | Update section colors in home page components | `TrustBadges.jsx`, `HowItWorks.jsx`, `ViolationCategories.jsx`, `WhyChooseUs.jsx`, `Statistics.jsx`, `Testimonials.jsx`, `FAQ.jsx`, `CTABanner.jsx`, `ImageBanner.jsx` | REQ-8.1 |
| C3 | Update `home/page.jsx` if needed | `src/app/(pages)/home/page.jsx` | — |

**Verify**: Build passes. Video autoplays. Text readable. Fallback works. All sections blue/gold.

---

### Phase D — Practice Areas

**Goal**: Implement 3 practice areas with traffic stop photo hero.

| # | Task | Files | Reqs |
|---|---|---|---|
| D1 | Rewrite `ServiceCategories.jsx` — 3 practice areas | `src/components/services/ServiceCategories.jsx` | REQ-3.1 |
| D2 | Add traffic stop hero to services page | `src/app/(pages)/services/page.jsx` | REQ-3.2 |
| D3 | Add content from existing violations/citations data | `ServiceCategories.jsx` | REQ-3.3 |

**Verify**: Build passes. 3 practice areas display. Links work. TLF logo on hero.

---

### Phase E — About Us / Meet Our Attorneys

**Goal**: Implement attorney profiles per client specifications.

| # | Task | Files | Reqs |
|---|---|---|---|
| E1 | Rewrite `about/page.jsx` — blue hero, "MEET OUR ATTORNEYS", attorney cards | `src/app/(pages)/about/page.jsx` | REQ-4.1, 4.2 |
| E2 | Rewrite `AttorneyBio.jsx` — centered photos, "MEET LIZETTE"/"MEET LEO", full bios | `src/components/about/AttorneyBio.jsx` | REQ-4.3, 4.4, 4.5 |
| E3 | Update `FirmStory.jsx` — "opened its doors over thirty years ago" | `src/components/about/FirmStory.jsx` | REQ-4.1 |
| E4 | Update `Experience.jsx`, `Results.jsx`, `AboutCTA.jsx` colors | 3 files | REQ-8.1 |

**Verify**: Build passes. Joint display works. Lizette bio matches DOCX. Leo has placeholder marker.

---

### Phase F — Reviews & Testimonials

**Goal**: Create new reviews page with courthouse hero and review tabs.

| # | Task | Files | Reqs |
|---|---|---|---|
| F1 | Create `reviews/page.jsx` | NEW `src/app/(pages)/reviews/page.jsx` | REQ-5.1, 5.2, 5.3 |
| F2 | Update existing `Testimonials.jsx` colors | `src/components/sections/Testimonials.jsx` | REQ-8.1 |

**Verify**: Build passes. `/reviews` route works. Tabs/dropdown switch between Google/Yelp. Placeholders clearly marked.

---

### Phase G — Contact Us

**Goal**: Implement cellphone background contact page with client details.

| # | Task | Files | Reqs |
|---|---|---|---|
| G1 | Rewrite contact hero — background photo, dark overlay, contact details | `src/app/(pages)/contact/page.jsx` | REQ-6.1, 6.2, 6.3 |
| G2 | CSS logo overlay on phone screen | `contact/page.jsx` or CSS | REQ-6.2 |
| G3 | Update email everywhere | `contact/page.jsx`, `Footer.jsx` | REQ-6.3 |

**Verify**: Build passes. Background image renders. Contact details correct. Phone/email clickable. Logo positioned over phone area.

---

### Phase H — Hire Us / Submit Citation

**Goal**: Add secretary video hero to existing submit-ticket page without breaking form logic.

| # | Task | Files | Reqs |
|---|---|---|---|
| H1 | Add video hero wrapper to `submit-ticket/page.jsx` | `src/app/(pages)/submit-ticket/page.jsx` | REQ-7.1 |
| H2 | Add case-type dropdown above form | `submit-ticket/page.jsx` | REQ-7.2 |
| H3 | Add TLF swoosh animation CSS | `globals.css` or component | REQ-7.3 |

**Verify**: Build passes. Video hero displays. Form logic 100% preserved. All existing submission workflow functional.

> [!CAUTION]
> `submit-ticket/page.jsx` is 2,878 lines (67 KB). Only add a hero wrapper at the top. Do NOT modify any form fields, validation logic, step navigation, Supabase calls, or payment integration.

---

### Phase I — Shared Components & Cleanup

**Goal**: Update remaining shared components and ensure color consistency.

| # | Task | Files | Reqs |
|---|---|---|---|
| I1 | Update `FloatingCTA.jsx` colors | `src/components/shared/FloatingCTA.jsx` | REQ-8.1 |
| I2 | Update `MobileBottomBar.jsx` colors | `src/components/shared/MobileBottomBar.jsx` | REQ-8.1 |
| I3 | Update `faq/page.jsx` colors | `src/app/(pages)/faq/page.jsx` | REQ-8.1 |
| I4 | Update `citations/page.jsx` colors | `src/app/(pages)/citations/page.jsx` | REQ-8.1 |
| I5 | Update violation components colors | `ViolationsGrid.jsx`, `ViolationHero.jsx`, etc. | REQ-8.1 |

**Verify**: Build passes. No orange colors remaining. Consistent blue/gold throughout.

---

### Phase J — Final QA

**Goal**: Run all checks and verify everything works.

| # | Task | Command/Action |
|---|---|---|
| J1 | Production build | `npx next build` |
| J2 | Lint check | `npx biome check` |
| J3 | Navigation verification | All 6 items, dropdowns, mobile drawer |
| J4 | Responsive testing (code-level) | Check all components have responsive classes for 320–1440px |
| J5 | Link verification | All nav links, attorney links, contact links, form links |
| J6 | Accessibility check | Keyboard nav, focus rings, aria labels, reduced-motion |
| J7 | Create final report | Summary of completed/blocked requirements |

---

## Files Modified Summary

| Category | Files | Action |
|---|---|---|
| **CSS/Config** | `globals.css`, `layout.js` | Modify |
| **Navigation** | `Navbar.jsx`, `Footer.jsx` | Modify |
| **New Components** | `LanguageToggle.jsx` | Create |
| **New Pages** | `reviews/page.jsx` | Create |
| **Hero** | `Hero.jsx` | Modify |
| **Practice Areas** | `ServiceCategories.jsx`, `services/page.jsx` | Modify |
| **About** | `about/page.jsx`, `AttorneyBio.jsx`, `FirmStory.jsx`, `Experience.jsx`, `Results.jsx`, `AboutCTA.jsx` | Modify |
| **Contact** | `contact/page.jsx` | Modify |
| **Submit Ticket** | `submit-ticket/page.jsx` | Modify (hero only) |
| **Section Colors** | 9 section components | Modify |
| **Shared Colors** | `FloatingCTA.jsx`, `MobileBottomBar.jsx` | Modify |
| **Other Pages** | `faq/page.jsx`, `citations/page.jsx` | Modify |
| **Assets** | 4 images copied from DOCX | Create |
| **UNTOUCHED** | All API routes, Supabase config, violations.js, counties.js, TicketCode.jsx, form components, payment components | Preserve |

**Total**: ~25 files modified/created, ~15 files preserved untouched

