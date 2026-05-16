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
- **Fonts**: Georgia (headings), system-ui (body)
- **Icons**: Lucide React + design SVG assets
- **Data**: Local mock products (current phase)

## Pages

| Route | Page |
|---|---|
| `/` | Homepage — 10 modules aligned to Red Window Art design reference |
| `/products` | Artwork listing with grid layout |
| `/products/[slug]` | Artwork detail with craft narrative, cultural story |
| `/blessings` | Shop by blessing meaning |
| `/story` | Our Story — heritage and craft of Yuxian paper-cutting |
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

**Task Pack 04 — Homepage High-Fidelity Implementation**: Complete.

- Homepage visual baseline aligned to Red Window Art design reference
- 10 modules implemented in order: Header → Hero → Featured Collections → Choose by Meaning → Craft Story → Meaningful Gifts → Featured Artworks → Trust Bar → Newsletter → Footer
- Hero features CSS/SVG home scene (framed paper-cut on wall, wooden cabinet, vase with branches, warm lighting, window shadows)
- Design SVG assets integrated: logo, navigation icons, meaning icons, trust icons
- Color system updated per design tokens: `#9F1D1D` brand red, `#8F1717` footer red, `#6B3F1D` wood tone
- Fonts changed to Georgia (headings) + system-ui (body)
- Container width: `min(1180px, calc(100% - 48px))`
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
| Background | `#F7F1E5` | Page background |
| Text | `#171412` | Primary text |
| Brown | `#3B2A1F` | Secondary text, navigation |
| Brand Red | `#9F1D1D` | CTAs, logo, hero emphasis |
| Accent Red | `#B73A2F` | Hover states, secondary accents |
| Gold | `#C9A45C` | Borders, labels, decorative |
| Card | `#FFF9EF` | Card backgrounds |
| Border | `#E7D8C3` | Borders, dividers |
| Muted | `#6A5A49` | Secondary text |
| Footer Red | `#8F1717` | Newsletter band, footer accents |
| Wood | `#6B3F1D` | Wood furniture in Hero scene |