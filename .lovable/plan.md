
# Ajustes na Seção Assistente Financeiro

## Problemas Identificados
1. O chatbot (coluna 2) usa `aspectRatio: "9/16"` que o torna muito alto. As 3 colunas devem ter a **mesma altura**, com larguras de 25% / 50% / 25%.
2. Os textos sobre as imagens nos StoryCards precisam de fundo cinza para legibilidade.

## Alterações em `src/components/AssistantSection.tsx`

### 1. Grid com larguras 25% / 50% / 25%
- Mudar o grid template de `22%_50%_22%` para `25%_50%_25%` (sem gap separado, ou `1fr 2fr 1fr`)
- Usar `md:[grid-template-columns:1fr_2fr_1fr]` com `md:gap-4`

### 2. Chatbot com mesma altura das StoryCards
- Manter `aspectRatio: "9/16"` em todas as 3 colunas para que fiquem do mesmo tamanho (a largura maior do chatbot naturalmente o tornará mais alto proporcionalmente — isso é o esperado com 9:16)
- Alternativa: usar uma altura fixa igual para as 3 colunas, ou trocar para `items-stretch` no grid para que todas tenham a mesma altura

### 3. Fundo cinza nos textos das imagens
- No `StoryCard`, adicionar `bg-black/50 backdrop-blur-sm rounded-lg p-3` ao container de texto (linha 201) que contém título, descrição e botão

## Arquivos editados
- `src/components/AssistantSection.tsx` apenas
