interface PageHeaderProps {
  title: string
  description: string
  badge?: string
}

export function PageHeader({ title, description, badge }: PageHeaderProps) {
  return (
    <div className="space-y-2 pb-8 border-b border-[var(--mds-color-border-default)]">
      {badge && (
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full
          border border-[var(--mds-color-brand-primary)] text-[var(--mds-color-brand-primary)]
          text-xs font-medium">
          {badge}
        </div>
      )}
      <h1 className="text-3xl font-bold tracking-tight text-[var(--mds-color-text-primary)]">
        {title}
      </h1>
      <p className="text-[var(--mds-color-text-secondary)] max-w-2xl">{description}</p>
    </div>
  )
}
