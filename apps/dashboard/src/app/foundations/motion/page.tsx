"use client"
import { useState } from "react"
import { PageHeader } from "@/components/page-header"
import { CopyButton } from "@/components/copy-button"
import { motionTokens } from "@/lib/tokens"

function DurationDemo({ ms, label }: { ms: number; label: string }) {
  const [running, setRunning] = useState(false)

  const trigger = () => {
    setRunning(true)
    setTimeout(() => setRunning(false), ms + 100)
  }

  return (
    <div className="relative h-12 bg-[var(--mds-color-bg-secondary)] rounded-lg overflow-hidden cursor-pointer" onClick={trigger}>
      <div
        className="absolute inset-y-0 left-0 bg-[var(--mds-color-brand-primary)] opacity-70 rounded-lg"
        style={{
          width: running ? "100%" : "0%",
          transition: running ? `width ${ms}ms ease` : "none",
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center text-xs font-medium text-[var(--mds-color-text-primary)] z-10">
        {running ? "▶" : "▷"} {label} ({ms}ms)
      </div>
    </div>
  )
}

function EasingDemo({ value, label }: { value: string; label: string }) {
  const [pos, setPos] = useState(false)

  const trigger = () => {
    setPos(true)
    setTimeout(() => setPos(false), 800)
  }

  return (
    <div className="relative h-12 bg-[var(--mds-color-bg-secondary)] rounded-lg overflow-hidden cursor-pointer border border-[var(--mds-color-border-default)]" onClick={trigger}>
      <div
        className="absolute top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[var(--mds-color-brand-primary)] flex items-center justify-center"
        style={{
          left: pos ? "calc(100% - 40px)" : "8px",
          transition: pos ? `left 600ms ${value}` : "none",
        }}
      />
      <div className="absolute inset-0 flex items-center justify-end pr-3 text-xs text-[var(--mds-color-text-muted)]">
        {label}
      </div>
    </div>
  )
}

function SpringDemo({ stiffness, damping, label }: { stiffness: number; damping: number; label: string }) {
  const [active, setActive] = useState(false)

  return (
    <div
      className="flex flex-col items-center gap-3 p-4 rounded-xl border border-[var(--mds-color-border-default)] bg-[var(--mds-color-bg-secondary)] cursor-pointer"
      onClick={() => { setActive(true); setTimeout(() => setActive(false), 800) }}
    >
      <div
        className="w-12 h-12 rounded-xl bg-[var(--mds-color-brand-primary)]"
        style={{
          transform: active ? "scale(1.4) rotate(15deg)" : "scale(1) rotate(0deg)",
          transition: active
            ? `transform 500ms cubic-bezier(0.34, 1.56, 0.64, 1)`
            : `transform 300ms ease`,
        }}
      />
      <div className="text-center">
        <div className="text-xs font-medium text-[var(--mds-color-text-primary)]">{label}</div>
        <div className="text-xs text-[var(--mds-color-text-muted)]">k={stiffness} d={damping}</div>
      </div>
    </div>
  )
}

export default function MotionPage() {
  return (
    <div className="space-y-12">
      <PageHeader
        title="Motion"
        description="Primitives de movimento — vocabulário de duração, easing e spring. Clique em cada demo para animá-lo. Projetos constroem animações específicas em cima desses primitives."
        badge="Foundations"
      />

      {/* Durations */}
      <section className="space-y-4">
        <h2 className="text-sm font-semibold text-[var(--mds-color-text-muted)] uppercase tracking-widest">Duration</h2>
        <div className="space-y-3">
          {motionTokens.durations.map((t) => (
            <div key={t.name} className="space-y-1">
              <DurationDemo ms={t.ms} label={`${t.label} — ${t.desc}`} />
              <div className="flex flex-wrap gap-2 px-1">
                <span className="text-xs font-mono text-[var(--mds-color-text-muted)]">{t.name}</span>
                <CopyButton text={t.value} />
                <CopyButton text={`var(${t.cssVar})`} label="CSS" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Easings */}
      <section className="space-y-4">
        <h2 className="text-sm font-semibold text-[var(--mds-color-text-muted)] uppercase tracking-widest">Easing</h2>
        <div className="space-y-3">
          {motionTokens.easings.map((t) => (
            <div key={t.name} className="space-y-1">
              <EasingDemo value={t.value} label={`${t.label} — ${t.desc}`} />
              <div className="flex flex-wrap gap-2 px-1">
                <span className="text-xs font-mono text-[var(--mds-color-text-muted)]">{t.name}</span>
                <CopyButton text={t.value} />
                <CopyButton text={`var(${t.cssVar})`} label="CSS" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Springs */}
      <section className="space-y-4">
        <h2 className="text-sm font-semibold text-[var(--mds-color-text-muted)] uppercase tracking-widest">Spring Configs</h2>
        <p className="text-xs text-[var(--mds-color-text-muted)]">
          Clique nos cards para ver a animação. Use com Framer Motion: <code className="text-[var(--mds-color-brand-primary)]">transition={"{{ type: 'spring', stiffness, damping }}"}</code>
        </p>
        <div className="grid grid-cols-3 gap-4">
          {motionTokens.springs.map((t) => (
            <div key={t.name} className="space-y-2">
              <SpringDemo stiffness={t.stiffness} damping={t.damping} label={t.label} />
              <div className="flex flex-wrap gap-1 justify-center">
                <CopyButton text={`{ type: 'spring', stiffness: ${t.stiffness}, damping: ${t.damping} }`} label="Framer" />
              </div>
              <div className="text-xs text-center text-[var(--mds-color-text-muted)]">{t.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ADR note */}
      <section className="p-4 rounded-xl border border-[var(--mds-color-border-default)] bg-[var(--mds-color-bg-secondary)]">
        <div className="text-xs font-medium text-[var(--mds-color-brand-primary)] mb-1">ADR-0005 — Motion Architecture</div>
        <p className="text-xs text-[var(--mds-color-text-muted)]">
          O design system exporta apenas <strong>primitives</strong> de motion (duration, easing, spring configs).
          Animações específicas de projeto — como Word Morph, Split Char Reveal — vivem no catálogo de cada projeto,
          construídas em cima desses primitives.
        </p>
      </section>
    </div>
  )
}
