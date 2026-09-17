# Turant

Hyperlocal ordering and delivery platform connecting students with local vendors and delivery partners.

Turant is initially being designed for students around GLA University Mathura. It is not an official GLA University service or partnership.

## Current MVP scope

Phase 0 establishes the production-oriented foundation only: three independently runnable web applications, a Spring Boot modular monolith, shared frontend packages, environment templates, documentation, and CI. No ordering, payment, delivery, vendor, or authentication business flows are implemented yet.

## Architecture overview

```text
Student PWA     Rider PWA     Admin PWA
       \\           |           /
        \\          |          /
         Spring Boot Modular Monolith
                    |
               PostgreSQL
                    |
            External services
        Razorpay | WhatsApp Cloud API | Object Storage
```

PostgreSQL will be the authoritative transactional store. See [architecture documentation](docs/architecture.md) for design rationale and constraints.

## Repository structure

```text
apps/
  student-web/  # Student-facing Next.js PWA
  rider-web/    # Rider-facing Next.js PWA
  admin-web/    # Operational admin Next.js PWA
  backend/      # Spring Boot modular monolith
packages/
  shared-types/
  shared-validation/
  ui/
docs/
.github/workflows/
```

## Technology stack

- Next.js, TypeScript, Tailwind CSS, TanStack Query, React Hook Form, and Zod
- shadcn/ui-compatible shared UI primitives
- Java 21, Spring Boot, Maven, Spring Validation, Actuator, PostgreSQL, and Flyway
- GitHub Actions for baseline quality checks

## Local development

Prerequisites: Node.js 22+, npm 10+, and Java 21. Maven is provided through the repository wrapper.

```bash
npm install
npm run dev:student
npm run dev:rider
npm run dev:admin
```

Each web app listens on its own development port when started separately. Run the backend from `apps/backend`:

```bash
./mvnw spring-boot:run
```

The baseline backend starts without a database so its health endpoint can be checked at `http://localhost:8080/actuator/health`. To prepare local PostgreSQL configuration, copy the root `.env.example`, configure `DATABASE_*`, and use the `local` Spring profile as documented in [development.md](docs/development.md).

## Environment setup

Copy `.env.example` for local use and keep all real values out of Git. The template lists planned database, Supabase, Razorpay, WhatsApp, and object storage configuration. See [environment.md](docs/environment.md).

**Security warning:** do not commit `.env` files, API keys, service-role keys, private keys, or payment credentials. Environment files containing real values are ignored by default.

## Multi-college capability

The initial deployment target is one college, but future domain entities and access rules will be college-scoped from day one. This avoids coupling the platform to a single campus as the service expands.

## Development roadmap

1. Phase 0 — repository, architecture, quality baseline, and documentation.
2. Phase 1 — identity, college configuration, and foundational domain model.
3. Phase 2 — catalog, vendor operations, ordering, and delivery workflow.
4. Phase 3 — payment, refunds, wallet/earnings, reconciliation, and audit controls.
5. Phase 4 — operational hardening, observability, pilot readiness, and multi-college rollout.

No delivery, vendor availability, partnership, security, or payment outcome is guaranteed by this repository.
