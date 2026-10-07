# [NUD3] Astro boilerplate

An (almost) nude boilerplate with Astro, SCSS Modules, GSAP, Lenis and some utils.
Port of [nud3-boilerplate](https://github.com/LeoGeneret/nud3-boilerplate) (Next.js) to Astro.

## Install

```bash
pnpm install
pnpm dev
```

## Commands

- `pnpm dev` start the dev server
- `pnpm build` static build to `dist/`
- `pnpm preview` serve the build locally
- `pnpm check` type-check `.astro` and `.ts` files
- `pnpm scaffold` create a component (`.astro` + `.module.scss`)

## Structure

- `src/layouts/Layout.astro` root layout: fonts, global styles, Lenis
- `src/components/<name>/<Name>.astro` + `<Name>.module.scss`
- `src/styles/` global SCSS, mixins (`mixins/`), design tokens (`variables/variables.scss` and its TS mirror `variables/atoms.ts`)
- `src/lib/lenis.ts` root Lenis instance (`initLenis()`, `getLenis()`)
- `src/utils/` `getVar`, `onMatchMedia`

## Differences with the Next.js version

- No React: animations (GSAP) live in `<script>` tags of `.astro` components.
- `cls()` from `@cher-ami/utils` is replaced by Astro's `class:list`.
- `next/font` is replaced by `@fontsource/jost`; the `--jost` variable is set in `styles.scss`.
- React hooks (`useGetVar`, `useMatchMedia`) became plain functions in `src/utils/`.
- Output is static: deploy `dist/` on Cloudflare Pages, Netlify, Vercel...
