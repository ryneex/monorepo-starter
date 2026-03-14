import { defineConfig } from "eslint/config"
import { nextConfig } from "@repo/config/eslint-next"

const eslintConfig = defineConfig([
  ...nextConfig,
  {
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
])

export default eslintConfig
