"use client"
import type { ReactNode } from 'react'
import { PageHeader } from "@/components/page-header"
import { ComponentPreview, PropsTable } from "@/components/component-preview"

function Badge({
  variant = "default",
  children,
  className = "",
}: {
  variant?: "default" | "secondary" | "outline" | "success" | "warning" | "error" | "info"
  children: ReactNode
  className?: string
}) {
  const base = "inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-medium"
  const variants = {
    default:   "border-transparent bg-[var(--mds-color-brand-primary)] text-[var(--mds-color-neutral-0)]",
    secondary: "border-[var(--mds-color-border-default)] bg-[var(--mds-color-bg-secondary)] text-[var(--mds-color-text-secondary)]",
    outline:   "border-[var(--mds-color-border-default)] text-[var(--mds-color-text-primary)]",
    success:   "border-green-500/30 bg-green-500/15 text-green-400",
    warning:   "border-yellow-500/30 bg-yellow-500/15 text-yellow-400",
    error:     "border-red-500/30 bg-red-500/15 text-red-400",
    info:      "border-blue-500/30 bg-blue-500/15 text-blue-400",
  }
  return <div className={`${base} ${variants[variant as keyof typeof variants]} ${className}`}>{children}</div>
}

const BADGE_PROPS = [
  { name: "variant", type: '"default" | "secondary" | "outline" | "success" | "warning" | "error" | "info"', default: '"default"', description: "Visual style" },
  { name: "children", type: "ReactNode", required: true, description: "Badge content" },
  { name: "className", type: "string", description: "Additional CSS classes" },
]

export default function BadgesPage() {
  return (
    <div className="space-y-10">
      <PageHeader
        title="Badge"
        description="Labels compactas para status, categorias e estados. 7 variantes semânticas."
        badge="Components"
      />

      <ComponentPreview
        title="Variants"
        description="7 variantes — brand, neutral, outline e 4 estados semânticos"
        code={`<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="error">Error</Badge>
<Badge variant="info">Info</Badge>`}
      >
        <Badge>Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="error">Error</Badge>
        <Badge variant="info">Info</Badge>
      </ComponentPreview>

      <ComponentPreview
        title="With icons"
        description="Combinado com ícones SVG para enriquecer o contexto"
        code={`<Badge variant="success">
  <svg width="8" height="8" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10"/></svg>
  Online
</Badge>
<Badge variant="error">
  <svg width="8" height="8" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10"/></svg>
  Offline
</Badge>
<Badge variant="warning">⚠ Pending</Badge>
<Badge variant="info">✦ New</Badge>`}
      >
        <Badge variant="success">
          <svg width="8" height="8" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10"/></svg>
          Online
        </Badge>
        <Badge variant="error">
          <svg width="8" height="8" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10"/></svg>
          Offline
        </Badge>
        <Badge variant="warning">⚠ Pending</Badge>
        <Badge variant="info">✦ New</Badge>
      </ComponentPreview>

      <ComponentPreview
        title="In context"
        description="Como ficam dentro de outros componentes"
        code={`<div className="flex items-center gap-2">
  <span>VivAir Premium</span>
  <Badge>New</Badge>
</div>
<div className="flex items-center gap-2">
  <span>Design System v0.2.0</span>
  <Badge variant="success">Stable</Badge>
</div>
<div className="flex items-center gap-2">
  <span>Motion Catalog</span>
  <Badge variant="warning">WIP</Badge>
</div>`}
      >
        <div className="flex items-center gap-2 text-sm text-[var(--mds-color-text-primary)]">
          <span>VivAir Premium</span>
          <Badge>New</Badge>
        </div>
        <div className="flex items-center gap-2 text-sm text-[var(--mds-color-text-primary)]">
          <span>Design System v0.2.0</span>
          <Badge variant="success">Stable</Badge>
        </div>
        <div className="flex items-center gap-2 text-sm text-[var(--mds-color-text-primary)]">
          <span>Motion Catalog</span>
          <Badge variant="warning">WIP</Badge>
        </div>
      </ComponentPreview>

      <div className="p-4 rounded-xl border border-[var(--mds-color-border-default)] bg-[var(--mds-color-bg-secondary)]">
        <div className="text-xs font-medium text-[var(--mds-color-text-muted)]">Import</div>
        <pre className="text-xs font-mono text-[var(--mds-color-text-secondary)] mt-1">{'import { Badge } from @marcos-ds/ui'}</pre>
      </div>

      <div className="space-y-3">
        <h2 className="text-sm font-semibold text-[var(--mds-color-text-muted)] uppercase tracking-widest">Props</h2>
        <PropsTable props={BADGE_PROPS} />
      </div>
    </div>
  )
}
