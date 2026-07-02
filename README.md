# finlaymccall.com

The personal site of Dr Finlay McCall: educator, researcher, and applied-AI consultant. A single-page,
static "digital business card" built with [Astro](https://astro.build) and deployed to
Cloudflare Pages.

## Develop

```sh
npm install
npm run dev      # local dev server at http://localhost:4321
npm run build    # production build to ./dist
npm run preview  # preview the production build locally
```

## Structure

```
src/
  pages/index.astro     the whole page
  styles/global.css     all styles; palette, type, and spacing live in :root variables
public/
  favicon.svg
  finlay-mccall.jpg     portrait (duotoned at render time by an inline SVG filter)
  og.png                social sharing image (1200x630)
  robots.txt
astro.config.mjs        site URL and sitemap integration
```

## Editing content

All copy lives in `src/pages/index.astro`. To retune the look (colours, fonts, spacing),
edit the `:root` variables at the top of `src/styles/global.css`. The site uses Spectral
(serif headings) and Inter (sans body), self-hosted via `@fontsource` packages imported
at the top of `index.astro`.

## Contact email

The address `hi@finlaymccall.com` is never written as plain text in the markup. It is
assembled at runtime by a small inline script (see the bottom of `index.astro`), which
defeats most automated harvesting. Cloudflare email obfuscation adds a second layer.

Mail is handled with a free setup: Cloudflare Email Routing forwards inbound mail to a
personal inbox, and Gmail "Send mail as" sends and replies as the domain address.

## Deploy

The site runs as a Cloudflare Worker (not Cloudflare Pages). See
[DEPLOYMENT.md](./DEPLOYMENT.md) for the full setup, how deploys are triggered, and
how to roll back.
