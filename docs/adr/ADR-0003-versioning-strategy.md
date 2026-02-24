---
title: "ADR-0003 — Versioning Strategy (changesets + semver)"
date: 2026-02-24
status: accepted
tags:
  - adr
  - versioning
  - changesets
  - semver
---

# ADR-0003 — Versioning Strategy

## Status
Accepted — 2026-02-24

## Contexto

O monorepo publica múltiplos packages (`@marcos-ds/tokens`, `@marcos-ds/ui`, `@marcos-ds/config`).
Quando a VivAir consumir esses packages, qualquer breaking change precisa ser comunicado de forma
rastreável e previsível. Sem versioning explícito, atualizações silenciosas podem quebrar integrações.

## Decisão

Adotar **Changesets** (`@changesets/cli`) como ferramenta de versioning e release,
combinado com **Semantic Versioning (semver)** nos packages publicáveis.

### Por que Changesets?

- Projetado para monorepos — versiona packages individualmente
- Produz CHANGELOG.md automático por package
- Integra nativamente com pnpm workspaces
- Workflow simples: `pnpm changeset` → descreve a mudança → release faz o resto

### Semver aplicado

| Tipo de mudança | Versão | Exemplo |
|----------------|--------|---------|
| Breaking change (remove token, renomeia) | `major` | `0.1.0 → 1.0.0` |
| Nova feature (novo token, nova variante) | `minor` | `0.1.0 → 0.2.0` |
| Bugfix, ajuste de valor | `patch` | `0.1.0 → 0.1.1` |

> [!warning] Antes de 1.0.0
> Enquanto em `0.x.x`, breaking changes incrementam o `minor` (comportamento semver padrão para pre-1.0).
> Documentar no CHANGELOG o motivo.

## Workflow

### Ao fazer mudança que afeta packages:

```bash
# 1. Fazer as mudanças no código
# 2. Abrir o changeset interativo
pnpm changeset

# Selecionar packages afetados
# Escolher tipo: patch | minor | major
# Escrever descrição legível

# 3. Commit o changeset junto com o código
git add .changeset/
git commit -m "feat(tokens): add motion primitives"
```

### Na release (quando pronto para publicar):

```bash
# Aplica versões e atualiza CHANGELOGs
pnpm changeset version

# Publica no registry (quando aplicável)
pnpm changeset publish
```

> [!info] Registry
> Por ora, os packages são consumidos via workspace (`workspace:*`).
> Quando a VivAir consumir via NPM/GitHub Packages, configurar `.changeset/config.json` com o registry correto.

## CI: Automação futura

Quando o volume de releases justificar, adicionar GitHub Action:

```yaml
# .github/workflows/release.yml
# Baseado em: github.com/changesets/action
name: Release
on:
  push:
    branches: [main]
jobs:
  release:
    uses: changesets/action@v1
    with:
      publish: pnpm changeset publish
    env:
      GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

## Consequências

- ✅ VivAir pode fixar versão (`@marcos-ds/tokens@0.2.0`) com confiança
- ✅ Breaking changes são rastreáveis via CHANGELOG.md por package
- ✅ Nenhuma dependência externa para começar — só `@changesets/cli`
- ⚠️ Requer disciplina no workflow: abrir changeset a cada mudança relevante
