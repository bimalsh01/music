import type { SeoContent } from "./types";

/*
 * English SEO copy, written from Rankability keyword research (US, 2026-11-18/19; monthly volumes).
 * Guitar: guitar tuner 301K, tuning a guitar / tune on guitar 301K, online guitar tuner 33.1K,
 *   guitar tuner online 22.2K, tune a guitar standard 27.1K, standard guitar tuning 27.1K,
 *   guitar notes 33.1K, guitar string notes 18.1K, guitar tuner clip on 60.5K, guitar capo 40.5K.
 * Ukulele: ukulele tuner 74K, ukulele and tuner 60.5K, ukulele tuning device 74K, ukulele tuner online 5.4K.
 * Violin: violin tuner 40.5K. Cello: cello tuner 9.9K. Bass: bass tuner 18.1K, tuning guitar bass 18.1K,
 *   bass guitar tuner 4.4K. Chromatic: chromatic tuner 6.6K.
 * Metronome: metronome online 60.5K, online metronome 33.1K, bpm tapper 33.1K, tap tempo 27.1K,
 *   metronome beats app 9.9K, song bpm 6.6K, song bpm finder 2.4K, bpm changer 3.6K.
 * Chords: guitar chords 165K, guitar chords for beginners 60.5K, guitar chord chart 49.5K, bm chord 49.5K,
 *   piano chords 40.5K, chords on piano 40.5K, e minor chord 22.2K, piano chord chart 18.1K,
 *   chord finder 14.8K, basic guitar chords 18.1K, barre chords 14.8K.
 * Every claim describes what the app actually does (the tools find tempo, not key; no capo or
 * ukulele-chord features are claimed).
 */
export const en: SeoContent = {
  labels: {
    faq: "Frequently asked questions",
    string: "String",
    note: "Note",
    frequency: "Frequency",
    tuning: "Tuning",
    notes: "Strings (6 → 1)",
  },
  pages: {
    home: {
      title: "WowGuitar – Free Online Guitar Tuner, Metronome & Guitar Chords",
      description:
        "Free online music tools that work instantly: guitar, ukulele, violin, cello and bass tuner, online metronome with tap tempo, and guitar & piano chords.",
      blocks: [
        {
          h2: "Free online music tools – no app, no sign-up",
          p: [
            "WowGuitar is a set of simple, free tools for musicians that run right in your browser. Open a page and it is ready: no download, no account and no ads in the way. Each screen does one job, with big, readable controls you can use with your instrument in your hands.",
            "Your microphone audio is analysed on your own device and never uploaded. After your first visit the tools keep working offline, so the tuner and metronome are there in a rehearsal room with no signal.",
          ],
        },
        {
          h2: "Guitar tuner online",
          p: [
            "Tune with the free [online guitar tuner](guitar): play a string, the tuner finds it and shows if you are flat or sharp – standard guitar tuning, Drop D, Open G and more. There is also a [ukulele tuner](ukulele), [violin tuner](violin), [cello tuner](cello), [bass tuner](bass) and a [chromatic tuner](chromatic) for any other instrument.",
          ],
        },
        {
          h2: "Metronome online with tap tempo",
          p: [
            "The [metronome online](metronome) keeps a steady click from 30 to 300 BPM with accents and time signatures. Tap along with a song and the BPM tapper finds its tempo.",
          ],
        },
        {
          h2: "Guitar chords and piano chords",
          p: [
            "Look up any chord in the [guitar chord chart](chords): see the fingering, hear it, try other shapes and transpose – with piano chords on a keyboard too.",
          ],
        },
        {
          h2: "What you can do here",
          list: [
            "**Tune any string instrument** with the [guitar tuner](guitar), [ukulele tuner](ukulele), [violin tuner](violin), [cello tuner](cello) and [bass tuner](bass) – or tune anything else with the [chromatic tuner](chromatic).",
            "**Keep time** with the [online metronome](metronome): 30–300 BPM, tap tempo, accents, time signatures and subdivisions.",
            "**Look up chords** in the [guitar and piano chord chart](chords): fingerings, keyboard shapes, sound and transposition.",
          ],
        },
      ],
      faq: [
        {
          q: "Are these music tools really free?",
          a: "Yes. Every tool is free to use with no sign-up and no download. Everything runs in your browser.",
        },
        {
          q: "Do I need to install an app to tune my guitar?",
          a: "No. Open the guitar tuner, tap “Tap to tune” and allow the microphone. It works on phones, tablets and computers in any modern browser.",
        },
        {
          q: "Is my microphone audio recorded or uploaded?",
          a: "No. The tuner analyses the sound on your device in real time and nothing is sent to a server.",
        },
      ],
    },

    guitar: {
      title: "Guitar Tuner Online – Free Mic Tuner (Standard, Drop D)",
      description:
        "Free online guitar tuner with your microphone. Tune on guitar to standard guitar tuning, Drop D, Open G, DADGAD or half-step down. No app or clip-on tuner needed.",
      blocks: [
        {
          h2: "Online guitar tuner – a free guitar tuner in your browser",
          p: [
            "This **online guitar tuner** works right in your browser – no app and no account. Tap **Tap to tune**, allow the microphone and play one string. The tuner hears the note, picks the nearest string and shows how many cents you are flat or sharp. When the bars turn green you are within 5 cents, which sounds in tune to the ear.",
            "Use it as an **acoustic guitar tuner** through your phone or laptop microphone, and as an **electric guitar tuner** too: play unplugged close to the mic, or hold your device near the amp with a clean sound. The audio is analysed on your device and never uploaded.",
          ],
        },
        {
          h2: "Standard guitar tuning: guitar string notes and frequencies",
          p: [
            "**Standard guitar tuning** is **E A D G B E**, from the thickest string (6th) to the thinnest (1st). These are the **guitar string notes** you tune to – E2, A2, D3, G3, B3 and E4. An easy way to remember the guitar notes on the strings: *Eddie Ate Dynamite, Good Bye Eddie*.",
          ],
          autoTable: "tuning",
          after: ["Frequencies are for A4 = 440 Hz, the standard concert pitch."],
        },
        {
          h2: "Tuning a guitar: how to tune on guitar, step by step",
          ordered: true,
          list: [
            "Start with the 6th string (low E). Play it open and let it ring.",
            "If the meter says **Tune up**, the string is flat: tighten it by turning the peg slowly. If it says **Tune down**, loosen it.",
            "Tune from slightly below the note up to it – the string holds its pitch better that way.",
            "When the bars turn green and the string gets a ✓, move on. Repeat until all six strings are ticked.",
            "Do a second quick pass. Changing one string shifts the tension on the neck, so the second round makes it exact.",
          ],
        },
        {
          h2: "Tune a guitar to standard, Drop D, Open G, DADGAD or half-step down",
          p: ["Pick a tuning from the **Tuning** menu and the string buttons change to match."],
          autoTable: "alternates",
          after: [
            "**Drop D tuning** lowers only the 6th string a whole step – great for heavy riffs and one-finger power chords. **Open G** gives a G major chord on the open strings, popular for slide and blues. **DADGAD** has an open, modal sound used in folk and Celtic music. **Half-step down** lowers every string a semitone for easier bends and a darker tone.",
          ],
        },
        {
          h2: "Guitar tuner with no clip-on tuner needed",
          p: [
            "You don’t need a **clip-on guitar tuner** on the headstock: a phone or laptop with a microphone does the job. No microphone, or a noisy room? Tap any string button to hear its reference note and match your string to it by ear. Under **More** you can change the A4 reference (default 440 Hz) – useful when you play with a piano or band tuned to 442 Hz or 432 Hz.",
            "Using a **guitar capo**? Tune the open strings first with the capo off, then clamp it on – with the capo on, every string sounds higher than its standard note. Once you are in tune, practise in time with the [online metronome](metronome) or look up shapes in the [guitar chord chart](chords).",
          ],
        },
        {
          h2: "Online guitar tuner vs clip-on tuner vs pedal tuner",
          p: ["Three common ways to tune a guitar, and when each one makes sense:"],
          table: {
            head: ["Tuner", "Best for", "What you need"],
            rows: [
              ["Online guitar tuner (this page)", "Quick tuning at home, in lessons or on the go", "A phone or laptop with a microphone – free"],
              ["Clip-on guitar tuner", "Noisy rooms: it senses vibration through the headstock", "A clip-on device and a battery"],
              ["Pedal tuner", "Electric guitar on stage, tuning silently through the signal chain", "A pedal, a cable and power"],
            ],
          },
          after: [
            "An online tuner hears the guitar through the air, so tune in a quiet room. In a loud venue a clip-on or pedal tuner is the better tool; at home, the online guitar tuner needs nothing extra.",
          ],
        },
      ],
      faq: [
        {
          q: "Is an online guitar tuner accurate?",
          a: "Yes. This tuner uses the McLeod Pitch Method, which measures pitch to within about a cent, and it turns green within ±5 cents – closer than most people can hear. Tune in a quiet room and play one string at a time for the best reading.",
        },
        {
          q: "Do I need a clip-on guitar tuner?",
          a: "No. Any phone or laptop with a microphone works: open this page, tap “Tap to tune” and play each string. If you can’t use the microphone, tap a string button and tune by ear to the reference tone.",
        },
        {
          q: "What are the guitar string notes in standard guitar tuning?",
          a: "From the 6th (thickest) to the 1st (thinnest) string: E2, A2, D3, G3, B3 and E4.",
        },
        {
          q: "How do I tune a guitar to Drop D?",
          a: "Choose Drop D under Tuning. Only the 6th string changes: it is lowered a whole step from E to D, and the other five strings stay as in standard tuning.",
        },
        {
          q: "Does it work as an electric guitar tuner?",
          a: "Yes. Play the electric guitar unplugged near the microphone, or hold your device near the amp with a clean tone. Distortion makes notes harder to read, so tune clean.",
        },
        {
          q: "Why does my guitar keep going out of tune?",
          a: "New strings stretch for the first few days, temperature and humidity changes move the wood, and big bends pull strings sharp or flat. Tuning before every session takes less than a minute.",
        },
      ],
    },

    ukulele: {
      title: "Ukulele Tuner Online – Free GCEA Tuner with Microphone",
      description:
        "Free ukulele tuner online: tune your ukulele with your microphone or by ear. Standard GCEA tuning for soprano, concert and tenor ukulele. No app, no sign-up.",
      blocks: [
        {
          h2: "Ukulele tuner online – a free ukulele tuner",
          p: [
            "Tune your ukulele in seconds with this free **ukulele tuner online**. Tap **Tap to tune**, allow the microphone and pluck a string – the tuner finds the nearest string and shows if it is flat or sharp. Green means in tune.",
            "It works for **soprano, concert and tenor ukuleles**, which all use the same standard GCEA tuning. Prefer to tune by ear? Tap a string button to hear its note.",
          ],
        },
        {
          h2: "Standard ukulele tuning: G C E A",
          p: [
            "Standard ukulele tuning is **G C E A**, from the 4th string (closest to your chin) to the 1st. Most ukuleles use a **high G**: the 4th string is higher than the 3rd. This “re-entrant” tuning gives the ukulele its bright, sparkly sound. Remember it with *My Dog Has Fleas*.",
          ],
          autoTable: "tuning",
        },
        {
          h2: "How to tune a ukulele with the ukulele tuner",
          ordered: true,
          list: [
            "Tap **Tap to tune** and allow the microphone.",
            "Pluck the 4th string (G) and let it ring.",
            "Turn the tuning peg until the centre bars turn green: tighten if it says Tune up, loosen if it says Tune down.",
            "Repeat for C, E and A. Each string gets a ✓ when it is in tune.",
          ],
          after: [
            "New nylon strings stretch a lot. For the first few days, expect to retune every time you play – that’s normal.",
          ],
        },
        {
          h2: "Ukulele tuning without a tuning device",
          p: [
            "You don’t need a separate ukulele tuning device or clip-on tuner: this page is the tuner. A phone or laptop microphone is enough, and the string buttons play reference notes if you would rather tune by ear.",
          ],
        },
        {
          h2: "High G or low G?",
          p: [
            "Some players swap the 4th string for a **low G** (an octave lower) for a fuller, deeper range. This ukulele tuner is set for high G. If your ukulele has a low-G string, use the [chromatic tuner](chromatic) – it reads any note.",
          ],
        },
      ],
      faq: [
        {
          q: "What are the ukulele string notes?",
          a: "In standard tuning: G4, C4, E4 and A4, from the 4th string to the 1st.",
        },
        {
          q: "Can I use this as a ukulele tuner on my phone?",
          a: "Yes. Open this page on your phone, tap “Tap to tune”, allow the microphone and pluck each string.",
        },
        {
          q: "Do I need a ukulele tuning device or clip-on tuner?",
          a: "No. Any phone or laptop with a microphone works as the tuner, and you can tune by ear with the reference notes if you can’t use the microphone.",
        },
        {
          q: "Does this tuner work for baritone ukulele?",
          a: "A baritone ukulele is tuned D G B E, like the top four strings of a guitar. Use the chromatic tuner, or the guitar tuner’s top four strings.",
        },
        {
          q: "Why does my new ukulele keep going out of tune?",
          a: "Nylon strings keep stretching for the first week or so. Tune often and they will settle.",
        },
      ],
    },

    violin: {
      title: "Violin Tuner Online – Free G D A E Tuner with Microphone",
      description:
        "Free online violin tuner. Tune G D A E with your microphone or by ear with reference tones, and set A4 to 440 or 442 Hz. Works in your browser, no app.",
      blocks: [
        {
          h2: "Violin tuner online – a free violin tuner with your microphone",
          p: [
            "This **violin tuner** listens through your microphone and shows the note and how far it is from perfect pitch. Tap **Tap to tune**, bow or pluck one string, and adjust until the centre bars turn green.",
            "Every string button also plays a clear **reference tone**, so you can tune your violin by ear when you can’t use the microphone.",
          ],
        },
        {
          h2: "Violin string notes: G D A E",
          p: ["The violin is tuned in fifths: **G D A E**, from the lowest (4th) string to the highest (1st)."],
          autoTable: "tuning",
        },
        {
          h2: "How to tune a violin",
          ordered: true,
          list: [
            "Start with the **A string** – it’s the note orchestras tune to.",
            "Bow it steadily (or pluck it) near the microphone and watch the meter.",
            "Use the **fine tuners** on the tailpiece for small corrections, and the **pegs** only for big changes – push the peg in gently as you turn so it holds.",
            "Tune D, G and E the same way, then check A again.",
          ],
        },
        {
          h2: "Tuning to 440 Hz or 442 Hz",
          p: [
            "Most music uses A4 = 440 Hz, but many orchestras tune slightly higher, to 442 Hz. Open **More** and adjust the A4 reference from 430 to 450 Hz to match your group.",
          ],
        },
      ],
      faq: [
        {
          q: "Can I tune a violin using my phone?",
          a: "Yes. The phone’s microphone is enough: open this page, tap “Tap to tune” and play each string. You can also play the reference tones through the phone speaker and tune by ear.",
        },
        {
          q: "Which violin string should I tune first?",
          a: "Tune the A string first, then D, G and E.",
        },
        {
          q: "Does this work as a viola tuner?",
          a: "A viola is tuned C G D A. Use the chromatic tuner – it reads any note.",
        },
        {
          q: "Why does my violin keep going out of tune?",
          a: "Pegs can slip, and changes in humidity and temperature move the strings and wood. Check your tuning every time you play.",
        },
      ],
    },

    cello: {
      title: "Cello Tuner Online – Free C G D A Tuner with Microphone",
      description:
        "Free online cello tuner. Tune C G D A with your microphone or by ear with reference tones. Adjustable A4 reference. Works in your browser, no app.",
      blocks: [
        {
          h2: "Cello tuner online – a free cello tuner with your microphone",
          p: [
            "Tune your cello with this free **cello tuner** – no app needed. Tap **Tap to tune**, bow one string steadily and turn until the centre bars turn green. Each string button also plays a reference tone for tuning by ear.",
          ],
        },
        {
          h2: "Cello string notes: C G D A",
          p: ["The cello is tuned in fifths, an octave below the viola: **C G D A**, from the lowest string to the highest."],
          autoTable: "tuning",
        },
        {
          h2: "How to tune a cello",
          ordered: true,
          list: [
            "Start with the **A string**, then tune D, G and C.",
            "Bow with a long, even stroke – a steady sound gives a steady reading, especially on the low C.",
            "Use the fine tuners for small changes and the pegs only for big ones.",
            "Check A again at the end: tightening the other strings can shift it slightly.",
          ],
          after: ["Low notes are harder for phone microphones to hear. Keep the device close to the cello."],
        },
      ],
      faq: [
        {
          q: "What are the cello string notes?",
          a: "C2, G2, D3 and A3, from the lowest string to the highest.",
        },
        {
          q: "Can I tune a cello with my phone?",
          a: "Yes. Open this page, allow the microphone and bow each string close to the phone.",
        },
        {
          q: "Which A should I tune to – 440 or 442 Hz?",
          a: "Use 440 Hz unless your orchestra or teacher asks for something else. You can change the A4 reference under More.",
        },
      ],
    },

    bass: {
      title: "Bass Tuner Online – Free Bass Guitar Tuner (E A D G)",
      description:
        "Free bass tuner online for 4-string bass guitar. Tune E A D G with your microphone or by ear with reference tones. Works in your browser, no app.",
      blocks: [
        {
          h2: "Bass tuner online – a free bass guitar tuner",
          p: [
            "This **bass guitar tuner** tunes a 4-string bass in standard tuning. Tap **Tap to tune**, pluck one string and turn the tuning key until the centre bars turn green. It works for electric and acoustic bass.",
          ],
        },
        {
          h2: "Tuning guitar bass: standard bass tuning E A D G",
          p: [
            "A 4-string bass is tuned **E A D G** – the same notes as the four lowest guitar strings, one octave lower.",
          ],
          autoTable: "tuning",
        },
        {
          h2: "How to tune a bass guitar",
          ordered: true,
          list: [
            "Start with the 4th string (low E).",
            "Pluck firmly with a finger and let the note ring – low notes need a moment to settle.",
            "Tighten if the meter says Tune up, loosen if it says Tune down, until the bars turn green.",
            "Repeat for A, D and G, then check the E again.",
          ],
          after: [
            "Phone and laptop microphones hear low notes weakly. Hold the device close to the bass, or near the amp speaker with a clean sound.",
          ],
        },
      ],
      faq: [
        {
          q: "What are the notes of the bass strings?",
          a: "In standard tuning: E1, A1, D2 and G2, from the 4th string to the 1st.",
        },
        {
          q: "Can I use a guitar tuner for tuning a guitar bass?",
          a: "A bass uses the same note names as the lowest four guitar strings, one octave lower. This bass tuner is set for exactly those notes, and the chromatic tuner also works.",
        },
        {
          q: "Why is the low E hard to read?",
          a: "Small microphones pick up very low frequencies weakly. Pluck firmly, keep the device close and let the note ring.",
        },
      ],
    },

    chromatic: {
      title: "Chromatic Tuner Online – Tune Any Instrument Free",
      description:
        "Free online chromatic tuner. Reads all 12 notes and shows how many cents sharp or flat you are – for any instrument or voice. Adjustable A4 (430–450 Hz).",
      blocks: [
        {
          h2: "What is a chromatic tuner? A free chromatic tuner online",
          p: [
            "A **chromatic tuner** recognises all 12 notes of the scale, not just the strings of one instrument. Play any note and it shows the nearest note name, its octave and how many cents sharp or flat you are.",
            "That makes it a **multi-instrument online tuner**: use it for mandolin, banjo, viola, kalimba, horns, woodwinds, a low-G ukulele or your voice.",
          ],
        },
        {
          h2: "Note frequencies (octave 4)",
          p: ["Reference frequencies for the 12 notes around middle C, with A4 = 440 Hz:"],
          autoTable: "notes",
        },
        {
          h2: "Cents, A4 and 432 Hz",
          p: [
            "A **cent** is 1/100 of a semitone. Within ±5 cents the tuner turns green – most listeners can’t hear a smaller difference.",
            "The A4 reference sets the pitch of every note. It defaults to 440 Hz; open **More** to set anything from 430 to 450 Hz, including 432 Hz or the 442 Hz used by many orchestras.",
          ],
        },
      ],
      faq: [
        {
          q: "What is the difference between a chromatic tuner and a guitar tuner?",
          a: "A guitar tuner only looks for the six guitar strings. A chromatic tuner reads any of the 12 notes, so it works for any instrument and any tuning.",
        },
        {
          q: "Can I use it to tune my voice?",
          a: "Yes. Sing a steady note and the tuner shows which note you are on and how close you are.",
        },
        {
          q: "How do I tune to 432 Hz?",
          a: "Open More and lower the A4 reference to 432 Hz. Every note then follows that pitch.",
        },
      ],
    },

    metronome: {
      title: "Metronome Online – Free Online Metronome & BPM Tapper",
      description:
        "Metronome online, free: 30–300 BPM with tap tempo (BPM tapper), accents, time signatures (4/4, 3/4, 6/8) and subdivisions. Works in your browser, no app.",
      blocks: [
        {
          h2: "Metronome online – a free online metronome",
          p: [
            "This **metronome online** keeps a steady beat from 30 to 300 BPM, right in your browser – no app to download, like a metronome beats app without the install. Set the tempo with the slider or the − / + buttons, press **Play**, and follow the click, the swinging pendulum and the beat lights.",
            "Turn on the **visual flash** under More and the screen flashes on every beat, so you can keep time with the sound off or in a loud room. Clicks are scheduled on the audio clock, so the beat stays rock-steady even when your device is busy.",
          ],
        },
        {
          h2: "BPM tapper and tap tempo: find the song BPM",
          p: [
            "Don’t know the tempo? Use **tap tempo** as a **BPM tapper**: tap the button along with the song a few times and the metronome sets the BPM from your taps – a quick song BPM finder. It averages your last five taps and starts fresh if you pause for two seconds. It measures tempo only; it doesn’t detect the key of a song.",
          ],
        },
        {
          h2: "Change the BPM while it plays",
          p: [
            "You can change the BPM at any moment: drag the slider or press − / + while the metronome is running and the new tempo takes effect right away. That makes it easy to nudge the speed up a few beats at a time as a passage gets cleaner.",
          ],
        },
        {
          h2: "Time signatures and accents",
          p: [
            "Choose 2/4, 3/4, 4/4, 5/4, 6/8 or 7/8. The first beat of each bar is **accented** so you always know where “one” is – handy for waltz practice in 3/4. In **6/8**, beats 1 and 4 are accented by default to give the familiar two-pulse feel.",
            "Tap any beat box to add or remove an accent and build your own pattern.",
          ],
        },
        {
          h2: "Tempo markings and BPM",
          p: ["The metronome shows the classical tempo marking for the current speed:"],
          table: {
            head: ["Tempo marking", "BPM range", "Feel"],
            rows: [
              ["Largo", "below 60", "very slow, broad"],
              ["Adagio", "60–75", "slow"],
              ["Andante", "76–107", "walking pace"],
              ["Moderato", "108–119", "moderate"],
              ["Allegro", "120–167", "fast, lively"],
              ["Presto", "168–199", "very fast"],
              ["Prestissimo", "200 and up", "as fast as possible"],
            ],
          },
        },
        {
          h2: "How to practise with an online metronome",
          list: [
            "Start slow – around **60–80 BPM** is a good place to begin scales and new pieces.",
            "When you can play a passage cleanly three times in a row, raise the tempo by 4–5 BPM.",
            "Use **subdivisions** (1/8, triplets, 1/16) under More to lock in fast notes between the beats.",
            "Before you start, make sure you are in tune with the [guitar tuner](guitar).",
          ],
        },
      ],
      faq: [
        {
          q: "Can I use a metronome online without an app?",
          a: "Yes. This metronome runs entirely in your browser on phones, tablets and computers. Nothing to install.",
        },
        {
          q: "How does the BPM tapper (tap tempo) work?",
          a: "Tap the Tap tempo button in time with the music. The metronome averages the gap between your last taps and sets the BPM.",
        },
        {
          q: "How do I find the BPM of a song?",
          a: "Play the song and tap the Tap tempo button on every beat for ten seconds or so. The BPM shown is the average of your last five taps. The tool finds tempo only, not the key.",
        },
        {
          q: "Can I change the BPM while the metronome is playing?",
          a: "Yes. Drag the slider or press − / + at any time and the click follows the new tempo straight away.",
        },
        {
          q: "How do I set a metronome for 6/8 time?",
          a: "Choose 6/8 at the top. Beats 1 and 4 are accented, giving the two big pulses of 6/8. Tap the beat boxes to change the accents.",
        },
        {
          q: "What BPM should a beginner practise scales at?",
          a: "Start around 60–80 BPM, play cleanly, then speed up a few BPM at a time.",
        },
        {
          q: "Is an online metronome accurate?",
          a: "Yes. The clicks are scheduled ahead on the device’s audio clock rather than with ordinary timers, so the tempo doesn’t drift.",
        },
      ],
    },

    chords: {
      title: "Guitar Chords & Piano Chords – Free Chord Chart with Sound",
      description:
        "Guitar chords and piano chords in a free chord chart. Pick any root and chord type to see the fingering, hear the chord, try other shapes and transpose.",
      blocks: [
        {
          h2: "Guitar chords: a free guitar chord chart with fingerings",
          p: [
            "Pick a **root note** and a **chord type** and this **guitar chord chart** draws the fingering on the fretboard: ✕ marks a string you don’t play, ○ an open string, and each dot shows the note under your finger (the root in white). Use the arrows to see other shapes, including open chords and **barre chords** further up the neck, and press **Play** to hear it.",
          ],
        },
        {
          h2: "Piano chords: chords on piano and a piano chord chart",
          p: [
            "Switch to **Piano** to see the chord on the keys, with every chord tone highlighted and labelled – a **piano chord chart** you can hear. The arrows step through **inversions**, the same notes stacked in a different order, which make it easier to move smoothly between chords.",
          ],
        },
        {
          h2: "Chord finder: chord types explained",
          p: ["This **chord finder** covers nine chord types for every root note:"],
          table: {
            head: ["Chord type", "Notes (from the root)", "Example in C"],
            rows: [
              ["Major", "1 – 3 – 5", "C E G"],
              ["Minor", "1 – ♭3 – 5", "C E♭ G"],
              ["7 (dominant)", "1 – 3 – 5 – ♭7", "C E G B♭"],
              ["maj7", "1 – 3 – 5 – 7", "C E G B"],
              ["m7", "1 – ♭3 – 5 – ♭7", "C E♭ G B♭"],
              ["sus2", "1 – 2 – 5", "C D G"],
              ["sus4", "1 – 4 – 5", "C F G"],
              ["dim", "1 – ♭3 – ♭5", "C E♭ G♭"],
              ["aug", "1 – 3 – ♯5", "C E G♯"],
            ],
          },
        },
        {
          h2: "Basic guitar chords for beginners",
          p: [
            "Most songs use a small set of **basic guitar chords**: C, G, D, A, E, Am, Em and Dm. These **guitar chords for beginners** are open shapes – learn them first, then move on to barre chords like F and Bm. Practise changing between two chords in time with the [metronome](metronome), and keep your guitar in tune with the [guitar tuner](guitar).",
          ],
        },
        {
          h2: "Transpose chords",
          p: [
            "Use **−1** and **+1** to move the chord down or up a semitone – a quick way to **transpose chords** to a key that suits your voice. Under More you can also switch note names between C D E, Dó Ré Mi and German H notation.",
          ],
        },
      ],
      faq: [
        {
          q: "How do I read a guitar chord chart?",
          a: "Vertical lines are strings (low E on the left), horizontal lines are frets. Dots show where to press, ✕ means don’t play that string and ○ means play it open. A label like “5fr” tells you which fret the chart starts at.",
        },
        {
          q: "How do I play a Bm chord on guitar?",
          a: "The most common Bm is a barre chord at the 2nd fret: skip the low E string and play x-2-4-4-3-2. Pick B and Minor here to see it, and use the arrows for another shape.",
        },
        {
          q: "How do I play an E minor chord on guitar?",
          a: "E minor is an easy open chord: with two fingers on the 5th and 4th strings at the 2nd fret, strum all six strings – 0-2-2-0-0-0. Pick E and Minor here to see it.",
        },
        {
          q: "What are the notes in a C major chord?",
          a: "C, E and G – the root, major third and perfect fifth. Pick C and Major here to see it on guitar or on the piano keys.",
        },
        {
          q: "What is a barre chord?",
          a: "A chord where one finger presses several strings across the same fret, acting like a movable nut. It lets you play the same shape in any key.",
        },
        {
          q: "How do I find piano chords on the keyboard?",
          a: "Switch to Piano, pick the root and chord type, and the keys of the chord light up with their note names. Use the arrows to try the inversions.",
        },
      ],
    },
  },
};
