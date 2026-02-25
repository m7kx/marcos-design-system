"use client"
import { PageHeader } from "@/components/page-header"
import { CopyButton } from "@/components/copy-button"

const PARTNERS = ["NCL", "Royal Caribbean", "MSC Cruises", "Club Med", "Costa", "Civitatis", "Expedia TAAP", "HotelDo", "Sakura", "Speed Milhas"]

function Ticker({ items, speed = "30s" }: { items: string[]; speed?: string }) {
  const doubled = [...items, ...items]
  return (
    <div className="overflow-hidden">
      <div
        className="flex gap-8 whitespace-nowrap animate-ticker"
        style={{ animationDuration: speed }}
      >
        {doubled.map((item, i) => (
          <span key={i} className="text-sm font-medium text-[var(--mds-color-text-muted)] shrink-0 px-4 py-2 border border-[var(--mds-color-border-default)] rounded-full">
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

const code = `// CSS animation — no Framer Motion needed
// @keyframes ticker is defined in globals.css

const PARTNERS = ["NCL", "MSC Cruises", "Club Med", "Civitatis", ...]

function Ticker({ items }: { items: string[] }) {
  const doubled = [...items, ...items] // duplicate for seamless loop

  return (
    <div className="overflow-hidden">
      <div
        className="flex gap-8 whitespace-nowrap animate-ticker"
        style={{ animationDuration: "30s" }}
      >
        {doubled.map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>
    </div>
  )
}

// globals.css:
// @keyframes ticker {
//   from { transform: translateX(0); }
//   to   { transform: translateX(-50%); }
// }
// .animate-ticker {
//   animation: ticker linear infinite;
// }`

export default function TickerPage() {
  return (
    <div className="space-y-10">
      <PageHeader title="Horizontal Ticker" description="Faixa de texto ou logos deslizando em loop infinito. Parceiros, certificações, features. CSS puro — sem Framer Motion." badge="Motion Catalog" />

      <div className="rounded-xl border border-[var(--mds-color-border-default)] overflow-hidden">
        <div className="px-4 py-3 border-b border-[var(--mds-color-border-default)] bg-[var(--mds-color-bg-secondary)] flex items-center justify-between">
          <span className="text-sm font-medium text-[var(--mds-color-text-primary)]">Live Demo — Partners</span>
          <CopyButton text={code} label="copy code" />
        </div>
        <div className="py-8 bg-[var(--mds-color-bg-primary)]">
          <Ticker items={PARTNERS} />
        </div>
      </div>

      <div className="p-3 rounded-lg border border-[var(--mds-color-border-default)] bg-[var(--mds-color-bg-secondary)] text-xs text-[var(--mds-color-text-muted)]">
        Duplique o array para criar loop seamless. Ajuste <code className="font-mono text-[var(--mds-color-brand-primary)]">animationDuration</code> para controlar a velocidade.
      </div>

      <pre className="p-4 rounded-xl border border-[var(--mds-color-border-default)] bg-[var(--mds-color-bg-secondary)] text-xs font-mono text-[var(--mds-color-text-secondary)] overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  )
}
