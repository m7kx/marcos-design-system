# repo-context.md — marcos-design-system
<!-- Arquivo de contexto on-demand para IA. Leia ao iniciar sessao neste repo. -->
<!-- Padrao WF Tier 2. Nao substitui README.md. -->

## O que e este repo

`m7kx/marcos-design-system` e o **sistema de design e tokens visuais** do ecossistema M7K.
Monorepo com design tokens, componentes e storybook.

## Stack

- **Monorepo**: pnpm workspaces + Turborepo
- **Packages**: pasta `packages/` (tokens, componentes)
- **Apps**: pasta `apps/` (storybook, playground)
- **Docs**: pasta `docs/`
- **Versionamento**: Changesets (.changeset/)
- **Deploy**: Vercel (vercel.json)
- **CI**: GitHub Actions (.github/)

## Estrutura da raiz

```
marcos-design-system/
|-- packages/     -> tokens, componentes publicaveis
|-- apps/         -> storybook, playground
|-- docs/         -> documentacao do sistema
|-- .changeset/   -> controle de versoes (changesets)
|-- BACKLOG.md    -> itens pendentes do design system
|-- CHANGELOG.md  -> historico de versoes
|-- RESUME.md     -> resumo do estado atual
|-- turbo.json    -> config turborepo
|-- pnpm-workspace.yaml
```

## Status atual

- Ativo — tokens e componentes em desenvolvimento
- Verificar `RESUME.md` para estado atual e `BACKLOG.md` para proximos itens
- Branch default: `main`

## Regras de operacao

- Sempre usar pnpm (nao npm/yarn)
- Mudancas em packages publicaveis: gerar changeset antes do commit
- UI/UX: usar Gemini 3.1 como executor primario
- Commits: `feat:` / `fix:` / `docs:` / `chore:`
- Nao referenciar `surething-directives.md` aqui

---
*Last updated: 2026-03-08 | #st-generated*
