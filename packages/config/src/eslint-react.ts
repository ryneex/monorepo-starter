import pluginReactHooks from "eslint-plugin-react-hooks"
import pluginReact from "eslint-plugin-react"
import { baseConfig } from "./eslint-base"
import { defineConfig } from "eslint/config"

export const reactConfig = defineConfig([
  ...baseConfig,
  pluginReact.configs.flat.recommended!,
  {
    plugins: {
      "react-hooks": pluginReactHooks,
    },
    settings: { react: { version: "19" } },
    rules: {
      ...pluginReactHooks.configs.recommended.rules,
      // React scope no longer necessary with new JSX transform.
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
    },
  },
  {
    rules: {
      // react-hooks rules
      "react-hooks/immutability": "off",
      "react-hooks/set-state-in-effect": "off",
      "react-hooks/incompatible-library": "off",
    },
  },
])
