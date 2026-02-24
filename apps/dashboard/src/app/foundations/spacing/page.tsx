"use client"
import { PageHeader } from "@/components/page-header"
import { CopyButton } from "@/components/copy-button"
import { spacingTokens } from "@/lib/tokens"

export default function SpacingPage() {
  return (
    <div className="space-y-12">
      <PageHeader
        title="Spacing"
        description="Escala de espaçamento em múltiplos de 4px. Visualização da régua relativa."
        badge="Foundations"
      />

      <section className="space-y-2">
        {spacingTokens.map((t) => (
          <div key={t.name} className="group flex items-center gap-4 py-2 px-3 rounded-lg hover:bg-[var(--mds-color-bg-secondary)] transition-colors">
            {/* Ruler bar */}
            <div className="flex items-center w-48 shrink-0">
              {t.px > 0 ? (
                <div
                  className="h-5 rounded bg-[var(--mds-color-brand-primary)] opacity-70"
                  style={{ width: `${Math.min((t.px / 128) * 192, 192)}px` }}
                />
              ) : (
                <div className="h-5 w-px bg-[var(--mds-color-border-default)]" />
              )}
            </div>

            {/* Token name */}
            <div className="flex-1 min-w-0">
              <span className="text-xs font-mono text-[var(--mds-color-text-secondary)]">{t.name}</span>
            </div>

            {/* Value */}
            <div className="text-sm font-mono text-[var(--mds-color-brand-primary)] w-16 text-right">
              {t.value}
            </div>

            {/* Pixel */}
            <div className="text-xs text-[var(--mds-color-text-muted)] w-12 text-right">
              {t.px}px
            </div>

            {/* Copy buttons */}
            <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <CopyButton text={t.value} />
              <CopyButton text={`var(${t.cssVar})`} label="CSS" />
            </div>
          </div>
        ))}
      </section>

      {/* Box preview */}
      <section className="space-y-4">
        <h2 className="text-sm font-semibold text-[var(--mds-color-text-muted)] uppercase tracking-widest">Visual Preview</h2>
        <div className="flex flex-wrap gap-4 items-end">
          {spacingTokens.filter(t => t.px > 0 && t.px <= 32).map((t) => (
            <div key={t.name} className="flex flex-col items-center gap-1">
              <div
                className="bg-[var(--mds-color-brand-primary)] opacity-60 rounded"
                style={{ width: `${t.px}px`, height: `${t.px}px` }}
              />
              <span className="text-xs text-[var(--mds-color-text-muted)]">{t.value}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
