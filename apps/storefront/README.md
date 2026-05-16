# Red Window Art — Storefront

**Chinese Heritage Paper-Cut Art for Home & Gifting**

A premium e-commerce brand bringing Yuxian paper-cutting — a UNESCO-recognized Intangible Cultural Heritage — to homes around the world.

GitHub repository: `yuxian-paper-art`

## About

Red Window Art is a cross-border e-commerce brand offering handcrafted Yuxian paper-cut artworks for modern homes, meaningful gifts, and blessings that carry cultural stories. This is the custom Next.js storefront.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Fonts**: Playfair Display (headings), Lora (body)
- **Icons**: Lucide React
- **Data**: Local mock products (current phase)

## Pages

| Route | Page |
|---|---|
| `/` | Homepage — Hero, Featured Collections, Choose by Meaning, Craft Story, Gifts, Featured Artworks, Trust Bar, Newsletter |
| `/products` | Artwork listing with grid layout |
| `/products/[slug]` | Artwork detail with craft narrative, cultural story, dimensions, materials |
| `/blessings` | Shop by blessing meaning — Prosperity, Love, Protection, Health, Harmony, Joy |
| `/story` | Our Story — the heritage and craft of Yuxian paper-cutting |
| `/journal` | Cultural stories, artisan spotlights, gift inspiration |
| `/about` | About the brand, mission, and curation philosophy |
| `/contact` | Contact form, wholesale and gift concierge |
| `/cart` | Shopping cart static UI |
| `/checkout` | Checkout placeholder |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Current Status

**Task Pack 01.5 — Brand Foundation & Homepage Visual Finalization**: Complete.

- Brand repositioned to "Red Window Art"
- Meaning-driven navigation: Shop, Gifts, Home Decor, Blessings, Our Story, Journal
- Homepage restructured around user purchase motivations (meaning, gifting, home decor)
- Brand foundation documented in `docs/10-brand-foundation-red-window-art.md`
- Medusa backend is **not yet connected**
- No real payment integration

## Next Steps

Phase 2 will initialize the Medusa commerce backend with PostgreSQL and Redis.

## Project Structure

```
apps/storefront/src/
├── app/                  # App Router pages
│   ├── page.tsx          # Homepage (10 modules)
│   ├── products/         # Artwork listing & detail
│   ├── blessings/        # Shop by meaning
│   ├── story/            # Our Story
│   ├── journal/          # Cultural content
│   ├── about/            # About us
│   ├── contact/          # Contact
│   ├── cart/             # Shopping cart
│   └── checkout/         # Checkout placeholder
├── components/           # Reusable UI components
├── data/products.ts      # Mock product data
├── types/product.ts      # TypeScript type definitions
└── lib/utils.ts          # Utility functions
```

## Visual Design

| Token | Value | Usage |
|---|---|---|
| Parchment | `#F7F1E5` | Page background |
| Ink | `#171412` | Primary text |
| Walnut | `#3B2A1F` | Secondary text, navigation |
| Vermilion | `#B73A2F` | CTAs, accents, hero emphasis |
| Gold | `#C9A45C` | Borders, labels, decorative |
| Cream | `#FFF9EF` | Card backgrounds |
| Sand | `#E7D8C3` | Borders, dividers |