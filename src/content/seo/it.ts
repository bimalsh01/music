import type { SeoContent } from "./types";

/* Testi SEO in italiano. Stesso contenuto della versione inglese, note Do Re Mi. */
export const it: SeoContent = {
  labels: { faq: "Domande frequenti", string: "Corda", note: "Nota", frequency: "Frequenza", tuning: "Accordatura", notes: "Corde (6 → 1)" },
  pages: {
    home: {
      title: "Accordatore Online, Metronomo e Accordi Gratis – Music Tools",
      description: "Strumenti musicali gratis che funzionano subito: accordatore per chitarra, ukulele, violino, violoncello e basso, metronomo online con tap tempo, accordi.",
      blocks: [
        {
          h2: "Strumenti musicali online gratis, senza app né registrazione",
          p: [
            "Music Tools è una raccolta di strumenti semplici e gratuiti per musicisti, direttamente nel browser. Apri la pagina ed è pronta: nessun download, nessun account. Ogni schermata fa una cosa sola, con comandi grandi da usare con lo strumento in mano.",
            "L’audio del microfono viene analizzato sul tuo dispositivo e non viene mai caricato online. Dopo la prima visita gli strumenti funzionano anche offline: accordatore e metronomo sono sempre con te in sala prove.",
          ],
        },
        {
          h2: "Cosa puoi fare qui",
          list: [
            "**Accordare il tuo strumento** con l’[accordatore per chitarra](guitar), l’[accordatore per ukulele](ukulele), l’[accordatore per violino](violin), l’[accordatore per violoncello](cello) e l’[accordatore per basso](bass), o qualsiasi altro con l’[accordatore cromatico](chromatic).",
            "**Tenere il tempo** con il [metronomo online](metronome): da 30 a 300 BPM, tap tempo, accenti, tempi e suddivisioni.",
            "**Cercare accordi** nel [prontuario di accordi per chitarra e pianoforte](chords): diteggiature, suono e trasposizione.",
          ],
        },
      ],
      faq: [
        { q: "Gli strumenti sono davvero gratis?", a: "Sì. Sono tutti gratuiti, senza registrazione né download. Funziona tutto nel browser." },
        { q: "Serve un’app per accordare la chitarra?", a: "No. Apri l’accordatore per chitarra, tocca «Tocca per accordare» e consenti il microfono. Funziona su telefono, tablet e computer." },
        { q: "L’audio del microfono viene registrato o inviato?", a: "No. L’accordatore analizza il suono sul tuo dispositivo in tempo reale e nulla viene inviato a un server." },
      ],
    },

    guitar: {
      title: "Accordatore per Chitarra Online Gratis – con Microfono",
      description: "Accordatore per chitarra online gratis con il microfono. Accorda chitarra acustica o elettrica in standard, Drop D, Open G, DADGAD o mezzo tono sotto.",
      blocks: [
        {
          h2: "Accordatore per chitarra online gratis",
          p: [
            "Questo **accordatore per chitarra** funziona direttamente nel browser, senza app e senza account. Tocca **Tocca per accordare**, consenti il microfono e suona una corda. L’accordatore riconosce la nota, sceglie la corda più vicina e mostra di quanti cent è calante o crescente. Quando le barre centrali diventano verdi sei entro 5 cent: intonato per l’orecchio.",
            "Funziona come **accordatore per chitarra acustica** con il microfono del telefono o del portatile, e anche per **chitarra elettrica**: suonala staccata vicino al microfono o avvicina il dispositivo all’amplificatore con un suono pulito. L’audio resta sul tuo dispositivo.",
          ],
        },
        {
          h2: "Accordatura standard della chitarra: note e frequenze",
          p: ["L’accordatura standard della chitarra è **Mi La Re Sol Si Mi** (E A D G B E), dalla corda più grossa (6ª) alla più sottile (1ª)."],
          autoTable: "tuning",
          after: ["Frequenze con La4 = 440 Hz, il diapason standard."],
        },
        {
          h2: "Come accordare la chitarra passo dopo passo",
          ordered: true,
          list: [
            "Parti dalla 6ª corda (Mi basso). Suonala a vuoto e lasciala suonare.",
            "Se compare **Alza**, la corda è calante: tendila girando piano la meccanica. Se compare **Abbassa**, allentala.",
            "Accorda partendo un po’ sotto la nota e salendo: la corda tiene meglio l’accordatura.",
            "Quando le barre diventano verdi e la corda riceve un ✓, passa alla successiva. Ripeti per tutte e sei.",
            "Fai un secondo giro veloce: tendere una corda cambia la tensione del manico.",
          ],
        },
        {
          h2: "Accordature alternative: Drop D, Open G, DADGAD e mezzo tono sotto",
          p: ["Scegli l’accordatura dal menu **Accordatura** e i pulsanti delle corde si aggiornano."],
          autoTable: "alternates",
          after: ["**Drop D** abbassa solo la 6ª corda di un tono, perfetta per riff pesanti e power chord con un dito. **Open G** dà un accordo di Sol maggiore a corde vuote, molto usato nello slide e nel blues. **DADGAD** ha un suono aperto e modale, tipico del folk e della musica celtica. **Mezzo tono sotto** abbassa tutte le corde di un semitono per bending più facili."],
        },
        {
          h2: "Accordare a orecchio con i toni di riferimento",
          p: [
            "Niente microfono o troppo rumore? Tocca il pulsante di una corda per sentire la nota di riferimento e accorda a orecchio. In **Altro** puoi cambiare il riferimento del La4 (440 Hz di default), utile se suoni con un pianoforte o una band a 442 o 432 Hz.",
            "Una volta accordato, esercitati a tempo con il [metronomo online](metronome) o cerca le diteggiature negli [accordi](chords).",
          ],
        },
      ],
      faq: [
        { q: "Un accordatore per chitarra online è preciso?", a: "Sì. Usa il metodo McLeod di rilevamento dell’altezza, preciso a circa un cent, e diventa verde entro ±5 cent, più fine di quanto percepisca l’orecchio. Accorda in un ambiente tranquillo, una corda alla volta." },
        { q: "Posso accordare la chitarra senza accordatore a pinza?", a: "Sì. Basta un telefono o un computer con microfono: apri questa pagina, tocca «Tocca per accordare» e suona ogni corda. Senza microfono, tocca il pulsante della corda e accorda a orecchio." },
        { q: "Quali sono le note delle corde della chitarra?", a: "In accordatura standard, dalla 6ª alla 1ª corda: Mi2, La2, Re3, Sol3, Si3 e Mi4 (E2, A2, D3, G3, B3, E4)." },
        { q: "Funziona con la chitarra elettrica?", a: "Sì. Suonala staccata vicino al microfono o avvicina il dispositivo all’amplificatore con suono pulito. La distorsione rende difficile la lettura." },
        { q: "Perché la mia chitarra si scorda?", a: "Le corde nuove si allungano nei primi giorni, e temperatura e umidità muovono il legno. Accordare prima di suonare richiede meno di un minuto." },
      ],
    },

    ukulele: {
      title: "Accordatore per Ukulele Online Gratis – Sol Do Mi La",
      description: "Accorda l’ukulele online con il microfono o a orecchio. Accordatura standard Sol Do Mi La (G C E A) per ukulele soprano, concerto e tenore. Gratis, senza app.",
      blocks: [
        {
          h2: "Accordatore per ukulele online gratis",
          p: [
            "Accorda il tuo ukulele in pochi secondi con questo **accordatore per ukulele online**. Tocca **Tocca per accordare**, consenti il microfono e pizzica una corda: l’accordatore trova la corda più vicina e mostra se è calante o crescente. Verde significa intonato.",
            "Va bene per ukulele **soprano, concerto e tenore**, che hanno la stessa accordatura standard. Preferisci l’orecchio? Tocca il pulsante di ogni corda per sentirne la nota.",
          ],
        },
        {
          h2: "Accordatura standard dell’ukulele: Sol Do Mi La",
          p: ["L’accordatura standard dell’ukulele è **Sol Do Mi La** (G C E A), dalla 4ª corda (la più vicina al mento) alla 1ª. Nella maggior parte degli ukulele il Sol è **acuto**: la 4ª corda suona più alta della 3ª, da qui il suono brillante."],
          autoTable: "tuning",
        },
        {
          h2: "Come accordare l’ukulele",
          ordered: true,
          list: [
            "Tocca **Tocca per accordare** e consenti il microfono.",
            "Pizzica la 4ª corda (Sol) e lasciala suonare.",
            "Gira la meccanica finché le barre diventano verdi: tendi se compare Alza, allenta se compare Abbassa.",
            "Ripeti per Do, Mi e La. Ogni corda intonata riceve un ✓.",
          ],
          after: ["Le corde in nylon nuove si allungano molto: nei primi giorni è normale riaccordare ogni volta che suoni."],
        },
        {
          h2: "Sol acuto o Sol basso?",
          p: ["Alcuni musicisti montano la 4ª corda in **Sol basso** (un’ottava sotto) per un suono più pieno. Questo accordatore è impostato sul Sol acuto; con il Sol basso usa l’[accordatore cromatico](chromatic)."],
        },
      ],
      faq: [
        { q: "Quali sono le note delle corde dell’ukulele?", a: "In accordatura standard: Sol4, Do4, Mi4 e La4 (G4, C4, E4, A4), dalla 4ª alla 1ª corda." },
        { q: "Posso accordare l’ukulele con il telefono?", a: "Sì. Apri questa pagina sul telefono, tocca «Tocca per accordare», consenti il microfono e pizzica ogni corda." },
        { q: "Funziona per l’ukulele baritono?", a: "L’ukulele baritono si accorda Re Sol Si Mi, come le quattro corde acute della chitarra. Usa l’accordatore cromatico o le quattro corde acute dell’accordatore per chitarra." },
        { q: "Perché il mio ukulele nuovo si scorda così in fretta?", a: "Le corde in nylon continuano ad allungarsi per circa una settimana. Accorda spesso e si stabilizzeranno." },
      ],
    },

    violin: {
      title: "Accordatore per Violino Online Gratis – Sol Re La Mi",
      description: "Accordatore per violino online gratis. Accorda Sol Re La Mi con il microfono o a orecchio con i toni di riferimento, e imposta il La4 a 440 o 442 Hz.",
      blocks: [
        {
          h2: "Accordatore per violino online gratis",
          p: [
            "Questo **accordatore per violino** ascolta dal microfono e mostra la nota e quanto manca all’intonazione giusta. Tocca **Tocca per accordare**, suona una corda con l’arco (o pizzicata) e regola finché le barre centrali diventano verdi.",
            "Ogni pulsante di corda suona anche un **tono di riferimento** chiaro, per accordare il violino a orecchio quando il microfono non è disponibile.",
          ],
        },
        {
          h2: "Note delle corde del violino: Sol Re La Mi",
          p: ["Il violino si accorda per quinte: **Sol Re La Mi** (G D A E), dalla corda più grave (4ª) alla più acuta (1ª)."],
          autoTable: "tuning",
        },
        {
          h2: "Come accordare il violino",
          ordered: true,
          list: [
            "Parti dalla corda **La**: è la nota su cui si accorda l’orchestra.",
            "Suonala con arcate regolari vicino al microfono e guarda l’indicatore.",
            "Usa i **tiracantini** sulla cordiera per le piccole correzioni e i **piroli** solo per quelle grandi, spingendoli leggermente perché tengano.",
            "Accorda Re, Sol e Mi allo stesso modo e ricontrolla il La.",
          ],
        },
        {
          h2: "Accordare a 440 o 442 Hz",
          p: ["La maggior parte della musica usa La4 = 440 Hz, ma molte orchestre accordano un po’ più in alto, a 442 Hz. Apri **Altro** e imposta il riferimento del La4 tra 430 e 450 Hz."],
        },
      ],
      faq: [
        { q: "Posso accordare il violino con il telefono?", a: "Sì. Basta il microfono del telefono: apri questa pagina, tocca «Tocca per accordare» e suona ogni corda. Puoi anche far suonare i toni di riferimento dall’altoparlante e accordare a orecchio." },
        { q: "Quale corda del violino si accorda per prima?", a: "La corda La, poi Re, Sol e Mi." },
        { q: "Funziona come accordatore per viola?", a: "La viola si accorda Do Sol Re La. Usa l’accordatore cromatico, che legge qualsiasi nota." },
        { q: "Perché il mio violino si scorda?", a: "I piroli possono scivolare, e umidità e temperatura muovono corde e legno. Controlla l’accordatura ogni volta che suoni." },
      ],
    },

    cello: {
      title: "Accordatore per Violoncello Online Gratis – Do Sol Re La",
      description: "Accordatore per violoncello online gratis. Accorda Do Sol Re La (C G D A) con il microfono o a orecchio con i toni di riferimento. Nel browser, senza app.",
      blocks: [
        {
          h2: "Accordatore per violoncello online gratis",
          p: ["Accorda il tuo violoncello con questo **accordatore per violoncello** gratuito, senza app. Tocca **Tocca per accordare**, suona una corda con un’arcata continua e regola finché le barre diventano verdi. Ogni pulsante suona anche la nota di riferimento per accordare a orecchio."],
        },
        {
          h2: "Note delle corde del violoncello: Do Sol Re La",
          p: ["Il violoncello si accorda per quinte, un’ottava sotto la viola: **Do Sol Re La** (C G D A), dalla corda più grave alla più acuta."],
          autoTable: "tuning",
        },
        {
          h2: "Come accordare il violoncello",
          ordered: true,
          list: [
            "Parti dalla corda **La**, poi accorda Re, Sol e Do.",
            "Usa arcate lunghe e regolari: un suono stabile dà una lettura stabile, soprattutto sul Do grave.",
            "Tiracantini per le piccole correzioni, piroli per quelle grandi.",
            "Ricontrolla il La alla fine: tendere le altre corde può spostarlo.",
          ],
          after: ["I microfoni dei telefoni captano meno i suoni gravi: tieni il dispositivo vicino allo strumento."],
        },
      ],
      faq: [
        { q: "Quali sono le note delle corde del violoncello?", a: "Do2, Sol2, Re3 e La3 (C2, G2, D3, A3), dalla più grave alla più acuta." },
        { q: "Posso accordare il violoncello con il telefono?", a: "Sì. Consenti il microfono e suona ogni corda vicino al telefono." },
        { q: "Quale La usare, 440 o 442 Hz?", a: "Usa 440 Hz, salvo indicazioni diverse dell’orchestra o dell’insegnante. Il riferimento del La4 si cambia in Altro." },
      ],
    },

    bass: {
      title: "Accordatore per Basso Online Gratis – Mi La Re Sol",
      description: "Accordatore per basso online gratis per basso a 4 corde. Accorda Mi La Re Sol (E A D G) con il microfono o a orecchio. Nel browser, senza app.",
      blocks: [
        {
          h2: "Accordatore per basso online gratis",
          p: ["Questo **accordatore per basso** accorda un basso a 4 corde in accordatura standard. Tocca **Tocca per accordare**, suona una corda e gira la meccanica finché le barre diventano verdi. Va bene per basso elettrico e acustico."],
        },
        {
          h2: "Accordatura standard del basso: Mi La Re Sol",
          p: ["Il basso a 4 corde si accorda **Mi La Re Sol** (E A D G): le stesse note delle quattro corde gravi della chitarra, un’ottava sotto."],
          autoTable: "tuning",
        },
        {
          h2: "Come accordare il basso",
          ordered: true,
          list: [
            "Parti dalla 4ª corda (Mi grave).",
            "Pizzicala con decisione e lasciala suonare: le note gravi hanno bisogno di un attimo per stabilizzarsi.",
            "Tendi se compare Alza, allenta se compare Abbassa, fino al verde.",
            "Ripeti per La, Re e Sol, poi ricontrolla il Mi.",
          ],
          after: ["I microfoni di telefoni e portatili captano poco i bassi. Avvicina il dispositivo al basso o al cono dell’amplificatore, con suono pulito."],
        },
      ],
      faq: [
        { q: "Quali sono le note delle corde del basso?", a: "In accordatura standard: Mi1, La1, Re2 e Sol2 (E1, A1, D2, G2), dalla 4ª alla 1ª corda." },
        { q: "Posso accordare il basso con un accordatore per chitarra?", a: "Il basso usa le stesse note delle quattro corde gravi della chitarra, un’ottava sotto. Questo accordatore per basso è impostato su quelle note, e anche l’accordatore cromatico funziona." },
        { q: "Perché il Mi grave è difficile da leggere?", a: "I microfoni piccoli captano male le frequenze molto basse. Pizzica con decisione, avvicina il dispositivo e lascia suonare la nota." },
      ],
    },

    chromatic: {
      title: "Accordatore Cromatico Online Gratis – Per Ogni Strumento",
      description: "Accordatore cromatico online gratis: legge tutte le 12 note e mostra lo scarto in cent. Per qualsiasi strumento o per la voce. La4 regolabile (430–450 Hz).",
      blocks: [
        {
          h2: "Cos’è un accordatore cromatico?",
          p: [
            "Un **accordatore cromatico** riconosce tutte le 12 note della scala, non solo le corde di uno strumento. Suona una nota qualsiasi e ti mostra la nota più vicina, l’ottava e lo scarto in cent.",
            "Per questo va bene per ogni strumento: mandolino, banjo, viola, kalimba, fiati, ukulele con Sol basso e anche la voce.",
          ],
        },
        {
          h2: "Frequenze delle note (ottava 4)",
          p: ["Frequenze di riferimento delle 12 note attorno al Do centrale, con La4 = 440 Hz:"],
          autoTable: "notes",
        },
        {
          h2: "Cent, La4 e 432 Hz",
          p: [
            "Un **cent** è 1/100 di semitono. Entro ±5 cent l’accordatore diventa verde: quasi nessuno sente differenze più piccole.",
            "Il riferimento del La4 fissa l’altezza di tutte le note. Di default è 440 Hz; in **Altro** puoi impostarlo da 430 a 450 Hz, compresi 432 Hz o i 442 Hz di molte orchestre.",
          ],
        },
      ],
      faq: [
        { q: "Che differenza c’è tra accordatore cromatico e accordatore per chitarra?", a: "Quello per chitarra cerca solo le sei corde della chitarra. Il cromatico legge qualsiasi delle 12 note, quindi va bene per ogni strumento e ogni accordatura." },
        { q: "Posso usarlo per la voce?", a: "Sì. Canta una nota tenuta e l’accordatore mostra quale nota è e quanto ci sei vicino." },
        { q: "Come accordo a 432 Hz?", a: "Apri Altro e abbassa il riferimento del La4 a 432 Hz. Tutte le note seguono quel riferimento." },
      ],
    },

    metronome: {
      title: "Metronomo Online Gratis – BPM, Tap Tempo e Tempi",
      description: "Metronomo online gratis da 30 a 300 BPM con tap tempo, accenti, tempi (4/4, 3/4, 6/8) e suddivisioni. Funziona nel browser, senza app.",
      blocks: [
        {
          h2: "Metronomo online gratis",
          p: [
            "Questo **metronomo online** dà una pulsazione stabile da 30 a 300 BPM, direttamente nel browser, senza scaricare nulla. Imposta il tempo con il cursore o i pulsanti − / +, premi **Play** e segui il clic, il pendolo e le luci di ogni movimento.",
            "Attiva il **lampeggio visivo** in Altro e lo schermo lampeggia a ogni movimento, per suonare senza audio o in un ambiente rumoroso. I clic sono programmati sull’orologio audio del dispositivo, quindi il tempo non oscilla.",
          ],
        },
        {
          h2: "Tap tempo: trova i BPM di una canzone",
          p: ["Non conosci il tempo? Tocca **Tap tempo** a ritmo con la canzone qualche volta e il metronomo calcola i BPM dai tuoi tocchi. Fa la media degli ultimi cinque e ricomincia se ti fermi per due secondi."],
        },
        {
          h2: "Tempi e accenti",
          p: [
            "Scegli 2/4, 3/4, 4/4, 5/4, 6/8 o 7/8. Il primo movimento di ogni battuta è **accentato**, così sai sempre dov’è l’«uno»: utile per studiare il valzer in 3/4. In **6/8** sono accentati di default i movimenti 1 e 4.",
            "Tocca una casella per aggiungere o togliere un accento e creare il tuo schema.",
          ],
        },
        {
          h2: "Indicazioni di tempo e BPM",
          p: ["Il metronomo mostra l’indicazione classica del tempo attuale:"],
          table: {
            head: ["Indicazione", "BPM", "Carattere"],
            rows: [
              ["Largo", "sotto 60", "molto lento, ampio"],
              ["Adagio", "60–75", "lento"],
              ["Andante", "76–107", "a passo d’uomo"],
              ["Moderato", "108–119", "moderato"],
              ["Allegro", "120–167", "veloce, vivace"],
              ["Presto", "168–199", "molto veloce"],
              ["Prestissimo", "200 e oltre", "il più veloce possibile"],
            ],
          },
        },
        {
          h2: "Come studiare con il metronomo",
          list: [
            "Parti lento, tra **60 e 80 BPM**, per scale e brani nuovi.",
            "Quando suoni un passaggio pulito tre volte di fila, alza di 4–5 BPM.",
            "Usa le **suddivisioni** (1/8, terzina, 1/16) in Altro per incastrare le note veloci tra i movimenti.",
            "Prima di iniziare, controlla l’accordatura con l’[accordatore per chitarra](guitar).",
          ],
        },
      ],
      faq: [
        { q: "Posso usare un metronomo nel browser senza app?", a: "Sì. Questo metronomo funziona interamente nel browser, su telefono, tablet e computer." },
        { q: "Come imposto il metronomo in 6/8?", a: "Scegli 6/8 in alto. I movimenti 1 e 4 sono accentati, le due pulsazioni del 6/8. Tocca le caselle per cambiare gli accenti." },
        { q: "A quanti BPM deve studiare le scale un principiante?", a: "Parti tra 60 e 80 BPM, suona pulito e poi aumenta di pochi BPM alla volta." },
        { q: "Un metronomo online è preciso?", a: "Sì. I clic sono programmati in anticipo sull’orologio audio del dispositivo, non con timer normali, quindi il tempo non deriva." },
      ],
    },

    chords: {
      title: "Accordi per Chitarra e Pianoforte – Prontuario con Suono",
      description: "Prontuario di accordi gratis per chitarra e pianoforte. Scegli fondamentale e tipo di accordo per vedere la diteggiatura, ascoltarlo, cambiare forma e trasporre.",
      blocks: [
        {
          h2: "Accordi per chitarra con diteggiature",
          p: ["Scegli una **nota fondamentale** e un **tipo di accordo** e questo **prontuario di accordi per chitarra** disegna la diteggiatura sul manico: ✕ indica una corda da non suonare, ○ una corda a vuoto, e ogni punto mostra la nota sotto il dito (la fondamentale in bianco). Le frecce mostrano altre forme, compresi gli **accordi con il barré** più in alto sul manico, e **Suona** ti fa sentire l’accordo."],
        },
        {
          h2: "Accordi per pianoforte sulla tastiera",
          p: ["Passa a **Pianoforte** per vedere l’accordo sui tasti, con tutte le note evidenziate e con il nome. Le frecce scorrono i **rivolti**: le stesse note in un altro ordine, per passare da un accordo all’altro in modo più fluido."],
        },
        {
          h2: "I tipi di accordo",
          table: {
            head: ["Tipo", "Note (dalla fondamentale)", "Esempio in Do"],
            rows: [
              ["Maggiore", "1 – 3 – 5", "Do Mi Sol"],
              ["Minore", "1 – ♭3 – 5", "Do Mi♭ Sol"],
              ["7 (settima di dominante)", "1 – 3 – 5 – ♭7", "Do Mi Sol Si♭"],
              ["maj7", "1 – 3 – 5 – 7", "Do Mi Sol Si"],
              ["m7", "1 – ♭3 – 5 – ♭7", "Do Mi♭ Sol Si♭"],
              ["sus2", "1 – 2 – 5", "Do Re Sol"],
              ["sus4", "1 – 4 – 5", "Do Fa Sol"],
              ["dim", "1 – ♭3 – ♭5", "Do Mi♭ Sol♭"],
              ["aum", "1 – 3 – ♯5", "Do Mi Sol♯"],
            ],
          },
        },
        {
          h2: "Accordi per chitarra per principianti",
          p: ["La maggior parte delle canzoni usa pochi **accordi base per chitarra**: Do (C), Sol (G), Re (D), La (A), Mi (E), La minore (Am), Mi minore (Em) e Re minore (Dm). Impara prima queste forme aperte, poi passa ai barré come Fa (F) e Si minore (Bm). Esercitati con i cambi a tempo con il [metronomo](metronome) e tieni la chitarra accordata con l’[accordatore per chitarra](guitar)."],
        },
        {
          h2: "Trasporre gli accordi",
          p: ["Usa **−1** e **+1** per abbassare o alzare l’accordo di un semitono: un modo rapido per **trasporre gli accordi** in una tonalità comoda per la tua voce. In Altro puoi cambiare i nomi delle note tra Do Re Mi, C D E e la notazione tedesca (H)."],
        },
      ],
      faq: [
        { q: "Come si legge un diagramma di accordi per chitarra?", a: "Le linee verticali sono le corde (Mi basso a sinistra), quelle orizzontali i tasti. I punti indicano dove premere, ✕ una corda da non suonare e ○ una corda a vuoto. Un’etichetta come «5fr» indica il tasto da cui parte il diagramma." },
        { q: "Come si suona il Si minore (Bm) alla chitarra?", a: "Il Bm più comune è un barré al 2º tasto: non suonare il Mi basso e fai x-2-4-4-3-2. Scegli Si e Minore qui per vederlo, e le frecce per un’altra forma." },
        { q: "Cos’è un accordo con il barré?", a: "Un accordo in cui un dito preme più corde sullo stesso tasto, come un capotasto mobile. Così la stessa forma si suona in qualsiasi tonalità." },
        { q: "Quali note formano l’accordo di Do maggiore?", a: "Do, Mi e Sol: la fondamentale, la terza maggiore e la quinta giusta." },
      ],
    },
  },
};
