/// <reference types="vitest" />
import { getViteConfig } from 'astro/config';

export default getViteConfig({
  test: {
    // Vitest configuration options
    environment: 'happy-dom',
    include: ['./tests/**/*.{test,spec}.{js,ts}'],
    // ...other Vitest configurations
  },
});
