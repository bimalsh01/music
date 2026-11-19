import type { SeoContent } from "./types";

/*
 * Textos de SEO em português (Brasil). Palavras-chave da pesquisa do Rankability (BR, nov/2026),
 * ex.: afinador de violão 165K/mês, afinador online 60,5K, metrônomo online 40,5K,
 * afinador de ukulele 6,6K, afinador de guitarra 6,6K, afinador de cavaquinho 4,4K,
 * dicionário de acordes 8K, afinador de violino 2,9K, afinador de baixo 2,4K, acordes de violão 2,4K,
 * como afinar cavaquinho, como afinar ukulele, afinador cromático, bpm da música.
 * Tudo o que está escrito descreve o que o app realmente faz.
 */
export const pt: SeoContent = {
  labels: {
    faq: "Perguntas frequentes",
    string: "Corda",
    note: "Nota",
    frequency: "Frequência",
    tuning: "Afinação",
    notes: "Cordas (6 → 1)",
  },
  pages: {
    home: {
      title: "WowGuitar – Afinador Online, Metrônomo e Acordes Grátis",
      description:
        "Ferramentas de música grátis que funcionam na hora: afinador online de violão, cavaquinho, ukulele, violino e baixo, metrônomo online e dicionário de acordes.",
      blocks: [
        {
          h2: "Ferramentas de música online e grátis",
          p: [
            "O WowGuitar reúne ferramentas simples e gratuitas para músicos, direto no navegador. Abriu a página, está pronto: sem baixar app, sem cadastro. Cada tela faz uma coisa só, com botões grandes para usar com o instrumento na mão.",
            "O áudio do microfone é analisado no seu próprio aparelho e nunca é enviado para a internet. Depois da primeira visita, as ferramentas funcionam até sem conexão – o afinador e o metrônomo estão sempre à mão no ensaio.",
          ],
        },
        {
          h2: "Afinador de violão online",
          p: [
            "Afine com o [afinador de violão online](guitar) grátis: toque uma corda e o afinador mostra se ela está alta ou baixa – afinação padrão, Drop D, Open G e mais. Também há [afinador de ukulele](ukulele), [afinador de violino](violin), [afinador de violoncelo](cello), [afinador de baixo](bass), [afinador de cavaquinho](cavaquinho) e [afinador cromático](chromatic).",
          ],
        },
        {
          h2: "Metrônomo online",
          p: [
            "O [metrônomo online](metronome) marca o tempo de 30 a 300 BPM, com acentos e compassos. Toque junto com a música para descobrir o BPM da música.",
          ],
        },
        {
          h2: "Dicionário de acordes",
          p: [
            "Consulte qualquer acorde no [dicionário de acordes](chords): veja a posição, ouça, troque a forma e transponha – com acordes de violão e de teclado.",
          ],
        },
        {
          h2: "O que você pode fazer aqui",
          list: [
            "**Afinar seu instrumento** com o [afinador de violão](guitar), o [afinador de cavaquinho](cavaquinho), o [afinador de ukulele](ukulele), o [afinador de violino](violin), o [afinador de violoncelo](cello) e o [afinador de baixo](bass) – ou qualquer outro com o [afinador cromático](chromatic).",
            "**Manter o tempo** com o [metrônomo online](metronome): 30 a 300 BPM, toque o tempo, acentos, compassos e subdivisões.",
            "**Consultar acordes** no [dicionário de acordes de violão e teclado](chords): posições, som e transposição.",
          ],
        },
      ],
      faq: [
        {
          q: "As ferramentas são mesmo grátis?",
          a: "Sim. Todas são gratuitas, sem cadastro e sem download. Tudo funciona no navegador.",
        },
        {
          q: "Preciso instalar um aplicativo para afinar o violão?",
          a: "Não. Abra o afinador de violão, toque em “Toque para afinar” e permita o microfone. Funciona no celular, no tablet e no computador.",
        },
        {
          q: "O áudio do microfone é gravado ou enviado?",
          a: "Não. O afinador analisa o som no seu aparelho, em tempo real, e nada é enviado para servidores.",
        },
      ],
    },

    guitar: {
      title: "Afinador de Violão Online Grátis – Pelo Microfone",
      description:
        "Afinador de violão online e grátis: afine pelo microfone na afinação padrão (Mi Lá Ré Sol Si Mi), Drop D, Open G e mais. Serve também para guitarra. Sem app.",
      blocks: [
        {
          h2: "Afinador de violão online grátis – afinador online pelo microfone",
          p: [
            "Este **afinador de violão online** funciona direto no navegador, sem app e sem cadastro. Toque em **Toque para afinar**, permita o microfone e toque uma corda. O afinador reconhece a nota, escolhe a corda mais próxima e mostra quantos cents ela está grave ou aguda. Quando as barras do centro ficam verdes, a corda está afinada.",
            "Também funciona como **afinador de guitarra**: toque a guitarra desligada perto do microfone, ou aproxime o celular do amplificador com som limpo. O áudio é analisado no seu aparelho e nunca sai dele.",
          ],
        },
        {
          h2: "Afinação padrão do violão: notas das cordas",
          p: [
            "A afinação padrão do violão é **Mi Lá Ré Sol Si Mi** (E A D G B E), da corda mais grossa (6ª) para a mais fina (1ª).",
          ],
          autoTable: "tuning",
          after: ["Frequências com Lá4 = 440 Hz, a referência padrão."],
        },
        {
          h2: "Como afinar o violão passo a passo",
          ordered: true,
          list: [
            "Comece pela 6ª corda (Mi grave). Toque-a solta e deixe soar.",
            "Se aparecer **Suba**, a corda está grave: aperte girando a tarraxa devagar. Se aparecer **Desça**, afrouxe.",
            "Afine de baixo para cima até a nota – assim a corda segura melhor a afinação.",
            "Quando as barras ficarem verdes e a corda ganhar um ✓, passe para a próxima. Repita até as seis cordas.",
            "Confira tudo de novo: mexer em uma corda muda a tensão do braço, e a segunda volta deixa o violão perfeito.",
          ],
        },
        {
          h2: "Afinações alternativas: Drop D, Open G, DADGAD e meio tom abaixo",
          p: ["Escolha a afinação no menu **Afinação** e os botões das cordas mudam junto."],
          autoTable: "alternates",
          after: [
            "**Drop D** abaixa só a 6ª corda um tom, ótimo para riffs pesados e power chords. **Open G** forma um acorde de Sol maior com as cordas soltas, muito usado no slide e no blues. **DADGAD** tem um som aberto, comum no folk. **Meio tom abaixo** desce todas as cordas um semitom, deixando os bends mais fáceis.",
          ],
        },
        {
          h2: "Afinar de ouvido com tons de referência",
          p: [
            "Sem microfone ou em lugar barulhento? Toque no botão de qualquer corda para ouvir a nota de referência e afine de ouvido. Em **Mais** você ajusta a referência do Lá4 (padrão 440 Hz) – útil para tocar com piano ou banda afinados em 442 Hz ou 432 Hz.",
            "Depois de afinar, treine no tempo com o [metrônomo online](metronome) ou consulte posições no [dicionário de acordes](chords).",
          ],
        },
      ],
      faq: [
        {
          q: "O afinador de violão online é preciso?",
          a: "Sim. Ele usa o método McLeod de detecção de altura, que mede a nota com precisão de cerca de um cent, e fica verde dentro de ±5 cents – mais preciso do que o ouvido percebe. Afine em um lugar silencioso, uma corda por vez.",
        },
        {
          q: "Serve como afinador de guitarra?",
          a: "Sim. Guitarra e violão usam a mesma afinação padrão. Toque a guitarra desligada perto do microfone ou aproxime o celular do amplificador com som limpo.",
        },
        {
          q: "Quais são as notas das cordas do violão?",
          a: "Na afinação padrão, da 6ª (mais grossa) para a 1ª (mais fina): Mi, Lá, Ré, Sol, Si e Mi (E2, A2, D3, G3, B3 e E4).",
        },
        {
          q: "Como afinar o violão sem afinador?",
          a: "Toque no botão de cada corda para ouvir a nota de referência e ajuste a tarraxa até o som da corda ficar igual ao tom.",
        },
        {
          q: "Por que o violão desafina tanto?",
          a: "Cordas novas esticam nos primeiros dias, e mudanças de temperatura e umidade mexem na madeira. Afinar antes de tocar leva menos de um minuto.",
        },
      ],
    },

    cavaquinho: {
      title: "Afinador de Cavaquinho Online Grátis – Ré Sol Si Ré",
      description:
        "Afinador de cavaquinho online e grátis pelo microfone. Afinação padrão Ré Sol Si Ré (D G B D) ou de ouvido com tons de referência. Sem app, sem cadastro.",
      blocks: [
        {
          h2: "Afinador de cavaquinho online grátis",
          p: [
            "Afine seu cavaquinho em segundos com este **afinador de cavaquinho online**. Toque em **Toque para afinar**, permita o microfone e toque uma corda: o afinador reconhece a corda e mostra se está grave ou aguda. Barras verdes = afinado.",
            "Funciona no celular e no computador, direto no navegador. Também dá para **afinar o cavaquinho pelo microfone** ou de ouvido, tocando nos botões das cordas para ouvir cada nota.",
          ],
        },
        {
          h2: "Afinação padrão do cavaquinho: Ré Sol Si Ré",
          p: [
            "A afinação padrão do cavaquinho brasileiro é **Ré Sol Si Ré** (D G B D), da 4ª corda (mais grave) para a 1ª (mais aguda). É a afinação usada no samba, no pagode e no choro.",
          ],
          autoTable: "tuning",
          after: [
            "Quais são as 4 cordas do cavaquinho? Na afinação padrão: Ré, Sol, Si e Ré – a 1ª corda é o mesmo Ré da 4ª, uma oitava acima.",
          ],
        },
        {
          h2: "Como afinar o cavaquinho",
          ordered: true,
          list: [
            "Toque em **Toque para afinar** e permita o microfone.",
            "Toque a 4ª corda (Ré) solta e deixe soar.",
            "Gire a tarraxa até as barras do centro ficarem verdes: aperte se aparecer Suba, afrouxe se aparecer Desça.",
            "Repita para Sol, Si e Ré. Cada corda afinada ganha um ✓.",
            "Confira a 4ª corda de novo no final.",
          ],
        },
        {
          h2: "Ré Sol Si Ré ou Ré Sol Si Mi?",
          p: [
            "Alguns cavaquinistas usam a **afinação natural Ré Sol Si Mi** (D G B E), igual às quatro primeiras cordas do violão. Este afinador está na afinação padrão Ré Sol Si Ré. Para Ré Sol Si Mi, use o [afinador cromático](chromatic), que lê qualquer nota.",
            "Depois de afinar, mantenha o tempo do samba com o [metrônomo online](metronome).",
          ],
        },
      ],
      faq: [
        {
          q: "Qual é a afinação padrão do cavaquinho?",
          a: "Ré Sol Si Ré (D G B D), da 4ª para a 1ª corda.",
        },
        {
          q: "Como afinar cavaquinho pelo celular?",
          a: "Abra esta página no celular, toque em “Toque para afinar”, permita o microfone e toque cada corda até as barras ficarem verdes.",
        },
        {
          q: "Como afinar cavaquinho de ouvido, sem afinador?",
          a: "Toque nos botões das cordas para ouvir as notas de referência e ajuste cada corda até soar igual.",
        },
        {
          q: "Dá para usar afinador cromático no cavaquinho?",
          a: "Sim. O afinador cromático lê qualquer nota, então serve para qualquer afinação do cavaquinho, inclusive Ré Sol Si Mi.",
        },
      ],
    },

    ukulele: {
      title: "Afinador de Ukulele Online Grátis – Sol Dó Mi Lá",
      description:
        "Afinador de ukulele online e grátis pelo microfone. Afinação padrão Sol Dó Mi Lá (G C E A) para soprano, concert e tenor. Sem app, sem cadastro.",
      blocks: [
        {
          h2: "Afinador de ukulele online grátis",
          p: [
            "Afine seu ukulele com este **afinador de ukulele online**: toque em **Toque para afinar**, permita o microfone e toque uma corda. O afinador mostra se a corda está grave ou aguda, e as barras ficam verdes quando está afinada.",
            "Serve para ukulele **soprano, concert e tenor**, que usam a mesma afinação padrão. Prefere afinar de ouvido? Toque no botão de cada corda para ouvir a nota.",
          ],
        },
        {
          h2: "Afinação padrão do ukulele: Sol Dó Mi Lá",
          p: [
            "A afinação padrão do ukulele é **Sol Dó Mi Lá** (G C E A), da 4ª corda para a 1ª. Na maioria dos ukuleles o Sol é **agudo**: a 4ª corda soa mais alta que a 3ª, o que dá o som brilhante do instrumento.",
          ],
          autoTable: "tuning",
        },
        {
          h2: "Como afinar ukulele",
          ordered: true,
          list: [
            "Toque em **Toque para afinar** e permita o microfone.",
            "Toque a 4ª corda (Sol) e deixe soar.",
            "Gire a tarraxa até as barras ficarem verdes.",
            "Repita para Dó, Mi e Lá.",
          ],
          after: ["Cordas de nylon novas esticam bastante: nos primeiros dias, é normal precisar afinar toda vez que for tocar."],
        },
        {
          h2: "Sol agudo ou Sol grave?",
          p: [
            "Alguns músicos usam a 4ª corda em **Sol grave** (uma oitava abaixo) para um som mais encorpado. Este afinador está em Sol agudo; com Sol grave, use o [afinador cromático](chromatic).",
          ],
        },
      ],
      faq: [
        {
          q: "Quais são as notas das cordas do ukulele?",
          a: "Na afinação padrão: Sol, Dó, Mi e Lá (G4, C4, E4 e A4), da 4ª para a 1ª corda.",
        },
        {
          q: "Dá para afinar o ukulele pelo celular?",
          a: "Sim. Abra esta página no celular, permita o microfone e toque cada corda.",
        },
        {
          q: "Posso afinar o ukulele como cavaquinho?",
          a: "Pode, mas as notas mudam. Para Ré Sol Si Ré, use o afinador de cavaquinho ou o afinador cromático.",
        },
      ],
    },

    violin: {
      title: "Afinador de Violino Online Grátis – Sol Ré Lá Mi",
      description:
        "Afinador de violino online e grátis. Afine Sol Ré Lá Mi (G D A E) pelo microfone ou de ouvido, e ajuste o Lá4 para 440 ou 442 Hz. Sem app.",
      blocks: [
        {
          h2: "Afinador de violino online grátis",
          p: [
            "Este **afinador de violino online** escuta pelo microfone e mostra a nota e quanto falta para a afinação certa. Toque em **Toque para afinar**, passe o arco (ou belisque) uma corda e ajuste até as barras ficarem verdes.",
            "Cada botão de corda também toca um **tom de referência**, para afinar o violino de ouvido.",
          ],
        },
        {
          h2: "Notas das cordas do violino: Sol Ré Lá Mi",
          p: ["O violino é afinado em quintas: **Sol Ré Lá Mi** (G D A E), da corda mais grave (4ª) para a mais aguda (1ª)."],
          autoTable: "tuning",
        },
        {
          h2: "Como afinar o violino",
          ordered: true,
          list: [
            "Comece pela corda **Lá** – é a nota de referência da orquestra.",
            "Use os **microafinadores** do estandarte para ajustes pequenos e as **cravelhas** só para mudanças grandes, empurrando de leve para que segurem.",
            "Afine Ré, Sol e Mi do mesmo jeito e confira o Lá de novo.",
          ],
          after: [
            "Muitas orquestras afinam o Lá em 442 Hz. Em **Mais**, ajuste a referência do Lá4 entre 430 e 450 Hz.",
          ],
        },
      ],
      faq: [
        {
          q: "Dá para afinar o violino pelo celular?",
          a: "Sim. O microfone do celular basta: abra esta página, toque em “Toque para afinar” e toque cada corda.",
        },
        {
          q: "Qual corda do violino afinar primeiro?",
          a: "A corda Lá, depois Ré, Sol e Mi.",
        },
        {
          q: "Serve como afinador de viola de arco?",
          a: "A viola de arco é afinada Dó Sol Ré Lá. Use o afinador cromático, que lê qualquer nota.",
        },
      ],
    },

    cello: {
      title: "Afinador de Violoncelo Online Grátis – Dó Sol Ré Lá",
      description:
        "Afinador de violoncelo online e grátis. Afine Dó Sol Ré Lá (C G D A) pelo microfone ou de ouvido com tons de referência. Funciona no navegador, sem app.",
      blocks: [
        {
          h2: "Afinador de violoncelo online grátis",
          p: [
            "Afine seu violoncelo com este **afinador de violoncelo online**, sem instalar nada. Toque em **Toque para afinar**, passe o arco de forma contínua em uma corda e ajuste até as barras ficarem verdes. Cada botão também toca a nota de referência.",
          ],
        },
        {
          h2: "Notas das cordas do violoncelo: Dó Sol Ré Lá",
          p: ["O violoncelo é afinado em quintas: **Dó Sol Ré Lá** (C G D A), da corda mais grave para a mais aguda."],
          autoTable: "tuning",
        },
        {
          h2: "Como afinar o violoncelo",
          ordered: true,
          list: [
            "Comece pela corda **Lá** e depois afine Ré, Sol e Dó.",
            "Use arcadas longas e regulares – um som estável dá uma leitura estável, principalmente no Dó grave.",
            "Microafinadores para ajustes pequenos, cravelhas para os grandes.",
          ],
          after: ["Microfones de celular captam notas graves com menos força: mantenha o aparelho perto do instrumento."],
        },
      ],
      faq: [
        {
          q: "Quais são as notas das cordas do violoncelo?",
          a: "Dó, Sol, Ré e Lá (C2, G2, D3 e A3), da mais grave para a mais aguda.",
        },
        {
          q: "Dá para afinar o violoncelo pelo celular?",
          a: "Sim. Permita o microfone e toque cada corda perto do celular.",
        },
      ],
    },

    bass: {
      title: "Afinador de Baixo Online Grátis – Mi Lá Ré Sol",
      description:
        "Afinador de baixo online e grátis para contrabaixo de 4 cordas. Afine Mi Lá Ré Sol (E A D G) pelo microfone ou de ouvido. Funciona no navegador, sem app.",
      blocks: [
        {
          h2: "Afinador de baixo online grátis",
          p: [
            "Este **afinador de baixo online** afina contrabaixo de 4 cordas na afinação padrão. Toque em **Toque para afinar**, toque uma corda e gire a tarraxa até as barras ficarem verdes. Serve para baixo elétrico e acústico.",
          ],
        },
        {
          h2: "Afinação padrão do baixo: Mi Lá Ré Sol",
          p: [
            "O baixo de 4 cordas é afinado **Mi Lá Ré Sol** (E A D G) – as mesmas notas das quatro cordas mais graves do violão, uma oitava abaixo.",
          ],
          autoTable: "tuning",
        },
        {
          h2: "Como afinar baixo",
          ordered: true,
          list: [
            "Comece pela 4ª corda (Mi grave).",
            "Toque com firmeza e deixe a nota soar – notas graves levam um instante para estabilizar.",
            "Aperte se aparecer Suba, afrouxe se aparecer Desça, até as barras ficarem verdes.",
            "Repita para Lá, Ré e Sol e confira o Mi de novo.",
          ],
          after: [
            "Microfones de celular e notebook captam graves com pouca força. Aproxime o aparelho do baixo ou do alto-falante do amplificador, com som limpo.",
          ],
        },
      ],
      faq: [
        {
          q: "Quais são as notas das cordas do baixo?",
          a: "Na afinação padrão: Mi, Lá, Ré e Sol (E1, A1, D2 e G2), da 4ª para a 1ª corda.",
        },
        {
          q: "Posso afinar baixo com afinador de violão?",
          a: "O baixo usa as mesmas notas das quatro cordas mais graves do violão, uma oitava abaixo. Este afinador de baixo já está configurado para elas, e o afinador cromático também funciona.",
        },
      ],
    },

    chromatic: {
      title: "Afinador Cromático Online Grátis – Afine Qualquer Instrumento",
      description:
        "Afinador cromático online e grátis: lê as 12 notas e mostra quantos cents está grave ou agudo. Para qualquer instrumento ou voz. Lá4 ajustável (430–450 Hz).",
      blocks: [
        {
          h2: "O que é um afinador cromático?",
          p: [
            "Um **afinador cromático** reconhece as 12 notas da escala, não só as cordas de um instrumento. Toque qualquer nota e ele mostra o nome da nota mais próxima, a oitava e quantos cents está grave ou aguda.",
            "Por isso serve para qualquer instrumento: bandolim, banjo, viola de arco, cavaquinho em outras afinações, instrumentos de sopro e até a voz.",
          ],
        },
        {
          h2: "Frequência das notas (oitava 4)",
          p: ["Frequências de referência das 12 notas ao redor do Dó central, com Lá4 = 440 Hz:"],
          autoTable: "notes",
        },
        {
          h2: "Cents, Lá4 e 432 Hz",
          p: [
            "Um **cent** é 1/100 de semitom. Dentro de ±5 cents o afinador fica verde – diferenças menores quase ninguém percebe.",
            "A referência do Lá4 define a altura de todas as notas. O padrão é 440 Hz; em **Mais** você ajusta de 430 a 450 Hz, incluindo 432 Hz ou os 442 Hz usados por muitas orquestras.",
          ],
        },
      ],
      faq: [
        {
          q: "Qual a diferença entre afinador cromático e afinador de violão?",
          a: "O afinador de violão procura só as seis cordas do violão. O cromático lê qualquer uma das 12 notas, então serve para qualquer instrumento e qualquer afinação.",
        },
        {
          q: "Dá para usar o afinador cromático na voz?",
          a: "Sim. Cante uma nota firme e o afinador mostra qual é a nota e o quanto você está perto dela.",
        },
        {
          q: "Como afinar em 432 Hz?",
          a: "Abra Mais e baixe a referência do Lá4 para 432 Hz. Todas as notas passam a seguir essa referência.",
        },
      ],
    },

    metronome: {
      title: "Metrônomo Online Grátis – BPM, Toque o Tempo e Compassos",
      description:
        "Metrônomo online grátis de 30 a 300 BPM, com toque o tempo, acentos, compassos (4/4, 3/4, 6/8) e subdivisões. Funciona no navegador, sem app.",
      blocks: [
        {
          h2: "Metrônomo online grátis",
          p: [
            "Este **metrônomo online** mantém um pulso firme de 30 a 300 BPM, direto no navegador – sem baixar app. Ajuste o andamento no controle deslizante ou nos botões − / +, aperte **Play** e acompanhe o clique, o pêndulo e as luzes de cada tempo.",
            "Ligue o **flash visual** em Mais e a tela pisca a cada tempo, para tocar com o som desligado ou em lugar barulhento. Os cliques são agendados no relógio de áudio do aparelho, então o tempo não oscila.",
          ],
        },
        {
          h2: "Toque o tempo: descubra o BPM da música",
          p: [
            "Não sabe o andamento? Toque o botão **Tocar tempo** junto com a música algumas vezes e o metrônomo calcula o **BPM da música** a partir dos seus toques. Ele faz a média dos últimos cinco toques e recomeça se você parar por dois segundos.",
          ],
        },
        {
          h2: "Compassos e acentos",
          p: [
            "Escolha 2/4, 3/4, 4/4, 5/4, 6/8 ou 7/8. O primeiro tempo de cada compasso é **acentuado**, para você sempre saber onde está o “um”. No **6/8**, os tempos 1 e 4 são acentuados por padrão.",
            "Toque em qualquer caixa de tempo para ligar ou desligar o acento e criar seu próprio padrão.",
          ],
        },
        {
          h2: "Andamentos e BPM",
          p: ["O metrônomo mostra o nome clássico do andamento atual:"],
          table: {
            head: ["Andamento", "BPM", "Caráter"],
            rows: [
              ["Largo", "abaixo de 60", "muito lento, amplo"],
              ["Adagio", "60–75", "lento"],
              ["Andante", "76–107", "passo de caminhada"],
              ["Moderato", "108–119", "moderado"],
              ["Allegro", "120–167", "rápido, alegre"],
              ["Presto", "168–199", "muito rápido"],
              ["Prestissimo", "200 ou mais", "o mais rápido possível"],
            ],
          },
        },
        {
          h2: "Metrônomo para violão: como estudar",
          list: [
            "Comece devagar, entre **60 e 80 BPM**, para escalas e músicas novas.",
            "Quando tocar um trecho limpo três vezes seguidas, suba 4 ou 5 BPM.",
            "Use as **subdivisões** (1/8, tercina, 1/16) em Mais para encaixar notas rápidas entre os tempos.",
            "Antes de começar, confira a afinação no [afinador de violão](guitar).",
          ],
        },
      ],
      faq: [
        {
          q: "Dá para usar metrônomo no navegador, sem aplicativo?",
          a: "Sim. Este metrônomo funciona inteiro no navegador, no celular, no tablet e no computador.",
        },
        {
          q: "Como configurar o metrônomo em 6/8?",
          a: "Escolha 6/8 no topo. Os tempos 1 e 4 ficam acentuados, dando as duas pulsações do 6/8. Toque nas caixas para mudar os acentos.",
        },
        {
          q: "Como descobrir o BPM de uma música?",
          a: "Toque o botão Tocar tempo junto com a batida da música. O metrônomo calcula o BPM pela média dos seus toques.",
        },
        {
          q: "O metrônomo online é preciso?",
          a: "Sim. Os cliques são agendados com antecedência no relógio de áudio do aparelho, e não com temporizadores comuns, então o andamento não varia.",
        },
      ],
    },

    chords: {
      title: "Dicionário de Acordes de Violão e Teclado – Com Som",
      description:
        "Dicionário de acordes grátis: escolha a nota e o tipo de acorde para ver a posição no violão ou no teclado, ouvir o som, trocar a forma e transpor.",
      blocks: [
        {
          h2: "Dicionário de acordes de violão com posições",
          p: [
            "Escolha a **nota fundamental** e o **tipo de acorde** e este **dicionário de acordes** mostra a posição no braço do violão: ✕ é corda que não se toca, ○ é corda solta, e cada bolinha mostra a nota do dedo (a fundamental em branco). Use as setas para ver outras formas, incluindo **pestanas** mais acima no braço, e aperte **Tocar** para ouvir.",
          ],
        },
        {
          h2: "Acordes de teclado e piano",
          p: [
            "Mude para **Piano** para ver o acorde no teclado, com todas as notas destacadas e com nome. As setas mostram as **inversões** – as mesmas notas em outra ordem – que deixam a troca entre acordes mais suave.",
          ],
        },
        {
          h2: "Tipos de acorde e cifras",
          table: {
            head: ["Tipo", "Notas (a partir da fundamental)", "Exemplo em Dó (C)"],
            rows: [
              ["Maior (C)", "1 – 3 – 5", "Dó Mi Sol"],
              ["Menor (Cm)", "1 – ♭3 – 5", "Dó Mi♭ Sol"],
              ["Sétima (C7)", "1 – 3 – 5 – ♭7", "Dó Mi Sol Si♭"],
              ["Sétima maior (C7M)", "1 – 3 – 5 – 7", "Dó Mi Sol Si"],
              ["Menor com sétima (Cm7)", "1 – ♭3 – 5 – ♭7", "Dó Mi♭ Sol Si♭"],
              ["Csus2", "1 – 2 – 5", "Dó Ré Sol"],
              ["Csus4", "1 – 4 – 5", "Dó Fá Sol"],
              ["Diminuto (Cdim)", "1 – ♭3 – ♭5", "Dó Mi♭ Sol♭"],
              ["Aumentado (Caum)", "1 – 3 – ♯5", "Dó Mi Sol♯"],
            ],
          },
        },
        {
          h2: "Acordes de violão para iniciantes",
          p: [
            "A maioria das músicas usa poucos **acordes de violão**: Dó (C), Sol (G), Ré (D), Lá (A), Mi (E), Lá menor (Am), Mi menor (Em) e Ré menor (Dm). Aprenda essas formas abertas primeiro e depois passe para pestanas como Fá (F) e Si menor (Bm). Treine as trocas no tempo do [metrônomo](metronome) e mantenha o violão afinado com o [afinador de violão](guitar).",
          ],
        },
        {
          h2: "Transpor acordes",
          p: [
            "Use **−1** e **+1** para subir ou descer o acorde meio tom – um jeito rápido de **transpor acordes** para um tom melhor para a sua voz. Em Mais, troque o nome das notas entre Dó Ré Mi, C D E e a notação alemã (H).",
          ],
        },
      ],
      faq: [
        {
          q: "Como ler um diagrama de acorde de violão?",
          a: "As linhas verticais são as cordas (Mi grave à esquerda) e as horizontais são os trastes. As bolinhas mostram onde apertar, ✕ é corda que não se toca e ○ é corda solta. Um rótulo como “5fr” indica a casa em que o diagrama começa.",
        },
        {
          q: "Como fazer o acorde de Si menor (Bm) no violão?",
          a: "O Bm mais comum é com pestana na 2ª casa: não toque o Mi grave e faça x-2-4-4-3-2. Escolha Si e Menor aqui para ver, e use as setas para outra forma.",
        },
        {
          q: "O que é pestana?",
          a: "É quando um dedo prende várias cordas na mesma casa, como um capotraste. Com ela, a mesma forma serve para qualquer tom.",
        },
        {
          q: "Quais notas formam o acorde de Dó maior?",
          a: "Dó, Mi e Sol – a fundamental, a terça maior e a quinta justa.",
        },
      ],
    },
  },
};
