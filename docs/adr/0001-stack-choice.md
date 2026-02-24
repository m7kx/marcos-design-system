# ADR-0001: Stack Choice

**Status:** Aceita
**Data:** 2026-02-24
**Autores:** Marcos

## Contexto

Necessidade de criar um design system em monorepo que seja: compartilhável entre projetos, fácil de manter, com build incremental e compatível com o stack já usado na VivAir.

## Decisão

Turborepo + pnpm workspaces como base do monorepo.

## Consequências

### Positivas
- Cache inteligente de builds (velocidade)
- `workspace:*` para dependências locais sem publish
- Compatível com Vercel nativo (mesmo fabricante)
- Build incremental — só rebuilda o que mudou

### Negativas / Trade-offs
- Curva de aprendizado inicial no turbo.json
- pnpm obrigatório (sem fallback npm/yarn)

## Alternativas Consideradas

| Opção | Motivo da exclusão |
|-------|--------------------|
| Nx | Mais pesado, overkill para 3 packages iniciais |
| Single repo (sem monorepo) | Não permite compartilhar tokens entre projetos |
| Lerna | Legado, substituído por Turborepo no ecossistema |
