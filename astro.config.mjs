import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Dominio confirmado por el cliente: dgvbusiness.com.
export default defineConfig({
  site: 'https://www.dgvbusiness.com',
  // i18n experimental: español (default, sin prefijo) + inglés (/en/...),
  // solo para las páginas más relevantes — ver src/i18n/routes.ts.
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
