# Glanzberg Web

A responsive business website for Glanzberg Web, built with Next.js.

## Local development

Run `npm install` and then `npm run dev`.

## Deployment

Connect this repository to Vercel, configure the project environment variables, and deploy. Set `NEXT_PUBLIC_SITE_URL` to the final public site URL (including https://).

## Contact form

Copy `.env.example` to `.env.local` for local development. Configure `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, and `CONTACT_FROM_EMAIL` on the server. `CONTACT_FROM_EMAIL` must be an authorized sender in the business-owned Resend account. Without all three variables the form remains explicitly disabled; no inquiries are silently lost. Never commit API keys. This form includes basic validation and a honeypot; add provider- or edge-level rate limiting and anti-spam controls before promoting it broadly.

## Portfolio

The six featured brands are fictional design concepts, not client projects. Each item links to its public source repository. Replace or expand these when approved real-world case studies become available.

## Before launch

- Confirm business name, service area, live domain, and final copy.
- Connect hosting and test forms with a verified Resend sender.
- Review and tailor privacy language to actual business practices.
- Run `npm run build`, inspect mobile layouts, and audit keyboard/accessibility behavior.
- Configure hosting-level abuse prevention and performance monitoring.
- Publish the final domain and update metadata/site URLs.
