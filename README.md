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

## Deploy

Live site: [https://komangrisky.github.io/portfolio/](https://komangrisky.github.io/portfolio/)

The portfolio is published with **Deploy from a branch** (not GitHub Actions). The script `scripts/deploy.sh` builds the app and force-pushes the output to the `gh-pages` branch.

### One-time setup

1. Push this repo to GitHub as `komangrisky/portfolio` (repo name must be `portfolio` for the `/portfolio/` URL).
2. **Settings** → **Pages** → **Build and deployment** → **Source**: **Deploy from a branch**.
3. **Branch**: `gh-pages`, **Folder**: `/ (root)` → **Save**.
4. Disable `.github/workflows/deploy-pages.yml` (or set Pages source to something other than GitHub Actions) so it does not conflict with branch deploy.

### Deploy (every update)

From the repo root:

```bash
pnpm install
./scripts/deploy.sh
```

The first time, make the script executable:

```bash
chmod +x scripts/deploy.sh
```

What `deploy.sh` does:

1. Builds `@workspace/portfolio` with `BASE_PATH=/portfolio/`
2. Copies `index.html` to `404.html` for client-side routing
3. Pushes `artifacts/portfolio/dist/public/` to the `gh-pages` branch

Push application code to `main` separately when needed:

```bash
git add .
git commit -m "Your change"
git push origin main
./scripts/deploy.sh
```

Wait 1–3 minutes after `./scripts/deploy.sh`, then open the live URL.

### Local build only

```bash
PORT=21113 BASE_PATH=/portfolio/ pnpm --filter @workspace/portfolio run build
```

Output: `artifacts/portfolio/dist/public/`

## Stack

React 19 · Vite 7 · Tailwind CSS 4 · Express 5 · PostgreSQL · Drizzle · Zod · TanStack Query
