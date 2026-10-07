/**
 * Read a CSS custom property from :root. Returns '' on the server.
 * @example getVar('--color-text')
 */
export function getVar(query: string): string {
  if (typeof window === 'undefined') return ''
  return getComputedStyle(document.documentElement).getPropertyValue(query).trim()
}
