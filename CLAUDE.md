# Project Instructions

## Foundations
- All foundation/layout components (e.g. `Section`, `Row`) live in `src/components/foundations.tsx`.
- Any new shared layout or structural component must be added to this file, not defined inline in a page.

## Icons
- Use icons via SVG sprite — never add inline SVGs directly in components.
- All icons live in `public/images/icons.svg` as `<symbol>` elements with IDs in the format `icon-<name>`.
- Use the `Icon` component (`src/components/atoms/icon.tsx`) to render them: `<Icon name="chevron-down" size={16} />`.
- When adding a new icon, add the `<symbol>` to the sprite file and add the name to the `IconName` union in `src/components/atoms/icon.tsx`.
