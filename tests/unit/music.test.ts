import { describe, expect, it } from "vitest";
import { PitchDetector } from "pitchy";
import { detectPitch } from "@/lib/audio/pitch";
import { guitarVoicings, CHORD_TYPES, chordSpeller, pianoNotes } from "@/lib/music/chords";
import { headstock } from "@/lib/music/headstock";
import { freqToMidi, midiToFreq, noteName } from "@/lib/music/notes";
import { addTap, defaultAccents, tempoName, weightY } from "@/lib/music/metronome";
import { applyFrequency, EMPTY_READING, meterBars } from "@/lib/music/tuning";
import { BeatScheduler } from "@/lib/audio/scheduler";
import { loadPrototype } from "./prototype";

const SR = 48000;
function sine(freq: number, size: number, harmonics = false): Float32Array {
  const buf = new Float32Array(size);
  for (let i = 0; i < size; i++) {
    const t = i / SR;
    buf[i] = 0.4 * Math.sin(2 * Math.PI * freq * t) + (harmonics ? 0.2 * Math.sin(4 * Math.PI * freq * t) : 0);
  }
  return buf;
}
const cents = (a: number, b: number) => 1200 * Math.log2(a / b);

describe("pitch detection", () => {
  it.each([
    [82.41, 2048, "E2 (guitar low E)"],
    [440, 2048, "A4"],
    [41.2, 4096, "E1 (bass low E)"],
    [65.41, 4096, "C2 (cello low C)"],
    [1318.5, 2048, "E6"],
  ])("detects %f Hz within ±1 cent — %s", (freq, size) => {
    const det = PitchDetector.forFloat32Array(size);
    const got = detectPitch(det, sine(freq, size, true), SR);
    expect(Math.abs(cents(got, freq))).toBeLessThan(1);
  });

  it("returns -1 for silence", () => {
    const det = PitchDetector.forFloat32Array(2048);
    expect(detectPitch(det, new Float32Array(2048), SR)).toBe(-1);
  });
});

describe("notes", () => {
  it("names notes in all three systems", () => {
    expect(noteName(64, "abc")).toBe("E");
    expect(noteName(69, "solfege")).toBe("Lá");
    expect(noteName(71, "german")).toBe("H");
    expect(noteName(70, "german")).toBe("B");
  });
  it("converts frequency and MIDI with A4 calibration", () => {
    expect(midiToFreq(69, 442)).toBeCloseTo(442);
    expect(freqToMidi(440)).toBeCloseTo(69);
  });
});

describe("tuner logic", () => {
  const guitar = [40, 45, 50, 55, 59, 64];
  it("auto-selects the nearest string and measures cents", () => {
    const r = applyFrequency(EMPTY_READING, midiToFreq(45.2), guitar, 440, false, 0);
    expect(r.sel).toBe(1);
    expect(r.cents).toBeCloseTo(20, 5);
  });
  it("ticks a string off after 800 ms within ±5 cents", () => {
    let r = applyFrequency(EMPTY_READING, midiToFreq(64.01), guitar, 440, false, 0);
    r = applyFrequency(r, midiToFreq(64.01), guitar, 440, false, 500);
    expect(r.done[5]).toBeUndefined();
    r = applyFrequency(r, midiToFreq(64.01), guitar, 440, false, 900);
    expect(r.done[5]).toBe(true);
  });
  it("auto mode ignores a stray reading but follows a new string after 3 in a row", () => {
    let r = applyFrequency(EMPTY_READING, midiToFreq(45.1), guitar, 440, false, 0);
    expect(r.sel).toBe(1);
    const before = r.cents;
    r = applyFrequency(r, midiToFreq(57), guitar, 440, false, 70); // one overtone blip near G3
    expect(r.sel).toBe(1);
    expect(r.cents).toBe(before); // the blip doesn't flash a huge cents value
    r = applyFrequency(r, midiToFreq(45.1), guitar, 440, false, 140);
    expect(r.pending).toBeNull();
    for (let t = 210; t <= 350; t += 70) r = applyFrequency(r, midiToFreq(50.2), guitar, 440, false, t);
    expect(r.sel).toBe(2);
  });
  it("manual mode stays on the picked string however far off the note is", () => {
    const r = applyFrequency({ ...EMPTY_READING, sel: 0 }, midiToFreq(45), guitar, 440, true, 0);
    expect(r.sel).toBe(0);
    expect(r.cents).toBeCloseTo(500, 5);
  });
  it("uses the nearest semitone for the chromatic tuner", () => {
    const r = applyFrequency(EMPTY_READING, midiToFreq(61.3), [], 440, false, 0);
    expect(r.chrom).toBe(61);
  });
  it("draws the meter like the prototype", () => {
    expect(meterBars(null).map((b) => b.tone).filter((t) => t !== "track")).toEqual(["center"]);
    expect(meterBars(2).filter((b) => b.tone === "ok")).toHaveLength(3);
    const sharp = meterBars(23);
    expect(sharp[15].tone).toBe("needle");
    expect(sharp.slice(10, 15).every((b) => b.tone === "fill")).toBe(true);
  });
});

describe("ports match the prototype", () => {
  it("guitarVoicings matches for every root × type", () => {
    const proto = loadPrototype<{ guitarVoicings: (r: number, t: string) => unknown }>("Chords.dc.html", ["guitarVoicings"]);
    for (let root = 0; root < 12; root++) {
      for (const type of CHORD_TYPES) {
        expect(guitarVoicings(root, type)).toEqual(proto.guitarVoicings(root, type));
      }
    }
  });

  it("headstock geometry matches for 4- and 6-string instruments", () => {
    const proto = loadPrototype<{ headstock: (k: string, n: number) => Record<string, unknown> }>("Tuner.dc.html", ["headstock"]);
    for (const [kind, n] of [["guitar", 6], ["ukulele", 4], ["violin", 4], ["cello", 4], ["bass", 4], ["cavaquinho", 4]] as const) {
      const ours = headstock(kind, n);
      const theirs = proto.headstock(kind, n);
      for (const key of ["H", "body", "face", "neckX", "neckW", "nutY", "fadeY", "frets", "scroll", "keys"]) {
        expect(ours[key as keyof typeof ours]).toEqual(theirs[key]);
      }
      expect(ours.slots).toEqual(theirs.cols);
    }
  });
});

describe("chord spelling", () => {
  it("spells B♭ minor with flats", () => {
    const s = chordSpeller(10, "min", "abc");
    expect(s.pcs.map(s.name)).toEqual(["B♭", "D♭", "F"]);
  });
  it("builds piano inversions", () => {
    expect(pianoNotes(0, "maj", 1)).toEqual([64, 67, 72]);
  });
});

describe("metronome helpers", () => {
  it("names tempos", () => {
    expect(tempoName(59)).toBe("Largo");
    expect(tempoName(100)).toBe("Andante");
    expect(tempoName(200)).toBe("Prestissimo");
  });
  it("accents 6/8 on beats 1 and 4", () => {
    expect(defaultAccents("6/8")).toEqual([true, false, false, true, false, false]);
  });
  it("averages taps and resets after 2 s", () => {
    let s = addTap([], 0);
    s = addTap(s.taps, 500);
    s = addTap(s.taps, 1000);
    expect(s.bpm).toBe(120);
    expect(addTap(s.taps, 4000).taps).toEqual([4000]);
  });
  it("moves the pendulum weight with tempo", () => {
    expect(weightY(30)).toBe(64);
    expect(weightY(300)).toBe(224);
  });
  it("schedules beats with no drift over 1000 beats", () => {
    const clock = { currentTime: 0 };
    const times: number[] = [];
    const s = new BeatScheduler(clock, () => ({ bpm: 120, sub: 1, accents: [true, false, false, false] }), {
      click: (t, _b, sub) => {
        if (sub === 0) times.push(t);
      },
      onBeat: () => {},
    });
    s.start();
    s.stop();
    while (times.length < 1000) {
      clock.currentTime += 0.025;
      s.tick();
    }
    const expected = times[0] + 999 * 0.5;
    expect(Math.abs(times[999] - expected) * 1000).toBeLessThan(1);
  });
});
