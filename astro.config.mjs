import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// NOTA: dominio asumido a partir del email de contacto (contacto@dgvbusiness.com).
// Confirmar con el cliente antes de lanzar — ver PENDIENTES.md.
export default defineConfig({
  site: 'https://www.dgvbusiness.com',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
