# Nordlys - Astro agency landing page

Astro 7 + Tailwind CSS 4 + TypeScript, deployed to Cloudflare Workers (static assets + edge SSR).

    npm install
    npm run dev        # http://localhost:4321
    npm run check      # type-check .astro files
    npm run build      # output in dist/

## Contact form (Resend)
Copy `.env.example` to `.env`. With no keys the form runs in demo mode (logs the email).
On Cloudflare add RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL under the Worker's Settings -> Variables and Secrets.

## Where things live
- `src/layouts/Layout.astro` - head/SEO, font, no-flash theme script
- `src/components/Navbar.astro` - nav, mobile menu, theme toggle (only client JS)
- `src/components/ContactForm.astro` - form UI + server handler (frontmatter)
- `src/pages/index.astro` - hero, services, contact (`prerender = false` for the POST)

## Deploy (Cloudflare Workers Builds, NOT a Pages project)
@astrojs/cloudflare v13+ outputs a Worker (dist/server + dist/client), not a Pages `_worker.js`.
Workers & Pages -> Create -> Import a repository, then:
- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`
- Root directory: leave blank
