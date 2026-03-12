

# Reestruturação da Seção "Assistente Financeiro" — 3 Colunas Estilo Instagram Stories + Chatbot Widget

## Visão Geral

Substituir a seção atual do chatbot por um layout de 3 colunas (33.33%) no estilo Instagram Stories, com carrossel de conteúdos navegáveis por setas, e transformar o chatbot em um widget flutuante arrastável.

---

## Estrutura das 3 Colunas

### Coluna 1 — Renegociação de Dívida (3 slides)
- **Slide 0:** "Renegociação de Dívida" — conceitos e dicas. Ao clicar, navega para nova página `/renegociacao`. Imagem ilustrativa gerada via SVG/gradiente.
- **Slide 1:** "Serasa Limpa Nome" — descrição do serviço. Ao clicar, abre `https://www.serasa.com.br/limpa-nome-online/`. Imagem com branding Serasa.
- **Slide 2:** "Desenrola Brasil" — descrição do programa. Ao clicar, abre `https://desenrola.gov.br/novahome`. Imagem com branding Min. da Fazenda.

### Coluna 2 — Chatbot
- Exibe o chatbot existente dentro do card estilo Stories.
- Botão para "destacar" o chatbot como widget flutuante arrastável (draggable).
- Quando destacado: coluna 2 desaparece, colunas 1 e 3 passam a ocupar 50% cada. O chatbot flutua sobre o site todo.

### Coluna 3 — Amortização (2 slides)
- **Slide 0:** "Amortização" — explicação. Ao clicar, abre `https://www.serasa.com.br/limpa-nome-online/blog/amortizacao-entenda-como-funciona-e-os-principais-tipos/`. Imagem ilustrativa.
- **Slide 1:** "Feirão da Serasa" — descrição. Ao clicar, abre `https://www.serasa.com.br/limpa-nome-online/feirao/`. Imagem Serasa.

---

## Arquivos a Criar/Editar

### 1. `src/components/AssistantSection.tsx` (NOVO)
Componente principal da seção com:
- Título h2 "Assistente Financeiro" com fluid typography (`clamp(1.5rem, 3vw, 2.5rem)`)
- Grid de 3 colunas (`grid-cols-1 md:grid-cols-3`, ou 2 colunas quando chatbot é widget)
- Cada coluna é um `StoryCard` com:
  - Slides controlados por `currentStep` individual por coluna
  - Setas esquerda/direita com efeito magnético (onMouseMove + translate proporcional) e scale-95 no click
  - Barra de progresso no topo (dots ou barra segmentada estilo Instagram)
  - Imagens de fundo SVG/gradiente ilustrativas por slide
  - Scroll Reveal: IntersectionObserver para fade-in + slide lateral com spring easing (`cubic-bezier(0.34, 1.56, 0.64, 1)`)
  - Transição entre slides com spring animation

### 2. `src/components/ChatbotWidget.tsx` (NOVO)
Widget flutuante do chatbot:
- Reutiliza toda a lógica do `Chatbot.tsx` existente
- Posição `fixed`, arrastável via mousedown/mousemove/mouseup
- Botão para minimizar/maximizar
- Botão para "reencaixar" na seção (volta ao layout 3 colunas)
- Z-index alto para ficar sobre todo o conteúdo

### 3. `src/pages/Renegociacao.tsx` (NOVO)
Página dedicada sobre renegociação de dívidas:
- Conceitos, dicas práticas, passo a passo
- Fundo escuro com gradiente Serasa animado
- Navbar incluída
- Cards com informações organizadas

### 4. `src/pages/Index.tsx` (EDITAR)
- Substituir a seção `#chatbot` pelo novo `<AssistantSection />`
- Passar `financialData` como prop
- Estado `isChatbotFloating` no Index para controlar layout

### 5. `src/App.tsx` (EDITAR)
- Adicionar rota `/renegociacao` para a nova página

### 6. `src/components/Chatbot.tsx` (EDITAR)
- Extrair para aceitar prop `compact` para modo widget
- Adicionar prop `onFloat` / `onDock` para comunicar estado ao parent

---

## Animações e Interações

- **Spring entrance:** container da seção anima com `cubic-bezier(0.34, 1.56, 0.64, 1)` ao entrar no viewport
- **Scroll Reveal:** IntersectionObserver dispara fade-in + translateX(30px -> 0) em cada coluna com delay escalonado
- **Magnetic buttons:** setas calculam distância do cursor via onMouseMove e aplicam `transform: translate()` proporcional (max ~8px), com `scale(0.95)` no active
- **Slide transitions:** translateX com spring easing entre conteúdos
- **Fluid typography:** `font-size: clamp(1.5rem, 3vw, 2.5rem)` nos títulos

## Paleta de Cores
Background dos cards usa gradientes com Dark Blue (#1D4F91), Purple (#77127B), Raspberry (#C1188B), Magenta (#E80070). Cada slide tem um gradiente ligeiramente diferente para distinção visual.

