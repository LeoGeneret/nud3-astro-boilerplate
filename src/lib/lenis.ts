import Lenis from 'lenis'

let instance: Lenis | null = null

/**
 * Create the root Lenis instance once (smooth scroll on the whole page).
 * Import `getLenis()` anywhere to pause / resume scroll.
 */
export function initLenis(): Lenis {
  if (!instance) instance = new Lenis({ autoRaf: true })
  return instance
}

export const getLenis = (): Lenis | null => instance
