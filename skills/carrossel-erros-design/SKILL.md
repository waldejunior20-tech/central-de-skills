---
name: carrossel-erros-design
description: Gera o pacote completo de prompts para carrosséis de ERROS DE DESIGN no formato errado x certo (antes e depois) para Instagram e Pinterest em geradores de imagem como o ChatGPT, mantendo o MESMO padrão visual do primeiro ao último slide. Use quando o usuário pedir "carrossel de erros de design", "antes e depois", "certo e errado", "erros que deixam seu site/post/logo amador", "o que não fazer no design" ou reclamar que o ChatGPT perde a consistência no meio do carrossel.
---

# Carrossel de Erros de Design — errado x certo com consistência travada

## Por que o ChatGPT se perde no slide 6 ou 7

Ele não "lembra" do estilo: relê a conversa, e cada imagem nasce do zero. Quando o prompt vira "agora faz o próximo", ele improvisa. Por isso **todo prompt desta skill é autocontido**: carrega a Trava de Estilo inteira e só muda um bloco pequeno de variáveis.

## Regras inegociáveis

- **Um bloco TRAVA DE ESTILO, escrito uma única vez, copiado idêntico em todos os prompts.** Não resumir, não reescrever, não "melhorar" entre slides.
- **Só o bloco VARIÁVEIS muda.** Nunca escrever "igual ao anterior", "mesmo estilo" ou "continue".
- **Um slide por mensagem.**
- **Todo texto da arte vai entre aspas, exato, com acentos**, seguido de "não escreva nenhum outro texto".
- **O contador é calculado por você.** Total = capa + itens + slide final (7 erros = 9 slides). O total nunca muda no meio.
- **Um erro por slide, sempre mostrado em dupla:** ERRADO em cima, CERTO embaixo, do mesmo exemplo. Só a variável do erro muda entre as duas versões.
- **O erro tem que ser visível em 1 segundo.** Exagere o lado errado e limpe o lado certo. Erro sutil não funciona em gerador de imagem.
- **Os exemplos usam formas e blocos, não texto real.** Linhas cinzas no lugar de parágrafos: o gerador escreve texto pequeno com erro.

## Passo 1 — Coletar o briefing

Pergunte só o que faltar:

| Item | Padrão se não informado |
|---|---|
| Tema e quantidade de itens | obrigatório (ex.: "7 erros que deixam seu site amador") |
| Marca | preset Rydlink (abaixo) |
| Formato | Instagram 4:5 (1080×1350). Pinterest: 2:3 (1000×1500) |
| Modo | Modo A. Ver "Modos" |
| CTA final | "Salve este post" + "Siga @perfil" |

**Preset Rydlink:** logo "Rydlink" (Ryd branco + link verde, itálico bold) com "Sites e Sistemas" embaixo, topo esquerdo. Verde limão `#8CF000`, fundo `#0A0A0A`, texto branco `#FFFFFF`. Tipografia sans geométrica bold (estilo Montserrat). Para outra marca, troque só logo, cores hex, tipografia e formato.

## Passo 2 — Montar o plano

Entregue a tabela antes de qualquer prompt:

| # | Tipo | Título (o erro) | Explicação (máx. 12 palavras) | Destaque verde | Exemplo ERRADO | Exemplo CERTO |
|---|---|---|---|---|---|---|
| 01 | capa | 7 ERROS | que deixam seu site amador | amador | — | — |
| 02 | erro | Falta de respiro | Elementos colados cansam e parecem bagunça. | parecem bagunça. | card com título, linhas e botão espremidos nas bordas | o mesmo card com margens largas e espaço entre os blocos |
| 03 | erro | Cores demais | Mais de 3 cores tira o foco do que importa. | do que importa. | card com 6 cores vibrantes disputando atenção | o mesmo card em tons neutros com 1 cor de destaque |
| … | | | | | | |
| 09 | final | Qual você já cometeu? | Salve para revisar antes de publicar. | Salve | — | — |

Regras do plano:
- Título: o nome do erro, 2 a 3 palavras. Explicação: a consequência, não a definição.
- Bons erros para mostrar visualmente: falta de respiro, cores demais, baixo contraste, desalinhamento, fontes demais, hierarquia fraca, botão escondido, imagem esticada, texto centralizado longo.
- Use sempre o **mesmo tipo de exemplo** no carrossel inteiro (todos cards de site, ou todos posts, ou todos cartões de visita).

## Passo 3 — Escrever a TRAVA DE ESTILO

Preencha uma vez. Modelo (preset Rydlink, 4:5):

```
=== TRAVA DE ESTILO (NÃO ALTERAR NADA DESTE BLOCO) ===
FORMATO: imagem vertical 4:5, 1080x1350 px. Uma única imagem, um único slide.

ESTILO: pôster editorial premium de design, fundo quase preto (#0A0A0A) com textura sutil.
Os exemplos são mockups de interface em flat design limpo, vistos de frente, sem perspectiva,
sem foto, sem pessoa. Sem 3D cartoon, sem moldura externa.

GRADE FIXA (posições idênticas em todos os slides):
1. TOPO ESQUERDO: logo "Rydlink" — "Ryd" em branco e "link" em verde limão, bold itálico,
   com "Sites e Sistemas" pequeno em branco logo abaixo. Usar o logo exatamente como na
   imagem de referência anexada. Escrever R-y-d-l-i-n-k, sem letras duplicadas.
2. TOPO DIREITO: contador no formato "NN/TT" em branco, bold, pequeno. Abaixo dele, uma
   barra de progresso horizontal fina, arredondada: parte preenchida em verde limão,
   restante em cinza.
3. BLOCO DE TÍTULO (abaixo do logo, alinhado à esquerda, margem de 90 px):
   a. TÍTULO grande em branco puro, sans-serif geométrica ExtraBold, até 2 linhas.
   b. EXPLICAÇÃO logo abaixo, branca, peso Regular, tamanho médio, até 2 linhas.
      As últimas palavras indicadas ficam em verde limão, bold itálico.
4. DOIS PAINÉIS empilhados, mesma largura e mesma altura, cantos arredondados de 32 px,
   fundo cinza muito escuro (#161616), ocupando a metade inferior da imagem:
   a. PAINEL DE CIMA = ERRADO: borda fina vermelha (#FF3B30). No canto superior esquerdo do
      painel, etiqueta em cápsula vermelha com um X branco e a palavra "ERRADO" em branco bold.
   b. PAINEL DE BAIXO = CERTO: borda fina verde limão. No canto superior esquerdo, etiqueta
      em cápsula verde limão com um símbolo de check preto e a palavra "CERTO" em preto bold.
   c. Dentro de cada painel, centralizado, o mesmo exemplo de interface, do mesmo tamanho,
      mudando apenas o que o slide indica. Textos do exemplo representados por barras cinzas.
5. RODAPÉ: seta fina verde limão apontando para a direita, no canto inferior direito.

CORES FIXAS: verde limão #8CF000 usado só em: "link" do logo, barra de progresso, palavras
de destaque, barrinha e seta, borda e etiqueta do painel CERTO. Vermelho #FF3B30 só na borda e etiqueta do painel ERRADO. Branco #FFFFFF nos textos. Fundo #0A0A0A.

TIPOGRAFIA FIXA: a mesma família sans-serif geométrica (estilo Montserrat) em todos os textos.

PROIBIDO: texto extra, texto em inglês, marca d'água, hashtag, emoji, bordas, mockup de
celular, pessoas, mudar posição do logo ou do contador, trocar o verde por outra cor, erros
de ortografia, letras duplicadas, texto legível dentro dos exemplos, mais de dois painéis, painéis lado a lado, inverter a ordem ERRADO/CERTO.
=== FIM DA TRAVA ===
```

## Passo 4 — Gerar um prompt por slide

Cada prompt = **TRAVA completa + VARIÁVEIS**. Modelo:

```
[colar aqui a TRAVA DE ESTILO completa, sem mudar nada]

=== VARIÁVEIS DESTE SLIDE ===
CONTADOR: "02/09" — barra de progresso preenchida em 2 de 9 partes.
TÍTULO: "Falta de respiro"
EXPLICAÇÃO: "Elementos colados cansam e parecem bagunça."
  → em verde bold itálico: "parecem bagunça."
EXEMPLO BASE: card de site com uma imagem retangular, um título (barra cinza grossa),
  três linhas de texto (barras cinzas finas) e um botão verde limão.
PAINEL ERRADO: tudo espremido, elementos encostados uns nos outros e nas bordas do card,
  sem nenhuma margem.
PAINEL CERTO: o mesmo card, com margens largas, espaço generoso e igual entre os elementos.

Escreva exatamente estes textos, em português, com os acentos. Não escreva nenhum outro texto.
Siga a imagem de referência anexada para logo, posições, tamanhos e tipografia.
```

**Capa (01)** — mesma TRAVA, sem os dois painéis: no centro, o número (ex.: "7") enorme em verde bold itálico, "ERROS" gigante em branco maiúsculo, subtítulo em branco com a última palavra em verde. Atrás, um X vermelho grande e desfocado. Rodapé: seta + "Deslize e confira".

**Slide final** — mesma TRAVA, sem painéis: título vira pergunta ("Qual você já cometeu?"), explicação vira a ação ("Salve para revisar antes de publicar."), mais "Siga @perfil para mais dicas de design.". Atrás, um check verde grande e desfocado.

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
- [ ] ERRADO em cima (vermelho), CERTO embaixo (verde), nunca invertido
- [ ] Mesmo exemplo nos dois painéis, só o erro muda
- [ ] O erro é óbvio em 1 segundo
- [ ] Nenhum texto ilegível ou inventado dentro dos exemplos

### Prompt de correção

```
Edite a última imagem. Mantenha TUDO exatamente como está (imagem, luz, fundo, posições).
Corrija somente: [descrever 1 problema].
Não mude mais nada.
```

Um problema por correção. Errou 2 vezes seguidas: chat novo, prompt completo de novo.

## Modos

- **Modo A — arte completa no gerador (padrão).** Rápido. Risco: logo e textos variam um pouco.
- **Modo B — fundo no gerador, texto no Canva/Figma (recomendado).** A TRAVA pede "sem nenhum texto, sem logo" e os prompts trazem só a parte visual. Logo, contador e textos entram num template fixo. Aqui o Modo B pode ir além: monte os dois exemplos direto no Canva/Figma com formas simples. Fica mais preciso que o gerador e leva poucos minutos por slide.

No Modo B, entregue também a ficha do template (posições, tamanhos e cores da grade).

## Formato da resposta final

1. Plano do carrossel (tabela)
2. TRAVA DE ESTILO (1 bloco)
3. Prompts numerados, um bloco de código por slide, autocontidos (**nunca** abreviar a TRAVA com "[mesma trava acima]")
4. Protocolo de uso + checklist + prompt de correção
5. Legenda do post (gancho na 1ª linha, lista dos itens, CTA) + 5 hashtags; para Pinterest, título (até 100 caracteres) e descrição com palavras-chave

Avise o que o gerador **não garante**: logo idêntico, ortografia perfeita em textos longos e diferença controlada entre os dois painéis (às vezes ele muda mais do que o erro pedido). Para isso, Modo B.
