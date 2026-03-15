

# Ajuste de Larguras e Imagens na Seção Assistente Financeiro

## Alterações em `src/components/AssistantSection.tsx`

### 1. Larguras das 3 colunas: 25% / 50% / 25%
- Substituir o grid de 3 colunas iguais por um layout com proporções customizadas
- Quando não floating: usar `grid-template-columns: 1fr 2fr 1fr` (equivale a 25%/50%/25%)
- Quando floating (2 colunas): manter `grid-cols-2` com 50/50
- Remover `max-w-[400px]` das divs wrapper para que respeitem a proporção do grid

### 2. Imagens com textos em português e fundo escuro legível
- Adicionar sobre cada imagem um overlay com fundo cinza escuro semitransparente (`bg-gray-900/60 backdrop-blur-sm`) atrás do bloco de texto (título + descrição) para melhorar legibilidade
- Trocar `object-cover` por `object-contain` nas imagens para que não fiquem cortadas, com fundo escuro preenchendo o espaço restante do card
- As imagens já possuem títulos em português; o ajuste garante que o texto sobreposto fique legível com o fundo cinza

### Detalhes técnicos
- Grid custom: `style={{ gridTemplateColumns: '1fr 2fr 1fr' }}` no container do grid (desktop), mantendo `grid-cols-1` no mobile
- Overlay de texto: envolver o bloco de texto existente (h3 + p + span) em uma div com `bg-gray-900/60 backdrop-blur-sm rounded-lg p-3`
- Imagens: usar `object-contain` + `bg-gray-900` no container da imagem para preencher bordas sem cortar

