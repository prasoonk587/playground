# Project Instructions

## Stack

- React 19 + TypeScript, bundled with CRA + craco
- Tailwind CSS v3 with `darkMode: 'class'`
- React Router v7 with `BrowserRouter` and `basename={process.env.PUBLIC_URL}`
- shadcn UI pattern: CVA + `clsx` + `tailwind-merge` via `src/lib/utils.ts`
- Path alias `@/` resolves to `src/` (configured in `tsconfig.json` and `craco.config.js`)

## Colors & Theming

- All colors are CSS variables defined in `src/index.css` using HSL channel values (no `hsl()` wrapper in the variable — only in usage).
- Tailwind config references them as `hsl(var(--...))` — never use raw hex or hardcoded HSL in config.
- **Palette variables** (`--primary-50` … `--neutral-900`, etc.) are defined in `:root` and never overridden — they are fixed reference values.
- **Semantic variables** (`--background`, `--foreground`, `--muted`, `--accent`, `--sidebar-*`, etc.) are defined in `:root` for light mode and overridden in `.dark` for dark mode.
- Always use semantic tokens for text and backgrounds in components (`text-foreground`, `bg-background`, `text-muted-foreground`, `bg-muted`, etc.). Never use hardcoded palette shades like `text-neutral-700` for general text.

## Atom Components

- All reusable UI primitives live in `src/components/atoms/`.
- `Button` (`src/components/atoms/button.tsx`) uses CVA and exports both `Button` and `buttonVariants`. Use `asChild` + `Slot` for polymorphic usage.
- Do not create a `src/components/ui/` folder — shadcn components belong in `atoms/`.

## Foundations

- All shared layout/structural components (e.g. `Section`, `Row`) live in `src/components/foundations.tsx`.
- Any new shared layout component must be added to this file, not defined inline in a page.

## Icons

- Use icons via SVG sprite — never add inline SVGs directly in components.
- All icons live in `public/images/icons.svg` as `<symbol>` elements with IDs in the format `icon-<name>`.
- Use the `Icon` component (`src/components/atoms/icon.tsx`): `<Icon name="chevron-down" size={16} />`.
- When adding a new icon: add the `<symbol>` to the sprite and add the name to the `IconName` union in `src/components/atoms/icon.tsx`.
- Always prefix sprite `href` with `process.env.PUBLIC_URL` so it resolves correctly on GitHub Pages.

## Navigation

- Nav items are defined in `src/components/Layout.tsx` (`navItems` array).
- When adding a new page: add an entry to `navItems`, create the component, and register the route in `src/App.tsx`.
- The sidebar is fixed-position with a light/dark theme toggle at the bottom powered by `src/hooks/useTheme.ts`.

## Deployment

- Hosted on GitHub Pages at `https://prasoonk587.github.io/playground`.
- `homepage` in `package.json` sets `PUBLIC_URL=/playground` at build time.
- Deploy manually: `npm run deploy` (builds + copies `index.html` → `404.html` + pushes to `gh-pages` branch).
- Auto-deploy: GitHub Actions (`.github/workflows/deploy.yml`) deploys on every push to `main`.
- `404.html` is a copy of `index.html` — GitHub Pages serves it for unknown paths, React Router handles routing client-side.
