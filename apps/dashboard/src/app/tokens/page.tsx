"use client"
import { useState, useMemo } from "react"
import { PageHeader } from "@/components/page-header"
import { CopyButton } from "@/components/copy-button"
import { colorTokens, spacingTokens, typographyTokens, radiusTokens, shadowTokens, motionTokens } from "@/lib/tokens"

type TokenEntry = {
  name: string
  cssVar: string
  value: string
  category: string
  swatch?: string
}

function buildAllTokens(): TokenEntry[] {
  const tokens: TokenEntry[] = []

  // Colors
  for (const group of Object.values(colorTokens)) {
    for (const t of group.tokens) {
      tokens.push({ name: t.name, cssVar: t.cssVar, value: t.hex, category: "color", swatch: t.hex })
    }
  }

  // Spacing
  for (const t of spacingTokens) {
    tokens.push({ name: t.name, cssVar: t.cssVar, value: t.value, category: "spacing" })
  }

  // Typography — sizes
  for (const t of typographyTokens.sizes) {
    tokens.push({ name: t.name, cssVar: t.cssVar, value: t.value, category: "typography" })
  }
  for (const t of typographyTokens.weights) {
    tokens.push({ name: t.name, cssVar: t.cssVar, value: t.value, category: "typography" })
  }
  for (const t of typographyTokens.lineHeights) {
    tokens.push({ name: t.name, cssVar: t.cssVar, value: t.value, category: "typography" })
  }

  // Radius
  for (const t of radiusTokens) {
    tokens.push({ name: t.name, cssVar: t.cssVar, value: t.value, category: "radius" })
  }

  // Shadows
  for (const t of shadowTokens) {
    tokens.push({ name: t.name, cssVar: t.cssVar, value: t.value, category: "shadow" })
  }

  // Motion
  for (const t of motionTokens.durations) {
    tokens.push({ name: t.name, cssVar: t.cssVar, value: t.value, category: "motion" })
  }
  for (const t of motionTokens.easings) {
    tokens.push({ name: t.name, cssVar: t.cssVar, value: t.value, category: "motion" })
  }

  return tokens
}

const ALL_TOKENS = buildAllTokens()
const CATEGORIES = ["all", "color", "spacing", "typography", "radius", "shadow", "motion"]

const CATEGORY_BADGE: Record<string, string> = {
  color:      "bg-rose-500/10 text-rose-400 border-rose-500/20",
  spacing:    "bg-blue-500/10 text-blue-400 border-blue-500/20",
  typography: "bg-violet-500/10 text-violet-400 border-violet-500/20",
  radius:     "bg-green-500/10 text-green-400 border-green-500/20",
  shadow:     "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  motion:     "bg-orange-500/10 text-orange-400 border-orange-500/20",
}

export default function TokenExplorerPage() {
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("all")

  const filtered = useMemo(() => {
    const q = search.toLowerCase()
    return ALL_TOKENS.filter((t) => {
      const matchCat = category === "all" || t.category === category
      const matchSearch = !q || t.name.toLowerCase().includes(q) || t.cssVar.toLowerCase().includes(q) || t.value.toLowerCase().includes(q)
      return matchCat && matchSearch
    })
  }, [search, category])

  return (
    <div className="space-y-8">
      <PageHeader
        title="Token Explorer"
        description={`${ALL_TOKENS.length} tokens disponíveis. Busque por nome, CSS var ou valor. Clique para copiar.`}
        badge="Explorer"
      />

      {/* Filters */}
      <div className="space-y-3">
        <div className="relative">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--mds-color-text-muted)]" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
          </svg>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar por nome, CSS var ou valor..."
            className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-[var(--mds-color-border-default)]
              bg-[var(--mds-color-bg-secondary)] text-[var(--mds-color-text-primary)] text-sm outline-none
              focus:border-[var(--mds-color-brand-primary)] transition-colors"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors cursor-pointer
                ${category === c
                  ? "bg-[var(--mds-color-brand-primary)] text-white border-[var(--mds-color-brand-primary)]"
                  : "border-[var(--mds-color-border-default)] text-[var(--mds-color-text-muted)] hover:border-[var(--mds-color-brand-primary)] hover:text-[var(--mds-color-brand-primary)]"
                }`}
            >
              {c === "all" ? `All (${ALL_TOKENS.length})` : c}
            </button>
          ))}
        </div>
      </div>

      {/* Results count */}
      <div className="text-xs text-[var(--mds-color-text-muted)]">
        {filtered.length} token{filtered.length !== 1 ? "s" : ""}
        {search && ` para "${search}"`}
      </div>

      {/* Token list */}
      <div className="border border-[var(--mds-color-border-default)] rounded-xl overflow-hidden">
        {filtered.length === 0 ? (
          <div className="py-16 text-center text-[var(--mds-color-text-muted)] text-sm">
            Nenhum token encontrado para "{search}"
          </div>
        ) : (
          <table className="w-full">
            <thead>
              <tr className="border-b border-[var(--mds-color-border-default)] bg-[var(--mds-color-bg-secondary)]">
                <th className="text-left px-4 py-3 text-xs font-medium text-[var(--mds-color-text-muted)] uppercase tracking-wider">Token</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-[var(--mds-color-text-muted)] uppercase tracking-wider hidden sm:table-cell">CSS Var</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-[var(--mds-color-text-muted)] uppercase tracking-wider">Value</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-[var(--mds-color-text-muted)] uppercase tracking-wider hidden md:table-cell">Category</th>
                <th className="px-4 py-3 w-24"></th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((t, i) => (
                <tr
                  key={t.cssVar}
                  className={`group border-b border-[var(--mds-color-border-default)] last:border-0 hover:bg-[var(--mds-color-bg-secondary)] transition-colors ${i % 2 === 0 ? "" : "bg-[var(--mds-color-bg-secondary)]/30"}`}
                >
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      {t.swatch && !t.swatch.startsWith("var") && (
                        <div
                          className="w-5 h-5 rounded border border-black/10 shrink-0"
                          style={{ backgroundColor: t.swatch }}
                        />
                      )}
                      <span className="text-xs font-mono text-[var(--mds-color-text-primary)]">{t.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 hidden sm:table-cell">
                    <span className="text-xs font-mono text-[var(--mds-color-text-muted)]">var({t.cssVar})</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-xs font-mono text-[var(--mds-color-text-secondary)] break-all line-clamp-1">{t.value}</span>
                  </td>
                  <td className="px-4 py-3 hidden md:table-cell">
                    <span className={`inline-flex px-2 py-0.5 rounded-full text-xs border ${CATEGORY_BADGE[t.category] || ""}`}>
                      {t.category}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity justify-end">
                      <CopyButton text={`var(${t.cssVar})`} label="CSS" />
                      <CopyButton text={t.value} label="val" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}
