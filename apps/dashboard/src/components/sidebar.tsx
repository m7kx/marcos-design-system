"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "./theme-toggle"

const nav = [
  {
    label: "Foundations",
    icon: "📐",
    items: [
      { href: "/foundations/colors",      label: "Colors" },
      { href: "/foundations/typography",  label: "Typography" },
      { href: "/foundations/spacing",     label: "Spacing" },
      { href: "/foundations/radius",      label: "Border Radius" },
      { href: "/foundations/shadows",     label: "Shadows" },
      { href: "/foundations/motion",      label: "Motion" },
    ],
  },
  {
    label: "Components",
    icon: "🧩",
    items: [
      { href: "/components/buttons", label: "Buttons" },
      { href: "/components/cards",   label: "Cards" },
      { href: "/components/badges",  label: "Badges" },
      { href: "/components/inputs",  label: "Inputs" },
    ],
  },
  {
    label: "Tokens",
    icon: "🎨",
    items: [
      { href: "/tokens", label: "Token Explorer" },
    ],
  },
  {
    label: "Motion Catalog",
    icon: "✨",
    items: [
      { href: "/motion-catalog/word-morph",   label: "Word Morph" },
      { href: "/motion-catalog/split-char",   label: "Split Char Reveal" },
      { href: "/motion-catalog/staggered",    label: "Staggered Lines" },
      { href: "/motion-catalog/ticker",       label: "Ticker Marquee" },
    ],
  },
  {
    label: "Integrations",
    icon: "🔗",
    items: [
      { href: "/integrations/vivair", label: "VivAir" },
    ],
  },
]

export function Sidebar() {
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(false)

  if (collapsed) {
    return (
      <div className="w-12 flex flex-col items-center py-4 border-r border-[var(--mds-color-border-default)] bg-[var(--mds-color-bg-secondary)]">
        <button
          onClick={() => setCollapsed(false)}
          className="text-[var(--mds-color-text-muted)] hover:text-[var(--mds-color-text-primary)] transition-colors"
        >
          ☰
        </button>
      </div>
    )
  }

  return (
    <aside className="w-60 flex flex-col border-r border-[var(--mds-color-border-default)] bg-[var(--mds-color-bg-secondary)]">
      {/* Header */}
      <div className="flex items-center justify-between px-4 h-14 border-b border-[var(--mds-color-border-default)]">
        <Link href="/" className="text-sm font-semibold text-[var(--mds-color-text-primary)] tracking-tight">
          marcos-ds
        </Link>
        <div className="flex items-center gap-1">
          <ThemeToggle />
          <button
            onClick={() => setCollapsed(true)}
            className="text-xs text-[var(--mds-color-text-muted)] hover:text-[var(--mds-color-text-primary)] px-1"
          >
            ←
          </button>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto py-4 px-2 space-y-4">
        {nav.map((section) => (
          <div key={section.label}>
            <div className="px-2 mb-1 text-xs font-medium text-[var(--mds-color-text-muted)] uppercase tracking-wider flex items-center gap-1.5">
              <span>{section.icon}</span>
              <span>{section.label}</span>
            </div>
            <ul className="space-y-0.5">
              {section.items.map((item) => {
                const active = pathname === item.href
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`block px-3 py-1.5 rounded-lg text-sm transition-colors ${
                        active
                          ? "bg-[var(--mds-color-brand-muted)] text-[var(--mds-color-brand-primary)] font-medium"
                          : "text-[var(--mds-color-text-secondary)] hover:text-[var(--mds-color-text-primary)] hover:bg-[var(--mds-color-bg-elevated)]"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="px-4 py-3 border-t border-[var(--mds-color-border-default)]">
        <p className="text-xs text-[var(--mds-color-text-muted)] italic">
          Code is temporary.
        </p>
      </div>
    </aside>
  )
}
