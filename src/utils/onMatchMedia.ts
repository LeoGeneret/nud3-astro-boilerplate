/**
 * Subscribe to a media query. The callback is called immediately with the
 * current value, then on every change. Returns an unsubscribe function.
 *
 * @example
 * const off = onMatchMedia('(pointer: coarse)', (isTouch) => { ... })
 * @example onMatchMedia('(min-width: 600px)', cb)
 */
export function onMatchMedia(query: string, callback: (matches: boolean) => void): () => void {
  const mql = window.matchMedia(query)
  const handler = (e: MediaQueryListEvent) => callback(e.matches)
  callback(mql.matches)
  mql.addEventListener('change', handler)
  return () => mql.removeEventListener('change', handler)
}
