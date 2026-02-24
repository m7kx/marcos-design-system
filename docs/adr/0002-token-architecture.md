# ADR-0002: Token Architecture

**Status:** Aceita
**Data:** 2026-02-24
**Autores:** Marcos

## Contexto

Tokens precisam ser organizados de forma que: (1) primitivos possam mudar sem quebrar semânticos, (2) componentes referenciem semânticos, nunca primitivos diretamente, (3) exportação funcione para CSS vars, JS e JSON.

## Decisão

Arquitetura em 3 camadas:
```
Primitive → Semantic → Component
```

Style Dictionary v4 como build tool.

## Consequências

### Positivas
- Troca de tema muda apenas a camada Semantic
- Componentes são imunes a mudanças de paleta primitiva
- Exporta automaticamente CSS vars, JS/TS, JSON
- Compatible com W3C Design Tokens spec

### Negativas / Trade-offs
- Mais arquivos JSON para manter
- Referências cruzadas exigem atenção na nomenclatura

## Alternativas Consideradas

| Opção | Motivo da exclusão |
|-------|--------------------|
| Tokens Studio (Figma plugin) | Dependência de Figma para CI; Style Dictionary é agnóstico |
| CSS custom props manuais | Sem tipagem, sem exportação multi-plataforma |
| Single layer tokens | Não escala — troca de tema exige editar todos os valores |
