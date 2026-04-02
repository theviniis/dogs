# Dogs App Constitution

## Core Principles

### I. Code Quality

Code must be self-documenting with clear naming and structure. Follow existing patterns in the codebase - match the style of neighboring files. Keep functions small and focused (single responsibility). Remove dead code and unused exports. Lint and typecheck must pass before any commit.

### II. Testing Standards

Write tests for new features and bug fixes. Unit tests for utilities and hooks. Component tests for UI behavior. Integration tests for API routes. Test edge cases, not just happy paths. No shipping untested code.

### III. User Experience Consistency

Always prefer shadcn/ui components from `components/ui/` before building custom solutions. Extend them via compound components or `className` overrides when needed. Only create custom components when shadcn lacks required functionality. Follow design patterns established in `components/molecules/` and `components/templates/`. Maintain consistent spacing, typography, and color usage via Tailwind CSS. Handle loading, error, and empty states for every data fetch. Ensure accessibility (keyboard navigation, ARIA labels).

### IV. Performance Requirements

Optimize images with Next.js Image component. Lazy load routes and heavy components. Debounce user input in search/filter forms. Minimize client-side state; prefer server components. Monitor bundle size; no large dependencies without justification. Use proper caching with Next.js revalidate tags.

## Commit Conventions

Use conventional commits with semantic messages:

- `feat:` new feature
- `fix:` bug fix
- `refactor:` code restructure without behavior change
- `docs:` documentation only
- `chore:` maintenance, deps, tooling
- `style:` formatting, no logic change
- `test:` adding/updating tests

Format: `type: description` (imperative mood, lowercase). Keep lines under 72 characters. Reference issues when applicable.

## Code Style

- Components: PascalCase (`PhotoContent.tsx`)
- Utilities/Hooks: camelCase (`useDebounce.ts`)
- Files: Functional components with hooks; no class components
- Types: Explicit typing; avoid `any`
- Styling: Tailwind CSS v4 classes; no inline styles unless dynamic
- Imports: Absolute imports via `@/` alias
- Components: Compound component pattern for composite UI (export default component object with Root, Option, Title, etc.)

## Development Workflow

All changes require code review. Follow conventional commits. Run `pnpm lint` and `pnpm build` before merging. No secrets in code. Environment variables in `.env`; never commit.

## Governance

Constitution supersedes other practices. Amendments require documentation and testing plan. Use `AGENTS.md` for agent-specific guidance.

**Version**: 1.0.0 | **Ratified**: 2026-04-02 | **Last Amended**: 2026-04-02
