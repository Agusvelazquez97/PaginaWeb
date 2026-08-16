import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Dominio confirmado por el cliente: dgvbusiness.com.
export default defineConfig({
  site: 'https://www.dgvbusiness.com',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
