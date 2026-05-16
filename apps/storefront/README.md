# Yuxian Paper Art — Storefront

A handcrafted Chinese paper-cut heritage brand storefront built with Next.js.

## About

Yuxian Paper Art is a cross-border e-commerce brand bringing Yuxian paper-cutting — a UNESCO-recognized Intangible Cultural Heritage — to homes around the world. This is the custom Next.js storefront for the brand.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Fonts**: Playfair Display (headings), Lora (body)
- **Icons**: Lucide React
- **Data**: Local mock products (Phase 1)

## Pages

| Route | Page |
|---|---|
| `/` | Homepage with Hero, Brand Values, Featured Products, Craft Story, Gift Occasions |
| `/products` | Product listing with grid layout |
| `/products/[slug]` | Product detail with craft narrative, dimensions, materials, and cultural story |
| `/story` | Brand story — the heritage and craft of Yuxian paper-cutting |
| `/about` | About the brand, mission, and product selection philosophy |
| `/contact` | Contact form UI, wholesale and gift concierge information |
| `/cart` | Shopping cart static UI with order summary |
| `/checkout` | Checkout placeholder — full integration coming in next phase |

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Current Status

**Phase 1 — Storefront Static MVP**: Complete.

- All 8 pages are built with responsive layouts
- Mock product data (6 products) in `src/data/products.ts`
- Visual system aligned with premium oriental paper art aesthetic
- Medusa backend is **not yet connected** — all product data is local mock
- No real payment integration

## Next Steps

Phase 2 will initialize the Medusa commerce backend with PostgreSQL and Redis. Phase 3 will connect this storefront to Medusa's Store API with mock fallback support.

## Project Structure

```
apps/storefront/src/
├── app/                  # App Router pages
│   ├── page.tsx          # Homepage
│   ├── products/
│   │   ├── page.tsx      # Product listing
│   │   └── [slug]/
│   │       └── page.tsx  # Product detail
│   ├── story/page.tsx    # Brand story
│   ├── about/page.tsx    # About us
│   ├── contact/page.tsx  # Contact
│   ├── cart/page.tsx     # Shopping cart
│   └── checkout/page.tsx # Checkout placeholder
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
| Vermilion | `#B73A2F` | CTAs, accents |
| Gold | `#C9A45C` | Borders, labels, decorative |
| Cream | `#FFF9EF` | Card backgrounds |
| Sand | `#E7D8C3` | Borders, dividers |