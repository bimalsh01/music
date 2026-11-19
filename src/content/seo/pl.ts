import type { SeoContent } from "./types";

/* Teksty SEO po polsku. Ta sama treść co w wersji angielskiej, literowe nazwy dźwięków. */
export const pl: SeoContent = {
  labels: { faq: "Najczęstsze pytania", string: "Struna", note: "Dźwięk", frequency: "Częstotliwość", tuning: "Strój", notes: "Struny (6 → 1)" },
  pages: {
    home: {
      title: "Stroik online, metronom i akordy za darmo – Music Tools",
      description: "Darmowe narzędzia muzyczne, które działają od razu: stroik do gitary, ukulele, skrzypiec, wiolonczeli i basu, metronom online z tap tempo oraz akordy.",
      blocks: [
        {
          h2: "Darmowe narzędzia muzyczne online – bez aplikacji i rejestracji",
          p: [
            "Music Tools to zestaw prostych, darmowych narzędzi dla muzyków, działających prosto w przeglądarce. Otwierasz stronę i gotowe: nic nie pobierasz, nie zakładasz konta. Każdy ekran robi jedną rzecz, a duże przyciski łatwo obsłużyć z instrumentem w rękach.",
            "Dźwięk z mikrofonu jest analizowany na twoim urządzeniu i nigdy nie trafia do internetu. Po pierwszej wizycie narzędzia działają także offline, więc stroik i metronom są pod ręką na próbie.",
          ],
        },
        {
          h2: "Co możesz tu zrobić",
          list: [
            "**Nastroić instrument**: [stroik do gitary](guitar), [stroik do ukulele](ukulele), [stroik do skrzypiec](violin), [stroik do wiolonczeli](cello) i [stroik do gitary basowej](bass), a każdy inny instrument – [stroikiem chromatycznym](chromatic).",
            "**Trzymać tempo** z [metronomem online](metronome): 30–300 BPM, tap tempo, akcenty, metrum i podziały.",
            "**Sprawdzić akordy** w [tabeli akordów na gitarę i pianino](chords): chwyty, brzmienie i transpozycja.",
          ],
        },
      ],
      faq: [
        { q: "Czy te narzędzia są naprawdę darmowe?", a: "Tak. Wszystkie są darmowe, bez rejestracji i pobierania. Wszystko działa w przeglądarce." },
        { q: "Czy do strojenia gitary potrzebuję aplikacji?", a: "Nie. Otwórz stroik do gitary, dotknij „Dotknij, aby stroić” i zezwól na mikrofon. Działa na telefonie, tablecie i komputerze." },
        { q: "Czy dźwięk z mikrofonu jest nagrywany lub wysyłany?", a: "Nie. Stroik analizuje dźwięk na twoim urządzeniu w czasie rzeczywistym i niczego nie wysyła na serwer." },
      ],
    },

    guitar: {
      title: "Stroik gitarowy online za darmo – przez mikrofon",
      description: "Darmowy stroik gitarowy online przez mikrofon. Nastrój gitarę akustyczną lub elektryczną w stroju standardowym, Drop D, Open G, DADGAD lub o pół tonu niżej.",
      blocks: [
        {
          h2: "Darmowy stroik gitarowy online",
          p: [
            "Ten **stroik gitarowy** działa prosto w przeglądarce – bez aplikacji i konta. Dotknij **Dotknij, aby stroić**, zezwól na mikrofon i zagraj jedną strunę. Stroik rozpozna dźwięk, wybierze najbliższą strunę i pokaże, o ile centów jest za nisko lub za wysoko. Gdy środkowe paski zrobią się zielone, różnica jest mniejsza niż 5 centów – dla ucha to czysty strój.",
            "Działa jako **stroik do gitary akustycznej** przez mikrofon telefonu lub laptopa, a także do **gitary elektrycznej**: graj bez podłączania blisko mikrofonu albo przyłóż urządzenie do wzmacniacza z czystym brzmieniem. Dźwięk zostaje na twoim urządzeniu.",
          ],
        },
        {
          h2: "Standardowy strój gitary: dźwięki i częstotliwości strun",
          p: ["Standardowy strój gitary to **E A D G H E** (w zapisie międzynarodowym E A D G B E), od najgrubszej struny (6.) do najcieńszej (1.)."],
          autoTable: "tuning",
          after: ["Częstotliwości dla A4 = 440 Hz, standardowego stroju."],
        },
        {
          h2: "Jak nastroić gitarę krok po kroku",
          ordered: true,
          list: [
            "Zacznij od 6. struny (niskie E). Zagraj ją pustą i pozwól jej wybrzmieć.",
            "Jeśli widzisz **Podciągnij**, struna jest za nisko – powoli dokręć klucz. Przy **Poluzuj** – poluzuj.",
            "Strój od nieco niższego dźwięku w górę – struna lepiej trzyma strój.",
            "Gdy paski zrobią się zielone, a struna dostanie ✓, przejdź do następnej. Powtórz dla wszystkich sześciu.",
            "Zrób drugą szybką rundę: naciąg jednej struny zmienia napięcie gryfu.",
          ],
        },
        {
          h2: "Alternatywne stroje: Drop D, Open G, DADGAD i pół tonu niżej",
          p: ["Wybierz strój w menu **Strój**, a przyciski strun się zmienią."],
          autoTable: "alternates",
          after: ["**Drop D** obniża tylko 6. strunę o cały ton – idealny do ciężkich riffów i power chordów jednym palcem. **Open G** daje akord G-dur na pustych strunach, popularny w grze slide i bluesie. **DADGAD** brzmi otwarcie i modalnie, typowo dla folku i muzyki celtyckiej. **Pół tonu niżej** obniża wszystkie struny o półton, co ułatwia podciągnięcia."],
        },
        {
          h2: "Strojenie ze słuchu z dźwiękami wzorcowymi",
          p: [
            "Nie masz mikrofonu albo jest za głośno? Dotknij przycisku struny, aby usłyszeć dźwięk wzorcowy, i nastrój ze słuchu. W **Więcej** zmienisz strój A4 (domyślnie 440 Hz) – przydatne, gdy grasz z pianinem lub zespołem w 442 lub 432 Hz.",
            "Po nastrojeniu ćwicz w tempie z [metronomem online](metronome) albo sprawdzaj chwyty w [tabeli akordów](chords).",
          ],
        },
      ],
      faq: [
        { q: "Czy stroik gitarowy online jest dokładny?", a: "Tak. Korzysta z metody McLeoda wykrywania wysokości dźwięku z dokładnością do ok. jednego centa i świeci na zielono w zakresie ±5 centów – dokładniej, niż rozróżnia ucho. Strój w cichym miejscu, po jednej strunie." },
        { q: "Czy mogę nastroić gitarę bez stroika na klips?", a: "Tak. Wystarczy telefon lub komputer z mikrofonem: otwórz tę stronę, dotknij „Dotknij, aby stroić” i zagraj każdą strunę. Bez mikrofonu dotknij przycisku struny i strój ze słuchu." },
        { q: "Jakie dźwięki mają struny gitary?", a: "W stroju standardowym od 6. do 1. struny: E2, A2, D3, G3, H3 (B3) i E4." },
        { q: "Czy działa z gitarą elektryczną?", a: "Tak. Graj bez podłączania blisko mikrofonu albo przyłóż urządzenie do wzmacniacza z czystym brzmieniem. Przester utrudnia odczyt." },
        { q: "Dlaczego gitara się rozstraja?", a: "Nowe struny rozciągają się przez pierwsze dni, a zmiany temperatury i wilgotności poruszają drewnem. Strojenie przed grą zajmuje mniej niż minutę." },
      ],
    },

    ukulele: {
      title: "Stroik do ukulele online za darmo – strój GCEA",
      description: "Nastrój ukulele online przez mikrofon lub ze słuchu. Standardowy strój G C E A dla ukulele sopranowego, koncertowego i tenorowego. Za darmo, bez aplikacji.",
      blocks: [
        {
          h2: "Darmowy stroik do ukulele online",
          p: [
            "Nastrój ukulele w kilka sekund tym **stroikiem do ukulele**. Dotknij **Dotknij, aby stroić**, zezwól na mikrofon i szarpnij strunę: stroik znajdzie najbliższą strunę i pokaże, czy jest za nisko, czy za wysoko. Zielony oznacza, że jest nastrojona.",
            "Pasuje do ukulele **sopranowego, koncertowego i tenorowego**, które mają ten sam strój. Wolisz ze słuchu? Dotykaj przycisków strun, aby usłyszeć każdy dźwięk.",
          ],
        },
        {
          h2: "Standardowy strój ukulele: G C E A",
          p: ["Standardowy strój ukulele to **G C E A**, od 4. struny (najbliżej brody) do 1. Najczęściej G jest **wysokie**: 4. struna brzmi wyżej niż 3., stąd jasne brzmienie."],
          autoTable: "tuning",
        },
        {
          h2: "Jak nastroić ukulele",
          ordered: true,
          list: [
            "Dotknij **Dotknij, aby stroić** i zezwól na mikrofon.",
            "Szarpnij 4. strunę (G) i pozwól jej wybrzmieć.",
            "Kręć kluczem, aż paski zrobią się zielone: dokręcaj przy „Podciągnij”, luzuj przy „Poluzuj”.",
            "Powtórz dla C, E i A. Nastrojona struna dostaje ✓.",
          ],
          after: ["Nowe struny nylonowe mocno się rozciągają – przez pierwsze dni normalne jest strojenie przed każdą grą."],
        },
        {
          h2: "Wysokie czy niskie G?",
          p: ["Niektórzy zakładają 4. strunę w **niskim G** (oktawę niżej) dla pełniejszego brzmienia. Ten stroik jest ustawiony na wysokie G; przy niskim użyj [stroika chromatycznego](chromatic)."],
        },
      ],
      faq: [
        { q: "Jakie dźwięki mają struny ukulele?", a: "W stroju standardowym od 4. do 1. struny: G4, C4, E4 i A4." },
        { q: "Czy mogę nastroić ukulele telefonem?", a: "Tak. Otwórz tę stronę na telefonie, dotknij „Dotknij, aby stroić”, zezwól na mikrofon i szarpnij każdą strunę." },
        { q: "Czy działa z ukulele barytonowym?", a: "Ukulele barytonowe stroi się D G H E, jak cztery wysokie struny gitary. Użyj stroika chromatycznego lub czterech wysokich strun stroika gitarowego." },
        { q: "Dlaczego nowe ukulele tak szybko się rozstraja?", a: "Struny nylonowe rozciągają się jeszcze przez około tydzień. Strój często, a się ustabilizują." },
      ],
    },

    violin: {
      title: "Stroik do skrzypiec online za darmo – G D A E",
      description: "Darmowy stroik do skrzypiec online. Nastrój G D A E przez mikrofon lub ze słuchu z dźwiękami wzorcowymi i ustaw A4 na 440 lub 442 Hz. Bez aplikacji.",
      blocks: [
        {
          h2: "Darmowy stroik do skrzypiec online",
          p: [
            "Ten **stroik do skrzypiec** słucha przez mikrofon i pokazuje dźwięk oraz odchylenie od czystego stroju. Dotknij **Dotknij, aby stroić**, zagraj strunę smyczkiem (lub pizzicato) i koryguj, aż środkowe paski zrobią się zielone.",
            "Każdy przycisk struny odtwarza też wyraźny **dźwięk wzorcowy**, aby nastroić skrzypce ze słuchu, gdy mikrofon jest niedostępny.",
          ],
        },
        {
          h2: "Dźwięki strun skrzypiec: G D A E",
          p: ["Skrzypce stroi się w kwintach: **G D A E**, od najniższej struny (4.) do najwyższej (1.)."],
          autoTable: "tuning",
        },
        {
          h2: "Jak nastroić skrzypce",
          ordered: true,
          list: [
            "Zacznij od struny **A** – do niej stroi orkiestra.",
            "Prowadź smyczek równo blisko mikrofonu i obserwuj wskaźnik.",
            "Do małych poprawek używaj **mikrostroików** przy strunociągu, a **kołków** tylko do dużych, lekko je wciskając, by trzymały.",
            "Tak samo nastrój D, G i E, a potem jeszcze raz sprawdź A.",
          ],
        },
        {
          h2: "440 Hz czy 442 Hz",
          p: ["Większość muzyki używa A4 = 440 Hz, ale wiele orkiestr stroi nieco wyżej, na 442 Hz. Otwórz **Więcej** i ustaw strój A4 od 430 do 450 Hz."],
        },
      ],
      faq: [
        { q: "Czy mogę nastroić skrzypce telefonem?", a: "Tak. Mikrofon telefonu wystarczy: otwórz tę stronę, dotknij „Dotknij, aby stroić” i zagraj każdą strunę. Możesz też odtworzyć dźwięki wzorcowe przez głośnik i stroić ze słuchu." },
        { q: "Którą strunę skrzypiec stroić najpierw?", a: "Strunę A, potem D, G i E." },
        { q: "Czy działa jako stroik do altówki?", a: "Altówkę stroi się C G D A. Użyj stroika chromatycznego, który rozpozna każdy dźwięk." },
        { q: "Dlaczego skrzypce się rozstrajają?", a: "Kołki mogą się ślizgać, a wilgotność i temperatura poruszają strunami i drewnem. Sprawdzaj strój przed każdą grą." },
      ],
    },

    cello: {
      title: "Stroik do wiolonczeli online za darmo – C G D A",
      description: "Darmowy stroik do wiolonczeli online. Nastrój C G D A przez mikrofon lub ze słuchu z dźwiękami wzorcowymi. Działa w przeglądarce, bez aplikacji.",
      blocks: [
        {
          h2: "Darmowy stroik do wiolonczeli online",
          p: ["Nastrój wiolonczelę tym darmowym **stroikiem do wiolonczeli** – bez aplikacji. Dotknij **Dotknij, aby stroić**, równo prowadź smyczek po strunie i koryguj, aż paski zrobią się zielone. Każdy przycisk odtwarza też dźwięk wzorcowy do strojenia ze słuchu."],
        },
        {
          h2: "Dźwięki strun wiolonczeli: C G D A",
          p: ["Wiolonczelę stroi się w kwintach, oktawę niżej niż altówkę: **C G D A**, od najniższej do najwyższej struny."],
          autoTable: "tuning",
        },
        {
          h2: "Jak nastroić wiolonczelę",
          ordered: true,
          list: [
            "Zacznij od struny **A**, potem nastrój D, G i C.",
            "Prowadź smyczek długo i równo: stabilny dźwięk daje stabilny odczyt, zwłaszcza na niskim C.",
            "Mikrostroiki do małych poprawek, kołki do dużych.",
            "Na koniec jeszcze raz sprawdź A: naciąganie innych strun może je przesunąć.",
          ],
          after: ["Mikrofony w telefonach słabiej łapią niskie dźwięki – trzymaj urządzenie blisko instrumentu."],
        },
      ],
      faq: [
        { q: "Jakie dźwięki mają struny wiolonczeli?", a: "C2, G2, D3 i A3 – od najniższej do najwyższej." },
        { q: "Czy mogę nastroić wiolonczelę telefonem?", a: "Tak. Zezwól na mikrofon i graj każdą strunę blisko telefonu." },
        { q: "Do jakiego A stroić – 440 czy 442 Hz?", a: "Używaj 440 Hz, chyba że orkiestra lub nauczyciel prosi inaczej. Strój A4 zmienisz w Więcej." },
      ],
    },

    bass: {
      title: "Stroik do gitary basowej online za darmo – E A D G",
      description: "Darmowy stroik do gitary basowej online dla basu 4-strunowego. Nastrój E A D G przez mikrofon lub ze słuchu. Działa w przeglądarce, bez aplikacji.",
      blocks: [
        {
          h2: "Darmowy stroik do gitary basowej online",
          p: ["Ten **stroik do basu** stroi 4-strunową gitarę basową w stroju standardowym. Dotknij **Dotknij, aby stroić**, zagraj strunę i kręć kluczem, aż paski zrobią się zielone. Do basu elektrycznego i akustycznego."],
        },
        {
          h2: "Standardowy strój gitary basowej: E A D G",
          p: ["Bas 4-strunowy stroi się **E A D G** – te same dźwięki co cztery najniższe struny gitary, oktawę niżej."],
          autoTable: "tuning",
        },
        {
          h2: "Jak nastroić gitarę basową",
          ordered: true,
          list: [
            "Zacznij od 4. struny (niskie E).",
            "Szarpnij zdecydowanie i pozwól dźwiękowi wybrzmieć – niskie dźwięki potrzebują chwili, by się ustabilizować.",
            "Dokręcaj przy „Podciągnij”, luzuj przy „Poluzuj”, aż do zielonego.",
            "Powtórz dla A, D i G, a potem sprawdź E jeszcze raz.",
          ],
          after: ["Mikrofony w telefonach i laptopach słabo łapią bas. Przyłóż urządzenie do basu lub głośnika wzmacniacza, z czystym brzmieniem."],
        },
      ],
      faq: [
        { q: "Jakie dźwięki mają struny basu?", a: "W stroju standardowym od 4. do 1. struny: E1, A1, D2 i G2." },
        { q: "Czy mogę nastroić bas stroikiem gitarowym?", a: "Bas ma te same nazwy dźwięków co cztery najniższe struny gitary, tylko oktawę niżej. Ten stroik do basu jest właśnie na nie ustawiony, stroik chromatyczny też się sprawdzi." },
        { q: "Dlaczego niskie E trudno odczytać?", a: "Małe mikrofony słabo łapią bardzo niskie częstotliwości. Szarpnij zdecydowanie, trzymaj urządzenie blisko i pozwól dźwiękowi wybrzmieć." },
      ],
    },

    chromatic: {
      title: "Stroik chromatyczny online za darmo – do każdego instrumentu",
      description: "Darmowy stroik chromatyczny online: rozpoznaje wszystkie 12 dźwięków i pokazuje odchylenie w centach. Do każdego instrumentu i głosu. A4 od 430 do 450 Hz.",
      blocks: [
        {
          h2: "Czym jest stroik chromatyczny?",
          p: [
            "**Stroik chromatyczny** rozpoznaje wszystkie 12 dźwięków skali, a nie tylko struny jednego instrumentu. Zagraj dowolny dźwięk, a pokaże najbliższą nazwę, oktawę i odchylenie w centach.",
            "Dlatego pasuje do każdego instrumentu: mandoliny, banjo, altówki, kalimby, instrumentów dętych, ukulele z niskim G, a nawet do głosu.",
          ],
        },
        {
          h2: "Częstotliwości dźwięków (oktawa 4)",
          p: ["Częstotliwości wzorcowe 12 dźwięków wokół c¹ (środkowego C) przy A4 = 440 Hz:"],
          autoTable: "notes",
        },
        {
          h2: "Centy, A4 i 432 Hz",
          p: [
            "**Cent** to 1/100 półtonu. W zakresie ±5 centów stroik świeci na zielono – mniejszej różnicy prawie nikt nie słyszy.",
            "Strój A4 ustala wysokość wszystkich dźwięków. Domyślnie to 440 Hz; w **Więcej** ustawisz od 430 do 450 Hz, w tym 432 Hz lub 442 Hz używane przez wiele orkiestr.",
          ],
        },
      ],
      faq: [
        { q: "Czym różni się stroik chromatyczny od gitarowego?", a: "Gitarowy szuka tylko sześciu strun gitary. Chromatyczny rozpoznaje każdy z 12 dźwięków, więc pasuje do każdego instrumentu i stroju." },
        { q: "Czy mogę sprawdzać nim głos?", a: "Tak. Zaśpiewaj równy dźwięk, a stroik pokaże, jaki to dźwięk i jak blisko jesteś." },
        { q: "Jak nastroić na 432 Hz?", a: "Otwórz Więcej i obniż strój A4 do 432 Hz. Wszystkie dźwięki będą się do niego odnosić." },
      ],
    },

    metronome: {
      title: "Metronom online za darmo – BPM, tap tempo i metrum",
      description: "Darmowy metronom online od 30 do 300 BPM z tap tempo, akcentami, metrum (4/4, 3/4, 6/8) i podziałami. Działa w przeglądarce, bez aplikacji.",
      blocks: [
        {
          h2: "Darmowy metronom online",
          p: [
            "Ten **metronom online** wybija równy puls od 30 do 300 BPM prosto w przeglądarce – bez pobierania. Ustaw tempo suwakiem lub przyciskami − / +, naciśnij **Play** i graj za kliknięciem, wahadłem i światełkami miar.",
            "Włącz **błysk ekranu** w Więcej, a ekran będzie błyskał na każdą miarę – możesz grać bez dźwięku lub w hałasie. Kliknięcia są planowane na zegarze audio urządzenia, więc tempo nie pływa.",
          ],
        },
        {
          h2: "Tap tempo: sprawdź BPM piosenki",
          p: ["Nie znasz tempa? Stuknij kilka razy w **Tap tempo** w rytm piosenki, a metronom obliczy BPM z twoich stuknięć. Uśrednia ostatnie pięć i zaczyna od nowa po dwóch sekundach przerwy."],
        },
        {
          h2: "Metrum i akcenty",
          p: [
            "Wybierz 2/4, 3/4, 4/4, 5/4, 6/8 lub 7/8. Pierwsza miara każdego taktu jest **akcentowana**, więc zawsze wiesz, gdzie jest „raz” – przydatne przy walcu w 3/4. W **6/8** domyślnie akcentowane są miary 1 i 4.",
            "Dotknij dowolnej miary, aby dodać lub usunąć akcent i stworzyć własny wzór.",
          ],
        },
        {
          h2: "Oznaczenia tempa i BPM",
          p: ["Metronom pokazuje klasyczne oznaczenie bieżącego tempa:"],
          table: {
            head: ["Oznaczenie", "BPM", "Charakter"],
            rows: [
              ["Largo", "poniżej 60", "bardzo wolno, szeroko"],
              ["Adagio", "60–75", "wolno"],
              ["Andante", "76–107", "w tempie kroku"],
              ["Moderato", "108–119", "umiarkowanie"],
              ["Allegro", "120–167", "szybko, żywo"],
              ["Presto", "168–199", "bardzo szybko"],
              ["Prestissimo", "200 i więcej", "jak najszybciej"],
            ],
          },
        },
        {
          h2: "Jak ćwiczyć z metronomem",
          list: [
            "Zaczynaj wolno, od **60–80 BPM**, przy gamach i nowych utworach.",
            "Gdy fragment wychodzi czysto trzy razy z rzędu, przyspiesz o 4–5 BPM.",
            "Użyj **podziałów** (1/8, triola, 1/16) w Więcej, aby trafiać szybkimi nutami między miary.",
            "Przed ćwiczeniem sprawdź strój [stroikiem gitarowym](guitar).",
          ],
        },
      ],
      faq: [
        { q: "Czy mogę używać metronomu w przeglądarce bez aplikacji?", a: "Tak. Ten metronom działa w całości w przeglądarce, na telefonie, tablecie i komputerze." },
        { q: "Jak ustawić metronom na 6/8?", a: "Wybierz 6/8 u góry. Akcentowane są miary 1 i 4 – dwa główne pulsy metrum 6/8. Dotykaj miar, aby zmienić akcenty." },
        { q: "W jakim tempie początkujący ma ćwiczyć gamy?", a: "Zacznij od 60–80 BPM, graj czysto, a potem przyspieszaj po kilka BPM." },
        { q: "Czy metronom online jest dokładny?", a: "Tak. Kliknięcia są planowane z wyprzedzeniem na zegarze audio urządzenia, a nie zwykłymi timerami, więc tempo nie dryfuje." },
      ],
    },

    chords: {
      title: "Akordy na gitarę i pianino – tabela akordów z dźwiękiem",
      description: "Darmowa tabela akordów na gitarę i pianino. Wybierz prymę i rodzaj akordu, aby zobaczyć chwyt, posłuchać, zmienić kształt i transponować.",
      blocks: [
        {
          h2: "Tabela akordów gitarowych z chwytami",
          p: ["Wybierz **prymę** i **rodzaj akordu**, a ta **tabela akordów gitarowych** narysuje chwyt na gryfie: ✕ to struna, której nie grasz, ○ pusta struna, a każda kropka pokazuje dźwięk pod palcem (pryma na biało). Strzałki pokazują inne chwyty, w tym **barre** wyżej na gryfie, a **Zagraj** pozwala usłyszeć akord."],
        },
        {
          h2: "Akordy na pianino na klawiaturze",
          p: ["Przełącz na **Pianino**, aby zobaczyć akord na klawiszach – wszystkie dźwięki są podświetlone i podpisane. Strzałki przełączają **przewroty**: te same dźwięki w innej kolejności, dla płynniejszych zmian akordów."],
        },
        {
          h2: "Rodzaje akordów",
          table: {
            head: ["Rodzaj", "Dźwięki (od prymy)", "Przykład od C"],
            rows: [
              ["Dur", "1 – 3 – 5", "C E G"],
              ["Moll", "1 – ♭3 – 5", "C E♭ G"],
              ["7 (dominanta septymowa)", "1 – 3 – 5 – ♭7", "C E G B♭"],
              ["maj7", "1 – 3 – 5 – 7", "C E G H"],
              ["m7", "1 – ♭3 – 5 – ♭7", "C E♭ G B♭"],
              ["sus2", "1 – 2 – 5", "C D G"],
              ["sus4", "1 – 4 – 5", "C F G"],
              ["dim (zmniejszony)", "1 – ♭3 – ♭5", "C E♭ G♭"],
              ["aug (zwiększony)", "1 – 3 – ♯5", "C E G♯"],
            ],
          },
        },
        {
          h2: "Akordy gitarowe dla początkujących",
          p: ["Większość piosenek opiera się na kilku **podstawowych akordach gitarowych**: C, G, D, A, E, Am, Em i Dm. Najpierw naucz się tych otwartych chwytów, potem przejdź do barre, jak F i Hm (Bm). Ćwicz zmiany z [metronomem](metronome) i trzymaj strój [stroikiem gitarowym](guitar)."],
        },
        {
          h2: "Transpozycja akordów",
          p: ["Przyciski **−1** i **+1** przesuwają akord o pół tonu w dół lub w górę – szybki sposób na **transpozycję akordów** do tonacji wygodnej dla głosu. W Więcej zmienisz nazwy dźwięków: C D E, Do Re Mi lub notacja niemiecka (H)."],
        },
      ],
      faq: [
        { q: "Jak czytać diagram akordu gitarowego?", a: "Pionowe linie to struny (niskie E po lewej), poziome to progi. Kropki pokazują, gdzie dociskać, ✕ to struna, której nie grasz, a ○ pusta struna. Oznaczenie typu „5fr” mówi, od którego progu zaczyna się diagram." },
        { q: "Jak zagrać akord h-moll (Hm/Bm) na gitarze?", a: "Najpopularniejszy Hm to barre na 2. progu: nie graj niskiej struny E i chwyć x-2-4-4-3-2. Wybierz tu B (H) i Moll, aby go zobaczyć, a strzałkami inny chwyt." },
        { q: "Czym jest barre?", a: "To chwyt, w którym jeden palec dociska kilka strun na tym samym progu, jak ruchome siodełko. Ten sam kształt zagrasz wtedy w każdej tonacji." },
        { q: "Z jakich dźwięków składa się akord C-dur?", a: "C, E i G – pryma, tercja wielka i kwinta czysta." },
      ],
    },
  },
};
