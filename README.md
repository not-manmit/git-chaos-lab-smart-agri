# Git Chaos Lab: Smart Agri-Marketplace

This repository is an intentionally broken Git debugging lab built as a Next.js App Router project with TypeScript and Tailwind CSS.

The product idea is a hackathon-style AI-powered Smart Agri-Marketplace dashboard for farmers, buyers, weather alerts, inventory, and predictive yield planning.

## Read This First

This app is **supposed to be broken**.

It will not cleanly compile on the first run. The goal is to practice reading errors, creating focused feature branches, fixing one issue at a time, and reviewing changes like a real engineering team.

Use this repository for:

- Git branch practice
- Pull request review practice
- Debugging TypeScript and React issues
- Finding security and Git hygiene mistakes
- Understanding CI failures

## Tech Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Recharts

## Project Structure

```text
src/
  app/          Next.js routes, layout, API route, pages
  components/   Reusable UI components
  services/     Mock database and API service logic
  types/        Shared TypeScript types
  utils/        Price calculation helpers
```

## Setup

```bash
npm install
npm run dev
```

Important: `npm run dev` is expected to fail until the first compile-blocking bugs are fixed.

## Suggested Debugging Flow

Start with the errors that stop compilation, then move toward runtime, logic, security, and Git hygiene issues.

```bash
git checkout -b fix/navbar-syntax
git checkout -b fix/import-case
git checkout -b fix/type-mismatch
git checkout -b fix/market-api-await
git checkout -b fix/price-discount
git checkout -b fix/filter-mutation
git checkout -b fix/search-race
git checkout -b fix/css-collision
git checkout -b fix/session-secret
git checkout -b fix/env-tracking
```

## Intentional Bug Missions

The repository contains 10 intentional bugs:

1. Syntax error in `src/components/Navbar.tsx`
2. Missing `await` around `response.json()` in `src/services/marketApi.ts`
3. Case-sensitive import typo in `src/app/dashboard/page.tsx`
4. Discount is added instead of subtracted in `src/utils/price.ts`
5. Mock item IDs do not match the declared `MarketItem` type
6. Dummy session secret is hardcoded in `src/app/layout.tsx`
7. `.env` is intentionally tracked in Git
8. Filter component mutates state directly
9. Search input fetches on every keystroke without debounce or stale-response protection
10. Global CSS contains an aggressive `* { display: block !important; }` rule

## Feature Boilerplate Included

The app also includes starter UI for:

- Predictive AI Yield Calculator
- Farmer-to-Buyer Direct Chat Room
- Active Weather Alerts / Notification Bell
- Bulk Product CSV Uploader
- Dark/Light Mode Toggle

These are intentionally lightweight shells so students can extend them after stabilizing the codebase.

## Review Goal

A good final state should:

- Install dependencies successfully
- Run with `npm run dev`
- Pass TypeScript checks
- Render the dashboard without broken layout styles
- Avoid tracked secrets
- Use safe React state updates
- Avoid unnecessary API request races

## Notes

The credentials in `.env` are dummy values, but the file is committed on purpose. Treat it like a real security mistake and fix it using proper Git hygiene.
