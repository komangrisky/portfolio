#!/usr/bin/env bash
# Build the portfolio and push static files to the gh-pages branch for
# "Deploy from a branch" in GitHub Pages settings.
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
DIST="$REPO_ROOT/artifacts/portfolio/dist/public"

cd "$REPO_ROOT"

if ! git remote get-url origin &>/dev/null; then
  echo "No git remote 'origin'. Add one before deploying." >&2
  exit 1
fi

REMOTE_URL="$(git remote get-url origin)"

echo "Building portfolio (BASE_PATH=/portfolio/)..."
PORT=21113 BASE_PATH=/portfolio/ pnpm --filter @workspace/portfolio run build

cp "$DIST/index.html" "$DIST/404.html"

TEMP="$(mktemp -d)"
trap 'rm -rf "$TEMP"' EXIT

cp -a "$DIST/." "$TEMP/"
cd "$TEMP"

git init -q
git checkout -q -b gh-pages
git add -A
git commit -q -m "Deploy portfolio ($(date -u +%Y-%m-%dT%H:%M:%SZ))"
git remote add origin "$REMOTE_URL"

echo "Pushing to origin gh-pages (force)..."
git push -f origin gh-pages

echo "Done. Site updates at https://komangrisky.github.io/portfolio/ (after Pages propagates)."
