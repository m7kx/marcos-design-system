"use client"
import Link from "next/link"
import { PageHeader } from "@/components/page-header"

const EFFECTS = [
  {
    href: "/motion-catalog/word-morph",
    title: "Word Morph",
    desc: "Palavras transitam suavemente em sequência — ideal para headlines dinâmicas",
    tag: "Text · Framer Motion",
    primitives: "duration.base + easing.spring",
  },
  {
    href: "/motion-catalog/split-char",
    title: "Split Char Reveal",
    desc: "Caracteres surgem individualmente com spring — entrada expressiva de títulos",
    tag: "Text · Framer Motion",
    primitives: "spring.gentle + stagger",
  },
  {
    href: "/motion-catalog/staggered",
    title: "Staggered List",
    desc: "Lista de itens entra com delay sequencial — onboarding, cards, menus",
    tag: "Layout · Framer Motion",
    primitives: "duration.base + easing.easeOut + stagger 0.08s",
  },
  {
    href: "/motion-catalog/ticker",
    title: "Horizontal Ticker",
    desc: "Faixa de texto ou logos deslizando em loop infinito — barras de parceiros",
    tag: "Scroll · CSS Animation",
    primitives: "duration.glacial + linear easing",
  },
]

export default function MotionCatalogPage() {
  return (
    <div className="space-y-10">
      <PageHeader
        title="Motion Catalog"
        description="Padrões de animação reutilizáveis construídos em cima dos motion primitives. Cada efeito exporta um componente pronto para uso."
        badge="Motion"
      />

      <div className="p-3 rounded-lg border border-[var(--mds-color-border-default)] bg-[var(--mds-color-bg-secondary)] text-xs text-[var(--mds-color-text-muted)]">
        <strong className="text-[var(--mds-color-brand-primary)]">ADR-0005</strong> — Este catálogo é da VivAir, não do design system.
        O DS exporta apenas os <strong>primitives</strong> (duration, easing, spring). Cada projeto constrói suas animações específicas aqui.
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {EFFECTS.map((e) => (
          <Link
            key={e.href}
            href={e.href}
            className="group p-5 rounded-xl border border-[var(--mds-color-border-default)] bg-[var(--mds-color-bg-secondary)] hover:border-[var(--mds-color-brand-primary)] transition-colors space-y-3"
          >
            <div className="flex items-start justify-between">
              <h3 className="font-semibold text-[var(--mds-color-text-primary)] group-hover:text-[var(--mds-color-brand-primary)] transition-colors">{e.title}</h3>
              <span className="text-[var(--mds-color-text-muted)] group-hover:text-[var(--mds-color-brand-primary)] transition-colors">→</span>
            </div>
            <p className="text-sm text-[var(--mds-color-text-muted)]">{e.desc}</p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs px-2 py-0.5 rounded-full border border-[var(--mds-color-border-default)] text-[var(--mds-color-text-muted)]">{e.tag}</span>
              <span className="text-xs px-2 py-0.5 rounded-full border border-[var(--mds-color-brand-primary)]/30 text-[var(--mds-color-brand-primary)]">{e.primitives}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
