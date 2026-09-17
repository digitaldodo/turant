# Environment configuration

Copy the root `.env.example` to a local ignored `.env` file or configure equivalent environment variables in your shell or deployment platform. The template contains placeholders only.

| Area | Variables |
| --- | --- |
| Database | `DATABASE_URL`, `DATABASE_USERNAME`, `DATABASE_PASSWORD` |
| Supabase | `SUPABASE_URL`, `SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY` |
| Razorpay | `RAZORPAY_KEY_ID`, `RAZORPAY_KEY_SECRET`, `RAZORPAY_WEBHOOK_SECRET` |
| WhatsApp | `WHATSAPP_ACCESS_TOKEN`, `WHATSAPP_PHONE_NUMBER_ID` |
| Storage | `STORAGE_PROVIDER`, `STORAGE_BUCKET`, `STORAGE_REGION`, `STORAGE_ENDPOINT`, `STORAGE_ACCESS_KEY`, `STORAGE_SECRET_KEY` |

`SUPABASE_SERVICE_ROLE_KEY`, `RAZORPAY_KEY_SECRET`, webhook secrets, and storage access secrets are server-side credentials. They must never be exposed to browser bundles, logs, pull requests, or client-side environment variables.

The backend maps database variables in the `local` Spring profile. External service variables are documented now but are not wired to integrations in Phase 0.
