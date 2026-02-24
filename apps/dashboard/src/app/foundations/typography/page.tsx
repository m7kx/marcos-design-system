"use client"
import { useState } from "react"
import { PageHeader } from "@/components/page-header"
import { CopyButton } from "@/components/copy-button"
import { typographyTokens } from "@/lib/tokens"

const sampleText = "The quick brown fox jumps over the lazy dog"

export default function TypographyPage() {
  const [preview, setPreview] = useState(sampleText)

  return (
    <div className="space-y-12">
      <PageHeader
        title="Typography"
        description="Escala tipográfica completa com preview ao vivo. Edite o texto para ver como os tamanhos se comportam."
        badge="Foundations"
      />

      {/* Live preview input */}
      <div className="p-4 rounded-xl border border-[var(--mds-color-border-default)] bg-[var(--mds-color-bg-secondary)]">
        <div className="text-xs text-[var(--mds-color-text-muted)] mb-2 font-medium">Preview text</div>
        <input
          value={preview}
          onChange={(e) => setPreview(e.target.value)}
          className="w-full bg-transparent text-[var(--mds-color-text-primary)] text-sm outline-none"
          placeholder="Type to preview..."
        />
      </div>

      {/* Font sizes */}
      <section className="space-y-4">
        <h2 className="text-sm font-semibold text-[var(--mds-color-text-muted)] uppercase tracking-widest">Font Sizes</h2>
        <div className="space-y-1">
          {typographyTokens.sizes.map((t) => (
            <div key={t.name} className="group flex items-baseline gap-4 py-3 px-4 rounded-lg hover:bg-[var(--mds-color-bg-secondary)] transition-colors">
              <div style={{ fontSize: t.value }} className="flex-1 text-[var(--mds-color-text-primary)] leading-none truncate">
                {preview}
              </div>
              <div className="flex items-center gap-2 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-xs text-[var(--mds-color-text-muted)]">{t.px}</span>
                <CopyButton text={t.value} />
                <CopyButton text={`var(${t.cssVar})`} label="CSS" />
              </div>
              <div className="text-xs text-[var(--mds-color-text-muted)] shrink-0 w-14 text-right">{t.value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Font families */}
      <section className="space-y-4">
        <h2 className="text-sm font-semibold text-[var(--mds-color-text-muted)] uppercase tracking-widest">Font Families</h2>
        <div className="space-y-3">
          {typographyTokens.families.map((t) => (
            <div key={t.name} className="p-4 rounded-xl border border-[var(--mds-color-border-default)] bg-[var(--mds-color-bg-secondary)]">
              <div style={{ fontFamily: t.value }} className="text-2xl text-[var(--mds-color-text-primary)] mb-2">
                {preview}
              </div>
              <div className="flex flex-wrap gap-2 items-center">
                <span className="text-xs font-mono text-[var(--mds-color-text-muted)]">{t.name}</span>
                <CopyButton text={t.value} />
                <CopyButton text={`var(${t.cssVar})`} label="CSS" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Font weights */}
      <section className="space-y-4">
        <h2 className="text-sm font-semibold text-[var(--mds-color-text-muted)] uppercase tracking-widest">Font Weights</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {typographyTokens.weights.map((t) => (
            <div key={t.name} className="p-4 rounded-xl border border-[var(--mds-color-border-default)] bg-[var(--mds-color-bg-secondary)] space-y-1">
              <div style={{ fontWeight: parseInt(t.value) }} className="text-xl text-[var(--mds-color-text-primary)]">{t.label}</div>
              <div className="text-xs text-[var(--mds-color-text-muted)]">{t.value}</div>
              <CopyButton text={`var(${t.cssVar})`} label="CSS" />
            </div>
          ))}
        </div>
      </section>

      {/* Line heights */}
      <section className="space-y-4">
        <h2 className="text-sm font-semibold text-[var(--mds-color-text-muted)] uppercase tracking-widest">Line Heights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {typographyTokens.lineHeights.map((t) => (
            <div key={t.name} className="p-4 rounded-xl border border-[var(--mds-color-border-default)] bg-[var(--mds-color-bg-secondary)] space-y-2">
              <div style={{ lineHeight: t.value }} className="text-sm text-[var(--mds-color-text-primary)] line-clamp-4">
                The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs.
              </div>
              <div className="space-y-1">
                <div className="text-xs font-mono text-[var(--mds-color-brand-primary)]">{t.value}</div>
                <CopyButton text={`var(${t.cssVar})`} label="CSS" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
