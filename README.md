# ギークのためのサイクリング

## Features

- Web Site named "ギークのためのサイクリング" built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com)
- This project is based on the [maucariapacom-church-starter](https://github.com/MauCariApa-com/maucariapacom-church-starter)

## Project Structure

```
maucariapacom-church-starter/
├── public/
│   ├── uploads/          # Images directories (sermons, ministries, blog)
│   │   ├── routes/       # Route thumbnail images
│   │   └── blog/         # Blog post images
│   ├── favicon.svg
│   ├── robots.txt
│   └── site.webmanifest
├── src/
│   ├── assets/           # Astro-processed assets
│   ├── components/       # Reusable Astro components
│   │   ├── Global/       # Header, Footer, Navigation
│   │   ├── Sections/     # Page sections (Hero, Route, etc.)
│   │   └── UI/           # UI components (Button, Card, SEO)
│   ├── content/          # Astro Content Collections
│   │   ├── config.ts     # Collection schemas
│   │   ├── routes/       # Route content
│   │   ├── blog/         # Blog posts
│   │   └── siteInfo/     # Site configuration content
│   ├── layouts/          # Page layouts
│   ├── pages/            # Astro pages
│   │   ├── blog/         # Blog pages
│   │   ├── routes/       # Route pages
│   └── utils/            # Utility functions
├── astro.config.mjs
├── tailwind.config.cjs
└── tsconfig.json
```

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm or yarn

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/logpiyo/cycling-website.git
   cd cycling-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:4321`

## Acknowledgments

- [Astro](https://astro.build) for the awesome static site generator
- [Tailwind CSS](https://tailwindcss.com) for the utility-first CSS framework