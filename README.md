# Quick Portfolio

pnpm monorepo for a portfolio web app, Express API, and shared libraries.

## Prerequisites

- **Node.js 24**
- **pnpm** (npm/yarn are blocked by `preinstall`)
- **PostgreSQL** (for the API and Drizzle)

## Setup

```bash
pnpm install
```

Set environment variables before running apps:

| Variable | Used by | Description |
|----------|---------|-------------|
| `DATABASE_URL` | API, DB | Postgres connection string |
| `PORT` | portfolio, api-server, mockup-sandbox | HTTP port |
| `BASE_PATH` | portfolio, mockup-sandbox | Vite `base` path (use `/` locally) |

## Development

**Portfolio (Vite + React):**

```bash
PORT=21113 BASE_PATH=/ pnpm --filter @workspace/portfolio run dev
```

**API server:**

```bash
PORT=5000 DATABASE_URL=postgres://... pnpm --filter @workspace/api-server run dev
```

**Push DB schema (dev):**

```bash
DATABASE_URL=postgres://... pnpm --filter @workspace/db run push
```

## Workspace

| Package | Path | Role |
|---------|------|------|
| `@workspace/portfolio` | `artifacts/portfolio` | Portfolio frontend |
| `@workspace/api-server` | `artifacts/api-server` | Express API |
| `@workspace/db` | `lib/db` | Drizzle schema & migrations |
| `@workspace/api-spec` | `lib/api-spec` | OpenAPI → Orval codegen |
| `@workspace/mockup-sandbox` | `artifacts/mockup-sandbox` | UI mockup preview |

## Scripts (root)

```bash
pnpm run typecheck   # Typecheck all packages
pnpm run build       # Typecheck + build all packages
```

Regenerate API client and Zod types after changing the OpenAPI spec:

```bash
pnpm --filter @workspace/api-spec run codegen
```

## Deployment (GitHub Pages)

The portfolio frontend deploys automatically on push to `main` via GitHub Actions.

Live site: [https://komangrisky.github.io/portfolio/](https://komangrisky.github.io/portfolio/)

Build locally for the same base path:

```bash
PORT=21113 BASE_PATH=/portfolio/ pnpm --filter @workspace/portfolio run build
```

Output is written to `artifacts/portfolio/dist/public/`.

## Stack

React 19 · Vite 7 · Tailwind CSS 4 · Express 5 · PostgreSQL · Drizzle · Zod · TanStack Query
