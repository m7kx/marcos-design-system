"use client"
import { PageHeader } from "@/components/page-header"
import { CopyButton } from "@/components/copy-button"
import { shadowTokens } from "@/lib/tokens"

export default function ShadowsPage() {
  return (
    <div className="space-y-12">
      <PageHeader
        title="Shadows"
        description="Escala de sombras com preview ao vivo. Da sutil à expressiva."
        badge="Foundations"
      />

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {shadowTokens.map((t) => (
          <div key={t.name} className="group space-y-4">
            <div
              className="w-full h-24 rounded-xl bg-[var(--mds-color-bg-secondary)] border border-[var(--mds-color-border-default)]"
              style={{ boxShadow: t.value }}
            />
            <div className="space-y-1.5">
              <div className="text-xs font-mono text-[var(--mds-color-text-primary)]">{t.name}</div>
              <div className="text-xs text-[var(--mds-color-text-muted)] font-mono break-all line-clamp-2">{t.value}</div>
              <div className="flex flex-wrap gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <CopyButton text={t.value} />
                <CopyButton text={`var(${t.cssVar})`} label="CSS" />
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}
