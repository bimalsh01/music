import type { SeoContent } from "./types";

/*
 * English SEO copy. Target keywords come from Rankability keyword research (US, Nov 2026), e.g.
 * guitar tuner 301K/mo, ukulele tuner 74K, violin tuner 40.5K, bass tuner 18.1K, cello tuner 9.9K,
 * chromatic tuner 6.6K, metronome online 60.5K, tap tempo 27.1K, bpm tapper 33.1K,
 * guitar chords 165K, guitar chord chart 49.5K, piano chords 40.5K.
 * Every claim describes what the app actually does.
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
      title: "Online Guitar Tuner, Metronome & Chord Chart – Free Music Tools",
      description:
        "Free online music tools that work instantly: guitar, ukulele, violin, cello and bass tuner, online metronome with tap tempo, and guitar & piano chords.",
      blocks: [
        {
          h2: "Free online music tools – no app, no sign-up",
          p: [
            "Music Tools is a set of simple, free tools for musicians that run right in your browser. Open a page and it is ready: no download, no account and no ads in the way. Each screen does one job, with big, readable controls you can use with your instrument in your hands.",
            "Your microphone audio is analysed on your own device and never uploaded. After your first visit the tools keep working offline, so the tuner and metronome are there in a rehearsal room with no signal.",
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
        "Free online guitar tuner using your microphone. Tune acoustic or electric guitar to standard, Drop D, Open G, DADGAD or half-step down. No app needed.",
      blocks: [
        {
          h2: "Free online guitar tuner",
          p: [
            "This guitar tuner works right in your browser – no app and no account. Tap **Tap to tune**, allow the microphone and play one string. The tuner hears the note, picks the nearest string and shows how many cents you are flat or sharp. When the centre bars turn green you are within 5 cents, which sounds in tune to the ear.",
            "It works as an **acoustic guitar tuner** through your phone or laptop microphone, and as an **electric guitar tuner** too: play unplugged close to the mic, or hold your device near the amp with a clean sound. The audio is analysed on your device and never uploaded.",
          ],
        },
        {
          h2: "Standard guitar tuning: string notes and frequencies",
          p: [
            "Standard guitar tuning is **E A D G B E**, from the thickest string (6th) to the thinnest (1st). An easy way to remember the guitar string names: *Eddie Ate Dynamite, Good Bye Eddie*.",
          ],
          autoTable: "tuning",
          after: ["Frequencies are for A4 = 440 Hz, the standard concert pitch."],
        },
        {
          h2: "How to tune a guitar, step by step",
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
          h2: "Alternate tunings: Drop D, Open G, DADGAD and half-step down",
          p: ["Pick a tuning from the **Tuning** menu and the string buttons change to match."],
          autoTable: "alternates",
          after: [
            "**Drop D tuning** lowers only the 6th string a whole step – great for heavy riffs and one-finger power chords. **Open G** gives a G major chord on the open strings, popular for slide and blues. **DADGAD** has an open, modal sound used in folk and Celtic music. **Half-step down** lowers every string a semitone for easier bends and a darker tone.",
          ],
        },
        {
          h2: "Tune by ear with reference tones",
          p: [
            "No microphone, or a noisy room? Tap any string button to hear its reference note and match your string to it by ear. Under **More** you can change the A4 reference (default 440 Hz) – useful when you play with a piano or band tuned to 442 Hz or 432 Hz.",
            "Once you are in tune, practise in time with the [online metronome](metronome) or look up shapes in the [guitar chord chart](chords).",
          ],
        },
      ],
      faq: [
        {
          q: "Is an online guitar tuner accurate?",
          a: "Yes. This tuner uses the McLeod Pitch Method, which measures pitch to within about a cent, and it turns green within ±5 cents – closer than most people can hear. Tune in a quiet room and play one string at a time for the best reading.",
        },
        {
          q: "Can I tune a guitar without a clip-on tuner?",
          a: "Yes. Any phone or laptop with a microphone works: open this page, tap “Tap to tune” and play each string. If you can’t use the microphone, tap a string button and tune by ear to the reference tone.",
        },
        {
          q: "What are the notes of the guitar strings?",
          a: "In standard tuning, from the 6th (thickest) to the 1st (thinnest) string: E2, A2, D3, G3, B3 and E4.",
        },
        {
          q: "Does it work for electric guitar?",
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
        "Tune your ukulele online with your microphone or by ear. Standard GCEA tuning for soprano, concert and tenor ukulele. Free, no app, no sign-up.",
      blocks: [
        {
          h2: "Free online ukulele tuner",
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
          h2: "How to tune a ukulele",
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
          q: "Can I tune my ukulele with my phone?",
          a: "Yes. Open this page on your phone, tap “Tap to tune”, allow the microphone and pluck each string.",
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
          h2: "Free online violin tuner",
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
          h2: "Free online cello tuner",
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
        "Free online bass tuner for 4-string bass guitar. Tune E A D G with your microphone or by ear with reference tones. Works in your browser, no app.",
      blocks: [
        {
          h2: "Free online bass guitar tuner",
          p: [
            "This **bass guitar tuner** tunes a 4-string bass in standard tuning. Tap **Tap to tune**, pluck one string and turn the tuning key until the centre bars turn green. It works for electric and acoustic bass.",
          ],
        },
        {
          h2: "Standard bass tuning: E A D G",
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
          q: "Can I tune a bass with a guitar tuner?",
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
          h2: "What is a chromatic tuner?",
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
      title: "Online Metronome – Free BPM Metronome with Tap Tempo",
      description:
        "Free online metronome from 30 to 300 BPM with tap tempo, accents, time signatures (4/4, 3/4, 6/8) and subdivisions. Works in your browser, no app.",
      blocks: [
        {
          h2: "Free online metronome",
          p: [
            "This **online metronome** keeps a steady beat from 30 to 300 BPM, right in your browser – no app to download. Set the tempo with the slider or the − / + buttons, press **Play**, and follow the click, the swinging pendulum and the beat lights.",
            "Turn on the **visual flash** under More and the screen flashes on every beat, so you can keep time with the sound off or in a loud room. Clicks are scheduled on the audio clock, so the beat stays rock-steady even when your device is busy.",
          ],
        },
        {
          h2: "Tap tempo: find the BPM of a song",
          p: [
            "Don’t know the tempo? Use **tap tempo** as a BPM tapper: tap the button along with the song a few times and the metronome sets the BPM from your taps. It averages your last five taps and starts fresh if you pause for two seconds.",
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
          h2: "How to practise with a metronome",
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
          q: "Can I use a metronome in my browser without an app?",
          a: "Yes. This metronome runs entirely in your browser on phones, tablets and computers. Nothing to install.",
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
          q: "How does tap tempo work?",
          a: "Tap the Tap tempo button in time with the music. The metronome averages the gap between your last taps and sets the BPM.",
        },
        {
          q: "Is an online metronome accurate?",
          a: "Yes. The clicks are scheduled ahead on the device’s audio clock rather than with ordinary timers, so the tempo doesn’t drift.",
        },
      ],
    },

    chords: {
      title: "Guitar & Piano Chord Chart – Chord Finder with Sound",
      description:
        "Free guitar chord chart and piano chord chart. Pick any root and chord type to see the fingering, hear the chord, try other shapes and transpose.",
      blocks: [
        {
          h2: "Guitar chord chart with fingerings",
          p: [
            "Pick a **root note** and a **chord type** and this **guitar chord chart** draws the fingering on the fretboard: ✕ marks a string you don’t play, ○ an open string, and each dot shows the note under your finger (the root in white). Use the arrows to see other shapes, including open chords and **barre chords** further up the neck, and press **Play** to hear it.",
          ],
        },
        {
          h2: "Piano chords on a keyboard",
          p: [
            "Switch to **Piano** to see the chord on the keys, with every chord tone highlighted and labelled. The arrows step through **inversions** – the same notes stacked in a different order – which make it easier to move smoothly between chords.",
          ],
        },
        {
          h2: "Chord types explained",
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
            "Most songs use a small set of **basic guitar chords**: C, G, D, A, E, Am, Em and Dm. Learn those open shapes first, then move on to barre chords like F and Bm. Practise changing between two chords in time with the [metronome](metronome), and keep your guitar in tune with the [guitar tuner](guitar).",
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
          q: "What is a barre chord?",
          a: "A chord where one finger presses several strings across the same fret, acting like a movable nut. It lets you play the same shape in any key.",
        },
        {
          q: "What notes are in a C major chord?",
          a: "C, E and G – the root, major third and perfect fifth.",
        },
      ],
    },
  },
};
