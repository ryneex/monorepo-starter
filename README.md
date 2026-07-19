# Monorepo starter

Personal **pnpm + Turborepo** layout I reuse when spinning up new projects. Not a template for public distribution—fork or copy and adjust names and apps as you like.

## Requirements

- **Node** ≥ 22
- **pnpm** 11.15.0 (`packageManager` in root `package.json`)

## Setup

```sh
pnpm install
```

## What’s in here

| Area              | Description                                                   |
| ----------------- | ------------------------------------------------------------- |
| `apps/web`        | Next.js app                                                   |
| `packages/ui`     | Shared React components                                       |
| `@repo/config`    | Oxlint + Oxfmt presets ([details](packages/config/README.md)) |
| `@repo/ts-config` | Shared `tsconfig` bases                                       |

**TypeScript 7** is installed at the workspace root and used by package `check-types` scripts. Lint/format use shared Oxlint/Oxfmt presets (root configs + nested package configs).

### Next.js + TypeScript 7

`apps/web` pins a Next.js 16.3 canary and enables `experimental.useTypeScriptCli` in `next.config.ts`. That flag makes `next build` run the project-local `tsc` CLI, which is required while TypeScript 7 has no JavaScript compiler API for Next’s default checker. Drop back to a stable Next release once it includes this support, or keep the canary + flag while on TS 7.

## Commands

From the repo root:

| Command            | What it does                                   |
| ------------------ | ---------------------------------------------- |
| `pnpm dev`         | Dev all apps/packages (Turbo)                  |
| `pnpm build`       | Build all                                      |
| `pnpm lint`        | Lint all (Oxlint, type-aware from root config) |
| `pnpm format`      | Format all (Oxfmt)                             |
| `pnpm check-types` | `tsc` all (Turbo)                              |

Target one package:

```sh
pnpm exec turbo dev --filter=@repo/web
pnpm exec turbo build --filter=@repo/web
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
- [TypeScript 7 announcement](https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/)
