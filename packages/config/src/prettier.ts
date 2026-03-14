import type { Config } from "prettier"

export const baseConfig: Config = {
  semi: false,
  printWidth: 100,
  tabWidth: 2,
  endOfLine: "lf",
}

export const prettierReactConfig: Config = {
  ...baseConfig,
  plugins: ["prettier-plugin-tailwindcss"],
}
