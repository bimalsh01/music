import type { SeoContent } from "./types";

/* Textes SEO en français. Même contenu que la version anglaise, notes Do Ré Mi. */
export const fr: SeoContent = {
  labels: { faq: "Questions fréquentes", string: "Corde", note: "Note", frequency: "Fréquence", tuning: "Accordage", notes: "Cordes (6 → 1)" },
  pages: {
    home: {
      title: "WowGuitar – Accordeur en Ligne, Métronome et Accords Gratuits",
      description: "Outils de musique gratuits et immédiats : accordeur guitare, ukulélé, violon, violoncelle et basse, métronome en ligne avec tap tempo, accords guitare et piano.",
      blocks: [
        {
          h2: "Des outils de musique en ligne gratuits, sans appli ni inscription",
          p: [
            "WowGuitar regroupe des outils simples et gratuits pour les musiciens, directement dans le navigateur. Ouvrez la page, c’est prêt : rien à télécharger, pas de compte. Chaque écran fait une seule chose, avec de grandes commandes utilisables l’instrument en main.",
            "Le son du micro est analysé sur votre appareil et n’est jamais envoyé sur internet. Après la première visite, les outils fonctionnent même hors connexion : l’accordeur et le métronome vous suivent en répétition.",
          ],
        },
        {
          h2: "Accordeur guitare en ligne",
          p: [
            "Accordez avec l’[accordeur guitare en ligne](guitar) gratuit : jouez une corde, l’accordeur la reconnaît et indique si elle est trop haute ou trop basse – accordage standard, Drop D, Open G et plus. Il y a aussi un [accordeur ukulélé](ukulele), un [accordeur violon](violin), un [accordeur violoncelle](cello), un [accordeur basse](bass) et un [accordeur chromatique](chromatic).",
          ],
        },
        {
          h2: "Métronome en ligne",
          p: [
            "Le [métronome en ligne](metronome) donne un clic régulier de 30 à 300 BPM avec accents et mesures. Le tap tempo trouve le BPM d’un morceau.",
          ],
        },
        {
          h2: "Accords guitare et piano",
          p: [
            "Cherchez un accord dans le [tableau d’accords guitare](chords) : doigté, son, autres positions et transposition – avec les accords piano sur le clavier.",
          ],
        },
        {
          h2: "Ce que vous pouvez faire ici",
          list: [
            "**Accorder votre instrument** avec l’[accordeur guitare](guitar), l’[accordeur ukulélé](ukulele), l’[accordeur violon](violin), l’[accordeur violoncelle](cello) et l’[accordeur basse](bass), ou n’importe quel autre avec l’[accordeur chromatique](chromatic).",
            "**Garder le tempo** avec le [métronome en ligne](metronome) : de 30 à 300 BPM, tap tempo, accents, mesures et subdivisions.",
            "**Trouver des accords** dans le [dictionnaire d’accords guitare et piano](chords) : doigtés, son et transposition.",
          ],
        },
      ],
      faq: [
        { q: "Ces outils sont-ils vraiment gratuits ?", a: "Oui. Tous les outils sont gratuits, sans inscription ni téléchargement. Tout fonctionne dans le navigateur." },
        { q: "Faut-il installer une appli pour accorder sa guitare ?", a: "Non. Ouvrez l’accordeur guitare, touchez « Touchez pour accorder » et autorisez le micro. Ça marche sur téléphone, tablette et ordinateur." },
        { q: "Le son du micro est-il enregistré ou envoyé ?", a: "Non. L’accordeur analyse le son sur votre appareil, en temps réel, et rien n’est envoyé à un serveur." },
      ],
    },

    guitar: {
      title: "Accordeur Guitare en Ligne Gratuit – avec Micro",
      description: "Accordeur guitare en ligne gratuit avec le micro. Accordez une guitare acoustique ou électrique en standard, Drop D, Open G, DADGAD ou un demi-ton plus bas.",
      blocks: [
        {
          h2: "Accordeur guitare en ligne gratuit",
          p: [
            "Cet **accordeur guitare** fonctionne directement dans le navigateur, sans appli et sans compte. Touchez **Touchez pour accorder**, autorisez le micro et jouez une corde. L’accordeur reconnaît la note, choisit la corde la plus proche et indique de combien de cents elle est trop grave ou trop aiguë. Quand les barres du centre passent au vert, vous êtes à moins de 5 cents : juste pour l’oreille.",
            "Il sert d’**accordeur pour guitare acoustique** avec le micro du téléphone ou de l’ordinateur, et aussi pour **guitare électrique** : jouez-la débranchée près du micro ou approchez l’appareil de l’ampli avec un son clair. Le son est analysé sur votre appareil et n’en sort jamais.",
          ],
        },
        {
          h2: "Accordage standard de la guitare : notes et fréquences",
          p: ["L’accordage standard de la guitare est **Mi La Ré Sol Si Mi** (E A D G B E), de la corde la plus grosse (6e) à la plus fine (1re)."],
          autoTable: "tuning",
          after: ["Fréquences pour La4 = 440 Hz, le diapason standard."],
        },
        {
          h2: "Accorder la guitare : comment accorder une guitare, étape par étape",
          ordered: true,
          list: [
            "Commencez par la 6e corde (Mi grave). Jouez-la à vide et laissez-la sonner.",
            "Si l’écran affiche **Montez**, la corde est trop grave : tendez-la en tournant doucement la mécanique. S’il affiche **Descendez**, détendez-la.",
            "Accordez en partant un peu en dessous de la note pour remonter : la corde tient mieux l’accord.",
            "Quand les barres passent au vert et que la corde reçoit un ✓, passez à la suivante. Recommencez pour les six cordes.",
            "Faites un deuxième tour rapide : tendre une corde modifie la tension du manche.",
          ],
        },
        {
          h2: "Accordages alternatifs : Drop D, Open G, DADGAD et un demi-ton plus bas",
          p: ["Choisissez l’accordage dans le menu **Accordage** et les boutons des cordes changent."],
          autoTable: "alternates",
          after: ["**Drop D** baisse seulement la 6e corde d’un ton, idéal pour les riffs lourds et les power chords à un doigt. **Open G** donne un accord de Sol majeur à vide, très utilisé en slide et en blues. **DADGAD** a un son ouvert et modal, typique du folk et de la musique celtique. **Un demi-ton plus bas** descend toutes les cordes d’un demi-ton pour des bends plus faciles."],
        },
        {
          h2: "Accorder à l’oreille avec les sons de référence",
          p: [
            "Pas de micro, ou trop de bruit ? Touchez le bouton d’une corde pour entendre sa note de référence et accordez à l’oreille. Dans **Plus**, vous pouvez changer le diapason La4 (440 Hz par défaut), pratique avec un piano ou un groupe accordé à 442 ou 432 Hz.",
            "Une fois accordé, travaillez en rythme avec le [métronome en ligne](metronome) ou cherchez des doigtés dans le [dictionnaire d’accords](chords).",
          ],
        },
      ],
      faq: [
        { q: "Un accordeur guitare en ligne est-il précis ?", a: "Oui. Il utilise la méthode de détection de hauteur McLeod, précise à environ un cent près, et passe au vert à ±5 cents, plus fin que ce que l’oreille perçoit. Accordez dans un endroit calme, une corde à la fois." },
        { q: "Peut-on accorder une guitare sans accordeur à pince ?", a: "Oui. N’importe quel téléphone ou ordinateur avec micro suffit : ouvrez cette page, touchez « Touchez pour accorder » et jouez chaque corde. Sans micro, touchez le bouton de la corde et accordez à l’oreille." },
        { q: "Quelles sont les notes des cordes de guitare ?", a: "En accordage standard, de la 6e à la 1re corde : Mi2, La2, Ré3, Sol3, Si3 et Mi4 (E2, A2, D3, G3, B3, E4)." },
        { q: "Ça marche pour une guitare électrique ?", a: "Oui. Jouez-la débranchée près du micro ou approchez l’appareil de l’ampli avec un son clair. La distorsion rend la lecture difficile." },
        { q: "Pourquoi ma guitare se désaccorde-t-elle ?", a: "Les cordes neuves se détendent les premiers jours, et la température et l’humidité font bouger le bois. Accorder avant de jouer prend moins d’une minute." },
      ],
    },

    ukulele: {
      title: "Accordeur Ukulélé en Ligne Gratuit – Sol Do Mi La",
      description: "Accordez votre ukulélé en ligne avec le micro ou à l’oreille. Accordage standard Sol Do Mi La (G C E A) pour ukulélé soprano, concert et ténor. Gratuit, sans appli.",
      blocks: [
        {
          h2: "Accordeur ukulélé en ligne gratuit",
          p: [
            "Accordez votre ukulélé en quelques secondes avec cet **accordeur ukulélé en ligne**. Touchez **Touchez pour accorder**, autorisez le micro et pincez une corde : l’accordeur trouve la corde la plus proche et indique si elle est trop grave ou trop aiguë. Vert = juste.",
            "Il convient aux ukulélés **soprano, concert et ténor**, qui partagent le même accordage standard. Vous préférez l’oreille ? Touchez le bouton de chaque corde pour entendre sa note.",
          ],
        },
        {
          h2: "Accordage standard du ukulélé : Sol Do Mi La",
          p: ["L’accordage standard du ukulélé est **Sol Do Mi La** (G C E A), de la 4e corde (la plus proche du menton) à la 1re. Sur la plupart des ukulélés, le Sol est **aigu** : la 4e corde sonne plus haut que la 3e, d’où ce son brillant."],
          autoTable: "tuning",
        },
        {
          h2: "Comment accorder un ukulélé",
          ordered: true,
          list: [
            "Touchez **Touchez pour accorder** et autorisez le micro.",
            "Pincez la 4e corde (Sol) et laissez-la sonner.",
            "Tournez la mécanique jusqu’à ce que les barres passent au vert : tendez si l’écran dit Montez, détendez s’il dit Descendez.",
            "Recommencez avec Do, Mi et La. Chaque corde juste reçoit un ✓.",
          ],
          after: ["Les cordes en nylon neuves se détendent beaucoup : les premiers jours, il est normal de réaccorder à chaque fois."],
        },
        {
          h2: "Sol aigu ou Sol grave ?",
          p: ["Certains musiciens montent la 4e corde en **Sol grave** (une octave plus bas) pour un son plus plein. Cet accordeur est réglé en Sol aigu ; avec un Sol grave, utilisez l’[accordeur chromatique](chromatic)."],
        },
      ],
      faq: [
        { q: "Quelles sont les notes des cordes du ukulélé ?", a: "En accordage standard : Sol4, Do4, Mi4 et La4 (G4, C4, E4, A4), de la 4e à la 1re corde." },
        { q: "Puis-je accorder mon ukulélé avec mon téléphone ?", a: "Oui. Ouvrez cette page sur le téléphone, touchez « Touchez pour accorder », autorisez le micro et pincez chaque corde." },
        { q: "Ça marche pour un ukulélé baryton ?", a: "Le ukulélé baryton s’accorde Ré Sol Si Mi, comme les quatre cordes aiguës de la guitare. Utilisez l’accordeur chromatique ou les quatre cordes aiguës de l’accordeur guitare." },
        { q: "Pourquoi mon ukulélé neuf se désaccorde-t-il si vite ?", a: "Les cordes en nylon continuent de s’étirer pendant environ une semaine. Accordez souvent et elles se stabiliseront." },
      ],
    },

    violin: {
      title: "Accordeur Violon en Ligne Gratuit – Sol Ré La Mi",
      description: "Accordeur violon en ligne gratuit. Accordez Sol Ré La Mi avec le micro ou à l’oreille grâce aux sons de référence, et réglez le La4 sur 440 ou 442 Hz.",
      blocks: [
        {
          h2: "Accordeur violon en ligne gratuit – accordeur en ligne violon",
          p: [
            "Cet **accordeur violon** écoute par le micro et affiche la note et l’écart avec la justesse. Touchez **Touchez pour accorder**, jouez une corde à l’archet (ou en pizzicato) et ajustez jusqu’à ce que les barres du centre passent au vert.",
            "Chaque bouton de corde joue aussi un **son de référence** clair, pour accorder le violon à l’oreille quand le micro n’est pas disponible.",
          ],
        },
        {
          h2: "Notes des cordes du violon : Sol Ré La Mi",
          p: ["Le violon s’accorde en quintes : **Sol Ré La Mi** (G D A E), de la corde la plus grave (4e) à la plus aiguë (1re)."],
          autoTable: "tuning",
        },
        {
          h2: "Comment accorder un violon",
          ordered: true,
          list: [
            "Commencez par la corde de **La** : c’est la note sur laquelle s’accorde l’orchestre.",
            "Jouez-la régulièrement à l’archet près du micro et regardez l’indicateur.",
            "Utilisez les **tendeurs** du cordier pour les petites corrections et les **chevilles** seulement pour les grands écarts, en les poussant légèrement pour qu’elles tiennent.",
            "Accordez Ré, Sol et Mi de la même façon, puis vérifiez à nouveau le La.",
          ],
        },
        {
          h2: "Accorder à 440 ou 442 Hz",
          p: ["La plupart des musiques utilisent La4 = 440 Hz, mais beaucoup d’orchestres s’accordent un peu plus haut, à 442 Hz. Ouvrez **Plus** et réglez le diapason La4 entre 430 et 450 Hz."],
        },
      ],
      faq: [
        { q: "Peut-on accorder un violon avec son téléphone ?", a: "Oui. Le micro du téléphone suffit : ouvrez cette page, touchez « Touchez pour accorder » et jouez chaque corde. Vous pouvez aussi jouer les sons de référence sur le haut-parleur et accorder à l’oreille." },
        { q: "Quelle corde du violon accorder en premier ?", a: "La corde de La, puis Ré, Sol et Mi." },
        { q: "Ça marche comme accordeur alto ?", a: "L’alto s’accorde Do Sol Ré La. Utilisez l’accordeur chromatique, qui lit n’importe quelle note." },
        { q: "Pourquoi mon violon se désaccorde-t-il ?", a: "Les chevilles peuvent glisser, et l’humidité et la température font bouger les cordes et le bois. Vérifiez l’accord à chaque séance." },
      ],
    },

    cello: {
      title: "Accordeur Violoncelle en Ligne Gratuit – Do Sol Ré La",
      description: "Accordeur violoncelle en ligne gratuit. Accordez Do Sol Ré La (C G D A) avec le micro ou à l’oreille grâce aux sons de référence. Dans le navigateur, sans appli.",
      blocks: [
        {
          h2: "Accordeur violoncelle en ligne gratuit",
          p: ["Accordez votre violoncelle avec cet **accordeur violoncelle** gratuit, sans appli. Touchez **Touchez pour accorder**, jouez une corde à l’archet de façon continue et ajustez jusqu’à ce que les barres passent au vert. Chaque bouton joue aussi la note de référence pour accorder à l’oreille."],
        },
        {
          h2: "Notes des cordes du violoncelle : Do Sol Ré La",
          p: ["Le violoncelle s’accorde en quintes, une octave sous l’alto : **Do Sol Ré La** (C G D A), de la corde la plus grave à la plus aiguë."],
          autoTable: "tuning",
        },
        {
          h2: "Comment accorder un violoncelle",
          ordered: true,
          list: [
            "Commencez par la corde de **La**, puis accordez Ré, Sol et Do.",
            "Tirez de longs coups d’archet réguliers : un son stable donne une lecture stable, surtout sur le Do grave.",
            "Tendeurs pour les petites corrections, chevilles pour les grandes.",
            "Revérifiez le La à la fin : tendre les autres cordes peut le décaler.",
          ],
          after: ["Les micros de téléphone captent moins bien les graves : gardez l’appareil près de l’instrument."],
        },
      ],
      faq: [
        { q: "Quelles sont les notes des cordes du violoncelle ?", a: "Do2, Sol2, Ré3 et La3 (C2, G2, D3, A3), de la plus grave à la plus aiguë." },
        { q: "Peut-on accorder un violoncelle avec son téléphone ?", a: "Oui. Autorisez le micro et jouez chaque corde près du téléphone." },
        { q: "Quel La choisir, 440 ou 442 Hz ?", a: "Utilisez 440 Hz sauf si votre orchestre ou votre professeur demande autre chose. Le diapason se règle dans Plus." },
      ],
    },

    bass: {
      title: "Accordeur Basse en Ligne Gratuit – Mi La Ré Sol",
      description: "Accordeur basse en ligne gratuit pour basse 4 cordes. Accordez Mi La Ré Sol (E A D G) avec le micro ou à l’oreille. Dans le navigateur, sans appli.",
      blocks: [
        {
          h2: "Accordeur basse en ligne gratuit",
          p: ["Cet **accordeur basse** accorde une basse 4 cordes en accordage standard. Touchez **Touchez pour accorder**, jouez une corde et tournez la mécanique jusqu’à ce que les barres passent au vert. Pour basse électrique et acoustique."],
        },
        {
          h2: "Accordage standard de la basse 4 cordes : Mi La Ré Sol",
          p: ["La basse 4 cordes s’accorde **Mi La Ré Sol** (E A D G) : les mêmes notes que les quatre cordes graves de la guitare, une octave plus bas."],
          autoTable: "tuning",
        },
        {
          h2: "Comment accorder une basse",
          ordered: true,
          list: [
            "Commencez par la 4e corde (Mi grave).",
            "Pincez-la franchement et laissez-la sonner : les notes graves mettent un instant à se stabiliser.",
            "Tendez si l’écran dit Montez, détendez s’il dit Descendez, jusqu’au vert.",
            "Recommencez avec La, Ré et Sol, puis revérifiez le Mi.",
          ],
          after: ["Les micros de téléphone et d’ordinateur captent mal les graves. Approchez l’appareil de la basse ou du haut-parleur de l’ampli, avec un son clair."],
        },
      ],
      faq: [
        { q: "Quelles sont les notes des cordes de basse ?", a: "En accordage standard : Mi1, La1, Ré2 et Sol2 (E1, A1, D2, G2), de la 4e à la 1re corde." },
        { q: "Peut-on accorder une basse avec un accordeur guitare ?", a: "La basse utilise les mêmes notes que les quatre cordes graves de la guitare, une octave plus bas. Cet accordeur basse est réglé pour elles, et l’accordeur chromatique fonctionne aussi." },
        { q: "Pourquoi le Mi grave est-il difficile à lire ?", a: "Les petits micros captent mal les fréquences très basses. Pincez franchement, rapprochez l’appareil et laissez la note sonner." },
      ],
    },

    chromatic: {
      title: "Accordeur Chromatique en Ligne Gratuit – Tous Instruments",
      description: "Accordeur chromatique en ligne gratuit : il lit les 12 notes et indique l’écart en cents. Pour tout instrument ou pour la voix. La4 réglable (430–450 Hz).",
      blocks: [
        {
          h2: "Qu’est-ce qu’un accordeur chromatique ?",
          p: [
            "Un **accordeur chromatique** reconnaît les 12 notes de la gamme, pas seulement les cordes d’un instrument. Jouez n’importe quelle note : il affiche la note la plus proche, son octave et l’écart en cents.",
            "Il convient donc à tous les instruments : mandoline, banjo, alto, kalimba, instruments à vent, ukulélé en Sol grave… et la voix.",
          ],
        },
        {
          h2: "Fréquences des notes (octave 4)",
          p: ["Fréquences de référence des 12 notes autour du Do central, avec La4 = 440 Hz :"],
          autoTable: "notes",
        },
        {
          h2: "Cents, La4 et 432 Hz",
          p: [
            "Un **cent** vaut 1/100 de demi-ton. À ±5 cents l’accordeur passe au vert : presque personne n’entend un écart plus petit.",
            "Le diapason La4 fixe la hauteur de toutes les notes. Il est à 440 Hz par défaut ; dans **Plus**, réglez-le de 430 à 450 Hz, y compris 432 Hz ou les 442 Hz de nombreux orchestres.",
          ],
        },
      ],
      faq: [
        { q: "Quelle différence entre un accordeur chromatique et un accordeur guitare ?", a: "L’accordeur guitare ne cherche que les six cordes de la guitare. Le chromatique lit n’importe laquelle des 12 notes : il convient à tout instrument et tout accordage." },
        { q: "Peut-on s’en servir pour la voix ?", a: "Oui. Chantez une note tenue et l’accordeur indique laquelle c’est et à quel point vous en êtes proche." },
        { q: "Comment accorder à 432 Hz ?", a: "Ouvrez Plus et descendez le diapason La4 à 432 Hz. Toutes les notes suivent cette référence." },
      ],
    },

    metronome: {
      title: "Métronome en Ligne Gratuit – BPM, Tap Tempo et Mesures",
      description: "Métronome en ligne gratuit de 30 à 300 BPM avec tap tempo, accents, mesures (4/4, 3/4, 6/8) et subdivisions. Dans le navigateur, sans appli.",
      blocks: [
        {
          h2: "Métronome en ligne gratuit : un métronome sans appli",
          p: [
            "Ce **métronome en ligne** donne une pulsation stable de 30 à 300 BPM, directement dans le navigateur, sans rien télécharger. Réglez le tempo avec le curseur ou les boutons − / +, appuyez sur **Play** et suivez le clic, le balancier et les voyants de chaque temps.",
            "Activez le **flash visuel** dans Plus et l’écran clignote à chaque temps, pour jouer son coupé ou dans le bruit. Les clics sont programmés sur l’horloge audio de l’appareil : le tempo ne dérive pas.",
          ],
        },
        {
          h2: "Tap tempo : trouvez le BPM d’un morceau",
          p: ["Vous ne connaissez pas le tempo ? Tapez sur **Tap tempo** en rythme avec le morceau, et le métronome calcule le BPM à partir de vos frappes. Il fait la moyenne des cinq dernières et repart de zéro après deux secondes de pause."],
        },
        {
          h2: "Mesures et accents",
          p: [
            "Choisissez 2/4, 3/4, 4/4, 5/4, 6/8 ou 7/8. Le premier temps de chaque mesure est **accentué** pour savoir où est le « un », pratique pour travailler une valse en 3/4. En **6/8**, les temps 1 et 4 sont accentués par défaut.",
            "Touchez une case de temps pour ajouter ou retirer un accent et créer votre propre motif.",
          ],
        },
        {
          h2: "Indications de tempo et BPM",
          p: ["Le métronome affiche l’indication classique du tempo actuel :"],
          table: {
            head: ["Indication", "BPM", "Caractère"],
            rows: [
              ["Largo", "moins de 60", "très lent, ample"],
              ["Adagio", "60–75", "lent"],
              ["Andante", "76–107", "allant, au pas"],
              ["Moderato", "108–119", "modéré"],
              ["Allegro", "120–167", "rapide, vif"],
              ["Presto", "168–199", "très rapide"],
              ["Prestissimo", "200 et plus", "le plus vite possible"],
            ],
          },
        },
        {
          h2: "Comment travailler avec un métronome",
          list: [
            "Commencez lentement, entre **60 et 80 BPM**, pour les gammes et les nouveaux morceaux.",
            "Quand un passage est propre trois fois de suite, montez de 4 ou 5 BPM.",
            "Utilisez les **subdivisions** (1/8, triolet, 1/16) dans Plus pour caler les notes rapides entre les temps.",
            "Avant de commencer, vérifiez l’accord avec l’[accordeur guitare](guitar).",
          ],
        },
      ],
      faq: [
        { q: "Peut-on utiliser un métronome dans le navigateur sans appli ?", a: "Oui. Ce métronome fonctionne entièrement dans le navigateur, sur téléphone, tablette et ordinateur." },
        { q: "Comment régler le métronome en 6/8 ?", a: "Choisissez 6/8 en haut. Les temps 1 et 4 sont accentués, ce qui donne les deux pulsations du 6/8. Touchez les cases pour changer les accents." },
        { q: "À quel tempo un débutant doit-il travailler ses gammes ?", a: "Commencez entre 60 et 80 BPM, jouez propre, puis accélérez de quelques BPM à la fois." },
        { q: "Un métronome en ligne est-il précis ?", a: "Oui. Les clics sont programmés à l’avance sur l’horloge audio de l’appareil, pas avec des minuteurs ordinaires, donc le tempo ne dérive pas." },
      ],
    },

    chords: {
      title: "Accords Guitare et Piano – Dictionnaire d’Accords avec Son",
      description: "Dictionnaire d’accords guitare et piano gratuit. Choisissez une fondamentale et un type d’accord pour voir le doigté, l’écouter, changer de forme et transposer.",
      blocks: [
        {
          h2: "Accords guitare : tableau d’accords avec doigtés",
          p: ["Choisissez une **fondamentale** et un **type d’accord** : ce **dictionnaire d’accords de guitare** dessine le doigté sur le manche. ✕ marque une corde à ne pas jouer, ○ une corde à vide, et chaque point indique la note sous votre doigt (la fondamentale en blanc). Les flèches montrent d’autres formes, dont les **barrés** plus haut sur le manche, et **Jouer** vous fait entendre l’accord."],
        },
        {
          h2: "Accords piano sur le clavier",
          p: ["Passez sur **Piano** pour voir l’accord sur les touches, toutes ses notes surlignées et nommées. Les flèches parcourent les **renversements** : les mêmes notes dans un autre ordre, pour enchaîner les accords en douceur."],
        },
        {
          h2: "Les types d’accords",
          table: {
            head: ["Type", "Notes (depuis la fondamentale)", "Exemple en Do"],
            rows: [
              ["Majeur", "1 – 3 – 5", "Do Mi Sol"],
              ["Mineur", "1 – ♭3 – 5", "Do Mi♭ Sol"],
              ["7 (septième de dominante)", "1 – 3 – 5 – ♭7", "Do Mi Sol Si♭"],
              ["maj7", "1 – 3 – 5 – 7", "Do Mi Sol Si"],
              ["m7", "1 – ♭3 – 5 – ♭7", "Do Mi♭ Sol Si♭"],
              ["sus2", "1 – 2 – 5", "Do Ré Sol"],
              ["sus4", "1 – 4 – 5", "Do Fa Sol"],
              ["dim", "1 – ♭3 – ♭5", "Do Mi♭ Sol♭"],
              ["aug", "1 – 3 – ♯5", "Do Mi Sol♯"],
            ],
          },
        },
        {
          h2: "Accords guitare faciles pour débutants",
          p: ["La plupart des chansons utilisent peu d’**accords de guitare de base** : Do (C), Sol (G), Ré (D), La (A), Mi (E), La mineur (Am), Mi mineur (Em) et Ré mineur (Dm). Apprenez d’abord ces formes ouvertes, puis passez aux barrés comme Fa (F) et Si mineur (Bm). Travaillez les changements avec le [métronome](metronome) et gardez la guitare juste avec l’[accordeur guitare](guitar)."],
        },
        {
          h2: "Transposer des accords",
          p: ["Utilisez **−1** et **+1** pour descendre ou monter l’accord d’un demi-ton : un moyen rapide de **transposer des accords** dans une tonalité adaptée à votre voix. Dans Plus, changez le nom des notes entre Do Ré Mi, C D E et la notation allemande (H)."],
        },
      ],
      faq: [
        { q: "Comment lire un diagramme d’accord de guitare ?", a: "Les lignes verticales sont les cordes (Mi grave à gauche), les horizontales les frettes. Les points indiquent où appuyer, ✕ une corde à ne pas jouer et ○ une corde à vide. Une étiquette comme « 5fr » indique la case où commence le diagramme." },
        { q: "Comment jouer l’accord de Si mineur (Bm) à la guitare ?", a: "Le Bm le plus courant est un barré en 2e case : ne jouez pas le Mi grave et faites x-2-4-4-3-2. Choisissez Si et Mineur ici pour le voir, et les flèches pour une autre forme." },
        { q: "Qu’est-ce qu’un accord barré ?", a: "Un accord où un doigt appuie plusieurs cordes sur la même case, comme un sillet mobile. La même forme se joue alors dans toutes les tonalités." },
        { q: "Quelles notes composent l’accord de Do majeur ?", a: "Do, Mi et Sol : la fondamentale, la tierce majeure et la quinte juste." },
      ],
    },
  },
};
