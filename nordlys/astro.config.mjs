// @ts-check
import { defineConfig, envField } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Pages are static by default; only pages with `export const prerender = false`
  // run on the Cloudflare edge (we need that for the contact form POST).
  adapter: cloudflare(),

  devToolbar: { enabled: false },

  // Tailwind v4 runs as a Vite plugin: no tailwind.config.js needed.
  vite: { plugins: [tailwindcss()] },

  // Type-safe env vars. Set them in Cloudflare Pages -> Settings -> Variables
  // (or in a local .env file). All optional, so the demo works without keys.
  env: {
    schema: {
      RESEND_API_KEY: envField.string({ context: 'server', access: 'secret', optional: true }),
      CONTACT_TO_EMAIL: envField.string({ context: 'server', access: 'secret', optional: true }),
      CONTACT_FROM_EMAIL: envField.string({
        context: 'server',
        access: 'secret',
        default: 'Nordlys <onboarding@resend.dev>',
      }),
    },
  },
});
