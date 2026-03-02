# AGENTS.md - Developer Guidelines for CUCEI.DEV

## Project Overview

- **Project Name:** CUCEI.DEV
- **Type:** Next.js 16 (React 19) Website
- **Description:** Community website for CUCEI technology development students
- **Stack:** Next.js, React 19, TypeScript, Tailwind CSS 4, ESLint

---

## Build, Lint, and Test Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Next.js development server |
| `npm run build` | Build for production (static export) |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npx eslint src/file.ts` | Lint a specific file |
| `npx eslint src/ --fix` | Lint and auto-fix issues |

**Note:** No test framework is currently configured. Do not add tests unless explicitly requested.

---

## Code Style Guidelines

### General Conventions

- Use **TypeScript** with strict mode enabled
- Use **ESM** (ES Modules) with `import`/`export`
- Use double quotes for all strings, including imports
- Use trailing commas in objects and arrays
- Use semicolons at the end of statements

### File Naming

- **Components:** PascalCase (e.g., `Header.tsx`, `Projects.tsx`)
- **Pages:** `page.tsx` inside route folders (e.g., `src/app/condiciones/page.tsx`)
- **Utils/Hooks:** camelCase (e.g., `useAuth.ts`)
- **Types:** co-located with components or in `src/types/`

### Import Conventions

```typescript
// External imports (first)
import { useState } from "react";
import Link from "next/link";
import type { Metadata } from "next";

// Internal imports (second) - use @ alias
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// CSS imports (last)
import "./globals.css";
```

- Use the `@/*` alias which maps to `./src/*`
- Group imports: external → internal → CSS
- Use `import type` for type-only imports

### Component Structure

```typescript
// 1. Type definitions (for props)
type ComponentProps = {
  title: string;
  items: string[];
  onClick?: () => void;
};

// 2. Component definition with Readonly for props
export default function Component({
  title,
  items,
  onClick,
}: Readonly<ComponentProps>) {
  // 3. Hooks (if any)
  const [state, setState] = useState(false);

  // 4. Render
  return (
    <div>
      {/* JSX */}
    </div>
  );
}
```

### Type Definitions

- Use `type` (not `interface`) for props and simple types
- Use `interface` for complex object shapes if preferred
- Always wrap component props in `Readonly<{...}>`
- Use explicit return types for functions when not obvious

### Naming Conventions

- **Components/Functions:** PascalCase (`Header`, `ProjectItem`)
- **Variables/Constants:** camelCase (`isActive`, `userData`)
- **Constants:** UPPER_SNAKE_CASE for config values
- **Props:** camelCase, descriptive names

### React/Next.js Specific

- Use Next.js `<Link>` for internal navigation
- Use `next/font/google` for Google Fonts
- Use `<section>`, `<nav>`, `<main>`, `<footer>` for semantic HTML
- Use Tailwind utility classes for all styling
- Add `lang="es"` to `<html>` for Spanish content

### Tailwind CSS

- Use Tailwind CSS 4 (no config file needed)
- Common classes used in this project:
  - Layout: `flex`, `grid`, `max-w-7xl mx-auto px-6`
  - Typography: `font-mono`, `font-black`, `text-4xl`, `uppercase`, `tracking-widest`
  - Colors: `bg-black`, `text-white`, `text-primary`, `text-neon`
  - Borders: `border-2`, `border-white`
  - Responsive: `md:`, `lg:` prefixes

### Error Handling

- Let errors propagate to Next.js error boundaries
- Use `console.error` sparingly for debugging
- Validate props with TypeScript (no runtime validation needed)

### ESLint Configuration

- Uses `eslint-config-next/core-web-vitals` and `typescript`
- Default ignores: `.next/`, `out/`, `build/`, `next-env.d.ts`
- Run `npm run lint` before committing

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   ├── globals.css      # Global styles
│   ├── dev/             # /dev route
│   ├── condiciones/     # /condiciones route
│   ├── privacidad/     # /privacidad route
│   └── conducta/       # /conducta route
└── components/
    ├── Header.tsx
    ├── Footer.tsx
    ├── Hero.tsx
    ├── Projects.tsx
    ├── About.tsx
    ├── Stats.tsx
    ├── Join.tsx
    ├── projects/
    │   └── Item.tsx
    └── about/
        └── Item.tsx
```

---

## Common Tasks

### Adding a New Page

1. Create folder in `src/app/[page-name]/`
2. Create `page.tsx` inside the folder
3. Add to navigation in `Header.tsx`

### Adding a New Component

1. Create file in appropriate `src/components/` folder
2. Use PascalCase filename
3. Export as default function
4. Define props type with `type`

### Adding Tailwind Classes

- Tailwind CSS 4 is configured - no config file needed
- Add classes directly to elements
- Use `group` and `group-hover:` for hover states on parent elements

---

## Language

- All user-facing content should be in **Spanish**
- Code comments should be in **English**
- Variable/function names in **English**
