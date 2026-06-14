# ds.e Design System

A modern React design system built from UX/UI designs in Figma and implemented with TypeScript, Storybook, reusable components, and style architecture.

## What this repo contains

This monorepo is a complete design system implementation for React:

- `packages/foundation` — TypeScript foundation utilities and design token helpers.
- `packages/react` — React UI components, Storybook documentation, TypeScript support, Rollup build, and unit tests.
- `packages/scss` — Sass-based design system styles, global theme files, utilities, and component styles.
- `playgrounds/react` — A live demo app that consumes `@ds.e/react` and `@ds.e/scss`.

## Designed from Figma to code

The system was driven by UX/UI design in Figma and translated into:

- reusable React components
- typed design tokens and foundations
- accessible Storybook documentation
- modular Sass styling
- developer-friendly build and playground tooling

## Core implemented components

`packages/react/src` includes:

- `atoms/Button` — button component and variants
- `atoms/Color` — color utilities and brand palette helpers
- `atoms/Margin` — spacing helpers and layout tokens
- `atoms/Text` — typography and text styling components
- `molecules/Select` — form select control

The component library also includes ready-to-use Storybook stories in `packages/react/src/stories`.

## Features

- TypeScript-first component implementation
- React component library packaged with Rollup
- Storybook documentation and visual playgrounds
- Sass style system with shared global and component styles
- Monorepo management using Yarn workspaces + Lerna
- Demo playground for quick preview and development

## Quick start

Install dependencies at the repo root:

```bash
yarn install
```

Run the component build in watch mode:

```bash
yarn dev
```

Open the demo playground:

```bash
yarn --cwd playgrounds/react dev
```

Open Storybook for the React package:

```bash
yarn --cwd packages/react storybook
```

Build Storybook static output:

```bash
yarn build-storybook
```

Run tests:

```bash
yarn test
```

## Package scripts

From the repository root:

- `yarn build` — run `build` in every package via Lerna
- `yarn dev` — run package build watchers and playground together
- `yarn lint` — stylelint on all SCSS files
- `yarn test` — run tests across packages
- `yarn build-storybook` — build the Storybook site for `packages/react`

## Directory structure

```
packages/
  foundation/    # TypeScript design tokens and foundation utilities
  react/         # React UI components, stories, and Rollup build
  scss/          # Sass style system and component styles
playgrounds/
  react/         # demo application consuming the design system
```

## Why this design system exists

This repo is the implementation of a design system that starts with Figma UX/UI concepts and delivers a fully coded React component library with documentation and interactive examples. It is intended for designers, developers, and teams who want a consistent, type-safe UI foundation for building React applications.

## Notes

- The library targets modern React and TypeScript development.
- Storybook is used to document and explore component usage.
- The repo is structured as a mono-repo so foundation, styles, components, and demos are versioned together.

## License

MIT
