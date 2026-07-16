import { defineConfig } from "oxlint"
import { nextConfig } from "@repo/config/oxlint/next"

export default defineConfig({
  extends: [nextConfig],
})
