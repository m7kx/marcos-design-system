---
title: "ADR-0005 — Motion Architecture"
date: 2026-02-24
status: accepted
tags:
  - adr
  - motion
  - tokens
  - framer-motion
  - vivair
---

# ADR-0005 — Motion Architecture

## Status
Accepted — 2026-02-24

## Contexto

O plano original incluía um Motion Catalog com animações específicas da VivAir (Word Morph Premium,
Split Char Reveal). Isso cria acoplamento indesejado entre o design system genérico e um projeto específico.

## Decisão

### O design system exporta vocabulário de movimento (primitives)

Os tokens de motion serão adicionados em `packages/tokens/src/primitive/motion.json`:

```json
{
  "motion": {
    "duration": {
      "instant":  { "value": "100ms" },
      "fast":     { "value": "150ms" },
      "base":     { "value": "300ms" },
      "slow":     { "value": "600ms" },
      "glacial":  { "value": "1200ms" }
    },
    "easing": {
      "ease":    { "value": "cubic-bezier(0.4, 0, 0.2, 1)" },
      "easeIn":  { "value": "cubic-bezier(0.4, 0, 1, 1)" },
      "easeOut": { "value": "cubic-bezier(0, 0, 0.2, 1)" },
      "spring":  { "value": "cubic-bezier(0.34, 1.56, 0.64, 1)" }
    },
    "spring": {
      "gentle":  { "value": "stiffness: 120, damping: 14" },
      "stiff":   { "value": "stiffness: 300, damping: 30" },
      "wobbly":  { "value": "stiffness: 180, damping: 12" }
    }
  }
}
```

### Os projetos constroem animações específicas em cima dos primitives

```tsx
// vivair-website — Word Morph consome os primitives do DS
import tokens from '@marcos-ds/tokens/json'

const transition = {
  duration: 0.3,  // tokens.motion.duration.base → 300ms → 0.3s
  ease: [0.34, 1.56, 0.64, 1]  // tokens.motion.easing.spring
}
```

### Motion Catalog no dashboard: primitives only

| Seção | Conteúdo |
|-------|----------|
| Durations | Playground com 5 durações side-by-side |
| Easings | Curva animada para cada easing curve |
| Springs | Demo de bounce para cada spring config |
| Usage guide | Como consumir tokens de motion nos projetos |

## Consequências

- ✅ Design system permanece genérico e reutilizável em qualquer projeto
- ✅ VivAir tem seu catálogo de animações próprio, construído em cima dos primitives
- ✅ Mudanças de timing propagam para todos os projetos automaticamente
- ⚠️ Requer adicionar `motion.json` nos tokens (planejado para Fase 2)
