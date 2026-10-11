# Glanzberg Web

Business website for Glanzberg Web.

Built with Next.js and Tailwind CSS. The website includes a portfolio of clearly labeled demonstration concepts and a contact form designed for a business-owned Resend account.

## Getting started

1. Run `npm install` and `npm run dev`.
2. Copy `.env.example` to `.env.local` and configure the environment variables.
3. Deploy through Vercel, connecting this repository.

## Contact form

The contact form will not accept submissions until `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, and `CONTACT_FROM_EMAIL` are configured on the server. Configure a verified sender domain in Resend. Do not commit API keys.

## Launch checklist

- Add and verify the business domain; set `NEXT_PUBLIC_SITE_URL`.
- Connect to Vercel, configure environment variables, and deploy.
- Review all business copy and portfolio selections.
- Test contact form delivery and spam behavior before sharing the site.
- Confirm legal/privacy language is appropriate for business operations.
