# @marcos-ds/ui

Biblioteca de componentes do marcos design system.

Baseada em [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/), com tokens de `@marcos-ds/tokens` aplicados. O código dos componentes vive neste repo — sem dependência de biblioteca externa de componentes.

## Componentes disponíveis

| Componente | Status | Descrição |
|-----------|--------|-----------|
| `Button` | ✅ Fase 1 | Variantes: primary, secondary, ghost, destructive, icon |
| `Card` | 🔲 Fase 2 | Container com elevação semântica |
| `Badge` | 🔲 Fase 2 | Labels de status e categorias |
| `Input` | 🔲 Fase 2 | Text input com estados e validação |
| `Typography` | 🔲 Fase 2 | Wrapper de tipografia por escala |

## Usar

```tsx
import { Button } from "@marcos-ds/ui"

export function Example() {
  return (
    <Button variant="primary" size="md">
      Reservar viagem
    </Button>
  )
}
```

## Variantes do Button

```tsx
// Variantes
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Destructive</Button>

// Tamanhos
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>

// Ícone
<Button variant="icon" size="icon">
  <ArrowRight />
</Button>
```

## Como os componentes consomem tokens

Os componentes usam as CSS variables geradas por `@marcos-ds/tokens`:

```css
/* Internamente, o Button usa: */
background: var(--color-brand-primary);
border-radius: var(--button-border-radius);
padding: var(--button-padding-md);
```

Mudar um token reflete automaticamente em todos os componentes que o consomem.

## Adicionar um novo componente

```bash
# Inicializar a partir do shadcn/ui (opcional)
pnpm dlx shadcn-ui@latest add [componente]

# Mover para src/components/[nome]/
# Substituir valores hardcoded por CSS variables dos tokens
# Exportar em src/index.ts
```

## Estrutura

```
src/
├── components/
│   ├── button/
│   │   ├── button.tsx
│   │   └── index.ts
│   └── [outros]/
├── lib/
│   └── utils.ts        # cn() helper
└── index.ts            # Barrel export
```
