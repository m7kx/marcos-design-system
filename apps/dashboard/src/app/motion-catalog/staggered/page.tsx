"use client"
import { useState } from "react"
import { PageHeader } from "@/components/page-header"
import { CopyButton } from "@/components/copy-button"

const ITEMS = [
  { icon: "✈", title: "Passagens aéreas",   desc: "NCL, Royal Caribbean, MSC"         },
  { icon: "🏨", title: "Hospedagem premium", desc: "Hotéis 5 estrelas curados"          },
  { icon: "🗺",  title: "Experiências",       desc: "Civitatis, Kaluah, USA Discovery"  },
  { icon: "⭐", title: "Milhas",             desc: "Speed Milhas, Busca Milhas"         },
]

function StaggeredDemo({ trigger }: { trigger: boolean }) {
  return (
    <div className="space-y-2 w-full max-w-xs">
      {ITEMS.map((item, i) => (
        <div
          key={item.title}
          className="flex items-center gap-3 p-3 rounded-lg border border-[var(--mds-color-border-default)] bg-[var(--mds-color-bg-secondary)]"
          style={{
            opacity: trigger ? 1 : 0,
            transform: trigger ? "translateY(0)" : "translateY(16px)",
            transition: trigger
              ? `opacity 300ms ease, transform 300ms cubic-bezier(0, 0, 0.2, 1)`
              : "none",
            transitionDelay: trigger ? `${i * 80}ms` : "0ms",
          }}
        >
          <span className="text-xl">{item.icon}</span>
          <div>
            <div className="text-sm font-medium text-[var(--mds-color-text-primary)]">{item.title}</div>
            <div className="text-xs text-[var(--mds-color-text-muted)]">{item.desc}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

const code = `const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const itemVariants = {
  hidden:  { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3, // duration.base
      ease: [0, 0, 0.2, 1], // easing.easeOut
    },
  },
}

<motion.ul variants={listVariants} initial="hidden" animate="visible">
  {items.map((item) => (
    <motion.li key={item.title} variants={itemVariants}>
      {item.title}
    </motion.li>
  ))}
</motion.ul>`

export default function StaggeredPage() {
  const [run, setRun] = useState(true)
  const replay = () => { setRun(false); setTimeout(() => setRun(true), 50) }

  return (
    <div className="space-y-10">
      <PageHeader title="Staggered List" description="Lista de itens entra em sequência com delay crescente — onboarding, feature lists, menus." badge="Motion Catalog" />

      <div className="rounded-xl border border-[var(--mds-color-border-default)] overflow-hidden">
        <div className="px-4 py-3 border-b border-[var(--mds-color-border-default)] bg-[var(--mds-color-bg-secondary)] flex items-center justify-between">
          <span className="text-sm font-medium text-[var(--mds-color-text-primary)]">Live Demo</span>
          <div className="flex gap-2">
            <button onClick={replay} className="text-xs text-[var(--mds-color-text-muted)] hover:text-[var(--mds-color-brand-primary)] transition-colors cursor-pointer">↺ replay</button>
            <CopyButton text={code} label="copy code" />
          </div>
        </div>
        <div className="p-10 flex items-center justify-center bg-[var(--mds-color-bg-primary)] min-h-[240px]">
          <StaggeredDemo trigger={run} />
        </div>
      </div>

      <pre className="p-4 rounded-xl border border-[var(--mds-color-border-default)] bg-[var(--mds-color-bg-secondary)] text-xs font-mono text-[var(--mds-color-text-secondary)] overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  )
}
