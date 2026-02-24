"use client"

export default function HomePage() {
  return (
    <div className="space-y-10">
      {/* Hero */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--mds-color-brand-primary)] text-[var(--mds-color-brand-primary)] text-xs font-medium">
          v0.1.0 — Fase 1 completa
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-[var(--mds-color-text-primary)]">
          marcos-design-system
        </h1>
        <p className="text-lg text-[var(--mds-color-text-secondary)] max-w-2xl">
          Vocabulário visual permanente de todos os projetos.
          Tokens em 3 camadas, componentes acessíveis, motion catalog.
        </p>
        <blockquote className="border-l-2 border-[var(--mds-color-brand-primary)] pl-4 text-[var(--mds-color-text-muted)] italic text-sm">
          "Code is temporary. Context is permanent."
        </blockquote>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Token layers",    value: "3" },
          { label: "Primitive tokens", value: "60+" },
          { label: "Components",      value: "1" },
          { label: "Integrations",    value: "VivAir" },
        ].map((s) => (
          <div
            key={s.label}
            className="p-4 rounded-xl border border-[var(--mds-color-border-default)] bg-[var(--mds-color-bg-secondary)]"
          >
            <div className="text-2xl font-bold text-[var(--mds-color-brand-primary)]">{s.value}</div>
            <div className="text-xs text-[var(--mds-color-text-muted)] mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Quick links */}
      <div className="space-y-3">
        <h2 className="text-sm font-medium text-[var(--mds-color-text-muted)] uppercase tracking-widest">
          Explore
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            { href: "/foundations/colors",   title: "Colors",      desc: "Paleta completa com swatches e tokens" },
            { href: "/foundations/typography", title: "Typography", desc: "Escala tipográfica com preview ao vivo" },
            { href: "/foundations/spacing",  title: "Spacing",     desc: "Grid de espaçamento visual" },
            { href: "/tokens",               title: "Token Explorer", desc: "Todos os tokens com copy de CSS var" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group flex items-center justify-between p-4 rounded-xl border border-[var(--mds-color-border-default)] bg-[var(--mds-color-bg-secondary)] hover:border-[var(--mds-color-brand-primary)] transition-colors"
            >
              <div>
                <div className="text-sm font-medium text-[var(--mds-color-text-primary)]">{item.title}</div>
                <div className="text-xs text-[var(--mds-color-text-muted)] mt-0.5">{item.desc}</div>
              </div>
              <span className="text-[var(--mds-color-text-muted)] group-hover:text-[var(--mds-color-brand-primary)] transition-colors">→</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
