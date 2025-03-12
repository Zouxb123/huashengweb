import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [
    tailwind(),
    react()
  ],
  site: 'https://huasheng.com',
  base: '/',
  server: {
    port: 3000,
    host: true
  }
});