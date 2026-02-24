# 🎨 marcos-design-system

> "Code is temporary. Context is permanent."

Tokenized design system dashboard — monorepo centralizing all design decisions across Marcos's projects.

## Stack

| Layer | Tech |
|-------|------|
| Framework | Next.js 15 (App Router) |
| Monorepo | Turborepo + pnpm workspaces |
| Tokens | Style Dictionary v4 |
| UI | shadcn/ui + Radix UI |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Deploy | Vercel |

## Structure

```
apps/dashboard     ← Next.js 15 dashboard (public)
packages/tokens    ← Style Dictionary — source of truth
packages/ui        ← Component library
packages/config    ← Shared configs (eslint, ts, tailwind)
docs/adr           ← Architecture Decision Records
```

## Quick Start

```bash
pnpm install
pnpm dev
```

Dashboard: [marcos-design-system.vercel.app](https://marcos-design-system.vercel.app)

---

**First integration target:** [VivAir](https://github.com/m7kx/vivair-website)
