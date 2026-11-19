import type { SeoContent } from "./types";

/* Textos SEO en español. Mismo contenido que la versión inglesa, con notas Do Re Mi. */
export const es: SeoContent = {
  labels: { faq: "Preguntas frecuentes", string: "Cuerda", note: "Nota", frequency: "Frecuencia", tuning: "Afinación", notes: "Cuerdas (6 → 1)" },
  pages: {
    home: {
      title: "WowGuitar – Afinador Online, Metrónomo y Acordes Gratis",
      description: "Herramientas musicales gratis que funcionan al instante: afinador de guitarra, ukelele, violín, violonchelo y bajo, metrónomo online y acordes de guitarra y piano.",
      blocks: [
        {
          h2: "Herramientas musicales online gratis, sin app ni registro",
          p: [
            "WowGuitar es un conjunto de herramientas sencillas y gratuitas para músicos que funcionan directamente en el navegador. Abres la página y ya está lista: sin descargas, sin cuenta. Cada pantalla hace una sola cosa, con controles grandes para usar con el instrumento en las manos.",
            "El audio del micrófono se analiza en tu propio dispositivo y nunca se sube a internet. Después de la primera visita las herramientas siguen funcionando sin conexión, así que el afinador y el metrónomo te acompañan al ensayo.",
          ],
        },
        {
          h2: "Afinador de guitarra online",
          p: [
            "Afina con el [afinador de guitarra online](guitar) gratis: toca una cuerda y el afinador te dice si está alta o baja – afinación estándar, Drop D, Open G y más. También hay [afinador de ukelele](ukulele), [afinador de violín](violin), [afinador de cello](cello), [afinador de bajo](bass) y [afinador cromático](chromatic).",
          ],
        },
        {
          h2: "Metrónomo online",
          p: [
            "El [metrónomo online](metronome) marca el pulso de 30 a 300 BPM con acentos y compases. Marca el tempo (BPM tap) junto a una canción para saber sus BPM.",
          ],
        },
        {
          h2: "Acordes de guitarra y piano",
          p: [
            "Busca cualquier acorde en la [tabla de acordes de guitarra](chords): mira la posición, escúchalo, prueba otras formas y transporta – también acordes de piano.",
          ],
        },
        {
          h2: "Qué puedes hacer aquí",
          list: [
            "**Afinar tu instrumento** con el [afinador de guitarra](guitar), el [afinador de ukelele](ukulele), el [afinador de violín](violin), el [afinador de violonchelo](cello) y el [afinador de bajo](bass), o cualquier otro con el [afinador cromático](chromatic).",
            "**Llevar el tempo** con el [metrónomo online](metronome): de 30 a 300 BPM, marcar tempo, acentos, compases y subdivisiones.",
            "**Consultar acordes** en la [tabla de acordes de guitarra y piano](chords): posiciones, sonido y transposición.",
          ],
        },
      ],
      faq: [
        { q: "¿Las herramientas son realmente gratis?", a: "Sí. Todas son gratuitas, sin registro ni descargas. Todo funciona en el navegador." },
        { q: "¿Necesito instalar una app para afinar la guitarra?", a: "No. Abre el afinador de guitarra, pulsa «Toca para afinar» y permite el micrófono. Funciona en móvil, tableta y ordenador." },
        { q: "¿Se graba o se envía el audio del micrófono?", a: "No. El afinador analiza el sonido en tu dispositivo en tiempo real y no se envía nada a ningún servidor." },
      ],
    },

    guitar: {
      title: "Afinador de Guitarra Online Gratis – Con Micrófono",
      description: "Afinador de guitarra online y gratis con micrófono. Afina guitarra acústica o eléctrica en afinación estándar, Drop D, Open G, DADGAD o medio tono abajo.",
      blocks: [
        {
          h2: "Afinador de guitarra online gratis",
          p: [
            "Este **afinador de guitarra** funciona directamente en el navegador, sin app y sin cuenta. Pulsa **Toca para afinar**, permite el micrófono y toca una cuerda. El afinador reconoce la nota, elige la cuerda más cercana y muestra cuántos cents está grave o aguda. Cuando las barras del centro se ponen verdes, estás a menos de 5 cents: afinado para el oído.",
            "Sirve como **afinador de guitarra acústica** con el micrófono del móvil o del portátil, y también para **guitarra eléctrica**: tócala desenchufada cerca del micrófono o acerca el dispositivo al amplificador con sonido limpio. El audio se analiza en tu dispositivo y nunca sale de él.",
          ],
        },
        {
          h2: "Afinación estándar de la guitarra: notas y frecuencias",
          p: ["La afinación estándar de la guitarra es **Mi La Re Sol Si Mi** (E A D G B E), de la cuerda más gruesa (6.ª) a la más fina (1.ª)."],
          autoTable: "tuning",
          after: ["Frecuencias con La4 = 440 Hz, el diapasón estándar."],
        },
        {
          h2: "Cómo afinar una guitarra paso a paso",
          ordered: true,
          list: [
            "Empieza por la 6.ª cuerda (Mi grave). Tócala al aire y déjala sonar.",
            "Si aparece **Sube**, la cuerda está grave: apriétala girando la clavija despacio. Si aparece **Baja**, aflójala.",
            "Afina desde un poco por debajo de la nota hacia arriba: así la cuerda mantiene mejor la afinación.",
            "Cuando las barras se pongan verdes y la cuerda reciba un ✓, pasa a la siguiente. Repite con las seis.",
            "Haz una segunda pasada rápida: al tensar una cuerda cambia la tensión del mástil.",
          ],
        },
        {
          h2: "Afinaciones alternativas: Drop D, Open G, DADGAD y medio tono abajo",
          p: ["Elige la afinación en el menú **Afinación** y los botones de las cuerdas cambian."],
          autoTable: "alternates",
          after: [
            "**Drop D** baja solo la 6.ª cuerda un tono, ideal para riffs pesados y power chords con un dedo. **Open G** forma un acorde de Sol mayor con las cuerdas al aire, muy usado en slide y blues. **DADGAD** tiene un sonido abierto, típico del folk y la música celta. **Medio tono abajo** baja todas las cuerdas un semitono para bends más fáciles.",
          ],
        },
        {
          h2: "Afinar de oído con tonos de referencia",
          p: [
            "¿Sin micrófono o en un lugar ruidoso? Toca el botón de cualquier cuerda para oír su nota de referencia y afina de oído. En **Más** puedes cambiar la referencia del La4 (440 Hz por defecto), útil si tocas con un piano o una banda en 442 o 432 Hz.",
            "Ya afinado, practica a tempo con el [metrónomo online](metronome) o busca posiciones en la [tabla de acordes](chords).",
          ],
        },
      ],
      faq: [
        { q: "¿Es preciso un afinador de guitarra online?", a: "Sí. Usa el método McLeod de detección de tono, que mide la nota con una precisión de un cent aproximadamente, y se pone verde dentro de ±5 cents, más fino de lo que distingue el oído. Afina en un sitio tranquilo y una cuerda cada vez." },
        { q: "¿Puedo afinar la guitarra sin afinador de pinza?", a: "Sí. Basta con cualquier móvil u ordenador con micrófono: abre esta página, pulsa «Toca para afinar» y toca cada cuerda. Sin micrófono, toca el botón de la cuerda y afina de oído." },
        { q: "¿Cuáles son las notas de las cuerdas de la guitarra?", a: "En afinación estándar, de la 6.ª a la 1.ª: Mi2, La2, Re3, Sol3, Si3 y Mi4 (E2, A2, D3, G3, B3, E4)." },
        { q: "¿Sirve para guitarra eléctrica?", a: "Sí. Tócala desenchufada cerca del micrófono o acerca el dispositivo al amplificador con sonido limpio. La distorsión dificulta la lectura." },
        { q: "¿Por qué se desafina mi guitarra?", a: "Las cuerdas nuevas se estiran los primeros días, y los cambios de temperatura y humedad mueven la madera. Afinar antes de tocar lleva menos de un minuto." },
      ],
    },

    ukulele: {
      title: "Afinador de Ukelele Online Gratis – Sol Do Mi La",
      description: "Afina tu ukelele online con el micrófono o de oído. Afinación estándar Sol Do Mi La (G C E A) para ukelele soprano, concierto y tenor. Gratis, sin app.",
      blocks: [
        {
          h2: "Afinador de ukelele online gratis",
          p: [
            "Afina tu ukelele en segundos con este **afinador de ukelele online**. Pulsa **Toca para afinar**, permite el micrófono y toca una cuerda: el afinador encuentra la cuerda más cercana y muestra si está grave o aguda. Verde significa afinado.",
            "Sirve para ukelele **soprano, concierto y tenor**, que usan la misma afinación estándar. ¿Prefieres afinar de oído? Toca el botón de cada cuerda para oír su nota.",
          ],
        },
        {
          h2: "Afinación estándar del ukelele: Sol Do Mi La",
          p: ["La afinación estándar del ukelele es **Sol Do Mi La** (G C E A), de la 4.ª cuerda (la más cercana a la barbilla) a la 1.ª. En la mayoría de los ukeleles el Sol es **agudo**: la 4.ª cuerda suena más alta que la 3.ª, lo que da su sonido brillante."],
          autoTable: "tuning",
        },
        {
          h2: "Cómo afinar un ukulele (ukelele)",
          ordered: true,
          list: [
            "Pulsa **Toca para afinar** y permite el micrófono.",
            "Toca la 4.ª cuerda (Sol) y déjala sonar.",
            "Gira la clavija hasta que las barras se pongan verdes: aprieta si dice Sube, afloja si dice Baja.",
            "Repite con Do, Mi y La. Cada cuerda afinada recibe un ✓.",
          ],
          after: ["Las cuerdas de nailon nuevas se estiran mucho: los primeros días es normal tener que afinar cada vez que tocas."],
        },
        {
          h2: "¿Sol agudo o Sol grave?",
          p: ["Algunos músicos usan la 4.ª cuerda en **Sol grave** (una octava más abajo) para un sonido más lleno. Este afinador está en Sol agudo; si tu ukelele lleva Sol grave, usa el [afinador cromático](chromatic)."],
        },
      ],
      faq: [
        { q: "¿Cuáles son las notas de las cuerdas del ukelele?", a: "En afinación estándar: Sol4, Do4, Mi4 y La4 (G4, C4, E4, A4), de la 4.ª a la 1.ª cuerda." },
        { q: "¿Puedo afinar el ukelele con el móvil?", a: "Sí. Abre esta página en el móvil, pulsa «Toca para afinar», permite el micrófono y toca cada cuerda." },
        { q: "¿Sirve para ukelele barítono?", a: "El ukelele barítono se afina Re Sol Si Mi, como las cuatro primeras cuerdas de la guitarra. Usa el afinador cromático o las cuatro cuerdas agudas del afinador de guitarra." },
        { q: "¿Por qué mi ukelele nuevo se desafina tanto?", a: "Las cuerdas de nailon se siguen estirando durante la primera semana. Afina a menudo y se estabilizarán." },
      ],
    },

    violin: {
      title: "Afinador de Violín Online Gratis – Sol Re La Mi",
      description: "Afinador de violín online y gratis. Afina Sol Re La Mi con el micrófono o de oído con tonos de referencia, y ajusta el La4 a 440 o 442 Hz. Sin app.",
      blocks: [
        {
          h2: "Afinador de violín online gratis",
          p: [
            "Este **afinador de violín** escucha por el micrófono y muestra la nota y cuánto le falta para estar afinada. Pulsa **Toca para afinar**, pasa el arco (o pulsa) una cuerda y ajusta hasta que las barras del centro se pongan verdes.",
            "Cada botón de cuerda reproduce además un **tono de referencia** claro, para afinar el violín de oído cuando no puedes usar el micrófono.",
          ],
        },
        {
          h2: "Notas de las cuerdas del violín: Sol Re La Mi",
          p: ["El violín se afina por quintas: **Sol Re La Mi** (G D A E), de la cuerda más grave (4.ª) a la más aguda (1.ª)."],
          autoTable: "tuning",
        },
        {
          h2: "Cómo afinar un violín",
          ordered: true,
          list: [
            "Empieza por la cuerda **La**: es la nota con la que afina la orquesta.",
            "Pasa el arco de forma uniforme cerca del micrófono y mira el medidor.",
            "Usa los **afinadores finos** del cordal para ajustes pequeños y las **clavijas** solo para cambios grandes, empujándolas un poco para que no se suelten.",
            "Afina Re, Sol y Mi igual y vuelve a comprobar el La.",
          ],
        },
        {
          h2: "Afinar a 440 o 442 Hz",
          p: ["La mayoría de la música usa La4 = 440 Hz, pero muchas orquestas afinan algo más alto, a 442 Hz. Abre **Más** y ajusta la referencia del La4 entre 430 y 450 Hz."],
        },
      ],
      faq: [
        { q: "¿Puedo afinar el violín con el móvil?", a: "Sí. El micrófono del móvil es suficiente: abre esta página, pulsa «Toca para afinar» y toca cada cuerda. También puedes reproducir los tonos de referencia por el altavoz y afinar de oído." },
        { q: "¿Qué cuerda del violín se afina primero?", a: "La cuerda La, y después Re, Sol y Mi." },
        { q: "¿Sirve como afinador de viola?", a: "La viola se afina Do Sol Re La. Usa el afinador cromático, que lee cualquier nota." },
        { q: "¿Por qué se desafina mi violín?", a: "Las clavijas pueden resbalar, y los cambios de humedad y temperatura mueven cuerdas y madera. Comprueba la afinación cada vez que toques." },
      ],
    },

    cello: {
      title: "Afinador de Cello Online Gratis – Violonchelo Do Sol Re La",
      description: "Afinador de cello (violonchelo) online y gratis. Afina Do Sol Re La (C G D A) con el micrófono o de oído con tonos de referencia. Funciona en el navegador.",
      blocks: [
        {
          h2: "Afinador de cello (violonchelo) online gratis",
          p: ["Afina tu violonchelo con este **afinador de violonchelo** gratuito, sin app. Pulsa **Toca para afinar**, pasa el arco de forma continua por una cuerda y gira hasta que las barras se pongan verdes. Cada botón reproduce también la nota de referencia para afinar de oído."],
        },
        {
          h2: "Notas de las cuerdas del violonchelo: Do Sol Re La",
          p: ["El violonchelo se afina por quintas, una octava por debajo de la viola: **Do Sol Re La** (C G D A), de la cuerda más grave a la más aguda."],
          autoTable: "tuning",
        },
        {
          h2: "Cómo afinar un violonchelo",
          ordered: true,
          list: [
            "Empieza por la cuerda **La** y después afina Re, Sol y Do.",
            "Usa arcadas largas y regulares: un sonido estable da una lectura estable, sobre todo en el Do grave.",
            "Afinadores finos para ajustes pequeños, clavijas para los grandes.",
            "Comprueba el La al final: tensar las otras cuerdas puede moverlo.",
          ],
          after: ["Los micrófonos de los móviles captan peor los graves: mantén el dispositivo cerca del instrumento."],
        },
      ],
      faq: [
        { q: "¿Cuáles son las notas de las cuerdas del violonchelo?", a: "Do2, Sol2, Re3 y La3 (C2, G2, D3, A3), de la más grave a la más aguda." },
        { q: "¿Puedo afinar el violonchelo con el móvil?", a: "Sí. Permite el micrófono y toca cada cuerda cerca del móvil." },
        { q: "¿A qué La afino, 440 o 442 Hz?", a: "Usa 440 Hz salvo que tu orquesta o profesor pida otra cosa. Puedes cambiar la referencia del La4 en Más." },
      ],
    },

    bass: {
      title: "Afinador de Bajo Online Gratis – Mi La Re Sol",
      description: "Afinador de bajo online y gratis para bajo de 4 cuerdas. Afina Mi La Re Sol (E A D G) con el micrófono o de oído. Funciona en el navegador, sin app.",
      blocks: [
        {
          h2: "Afinador de bajo online gratis con micrófono",
          p: ["Este **afinador de bajo** afina un bajo de 4 cuerdas en afinación estándar. Pulsa **Toca para afinar**, toca una cuerda y gira la clavija hasta que las barras se pongan verdes. Sirve para bajo eléctrico y acústico."],
        },
        {
          h2: "Afinación estándar del bajo: Mi La Re Sol",
          p: ["El bajo de 4 cuerdas se afina **Mi La Re Sol** (E A D G): las mismas notas que las cuatro cuerdas más graves de la guitarra, una octava más abajo."],
          autoTable: "tuning",
        },
        {
          h2: "Cómo afinar un bajo",
          ordered: true,
          list: [
            "Empieza por la 4.ª cuerda (Mi grave).",
            "Púlsala con firmeza y deja que suene: las notas graves tardan un momento en estabilizarse.",
            "Aprieta si dice Sube, afloja si dice Baja, hasta que las barras se pongan verdes.",
            "Repite con La, Re y Sol y vuelve a comprobar el Mi.",
          ],
          after: ["Los micrófonos de móviles y portátiles captan poco los graves. Acerca el dispositivo al bajo o al altavoz del amplificador con sonido limpio."],
        },
      ],
      faq: [
        { q: "¿Cuáles son las notas de las cuerdas del bajo?", a: "En afinación estándar: Mi1, La1, Re2 y Sol2 (E1, A1, D2, G2), de la 4.ª a la 1.ª cuerda." },
        { q: "¿Puedo afinar el bajo con un afinador de guitarra?", a: "El bajo usa las mismas notas que las cuatro cuerdas graves de la guitarra, una octava más abajo. Este afinador de bajo está preparado para ellas, y el afinador cromático también sirve." },
        { q: "¿Sirve como afinador de bajo de 5 cuerdas?",
          a: "Este afinador de bajo está ajustado para bajo de 4 cuerdas: Mi La Re Sol. En un bajo de 5 cuerdas esas cuatro cuerdas se afinan igual; la cuerda Si grave no está en la lista.",
        },
        {
          q: "¿Por qué cuesta leer el Mi grave?", a: "Los micrófonos pequeños captan mal las frecuencias muy graves. Pulsa con firmeza, acerca el dispositivo y deja sonar la nota." },
      ],
    },

    chromatic: {
      title: "Afinador Cromático Online Gratis – Para Cualquier Instrumento",
      description: "Afinador cromático online y gratis: lee las 12 notas y muestra cuántos cents estás grave o agudo. Para cualquier instrumento o la voz. La4 ajustable.",
      blocks: [
        {
          h2: "¿Qué es un afinador cromático?",
          p: [
            "Un **afinador cromático** reconoce las 12 notas de la escala, no solo las cuerdas de un instrumento. Toca cualquier nota y muestra el nombre de la nota más cercana, su octava y cuántos cents estás grave o agudo.",
            "Por eso sirve para cualquier instrumento: mandolina, banjo, viola, kalimba, instrumentos de viento, ukelele con Sol grave o tu voz.",
          ],
        },
        {
          h2: "Frecuencia de las notas (octava 4)",
          p: ["Frecuencias de referencia de las 12 notas alrededor del Do central, con La4 = 440 Hz:"],
          autoTable: "notes",
        },
        {
          h2: "Cents, La4 y 432 Hz",
          p: [
            "Un **cent** es 1/100 de semitono. Dentro de ±5 cents el afinador se pone verde: casi nadie percibe diferencias menores.",
            "La referencia del La4 fija la altura de todas las notas. Por defecto es 440 Hz; en **Más** puedes poner de 430 a 450 Hz, incluidos 432 Hz o los 442 Hz de muchas orquestas.",
          ],
        },
      ],
      faq: [
        { q: "¿Qué diferencia hay entre un afinador cromático y uno de guitarra?", a: "El de guitarra solo busca las seis cuerdas de la guitarra. El cromático lee cualquiera de las 12 notas, así que sirve para cualquier instrumento y afinación." },
        { q: "¿Puedo usarlo para afinar la voz?", a: "Sí. Canta una nota estable y el afinador muestra qué nota es y lo cerca que estás." },
        { q: "¿Cómo afino a 432 Hz?", a: "Abre Más y baja la referencia del La4 a 432 Hz. Todas las notas siguen esa referencia." },
      ],
    },

    metronome: {
      title: "Metrónomo Online Gratis – BPM, Marcar Tempo y Compases",
      description: "Metrónomo online gratis de 30 a 300 BPM con marcar tempo, acentos, compases (4/4, 3/4, 6/8) y subdivisiones. Funciona en el navegador, sin app.",
      blocks: [
        {
          h2: "Metrónomo online gratis: metrónomo con BPM",
          p: [
            "Este **metrónomo online** marca un pulso firme de 30 a 300 BPM, directamente en el navegador, sin descargar nada. Ajusta el tempo con el control deslizante o los botones − / +, pulsa **Play** y sigue el clic, el péndulo y las luces de cada tiempo.",
            "Activa el **destello visual** en Más y la pantalla destella en cada tiempo, para tocar con el sonido apagado o en un sitio ruidoso. Los clics se programan en el reloj de audio del dispositivo, así que el tempo no se mueve.",
          ],
        },
        {
          h2: "Marcar tempo (BPM tap): averigua los BPM de una canción",
          p: ["¿No sabes el tempo? Pulsa **Marcar tempo** al ritmo de la canción unas cuantas veces y el metrónomo calcula los BPM a partir de tus toques. Promedia los últimos cinco y vuelve a empezar si paras dos segundos."],
        },
        {
          h2: "Compases y acentos",
          p: [
            "Elige 2/4, 3/4, 4/4, 5/4, 6/8 o 7/8. El primer tiempo de cada compás va **acentuado** para que siempre sepas dónde está el «uno», muy útil para practicar valses en 3/4. En **6/8** se acentúan por defecto los tiempos 1 y 4.",
            "Toca cualquier casilla de tiempo para añadir o quitar acentos y crear tu propio patrón.",
          ],
        },
        {
          h2: "Indicaciones de tempo y BPM",
          p: ["El metrónomo muestra la indicación clásica del tempo actual:"],
          table: {
            head: ["Indicación", "BPM", "Carácter"],
            rows: [
              ["Largo", "menos de 60", "muy lento, amplio"],
              ["Adagio", "60–75", "lento"],
              ["Andante", "76–107", "al paso"],
              ["Moderato", "108–119", "moderado"],
              ["Allegro", "120–167", "rápido, alegre"],
              ["Presto", "168–199", "muy rápido"],
              ["Prestissimo", "200 o más", "lo más rápido posible"],
            ],
          },
        },
        {
          h2: "Cómo practicar con metrónomo",
          list: [
            "Empieza despacio, entre **60 y 80 BPM**, para escalas y piezas nuevas.",
            "Cuando toques un pasaje limpio tres veces seguidas, sube 4 o 5 BPM.",
            "Usa las **subdivisiones** (1/8, tresillo, 1/16) en Más para encajar notas rápidas entre los tiempos.",
            "Antes de empezar, comprueba la afinación con el [afinador de guitarra](guitar).",
          ],
        },
      ],
      faq: [
        { q: "¿Puedo usar un metrónomo en el navegador sin app?", a: "Sí. Este metrónomo funciona por completo en el navegador, en móvil, tableta y ordenador." },
        { q: "¿Cómo pongo el metrónomo en 6/8?", a: "Elige 6/8 arriba. Se acentúan los tiempos 1 y 4, los dos pulsos del 6/8. Toca las casillas para cambiar los acentos." },
        { q: "¿A cuántos BPM debe practicar escalas un principiante?", a: "Empieza entre 60 y 80 BPM, toca limpio y sube unos pocos BPM cada vez." },
        { q: "¿Es preciso un metrónomo online?", a: "Sí. Los clics se programan por adelantado en el reloj de audio del dispositivo, no con temporizadores normales, así que el tempo no se desvía." },
      ],
    },

    chords: {
      title: "Acordes de Guitarra y Piano – Diccionario con Sonido",
      description: "Diccionario de acordes de guitarra y piano gratis. Elige nota y tipo de acorde para ver la posición, oírlo, probar otras formas y transponer.",
      blocks: [
        {
          h2: "Acordes de guitarra: tabla de acordes con posiciones",
          p: ["Elige una **nota fundamental** y un **tipo de acorde** y esta **tabla de acordes de guitarra** dibuja la posición en el mástil: ✕ marca una cuerda que no se toca, ○ una cuerda al aire, y cada punto muestra la nota bajo tu dedo (la fundamental en blanco). Usa las flechas para ver otras formas, incluidas las **cejillas** más arriba en el mástil, y pulsa **Tocar** para oírlo."],
        },
        {
          h2: "Acordes de piano en el teclado: diccionario de acordes",
          p: ["Cambia a **Piano** para ver el acorde en las teclas, con todas sus notas resaltadas y con nombre. Las flechas recorren las **inversiones**: las mismas notas en otro orden, que suavizan el paso entre acordes."],
        },
        {
          h2: "Tipos de acorde",
          table: {
            head: ["Tipo", "Notas (desde la fundamental)", "Ejemplo en Do"],
            rows: [
              ["Mayor", "1 – 3 – 5", "Do Mi Sol"],
              ["Menor", "1 – ♭3 – 5", "Do Mi♭ Sol"],
              ["7 (dominante)", "1 – 3 – 5 – ♭7", "Do Mi Sol Si♭"],
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
          h2: "Acordes de guitarra para principiantes",
          p: ["La mayoría de las canciones usan pocos **acordes básicos de guitarra**: Do (C), Sol (G), Re (D), La (A), Mi (E), La menor (Am), Mi menor (Em) y Re menor (Dm). Aprende primero esas formas abiertas y después pasa a cejillas como Fa (F) y Si menor (Bm). Practica los cambios con el [metrónomo](metronome) y mantén la guitarra afinada con el [afinador de guitarra](guitar)."],
        },
        {
          h2: "Transponer acordes",
          p: ["Usa **−1** y **+1** para bajar o subir el acorde un semitono: una forma rápida de **transponer acordes** a un tono cómodo para tu voz. En Más puedes cambiar los nombres de las notas entre Do Re Mi, C D E y la notación alemana (H)."],
        },
      ],
      faq: [
        { q: "¿Cómo se lee un diagrama de acordes de guitarra?", a: "Las líneas verticales son las cuerdas (Mi grave a la izquierda) y las horizontales, los trastes. Los puntos indican dónde pisar, ✕ es una cuerda que no se toca y ○ una cuerda al aire. Una etiqueta como «5fr» indica en qué traste empieza el diagrama." },
        { q: "¿Cómo se toca el acorde Si menor (Bm) en guitarra?", a: "El Bm más habitual es con cejilla en el 2.º traste: no toques el Mi grave y haz x-2-4-4-3-2. Elige Si y Menor aquí para verlo y usa las flechas para otra forma." },
        { q: "¿Qué es una cejilla?", a: "Un acorde en el que un dedo pisa varias cuerdas en el mismo traste, como una cejuela móvil. Permite tocar la misma forma en cualquier tono." },
        { q: "¿Qué notas forman el acorde de Do mayor?", a: "Do, Mi y Sol: la fundamental, la tercera mayor y la quinta justa." },
      ],
    },
  },
};
