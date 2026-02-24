"use client"
import { PageHeader } from "@/components/page-header"
import { CopyButton } from "@/components/copy-button"
import { radiusTokens } from "@/lib/tokens"

export default function RadiusPage() {
  return (
    <div className="space-y-12">
      <PageHeader
        title="Border Radius"
        description="Escala de border-radius do sistema. Preview ao vivo de cada valor."
        badge="Foundations"
      />

      <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {radiusTokens.map((t) => (
          <div key={t.name} className="group space-y-3">
            <div
              className="w-full aspect-square max-w-[100px] bg-[var(--mds-color-brand-primary)] opacity-70"
              style={{ borderRadius: t.value }}
            />
            <div className="space-y-1.5">
              <div className="text-xs font-mono text-[var(--mds-color-text-primary)]">{t.name.replace("radius.", "")}</div>
              <div className="text-xs text-[var(--mds-color-text-muted)]">{t.value}</div>
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
