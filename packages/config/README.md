# @marcos-ds/config

Configurações compartilhadas para todos os pacotes e apps do monorepo.

## O que está aqui

### TypeScript

```
typescript/
├── base.json        # strict, ESNext, bundler resolution
├── nextjs.json      # extends base + configurações Next.js
└── library.json     # extends base + declarações de biblioteca
```

**Como usar em qualquer pacote:**

```json
// tsconfig.json
{
  "extends": "@marcos-ds/config/typescript/nextjs.json"
}
```

### ESLint

```
eslint/
├── base.js          # Regras base (eslint + typescript-eslint)
└── nextjs.js        # extends base + plugin next/core-web-vitals
```

**Como usar:**

```js
// eslint.config.js
import config from "@marcos-ds/config/eslint/nextjs"
export default config
```

### Tailwind CSS

```
tailwind/
└── base.js          # Configuração base com CSS variables dos tokens
```

**Como usar:**

```ts
// tailwind.config.ts
import baseConfig from "@marcos-ds/config/tailwind/base"
export default { ...baseConfig, content: ["./src/**/*.{ts,tsx}"] }
```

## Filosofia

Configs aqui têm mudança lenta e proposital. Não adicionar regras por impulso — cada regra deve ter justificativa clara.

Regras de linting muito rigorosas que atrapalham velocity durante exploração podem ser relaxadas pontualmente via `// eslint-disable-next-line`.
