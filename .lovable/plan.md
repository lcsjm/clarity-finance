

# Pagina de Registro (Auth.tsx) - Estilo Instagram Stories com Serasa Experian

## Visao Geral
Criar uma pagina `/auth` com formulario de cadastro no estilo carrossel vertical (Instagram stories), onde cada campo aparece um por um com animacoes fluidas, glassmorphism, fundo escuro animado e microinteracoes avancadas.

---

## Arquivos a Criar/Editar

### 1. `src/pages/Auth.tsx` (NOVO)
Pagina principal de registro com:

**Layout e Fundo:**
- Fundo escuro com gradiente animado (CSS keyframes movendo um gradiente radial com as cores Serasa: Dark Blue #1D4F91, Purple #77127B, Raspberry #C1188B, Magenta #E80070)
- Container central com efeito **glassmorphism** (`backdrop-blur-xl bg-white/10 border border-white/20`)

**Formulario Carrossel (estilo Instagram Stories):**
- Estado `currentStep` (0-7) controlando qual campo esta visivel
- Cada campo ocupa 100% da area do formulario, transicao com **spring animation** (CSS `cubic-bezier(0.34, 1.56, 0.64, 1)` para efeito mola/rebote)
- Scroll horizontal com `transform: translateX(-${step * 100}%)` e transicao suave
- Barra de progresso no topo mostrando passo atual

**Campos (em ordem):**
1. Email (obrigatorio) - input type email
2. Senha (obrigatorio) - input type password com toggle visibilidade
3. Nome (opcional) - input text
4. CPF (opcional) - input com mascara XXX.XXX.XXX-XX
5. CEP (opcional) - input com mascara XXXXX-XXX
6. Data de nascimento (obrigatorio) - input type date
7. Sexo (obrigatorio) - radio: Masculino, Feminino, Nao-binario
8. Cor e raca (obrigatorio) - radio: Parda, Preta, Branca, Indigena, Amarela

**Navegacao:**
- Botao "Proximo" e "Voltar" com efeito **magnetico** (onMouseMove calcula distancia do cursor e aplica `transform: translate()` proporcional)
- Click feedback: `scale(0.95)` rapido com `transition: transform 0.1s`
- Botao "Voltar" visivel a partir do passo 2
- Dados preservados ao navegar entre passos (estado unico `formData`)

**Animacoes:**
- **Entrada da pagina**: spring animation no container (scale 0.9 -> 1.0 com rebote via cubic-bezier)
- **Scroll Reveal**: cada campo faz fade-in + slide lateral ao entrar (`opacity: 0, translateX: 30px` -> `opacity: 1, translateX: 0`)
- **Fluid Typography**: titulos com `font-size: clamp(1.5rem, 3vw, 2.5rem)`

**Validacao:**
- Campos obrigatorios impedem avancar (botao desabilitado + mensagem)
- Email validado com regex basico
- Ao finalizar: toast de sucesso + redirect para `/`

### 2. `src/App.tsx` (EDITAR)
- Adicionar rota: `<Route path="/auth" element={<Auth />} />`

### 3. `src/components/Navbar.tsx` (EDITAR)
- Botao "Registrar" usa `useNavigate()` de react-router-dom para ir a `/auth`
- Importar `useNavigate` e `Link`

### 4. `src/index.css` (EDITAR)
- Adicionar keyframes para fundo animado (`@keyframes gradientShift`)
- Adicionar classe `.magnetic-btn` para efeito magnetico base

---

## Paleta de Cores Serasa (usadas na pagina Auth)
- Dark Blue: `#1D4F91`
- Light Blue: `#426DA9`
- Purple: `#77127B`
- Raspberry: `#C1188B`
- Magenta: `#E80070`

Gradiente do fundo animado combina todas essas cores em movimento lento e sutil.

