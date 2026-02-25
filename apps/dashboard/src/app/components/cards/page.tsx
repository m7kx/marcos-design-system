"use client"
import type { ReactNode } from 'react'
import { PageHeader } from "@/components/page-header"
import { ComponentPreview, PropsTable } from "@/components/component-preview"

function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`rounded-xl border border-[var(--mds-color-border-default)] bg-[var(--mds-color-bg-secondary)] text-[var(--mds-color-text-primary)] ${className}`}>{children}</div>
}
function CardHeader({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`flex flex-col space-y-1.5 p-6 ${className}`}>{children}</div>
}
function CardTitle({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <h3 className={`text-base font-semibold leading-none tracking-tight ${className}`}>{children}</h3>
}
function CardDescription({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`text-sm text-[var(--mds-color-text-muted)] ${className}`}>{children}</p>
}
function CardContent({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`p-6 pt-0 ${className}`}>{children}</div>
}
function CardFooter({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`flex items-center p-6 pt-0 gap-3 ${className}`}>{children}</div>
}

function Button({ children, variant = "primary", size = "md", className = "", ...props }: any) {
  const v = { primary: "bg-[var(--mds-color-brand-primary)] text-white hover:opacity-90", secondary: "border border-[var(--mds-color-border-default)] text-[var(--mds-color-text-primary)] hover:border-[var(--mds-color-brand-primary)]" }
  const s = { sm: "h-8 px-3 text-xs", md: "h-9 px-5 text-sm" }
  return <button className={`inline-flex items-center justify-center rounded-md font-medium transition-all cursor-pointer ${v[variant]} ${s[size]} ${className}`} {...props}>{children}</button>
}

const CARD_PARTS = [
  { name: "Card",            type: "HTMLDivElement",       description: "Container raiz com border e background"   },
  { name: "CardHeader",      type: "HTMLDivElement",       description: "Área de título e descrição (p-6)"         },
  { name: "CardTitle",       type: "HTMLHeadingElement",   description: "Título do card (h3, semibold)"            },
  { name: "CardDescription", type: "HTMLParagraphElement", description: "Texto descritivo secundário"              },
  { name: "CardContent",     type: "HTMLDivElement",       description: "Conteúdo principal (pt-0)"                },
  { name: "CardFooter",      type: "HTMLDivElement",       description: "Área de ações (flex, gap-3)"              },
]

export default function CardsPage() {
  return (
    <div className="space-y-10">
      <PageHeader
        title="Card"
        description="Container versátil para agrupar informações relacionadas. Composto por 6 partes: Card, Header, Title, Description, Content e Footer."
        badge="Components"
      />

      <ComponentPreview
        title="Anatomy"
        description="Estrutura completa com todas as partes"
        code={`<Card>
  <CardHeader>
    <CardTitle>VivAir Premium</CardTitle>
    <CardDescription>Experiências exclusivas para viajantes exigentes</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Acesso a destinos curados, atendimento personalizado e bônus de milhas em todas as reservas.</p>
  </CardContent>
  <CardFooter>
    <Button>Começar</Button>
    <Button variant="secondary">Saiba mais</Button>
  </CardFooter>
</Card>`}
      >
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>VivAir Premium</CardTitle>
            <CardDescription>Experiências exclusivas para viajantes exigentes</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-[var(--mds-color-text-secondary)]">Acesso a destinos curados, atendimento personalizado e bônus de milhas em todas as reservas.</p>
          </CardContent>
          <CardFooter>
            <Button size="sm">Começar</Button>
            <Button variant="secondary" size="sm">Saiba mais</Button>
          </CardFooter>
        </Card>
      </ComponentPreview>

      <ComponentPreview
        title="Stats card"
        description="Card de métrica compacto"
        code={`<Card>
  <CardContent className="pt-6">
    <div className="text-2xl font-bold">R$ 84.200</div>
    <p className="text-xs text-muted mt-1">Receita do mês</p>
    <p className="text-xs text-green-400 mt-3">+12% vs mês anterior</p>
  </CardContent>
</Card>`}
      >
        {[
          { label: "Reservas", value: "142", delta: "+8 esta semana",    color: "text-green-400" },
          { label: "Receita",  value: "R$ 84.2k", delta: "+12% vs mês", color: "text-green-400" },
          { label: "Pendentes", value: "7",  delta: "2 urgentes",       color: "text-yellow-400" },
          { label: "NPS",      value: "91",  delta: "↑ 3 pts",          color: "text-blue-400"  },
        ].map((s) => (
          <Card key={s.label} className="w-36">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-[var(--mds-color-text-primary)]">{s.value}</div>
              <p className="text-xs text-[var(--mds-color-text-muted)] mt-1">{s.label}</p>
              <p className={`text-xs mt-2 ${s.color}`}>{s.delta}</p>
            </CardContent>
          </Card>
        ))}
      </ComponentPreview>

      <ComponentPreview
        title="Horizontal card"
        description="Layout com imagem lateral — padrão para listings"
        code={`<Card className="flex overflow-hidden">
  <div className="w-24 bg-gradient-to-br from-[var(--mds-color-brand-primary)] to-[var(--mds-color-gold-700)]" />
  <div>
    <CardHeader>
      <CardTitle>Maldivas</CardTitle>
      <CardDescription>7 noites • 2 adultos</CardDescription>
    </CardHeader>
    <CardContent>
      <span className="text-lg font-bold">R$ 28.900</span>
    </CardContent>
  </div>
</Card>`}
      >
        <Card className="flex overflow-hidden w-full max-w-sm">
          <div className="w-24 shrink-0 bg-gradient-to-br from-[var(--mds-color-brand-primary)] to-[#855a22] min-h-[100px]" />
          <div>
            <CardHeader className="pb-2">
              <CardTitle>Maldivas</CardTitle>
              <CardDescription>7 noites · 2 adultos</CardDescription>
            </CardHeader>
            <CardContent>
              <span className="text-lg font-bold text-[var(--mds-color-text-primary)]">R$ 28.900</span>
            </CardContent>
          </div>
        </Card>
      </ComponentPreview>

      <div className="p-4 rounded-xl border border-[var(--mds-color-border-default)] bg-[var(--mds-color-bg-secondary)]">
        <div className="text-xs font-medium text-[var(--mds-color-text-muted)]">Import</div>
        <pre className="text-xs font-mono text-[var(--mds-color-text-secondary)] mt-1">{'import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from @marcos-ds/ui'}</pre>
      </div>

      <div className="space-y-3">
        <h2 className="text-sm font-semibold text-[var(--mds-color-text-muted)] uppercase tracking-widest">Sub-components</h2>
        <PropsTable props={CARD_PARTS} />
      </div>
    </div>
  )
}
