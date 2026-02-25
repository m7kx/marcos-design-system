"use client"
import { useState } from "react"
import { PageHeader } from "@/components/page-header"
import { ComponentPreview, PropsTable } from "@/components/component-preview"

function Input({
  label, error, hint, prefix, suffix, className = "", type = "text", placeholder, disabled, defaultValue, value, onChange,
}: {
  label?: string; error?: string; hint?: string; prefix?: React.ReactNode; suffix?: React.ReactNode
  className?: string; type?: string; placeholder?: string; disabled?: boolean; defaultValue?: string
  value?: string; onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}) {
  const base = "flex h-10 w-full rounded-md border bg-[var(--mds-color-bg-secondary)] px-3 py-2 text-sm text-[var(--mds-color-text-primary)] placeholder:text-[var(--mds-color-text-muted)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--mds-color-brand-primary)] disabled:cursor-not-allowed disabled:opacity-50 transition-shadow"
  const borderClass = error ? "border-red-500 focus-visible:ring-red-500" : "border-[var(--mds-color-border-default)]"

  return (
    <div className="space-y-1.5 w-full">
      {label && <label className="text-sm font-medium text-[var(--mds-color-text-primary)]">{label}</label>}
      <div className="relative flex items-center">
        {prefix && <div className="absolute left-3 text-[var(--mds-color-text-muted)]">{prefix}</div>}
        <input
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          defaultValue={defaultValue}
          value={value}
          onChange={onChange}
          className={`${base} ${borderClass} ${prefix ? "pl-9" : ""} ${suffix ? "pr-9" : ""} ${className}`}
        />
        {suffix && <div className="absolute right-3 text-[var(--mds-color-text-muted)]">{suffix}</div>}
      </div>
      {error && <p className="text-xs text-red-400">{error}</p>}
      {hint && !error && <p className="text-xs text-[var(--mds-color-text-muted)]">{hint}</p>}
    </div>
  )
}

const SearchIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
  </svg>
)

const EyeIcon = ({ show }: { show: boolean }) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    {show
      ? <><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></>
      : <><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></>
    }
  </svg>
)

const INPUT_PROPS = [
  { name: "label",       type: "string",         description: "Label exibido acima do input"                   },
  { name: "error",       type: "string",         description: "Mensagem de erro — troca border para vermelho"  },
  { name: "hint",        type: "string",         description: "Texto de ajuda abaixo (oculto se houver error)" },
  { name: "prefix",      type: "React.ReactNode", description: "Elemento à esquerda (ícone, símbolo)"          },
  { name: "suffix",      type: "React.ReactNode", description: "Elemento à direita (ícone, botão)"             },
  { name: "disabled",    type: "boolean",        default: "false", description: "Desabilita interação"        },
  { name: "type",        type: "string",         default: '"text"', description: "Tipo HTML nativo do input"  },
]

export default function InputsPage() {
  const [showPw, setShowPw] = useState(false)
  const [search, setSearch] = useState("")

  return (
    <div className="space-y-10">
      <PageHeader
        title="Input"
        description="Campo de texto com suporte a label, erro, hint, prefix e suffix. Totalmente controlado ou não-controlado."
        badge="Components"
      />

      <ComponentPreview
        title="Default"
        description="Input base com label e placeholder"
        code={`<Input label="Nome" placeholder="Digite seu nome" />
<Input label="Email" type="email" placeholder="marcos@vivairtravel.com.br" />`}
      >
        <div className="w-full max-w-xs space-y-4">
          <Input label="Nome" placeholder="Digite seu nome" />
          <Input label="Email" type="email" placeholder="marcos@vivairtravel.com.br" />
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="States"
        description="Error com mensagem, hint, e disabled"
        code={`<Input label="Email" error="Email inválido" defaultValue="nao@email" />
<Input label="Senha" hint="Mínimo 8 caracteres" placeholder="••••••••" />
<Input label="Desabilitado" disabled placeholder="Não editável" />`}
      >
        <div className="w-full max-w-xs space-y-4">
          <Input label="Email" error="Email inválido" defaultValue="nao@email" />
          <Input label="Senha" hint="Mínimo 8 caracteres" placeholder="••••••••" />
          <Input label="Desabilitado" disabled placeholder="Não editável" />
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="With prefix / suffix"
        description="Busca com ícone e senha com toggle"
        code={`<Input
  placeholder="Buscar destino..."
  prefix={<SearchIcon />}
  value={search}
  onChange={(e) => setSearch(e.target.value)}
/>
<Input
  label="Senha"
  type={showPw ? "text" : "password"}
  placeholder="••••••••"
  suffix={
    <button onClick={() => setShowPw(!showPw)}>
      <EyeIcon show={showPw} />
    </button>
  }
/>`}
      >
        <div className="w-full max-w-xs space-y-4">
          <Input
            placeholder="Buscar destino..."
            prefix={<SearchIcon />}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Input
            label="Senha"
            type={showPw ? "text" : "password"}
            placeholder="••••••••"
            suffix={
              <button onClick={() => setShowPw(!showPw)} className="cursor-pointer">
                <EyeIcon show={showPw} />
              </button>
            }
          />
        </div>
      </ComponentPreview>

      <div className="p-4 rounded-xl border border-[var(--mds-color-border-default)] bg-[var(--mds-color-bg-secondary)]">
        <div className="text-xs font-medium text-[var(--mds-color-text-muted)]">Import</div>
        <pre className="text-xs font-mono text-[var(--mds-color-text-secondary)] mt-1">{"import { Input } from "@marcos-ds/ui""}</pre>
      </div>

      <div className="space-y-3">
        <h2 className="text-sm font-semibold text-[var(--mds-color-text-muted)] uppercase tracking-widest">Props</h2>
        <PropsTable props={INPUT_PROPS} />
      </div>
    </div>
  )
}
