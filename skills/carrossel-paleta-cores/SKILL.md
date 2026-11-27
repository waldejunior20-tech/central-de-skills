---
name: carrossel-paleta-cores
description: Cria paletas de cores profissionais (com hex, função de cada cor e uso ideal) e gera o pacote completo de prompts para transformar essas paletas em carrossel de dica de design para Instagram e Pinterest em geradores de imagem como o ChatGPT, mantendo o MESMO padrão visual do primeiro ao último slide. Use quando o usuário pedir "carrossel de paleta de cores", "paletas para postar", "post de combinação de cores", "paleta para marca de X", "prompts de paleta" ou reclamar que o ChatGPT erra os hex, muda as cores ou perde a consistência no meio do carrossel.
---

# Carrossel de Paleta de Cores — prompts com consistência travada

## Os 3 problemas que esta skill resolve

1. **Perda de padrão no slide 6–7.** O gerador relê a conversa em vez de "lembrar" o estilo. Solução: todo prompt é autocontido, com a Trava de Estilo inteira.
2. **Cor errada.** O gerador não pinta um hex exato: ele aproxima. Solução: descrever cada cor por **nome + hex + descrição visual** e sempre na mesma ordem.
3. **Hex escrito errado.** Códigos como "#1B4332" saem com caracteres trocados. Solução: conferir no checklist e, para precisão total, usar o Modo B (amostras e hex aplicados no Canva/Figma).

## Regras inegociáveis

- **Um bloco TRAVA DE ESTILO, escrito uma única vez, copiado idêntico em todos os prompts.** Não resumir nem reescrever entre slides.
- **Só o bloco VARIÁVEIS muda.** Nunca escrever "igual ao anterior" ou "mesmo estilo".
- **Um slide por mensagem. Uma paleta por slide.**
- **Toda paleta tem exatamente 5 cores**, sempre na mesma ordem: da mais escura para a mais clara.
- **Todo texto da arte vai entre aspas, exato, com acentos**, seguido de "não escreva nenhum outro texto".
- **O contador é calculado por você.** Total = capa + paletas + slide final (7 paletas = 9 slides). O total nunca muda.
- **O objeto herói tem as cores da paleta do slide.** É ele que "prova" a paleta visualmente.
- **A cor da marca só aparece nos elementos fixos** (logo, barra de progresso, destaque, seta). Ela nunca entra nas amostras, a menos que faça parte da paleta.

## Passo 1 — Coletar o briefing

Pergunte só o que faltar:

| Item | Padrão se não informado |
|---|---|
| Tema e quantidade | obrigatório (ex.: "7 paletas para marcas de luxo") |
| Marca | preset Rydlink (abaixo) |
| Formato | Instagram 4:5 (1080×1350). Pinterest: 2:3 (1000×1500) |
| Modo | Modo A. Ver "Modos" |
| CTA final | "Salve este post" + "Siga @perfil" |

**Preset Rydlink:** logo "Rydlink" (Ryd branco + link verde, itálico bold) com "Sites e Sistemas" embaixo, topo esquerdo. Verde limão `#8CF000`, fundo `#0A0A0A`, texto branco `#FFFFFF`. Tipografia sans geométrica bold (estilo Montserrat).

## Passo 2 — Criar as paletas

Cada paleta precisa de:

- **Nome curto e memorável** (1–2 palavras): "Floresta Noturna", "Lava", "Areia Nobre".
- **5 cores com hex válido** (# + 6 caracteres, maiúsculas), ordenadas do escuro ao claro.
- **Função de cada cor** pela regra 60-30-10: fundo (60%), apoio (30%), destaque (10%), mais um neutro claro e um neutro escuro.
- **Uso ideal:** tipo de negócio ou sensação ("marcas de bem-estar", "restaurantes premium").

Critérios de qualidade (reprovar e refazer se falhar):

- Texto claro sobre a cor de fundo com contraste legível (alvo: 4,5:1 ou mais).
- Só **uma** cor saturada de destaque por paleta. O resto é neutro ou dessaturado.
- Nenhuma paleta parecida com outra do mesmo carrossel: variar matiz dominante (verde, laranja, azul, vinho, bege, roxo…).
- Nada de hex inventado sem sentido: se você descreve "verde musgo", o hex tem que ser um verde musgo.
- Sem cor pura de tela (`#FF0000`, `#00FF00`, `#0000FF`): parece amador.

## Passo 3 — Montar o plano

Entregue a tabela antes de qualquer prompt:

| # | Tipo | Nome | Cor 1 | Cor 2 | Cor 3 | Cor 4 | Cor 5 | Descrição (máx. 12 palavras) | Ideal para | Objeto herói |
|---|---|---|---|---|---|---|---|---|---|---|
| 01 | capa | 7 PALETAS | — | — | — | — | — | que deixam sua marca mais forte | — | tintas escorrendo em macro |
| 02 | paleta | Floresta Noturna | #0B1F17 | #1B4332 | #2D6A4F | #95D5B2 | #F1FAEE | Natural, calma e sofisticada sem esforço. | marcas de bem-estar. | folha com gotas d'água |
| … | | | | | | | | | | |
| 09 | final | Qual é a sua? | — | — | — | — | — | Salve para usar no próximo projeto. | — | objeto da capa |

Objetos: produtos e texturas em macro que existam naturalmente nas cores da paleta (folha, rocha com lava, tecido de linho, cerâmica, café, vidro, flor seca, metal escovado). Sem pessoas. Sem repetir objeto.

## Passo 4 — Escrever a TRAVA DE ESTILO

Modelo (preset Rydlink, 4:5):

```
=== TRAVA DE ESTILO (NÃO ALTERAR NADA DESTE BLOCO) ===
FORMATO: imagem vertical 4:5, 1080x1350 px. Uma única imagem, um único slide.

ESTILO: pôster editorial premium de design. Fotografia de produto em macro, hiper-realista,
iluminação cinematográfica de estúdio, alto contraste, fundo quase preto (#0A0A0A) com
desfoque suave. Sem ilustração, sem 3D cartoon, sem moldura.

GRADE FIXA (posições idênticas em todos os slides):
1. TOPO ESQUERDO: logo "Rydlink" — "Ryd" em branco e "link" em verde limão, bold itálico,
   com "Sites e Sistemas" pequeno em branco logo abaixo. Usar o logo exatamente como na
   imagem de referência anexada. Escrever R-y-d-l-i-n-k, sem letras duplicadas.
2. TOPO DIREITO: contador no formato "NN/TT" em branco, bold, pequeno. Abaixo dele, uma
   barra de progresso horizontal fina, arredondada: parte preenchida em verde limão,
   restante em cinza.
3. COLUNA ESQUERDA (ocupa 55% da largura, alinhada à esquerda, margem de 90 px):
   a. TÍTULO gigante em branco puro, sans-serif geométrica ExtraBold, até 2 linhas.
   b. DESCRIÇÃO logo abaixo, branca, peso Regular, tamanho médio, 2 a 3 linhas.
      As últimas palavras indicadas ficam em verde limão, bold itálico.
   c. Uma barrinha horizontal verde limão, curta e grossa, cantos arredondados.
4. FAIXA DE AMOSTRAS (abaixo da barrinha, alinhada à esquerda): exatamente 5 quadrados de
   cantos arredondados, mesmo tamanho, lado a lado, com espaço igual entre eles, em cor
   chapada e sólida, sem degradê, sem sombra, sem textura, com borda fina branca a 20% de
   opacidade. Ordem da esquerda para a direita: da cor mais escura para a mais clara.
   Abaixo de cada quadrado, o código hex correspondente em branco, pequeno, maiúsculo.
5. RODAPÉ ESQUERDO: seta fina verde limão apontando para a direita e, abaixo, o texto de
   rodapé em branco, pequeno, 2 a 3 linhas, com a última palavra em bold itálico.
6. LADO DIREITO E FUNDO: o objeto herói, grande, em macro, cortado pela borda direita e
   inferior, ocupando cerca de 50% da imagem, sem nunca cobrir textos ou amostras.
   O objeto e a luz usam somente as cores da paleta deste slide.

CORES FIXAS DA MARCA: verde limão #8CF000 usado só em: "link" do logo, barra de progresso,
palavras de destaque, barrinha e seta. Branco #FFFFFF nos textos. Fundo #0A0A0A.

TIPOGRAFIA FIXA: a mesma família sans-serif geométrica (estilo Montserrat) em todos os textos.

PROIBIDO: mais ou menos que 5 amostras, amostras em círculo, degradê nas amostras, nomes de
cor em inglês, texto extra, marca d'água, hashtag, emoji, ícones adicionais, bordas, mockup,
mais de um objeto, pessoas, mudar posição de qualquer elemento, erros de ortografia.
=== FIM DA TRAVA ===
```

## Passo 5 — Gerar um prompt por slide

Cada prompt = **TRAVA completa + VARIÁVEIS**. Modelo do slide de paleta:

```
[colar aqui a TRAVA DE ESTILO completa, sem mudar nada]

=== VARIÁVEIS DESTE SLIDE ===
CONTADOR: "02/09" — barra de progresso preenchida em 2 de 9 partes.
TÍTULO: "Floresta Noturna" (em 2 linhas: "Floresta" / "Noturna")
DESCRIÇÃO: "Natural, calma e sofisticada sem esforço."
  → em verde bold itálico: "sem esforço."
AMOSTRAS (nesta ordem, da esquerda para a direita):
  1. "#0B1F17" — verde quase preto
  2. "#1B4332" — verde floresta escuro
  3. "#2D6A4F" — verde esmeralda fechado
  4. "#95D5B2" — verde menta claro
  5. "#F1FAEE" — branco esverdeado
RODAPÉ: "Ideal para marcas de bem-estar." → em bold itálico: "bem-estar."
OBJETO HERÓI: folha verde-escura com gotas d'água em macro extremo.
LUZ: verde esmeralda suave vindo da direita.

Escreva exatamente estes textos e códigos, caractere por caractere. Não escreva nenhum outro
texto. Siga a imagem de referência anexada para logo, posições, tamanhos e tipografia.
```

**Capa (01)** — mesma TRAVA, sem faixa de amostras: objeto herói centralizado; sobre ele o número (ex.: "7") enorme em verde bold itálico, "PALETAS" gigante em branco maiúsculo, subtítulo em branco com a última palavra em verde; rodapé com seta + "Deslize e conheça". Objeto: algo multicolorido que antecipe as paletas (tintas escorrendo, leque de amostras de tinta).

**Slide final** — mesma TRAVA, sem amostras: título vira pergunta ("Qual é a sua?"), descrição vira a ação ("Salve para usar no próximo projeto."), rodapé "Siga @perfil para mais dicas de design.". Reutilize o objeto da capa.

Entregue os prompts em blocos de código separados e numerados. **Não abrevie a TRAVA** com "[mesma trava acima]": cada bloco tem que funcionar colado sozinho num chat novo.

## Passo 6 — Entregar o protocolo de uso

1. **Gere o slide 02 primeiro** e refaça até ficar perfeito. Ele vira o **slide mestre**.
2. **Em todo slide seguinte, anexe 2 imagens**: o slide mestre + o logo. Cole o prompt.
3. **Sempre o mestre original**, nunca o último slide gerado (os erros se acumulam).
4. **Chat novo a cada 3 slides.** É o que evita a perda no slide 6–7.
5. **Checklist antes de aceitar.** Reprovou em 1 item, prompt de correção.

### Checklist por slide

- [ ] Exatamente 5 amostras, quadradas, mesma posição e tamanho do mestre
- [ ] Ordem do escuro para o claro
- [ ] Os 5 hex conferidos caractere por caractere com o plano
- [ ] Cada amostra visualmente próxima do hex (conferir com conta-gotas)
- [ ] Logo "Rydlink" certo, contador e barra de progresso corretos
- [ ] Destaque no verde da marca, textos com acentos
- [ ] Objeto nas cores da paleta, sem cobrir nada

### Prompt de correção

```
Edite a última imagem. Mantenha TUDO exatamente como está (objeto, luz, fundo, posições).
Corrija somente: [1 problema, ex.: o código abaixo da terceira amostra deve ser "#2D6A4F"].
Não mude mais nada.
```

Um problema por correção. Errou 2 vezes seguidas: chat novo, prompt completo de novo.

## Modos

- **Modo A — arte completa no gerador (padrão).** Rápido, mas cor e hex saem aproximados.
- **Modo B — fundo no gerador, amostras e textos no Canva/Figma (recomendado).** A TRAVA pede "sem texto, sem logo, sem amostras, metade esquerda escura e limpa" e os prompts trazem só OBJETO + LUZ + cores da paleta. Amostras com o hex real, logo e textos entram num template fixo. **Para carrossel de paleta este é o modo certo**: quem salva o post vai copiar o hex, e um hex errado derruba a credibilidade.

No Modo B, entregue também a ficha do template (posições e tamanhos da grade) e a lista de hex pronta para colar.

## Formato da resposta final

1. Plano do carrossel (tabela com as paletas)
2. TRAVA DE ESTILO (1 bloco)
3. Prompts numerados, um bloco por slide, autocontidos
4. Protocolo de uso + checklist + prompt de correção
5. Legenda do post (gancho, lista das paletas com os hex em texto, CTA) + 5 hashtags; para Pinterest, título (até 100 caracteres) e descrição com palavras-chave

Sempre coloque os hex **em texto na legenda**: garante o valor certo mesmo se a arte sair com erro.
