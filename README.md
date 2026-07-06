# McCall Ambulance Service — Website

Modern NEMT (Non-Emergency Medical Transport) website for McCall Ambulance Service, Dorchester, MA.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Stack

- **Next.js 15** — App Router, SSR, SEO
- **React 19** — UI components
- **Tailwind CSS v4** — Styling
- **Framer Motion** — Animations
- **Lucide React** — Icons

## Features

- Responsive mobile-first design
- Multi-step ride booking form
- Google Maps embed
- Service area coverage map
- FAQ accordion
- 24/7 floating call button (mobile)
- SEO-optimized metadata

## Configuration

Business details live in `src/lib/constants.ts` — update phone, email, and hours there.

## Production

```bash
npm run build
npm start
```