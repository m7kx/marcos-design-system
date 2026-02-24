# @marcos-ds/dashboard

Dashboard público do marcos design system — a interface visual de todos os tokens, componentes e animações.

🔗 **[marcos-design-system-marcos-2236s-projects.vercel.app](https://marcos-design-system-marcos-2236s-projects.vercel.app)**

## O que é

Um site Next.js 15 que documenta e demonstra ao vivo cada elemento do design system:
- **Token Explorer** — busca, filtra e copia qualquer token
- **Foundations** — visualização de cores, tipografia, espaçamento, sombras, radius, motion
- **Components** — preview ao vivo de cada componente com código copiável
- **Motion Catalog** — animações documentadas e demonstradas
- **Integrations** — guia de como usar o design system em outros projetos

## Stack

- **Next.js 15** com App Router
- **Tailwind CSS v4** com tokens do `@marcos-ds/tokens`
- **Framer Motion** para animações e demonstrações do Motion Catalog
- **shadcn/ui** para componentes base da interface do dashboard
- Deploy automático na **Vercel**

## Seções do dashboard

| Seção | Rota | Status |
|-------|------|--------|
| Home / Overview | `/` | ✅ Fase 1 |
| Foundations → Colors | `/foundations/colors` | 🔲 Fase 2 |
| Foundations → Typography | `/foundations/typography` | 🔲 Fase 2 |
| Foundations → Spacing | `/foundations/spacing` | 🔲 Fase 2 |
| Foundations → Radius | `/foundations/radius` | 🔲 Fase 2 |
| Foundations → Shadows | `/foundations/shadows` | 🔲 Fase 2 |
| Foundations → Motion | `/foundations/motion` | 🔲 Fase 2 |
| Components → Button | `/components/buttons` | 🔲 Fase 2 |
| Token Explorer | `/tokens` | 🔲 Fase 2 |
| Motion Catalog | `/motion-catalog` | 🔲 Fase 3 |
| Integrações → VivAir | `/integrations` | 🔲 Fase 3 |

## Rodar localmente

```bash
# Da raiz do monorepo
pnpm install
pnpm --filter @marcos-ds/tokens build  # gera os tokens primeiro

# Rodar o dashboard
pnpm --filter @marcos-ds/dashboard dev
```

Abrir [http://localhost:3000](http://localhost:3000).

## Deploy

- **Branch `main`** → produção automática na Vercel
- **Branch `dev`** → preview automático na Vercel

Cada PR gera um preview URL único para revisão antes de merge.

## Variáveis de ambiente

Nenhuma variável obrigatória para o dashboard base. Futuramente:

| Variável | Finalidade |
|----------|-----------|
| `NEXT_PUBLIC_TOKENS_VERSION` | Exibir versão atual dos tokens no dashboard |

## Estrutura

```
app/
├── (docs)/
│   ├── foundations/
│   │   ├── colors/
│   │   ├── typography/
│   │   ├── spacing/
│   │   ├── radius/
│   │   ├── shadows/
│   │   └── motion/
│   ├── components/
│   │   ├── buttons/
│   │   ├── cards/
│   │   ├── badges/
│   │   └── inputs/
│   ├── tokens/
│   ├── motion-catalog/
│   └── integrations/
├── layout.tsx          # Sidebar persistente + topbar + dark/light toggle
├── page.tsx            # Home: visão geral do design system
└── globals.css         # Import dos CSS vars dos tokens
```
