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
  },

  markdown: {
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://shiki.style/themes
      theme: 'dracula',
      // Alternatively, provide multiple themes
      // See note below for using dual light/dark themes
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
      // Enable word wrap to prevent horizontal scrolling
      wrap: true,
      // Add custom transformers: https://shiki.style/guide/transformers
      // Find common transformers: https://shiki.style/packages/transformers
      transformers: [],
    },
  },
});
