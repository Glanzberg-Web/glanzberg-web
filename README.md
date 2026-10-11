# Glanzberg Studio

Glanzberg Studio's business website is built with Next.js, exported to static HTML/CSS/JavaScript, and deployed on **GitHub Pages** from the `main` branch.

## GitHub Pages deployment

1. In the repository, open **Settings → Pages** and set **Build and deployment → Source: GitHub Actions**.
2. Push to `main` (or run **Actions → Deploy to GitHub Pages → Run workflow**).
3. The workflow installs dependencies, builds the site with `output: "export"`, and deploys the `out/` directory.
4. Without a custom domain, the expected project URL is https://glanzberg-web.github.io/glanzberg-web/.

The workflow builds with a base path of `/glanzberg-web`. If you add a **custom root domain**, set these repository **Settings → Secrets and variables → Actions → Variables**:

- `SITE_BASE_PATH`: `/` (special value meaning no base path)
- `SITE_URL`: `https://your-domain.com`
- `CUSTOM_DOMAIN`: `your-domain.com`

Also configure the custom domain and DNS in the repository's GitHub Pages settings. Do not commit a guessed domain.

## Contact form: GitHub Pages + business-owned Resend

GitHub Pages cannot run a server or securely store a Resend API key. The website's contact form therefore calls an independent HTTPS endpoint, and stays **disabled until configured**. A Cloudflare Worker implementation is provided in `worker/`.

To enable it:

1. Create a Cloudflare Worker, using `worker/contact-worker.js` (or deploy `worker/wrangler.toml` with Wrangler).
2. Set private Worker secrets / environment settings:
   - `RESEND_API_KEY` — Resend API key from the business-owned account, stored as a **secret**
   - `CONTACT_TO_EMAIL` — business inbox to receive inquiries
   - `CONTACT_FROM_EMAIL` — verified sender address in Resend
   - `ALLOWED_ORIGINS` — comma-separated website origins (e.g. `https://glanzberg-web.github.io` and, if relevant, your custom-domain origin)
3. Test the Worker using a real browser submission with the final sender domain verified in Resend.
4. Add an Actions repository **Variable** named `CONTACT_ENDPOINT` with the HTTPS Worker URL. It is intentionally public; the Resend key must **never** go into a `NEXT_PUBLIC_` variable or the public repository.
5. Re-run the Pages workflow to enable the form in the static build.

The included Worker provides input validation, a honeypot, and origin checks. These are **not a substitute for abuse prevention**. Configure rate limiting / bot protection in Cloudflare before promoting the inquiry form publicly.

## Local development

Run `npm install` and `npm run dev`. Copy `.env.example` to `.env.local` if you need different local URLs or a contact endpoint. For a standalone local site, set `NEXT_PUBLIC_BASE_PATH=/` and `NEXT_PUBLIC_SITE_URL=http://localhost:3000`.

## Portfolio

The six portfolio items are **fictional website demonstration concepts**, not commissioned client projects or claims of commercial outcomes. Each links to its source repository.

## Before launch

- Confirm the business name, service area, domain, and final website copy.
- Test the Pages build, mobile navigation, and deep links.
- Test contact delivery with the Worker, verified Resend sender, and abuse prevention.
- Review and tailor privacy language to actual business practices.
- Perform keyboard, screen-reader, contrast, and other accessibility testing.

## Brand identity

The current client-facing name is **Glanzberg Studio**. The existing repository name, published demo URLs, and Pages hosting paths remain unchanged while the name and domain are considered provisional.
