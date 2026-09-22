# The Traffic Law Firm — Client Requirements Checklist

> Extracted from: **WEBSITE 2.docx** (12 pages, 19 embedded images)
> Document analyzed: 2026-09-15
> Status legend: ✅ Ready | ⚠️ Partial | ❌ Blocked | 🔲 Not Started

---

## 1. GLOBAL NAVIGATION

### REQ-1.1: Six Navigation Items
- **Client instruction**: "SIX OPTIONS ENG & SPANISH Button: (1) Home (2) Practice Areas (3) About Us (4) Reviews/Testimonials (5) Contact Details (6) Submit Citation"
- **Existing implementation**: 7 items — Home, Services, Citations, Violations, About, FAQ, Contact (in [Navbar.jsx](file:///g:/Projects/Websites/trafic-ticket-management/src/components/layout/Navbar.jsx) lines 315-323)
- **Required source files**: `src/components/layout/Navbar.jsx`
- **Required assets**: TLF logo (`docs/docx-images/image3.png`)
- **Implementation**: Replace existing nav items with the 6 requested. Map "Services" → "Practice Areas", "Contact" → "Contact Details". Remove Citations, Violations, FAQ from top nav (content remains accessible via footer and internal links).
- **Verification**: Desktop nav shows exactly 6 items; mobile drawer shows same 6
- **Status**: 🔲

### REQ-1.2: Practice Areas Dropdown
- **Client instruction**: "Practice Areas (with Drop Box): Civil Traffic Infractions, Criminal Traffic and Crime Cases, Civil and Commercial Litigation"
- **Existing implementation**: No dropdown exists; "Services" is a flat link to `/services`
- **Required source files**: `src/components/layout/Navbar.jsx`, `src/components/services/ServiceCategories.jsx`
- **Implementation**: Add hover/click dropdown under "Practice Areas" with 3 sub-items linking to respective sections
- **Verification**: Dropdown opens on hover (desktop) and tap (mobile); each link navigates correctly
- **Status**: 🔲

### REQ-1.3: About Us Dropdown
- **Client instruction**: "About Us (with Drop Box): Lizette P. Benitez, Leo Benitez"
- **Existing implementation**: No dropdown; "About" is a flat link to `/about`
- **Required source files**: `src/components/layout/Navbar.jsx`
- **Implementation**: Add dropdown with 2 attorney names linking to anchored sections on `/about` page
- **Verification**: Dropdown opens; clicking attorney name scrolls to their bio section
- **Status**: 🔲

### REQ-1.4: Centered Logo Navigation Layout
- **Client instruction**: "Please refer to the Boschetti Real Estate Website" (image1: split navigation with centered logo)
- **Existing implementation**: Logo on left, nav items on right (standard layout)
- **Required assets**: TLF 3D logo
- **Implementation**: Implement Boschetti-style centered logo with nav items split left and right
- **Verification**: Logo centered between nav groups on desktop; standard mobile layout
- **Status**: 🔲

### REQ-1.5: English/Spanish Toggle
- **Client instruction**: "THE ENGLISH AND SPANISH BUTTON SHOULD BE ON THE TOP RIGHT CORNER"
- **Existing implementation**: No language toggle exists. No localization system.
- **Required source files**: New `LanguageToggle.jsx` component
- **Required assets**: None (text-based toggle)
- **Implementation**: Create EN/ES toggle button in top-right. EN works fully. ES shows "Coming Soon" — no Spanish translations exist.
- **Missing content**: ❌ All Spanish translations
- **Verification**: Toggle renders in top-right corner; clicking ES shows notification; clicking EN is default
- **Status**: 🔲

### REQ-1.6: Secondary Navigation Labels
- **Client instruction**: "Home | Our Services | About Us | THE TRAFFIC LAW FIRM | Reviews/Testimonials | Contact Us | Hire Us"
- **Existing implementation**: Different labels used
- **Implementation**: This line from the doc appears to be the client's vision of the full centered-logo nav bar. "Our Services" = Practice Areas, "Contact Us" = Contact Details, "Hire Us" = Submit Citation. The centered logo reads "THE TRAFFIC LAW FIRM". Not 7 separate nav items — the logo is in the center position.
- **Verification**: Layout matches this visual arrangement
- **Status**: 🔲

---

## 2. HOME PAGE

### REQ-2.1: Active Video Background
- **Client instruction**: "ACTIVE VIDEO OF CITY AND THE TRAFFIC LAW FIRM name in the middle, like above" and "I want it active (moving highway). Please send me a few options during the daytime. Of the 2 that you sent me, I prefer this one."
- **Existing implementation**: Static image hero with text + image grid layout ([Hero.jsx](file:///g:/Projects/Websites/trafic-ticket-management/src/components/sections/Hero.jsx))
- **Required assets**: `public/assets/images/highway-video.mp4` (13.8 MB, already exists ✅)
- **Implementation**: Replace image hero with fullscreen looping muted autoplay video. "THE TRAFFIC LAW FIRM" centered over video. Dark overlay for text readability. Still-image poster fallback. `prefers-reduced-motion` support.
- **Verification**: Video autoplays on load; text is readable; fallback shows on reduced-motion
- **Status**: 🔲

### REQ-2.2: TLF Name Centered in Video
- **Client instruction**: "THE TRAFFIC LAW FIRM name in the middle"
- **Existing implementation**: "Got a Traffic Ticket? Submit It Immediately." hero text
- **Implementation**: Replace hero heading with "THE TRAFFIC LAW FIRM" prominently centered. Can add tagline "Here to Defend You" below.
- **Verification**: Firm name visible and centered over video at all breakpoints
- **Status**: 🔲

### REQ-2.3: Logo and Road Swoosh on Other Pages
- **Client instruction**: "The LOGO AND INITIALS (interactive with road swope) can go on the other 5 option pages that don't have an active photo."
- **Existing implementation**: No road swoosh animation exists
- **Required assets**: TLF logo with swoosh (`docs/docx-images/image3.png`)
- **Implementation**: Use TLF 3D logo as hero element on non-video pages (Practice Areas, About Us, Reviews, Contact, Hire Us) with subtle CSS animation on the swoosh
- **Verification**: Logo appears as header branding on inner pages
- **Status**: 🔲

### REQ-2.4: Alternative Photo Reference
- **Client instruction**: "I liked this other photo. Maybe use it somewhere else." (image18: Miami nighttime skyline with highway)
- **Existing implementation**: Not used
- **Required assets**: `docs/docx-images/image18.png` (Miami night skyline)
- **Implementation**: Use as CTA banner or section background on home page
- **Verification**: Image appears in appropriate section
- **Status**: 🔲

---

## 3. PRACTICE AREAS

### REQ-3.1: Three Practice Areas
- **Client instruction**: "DROP BOX - CIVIL TRAFFIC INFRACTIONS, CRIMINAL TRAFFIC AND CRIME CASES, CIVIL AND COMMERCIAL LITIGATION"
- **Existing implementation**: [ServiceCategories.jsx](file:///g:/Projects/Websites/trafic-ticket-management/src/components/services/ServiceCategories.jsx) has generic service categories
- **Implementation**: Replace with 3 specific practice areas as clickable cards/sections. Link Civil Traffic to existing violations/infractions data. Link Criminal Traffic to existing criminal violations data.
- **Verification**: 3 practice areas displayed; each links to relevant content
- **Status**: 🔲

### REQ-3.2: Traffic Stop Photo with TLF Logo
- **Client instruction**: "STILL PHOTO RELATED TO TRAFFIC STOP AND IN THE MIDDLE TLF LOGO"
- **Existing implementation**: No such hero exists on services page
- **Required assets**: `docs/docx-images/image4.png` (traffic stop scene) OR `public/assets/images/attorney-photographs.png` (has TLF logo overlaid)
- **Implementation**: Full-width hero with traffic stop photo, TLF logo centered
- **Verification**: Photo displays with logo overlay, responsive scaling
- **Status**: 🔲

### REQ-3.3: Practice Area Literature
- **Client instruction**: "For the literature on these 3 specialties, I want to refer to my old website to see what I wrote and make edits as needed. Otherwise, I will come up with something to write."
- **Existing implementation**: `citations/page.jsx` contains Traffic Infraction and Criminal violation lists. `violations.js` contains detailed descriptions.
- **Missing content**: ⚠️ Client wants to review/edit old website content. Civil and Commercial Litigation has no existing content.
- **Implementation**: Use existing violation/citation content for Civil Traffic and Criminal Traffic sections. Add placeholder for Civil and Commercial Litigation marked `[Content pending client review]`.
- **Verification**: First two sections have substantive content; third has clear placeholder
- **Status**: ⚠️ Partial (Civil & Commercial Litigation content missing)

---

## 4. ABOUT US — MEET OUR ATTORNEYS

### REQ-4.1: Joint Attorney Photo Hero
- **Client instruction**: "I would like a photo of Leo and I in this option. Our logo can go on the far-left hand corner... where they have $1 Billion, we can add MEET OUR ATTORNEYS. The drop box can go on the far-right top corner. Underneath the photo we can write about TLF. The blue background is nice."
- **Existing implementation**: [about/page.jsx](file:///g:/Projects/Websites/trafic-ticket-management/src/app/(pages)/about/page.jsx) → `FirmStory` + `AttorneyBio` + `Experience` + `Results` + `AboutCTA`
- **Required assets**: Need a joint photo of Lizette and Leo. Currently have individual headshots only. `attorney-photographs.png` is a traffic stop scene, not a joint portrait.
- **Missing content**: ⚠️ No joint photo of both attorneys together exists in assets
- **Implementation**: Use individual headshot images side by side with dark blue background. TLF logo top-left. "MEET OUR ATTORNEYS" heading. Attorney selector dropdown top-right. Firm story text below.
- **Verification**: Blue background hero, logo visible, heading prominent, dropdown functional
- **Status**: ⚠️ (no joint photo available — using side-by-side individual photos)

### REQ-4.2: Clickable Attorney Portraits
- **Client instruction**: "When you click on 'Meet our Attorneys' it takes you to this page with both our pictures. You then click on the photo of the atty you want to read about." (reference: image6 — Boschetti side-by-side agent cards)
- **Existing implementation**: `AttorneyBio.jsx` shows both bios inline (Lizette first, Leo second)
- **Required assets**: `Lizette P. Benitez.png`, `Leo Benitez.png` (exist ✅)
- **Implementation**: Side-by-side clickable portrait cards. Lizette: "Owner founder of The Traffic Law Firm". Leo: "Owner founder of Benitez Law". Clicking navigates to individual bio section.
- **Verification**: Both portraits render side by side; clicking each scrolls/navigates to bio
- **Status**: 🔲

### REQ-4.3: Lizette Bio Page Layout
- **Client instruction**: "REMOVE ALL OF THIS & CENTER THE PHOTO WITH THE CAPTION UNDERNEATH THAT READS MEET LIZETTE. REMOVE WHAT'S WRITTEN ON THE BOTTOM" (reference: image7 — Boschetti "MEET SILVIA" layout)
- **Existing implementation**: Two-column layout with photo left, stats right
- **Implementation**: Centered photo, "MEET LIZETTE" caption below, clean biography layout. Remove stat boxes.
- **Verification**: Photo centered, caption "MEET LIZETTE" visible, bio text flows cleanly
- **Status**: 🔲

### REQ-4.4: Lizette Biography Content
- **Client instruction**: Full biography provided in DOCX:
  > "Lizette Benitez is the founder of The Traffic Law Firm and a native of Miami, Florida. With more than three decades of legal experience, Lizette has built her practice on dedication, personal attention, and a strong commitment to fighting for her clients.
  > Lizette earned her Juris Doctor degree from New England School of Law in Boston, Massachusetts, in 1989. She began her legal career practicing criminal law and, within two years, established her own practice, which has grown into one of Miami's longest-standing traffic law firms.
  > Fluent in both English and Spanish, Lizette has earned a reputation for her strategic thinking, strong advocacy, and determination to achieve the best possible results for her clients. Her dedication to her clients has created a legacy of trust that spans generations. Many of the clients she represented early in her career have returned over the years, with their children and grandchildren now seeking her guidance and representation.
  > Lizette has built The Traffic Law Firm around the belief that every client deserves exceptional service, professionalism, and individualized attention. Her team is committed to making every client feel heard, respected, and confident that their case is in capable hands. No one is treated as just another client, but as family."
- **Existing implementation**: Different, shorter bio in `AttorneyBio.jsx` line 36-41
- **Implementation**: Replace existing bio with client-supplied text verbatim
- **Verification**: Biography matches the DOCX text word-for-word
- **Status**: 🔲

### REQ-4.5: Leo Biography
- **Client instruction**: "Leo's bio will be sent later."
- **Existing implementation**: Placeholder bio exists in `AttorneyBio.jsx` lines 95-101 mentioning "Benitez & Associates in 1995" and commercial/civil/criminal litigation
- **Implementation**: Keep existing placeholder content. Add clear `[Full biography pending — content to be provided by client]` marker.
- **Missing content**: ❌ Leo's biography not yet provided
- **Verification**: Leo's section exists with placeholder, marker is visible
- **Status**: ⚠️ (using existing placeholder until client supplies bio)

---

## 5. REVIEWS AND TESTIMONIALS

### REQ-5.1: Reviews Page
- **Client instruction**: "Any photo of the courthouse or legal photo is good. Video testimonial under photo and reviews under that. Maybe use a drop box?"
- **Existing implementation**: No dedicated `/reviews` page. Home page has `Testimonials.jsx` with 3 hardcoded reviews.
- **Required assets**: `docs/docx-images/image8.jpeg` (courthouse photo ✅)
- **Implementation**: Create new `/reviews` page with courthouse hero, video testimonials section, written reviews section
- **Verification**: Page renders at `/reviews`, courthouse hero visible, sections organized
- **Status**: 🔲

### REQ-5.2: Google and Yelp Review Sources
- **Client instruction**: "VIDEO TESTIMONIALS AND WRITTEN REVIEWS FROM GOOGLE AND YELP. You click on which one you want to see or read."
- **Existing implementation**: No Google/Yelp integration
- **Missing content**: ⚠️ No Google/Yelp API keys or review data. No video testimonials provided.
- **Implementation**: Create tabbed/dropdown interface for Google vs Yelp reviews. Use existing 3 testimonials as placeholder Google reviews. Add Yelp tab with `[Yelp reviews will be integrated]` placeholder. Video testimonials section with `[Video testimonials pending]` placeholder.
- **Verification**: Tabs/dropdown functional; switching shows different content; placeholders clearly marked
- **Status**: ⚠️ (no real review data or video testimonials available)

### REQ-5.3: DDRB Reference Style
- **Client instruction**: "Please refer to Dolan/Dobrinski/Rosenblum/Blustein website" (images 10, 11: hero with attorneys + reviews, grid of review cards with star ratings, dates, Google icon)
- **Implementation**: Model review card layout after DDRB reference — star rating, date, reviewer name, review text, source icon (Google/Yelp)
- **Verification**: Review cards match the grid layout style shown in DDRB reference
- **Status**: 🔲

---

## 6. CONTACT US

### REQ-6.1: Background Photo with Contact Details
- **Client instruction**: "Use the photo below as a background with the CONTACT DETAILS" (image13: woman at traffic stop with phone) + "Please refer to the Boschetti Real Estate Website" (image12: dark overlay contact details)
- **Existing implementation**: Contact page has generic hero + info cards + form + map
- **Required assets**: `public/assets/images/cellphone-image.png` (exists ✅, same as DOCX image13)
- **Implementation**: Full-section background image with dark overlay. Contact details displayed over it per Boschetti style.
- **Verification**: Background image visible, text readable over overlay
- **Status**: 🔲

### REQ-6.2: TLF Logo on Cellphone Screen
- **Client instruction**: "Please put the TLF logo on her cell phone screen!!!!!" (shown with red text annotation on image13)
- **Existing implementation**: Cellphone image exists but has no logo on screen
- **Required assets**: `cellphone-image.png`, TLF logo
- **Implementation**: CSS overlay — position a small TLF logo absolutely over the phone screen area of the background image. This is an approximation; pixel-perfect compositing requires image editing software.
- **Verification**: Logo appears positioned over the phone area in the image
- **Status**: ⚠️ (CSS overlay approach — not pixel-perfect image editing)

### REQ-6.3: Exact Contact Details
- **Client instruction**:
  - THE TRAFFIC LAW FIRM
  - (305) 442-0243
  - THETRAFFICLAWFIRM@GMAIL.COM
  - 122 MINORCA AVENUE CORAL GABLES FL 33134
- **Existing implementation**: Phone correct ✅. Email wrong (shows `info@heretodefendyou.com`). Address correct ✅. Firm name not displayed as header.
- **Implementation**: Update email everywhere (contact page, footer). Add firm name as heading. Make phone clickable (`tel:`), email clickable (`mailto:`).
- **Verification**: All 4 details displayed; phone and email are clickable links; email is correct
- **Status**: 🔲

---

## 7. HIRE US / SUBMIT CITATION

### REQ-7.1: Secretary Video with Firm Name
- **Client instruction**: "Video of message sent to secretary in the office. Superimpose The Traffic Law Firm in the video of the office with secretary receiving the call from the client."
- **Existing implementation**: No video hero on submit-ticket page. `secretary-video.mp4` exists in assets ✅.
- **Required assets**: `public/assets/images/secretary-video.mp4` (4.2 MB ✅)
- **Implementation**: Add video hero section at top of submit-ticket page. "The Traffic Law Firm" text overlaid. Existing form preserved below.
- **Verification**: Video plays with text overlay; scrolling reveals existing form unchanged
- **Status**: 🔲

### REQ-7.2: Hire Us Dropdown
- **Client instruction**: "DROP BOX with ability to hire us."
- **Existing implementation**: Submit-ticket page has a comprehensive multi-step wizard form
- **Implementation**: Add a dropdown/selector above the form (e.g., "How can we help? → Traffic Citation | Criminal Case | Civil Litigation") that feeds into the existing form workflow.
- **Verification**: Dropdown renders; selection is functional; existing form logic untouched
- **Status**: 🔲

### REQ-7.3: Road Swoosh Animation
- **Client instruction**: "VIDEO OF SWOPE ON THE TRAFFIC LAW FIRM IN THIS OPTION GOES WELL."
- **Implementation**: CSS animation on TLF logo swoosh element — a path-drawing or sweep animation. Applied on the Hire Us page header.
- **Verification**: Swoosh animation plays on page load; respects reduced-motion
- **Status**: 🔲

### REQ-7.4: Preserve Existing Submit Citation Form
- **Client instruction**: (implicit — do not break existing functionality)
- **Existing implementation**: `submit-ticket/page.jsx` (2,878 lines, 67 KB) — comprehensive multi-step wizard with photo upload, violation selection, county picker, fee calculation, Supabase submission, Converge payment integration
- **Required source files**: `submit-ticket/page.jsx`, `TrafficTicketWizard.jsx`, `ContactTrafficTicketForm.jsx`, `TicketCode.jsx`, all API routes, `supabase.js`, `violations.js`, `counties.js`
- **Implementation**: DO NOT MODIFY form logic. Only add hero wrapper above existing content.
- **Verification**: Full form workflow still functional — steps navigate, fields validate, submission works
- **Status**: 🔲

---

## 8. BRAND IDENTITY & VISUAL REFINEMENT

### REQ-8.1: Color Palette Change
- **Client instruction**: "I like these color combinations. White background, suggestions?" + Logo images show blue (#1B3A5C), gold (#C5A55A), white, gray
- **Existing implementation**: Orange (#f97316) accent on white/dark backgrounds throughout 20+ components
- **Implementation**: Global find-and-replace of orange color references with blue primary and gold accent. Update CSS custom properties. Update Tailwind classes.
- **Verification**: No orange remaining in rendered UI; consistent blue/gold/white throughout
- **Status**: 🔲

### REQ-8.2: 3D TLF Logo
- **Client instruction**: "Below is a sample logo. It's 3 dimensional... blue, white/grey and gold. It is three dimensional and it stands out."
- **Required assets**: `docs/docx-images/image3.png` (large 3D TLF logo ✅)
- **Implementation**: Copy to `public/assets/images/tlf-logo-3d.png`. Use as primary logo.
- **Verification**: 3D logo appears in navbar, footer, hero sections
- **Status**: 🔲

### REQ-8.3: White Backgrounds
- **Client instruction**: "White background, suggestions?"
- **Existing implementation**: Dark mode enabled via ThemeProvider and next-themes
- **Implementation**: Default to light/white theme. Remove dark mode toggle from visible UI. Keep dark CSS definitions for future use but don't expose toggle.
- **Verification**: All pages render with white/light backgrounds by default
- **Status**: 🔲

### REQ-8.4: Professional Typography
- **Client instruction**: (implied by reference sites — clean, premium, uppercase headings)
- **Existing implementation**: Geist Sans/Mono fonts with Arial fallback
- **Implementation**: Keep Geist Sans (clean, professional). Add letter-spacing for headings. Use uppercase for section labels.
- **Verification**: Typography is clean and professional throughout
- **Status**: 🔲

---

## 9. RESPONSIVE DESIGN

### REQ-9.1: Mobile Navigation
- **Required breakpoints**: 320px, 375px, 768px, 1024px, 1440px
- **Implementation**: Mobile drawer with all 6 nav items, nested dropdowns for Practice Areas and About Us, EN/ES toggle, CTA buttons
- **Verification**: Nav works at all breakpoints; no horizontal overflow; dropdowns functional
- **Status**: 🔲

### REQ-9.2: Video Hero Responsive
- **Implementation**: Video scales to viewport; text remains readable; mobile gets smaller text sizes
- **Verification**: Video fills viewport on all sizes; text doesn't overflow
- **Status**: 🔲

### REQ-9.3: Attorney Photos Responsive
- **Implementation**: Side-by-side on desktop, stacked on mobile
- **Verification**: Photos scale properly at all breakpoints
- **Status**: 🔲

### REQ-9.4: Contact Background Responsive
- **Implementation**: Background image with `object-cover` and `object-position` for optimal framing at all sizes
- **Verification**: Woman and phone visible at all breakpoints
- **Status**: 🔲

---

## 10. ACCESSIBILITY

### REQ-10.1: Keyboard Navigation
- **Implementation**: All dropdowns, toggles, and interactive elements keyboard-accessible. Focus ring visible. Escape closes dropdowns/modals.
- **Status**: 🔲

### REQ-10.2: Reduced Motion
- **Implementation**: Video hero shows still poster with `prefers-reduced-motion`. AOS animations disabled.
- **Status**: 🔲

### REQ-10.3: Semantic HTML
- **Implementation**: Proper `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>` usage. ARIA labels on interactive elements.
- **Status**: 🔲

---

## MISSING CONTENT INVENTORY

| Item | Status | Action |
|---|---|---|
| Leo Benitez biography | ❌ Not provided | Use existing placeholder + marker |
| Spanish translations (all pages) | ❌ Not provided | EN/ES toggle shows "Coming Soon" for ES |
| Practice Areas literature (old website) | ⚠️ Partially available | Use existing citation/violation content |
| Civil & Commercial Litigation content | ❌ Not provided | Placeholder with marker |
| Video testimonials | ❌ Not provided | Placeholder section |
| Google/Yelp review integration | ❌ No API keys/data | Placeholder tabs with mock data |
| Joint photo of Lizette and Leo | ❌ Not in assets | Use side-by-side individual headshots |
| Graphic designer logo link | ❌ Client couldn't find | Use DOCX-embedded logos |
| Old website content for review | ❌ Not accessible | Use existing project content |

---

## REQUIREMENT COUNT SUMMARY

| Category | Total | Ready | Partial | Blocked |
|---|---|---|---|---|
| Navigation | 6 | 5 | 0 | 1 (ES translations) |
| Home Page | 4 | 3 | 0 | 1 (night photo placement TBD) |
| Practice Areas | 3 | 2 | 1 | 0 |
| About Us | 5 | 3 | 2 | 0 |
| Reviews | 3 | 1 | 2 | 0 |
| Contact Us | 3 | 2 | 1 | 0 |
| Hire Us | 4 | 4 | 0 | 0 |
| Brand Identity | 4 | 4 | 0 | 0 |
| Responsive | 4 | 4 | 0 | 0 |
| Accessibility | 3 | 3 | 0 | 0 |
| **TOTAL** | **39** | **31** | **6** | **2** |

