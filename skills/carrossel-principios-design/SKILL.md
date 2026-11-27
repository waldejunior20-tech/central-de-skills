---
name: carrossel-principios-design
description: Gera o pacote completo de prompts para carrosséis que ensinam PRINCÍPIOS E REGRAS DE DESIGN (hierarquia, contraste, alinhamento, proximidade, espaço em branco, regra 60-30-10, grid, repetição) para Instagram e Pinterest em geradores de imagem como o ChatGPT, mantendo o MESMO padrão visual do primeiro ao último slide. Use quando o usuário pedir "carrossel de princípios de design", "regras de design", "fundamentos de design", "dicas de layout", "dicas de hierarquia/contraste/composição" ou reclamar que o ChatGPT perde a consistência no meio do carrossel.
---

# Carrossel de Princípios de Design — regras visuais com consistência travada

## Por que o ChatGPT se perde no slide 6 ou 7

Ele não "lembra" do estilo: relê a conversa, e cada imagem nasce do zero. Quando o prompt vira "agora faz o próximo", ele improvisa. Por isso **todo prompt desta skill é autocontido**: carrega a Trava de Estilo inteira e só muda um bloco pequeno de variáveis.

## Regras inegociáveis

- **Um bloco TRAVA DE ESTILO, escrito uma única vez, copiado idêntico em todos os prompts.** Não resumir, não reescrever, não "melhorar" entre slides.
- **Só o bloco VARIÁVEIS muda.** Nunca escrever "igual ao anterior", "mesmo estilo" ou "continue".
- **Um slide por mensagem.**
- **Todo texto da arte vai entre aspas, exato, com acentos**, seguido de "não escreva nenhum outro texto".
- **O contador é calculado por você.** Total = capa + itens + slide final (7 princípios = 9 slides). O total nunca muda no meio.
- **Um princípio por slide, com uma demonstração visual do próprio princípio.** O slide sobre contraste tem que ter contraste; o de alinhamento, um grid visível.
- **A demonstração usa formas geométricas simples** (círculos, quadrados, barras), não texto nem interface detalhada.
- **O objeto herói é uma metáfora do princípio**, definido no plano antes de gerar. Sem repetir objeto.

## Passo 1 — Coletar o briefing

Pergunte só o que faltar:

| Item | Padrão se não informado |
|---|---|
| Tema e quantidade de itens | obrigatório (ex.: "7 regras de design que todo iniciante precisa saber") |
| Marca | preset Rydlink (abaixo) |
| Formato | Instagram 4:5 (1080×1350). Pinterest: 2:3 (1000×1500) |
| Modo | Modo A. Ver "Modos" |
| CTA final | "Salve este post" + "Siga @perfil" |

**Preset Rydlink:** logo "Rydlink" (Ryd branco + link verde, itálico bold) com "Sites e Sistemas" embaixo, topo esquerdo. Verde limão `#8CF000`, fundo `#0A0A0A`, texto branco `#FFFFFF`. Tipografia sans geométrica bold (estilo Montserrat). Para outra marca, troque só logo, cores hex, tipografia e formato.

## Passo 2 — Montar o plano

Entregue a tabela antes de qualquer prompt:

| # | Tipo | Título | Regra (máx. 12 palavras) | Destaque verde | Como aplicar | Demonstração (formas) | Objeto herói (metáfora) |
|---|---|---|---|---|---|---|---|
| 01 | capa | 7 REGRAS | de design que mudam seu resultado | resultado | — | — | esferas de vidro alinhadas |
| 02 | regra | Hierarquia | O olho precisa saber onde olhar primeiro. | olhar primeiro. | Um elemento grande, o resto menor. | 1 círculo grande verde e 4 pequenos cinzas | peças de xadrez, rei maior na frente |
| 03 | regra | Contraste | Sem contraste, nada se destaca. | nada se destaca. | Claro no escuro, grande com pequeno. | 1 quadrado branco entre 5 cinza-escuro | esfera branca entre esferas pretas |
| 04 | regra | Alinhamento | Tudo alinhado parece profissional na hora. | profissional na hora. | Use uma linha guia invisível. | 4 barras alinhadas à esquerda numa linha guia verde | lápis enfileirados perfeitamente |
| … | | | | | | | |
| 09 | final | Qual você vai aplicar? | Salve para consultar no próximo projeto. | Salve | — | — | objeto da capa |

Regras do plano:
- Título: 1 a 2 palavras. Regra: frase de impacto. "Como aplicar": ação prática em até 8 palavras.
- Princípios que funcionam bem: hierarquia, contraste, alinhamento, proximidade, repetição, espaço em branco, equilíbrio, regra 60-30-10, regra dos terços, grid.
- Objetos: produtos e texturas em macro, fundo escuro. Sem pessoas.
- Luz de acento: uma cor por slide. O verde da marca nunca muda.

## Passo 3 — Escrever a TRAVA DE ESTILO

Preencha uma vez. Modelo (preset Rydlink, 4:5):

```
=== TRAVA DE ESTILO (NÃO ALTERAR NADA DESTE BLOCO) ===
FORMATO: imagem vertical 4:5, 1080x1350 px. Uma única imagem, um único slide.

ESTILO: pôster editorial premium de design. Fotografia de produto em macro, hiper-realista,
iluminação cinematográfica de estúdio, alto contraste, fundo quase preto (#0A0A0A) com
desfoque suave e um único brilho de luz colorida. Sem ilustração no fundo, sem 3D cartoon,
sem moldura.

GRADE FIXA (posições idênticas em todos os slides):
1. TOPO ESQUERDO: logo "Rydlink" — "Ryd" em branco e "link" em verde limão, bold itálico,
   com "Sites e Sistemas" pequeno em branco logo abaixo. Usar o logo exatamente como na
   imagem de referência anexada. Escrever R-y-d-l-i-n-k, sem letras duplicadas.
2. TOPO DIREITO: contador no formato "NN/TT" em branco, bold, pequeno. Abaixo dele, uma
   barra de progresso horizontal fina, arredondada: parte preenchida em verde limão,
   restante em cinza.
3. COLUNA ESQUERDA (ocupa 55% da largura, alinhada à esquerda, margem de 90 px):
   a. TÍTULO gigante em branco puro, sans-serif geométrica ExtraBold, até 2 linhas.
   b. REGRA logo abaixo, branca, peso Regular, tamanho médio, 2 a 3 linhas.
      As últimas palavras indicadas ficam em verde limão, bold itálico.
   c. Uma barrinha horizontal verde limão, curta e grossa, cantos arredondados.
   d. CARTÃO DE DEMONSTRAÇÃO: retângulo horizontal de cantos arredondados de 24 px, fundo
      cinza muito escuro (#161616) com borda fina branca a 15% de opacidade. Dentro dele,
      apenas formas geométricas chapadas (branco, cinza e verde limão), sem texto.
4. RODAPÉ ESQUERDO: seta fina verde limão apontando para a direita e, abaixo, o texto
   "Como aplicar" em branco, pequeno, 2 linhas, com a última palavra em bold itálico.
5. LADO DIREITO E FUNDO: o objeto herói, grande, em macro, cortado pela borda direita e
   inferior, ocupando cerca de 50% da imagem, sem nunca cobrir textos ou o cartão.

CORES FIXAS: verde limão #8CF000 usado só em: "link" do logo, barra de progresso, palavras
de destaque, barrinha e seta e nas formas de destaque do cartão. A luz de acento colore só o objeto e o fundo. Branco #FFFFFF nos textos. Fundo #0A0A0A.

TIPOGRAFIA FIXA: a mesma família sans-serif geométrica (estilo Montserrat) em todos os textos.

PROIBIDO: texto extra, texto em inglês, marca d'água, hashtag, emoji, bordas, mockup de
celular, pessoas, mudar posição do logo ou do contador, trocar o verde por outra cor, erros
de ortografia, letras duplicadas, texto dentro do cartão de demonstração, mais de um objeto, ícones adicionais.
=== FIM DA TRAVA ===
```

## Passo 4 — Gerar um prompt por slide

Cada prompt = **TRAVA completa + VARIÁVEIS**. Modelo:

```
[colar aqui a TRAVA DE ESTILO completa, sem mudar nada]

=== VARIÁVEIS DESTE SLIDE ===
CONTADOR: "02/09" — barra de progresso preenchida em 2 de 9 partes.
TÍTULO: "Hierarquia"
REGRA: "O olho precisa saber onde olhar primeiro."
  → em verde bold itálico: "olhar primeiro."
CARTÃO DE DEMONSTRAÇÃO: um círculo grande verde limão à esquerda e quatro círculos pequenos
  cinza-claros à direita, alinhados em linha.
RODAPÉ: "Um elemento grande, o resto menor." → em bold itálico: "menor."
OBJETO HERÓI: peças de xadrez pretas em macro, o rei maior e em foco na frente, as outras
  menores e desfocadas atrás.
LUZ DE ACENTO: laranja quente.

Escreva exatamente estes textos, em português, com os acentos. Não escreva nenhum outro texto.
Siga a imagem de referência anexada para logo, posições, tamanhos e tipografia.
```

**Capa (01)** — mesma TRAVA, sem cartão: objeto herói centralizado; sobre ele o número (ex.: "7") enorme em verde bold itálico, "REGRAS" gigante em branco maiúsculo, subtítulo em branco com a última palavra em verde. Rodapé: seta + "Deslize e conheça".

**Slide final** — mesma TRAVA, sem cartão: título vira pergunta, regra vira a ação ("Salve para consultar no próximo projeto."), rodapé "Siga @perfil para mais dicas de design.". Reutilize o objeto e a luz da capa.

## Protocolo de uso (entregar sempre junto com os prompts)

1. **Gere o slide 02 primeiro** (um slide de item, não a capa). Refaça até ficar perfeito. Ele vira o **slide mestre**.
2. **Em todo slide seguinte, anexe 2 imagens**: o slide mestre + o arquivo do logo. Cole o prompt.
3. **Sempre o mestre original**, nunca o último slide gerado (os erros se acumulam).
4. **Chat novo a cada 3 slides.** O prompt é autocontido, basta colar prompt + anexos. É isso que evita a perda no slide 6–7.
5. **Checklist antes de aceitar.** Reprovou em 1 item, prompt de correção.

### Checklist por slide

- [ ] Logo no topo esquerdo, escrito "Rydlink" certo
- [ ] Contador certo ("NN/TT") e barra de progresso coerente
- [ ] Textos exatos, com acentos, sem texto extra
- [ ] Destaque no verde da marca
- [ ] Mesmas posições, tamanhos e tipografia do slide mestre
- [ ] Cartão de demonstração na mesma posição e tamanho do mestre, só com formas
- [ ] A demonstração realmente mostra o princípio do slide
- [ ] Um único objeto herói, sem cobrir textos

### Prompt de correção

```
Edite a última imagem. Mantenha TUDO exatamente como está (imagem, luz, fundo, posições).
Corrija somente: [descrever 1 problema].
Não mude mais nada.
```

Um problema por correção. Errou 2 vezes seguidas: chat novo, prompt completo de novo.

## Modos

- **Modo A — arte completa no gerador (padrão).** Rápido. Risco: logo e textos variam um pouco.
- **Modo B — fundo no gerador, texto no Canva/Figma (recomendado).** A TRAVA pede "sem nenhum texto, sem logo" e os prompts trazem só a parte visual. Logo, contador e textos entram num template fixo. Vale principalmente para o cartão de demonstração: desenhar as formas no editor garante que o princípio esteja correto.

No Modo B, entregue também a ficha do template (posições, tamanhos e cores da grade).

## Formato da resposta final

1. Plano do carrossel (tabela)
2. TRAVA DE ESTILO (1 bloco)
3. Prompts numerados, um bloco de código por slide, autocontidos (**nunca** abreviar a TRAVA com "[mesma trava acima]")
4. Protocolo de uso + checklist + prompt de correção
5. Legenda do post (gancho na 1ª linha, lista dos itens, CTA) + 5 hashtags; para Pinterest, título (até 100 caracteres) e descrição com palavras-chave

Avise o que o gerador **não garante**: logo idêntico, ortografia perfeita em textos longos e demonstração geométrica exata (contagem e alinhamento das formas podem variar). Para isso, Modo B.
