import { cn, CnOptions } from "tailwind-variants"

export { cn } from "tailwind-variants"

/**
 * Helper function to provide type safety for tailwind class names
 * @param strings - The template strings to join
 * @returns The joined class names
 *
 * @example
 * const className = tw`bg-red-500 text-white`
 * console.log(className) // "bg-red-500 text-white"
 * @example
 * const className = tw("bg-red-500 text-white")
 * console.log(className) // "bg-red-500 text-white"
 */
export function tw(...strings: TemplateStringsArray[] | CnOptions) {
  return cn(strings)
}
