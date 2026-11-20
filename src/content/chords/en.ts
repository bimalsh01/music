/*
 * English chord pages: one hand-written introduction per chord (keyed by slug). Everything else on
 * the page — notes, finger steps, progressions, links — is built from the chord tool's own data in
 * src/lib/music/chordGuide.ts, so the copy always matches the diagram.
 *
 * Primary keywords (Rankability, US, 2026-11) are the H1s in src/lib/music/chordPages.ts.
 * Every shape mentioned here is the first shape the chord tool shows for that chord.
 */
export const CHORD_INTROS: Record<string, string> = {
  // C
  c: "The C chord on guitar is one of the first open chords most players learn, and it stays useful for life: three fingers in the first position give a bright, full sound that carries countless songs in the keys of C, G and F. The one habit to build early is starting your strum on the A string, so the low E stays silent.",
  cm: "C minor has no comfortable open shape, so the Cm chord is usually played as a barre at the 3rd fret – the same hand shape as Am, moved up three frets. It sounds darker and heavier than C major, and it turns up often in songs in E♭ major and G minor.",
  c7: "C7 is open C with your little finger added on the G string at the 3rd fret, which brings in a B♭. That one note gives the chord a bluesy pull towards F, so you will meet the C7 chord in blues, country and old-time songs in the key of F.",
  cmaj7: "The Cmaj7 guitar chord is the easiest seventh chord there is: play open C and lift your index finger off the B string. The open B gives the chord a soft, floating colour heard in jazz ballads and indie pop, and it is a good first step into seventh chords.",
  cm7: "Cm7 is the C minor barre at the 3rd fret with one finger lifted, so the B♭ on the G string sits under the barre. The Cm7 chord is mellow rather than sad, which is why it shows up so often in soul, R&B and as the ii chord in the key of B♭.",
  csus4: "The Csus4 guitar chord swaps the E of a C chord for an F, so it sounds open and unfinished until it falls back to C. On this chart it is a barre at the 3rd fret with the little finger on the 6th fret of the B string; bring that note down to the 5th fret and you are back on C major.",
  // C#
  "c-sharp": "The C# chord has no open shape, so guitarists play it as a barre at the 4th fret with the A-shape: index finger across five strings and three fingers lined up two frets higher. It is the same shape as B moved up two frets, and it is the I chord of songs in C# major.",
  "c-sharp-m": "C#m is a classic early barre chord. The C#m chord sits at the 4th fret in the Am shape and is the vi chord in E major, so it shows up all the time next to E, A and B. Learn it right after Bm – it is the same shape, two frets higher.",
  "c-sharp-7": "C#7 is the C# barre with the little finger lifted, so the B on the G string comes from the barre itself. The C#7 chord is the V7 of F# major and leads strongly into F# or F#m, which makes it a regular in songs in those keys.",
  "c-sharp-maj7": "The C#maj7 chord is bright and glassy: a barre at the 4th fret with the middle finger one fret lower on the G string. Spelled correctly its notes are C#, E#, G# and B# – on the fretboard E# and B# are simply the notes you know as F and C.",
  "c-sharp-m7": "The C#m7 guitar chord is an easy barre to hold: index across the 4th fret, ring finger on the D string and middle finger on the B. It is the iii chord in A major and the ii chord in B major, and it softens any progression that would use plain C#m.",
  // D
  d: "The D chord is a small triangle of three fingers on the top strings, and it is often the second or third chord a beginner learns. It is the I chord in D, the IV in A and the V in G, so there is hardly a campfire song that does without it. Strum only the top four strings.",
  dm: "The Dm chord is open D with one finger moved: the index goes to the 1st fret of the high E string. It is the saddest-sounding of the open chords and the ii chord in C major, which is why it so often sits between C, F and G.",
  d7: "The D7 guitar chord is a mirrored D: the index finger drops to the 1st fret of the B string and the C it gives you makes the chord want to resolve to G. Expect it in folk, country and children's songs in the key of G.",
  dmaj7: "Dmaj7 is open D with the ring finger slid down to the 2nd fret of the B string, so the three fretted notes sit in a straight line. The Dmaj7 chord has a gentle, hopeful sound that works as a warmer stand-in for D in pop and singer-songwriter music.",
  dm7: "The Dm7 guitar chord keeps the open D string ringing under F, A and C. With the 1st fret of the B and high E strings covered and the 2nd fret of the G string, it is one of the easiest ways into the ii – V – I in C (Dm7 – G7 – Cmaj7).",
  dsus4: "The Dsus4 chord is open D with the high E string pressed at the 3rd fret instead of the 2nd, turning the F# into a G. Rocking between Dsus4 and D is one of the best-known moves on guitar, used in rock, folk and worship songs alike.",
  // Eb
  "e-flat": "The Eb guitar chord is a barre at the 6th fret in the A shape, since E♭ has no open voicing. Horn players and pianists love the key of E♭, so you will meet the Eb chord whenever you play with them – or when a song is tuned half a step down.",
  "e-flat-m": "Ebm is a barre at the 6th fret in the Am shape, with the middle finger on the B string. The Ebm chord on guitar is dark and rarely used in open-string keys, but it is the i chord in E♭ minor and the vi chord in G♭ major, where it is hard to avoid.",
  "e-flat-maj7": "The Eb maj7 guitar chord is a barre at the 6th fret with the middle finger one fret lower on the G string. It is a smooth, jazzy chord, the I chord in E♭ major and the IV chord in B♭, and the notes E♭, G, B♭ and D blend into a warm cluster.",
  "e-flat-m7": "The Ebm7 chord on guitar is a barre at the 6th fret with the ring finger on the D string and the middle finger on the B. It is the ii chord of D♭ major and the i chord of E♭ minor, so it suits funk, soul and jazz in flat keys.",
  // E
  e: "The E chord uses all six strings, which makes it one of the fullest, loudest chords on the guitar. Three fingers sit in the first two frets, and the shape is the model for every E-shape barre chord further up the neck. It is the I chord of countless rock and blues songs.",
  em: "The Em chord is often the very first chord a guitarist learns: two fingers on the 2nd fret and every string strummed. It sounds deep and slightly melancholy, it is the vi chord in G major, and it pairs naturally with G, C and D.",
  e7: "The E7 guitar chord is open E with the ring finger lifted, so the open D string adds the D that makes it a dominant seventh. It is the backbone of blues in E and the chord that pulls a song towards A.",
  em7: "Em7 is the easiest chord on this page: put two fingers on the 2nd fret of the A string and you are done (the chart shows the middle finger), with the open D adding the seventh. The Em7 guitar chord has a soft, open sound that slips easily into songs in G and D.",
  // F
  f: "The F chord is the first full barre most guitarists tackle: the index finger covers all six strings at the 1st fret, with the E-shape built in front of it. It takes practice, but once the F chord rings clearly every other E-shape barre chord is the same shape moved up the neck.",
  fm: "The Fm chord on guitar is the F barre with the middle finger lifted, leaving the barre to cover the G string. Its notes F, A♭ and C give a dark colour, and it is a common borrowed chord in C major – F to Fm to C is a well-loved move.",
  f7: "The F7 chord is the F barre with the little finger lifted: the barre itself now plays the E♭ on the D string. It is the V7 of B♭ and a favourite in blues in F, where it sits next to B♭7 and C7.",
  fmaj7: "The Fmaj7 guitar chord on this chart is played at the 1st fret with the A and high E strings muted, leaving F, A, C and E. It is a dreamy, open-sounding chord and a common replacement for F in songs in C major.",
  fm7: "Fm7 is the F barre with only one note fretted above it, on the A string at the 3rd fret. With the barre doing most of the work, the Fm7 chord is one of the more relaxed barre chords – and it is the ii chord of E♭ major.",
  // F#
  "f-sharp": "The F# chord on guitar is the F barre moved up one fret, to the 2nd. It is the V chord in B major, the IV in C# and the I in F#, and it is a common chord in songs played with a capo or in sharp keys.",
  "f-sharp-m": "The F#m chord on guitar is a barre at the 2nd fret with two fingers on the A and D strings. As the vi chord in A major and the ii chord in E, it is one of the most-used barre chords in pop, and a good first minor barre to learn.",
  "f-sharp-7": "The F#7 chord is the F# barre with the little finger lifted, so the barre plays the E on the D string. It is the V7 of B and the secondary dominant that leads into Bm in D major – D, F#7, Bm is a progression worth knowing.",
  "f-sharp-maj7": "The F#maj7 chord on this chart is played at the 2nd fret with the A and high E strings muted. Its notes F#, A#, C# and E# (the E# is the note you would call F) give it a bright, shimmering sound, and it is the IV chord in C# major.",
  "f-sharp-m7": "The F#m7 chord is a barre at the 2nd fret with just one extra finger, on the A string at the 4th fret. It is the vi chord in A and the ii chord in E, and it sounds softer and jazzier than a plain F#m.",
  // G
  g: "The G chord rings on all six strings and is one of the cornerstones of the guitar. On this chart it uses the middle finger on the low E, the index on the A and the ring finger on the high E, all close to the nut. Together with C and D it plays a huge share of folk and pop songs.",
  gm: "The Gm chord is a barre at the 3rd fret in the Em shape, with only two fingers placed above the barre. G minor is the relative minor of B♭ and a common borrowed chord in D and G major, where it adds a sudden touch of darkness.",
  g7: "The G7 guitar chord is open G with the high E string moved to the 1st fret, giving the F that makes it want to resolve to C. It is the V7 of C major and one of the first seventh chords to learn.",
  gmaj7: "The Gmaj7 guitar chord is open G with the high E string at the 2nd fret instead of the 3rd. That F# against the G gives a gentle, jazzy shimmer, and it is a lovely way to end a song in G.",
  gm7: "The Gm7 guitar chord is the G minor barre at the 3rd fret with the D string left under the barre too, so the F comes from your index finger. It is the ii chord in F major and a staple of soul, funk and bossa nova.",
  gsus4: "The Gsus4 chord replaces the B of G major with a C, so it hangs in the air until you release it. On this chart it is an E-shape barre at the 3rd fret with three fingers on the 5th fret; it is also the V sus chord that leads into C.",
  // Ab
  "a-flat": "The Ab chord is the F barre moved up to the 4th fret. A♭ is the IV chord in E♭ and the VI chord in C minor, so it is common in ballads and in songs written on piano – and it is the same chord as G# by another name.",
  // A
  a: "The A chord lines three fingers up on the 2nd fret of the D, G and B strings, with the open A as its bass. It is one of the core beginner chords, the I chord in A, the IV in E and the V in D, and the shape is the model for every A-shape barre chord.",
  am: "The Am chord on guitar is usually the first minor chord people learn after Em, and it has the same shape as E major moved over one string. It is the vi chord in C, so Am, F, C and G together make one of the most-played progressions in pop.",
  a7: "The A7 chord is the A chord with the G string left open, which adds the G that makes it a dominant seventh. With only two fingers down, it is often easier than A itself, and it is the V7 of D major and a mainstay of blues in A.",
  amaj7: "The Amaj7 chord puts one finger on the 1st fret of the G string, a fret below the two fingers on the D and B strings. The G# there gives A a soft, dreamy edge, and it works as a gentle I chord in A or a IV chord in E.",
  am7: "The Am7 guitar chord is Am with the G string left open, so it needs only two fingers. It is softer than Am, it is the vi chord in C and the ii chord in G, and it is a favourite in acoustic pop and bossa nova.",
  asus4: "The Asus4 chord is the A chord with the B string pressed one fret higher, at the 3rd fret, which turns the C# into a D. Moving between A, Asus4 and Asus2 is a classic way to make a single chord sound busy and alive.",
  // Bb
  "b-flat": "The Bb guitar chord is a barre at the 1st fret in the A shape, with the index finger across five strings and three fingers on the 3rd fret. B♭ is the IV chord in F and the I chord of many brass and church songs, so it is worth learning early.",
  "b-flat-m": "The Bbm chord is the B♭ barre at the 1st fret in the Am shape, with the middle finger on the B string. It is the vi chord in D♭ and the iv chord in F minor, so it is common in songs written on piano in flat keys.",
  "b-flat-7": "The Bb7 chord is a barre at the 1st fret with two fingers on the D and B strings at the 3rd fret, while the barre plays the A♭ on the G string. It is the IV7 in a blues in F and the V7 of E♭.",
  // B
  b: "The B chord has no simple open version, so it is played as a barre at the 2nd fret: index across five strings, then the D, G and B strings at the 4th fret. B is the V chord in E, so it shows up in almost every song in that key.",
  bm: "The Bm chord is the barre chord most beginners meet first, because songs in D and G use it so often. On this chart it sits at the 2nd fret in the Am shape, x-2-4-4-3-2: index across five strings, then middle, ring and little fingers.",
  b7: "The B7 guitar chord on this chart is a barre at the 2nd fret with the D and B strings at the 4th, while the barre plays the A on the G string. It is the V7 of E major and E minor, and it is the chord that makes a blues in E turn around.",
  bm7: "The Bm7 guitar chord is the Bm barre at the 2nd fret with the G string left to the barre, so it needs just three fingers. It is the vi chord in D and the ii chord in A, and it sounds smoother than Bm in most progressions.",
};

/** Title endings, rotated across the pages so no two titles read the same. */
export const TITLE_TAILS = [
  "Finger Position, Notes & Sound",
  "How to Play It, Step by Step",
  "Fingering Chart, Notes & Audio",
  "Shapes, Fingers & Progressions",
  "Easy Fingering With Sound",
] as const;
