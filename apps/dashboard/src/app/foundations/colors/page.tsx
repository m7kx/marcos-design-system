"use client"
import { PageHeader } from "@/components/page-header"
import { CopyButton } from "@/components/copy-button"
import { colorTokens } from "@/lib/tokens"

function getBrightness(hex: string): number {
  if (hex.startsWith("var")) return 128
  const r = parseInt(hex.slice(1,3),16)
  const g = parseInt(hex.slice(3,5),16)
  const b = parseInt(hex.slice(5,7),16)
  return (r * 299 + g * 587 + b * 114) / 1000
}

function ColorSwatch({ name, cssVar, hex }: { name: string; cssVar: string; hex: string }) {
  const dark = getBrightness(hex) > 128
  return (
    <div className="group">
      <div
        className="w-full h-16 rounded-lg mb-2 border border-black/5 cursor-pointer transition-transform hover:scale-105"
        style={{ backgroundColor: hex.startsWith("var") ? `var(${cssVar})` : hex }}
        title={hex}
      />
      <div className="space-y-1">
        <div className="text-xs font-medium text-[var(--mds-color-text-primary)] truncate">{name}</div>
        <div className="flex flex-wrap gap-1">
          <CopyButton text={hex} />
          <CopyButton text={`var(${cssVar})`} label="CSS" />
        </div>
      </div>
    </div>
  )
}

export default function ColorsPage() {
  return (
    <div className="space-y-12">
      <PageHeader
        title="Colors"
        description="Paleta completa de cores com swatches interativos. Clique em qualquer valor para copiar."
        badge="Foundations"
      />

      {Object.entries(colorTokens).map(([key, group]) => (
        <section key={key} className="space-y-4">
          <h2 className="text-sm font-semibold text-[var(--mds-color-text-muted)] uppercase tracking-widest">
            {group.label}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-4">
            {group.tokens.map((t) => (
              <ColorSwatch key={t.name} {...t} />
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
