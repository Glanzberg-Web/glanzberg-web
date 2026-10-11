# Glanzberg Studio

Static HTML/CSS/JavaScript website, hosted on GitHub Pages. There is **no Next.js, React, Node.js, npm install, or build step**.

## Pages
- `index.html` — Home
- `work/index.html` — Portfolio
- `services/index.html` — Services
- `pricing/index.html` — Pricing
- `about/index.html` — About
- `contact/index.html` — Inquiries
- `privacy/index.html` — Privacy
- `404.html` — Not found

## Publish
Go to repository **Settings → Pages → Build and deployment**, select **GitHub Actions**, then push to `main`. The workflow publishes repository contents directly, with no Node runtime or compilation. `assets/css/site.css` and `assets/js/site.js` are regular static files.

Links use relative URLs so pages work at the existing Pages project path and can also work under a custom root domain without a framework rebuild. Update canonical URLs, the sitemap and robots.txt when switching domains.

## Demo previews
Portfolio cards load scaled, non-interactive, lazy iframes of the six actual live demonstration sites. Clicking the containing card goes straight to the live demonstration in a new tab. This avoids arbitrary artwork or a browser screenshot generation/build step. Previews require internet access and the demo site to permit framing. If a demo disallows frames, use a self-hosted screenshot image for that card instead.

## Contact form
GitHub Pages does not execute server-side code. `assets/js/config.js` accepts a public HTTPS contact endpoint; **never put Resend API secrets in client files**. Keep the field blank until a tested external endpoint is ready, leaving the form visibly disabled. The existing Worker implementation is retained under `worker/` as an optional standalone email relay. Secure it with authentication/abuse controls, rate limiting, and a verified Resend sender before enabling.

## Brand
Client-facing name: Glanzberg Studio. The existing repository identity and demo URLs stay unchanged. Portfolio businesses are fictional demonstration concepts.

## Quality assurance
Check all navigation and deep links, mobile menu, keyboard access, contrast, contact submission, preview frames, and mobile layout before announcing launch.
