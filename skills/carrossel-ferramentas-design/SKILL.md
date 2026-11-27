---
name: carrossel-ferramentas-design
description: Gera o pacote completo de prompts para carrosséis de FERRAMENTAS, SITES E RECURSOS PARA DESIGNERS (bancos de imagem, sites de fontes, geradores de paleta, mockups, ícones, IAs de design, plugins) para Instagram e Pinterest em geradores de imagem como o ChatGPT, mantendo o MESMO padrão visual do primeiro ao último slide. Use quando o usuário pedir "carrossel de ferramentas de design", "sites para designers", "sites que todo designer precisa conhecer", "IAs para design", "recursos gratuitos de design" ou reclamar que o ChatGPT perde a consistência no meio do carrossel.
---

# Carrossel de Ferramentas para Designers — recursos com consistência travada

## Por que o ChatGPT se perde no slide 6 ou 7

Ele não "lembra" do estilo: relê a conversa, e cada imagem nasce do zero. Quando o prompt vira "agora faz o próximo", ele improvisa. Por isso **todo prompt desta skill é autocontido**: carrega a Trava de Estilo inteira e só muda um bloco pequeno de variáveis.

## Regras inegociáveis

- **Um bloco TRAVA DE ESTILO, escrito uma única vez, copiado idêntico em todos os prompts.** Não resumir, não reescrever, não "melhorar" entre slides.
- **Só o bloco VARIÁVEIS muda.** Nunca escrever "igual ao anterior", "mesmo estilo" ou "continue".
- **Um slide por mensagem.**
- **Todo texto da arte vai entre aspas, exato, com acentos**, seguido de "não escreva nenhum outro texto".
- **O contador é calculado por você.** Total = capa + itens + slide final (7 ferramentas = 9 slides). O total nunca muda no meio.
- **Só ferramentas reais e verificadas.** Nunca inventar nome, site ou função. Na dúvida sobre preço ou plano gratuito, marque "verificar" no plano e avise o usuário: preços mudam.
- **Nunca pedir o logo da ferramenta ao gerador.** Ele inventa um logo falso. O slide mostra o nome em texto e um objeto herói que representa a função.
- **Nunca pedir print de tela da ferramenta.** O gerador cria uma interface que não existe.
- **O endereço do site vai em texto simples e curto** (ex.: "coolors.co"), sem "https://" e sem "www".

## Passo 1 — Coletar o briefing

Pergunte só o que faltar:

| Item | Padrão se não informado |
|---|---|
| Tema e quantidade de itens | obrigatório (ex.: "7 sites gratuitos que todo designer precisa conhecer") |
| Marca | preset Rydlink (abaixo) |
| Formato | Instagram 4:5 (1080×1350). Pinterest: 2:3 (1000×1500) |
| Modo | Modo A. Ver "Modos" |
| CTA final | "Salve este post" + "Siga @perfil" |

**Preset Rydlink:** logo "Rydlink" (Ryd branco + link verde, itálico bold) com "Sites e Sistemas" embaixo, topo esquerdo. Verde limão `#8CF000`, fundo `#0A0A0A`, texto branco `#FFFFFF`. Tipografia sans geométrica bold (estilo Montserrat). Para outra marca, troque só logo, cores hex, tipografia e formato.

## Passo 2 — Montar o plano

Entregue a tabela antes de qualquer prompt:

| # | Tipo | Nome | Site | O que faz (máx. 12 palavras) | Destaque verde | Etiqueta | Ideal para | Objeto herói |
|---|---|---|---|---|---|---|---|---|
| 01 | capa | 7 SITES | — | que todo designer precisa conhecer | conhecer | — | — | teclado mecânico em macro |
| 02 | item | Coolors | coolors.co | Gera paletas de cores prontas em segundos. | em segundos. | GRATUITO | escolher cores rápido. | leque de amostras de tinta |
| 03 | item | Unsplash | unsplash.com | Banco de fotos profissionais para usar sem pagar. | sem pagar. | GRATUITO | sites e posts. | lente de câmera em macro |
| … | | | | | | | | |
| 09 | final | Qual você já usa? | — | Salve para não perder a lista. | Salve | — | — | objeto da capa |

Regras do plano:
- Etiqueta: só uma destas três, em maiúsculas: "GRATUITO", "FREEMIUM" ou "PAGO". Se não tiver certeza, deixe sem etiqueta e sinalize para o usuário conferir.
- Variar categorias no mesmo carrossel: cores, fontes, imagens, ícones, mockups, inspiração, IA.
- Objeto herói = função da ferramenta, não a marca: paleta → amostras de tinta; fotos → lente; fontes → tipos móveis de metal; mockups → cartões em branco; ícones → peças de encaixe.
- Luz de acento: uma cor por slide. O verde da marca nunca muda.

## Passo 3 — Escrever a TRAVA DE ESTILO

Preencha uma vez. Modelo (preset Rydlink, 4:5):

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
   a. ETIQUETA: cápsula pequena com contorno verde limão e texto verde limão bold maiúsculo.
   b. TÍTULO gigante em branco puro, sans-serif geométrica ExtraBold, até 2 linhas.
   c. DESCRIÇÃO logo abaixo, branca, peso Regular, tamanho médio, 2 a 3 linhas.
      As últimas palavras indicadas ficam em verde limão, bold itálico.
   d. Uma barrinha horizontal verde limão, curta e grossa, cantos arredondados.
   e. ENDEREÇO DO SITE: cápsula de fundo cinza muito escuro (#161616), cantos totalmente
      arredondados, com o endereço em branco, peso Medium, tudo em minúsculas.
4. RODAPÉ ESQUERDO: seta fina verde limão apontando para a direita e, abaixo, o texto de
   rodapé em branco, pequeno, 2 a 3 linhas, com a última palavra em bold itálico.
5. LADO DIREITO E FUNDO: o objeto herói, grande, em macro, cortado pela borda direita e
   inferior, ocupando cerca de 50% da imagem, sem nunca cobrir os textos.

CORES FIXAS: verde limão #8CF000 usado só em: "link" do logo, barra de progresso, palavras
de destaque, barrinha e seta e etiqueta. A luz de acento colore só o objeto e o fundo. Branco #FFFFFF nos textos. Fundo #0A0A0A.

TIPOGRAFIA FIXA: a mesma família sans-serif geométrica (estilo Montserrat) em todos os textos.

PROIBIDO: texto extra, texto em inglês, marca d'água, hashtag, emoji, bordas, mockup de
celular, pessoas, mudar posição do logo ou do contador, trocar o verde por outra cor, erros
de ortografia, letras duplicadas, logotipo de qualquer ferramenta ou empresa, print de tela, interface de aplicativo, ícones de redes sociais, mais de um objeto.
=== FIM DA TRAVA ===
```

## Passo 4 — Gerar um prompt por slide

Cada prompt = **TRAVA completa + VARIÁVEIS**. Modelo:

```
[colar aqui a TRAVA DE ESTILO completa, sem mudar nada]

=== VARIÁVEIS DESTE SLIDE ===
CONTADOR: "02/09" — barra de progresso preenchida em 2 de 9 partes.
ETIQUETA: "GRATUITO"
TÍTULO: "Coolors"
DESCRIÇÃO: "Gera paletas de cores prontas em segundos."
  → em verde bold itálico: "em segundos."
ENDEREÇO DO SITE: "coolors.co"
RODAPÉ: "Ideal para escolher cores rápido." → em bold itálico: "rápido."
OBJETO HERÓI: leque de amostras de tinta coloridas aberto, em macro.
LUZ DE ACENTO: azul frio.

Escreva exatamente estes textos, caractere por caractere. Não escreva nenhum outro texto.
Não desenhe o logotipo da ferramenta. Siga a imagem de referência anexada para logo da
Rydlink, posições, tamanhos e tipografia.
```

**Capa (01)** — mesma TRAVA, sem etiqueta e sem endereço: objeto herói centralizado; sobre ele o número (ex.: "7") enorme em verde bold itálico, "SITES" gigante em branco maiúsculo, subtítulo em branco com a última palavra em verde. Rodapé: seta + "Deslize e conheça".

**Slide final** — mesma TRAVA, sem etiqueta e sem endereço: título vira pergunta ("Qual você já usa?"), descrição vira a ação ("Salve para não perder a lista."), rodapé "Siga @perfil para mais dicas de design.". Reutilize o objeto e a luz da capa.

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
- [ ] Nome e endereço do site conferidos caractere por caractere
- [ ] Nenhum logo de ferramenta inventado, nenhum print de tela falso
- [ ] Etiqueta correta (GRATUITO / FREEMIUM / PAGO) e conferida no site oficial
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
- **Modo B — fundo no gerador, texto no Canva/Figma (recomendado).** A TRAVA pede "sem nenhum texto, sem logo" e os prompts trazem só a parte visual. Logo, contador e textos entram num template fixo. Para este tema é o modo mais seguro: o endereço do site é o que a pessoa vai digitar, então não pode ter erro. No editor você também pode aplicar o logo oficial da ferramenta, respeitando as regras de uso da marca dela.

No Modo B, entregue também a ficha do template (posições, tamanhos e cores da grade).

## Formato da resposta final

1. Plano do carrossel (tabela)
2. TRAVA DE ESTILO (1 bloco)
3. Prompts numerados, um bloco de código por slide, autocontidos (**nunca** abreviar a TRAVA com "[mesma trava acima]")
4. Protocolo de uso + checklist + prompt de correção
5. Legenda do post (gancho na 1ª linha, lista dos itens, CTA) + 5 hashtags; para Pinterest, título (até 100 caracteres) e descrição com palavras-chave

Avise o que o gerador **não garante**: logo idêntico, ortografia perfeita em textos longos e endereço de site sem erro de digitação. Para isso, Modo B.
