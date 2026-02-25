"use client"
import type { ReactNode } from 'react'
import { useState } from "react"
import { PageHeader } from "@/components/page-header"
import { ComponentPreview, PropsTable } from "@/components/component-preview"

// Inline Button — mirrors packages/ui/src/components/button/index.tsx
// Dashboard uses its own copy to avoid circular dep before packages are published
function Button({
  variant = "primary",
  size = "md",
  disabled = false,
  loading = false,
  children,
  className = "",
  ...props
}: {
  variant?: "primary" | "secondary" | "ghost" | "destructive"
  size?: "sm" | "md" | "lg" | "icon"
  disabled?: boolean
  loading?: boolean
  children?: ReactNode
  className?: string
  [k: string]: any
}) {
  const base = "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--mds-color-brand-primary)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer rounded-md"

  const variants = {
    primary:     "bg-[var(--mds-color-brand-primary)] text-[var(--mds-color-neutral-0)] hover:opacity-90 active:opacity-80",
    secondary:   "border border-[var(--mds-color-border-default)] bg-[var(--mds-color-bg-secondary)] text-[var(--mds-color-text-primary)] hover:border-[var(--mds-color-brand-primary)] hover:text-[var(--mds-color-brand-primary)]",
    ghost:       "text-[var(--mds-color-text-secondary)] hover:bg-[var(--mds-color-bg-secondary)] hover:text-[var(--mds-color-text-primary)]",
    destructive: "bg-red-600 text-white hover:bg-red-700 active:bg-red-800",
  }

  const sizes = {
    sm:   "h-8 px-3 text-xs",
    md:   "h-10 px-6 text-sm",
    lg:   "h-12 px-8 text-base",
    icon: "h-10 w-10 text-sm",
  }

  return (
    <button
      disabled={disabled || loading}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {loading && (
        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
        </svg>
      )}
      {children}
    </button>
  )
}

const BUTTON_PROPS = [
  { name: "variant",   type: '"primary" | "secondary" | "ghost" | "destructive"', default: '"primary"',  description: "Visual style of the button"                  },
  { name: "size",      type: '"sm" | "md" | "lg" | "icon"',                       default: '"md"',       description: "Controls height and padding"                  },
  { name: "disabled",  type: "boolean",                                            default: "false",      description: "Prevents interaction and applies opacity"     },
  { name: "loading",   type: "boolean",                                            default: "false",      description: "Shows spinner and disables button"            },
  { name: "asChild",   type: "boolean",                                            default: "false",      description: "Renders as child element via Radix Slot"      },
  { name: "className", type: "string",                                             default: "—",          description: "Additional CSS classes"                       },
]

export default function ButtonsPage() {
  const [loadingDemo, setLoadingDemo] = useState(false)

  const triggerLoad = () => {
    setLoadingDemo(true)
    setTimeout(() => setLoadingDemo(false), 2000)
  }

  return (
    <div className="space-y-10">
      <PageHeader
        title="Button"
        description="Componente de ação principal. Suporta 4 variantes, 4 tamanhos, estados de loading e disabled. Construído com CVA + Radix Slot."
        badge="Components"
      />

      <ComponentPreview
        title="Variants"
        description="Quatro variantes para diferentes hierarquias de ação"
        code={`<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Destructive</Button>`}
      >
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">Destructive</Button>
      </ComponentPreview>

      <ComponentPreview
        title="Sizes"
        description="Quatro tamanhos: sm, md (padrão), lg e icon"
        code={`<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
<Button size="icon">
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
</Button>`}
      >
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
        <Button size="icon">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </Button>
      </ComponentPreview>

      <ComponentPreview
        title="States"
        description="Loading (clique) e disabled"
        code={`<Button loading={isLoading} onClick={trigger}>
  {isLoading ? "Carregando..." : "Click me"}
</Button>
<Button disabled>Disabled</Button>
<Button variant="secondary" disabled>Disabled</Button>`}
      >
        <Button loading={loadingDemo} onClick={triggerLoad}>
          {loadingDemo ? "Carregando..." : "Click me"}
        </Button>
        <Button disabled>Disabled</Button>
        <Button variant="secondary" disabled>Disabled</Button>
      </ComponentPreview>

      <ComponentPreview
        title="With icons"
        description="Ícone antes ou depois do label"
        code={`<Button variant="primary">
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 5v14M5 12l7 7 7-7"/>
  </svg>
  Download
</Button>
<Button variant="secondary">
  Share
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
    <polyline points="16 6 12 2 8 6"/>
    <line x1="12" y1="2" x2="12" y2="15"/>
  </svg>
</Button>`}
      >
        <Button variant="primary">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
          Download
        </Button>
        <Button variant="secondary">
          Share
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
            <polyline points="16 6 12 2 8 6"/>
            <line x1="12" y1="2" x2="12" y2="15"/>
          </svg>
        </Button>
      </ComponentPreview>

      {/* Install */}
      <div className="p-4 rounded-xl border border-[var(--mds-color-border-default)] bg-[var(--mds-color-bg-secondary)] space-y-2">
        <div className="text-xs font-medium text-[var(--mds-color-text-muted)]">Import</div>
        <pre className="text-xs font-mono text-[var(--mds-color-text-secondary)]">
          {`import { Button } from "@marcos-ds/ui"`}
        </pre>
        <div className="text-xs font-medium text-[var(--mds-color-text-muted)] pt-2">Source</div>
        <pre className="text-xs font-mono text-[var(--mds-color-text-secondary)]">
          {`packages/ui/src/components/button/index.tsx`}
        </pre>
      </div>

      {/* Props */}
      <div className="space-y-3">
        <h2 className="text-sm font-semibold text-[var(--mds-color-text-muted)] uppercase tracking-widest">Props</h2>
        <PropsTable props={BUTTON_PROPS} />
      </div>
    </div>
  )
}
