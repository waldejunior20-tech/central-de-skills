---
name: carrossel-design
description: Gera o pacote completo de prompts para criar carrosséis de dica de design (fontes, cores, layouts, ferramentas, erros comuns) para Instagram e Pinterest em geradores de imagem como o ChatGPT, mantendo o MESMO padrão visual do slide 1 ao último. Use quando o usuário pedir "carrossel", "prompts de carrossel", "post de dica de design", "carrossel de fontes", "sequência de slides para o Insta/Pinterest" ou reclamar que o ChatGPT se perde, muda o estilo ou perde a consistência no meio do carrossel.
---

# Carrossel de Design — prompts com consistência travada

## Por que o ChatGPT se perde no slide 6 ou 7

1. **Ele não "lembra" do estilo, ele relê a conversa.** Quanto mais longa, mais o padrão do início se dilui.
2. **Cada imagem é gerada do zero.** Se o prompt do slide 7 diz só "agora faz o próximo", ele improvisa.
3. **Sem referência visual anexada, ele reinterpreta** layout, logo e tipografia a cada geração.

A solução desta skill: **todo prompt de slide é autocontido** (carrega a Trava de Estilo inteira, palavra por palavra) e **só muda um bloco pequeno de variáveis**. Nunca dependa da memória da conversa.

## Regras inegociáveis

- **Um bloco TRAVA DE ESTILO, escrito uma única vez, copiado idêntico em todos os prompts.** Não resuma, não reescreva, não "melhore" entre slides. Mudou uma palavra, mudou o resultado.
- **Só o bloco VARIÁVEIS muda** de um slide para o outro.
- **Nunca escreva "igual ao anterior", "mesmo estilo", "continue".** Sempre descreva tudo de novo.
- **Um slide por mensagem.** Nunca pedir vários slides numa imagem ou numa mensagem só.
- **Todo texto que aparece na arte vai entre aspas, exato, com acentos**, seguido de "não escreva nenhum outro texto".
- **O contador é calculado por você, não pelo gerador.** Total = capa + itens + slide final. Exemplo: 7 fontes = 9 slides (01/09 a 09/09). O total nunca muda no meio.
- **Um objeto herói diferente por slide, definido no plano antes de gerar.** Sem repetir objeto nem categoria seguida.

## Passo 1 — Coletar o briefing

Pergunte só o que faltar (se o usuário já deu, não pergunte de novo):

| Item | Padrão se não informado |
|---|---|
| Tema e quantidade de itens | obrigatório (ex.: "7 fontes para marcas fortes") |
| Marca | preset Rydlink (abaixo) |
| Formato | Instagram 4:5 (1080×1350). Pinterest: 2:3 (1000×1500) |
| Modo | Modo A (arte completa no gerador). Ver "Modos" |
| CTA final | "Salve este post" + "Siga @perfil" |

**Preset Rydlink** (extraído dos carrosséis aprovados):
- Logo "Rydlink" (Ryd branco + link verde, itálico bold) com "Sites e Sistemas" embaixo, canto superior esquerdo.
- Verde limão `#8CF000` como única cor da marca. Fundo quase preto `#0A0A0A`. Texto branco `#FFFFFF`.
- Tipografia sans geométrica bold (estilo Montserrat): título ExtraBold, corpo Regular, destaque Bold Italic verde.

## Passo 2 — Montar o plano (antes de qualquer prompt)

Entregue uma tabela e só siga depois dela pronta:

| # | Tipo | Título | Descrição (máx. 12 palavras) | Destaque verde | Ideal para | Objeto herói | Luz de acento |
|---|---|---|---|---|---|---|---|
| 01 | capa | 7 FONTES | que elevam o visual do seu projeto | projeto | — | framboesa com gotas | vermelho |
| 02 | item | Clash Display | Forte, impactante e perfeita para títulos que chamam atenção. | chamam atenção. | campanhas e lançamentos. | capacete de moto | vermelho |
| … | | | | | | | |
| 09 | final | Qual você vai usar? | Salve para consultar depois. | Salve | — | objeto da capa | cor da capa |

Regras do plano:
- Título do item: 1 ou 2 palavras. Descrição: 2 a 4 linhas curtas. O destaque verde são as **últimas** 1–3 palavras da descrição.
- Objetos: produtos e texturas em macro (relógio, fone, cadeira de couro, peça de xadrez, rocha com lava, folha com gotas, capacete, tênis, câmera, garrafa de perfume). Evite rostos de pessoas: é onde a consistência mais quebra.
- Luz de acento: uma cor por slide (laranja, vermelho, verde, âmbar, azul frio). Pode alternar, mas nunca duas cores no mesmo slide. **O verde da marca nunca muda**, independente da luz.

## Passo 3 — Escrever a TRAVA DE ESTILO

Preencha uma vez com os dados da marca. Este é o modelo (preset Rydlink, 4:5):

```
=== TRAVA DE ESTILO (NÃO ALTERAR NADA DESTE BLOCO) ===
FORMATO: imagem vertical 4:5, 1080x1350 px. Uma única imagem, um único slide.

ESTILO: pôster editorial premium de design. Fotografia de produto em macro, hiper-realista,
iluminação cinematográfica de estúdio, alto contraste, fundo quase preto (#0A0A0A) com
desfoque suave e um único brilho de luz colorida. Sem ilustração, sem 3D cartoon, sem moldura.

GRADE FIXA (posições idênticas em todos os slides):
1. TOPO ESQUERDO: logo "Rydlink" — "Ryd" em branco e "link" em verde limão, bold itálico,
   com "Sites e Sistemas" pequeno em branco logo abaixo. Usar o logo exatamente como na
   imagem de referência anexada. Escrever R-y-d-l-i-n-k, sem letras duplicadas.
2. TOPO DIREITO: contador no formato "NN/TT" em branco, bold, pequeno. Abaixo dele, uma
   barra de progresso horizontal fina, arredondada: parte preenchida em verde limão,
   restante em cinza.
3. COLUNA ESQUERDA (ocupa 55% da largura, alinhada à esquerda, margem de 90 px):
   a. TÍTULO gigante em branco puro, sans-serif geométrica ExtraBold, até 2 linhas.
   b. DESCRIÇÃO logo abaixo, branca, peso Regular, tamanho médio, 2 a 4 linhas.
      As últimas palavras indicadas ficam em verde limão, bold itálico.
   c. Uma barrinha horizontal verde limão, curta e grossa, cantos arredondados.
4. RODAPÉ ESQUERDO: seta fina verde limão apontando para a direita e, abaixo, o texto de
   rodapé em branco, pequeno, 2 a 3 linhas, com a última palavra em bold itálico.
5. LADO DIREITO E FUNDO: o objeto herói, grande, em macro, cortado pela borda direita e
   inferior, ocupando cerca de 55% da imagem, sem nunca cobrir os textos.

CORES FIXAS: verde limão #8CF000 (único verde, usado só em: "link" do logo, barra de
progresso, palavras de destaque, barrinha e seta). Branco #FFFFFF nos textos. Fundo #0A0A0A.
A luz de acento colore apenas o objeto e o fundo, nunca os textos.

TIPOGRAFIA FIXA: a mesma família sans-serif geométrica (estilo Montserrat) em todos os textos.

PROIBIDO: texto extra, texto em inglês, marca d'água, hashtag, emoji, ícones adicionais,
bordas, mockup de celular, mais de um objeto, pessoas, mudar posição do logo ou do contador,
trocar o verde por outra cor, erros de ortografia, letras duplicadas.
=== FIM DA TRAVA ===
```

Adapte para outra marca trocando apenas: logo, cores hex, família tipográfica e formato.

## Passo 4 — Gerar um prompt por slide

Cada prompt = **TRAVA completa + VARIÁVEIS**. Modelo do slide de item:

```
[colar aqui a TRAVA DE ESTILO completa, sem mudar nada]

=== VARIÁVEIS DESTE SLIDE ===
CONTADOR: "03/09" — barra de progresso preenchida em 3 de 9 partes.
TÍTULO: "Clash Display" (em 2 linhas: "Clash" / "Display")
DESCRIÇÃO: "Forte, impactante e perfeita para títulos que chamam atenção."
  → em verde bold itálico: "chamam atenção."
RODAPÉ: "Ideal para campanhas e lançamentos." → em bold itálico: "lançamentos."
OBJETO HERÓI: capacete de moto preto fosco visto de perfil, viseira refletindo luz.
LUZ DE ACENTO: vermelho intenso.

Escreva exatamente estes textos, em português, com os acentos. Não escreva nenhum outro texto.
Siga a imagem de referência anexada para logo, posições, tamanhos e tipografia.
```

**Capa (slide 01)** — usa a mesma TRAVA, com estas variáveis no lugar:

```
=== VARIÁVEIS DESTE SLIDE (CAPA) ===
CONTADOR: "01/09" — barra preenchida em 1 de 9 partes.
LAYOUT DA CAPA: objeto herói centralizado ocupando o centro da imagem. Sobre ele, centralizado:
  número "7" enorme em verde limão bold itálico; abaixo "FONTES" gigante em branco ExtraBold
  maiúsculo; abaixo "que elevam o visual do seu projeto" em branco Regular, com "projeto"
  em verde bold.
RODAPÉ: seta verde + "Deslize e conheça".
OBJETO HERÓI: framboesa vermelha com gotas d'água segurada entre dois dedos, macro extremo.
LUZ DE ACENTO: vermelho.
```

**Slide final** — mesma TRAVA, título vira a pergunta/CTA, descrição vira a ação ("Salve este post para consultar depois."), rodapé vira "Siga @perfil para mais dicas de design.". Reutilize o objeto e a luz da capa para fechar o ciclo.

Entregue todos os prompts em blocos de código separados e numerados, prontos para copiar. **Não abrevie a TRAVA com "[mesma trava acima]"** nos prompts finais: cada bloco precisa funcionar colado sozinho num chat novo.

## Passo 5 — Entregar o protocolo de uso

Sempre inclua estas instruções junto com os prompts:

1. **Gere o slide 02 primeiro** (um slide de item, não a capa). Refaça até ficar perfeito. Ele vira o **slide mestre**.
2. **Em todo slide seguinte, anexe 2 imagens**: o slide mestre + o arquivo do logo. Cole o prompt do slide.
3. **Sempre anexe o mestre original**, nunca o último slide gerado (senão os pequenos erros se acumulam).
4. **Abra um chat novo a cada 3 slides.** Como o prompt é autocontido, basta colar prompt + anexos. É isso que evita a perda no slide 6–7.
5. **Confira o checklist antes de aceitar** cada slide. Reprovou em 1 item, use o prompt de correção.
6. **Dica extra:** crie um Projeto no ChatGPT e cole a TRAVA nas instruções do projeto. Mesmo assim, mantenha a TRAVA dentro de cada prompt.

### Checklist por slide

- [ ] Logo no topo esquerdo, escrito "Rydlink" certo (sem letra duplicada)
- [ ] Contador certo ("NN/TT") e barra de progresso coerente
- [ ] Título, descrição e rodapé com texto exato e acentos
- [ ] Destaque no verde da marca, não em outra cor
- [ ] Textos à esquerda, objeto à direita, nada sobreposto
- [ ] Um único objeto, sem texto ou elemento extra
- [ ] Mesma tipografia e mesmos tamanhos do slide mestre

### Prompt de correção (usar no mesmo chat, com o mestre anexado)

```
Edite a última imagem. Mantenha TUDO exatamente como está (objeto, luz, fundo, posições).
Corrija somente: [descrever 1 problema, ex.: o logo deve ser "Rydlink", com um "l" só].
Não mude mais nada.
```

Um problema por correção. Se errar 2 vezes seguidas, abra chat novo e gere de novo com o prompt completo.

## Modos

- **Modo A — arte completa no gerador (padrão).** Mais rápido. Risco: logo e textos variam um pouco entre slides.
- **Modo B — fundo no gerador, texto no Canva/Figma (recomendado para consistência 100%).** A TRAVA pede "sem nenhum texto, sem logo, deixar a metade esquerda escura e limpa para receber texto" e os prompts trazem só OBJETO + LUZ. O logo, contador e textos entram num template fixo. Ofereça o Modo B sempre que:
  - o usuário reclamar de logo errado ou de texto com erro;
  - o carrossel for **de fontes**: o gerador não desenha a fonte real (escreve "Gendy" numa fonte genérica), então o nome precisa ser digitado na fonte verdadeira no editor.

No Modo B, entregue também a ficha do template: posições, tamanhos e cores da grade da TRAVA.

## Formato da resposta final

1. Plano do carrossel (tabela)
2. TRAVA DE ESTILO (1 bloco)
3. Prompts numerados, um bloco por slide, autocontidos
4. Protocolo de uso + checklist + prompt de correção
5. Legenda do post (gancho na 1ª linha, lista dos itens, CTA) + 5 hashtags; para Pinterest, título (até 100 caracteres) e descrição com palavras-chave

Avise com clareza o que o gerador **não garante**: logo idêntico pixel a pixel, fonte real pelo nome e ortografia perfeita em textos longos. Para isso, Modo B.
