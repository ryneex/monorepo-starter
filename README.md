# Monorepo starter

Personal **pnpm + Turborepo** layout I reuse when spinning up new projects. Not a template for public distribution—fork or copy and adjust names and apps as you like.

## Requirements

- **Node** ≥ 22  
- **pnpm** 10.32.1 (`packageManager` in root `package.json`)

## Setup

```sh
pnpm install
```

## What’s in here

| Area | Description |
| ---- | ----------- |
| `apps/web` | Next.js app |
| `packages/ui` | Shared React components |
| `@repo/config` | ESLint + Prettier presets ([details](packages/config/README.md)) |
| `@repo/ts-config` | Shared `tsconfig` bases |

TypeScript everywhere; lint/format via shared config.

## Commands

From the repo root:

| Command | What it does |
| ------- | ------------ |
| `pnpm dev` | Dev all apps/packages (Turbo) |
| `pnpm build` | Build all |
| `pnpm lint` | Lint all |
| `pnpm format` | Prettier write all |
| `pnpm check-types` | `tsc` all |

Target one package:

```sh
pnpm exec turbo dev --filter=web
pnpm exec turbo build --filter=web
```

## New project from this starter

1. Copy or clone the repo.  
2. Rename root `package.json` / workspace packages if you want.  
3. Add apps under `apps/*`, shared code under `packages/*`.  
4. Wire them in `pnpm-workspace.yaml` (already `apps/*`, `packages/*`).

## Remote cache (optional)

[Turborepo remote caching](https://turborepo.dev/docs/core-concepts/remote-caching) is optional. If you use Vercel:

```sh
pnpm exec turbo login
pnpm exec turbo link
```

## Links

- [Turborepo – tasks & filters](https://turborepo.dev/docs/crafting-your-repository/running-tasks)  
- [Turborepo – config](https://turborepo.dev/docs/reference/configuration)
