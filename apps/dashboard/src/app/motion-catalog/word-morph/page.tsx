"use client"
import { useState, useEffect } from "react"
import { PageHeader } from "@/components/page-header"
import { CopyButton } from "@/components/copy-button"

const WORDS = ["Destinos", "Memórias", "Experiências", "Aventuras", "Horizontes"]

export default function WordMorphPage() {
  const [idx, setIdx] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setIdx((i) => (i + 1) % WORDS.length)
        setVisible(true)
      }, 300)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const code = `"use client"
import { useState, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"

const WORDS = ["Destinos", "Memórias", "Experiências"]

export function WordMorph() {
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % WORDS.length), 2000)
    return () => clearInterval(t)
  }, [])

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={WORDS[idx]}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
        // duration.base (300ms) + easing.spring
      >
        {WORDS[idx]}
      </motion.span>
    </AnimatePresence>
  )
}`

  return (
    <div className="space-y-10">
      <PageHeader title="Word Morph" description="Transição suave entre palavras em sequência. Ideal para headlines animadas." badge="Motion Catalog" />

      {/* Live demo */}
      <div className="rounded-xl border border-[var(--mds-color-border-default)] overflow-hidden">
        <div className="px-4 py-3 border-b border-[var(--mds-color-border-default)] bg-[var(--mds-color-bg-secondary)] flex items-center justify-between">
          <span className="text-sm font-medium text-[var(--mds-color-text-primary)]">Live Demo</span>
          <CopyButton text={code} label="copy code" />
        </div>
        <div className="p-12 flex items-center justify-center bg-[var(--mds-color-bg-primary)] min-h-[200px]">
          <div className="text-center space-y-2">
            <p className="text-sm text-[var(--mds-color-text-muted)]">Descubra novos</p>
            <h2 className="text-5xl font-bold tracking-tight">
              <span
                className="text-[var(--mds-color-brand-primary)] inline-block"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(-12px)",
                  transition: visible
                    ? "opacity 300ms cubic-bezier(0.34,1.56,0.64,1), transform 300ms cubic-bezier(0.34,1.56,0.64,1)"
                    : "opacity 200ms ease, transform 200ms ease",
                }}
              >
                {WORDS[idx]}
              </span>
            </h2>
          </div>
        </div>
      </div>

      {/* Primitives used */}
      <div className="grid grid-cols-2 gap-3">
        <div className="p-3 rounded-lg border border-[var(--mds-color-border-default)] bg-[var(--mds-color-bg-secondary)] space-y-1">
          <div className="text-xs font-medium text-[var(--mds-color-brand-primary)]">duration.base</div>
          <div className="text-xs font-mono text-[var(--mds-color-text-muted)]">300ms</div>
        </div>
        <div className="p-3 rounded-lg border border-[var(--mds-color-border-default)] bg-[var(--mds-color-bg-secondary)] space-y-1">
          <div className="text-xs font-medium text-[var(--mds-color-brand-primary)]">easing.spring</div>
          <div className="text-xs font-mono text-[var(--mds-color-text-muted)]">cubic-bezier(0.34, 1.56, 0.64, 1)</div>
        </div>
      </div>

      <pre className="p-4 rounded-xl border border-[var(--mds-color-border-default)] bg-[var(--mds-color-bg-secondary)] text-xs font-mono text-[var(--mds-color-text-secondary)] overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  )
}
