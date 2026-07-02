import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import cloudflare from '@astrojs/cloudflare';

// The canonical production URL. Used for sitemap, canonical tags, and absolute URLs.
export default defineConfig({
  site: 'https://finlaymccall.com',
  integrations: [sitemap()],
  adapter: cloudflare(),
});
