# marcos-design-system

> "Code is temporary. Context is permanent."

Design system tokenizado e centralizado — fonte única da verdade para todas as decisões visuais dos projetos de Marcos.

## O que é isso

Um monorepo público que serve como hub de design: tokens, componentes, animações e um dashboard interativo publicado na Vercel. Construído para durar e integrar com qualquer projeto futuro — começando pela VivAir.

## Dashboard

🔗 **[marcos-design-system-marcos-2236s-projects.vercel.app](https://marcos-design-system-marcos-2236s-projects.vercel.app)**

## Estrutura

```
marcos-design-system/
├── apps/
│   └── dashboard/          # Next.js 15 — site público do design system
├── packages/
│   ├── tokens/             # ⭐ Fonte única da verdade — Style Dictionary v4
│   ├── ui/                 # Biblioteca de componentes (shadcn/ui + Radix)
│   └── config/             # Configs compartilhadas (TS, Tailwind, ESLint)
├── docs/
│   └── adr/                # Architecture Decision Records
└── .github/
    ├── ISSUE_TEMPLATE/     # Epic, Story, Task, Bug
    └── workflows/          # CI: token-build + deploy
```

## Arquitetura de tokens — 3 camadas

```
Primitive → Semantic → Component
color.gold.400 → color.brand.primary → button.bg
```

Cada mudança em `packages/tokens/src/` gera automaticamente:
- `output/css/variables.css` — variáveis CSS para qualquer projeto
- `output/js/tokens.js` — constantes JS/TS
- `output/json/tokens.json` — para Figma / Tokens Studio

## Stack

| Camada | Tecnologia |
|--------|-----------|
| Framework | Next.js 15 (App Router) |
| Monorepo | Turborepo + pnpm workspaces |
| Tokens | Style Dictionary v4 |
| Componentes | shadcn/ui + Radix UI |
| Estilização | Tailwind CSS v4 |
| Animações | Framer Motion |
| Deploy | Vercel |

## Primeiros passos

```bash
# Clonar
git clone https://github.com/m7kx/marcos-design-system

# Instalar dependências
pnpm install

# Buildar tokens
pnpm --filter @marcos-ds/tokens build

# Rodar dashboard em dev
pnpm --filter @marcos-ds/dashboard dev
```

## Usar em outro projeto

```bash
pnpm add @marcos-ds/tokens @marcos-ds/ui
```

```css
/* No seu CSS global */
@import "@marcos-ds/tokens/css";
```

## Integrações planejadas

- [x] VivAir website (primeira integração)
- [ ] Projetos futuros

## Docs & Decisões

- [`docs/adr/0001-stack-choice.md`](docs/adr/0001-stack-choice.md) — Por que Turborepo
- [`docs/adr/0002-token-architecture.md`](docs/adr/0002-token-architecture.md) — Arquitetura 3 camadas

---

*Filosofia: cada token é uma decisão documentada. Cada componente é uma convenção estabelecida.*
