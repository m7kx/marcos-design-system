---
title: "ADR-0004 — Testing Strategy"
date: 2026-02-24
status: accepted
tags:
  - adr
  - testing
  - jest
  - a11y
  - chromatic
---

# ADR-0004 — Testing Strategy

## Status
Accepted — 2026-02-24

## Contexto

Um design system sem testes é frágil. Mudanças no output do Style Dictionary podem quebrar silenciosamente
integrações downstream (VivAir). Componentes sem testes de acessibilidade podem introduzir regressões.

## Decisão

Adotar uma estratégia de 3 camadas, implementadas progressivamente por fase:

## Camada 1: Unit Tests nos Tokens (Fase 2 — implementada)

Valida que o output do Style Dictionary está estruturalmente correto após cada build.

```bash
# Após pnpm tokens:build
pnpm --filter @marcos-ds/tokens test
```

**Ferramenta:** Jest (via `--experimental-vm-modules` para ESM)
**Localização:** `packages/tokens/__tests__/output.test.mjs`

**O que testa:**
- Arquivos de output existem (JSON, CSS)
- Estrutura de tokens esperada (color.brand.gold, spacing scale, typography)
- CSS contém `:root` e prefixo `--mds-`

> [!tip] Princípio
> Os testes validam **contratos** — não valores específicos de hex.
> Isso evita testes frágeis que quebram a cada ajuste de valor.

## Camada 2: Accessibility Testing nos Componentes (Fase 3)

Quando o `@marcos-ds/ui` crescer, adicionar testes a11y com axe-core.

```bash
pnpm add -D @axe-core/react -w
```

```tsx
// packages/ui/__tests__/Button.a11y.test.tsx
import { render } from "@testing-library/react"
import { axe } from "jest-axe"
import { Button } from "../src/Button"

test("Button is accessible", async () => {
  const { container } = render(<Button>Click me</Button>)
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})
```

## Camada 3: Visual Regression com Chromatic (Fase 4+)

Quando Storybook estiver integrado:
- Conectar Chromatic (free tier: 5.000 snapshots/mês)
- Rodar em cada PR via GitHub Action
- Detecta regressões visuais antes do merge

> [!info] Prioridade
> Camada 3 só faz sentido com Storybook. Não implementar antes da Fase 4.

## Consequências

- ✅ Tokens têm contrato validado automaticamente a cada build
- ✅ Componentes não regridem em acessibilidade (Fase 3+)
- ✅ Visual regression como safety net na revisão de PR (Fase 4+)
- ⚠️ Jest com ESM requer flag `--experimental-vm-modules` — aceitável no Node >=20
