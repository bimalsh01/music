import type { SeoContent } from "./types";

/* SEO-teksten in het Nederlands. Zelfde inhoud als de Engelse versie, letternamen voor noten. */
export const nl: SeoContent = {
  labels: { faq: "Veelgestelde vragen", string: "Snaar", note: "Noot", frequency: "Frequentie", tuning: "Stemming", notes: "Snaren (6 → 1)" },
  pages: {
    home: {
      title: "Online stemapparaat, metronoom en akkoorden gratis – Music Tools",
      description: "Gratis muziektools die meteen werken: gitaar, ukelele, viool, cello en basgitaar stemmen, online metronoom met tap tempo, en gitaar- en pianoakkoorden.",
      blocks: [
        {
          h2: "Gratis online muziektools – zonder app of account",
          p: [
            "Music Tools is een set eenvoudige, gratis tools voor muzikanten die gewoon in je browser werken. Pagina openen en klaar: niets downloaden, geen account. Elk scherm doet één ding, met grote knoppen die je met je instrument in je handen kunt bedienen.",
            "Het geluid van je microfoon wordt op je eigen apparaat geanalyseerd en nooit geüpload. Na je eerste bezoek werken de tools ook offline, dus je stemapparaat en metronoom zijn er ook in een repetitieruimte zonder bereik.",
          ],
        },
        {
          h2: "Wat je hier kunt doen",
          list: [
            "**Je instrument stemmen** met [gitaar stemmen](guitar), [ukelele stemmen](ukulele), [viool stemmen](violin), [cello stemmen](cello) en [basgitaar stemmen](bass) – of elk ander instrument met het [chromatisch stemapparaat](chromatic).",
            "**In de maat blijven** met de [online metronoom](metronome): 30–300 BPM, tap tempo, accenten, maatsoorten en onderverdelingen.",
            "**Akkoorden opzoeken** in de [akkoordenlijst voor gitaar en piano](chords): grepen, klank en transponeren.",
          ],
        },
      ],
      faq: [
        { q: "Zijn de tools echt gratis?", a: "Ja. Alle tools zijn gratis, zonder account en zonder download. Alles werkt in de browser." },
        { q: "Heb ik een app nodig om mijn gitaar te stemmen?", a: "Nee. Open ‘Gitaar stemmen’, tik op ‘Tik om te stemmen’ en sta de microfoon toe. Werkt op telefoon, tablet en computer." },
        { q: "Wordt mijn microfoongeluid opgenomen of verstuurd?", a: "Nee. Het stemapparaat analyseert het geluid realtime op je apparaat en stuurt niets naar een server." },
      ],
    },

    guitar: {
      title: "Gitaar stemmen online – Gratis stemapparaat met microfoon",
      description: "Gitaar online stemmen, gratis via je microfoon. Akoestische of elektrische gitaar in standaardstemming, Drop D, Open G, DADGAD of een halve toon lager.",
      blocks: [
        {
          h2: "Gratis online gitaarstemapparaat",
          p: [
            "Met dit **gitaarstemapparaat** kun je je **gitaar stemmen** in de browser – zonder app en zonder account. Tik op **Tik om te stemmen**, sta de microfoon toe en speel één snaar. Het stemapparaat herkent de toon, kiest de dichtstbijzijnde snaar en laat zien hoeveel cent hij te laag of te hoog is. Worden de middelste balkjes groen, dan zit je binnen 5 cent: voor het oor zuiver.",
            "Het werkt als **stemapparaat voor akoestische gitaar** via de microfoon van je telefoon of laptop, en ook voor **elektrische gitaar**: speel zonder versterker dicht bij de microfoon of houd je apparaat bij de versterker met een clean geluid. Het geluid blijft op je apparaat.",
          ],
        },
        {
          h2: "Standaardstemming van de gitaar: snaren, noten en frequenties",
          p: ["De standaardstemming van de gitaar is **E A D G B E**, van de dikste snaar (6e) naar de dunste (1e)."],
          autoTable: "tuning",
          after: ["Frequenties bij A4 = 440 Hz, de standaard stemtoon."],
        },
        {
          h2: "Gitaar stemmen, stap voor stap",
          ordered: true,
          list: [
            "Begin met de 6e snaar (lage E). Speel hem los en laat hem klinken.",
            "Staat er **Hoger stemmen**, dan is de snaar te laag: draai de stemsleutel langzaam aan. Bij **Lager stemmen** draai je hem losser.",
            "Stem vanaf iets onder de toon omhoog – zo blijft de snaar beter op stemming.",
            "Worden de balkjes groen en krijgt de snaar een ✓, ga dan naar de volgende. Herhaal voor alle zes.",
            "Doe nog een snelle ronde: elke snaar verandert de spanning op de hals een beetje.",
          ],
        },
        {
          h2: "Alternatieve stemmingen: Drop D, Open G, DADGAD en halve toon lager",
          p: ["Kies een stemming in het menu **Stemming** en de snaarknoppen passen zich aan."],
          autoTable: "alternates",
          after: ["**Drop D** stemt alleen de 6e snaar een hele toon lager – ideaal voor zware riffs en powerchords met één vinger. **Open G** geeft een G-majeurakkoord op de losse snaren, populair bij slide en blues. **DADGAD** klinkt open en modaal, typisch voor folk en Keltische muziek. **Halve toon lager** verlaagt alle snaren een halve toon voor makkelijkere bends."],
        },
        {
          h2: "Op gehoor stemmen met referentietonen",
          p: [
            "Geen microfoon of te veel lawaai? Tik op de knop van een snaar om de referentietoon te horen en stem op gehoor. Onder **Meer** stel je de stemtoon A4 in (standaard 440 Hz) – handig als je speelt met een piano of band op 442 of 432 Hz.",
            "Daarna oefen je in de maat met de [online metronoom](metronome) of zoek je grepen op in de [akkoordenlijst](chords).",
          ],
        },
      ],
      faq: [
        { q: "Is een online gitaarstemapparaat nauwkeurig?", a: "Ja. Het gebruikt de McLeod-toonhoogtedetectie, nauwkeurig tot ongeveer één cent, en wordt groen binnen ±5 cent – fijner dan het oor kan horen. Stem in een rustige ruimte, snaar voor snaar." },
        { q: "Kan ik mijn gitaar stemmen zonder clip-stemapparaat?", a: "Ja. Elke telefoon of computer met microfoon volstaat: open deze pagina, tik op ‘Tik om te stemmen’ en speel elke snaar. Zonder microfoon tik je op de snaarknop en stem je op gehoor." },
        { q: "Welke noten hebben de gitaarsnaren?", a: "In standaardstemming van de 6e naar de 1e snaar: E2, A2, D3, G3, B3 en E4." },
        { q: "Werkt het voor elektrische gitaar?", a: "Ja. Speel zonder versterker dicht bij de microfoon of houd het apparaat bij de versterker met een clean geluid. Vervorming maakt herkennen lastig." },
        { q: "Waarom raakt mijn gitaar steeds ontstemd?", a: "Nieuwe snaren rekken de eerste dagen uit, en temperatuur en luchtvochtigheid laten het hout bewegen. Stemmen voor het spelen kost minder dan een minuut." },
      ],
    },

    ukulele: {
      title: "Ukelele stemmen online – Gratis GCEA-stemapparaat",
      description: "Ukelele online stemmen via de microfoon of op gehoor. Standaardstemming G C E A voor sopraan-, concert- en tenorukelele. Gratis, zonder app.",
      blocks: [
        {
          h2: "Gratis online ukelele-stemapparaat",
          p: [
            "Met dit **ukelele-stemapparaat** kun je je **ukelele stemmen** in een paar seconden. Tik op **Tik om te stemmen**, sta de microfoon toe en tokkel een snaar: het stemapparaat vindt de dichtstbijzijnde snaar en laat zien of hij te laag of te hoog is. Groen betekent gestemd.",
            "Geschikt voor **sopraan-, concert- en tenorukeleles**, die dezelfde stemming hebben. Liever op gehoor? Tik op de snaarknoppen om elke toon te horen.",
          ],
        },
        {
          h2: "Standaardstemming van de ukelele: G C E A",
          p: ["De standaardstemming van de ukelele is **G C E A**, van de 4e snaar (het dichtst bij je kin) naar de 1e. Meestal is de G **hoog**: de 4e snaar klinkt hoger dan de 3e, vandaar de heldere klank."],
          autoTable: "tuning",
        },
        {
          h2: "Zo stem je een ukelele",
          ordered: true,
          list: [
            "Tik op **Tik om te stemmen** en sta de microfoon toe.",
            "Tokkel de 4e snaar (G) en laat hem klinken.",
            "Draai aan de stemsleutel tot de balkjes groen worden: aandraaien bij Hoger stemmen, losser bij Lager stemmen.",
            "Herhaal voor C, E en A. Een gestemde snaar krijgt een ✓.",
          ],
          after: ["Nieuwe nylon snaren rekken flink uit: de eerste dagen is het normaal om elke keer bij te stemmen."],
        },
        {
          h2: "Hoge of lage G?",
          p: ["Sommige spelers zetten de 4e snaar op een **lage G** (een octaaf lager) voor een vollere klank. Dit stemapparaat staat op hoge G; met een lage G gebruik je het [chromatisch stemapparaat](chromatic)."],
        },
      ],
      faq: [
        { q: "Welke noten hebben de ukelelesnaren?", a: "In standaardstemming van de 4e naar de 1e snaar: G4, C4, E4 en A4." },
        { q: "Kan ik mijn ukelele met mijn telefoon stemmen?", a: "Ja. Open deze pagina op je telefoon, tik op ‘Tik om te stemmen’, sta de microfoon toe en tokkel elke snaar." },
        { q: "Werkt het voor een baritonukelele?", a: "Een baritonukelele staat in D G B E, zoals de vier hoge gitaarsnaren. Gebruik het chromatisch stemapparaat of de vier hoge snaren van het gitaarstemapparaat." },
        { q: "Waarom raakt mijn nieuwe ukelele zo snel ontstemd?", a: "Nylon snaren rekken ongeveer een week door. Stem vaak, dan stabiliseren ze." },
      ],
    },

    violin: {
      title: "Viool stemmen online – Gratis stemapparaat G D A E",
      description: "Viool online stemmen, gratis: G D A E via de microfoon of op gehoor met referentietonen. Stemtoon A4 instelbaar op 440 of 442 Hz. Zonder app.",
      blocks: [
        {
          h2: "Gratis online vioolstemapparaat",
          p: [
            "Met dit **vioolstemapparaat** kun je je **viool stemmen**: het luistert via de microfoon en toont de noot en de afwijking. Tik op **Tik om te stemmen**, strijk (of tokkel) een snaar en stel bij tot de middelste balkjes groen worden.",
            "Elke snaarknop speelt ook een heldere **referentietoon**, zodat je de viool op gehoor kunt stemmen als de microfoon niet beschikbaar is.",
          ],
        },
        {
          h2: "Snaren van de viool: G D A E",
          p: ["De viool wordt in kwinten gestemd: **G D A E**, van de laagste snaar (4e) naar de hoogste (1e)."],
          autoTable: "tuning",
        },
        {
          h2: "Zo stem je een viool",
          ordered: true,
          list: [
            "Begin met de **A-snaar** – daarop stemt het orkest.",
            "Strijk gelijkmatig dicht bij de microfoon en kijk naar de meter.",
            "Gebruik de **fijnstemmers** op het staartstuk voor kleine correcties en de **stemschroeven (pinnen)** alleen voor grote, en druk ze licht aan zodat ze blijven zitten.",
            "Stem D, G en E op dezelfde manier en controleer de A nog eens.",
          ],
        },
        {
          h2: "Stemmen op 440 of 442 Hz",
          p: ["Meestal is A4 = 440 Hz, maar veel orkesten stemmen iets hoger, op 442 Hz. Open **Meer** en stel de stemtoon A4 in tussen 430 en 450 Hz."],
        },
      ],
      faq: [
        { q: "Kan ik mijn viool met mijn telefoon stemmen?", a: "Ja. De microfoon van je telefoon volstaat: open deze pagina, tik op ‘Tik om te stemmen’ en speel elke snaar. Je kunt ook de referentietonen via de luidspreker afspelen en op gehoor stemmen." },
        { q: "Welke vioolsnaar stem je eerst?", a: "De A-snaar, daarna D, G en E." },
        { q: "Werkt het als altvioolstemapparaat?", a: "Een altviool staat in C G D A. Gebruik het chromatisch stemapparaat, dat elke noot herkent." },
        { q: "Waarom raakt mijn viool ontstemd?", a: "Pinnen kunnen slippen, en luchtvochtigheid en temperatuur laten snaren en hout bewegen. Controleer de stemming elke keer dat je speelt." },
      ],
    },

    cello: {
      title: "Cello stemmen online – Gratis stemapparaat C G D A",
      description: "Cello online stemmen, gratis: C G D A via de microfoon of op gehoor met referentietonen. Stemtoon instelbaar. Werkt in de browser, zonder app.",
      blocks: [
        {
          h2: "Gratis online cellostemapparaat",
          p: ["Met dit **cellostemapparaat** kun je je **cello stemmen**, zonder app. Tik op **Tik om te stemmen**, strijk een snaar gelijkmatig aan en stel bij tot de balkjes groen worden. Elke knop speelt ook de referentietoon om op gehoor te stemmen."],
        },
        {
          h2: "Snaren van de cello: C G D A",
          p: ["De cello wordt in kwinten gestemd, een octaaf onder de altviool: **C G D A**, van de laagste naar de hoogste snaar."],
          autoTable: "tuning",
        },
        {
          h2: "Zo stem je een cello",
          ordered: true,
          list: [
            "Begin met de **A-snaar**, daarna D, G en C.",
            "Strijk lang en gelijkmatig: een stabiele toon geeft een stabiele meting, vooral op de lage C.",
            "Fijnstemmers voor kleine, pinnen voor grote correcties.",
            "Controleer de A aan het eind nog eens: het aanspannen van de andere snaren kan hem verschuiven.",
          ],
          after: ["Telefoonmicrofoons vangen lage tonen zwakker op – houd je apparaat dicht bij het instrument."],
        },
      ],
      faq: [
        { q: "Welke noten hebben de cellosnaren?", a: "C2, G2, D3 en A3, van de laagste naar de hoogste snaar." },
        { q: "Kan ik mijn cello met mijn telefoon stemmen?", a: "Ja. Sta de microfoon toe en speel elke snaar dicht bij de telefoon." },
        { q: "Op welke A stem ik – 440 of 442 Hz?", a: "Gebruik 440 Hz, tenzij je orkest of docent iets anders vraagt. De stemtoon wijzig je onder Meer." },
      ],
    },

    bass: {
      title: "Basgitaar stemmen online – Gratis stemapparaat E A D G",
      description: "Basgitaar online stemmen, gratis: 4-snarige bas in E A D G via de microfoon of op gehoor met referentietonen. Werkt in de browser, zonder app.",
      blocks: [
        {
          h2: "Gratis online basgitaarstemapparaat",
          p: ["Met dit **basstemapparaat** kun je een 4-snarige **basgitaar stemmen** in standaardstemming. Tik op **Tik om te stemmen**, speel een snaar en draai aan de stemsleutel tot de balkjes groen worden. Voor elektrische en akoestische bas."],
        },
        {
          h2: "Standaardstemming van de basgitaar: E A D G",
          p: ["Een 4-snarige bas staat in **E A D G** – dezelfde noten als de vier laagste gitaarsnaren, een octaaf lager."],
          autoTable: "tuning",
        },
        {
          h2: "Zo stem je een basgitaar",
          ordered: true,
          list: [
            "Begin met de 4e snaar (lage E).",
            "Tokkel stevig en laat de toon klinken – lage tonen hebben even nodig om stabiel te worden.",
            "Aandraaien bij Hoger stemmen, losser bij Lager stemmen, tot het groen is.",
            "Herhaal voor A, D en G en controleer de E nog eens.",
          ],
          after: ["Microfoons van telefoons en laptops vangen lage tonen zwak op. Houd het apparaat dicht bij de bas of de luidspreker van de versterker, met een clean geluid."],
        },
      ],
      faq: [
        { q: "Welke noten hebben de bassnaren?", a: "In standaardstemming van de 4e naar de 1e snaar: E1, A1, D2 en G2." },
        { q: "Kan ik een bas stemmen met een gitaarstemapparaat?", a: "Een bas heeft dezelfde nootnamen als de vier laagste gitaarsnaren, alleen een octaaf lager. Dit basstemapparaat staat precies daarop ingesteld, en het chromatisch stemapparaat werkt ook." },
        { q: "Waarom is de lage E moeilijk te meten?", a: "Kleine microfoons vangen heel lage frequenties slecht op. Tokkel stevig, houd het apparaat dichtbij en laat de toon uitklinken." },
      ],
    },

    chromatic: {
      title: "Chromatisch stemapparaat online – voor elk instrument",
      description: "Gratis chromatisch stemapparaat online: herkent alle 12 noten en toont de afwijking in cent. Voor elk instrument en voor je stem. A4 instelbaar (430–450 Hz).",
      blocks: [
        {
          h2: "Wat is een chromatisch stemapparaat?",
          p: [
            "Een **chromatisch stemapparaat** herkent alle 12 noten van de toonladder, niet alleen de snaren van één instrument. Speel een willekeurige toon en het toont de dichtstbijzijnde noot, het octaaf en de afwijking in cent.",
            "Daarom past het bij elk instrument: mandoline, banjo, altviool, kalimba, blaasinstrumenten, ukelele met lage G – en je stem.",
          ],
        },
        {
          h2: "Frequenties van de noten (octaaf 4)",
          p: ["Referentiefrequenties van de 12 noten rond de centrale C, bij A4 = 440 Hz:"],
          autoTable: "notes",
        },
        {
          h2: "Cent, A4 en 432 Hz",
          p: [
            "Een **cent** is 1/100 halve toon. Binnen ±5 cent wordt het stemapparaat groen – kleinere verschillen hoort bijna niemand.",
            "De stemtoon A4 bepaalt de hoogte van alle noten. Standaard is 440 Hz; onder **Meer** stel je 430 tot 450 Hz in, ook 432 Hz of de 442 Hz van veel orkesten.",
          ],
        },
      ],
      faq: [
        { q: "Wat is het verschil tussen een chromatisch en een gitaarstemapparaat?", a: "Een gitaarstemapparaat zoekt alleen de zes gitaarsnaren. Een chromatisch stemapparaat herkent elk van de 12 noten en werkt dus voor elk instrument en elke stemming." },
        { q: "Kan ik er mijn stem mee controleren?", a: "Ja. Zing een vaste toon en het stemapparaat laat zien welke noot het is en hoe dicht je erbij zit." },
        { q: "Hoe stem ik op 432 Hz?", a: "Open Meer en verlaag de stemtoon A4 naar 432 Hz. Alle noten volgen die referentie." },
      ],
    },

    metronome: {
      title: "Online metronoom gratis – BPM, tap tempo en maatsoorten",
      description: "Gratis online metronoom van 30 tot 300 BPM met tap tempo, accenten, maatsoorten (4/4, 3/4, 6/8) en onderverdelingen. Werkt in de browser, zonder app.",
      blocks: [
        {
          h2: "Gratis online metronoom",
          p: [
            "Deze **online metronoom** tikt een vaste puls van 30 tot 300 BPM, gewoon in je browser – niets downloaden. Stel het tempo in met de schuifregelaar of de knoppen − / +, druk op **Play** en volg de klik, de slinger en de lampjes per tel.",
            "Zet onder Meer de **visuele flits** aan en het scherm flitst op elke tel – handig zonder geluid of in een rumoerige ruimte. De klikken worden ingepland op de audioklok van je apparaat, dus het tempo schommelt niet.",
          ],
        },
        {
          h2: "Tap tempo: vind het BPM van een nummer",
          p: ["Weet je het tempo niet? Tik een paar keer op **Tap tempo** mee met het nummer en de metronoom berekent het BPM uit je tikken. Hij neemt het gemiddelde van de laatste vijf en begint opnieuw na twee seconden pauze."],
        },
        {
          h2: "Maatsoorten en accenten",
          p: [
            "Kies 2/4, 3/4, 4/4, 5/4, 6/8 of 7/8. De eerste tel van elke maat krijgt een **accent**, zodat je altijd weet waar de ‘één’ is – handig voor een wals in 3/4. In **6/8** krijgen tel 1 en 4 standaard een accent.",
            "Tik op een tel om een accent toe te voegen of weg te halen en je eigen patroon te maken.",
          ],
        },
        {
          h2: "Tempoaanduidingen en BPM",
          p: ["De metronoom toont de klassieke tempoaanduiding bij het huidige tempo:"],
          table: {
            head: ["Tempoaanduiding", "BPM", "Karakter"],
            rows: [
              ["Largo", "onder 60", "heel langzaam, breed"],
              ["Adagio", "60–75", "langzaam"],
              ["Andante", "76–107", "gaand, wandeltempo"],
              ["Moderato", "108–119", "matig"],
              ["Allegro", "120–167", "snel, levendig"],
              ["Presto", "168–199", "heel snel"],
              ["Prestissimo", "200 en hoger", "zo snel mogelijk"],
            ],
          },
        },
        {
          h2: "Oefenen met een metronoom",
          list: [
            "Begin langzaam, rond **60–80 BPM**, voor toonladders en nieuwe stukken.",
            "Lukt een passage drie keer achter elkaar zuiver, verhoog dan met 4–5 BPM.",
            "Gebruik de **onderverdelingen** (1/8, triool, 1/16) onder Meer om snelle noten tussen de tellen te plaatsen.",
            "Controleer vooraf je stemming met [gitaar stemmen](guitar).",
          ],
        },
      ],
      faq: [
        { q: "Kan ik een metronoom in de browser gebruiken zonder app?", a: "Ja. Deze metronoom werkt volledig in de browser, op telefoon, tablet en computer." },
        { q: "Hoe zet ik de metronoom op 6/8?", a: "Kies bovenaan 6/8. Tel 1 en 4 krijgen een accent – de twee hoofdpulsen van 6/8. Tik op de tellen om de accenten te veranderen." },
        { q: "Op welk tempo oefent een beginner toonladders?", a: "Begin op 60–80 BPM, speel zuiver en verhoog daarna steeds een paar BPM." },
        { q: "Is een online metronoom nauwkeurig?", a: "Ja. De klikken worden vooraf ingepland op de audioklok van je apparaat, niet met gewone timers, dus het tempo verloopt niet." },
      ],
    },

    chords: {
      title: "Gitaarakkoorden & pianoakkoorden – akkoordenlijst met geluid",
      description: "Gratis akkoordenlijst voor gitaar en piano. Kies grondtoon en akkoordtype om de greep te zien, het akkoord te horen, andere grepen te proberen en te transponeren.",
      blocks: [
        {
          h2: "Gitaarakkoorden met grepen",
          p: ["Kies een **grondtoon** en een **akkoordtype** en deze **lijst met gitaarakkoorden** tekent de greep op de hals: ✕ is een snaar die je niet speelt, ○ een losse snaar, en elke stip toont de noot onder je vinger (grondtoon in wit). Met de pijlen zie je andere grepen, ook **barréakkoorden** hoger op de hals, en **Afspelen** laat het akkoord horen."],
        },
        {
          h2: "Pianoakkoorden op het toetsenbord",
          p: ["Schakel naar **Piano** om het akkoord op de toetsen te zien, met alle akkoordtonen gemarkeerd en benoemd. De pijlen lopen door de **omkeringen** – dezelfde noten in een andere volgorde, voor soepelere akkoordwisselingen."],
        },
        {
          h2: "Akkoordtypes uitgelegd",
          table: {
            head: ["Akkoordtype", "Noten (vanaf de grondtoon)", "Voorbeeld in C"],
            rows: [
              ["Majeur", "1 – 3 – 5", "C E G"],
              ["Mineur", "1 – ♭3 – 5", "C E♭ G"],
              ["7 (dominant septiem)", "1 – 3 – 5 – ♭7", "C E G B♭"],
              ["maj7", "1 – 3 – 5 – 7", "C E G B"],
              ["m7", "1 – ♭3 – 5 – ♭7", "C E♭ G B♭"],
              ["sus2", "1 – 2 – 5", "C D G"],
              ["sus4", "1 – 4 – 5", "C F G"],
              ["dim (verminderd)", "1 – ♭3 – ♭5", "C E♭ G♭"],
              ["aug (overmatig)", "1 – 3 – ♯5", "C E G♯"],
            ],
          },
        },
        {
          h2: "Gitaarakkoorden voor beginners",
          p: ["De meeste nummers gebruiken een paar **basisakkoorden voor gitaar**: C, G, D, A, E, Am, Em en Dm. Leer eerst deze open grepen en ga dan door naar barréakkoorden zoals F en Bm. Oefen de wissels in de maat met de [metronoom](metronome) en houd je gitaar gestemd met [gitaar stemmen](guitar)."],
        },
        {
          h2: "Akkoorden transponeren",
          p: ["Met **−1** en **+1** verschuif je het akkoord een halve toon omlaag of omhoog – een snelle manier om **akkoorden te transponeren** naar een toonsoort die bij je stem past. Onder Meer wissel je de nootnamen tussen C D E, Do Re Mi en de Duitse notatie (H)."],
        },
      ],
      faq: [
        { q: "Hoe lees je een gitaarakkoorddiagram?", a: "Verticale lijnen zijn de snaren (lage E links), horizontale lijnen de frets. Stippen laten zien waar je drukt, ✕ is niet aanslaan en ○ een losse snaar. Een label als ‘5fr’ geeft aan op welke fret het diagram begint." },
        { q: "Hoe speel je Bm (B mineur) op gitaar?", a: "De gebruikelijkste Bm is een barré op de 2e fret: sla de lage E niet aan en speel x-2-4-4-3-2. Kies hier B en Mineur om hem te zien, en de pijlen voor een andere greep." },
        { q: "Wat is een barréakkoord?", a: "Een greep waarbij één vinger meerdere snaren op dezelfde fret indrukt, als een verschuifbare kam. Zo speel je dezelfde vorm in elke toonsoort." },
        { q: "Welke noten zitten in een C-majeurakkoord?", a: "C, E en G – de grondtoon, de grote terts en de reine kwint." },
      ],
    },
  },
};
