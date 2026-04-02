# Project Overview

A Next.js 16 dog photo sharing web application with authentication, photo upload, and user profiles. Built with React 19, TypeScript, and Tailwind CSS v4, using a REST API backend for data persistence.

## Repository Structure

- `app/` — Next.js App Router pages and API routes (auth, account, photo, profile)
- `components/` — React components organized as `ui/` (Radix primitives), `templates/` (page layouts), `molecules/` (composite UI)
- `hooks/` — Custom React hooks (useDebounce)
- `lib/` — Utilities (api.ts client, utils.ts, fonts.ts) and envConfig
- `schema/` — Zod validation schemas for forms
- `store/` — React Context providers (user-provider.tsx)
- `types/` — TypeScript type definitions
- `public/` — Static assets

## Build & Development Commands

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run ESLint
pnpm lint

# Format code with Prettier
pnpm format
```

## Code Style & Conventions

- **Formatter**: Prettier with `prettier-plugin-tailwindcss`
- **Linter**: ESLint with `eslint-config-next/core-web-vitals`, `eslint-config-next/typescript`, and `eslint-plugin-react-hooks`
- **Styling**: Tailwind CSS v4 with `tailwindcss-animate-css`
- **Naming**: PascalCase for components (`PhotoContent.tsx`), camelCase for utilities and hooks
- **Validation**: Zod schemas in `schema/` directory
- **Commits**: Conventional commits (subject line only, no body)

> TODO: Add commit-message template to `.git/hooks/`

## Architecture Notes

```
┌─────────────────┐     ┌──────────────────┐     ┌─────────────────┐
│   Next.js App   │────▶│   lib/api.ts     │────▶│ External API    │
│   (Pages/API)   │     │   (HTTP Client)  │     │ dogsapi.orig    │
└─────────────────┘     └──────────────────┘     └─────────────────┘
        │                                                ▲
        ▼                                                │
┌─────────────────┐     ┌──────────────────┐            │
│  Components/   │     │   Schema/         │            │
│  Molecules/    │◀───▶│   (Zod validation)│────────────┘
│  UI/           │     └──────────────────┘
└─────────────────┘
        │
        ▼
┌─────────────────┐
│  Store/        │
│  (User Context)│
└─────────────────┘
```

Client-side state managed via React Context in `store/user-provider.tsx`. API communication uses `fetch` with Next.js `revalidate` tags for caching. Forms use Zod schemas for client-side validation before API submission.

## Testing Strategy

> TODO: No test framework configured. Add unit/integration tests (e.g., Vitest, React Testing Library).

## Security & Compliance

- **Secrets**: Environment variables in `.env`; never commit to git (see `.gitignore`)
- **API URL**: Configure via `API_URL` in `.env` (default: `https://dogsapi.origamid.dev`)
- **Auth**: JWT-based; token stored client-side in React Context

## Agent Guardrails

- Do **not** modify `node_modules/`, `.next/`, or `pnpm-lock.yaml`
- Do **not** commit secrets or `.env` files
- Require review for changes to `lib/api.ts` or authentication flows
- Rate-limited by CI (lint/typecheck must pass before merge)

## Extensibility Hooks

- **Environment Variables**: `API_URL` (external API endpoint)
- **Feature Flags**: None currently; add via environment or config
- **Plugin Points**: Add new API endpoints in `lib/api.ts`, new schemas in `schema/`

## Further Reading

- Next.js 16 Docs: https://nextjs.org/docs
- Tailwind CSS v4: https://tailwindcss.com/docs
- Zod Validation: https://zod.dev
- Radix UI: https://radix-ui.com
