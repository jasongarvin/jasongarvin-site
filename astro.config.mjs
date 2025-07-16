// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  // Config options
  site: 'https://jasongarvin.com',
    integrations: [react(), sitemap()],
  build: {
    format: 'preserve',
    inlineStylesheets: 'never',
  },
  compressHTML: false,

  redirects: {
    "/blog/[...slug]": "/blog/posts/[...slug]"
  }
});
