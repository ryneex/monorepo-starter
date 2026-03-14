import { reactConfig } from "@repo/config/eslint-react"
import { defineConfig } from "eslint/config"

export default defineConfig([
  ...reactConfig,
  {
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
])
