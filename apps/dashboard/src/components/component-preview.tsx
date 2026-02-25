"use client"
import type { ReactNode } from 'react'
import { useState } from "react"
import { CopyButton } from "./copy-button"

interface ComponentPreviewProps {
  title: string
  description?: string
  code: string
  children: ReactNode
  theme?: "light" | "dark" | "both"
}

export function ComponentPreview({ title, description, code, children, theme = "dark" }: ComponentPreviewProps) {
  const [showCode, setShowCode] = useState(false)

  return (
    <div className="rounded-xl border border-[var(--mds-color-border-default)] overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--mds-color-border-default)] bg-[var(--mds-color-bg-secondary)]">
        <div>
          <div className="text-sm font-medium text-[var(--mds-color-text-primary)]">{title}</div>
          {description && <div className="text-xs text-[var(--mds-color-text-muted)] mt-0.5">{description}</div>}
        </div>
        <div className="flex items-center gap-2">
          <CopyButton text={code} label="copy code" />
          <button
            onClick={() => setShowCode(!showCode)}
            className="text-xs text-[var(--mds-color-text-muted)] hover:text-[var(--mds-color-brand-primary)] transition-colors cursor-pointer"
          >
            {showCode ? "hide" : "code"}
          </button>
        </div>
      </div>

      {/* Preview */}
      <div className="p-8 flex flex-wrap items-center justify-center gap-4 min-h-[120px]
        bg-[var(--mds-color-bg-primary)] border-b border-[var(--mds-color-border-default)]">
        {children}
      </div>

      {/* Code */}
      {showCode && (
        <pre className="p-4 text-xs font-mono text-[var(--mds-color-text-secondary)] bg-[var(--mds-color-bg-secondary)] overflow-x-auto">
          <code>{code}</code>
        </pre>
      )}
    </div>
  )
}

interface PropsTableProps {
  props: Array<{
    name: string
    type: string
    default?: string
    description: string
    required?: boolean
  }>
}

export function PropsTable({ props }: PropsTableProps) {
  return (
    <div className="rounded-xl border border-[var(--mds-color-border-default)] overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="border-b border-[var(--mds-color-border-default)] bg-[var(--mds-color-bg-secondary)]">
            <th className="text-left px-4 py-3 text-xs font-medium text-[var(--mds-color-text-muted)] uppercase tracking-wider">Prop</th>
            <th className="text-left px-4 py-3 text-xs font-medium text-[var(--mds-color-text-muted)] uppercase tracking-wider">Type</th>
            <th className="text-left px-4 py-3 text-xs font-medium text-[var(--mds-color-text-muted)] uppercase tracking-wider hidden md:table-cell">Default</th>
            <th className="text-left px-4 py-3 text-xs font-medium text-[var(--mds-color-text-muted)] uppercase tracking-wider hidden lg:table-cell">Description</th>
          </tr>
        </thead>
        <tbody>
          {props.map((p, i) => (
            <tr key={p.name} className={`border-b border-[var(--mds-color-border-default)] last:border-0 ${i % 2 === 0 ? "" : "bg-[var(--mds-color-bg-secondary)]/30"}`}>
              <td className="px-4 py-3">
                <span className="font-mono text-xs text-[var(--mds-color-brand-primary)]">{p.name}</span>
                {p.required && <span className="ml-1 text-red-400 text-xs">*</span>}
              </td>
              <td className="px-4 py-3">
                <span className="font-mono text-xs text-[var(--mds-color-text-secondary)]">{p.type}</span>
              </td>
              <td className="px-4 py-3 hidden md:table-cell">
                <span className="font-mono text-xs text-[var(--mds-color-text-muted)]">{p.default || "—"}</span>
              </td>
              <td className="px-4 py-3 hidden lg:table-cell">
                <span className="text-xs text-[var(--mds-color-text-muted)]">{p.description}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
