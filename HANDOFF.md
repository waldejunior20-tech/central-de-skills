# Handoff Spec — Central de Skills (modelo Netflix)

> Spec de implementação do layout estilo Netflix fornecido pelo dono, reconciliado com o
> catálogo real já existente (`index.html` + `styles.css` + `app.js`). O **visual** vem do
> modelo novo; os **dados e comandos** vêm da implementação real (não dos placeholders).

---

## Overview

Página única (estática) que cataloga skills da comunidade do Claude. O usuário **busca** e
**navega por trilhas horizontais por categoria** (padrão Netflix), e em cada card pode **copiar
o comando de instalação** (uma skill) ou **copiar o prompt de ativação** (`/comando`). Há também
um banner de **instalar todas**. Hospedagem: Vercel (site estático, 3 arquivos).

Stack alvo: **HTML + CSS + JS vanilla** (sem build), fontes via Google Fonts CDN. Mantém os 3
arquivos separados — `index.html`, `styles.css`, `app.js` — por causa do limite de gravação ~20KB.

---

## Layout

- **Container:** `max-width: 1200px`, `padding: 0 40px`, centralizado.
- **Fundo:** grade de 40×40px (`linear-gradient` 1px em rgba(255,255,255,.03)) + `top-glow` radial laranja desfocado atrás do hero.
- **Fluxo vertical:** Hero → Painel "Instalar ≠ Usar" (2 colunas) → Section header → Banner "instalar todas" → Busca → Filtros (chips) → Trilhas por categoria.
- **Trilha (categoria):** cabeçalho (título + contagem) + grade de cards.
  - Modelo fornecido usa `grid` `repeat(auto-fill, minmax(320px,1fr))`. **Decisão:** para o efeito Netflix de fato, a trilha deve rolar na horizontal (`overflow-x:auto`, cards `flex: 0 0 300px`, `scroll-snap`). Quando há **busca ativa ou filtro de categoria**, vira grade (melhor pra comparar resultados). Esse comportamento já está no `app.js` atual.

---

## Design Tokens

| Token | Valor | Uso |
|---|---|---|
| `--bg-base` | `#09090b` | Fundo da página |
| `--surface` | `#121216` | Fundo do card |
| `--surface-hover` | `#18181e` | Card em hover |
| `--border` | `#222228` | Bordas (card, input, badge) |
| `--brand` | `#ff5c00` | CTA, instalar, título destacado, chip ativo |
| `--brand-glow` | `rgba(255,92,0,.4)` | Glow do título e dos botões |
| `--text-pure` | `#ffffff` | Títulos, texto forte |
| `--text-base` | `#a1a1aa` | Corpo |
| `--text-muted` | `#71717a` | Legendas, contagens |
| `--cyan` | `#22d3ee` | Tag de categoria no card |
| `--yellow` | `#fbbf24` | Badge "Passo 2" / destaques |
| `--green` | `#34d399` | Estado "✓ copiado" (sucesso) |
| `--font-display` | Outfit 600–800 | Títulos / `card-title` |
| `--font-body` | Manrope 400–600 | Corpo, descrições |
| `--font-mono` | JetBrains Mono | Comandos, tags, contagens, botões |

> Espaçamento base do modelo: múltiplos de 8px (8/12/16/24/32/40/64/80). Border-radius: 4px (botões), 6–8px (inputs/cards), 12px (painéis), 20px (chips/badges).

---

## Componentes

| Componente | Variantes | Props / dados | Notas |
|---|---|---|---|
| Hero | — | título, subtítulo, badges (total skills, total categorias) | `total-skills`/`total-cats` preenchidos por JS |
| Painel "Instalar ≠ Usar" | 2 colunas | tags Passo 1 (verde) / Passo 2 (amarelo), `code-box` | colapsa pra 1 coluna < 768px |
| Banner "Instalar todas" | — | botões: copiar tudo · baixar .sh · baixar .ps1 | `copyAllInstalls()` |
| Busca | — | `input#search`, `oninput=render()` | placeholder com exemplos |
| Filtros (chips) | default / active | gerados de `DATA`/`SKILLS` + "Todas" | um ativo por vez |
| Trilha | — | título, contagem, grade/rail de cards | uma por categoria |
| Card | default / **isOfficial** | tag, badge OFICIAL, título, desc, botões, repo | badge só quando `isOfficial` |
| Botão Instalar | default / hover / **success** | `installCmd` | copia comando; vira "✓ copiado" 1,5s |
| Botão Usar | default / hover / **success** | `useCmd` (`/slug`) | idem; em kursku copia instrução `.skill` |
| Toast | hidden / show | mensagem | global, canto inferior direito, 2s |
| Empty state | — | — | "Nenhuma skill encontrada nesta seção." |

---

## States & Interactions

| Elemento | Estado | Comportamento |
|---|---|---|
| Botão instalar/usar | hover | fundo `#ff7626` (instalar) / borda `--text-base` (usar) |
| Botão instalar/usar | **success** (pós-clique) | classe `btn-success` (verde), texto "✓ copiado", reverte em **1500ms** |
| Card | hover | borda `#3f3f46`, fundo `--surface-hover` |
| Chip de filtro | active | fundo `--brand`, texto `#000`, `font-weight:700` |
| Input de busca | focus | borda `--brand` |
| Toast | show | `opacity 1`, `translateY(0)`, some após **2000ms** |
| Clique instalar | ação | `navigator.clipboard.writeText(installCmd)` + toast "instalação copiada" |
| Clique usar | ação | copia `useCmd` + toast "uso copiado" |
| Copiar tudo | ação | junta todos os `installCmd` e copia o script |

**Fallback de cópia (obrigatório):** `navigator.clipboard` falha em contexto inseguro (file://, http). Implementar fallback com `<textarea>` + `document.execCommand('copy')` — já presente no `app.js` atual; o modelo fornecido NÃO tem (adicionar).

---

## Responsive

| Breakpoint | Mudanças |
|---|---|
| Desktop (>1024px) | Layout padrão; trilhas horizontais; hero 68px |
| Tablet (768–1024px) | Container com padding reduzido; cards mínimos 300–320px |
| Mobile (<768px) | `panel-grid` → 1 coluna; banner "instalar todas" empilha (botões em linha nova); título do hero reduz (clamp); busca full-width; trilhas continuam roláveis no toque |

> Sugestão: `padding` do container `0 40px` → `0 20px` no mobile; título `clamp(40px,8vw,68px)`.

---

## Edge Cases

- **Busca sem resultado:** mostrar `empty-search` ("Nenhuma skill encontrada nesta seção.").
- **Texto longo (nome/descrição):** descrição com `min-height` fixo pra alinhar os botões entre cards; nome em 1–2 linhas. Em PT-BR strings são ~20% maiores que EN — testar "Organização de Faturas".
- **kursku (.skill):** NÃO usa `npx skills add`. Botão de uso mostra `.skill` e copia: *"Baixe o .skill em <link> e suba em claude.ai/customize/skills"*. Não vazar comando que não funciona.
- **Conexão lenta / fontes:** usar `display=swap` (já no link das fontes) pra não bloquear render.
- **Sem JS:** página mostra só hero/painel estáticos; trilhas ficam vazias (aceitável pra MVP).

---

## Animation / Motion

| Elemento | Gatilho | Animação | Duração | Easing |
|---|---|---|---|---|
| Botões / cards / chips | hover | cor/borda/fundo | 200ms | ease |
| Botão copiar | clique | → verde "✓ copiado" → reverte | 1500ms hold | — |
| Toast | clique copiar | fade + slide-up | 300ms | ease |
| Toast | timeout | fade out | 300ms | ease |
| Título "Skills" | load | glow pulsante (opcional, do build atual) | 3.4s loop | ease-in-out |
| Card | scroll | reveal fade-up (IntersectionObserver, build atual) | 600ms | ease |

---

## Accessibility (gaps do modelo a corrigir)

- **Busca:** adicionar `<label>` ou `aria-label="Buscar skills"` no `input` (hoje sem rótulo).
- **Toast:** envolver com `role="status"` `aria-live="polite"` pra leitor de tela anunciar "copiado".
- **Foco visível:** garantir `:focus-visible` nos botões/chips/input (contraste do laranja sobre preto está OK, ratio > 4.5:1).
- **Filtros:** são `<button>` (ok pra teclado); marcar o ativo com `aria-pressed="true"`.
- **Cards:** o link "repo ↗" precisa de texto acessível — usar `aria-label="Abrir repositório de <nome> (nova aba)"`.
- **Ordem de foco:** busca → chips → (por trilha) instalar → usar → repo. Lógica e previsível.
- **Ícones decorativos** (⌕, 🔴, ↓): marcar `aria-hidden="true"`.

---

## ⚠️ Integração de DADOS (crítico — não ignorar)

O `DATA` do HTML enviado é **placeholder** e tem dados ERRADOS que NÃO podem ir pra produção:

- Comandos inventados: `npx superpowers install`, `npx superpowers-lab install`, `npm install -g parry-mcp` — **não existem**.
- URLs falsas: `github.com/seek/skill-seekers`, `github.com/owasp/claude-skill`, `github.com/Dmytro/parry`.
- Só ~6 skills; faltam as **30 reais** (comunidade + pcx-wave + coleção kursku).

**Regra de implementação:** manter o **visual do modelo novo** (tokens, painéis, trilhas, toast),
mas alimentar com o **array `SKILLS` real do `app.js` atual**. Comando de instalação padrão =
`npx skills add <repo>`; kursku = instrução `.skill`. Adicionar o **fallback de cópia**. Não
publicar com os placeholders.

---

## Arquivos / próximo passo

- `index.html` · `styles.css` · `app.js` (catálogo real, 3 arquivos).
- Para adotar este visual: portar os tokens/estilos do modelo pra `styles.css` e os blocos novos
  (painel, banner, toast) pro `index.html`, mantendo o `SKILLS` real e os handlers do `app.js`.
- Deploy: `npx vercel --prod` na pasta.
