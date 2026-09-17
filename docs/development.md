# Development

## Prerequisites

- Node.js 22 or newer and npm 10 or newer
- Java 21
- PostgreSQL 16+ for persistence-enabled local backend work

## Frontend applications

Install JavaScript dependencies from the repository root:

```bash
npm install
npm run dev:student
npm run dev:rider
npm run dev:admin
```

Each command starts one independent Next.js application. Quality checks are:

```bash
npm run lint
npm run typecheck
npm run build
npm run format:check
```

## Backend

The Maven wrapper avoids a global Maven requirement:

```bash
cd apps/backend
./mvnw test
./mvnw spring-boot:run
```

The default profile intentionally starts without a configured datasource, making `/actuator/health` available for scaffolding verification. For local PostgreSQL work, create a database and provide environment variables from `.env.example`, then run with `SPRING_PROFILES_ACTIVE=local`. The `local` profile enables PostgreSQL, JPA validation, and Flyway.

Example PowerShell session:

```powershell
$env:SPRING_PROFILES_ACTIVE = 'local'
$env:DATABASE_URL = 'jdbc:postgresql://localhost:5432/turant'
$env:DATABASE_USERNAME = 'turant'
$env:DATABASE_PASSWORD = 'replace-me'
.\\mvnw.cmd spring-boot:run
```

No migrations are included in Phase 0. Add versioned Flyway migrations before adding persisted domain entities; do not use schema auto-update for production data.

## Conventions

- Keep web concerns inside the individual apps; share only genuine reusable types, validation, and UI primitives.
- Organize backend code by feature package, not by global technical layer.
- Use strict TypeScript and format with Prettier.
- Do not add real credentials, generated secrets, or local environment files to Git.
