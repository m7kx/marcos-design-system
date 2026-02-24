"use client"
import { PageHeader } from "@/components/page-header"
import { CopyButton } from "@/components/copy-button"

function CodeBlock({ code, language = "bash" }: { code: string; language?: string }) {
  return (
    <div className="relative group">
      <pre className="p-4 rounded-xl bg-[var(--mds-color-bg-secondary)] border border-[var(--mds-color-border-default)]
        text-xs font-mono text-[var(--mds-color-text-secondary)] overflow-x-auto">
        <code>{code}</code>
      </pre>
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <CopyButton text={code.trim()} label="copy" />
      </div>
    </div>
  )
}

export default function IntegrationsPage() {
  return (
    <div className="space-y-12">
      <PageHeader
        title="VivAir Integration"
        description="Guia de integração do @marcos-ds/tokens e @marcos-ds/ui no projeto VivAir."
        badge="Integrations"
      />

      {/* Step 1: Install */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-full bg-[var(--mds-color-brand-primary)] text-white text-xs font-bold flex items-center justify-center shrink-0">1</div>
          <h2 className="text-base font-semibold text-[var(--mds-color-text-primary)]">Instalar os packages</h2>
        </div>
        <CodeBlock code={`# No repositório vivair-website
pnpm add @marcos-ds/tokens @marcos-ds/ui`} />
        <p className="text-xs text-[var(--mds-color-text-muted)]">
          Se os packages ainda não estão publicados no NPM, use workspace protocol ou GitHub Packages.
          Ver ADR-0003 para a estratégia de versioning.
        </p>
      </section>

      {/* Step 2: CSS Tokens */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-full bg-[var(--mds-color-brand-primary)] text-white text-xs font-bold flex items-center justify-center shrink-0">2</div>
          <h2 className="text-base font-semibold text-[var(--mds-color-text-primary)]">Importar os CSS tokens</h2>
        </div>
        <CodeBlock language="tsx" code={`// app/layout.tsx — importar uma vez na raiz
import "@marcos-ds/tokens/css"

// Todos os --mds-* CSS vars ficam disponíveis globalmente`} />
      </section>

      {/* Step 3: Use tokens in CSS / Tailwind */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-full bg-[var(--mds-color-brand-primary)] text-white text-xs font-bold flex items-center justify-center shrink-0">3</div>
          <h2 className="text-base font-semibold text-[var(--mds-color-text-primary)]">Usar tokens no CSS / Tailwind</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="text-xs font-medium text-[var(--mds-color-text-muted)]">CSS puro</div>
            <CodeBlock language="css" code={`.vivair-hero {
  background: var(--mds-color-brand-primary);
  color: var(--mds-color-neutral-0);
  padding: var(--mds-spacing-8);
  border-radius: var(--mds-radius-xl);
}`} />
          </div>
          <div className="space-y-2">
            <div className="text-xs font-medium text-[var(--mds-color-text-muted)]">Tailwind CSS (arbitrary values)</div>
            <CodeBlock language="tsx" code={`<div className="
  bg-[var(--mds-color-brand-primary)]
  p-[var(--mds-spacing-8)]
  rounded-[var(--mds-radius-xl)]
">
  VivAir Content
</div>`} />
          </div>
        </div>
      </section>

      {/* Step 4: Motion primitives */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-full bg-[var(--mds-color-brand-primary)] text-white text-xs font-bold flex items-center justify-center shrink-0">4</div>
          <h2 className="text-base font-semibold text-[var(--mds-color-text-primary)]">Consumir motion primitives</h2>
        </div>
        <CodeBlock language="tsx" code={`// Importar tokens JSON para usar em Framer Motion
import tokens from "@marcos-ds/tokens/json"

// Word Morph — usa duration.base (300ms) + easing.spring
const WordMorph = ({ word }: { word: string }) => (
  <motion.span
    key={word}
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{
      duration: 0.3, // motion.duration.base → 300ms
      ease: [0.34, 1.56, 0.64, 1], // motion.easing.spring
    }}
  >
    {word}
  </motion.span>
)

// Split Char Reveal — usa duration.fast + spring.gentle
const stagger = {
  animate: {
    transition: { staggerChildren: 0.04 }
  }
}

const char = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120, // motion.spring.gentle.stiffness
      damping: 14,    // motion.spring.gentle.damping
    }
  }
}`} />
      </section>

      {/* Step 5: Versioning */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-full bg-[var(--mds-color-brand-primary)] text-white text-xs font-bold flex items-center justify-center shrink-0">5</div>
          <h2 className="text-base font-semibold text-[var(--mds-color-text-primary)]">Versioning e updates</h2>
        </div>
        <CodeBlock code={`# Verificar versão instalada
pnpm list @marcos-ds/tokens

# Atualizar para nova versão
pnpm update @marcos-ds/tokens@0.2.0

# Verificar CHANGELOG antes de fazer major update
# github.com/m7kx/marcos-design-system/blob/main/packages/tokens/CHANGELOG.md`} />
        <div className="p-3 rounded-lg border border-[var(--mds-color-border-default)] bg-[var(--mds-color-bg-secondary)]">
          <div className="text-xs font-medium text-[var(--mds-color-brand-primary)] mb-1">Semver (ADR-0003)</div>
          <div className="grid grid-cols-3 gap-3 text-xs text-[var(--mds-color-text-muted)]">
            <div><span className="text-green-400 font-mono">patch</span> — ajuste de valor, bugfix</div>
            <div><span className="text-blue-400 font-mono">minor</span> — novo token, nova feature</div>
            <div><span className="text-rose-400 font-mono">major</span> — breaking change, token removido</div>
          </div>
        </div>
      </section>

      {/* Links */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {[
          { title: "GitHub — marcos-design-system", href: "https://github.com/m7kx/marcos-design-system", desc: "Repositório principal" },
          { title: "GitHub — vivair-website", href: "https://github.com/m7kx/vivair-website", desc: "Repositório VivAir" },
          { title: "Docs — ADR-0003", href: "https://github.com/m7kx/marcos-design-system/blob/main/docs/adr/ADR-0003-versioning-strategy.md", desc: "Estratégia de versioning" },
        ].map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-4 rounded-xl border border-[var(--mds-color-border-default)]
              bg-[var(--mds-color-bg-secondary)] hover:border-[var(--mds-color-brand-primary)] transition-colors"
          >
            <div>
              <div className="text-sm font-medium text-[var(--mds-color-text-primary)]">{link.title}</div>
              <div className="text-xs text-[var(--mds-color-text-muted)] mt-0.5">{link.desc}</div>
            </div>
            <span className="text-[var(--mds-color-text-muted)] group-hover:text-[var(--mds-color-brand-primary)] transition-colors">↗</span>
          </a>
        ))}
      </section>
    </div>
  )
}
