# Project Instructions

## Overview
- **Type**: Single Page Application (React + Vite + TypeScript)
- **Styling**: Tailwind CSS v4 (utility-first, no custom CSS resets needed)
- **UI Libraries**: motion (animations), lucide-react (icons)
- **Dev Server**: Vite with HMR (auto-reloads on save)

## Purpose
Greyscale/black-and-white **clickable wireframes** for the Oral-B 2.0 campaign website. These wireframes focus on **component function and user journey**, not visual design. The style matches the FIFA/Coke wireframe approach: grey boxes, clear labels, black borders, placeholder imagery, functional annotations, ASIN-style product cards.

This is a **2.0 redesign** of an existing Oral-B Amazon Brand Store campaign. The wireframes map the current site structure so we can identify what to update, move, or remove.

This will live as a **tab on the Oral-B Brand Store**: https://www.amazon.com.au/stores/Oral-B/page/10B7816C-F845-4C01-B217-9E5E49D60F36

## Architecture
- Entry point: `src/main.tsx`
- Root component: `src/App.tsx` (single-file wireframe layout with all sections)
- Global styles: `src/index.css` (Tailwind import only)

## Current State — Page Layout (v1 Baseline)
The wireframe maps the existing Oral-B campaign page with these sections (top to bottom):

1. **Amazon Header** — Matches Coke/FIFA wireframe: dark nav (#131921), search bar with yellow icon, Account & Lists, Returns & Orders, Cart. Sub-nav (#232f3e) with All/Deals/Service/etc. Brand Store breadcrumb (Stores / Oral-B / Do More With Brush Time)
2. **Hero Section — Timer Game** — "Stop the clock on exactly 2 mins to WIN an Oral-B iO2" with timer display and Stop Clock CTA
3. **Copy Section** — "Do more with brush time" messaging block
4. **Video Section** — Full-width video player ("Circles Around Cavities" brand video)
5. **Meet Your Oral-B Brush — Interactive** — Model tabs (iO7/iO5/iO3/iO2) at top, copy left, brush center, 6 feature icons right (5 Brushing Modes, A.I. Cleaning Coaching, Magnetic Fast Charging, 2 Minute Timer, Smart Pressure Sensor, Interactive Display)
6. **Product Grid (5×2) — ASIN Cards** — "Shop your favourites" with 10 product cards matching Coke/FIFA style: product image placeholder, title, variant, star rating, review count, price, ASIN ID, yellow "Add to Cart" button
7. **Brand Banner / CTA** — Oral-B iO logo with tagline
8. **Amazon Footer** — Matches Coke/FIFA wireframe: Back to top, 4-column link grid, bottom bar with logo and copyright

Each section is labeled with a black tag in the top-right corner for easy identification.

## Wireframe Style Guide (matches FIFA/Coke project)
- **Greyscale only** — no brand colors, no blue/navy
- **Page background**: #e3e6e6 (Amazon's actual page background)
- **Content area**: max-w-[970px] centered white container (matches real Amazon Brand Store content width)
- **Amazon chrome**: Full-width (max-w-[1500px] for header nav)
- **Section labels** (black tags) on each component
- **Placeholder boxes** for images/logos with text labels like `[Product Image]`
- **Amazon chrome** uses actual Amazon dark colors (#131921, #232f3e, #37475a)
- **Yellow Add to Cart buttons** (#ffd814) — matches Amazon's actual button style
- **ASIN product cards** show: image placeholder, title, variant, star rating, review count, price, ASIN ID, Add to Cart
- **System font stack** (Tailwind defaults — representing Hurme Geometric Sans 1 from brand guidelines)
- **Brand Store nav bar** with tabs (Do More With Brush Time, Power Brushes, Brush Heads, Kids, Deals)

## Brand Guidelines Reference (VIS ID GUIDELINES_ANZ_241119)
- **Typography**: Hurme Geometric Sans 1 (Thin through Black weights)
- **Brand Blue**: PMS 288 (#002D72) + PMS 2935 (#0057B7)
- **Brand White**: #FFFFFF
- **Living Light**: Gradient palette from light grey through light blue to deep navy
- **Shield**: Must use master shield asset with shadow (do not recreate)
- **Oral-B iO Lockup**: Must use master lockup (do not recreate)

## 2.0 Structural Changes (from annotated reference)
1. **Hero/Timer**: Prize copy updated (WIN $10 off), secondary prize TBC, timer is STICKY on scroll
2. **Component order SWAPPED**: Meet Your Brush now comes BEFORE Video section
3. **Meet Your Brush**: Added Kids iO2 range + Brush Heads messaging sections
4. **Product Grid**: Added brush heads and Kids iO2 products to listing (Row 1: 6 products, Row 2: 5 products)
5. **Share section**: Added before footer ("Share this page with your friends")
6. **Brand Store nav**: Added tab navigation matching real Oral-B Brand Store structure

## Key Decisions
- Using single-file App.tsx for the wireframe layout (can split into components later if needed)
- Each section is clearly delineated so we can discuss changes section-by-section
- Labels match the original design sections for easy reference
- Amazon header/footer match the Coke/FIFA wireframe project exactly
- Product cards use ASIN-style layout from Coke/FIFA project
- "Meet Your Brush" section updated to match new design reference (model tabs, feature icons layout)
