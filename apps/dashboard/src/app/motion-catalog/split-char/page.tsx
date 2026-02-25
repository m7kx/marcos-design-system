"use client"
import { useState } from "react"
import { PageHeader } from "@/components/page-header"
import { CopyButton } from "@/components/copy-button"

const TEXT = "VivAir Travel"

function SplitCharDemo({ trigger }: { trigger: boolean }) {
  return (
    <h2 className="text-5xl font-bold tracking-tight flex flex-wrap justify-center">
      {TEXT.split("").map((char, i) => (
        <span
          key={i}
          className="inline-block"
          style={{
            opacity: trigger ? 1 : 0,
            transform: trigger ? "translateY(0)" : "translateY(20px)",
            transition: trigger
              ? `opacity 400ms, transform 400ms cubic-bezier(0.34,1.56,0.64,1)`
              : "none",
            transitionDelay: trigger ? `${i * 40}ms` : "0ms",
            color: char === " " ? "transparent" : "var(--mds-color-text-primary)",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h2>
  )
}

const code = `"use client"
import { motion } from "framer-motion"

const charVariants = {
  hidden:  { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.04,
      type: "spring",
      stiffness: 120, // spring.gentle
      damping: 14,
    },
  }),
}

export function SplitCharReveal({ text }: { text: string }) {
  return (
    <h2>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          custom={i}
          variants={charVariants}
          initial="hidden"
          animate="visible"
        >
          {char}
        </motion.span>
      ))}
    </h2>
  )
}`

export default function SplitCharPage() {
  const [run, setRun] = useState(true)

  const replay = () => {
    setRun(false)
    setTimeout(() => setRun(true), 50)
  }

  return (
    <div className="space-y-10">
      <PageHeader title="Split Char Reveal" description="Cada caractere anima individualmente com spring — entrada expressiva para títulos de hero." badge="Motion Catalog" />

      <div className="rounded-xl border border-[var(--mds-color-border-default)] overflow-hidden">
        <div className="px-4 py-3 border-b border-[var(--mds-color-border-default)] bg-[var(--mds-color-bg-secondary)] flex items-center justify-between">
          <span className="text-sm font-medium text-[var(--mds-color-text-primary)]">Live Demo</span>
          <div className="flex gap-2">
            <button onClick={replay} className="text-xs text-[var(--mds-color-text-muted)] hover:text-[var(--mds-color-brand-primary)] transition-colors cursor-pointer">↺ replay</button>
            <CopyButton text={code} label="copy code" />
          </div>
        </div>
        <div className="p-12 flex items-center justify-center bg-[var(--mds-color-bg-primary)] min-h-[200px]">
          <SplitCharDemo trigger={run} />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="p-3 rounded-lg border border-[var(--mds-color-border-default)] bg-[var(--mds-color-bg-secondary)] space-y-1">
          <div className="text-xs font-medium text-[var(--mds-color-brand-primary)]">spring.gentle</div>
          <div className="text-xs font-mono text-[var(--mds-color-text-muted)]">stiffness: 120, damping: 14</div>
        </div>
        <div className="p-3 rounded-lg border border-[var(--mds-color-border-default)] bg-[var(--mds-color-bg-secondary)] space-y-1">
          <div className="text-xs font-medium text-[var(--mds-color-brand-primary)]">stagger</div>
          <div className="text-xs font-mono text-[var(--mds-color-text-muted)]">40ms per character</div>
        </div>
      </div>

      <pre className="p-4 rounded-xl border border-[var(--mds-color-border-default)] bg-[var(--mds-color-bg-secondary)] text-xs font-mono text-[var(--mds-color-text-secondary)] overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  )
}
