"use client"
import { useState } from "react"

interface CopyButtonProps {
  text: string
  label?: string
  className?: string
}

export function CopyButton({ text, label, className = "" }: CopyButtonProps) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <button
      onClick={copy}
      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-mono
        bg-[var(--mds-color-bg-secondary)] border border-[var(--mds-color-border-default)]
        text-[var(--mds-color-text-muted)] hover:text-[var(--mds-color-brand-primary)]
        hover:border-[var(--mds-color-brand-primary)] transition-colors cursor-pointer
        ${className}`}
    >
      {copied ? (
        <>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
          copied
        </>
      ) : (
        <>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
          {label || text}
        </>
      )}
    </button>
  )
}
