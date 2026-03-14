# `@repo/config`

Shared **ESLint** (flat config) and **Prettier** presets for this starter monorepo. Depend on it from any app or package and spread the entry that matches your stack.

## Install

```sh
pnpm add -D @repo/config
```

(`workspace:*` in this repo.)

## Exports

| Subpath                     | Export                              | When to use                                                                  |
| --------------------------- | ----------------------------------- | ---------------------------------------------------------------------------- |
| `@repo/config/eslint-base`  | `baseConfig`                        | TypeScript only (Node, scripts, non-UI packages).                            |
| `@repo/config/eslint-react` | `reactConfig`                       | React + Hooks, no Next (e.g. shared UI package).                             |
| `@repo/config/eslint-next`  | `nextConfig`                        | Next.js apps (`eslint-config-next` + base + build ignores).                  |
| `@repo/config/prettier`     | `baseConfig`, `prettierReactConfig` | Formatting; use `prettierReactConfig` when Tailwind class sorting is wanted. |

## ESLint

Always set `parserOptions.tsconfigRootDir` to the **config file’s directory** (the package root) so type-aware rules resolve correctly.

### Next.js

```ts
// eslint.config.ts
import { defineConfig } from "eslint/config"
import { nextConfig } from "@repo/config/eslint-next"

export default defineConfig([
  ...nextConfig,
  {
    languageOptions: {
      parserOptions: { tsconfigRootDir: import.meta.dirname },
    },
  },
])
```

### React (no Next)

```ts
import { defineConfig } from "eslint/config"
import { reactConfig } from "@repo/config/eslint-react"

export default defineConfig([
  ...reactConfig,
  {
    languageOptions: {
      parserOptions: { tsconfigRootDir: import.meta.dirname },
    },
  },
])
```

### TypeScript only

```ts
import { defineConfig } from "eslint/config"
import { baseConfig } from "@repo/config/eslint-base"

export default defineConfig([
  ...baseConfig,
  {
    languageOptions: {
      parserOptions: { tsconfigRootDir: import.meta.dirname },
    },
  },
])
```

Use a flat `eslint.config.ts` at the package root (same pattern as `apps/web` and `packages/ui`). ESLint needs a setup that can execute TypeScript config files (this repo uses **jiti** where needed).

## Prettier

```ts
// prettier.config.ts
import { prettierReactConfig } from "@repo/config/prettier"

export default prettierReactConfig
```

For packages without Tailwind, use:

```ts
import { baseConfig } from "@repo/config/prettier"
export default baseConfig
```

## Scripts (this package)

| Script             | Description              |
| ------------------ | ------------------------ |
| `pnpm check-types` | `tsc --noEmit`           |
| `pnpm lint`        | check-types, then ESLint |
| `pnpm format`      | Prettier `--write`       |

## Related

- **`@repo/ts-config`** — shared `tsconfig` bases; this package extends it for its own `tsc`.
