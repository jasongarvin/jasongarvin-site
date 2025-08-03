// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Config options
  site: 'https://jasongarvin.com',
    integrations: [sitemap()],
  build: {
    format: 'preserve',
    inlineStylesheets: 'never',
  },
  compressHTML: false,

  markdown: {
    shikiConfig: {
      theme: 'dracula',
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
      wrap: true,
      transformers: [],
    },
  },

  redirects: {
    "/blog/overcoming-uncertainty-a-response-to-tariffs": {
      status: 301,
      destination: "/blog/posts/overcoming-uncertainty-a-response-to-tariffs"
    },
    "/blog/industry-togetherness-at-gama-expo": {
      status: 301,
      destination: "/blog/posts/industry-togetherness-at-gama-expo"
    },
    "/blog/writing-when-you-have-something-to-say": {
      status: 301,
      destination: "/blog/posts/writing-when-you-have-something-to-say"
    },
    "/blog/2024-in-review": {
      status: 301,
      destination: "/blog/posts/2024-annual-review"
    },
    "/blog/the-value-of-keeping-a-library": {
      status: 301,
      destination: "/blog/posts/the-value-of-keeping-a-library"
    },
    "/blog/hard-truths-about-owning-your-choices": {
      status: 301,
      destination: "/blog/posts/hard-truths-about-owning-your-choices"
    },
    "/blog/i-blogged-for-a-year": {
      status: 301,
      destination: "/blog/posts/wow-ive-been-writing-for-a-year"
    },
    "/blog/get-more-out-of-working-from-home": {
      status: 301,
      destination: "/blog/posts/get-more-out-of-working-from-home"
    },
    "/blog/overcoming-decision-fatigue-strategies-for-business-owners": {
      status: 301,
      destination: "/blog/posts/overcoming-decision-fatigue-strategies-for-business-owners"
    },
    "/blog/context-switching-destroys-your-effectiveness": {
      status: 301,
      destination: "/blog/posts/context-switching-destroys-your-effectiveness"
    },
    "/blog/learn-to-grow-by-exploring-your-past": {
      status: 301,
      destination: "/blog/posts/learn-to-grow-by-exploring-your-past"
    },
    "/blog/navigating-time-as-a-business-owner": {
      status: 301,
      destination: "/blog/posts/managing-your-time-as-a-business-owner"
    },
    "/blog/the-price-of-ai-efficiency": {
      status: 301,
      destination: "/blog/posts/the-price-of-ai-efficiency"
    },
    "/blog/seo-versus-humans": {
      status: 301,
      destination: "/blog/posts/seo-versus-writing-for-humans"
    },
    "/blog/buying-a-business": {
      status: 301,
      destination: "/blog/posts/tips-for-buying-a-business"
    },
    "/blog/2023-in-review": {
      status: 301,
      destination: "/blog/posts/2023-annual-review"
    },
    "/blog/publishing-my-first-python-library": {
      status: 301,
      destination: "/blog/posts/publishing-my-first-python-library"
    },
    "/blog/harnessing-the-power-of-habits": {
      status: 301,
      destination: "/blog/posts/harnessing-the-power-of-habits"
    },
  },
});
