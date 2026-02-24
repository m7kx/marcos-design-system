# @marcos-ds/tokens

> Fonte única da verdade para todos os valores visuais do marcos design system.

Este pacote contém os design tokens em formato JSON, organizados em 3 camadas semânticas. O [Style Dictionary v4](https://styledictionary.style/) compila esses arquivos e gera saídas para CSS, JavaScript e JSON.

## Arquitetura — 3 camadas

```
src/
├── primitive/          # Valores brutos — nunca usados diretamente no código
│   ├── color.json      # Paleta gold/neutral completa (50 → 950)
│   ├── spacing.json    # Escala numérica de 0 → 96
│   └── typography.json # Famílias, tamanhos, pesos, line-heights
│
├── semantic/           # Intenção — liga primitivos a significados
│   ├── color-semantic.json   # brand, text, background, border, feedback
│   └── elevation.json        # Sombras por nível (sm, md, lg, xl)
│
└── component/          # Valores específicos de componentes
    └── button.json     # Padding, radius, font-size por variante
```

### Regra fundamental

| Camada | Editar quando | Exemplos |
|--------|---------------|---------|
| `primitive` | Mudar a paleta inteira | `color.gold.400 = #d4a853` |
| `semantic` | Mudar o significado de um valor | `color.brand.primary → color.gold.500` |
| `component` | Ajustar um componente específico | `button.padding.sm = spacing.3` |

## Saídas compiladas

```
output/
├── css/variables.css   # CSS custom properties (:root)
├── js/tokens.js        # ES module com todas as constantes
├── js/tokens.d.ts      # Declarações TypeScript
└── json/tokens.json    # JSON aninhado (Figma / Tokens Studio)
```

## Scripts

```bash
# Compilar tokens (gera output/)
pnpm build

# Watch mode — recompila ao salvar
pnpm dev
```

## Usar em outro projeto

```css
/* Importar variáveis CSS */
@import "@marcos-ds/tokens/css";

.meu-botao {
  background: var(--color-brand-primary);
  padding: var(--spacing-3) var(--spacing-6);
}
```

```ts
// Usar constantes JS
import { tokens } from "@marcos-ds/tokens"

const brandColor = tokens.color.brand.primary // "#d4a853"
```

## Adicionar novos tokens

1. Editar o arquivo `.json` correto em `src/`
2. Rodar `pnpm build`
3. Os arquivos em `output/` são gerados automaticamente — **não editar manualmente**
4. Commitar `src/` e `output/` juntos

> `output/` é versionado intencionalmente para que projetos consumidores não precisem buildar os tokens.
