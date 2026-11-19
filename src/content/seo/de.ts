import type { SeoContent } from "./types";

/* SEO-Texte auf Deutsch. Gleicher Inhalt wie die englische Version, deutsche Notennamen (H, B, Es). */
export const de: SeoContent = {
  labels: { faq: "Häufige Fragen", string: "Saite", note: "Ton", frequency: "Frequenz", tuning: "Stimmung", notes: "Saiten (6 → 1)" },
  pages: {
    home: {
      title: "Stimmgerät Online, Metronom & Akkorde kostenlos – Music Tools",
      description: "Kostenlose Musik-Tools, die sofort funktionieren: Gitarre, Ukulele, Geige, Cello und Bass stimmen, Online-Metronom mit Tap Tempo, Gitarren- und Klavierakkorde.",
      blocks: [
        {
          h2: "Kostenlose Musik-Tools online – ohne App, ohne Anmeldung",
          p: [
            "Music Tools ist eine Sammlung einfacher, kostenloser Werkzeuge für Musiker, die direkt im Browser laufen. Seite öffnen, fertig: kein Download, kein Konto. Jeder Bildschirm erledigt genau eine Aufgabe, mit großen Bedienelementen, die man mit dem Instrument in der Hand nutzen kann.",
            "Der Mikrofonton wird auf deinem Gerät ausgewertet und nie hochgeladen. Nach dem ersten Besuch funktionieren die Tools auch offline – Stimmgerät und Metronom sind im Proberaum immer dabei.",
          ],
        },
        {
          h2: "Was du hier machen kannst",
          list: [
            "**Dein Instrument stimmen** mit [Gitarre stimmen](guitar), [Ukulele stimmen](ukulele), [Geige stimmen](violin), [Cello stimmen](cello) und [Bass stimmen](bass) – oder alles andere mit dem [chromatischen Stimmgerät](chromatic).",
            "**Im Takt bleiben** mit dem [Online-Metronom](metronome): 30–300 BPM, Tap Tempo, Betonungen, Taktarten und Unterteilungen.",
            "**Akkorde nachschlagen** in der [Akkordtabelle für Gitarre und Klavier](chords): Griffe, Klang und Transponieren.",
          ],
        },
      ],
      faq: [
        { q: "Sind die Tools wirklich kostenlos?", a: "Ja. Alle Tools sind kostenlos, ohne Anmeldung und ohne Download. Alles läuft im Browser." },
        { q: "Brauche ich eine App, um meine Gitarre zu stimmen?", a: "Nein. Öffne „Gitarre stimmen“, tippe auf „Tippen zum Stimmen“ und erlaube das Mikrofon. Das klappt auf Handy, Tablet und Computer." },
        { q: "Wird mein Mikrofon aufgenommen oder gesendet?", a: "Nein. Das Stimmgerät wertet den Ton in Echtzeit auf deinem Gerät aus, nichts wird an einen Server geschickt." },
      ],
    },

    guitar: {
      title: "Gitarre stimmen online – Kostenloses Stimmgerät mit Mikrofon",
      description: "Gitarre online stimmen, kostenlos per Mikrofon. Akustik- oder E-Gitarre in Standardstimmung, Drop D, Open G, DADGAD oder einen Halbton tiefer. Ohne App.",
      blocks: [
        {
          h2: "Kostenloses Gitarren-Stimmgerät online",
          p: [
            "Mit diesem **Gitarren-Stimmgerät** kannst du deine **Gitarre stimmen**, direkt im Browser – ohne App, ohne Konto. Tippe auf **Tippen zum Stimmen**, erlaube das Mikrofon und spiel eine Saite. Das Stimmgerät erkennt den Ton, wählt die nächstgelegene Saite und zeigt, wie viele Cent sie zu tief oder zu hoch ist. Werden die mittleren Balken grün, liegst du innerhalb von 5 Cent – für das Ohr sauber gestimmt.",
            "Es funktioniert als **Stimmgerät für Akustikgitarre** über das Handy- oder Laptop-Mikrofon und ebenso für die **E-Gitarre**: unverstärkt nah am Mikrofon spielen oder das Gerät mit cleanem Sound an den Verstärker halten. Der Ton wird auf deinem Gerät ausgewertet und verlässt es nie.",
          ],
        },
        {
          h2: "Standardstimmung der Gitarre: Saiten, Töne und Frequenzen",
          p: ["Die Standardstimmung der Gitarre ist **E A D G H E**, von der dicksten Saite (6.) zur dünnsten (1.). Eine Eselsbrücke: *Eine Alte Dame Geht Heute Einkaufen*."],
          autoTable: "tuning",
          after: ["Frequenzen bei Kammerton A4 = 440 Hz."],
        },
        {
          h2: "Gitarre stimmen – Schritt für Schritt",
          ordered: true,
          list: [
            "Beginne mit der 6. Saite (tiefes E). Schlag sie leer an und lass sie klingen.",
            "Zeigt die Anzeige **Höher stimmen**, ist die Saite zu tief: Dreh den Wirbel langsam fester. Bei **Tiefer stimmen** lockerst du sie.",
            "Stimme von etwas unterhalb des Tons nach oben – so hält die Saite die Stimmung besser.",
            "Werden die Balken grün und bekommt die Saite ein ✓, geht es zur nächsten. Wiederhole das für alle sechs.",
            "Mach eine zweite kurze Runde: Jede Saite verändert die Spannung am Hals ein wenig.",
          ],
        },
        {
          h2: "Alternative Stimmungen: Drop D, Open G, DADGAD und Halbton tiefer",
          p: ["Wähle die Stimmung im Menü **Stimmung**, und die Saiten-Buttons passen sich an."],
          autoTable: "alternates",
          after: ["**Drop D** stimmt nur die 6. Saite einen Ganzton tiefer – ideal für harte Riffs und Powerchords mit einem Finger. **Open G** ergibt leer angeschlagen einen G-Dur-Akkord, beliebt für Slide und Blues. **DADGAD** klingt offen und modal, typisch für Folk und keltische Musik. **Halbton tiefer** senkt alle Saiten um einen Halbton für leichtere Bendings."],
        },
        {
          h2: "Nach Gehör stimmen mit Referenztönen",
          p: [
            "Kein Mikrofon oder zu laut? Tippe auf den Button einer Saite, hör dir den Referenzton an und stimme nach Gehör. Unter **Mehr** stellst du den Kammerton A4 ein (Standard 440 Hz) – praktisch, wenn Klavier oder Band auf 442 oder 432 Hz gestimmt sind.",
            "Danach im Takt üben mit dem [Online-Metronom](metronome) oder Griffe in der [Akkordtabelle](chords) nachschlagen.",
          ],
        },
      ],
      faq: [
        { q: "Ist ein Online-Stimmgerät für Gitarre genau?", a: "Ja. Es nutzt die McLeod-Tonhöhenerkennung, die auf etwa ein Cent genau misst, und zeigt Grün innerhalb von ±5 Cent – feiner, als das Ohr unterscheidet. Am besten in ruhiger Umgebung und Saite für Saite stimmen." },
        { q: "Kann ich die Gitarre ohne Clip-Stimmgerät stimmen?", a: "Ja. Jedes Handy oder jeder Computer mit Mikrofon reicht: Seite öffnen, „Tippen zum Stimmen“ und jede Saite spielen. Ohne Mikrofon tippst du auf den Saiten-Button und stimmst nach Gehör." },
        { q: "Welche Töne haben die Gitarrensaiten?", a: "In Standardstimmung von der 6. zur 1. Saite: E2, A2, D3, G3, H3 und E4." },
        { q: "Funktioniert es mit der E-Gitarre?", a: "Ja. Spiel unverstärkt nah am Mikrofon oder halt das Gerät mit cleanem Sound an den Verstärker. Verzerrung erschwert die Erkennung." },
        { q: "Warum verstimmt sich meine Gitarre ständig?", a: "Neue Saiten dehnen sich in den ersten Tagen, und Temperatur und Luftfeuchtigkeit bewegen das Holz. Vor dem Spielen stimmen dauert keine Minute." },
      ],
    },

    ukulele: {
      title: "Ukulele stimmen online – Kostenloses GCEA-Stimmgerät",
      description: "Ukulele online stimmen per Mikrofon oder nach Gehör. Standardstimmung G C E A für Sopran-, Konzert- und Tenor-Ukulele. Kostenlos, ohne App.",
      blocks: [
        {
          h2: "Kostenloses Ukulele-Stimmgerät online",
          p: [
            "Mit diesem **Ukulele-Stimmgerät** kannst du deine **Ukulele stimmen** – in Sekunden. Tippe auf **Tippen zum Stimmen**, erlaube das Mikrofon und zupf eine Saite: Das Stimmgerät findet die passende Saite und zeigt, ob sie zu tief oder zu hoch ist. Grün heißt gestimmt.",
            "Es passt für **Sopran-, Konzert- und Tenor-Ukulelen**, die alle gleich gestimmt werden. Lieber nach Gehör? Tippe auf die Saiten-Buttons, um jeden Ton zu hören.",
          ],
        },
        {
          h2: "Standardstimmung der Ukulele: G C E A",
          p: ["Die Standardstimmung der Ukulele ist **G C E A**, von der 4. Saite (dem Kinn am nächsten) zur 1. Meist ist das G **hoch** gestimmt: Die 4. Saite klingt höher als die 3. – daher der helle Klang."],
          autoTable: "tuning",
        },
        {
          h2: "Ukulele stimmen – so geht’s",
          ordered: true,
          list: [
            "Tippe auf **Tippen zum Stimmen** und erlaube das Mikrofon.",
            "Zupf die 4. Saite (G) und lass sie klingen.",
            "Dreh den Wirbel, bis die Balken grün werden: fester bei Höher stimmen, lockerer bei Tiefer stimmen.",
            "Wiederhole das für C, E und A. Jede gestimmte Saite bekommt ein ✓.",
          ],
          after: ["Neue Nylonsaiten dehnen sich stark – in den ersten Tagen ist Nachstimmen bei jedem Spielen normal."],
        },
        {
          h2: "Hohes oder tiefes G?",
          p: ["Manche spielen die 4. Saite als **tiefes G** (eine Oktave tiefer) für einen volleren Klang. Dieses Stimmgerät ist auf hohes G eingestellt; mit tiefem G nimm das [chromatische Stimmgerät](chromatic)."],
        },
      ],
      faq: [
        { q: "Welche Töne haben die Ukulelesaiten?", a: "In Standardstimmung: G4, C4, E4 und A4, von der 4. zur 1. Saite." },
        { q: "Kann ich die Ukulele mit dem Handy stimmen?", a: "Ja. Öffne die Seite auf dem Handy, tippe auf „Tippen zum Stimmen“, erlaube das Mikrofon und zupf jede Saite." },
        { q: "Funktioniert es mit einer Bariton-Ukulele?", a: "Die Bariton-Ukulele ist D G H E gestimmt, wie die vier hohen Gitarrensaiten. Nimm das chromatische Stimmgerät oder die vier hohen Saiten beim Gitarren-Stimmgerät." },
        { q: "Warum verstimmt sich meine neue Ukulele so schnell?", a: "Nylonsaiten dehnen sich etwa eine Woche lang nach. Oft stimmen, dann stabilisieren sie sich." },
      ],
    },

    violin: {
      title: "Geige stimmen online – Kostenloses Stimmgerät G D A E",
      description: "Geige online stimmen, kostenlos: G D A E per Mikrofon oder nach Gehör mit Referenztönen. Kammerton A4 auf 440 oder 442 Hz einstellbar. Ohne App.",
      blocks: [
        {
          h2: "Kostenloses Geigen-Stimmgerät online",
          p: [
            "Mit diesem **Violin-Stimmgerät** kannst du deine **Geige stimmen**: Es hört über das Mikrofon zu und zeigt den Ton und die Abweichung. Tippe auf **Tippen zum Stimmen**, streich (oder zupf) eine Saite und justiere, bis die mittleren Balken grün werden.",
            "Jeder Saiten-Button spielt außerdem einen klaren **Referenzton**, damit du die Geige auch ohne Mikrofon nach Gehör stimmen kannst.",
          ],
        },
        {
          h2: "Saiten der Geige: G D A E",
          p: ["Die Geige wird in Quinten gestimmt: **G D A E**, von der tiefsten Saite (4.) zur höchsten (1.)."],
          autoTable: "tuning",
        },
        {
          h2: "Geige stimmen – so geht’s",
          ordered: true,
          list: [
            "Beginne mit der **A-Saite** – auf diesen Ton stimmt das Orchester.",
            "Streich sie gleichmäßig nah am Mikrofon und beobachte die Anzeige.",
            "Nutze die **Feinstimmer** am Saitenhalter für kleine Korrekturen und die **Wirbel** nur für große, dabei leicht hineindrücken, damit sie halten.",
            "Stimme D, G und E genauso und prüfe dann das A noch einmal.",
          ],
        },
        {
          h2: "Auf 440 oder 442 Hz stimmen",
          p: ["Meist gilt A4 = 440 Hz, viele Orchester stimmen aber etwas höher auf 442 Hz. Öffne **Mehr** und stelle den Kammerton A4 zwischen 430 und 450 Hz ein."],
        },
      ],
      faq: [
        { q: "Kann ich die Geige mit dem Handy stimmen?", a: "Ja. Das Handymikrofon reicht: Seite öffnen, „Tippen zum Stimmen“ und jede Saite spielen. Du kannst auch die Referenztöne über den Lautsprecher abspielen und nach Gehör stimmen." },
        { q: "Welche Geigensaite stimmt man zuerst?", a: "Die A-Saite, danach D, G und E." },
        { q: "Funktioniert es als Bratschen-Stimmgerät?", a: "Die Bratsche ist C G D A gestimmt. Nimm das chromatische Stimmgerät, es erkennt jeden Ton." },
        { q: "Warum verstimmt sich meine Geige?", a: "Wirbel können rutschen, und Luftfeuchtigkeit und Temperatur bewegen Saiten und Holz. Prüfe die Stimmung vor jedem Üben." },
      ],
    },

    cello: {
      title: "Cello stimmen online – Kostenloses Stimmgerät C G D A",
      description: "Cello online stimmen, kostenlos: C G D A per Mikrofon oder nach Gehör mit Referenztönen. Kammerton einstellbar. Läuft im Browser, ohne App.",
      blocks: [
        {
          h2: "Kostenloses Cello-Stimmgerät online",
          p: ["Mit diesem **Cello-Stimmgerät** kannst du dein **Cello stimmen**, ganz ohne App. Tippe auf **Tippen zum Stimmen**, streich eine Saite gleichmäßig an und dreh, bis die Balken grün werden. Jeder Button spielt auch den Referenzton zum Stimmen nach Gehör."],
        },
        {
          h2: "Saiten des Cellos: C G D A",
          p: ["Das Cello wird in Quinten gestimmt, eine Oktave unter der Bratsche: **C G D A**, von der tiefsten zur höchsten Saite."],
          autoTable: "tuning",
        },
        {
          h2: "Cello stimmen – so geht’s",
          ordered: true,
          list: [
            "Beginne mit der **A-Saite**, dann D, G und C.",
            "Streich lang und gleichmäßig – ein ruhiger Ton gibt eine ruhige Anzeige, besonders auf dem tiefen C.",
            "Feinstimmer für kleine, Wirbel für große Korrekturen.",
            "Prüfe zum Schluss noch einmal das A: Das Spannen der anderen Saiten kann es verschieben.",
          ],
          after: ["Handymikrofone nehmen tiefe Töne schwächer auf – halt das Gerät nah ans Instrument."],
        },
      ],
      faq: [
        { q: "Welche Töne haben die Cellosaiten?", a: "C2, G2, D3 und A3, von der tiefsten zur höchsten Saite." },
        { q: "Kann ich das Cello mit dem Handy stimmen?", a: "Ja. Erlaube das Mikrofon und spiel jede Saite nah am Handy." },
        { q: "Auf welches A stimmen – 440 oder 442 Hz?", a: "Nimm 440 Hz, solange Orchester oder Lehrer nichts anderes wollen. Den Kammerton änderst du unter Mehr." },
      ],
    },

    bass: {
      title: "Bass stimmen online – Kostenloses Stimmgerät E A D G",
      description: "E-Bass online stimmen, kostenlos: 4-Saiter in E A D G per Mikrofon oder nach Gehör mit Referenztönen. Läuft im Browser, ohne App.",
      blocks: [
        {
          h2: "Kostenloses Bass-Stimmgerät online",
          p: ["Mit diesem **Bass-Stimmgerät** kannst du einen 4-saitigen **Bass stimmen** – in Standardstimmung. Tippe auf **Tippen zum Stimmen**, spiel eine Saite und dreh den Wirbel, bis die Balken grün werden. Für E-Bass und Akustikbass."],
        },
        {
          h2: "Standardstimmung des Basses: E A D G",
          p: ["Der 4-saitige Bass wird **E A D G** gestimmt – dieselben Töne wie die vier tiefen Gitarrensaiten, eine Oktave tiefer."],
          autoTable: "tuning",
        },
        {
          h2: "Bass stimmen – so geht’s",
          ordered: true,
          list: [
            "Beginne mit der 4. Saite (tiefes E).",
            "Zupf kräftig und lass den Ton klingen – tiefe Töne brauchen einen Moment.",
            "Fester bei Höher stimmen, lockerer bei Tiefer stimmen, bis die Balken grün sind.",
            "Wiederhole das für A, D und G und prüf das E noch einmal.",
          ],
          after: ["Handy- und Laptopmikrofone nehmen Bässe schwach auf. Halt das Gerät nah an den Bass oder an den Verstärkerlautsprecher, mit cleanem Sound."],
        },
      ],
      faq: [
        { q: "Welche Töne haben die Basssaiten?", a: "In Standardstimmung: E1, A1, D2 und G2, von der 4. zur 1. Saite." },
        { q: "Kann ich einen Bass mit einem Gitarren-Stimmgerät stimmen?", a: "Der Bass hat dieselben Tonnamen wie die vier tiefen Gitarrensaiten, nur eine Oktave tiefer. Dieses Bass-Stimmgerät ist genau darauf eingestellt, das chromatische Stimmgerät funktioniert ebenfalls." },
        { q: "Warum ist das tiefe E schwer zu erkennen?", a: "Kleine Mikrofone nehmen sehr tiefe Frequenzen schwach auf. Kräftig zupfen, Gerät nah halten und den Ton ausklingen lassen." },
      ],
    },

    chromatic: {
      title: "Chromatisches Stimmgerät online – für jedes Instrument",
      description: "Kostenloses chromatisches Stimmgerät online: erkennt alle 12 Töne und zeigt die Abweichung in Cent. Für jedes Instrument und die Stimme. Kammerton 430–450 Hz.",
      blocks: [
        {
          h2: "Was ist ein chromatisches Stimmgerät?",
          p: [
            "Ein **chromatisches Stimmgerät** erkennt alle 12 Töne der Tonleiter, nicht nur die Saiten eines Instruments. Spiel einen beliebigen Ton, und es zeigt den nächsten Tonnamen, die Oktave und die Abweichung in Cent.",
            "Damit passt es für jedes Instrument: Mandoline, Banjo, Bratsche, Kalimba, Blasinstrumente, Ukulele mit tiefem G – und die Stimme.",
          ],
        },
        {
          h2: "Frequenzen der Töne (4. Oktave)",
          p: ["Referenzfrequenzen der 12 Töne rund um das mittlere C, mit A4 = 440 Hz:"],
          autoTable: "notes",
        },
        {
          h2: "Cent, Kammerton A4 und 432 Hz",
          p: [
            "Ein **Cent** ist 1/100 Halbton. Innerhalb von ±5 Cent zeigt das Stimmgerät Grün – kleinere Unterschiede hört kaum jemand.",
            "Der Kammerton A4 legt die Höhe aller Töne fest. Standard ist 440 Hz; unter **Mehr** stellst du 430 bis 450 Hz ein, auch 432 Hz oder die 442 Hz vieler Orchester.",
          ],
        },
      ],
      faq: [
        { q: "Was unterscheidet ein chromatisches Stimmgerät von einem Gitarren-Stimmgerät?", a: "Das Gitarren-Stimmgerät sucht nur die sechs Gitarrensaiten. Das chromatische erkennt jeden der 12 Töne und passt deshalb für jedes Instrument und jede Stimmung." },
        { q: "Kann ich damit meine Stimme stimmen?", a: "Ja. Sing einen gehaltenen Ton, und das Stimmgerät zeigt, welcher Ton es ist und wie nah du dran bist." },
        { q: "Wie stimme ich auf 432 Hz?", a: "Öffne Mehr und senk den Kammerton A4 auf 432 Hz. Alle Töne richten sich danach." },
      ],
    },

    metronome: {
      title: "Metronom online kostenlos – BPM, Tap Tempo & Taktarten",
      description: "Kostenloses Online-Metronom von 30 bis 300 BPM mit Tap Tempo, Betonungen, Taktarten (4/4, 3/4, 6/8) und Unterteilungen. Läuft im Browser, ohne App.",
      blocks: [
        {
          h2: "Kostenloses Online-Metronom",
          p: [
            "Dieses **Online-Metronom** gibt einen stabilen Puls von 30 bis 300 BPM vor, direkt im Browser, ohne Download. Stell das Tempo mit dem Schieberegler oder den − / + Tasten ein, drück **Play** und folge Klick, Pendel und den Lichtern für jeden Schlag.",
            "Schalte unter Mehr den **visuellen Blitz** ein, dann blinkt der Bildschirm bei jedem Schlag – zum Üben ohne Ton oder in lauter Umgebung. Die Klicks werden auf der Audiouhr des Geräts geplant, das Tempo schwankt also nicht.",
          ],
        },
        {
          h2: "Tap Tempo: BPM eines Songs herausfinden",
          p: ["Du kennst das Tempo nicht? Tippe ein paar Mal im Takt des Songs auf **Tap Tempo**, und das Metronom berechnet die BPM aus deinen Taps. Es mittelt die letzten fünf und beginnt nach zwei Sekunden Pause neu."],
        },
        {
          h2: "Taktarten und Betonungen",
          p: [
            "Wähle 2/4, 3/4, 4/4, 5/4, 6/8 oder 7/8. Der erste Schlag jedes Takts ist **betont**, damit du immer weißt, wo die „Eins“ ist – praktisch zum Walzerüben im 3/4-Takt. Im **6/8-Takt** sind Schlag 1 und 4 standardmäßig betont.",
            "Tippe auf ein Schlagfeld, um Betonungen hinzuzufügen oder zu entfernen und dein eigenes Muster zu bauen.",
          ],
        },
        {
          h2: "Tempobezeichnungen und BPM",
          p: ["Das Metronom zeigt die klassische Tempobezeichnung zum aktuellen Tempo:"],
          table: {
            head: ["Tempobezeichnung", "BPM", "Charakter"],
            rows: [
              ["Largo", "unter 60", "sehr langsam, breit"],
              ["Adagio", "60–75", "langsam"],
              ["Andante", "76–107", "gehend"],
              ["Moderato", "108–119", "mäßig"],
              ["Allegro", "120–167", "schnell, lebhaft"],
              ["Presto", "168–199", "sehr schnell"],
              ["Prestissimo", "ab 200", "so schnell wie möglich"],
            ],
          },
        },
        {
          h2: "Üben mit Metronom",
          list: [
            "Fang langsam an, bei **60–80 BPM**, für Tonleitern und neue Stücke.",
            "Klappt eine Stelle dreimal hintereinander sauber, erhöhe um 4–5 BPM.",
            "Nutze die **Unterteilungen** (1/8, Triole, 1/16) unter Mehr, um schnelle Noten zwischen den Schlägen zu platzieren.",
            "Prüfe vorher die Stimmung mit dem Werkzeug [Gitarre stimmen](guitar).",
          ],
        },
      ],
      faq: [
        { q: "Kann ich ein Metronom im Browser ohne App nutzen?", a: "Ja. Dieses Metronom läuft komplett im Browser, auf Handy, Tablet und Computer." },
        { q: "Wie stelle ich das Metronom auf 6/8?", a: "Wähle oben 6/8. Schlag 1 und 4 sind betont – die zwei Hauptpulse des 6/8-Takts. Tippe auf die Felder, um die Betonungen zu ändern." },
        { q: "Mit wie viel BPM sollte ein Anfänger Tonleitern üben?", a: "Fang bei 60–80 BPM an, spiel sauber und steigere dich in kleinen Schritten." },
        { q: "Ist ein Online-Metronom genau?", a: "Ja. Die Klicks werden im Voraus auf der Audiouhr des Geräts geplant, nicht mit normalen Timern, deshalb driftet das Tempo nicht." },
      ],
    },

    chords: {
      title: "Gitarrenakkorde & Klavierakkorde – Akkordtabelle mit Klang",
      description: "Kostenlose Akkordtabelle für Gitarre und Klavier. Grundton und Akkordtyp wählen, Griff ansehen, anhören, andere Griffe probieren und transponieren.",
      blocks: [
        {
          h2: "Akkordtabelle für Gitarre mit Griffbildern",
          p: ["Wähle **Grundton** und **Akkordtyp**, und diese **Akkordtabelle für Gitarre** zeichnet den Griff aufs Griffbrett: ✕ steht für eine Saite, die nicht klingt, ○ für eine Leersaite, und jeder Punkt zeigt den Ton unter deinem Finger (Grundton in Weiß). Mit den Pfeilen siehst du weitere Griffe, auch **Barré-Akkorde** weiter oben am Hals, und **Spielen** lässt den Akkord erklingen."],
        },
        {
          h2: "Klavierakkorde auf der Tastatur",
          p: ["Wechsle zu **Klavier**, um den Akkord auf den Tasten zu sehen, alle Akkordtöne markiert und beschriftet. Die Pfeile gehen durch die **Umkehrungen** – dieselben Töne in anderer Reihenfolge, für weichere Akkordwechsel."],
        },
        {
          h2: "Akkordtypen erklärt",
          table: {
            head: ["Akkordtyp", "Töne (vom Grundton)", "Beispiel in C"],
            rows: [
              ["Dur", "1 – 3 – 5", "C E G"],
              ["Moll", "1 – ♭3 – 5", "C Es G"],
              ["7 (Dominantseptakkord)", "1 – 3 – 5 – ♭7", "C E G B"],
              ["maj7", "1 – 3 – 5 – 7", "C E G H"],
              ["m7", "1 – ♭3 – 5 – ♭7", "C Es G B"],
              ["sus2", "1 – 2 – 5", "C D G"],
              ["sus4", "1 – 4 – 5", "C F G"],
              ["dim", "1 – ♭3 – ♭5", "C Es Ges"],
              ["aug", "1 – 3 – ♯5", "C E Gis"],
            ],
          },
        },
        {
          h2: "Gitarrenakkorde für Anfänger",
          p: ["Die meisten Songs kommen mit wenigen **Gitarrengriffen für Anfänger** aus: C, G, D, A, E, Am, Em und Dm. Lerne zuerst diese offenen Griffe, dann Barré-Akkorde wie F und Hm. Üb die Wechsel im Takt mit dem [Metronom](metronome) und halt die Gitarre gestimmt mit [Gitarre stimmen](guitar)."],
        },
        {
          h2: "Akkorde transponieren",
          p: ["Mit **−1** und **+1** verschiebst du den Akkord einen Halbton nach unten oder oben – so kannst du **Akkorde transponieren** und eine Tonart finden, die zu deiner Stimme passt. Unter Mehr wechselst du die Notennamen zwischen C D E H, C D E und Do Re Mi."],
        },
      ],
      faq: [
        { q: "Wie liest man ein Gitarren-Griffbild?", a: "Senkrechte Linien sind die Saiten (tiefes E links), waagerechte die Bünde. Punkte zeigen, wo du greifst, ✕ heißt nicht anschlagen und ○ Leersaite. Eine Angabe wie „5fr“ zeigt, in welchem Bund das Griffbild beginnt." },
        { q: "Wie greift man h-Moll (Hm) auf der Gitarre?", a: "Das übliche Hm ist ein Barré im 2. Bund: tiefe E-Saite nicht anschlagen, x-2-4-4-3-2. Wähle hier H und Moll, um es zu sehen, und die Pfeile für einen anderen Griff." },
        { q: "Was ist ein Barré-Akkord?", a: "Ein Griff, bei dem ein Finger mehrere Saiten im selben Bund drückt – wie ein verschiebbarer Sattel. Damit spielst du dieselbe Form in jeder Tonart." },
        { q: "Welche Töne hat ein C-Dur-Akkord?", a: "C, E und G – Grundton, große Terz und reine Quinte." },
      ],
    },
  },
};
