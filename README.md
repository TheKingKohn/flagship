# thewoob.com Portfolio

A minimal, fast, and SEO-friendly portfolio website built with Next.js 14 (App Router) and Tailwind CSS.

## Features

- 🚀 Next.js 14 with App Router
- 🎨 Tailwind CSS for styling
- 🌙 Dark theme with clean design
- ⭐ Subtle starfield background effect in hero
- 📱 Fully responsive (mobile-first)
- 🔍 SEO optimized with meta tags, OpenGraph, and Twitter cards
- 🗺️ Sitemap and robots.txt included
- ♿ Accessible and performant

## Pages

- **Home** (`/`) - Hero with starfield, about section, featured work
- **Work** (`/work`) - Portfolio showcase
- **Services** (`/services`) - Service offerings and process
- **Contact** (`/contact`) - Contact form and information
- **Privacy** (`/privacy`) - Privacy policy

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── public/
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── app/
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── privacy/
│   │   │   └── page.tsx
│   │   ├── services/
│   │   │   └── page.tsx
│   │   ├── work/
│   │   │   └── page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── Button.tsx
│       ├── Footer.tsx
│       └── Navigation.tsx
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── tsconfig.json
```

## SEO

- One H1 per page
- Meta descriptions on all pages
- OpenGraph and Twitter Card tags
- Canonical URLs
- Sitemap at `/sitemap.xml`
- Robots.txt at `/robots.txt`

## CTAs

Two primary CTAs used throughout the site:
1. "Start a Project" → `/contact`
2. "View LeadLoom" → `https://leadloom.thewoob.com`

## License

Private project for thewoob.com
