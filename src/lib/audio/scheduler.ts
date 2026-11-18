/**
 * Lookahead metronome scheduler. A 25 ms timer schedules every click that falls within the next
 * 120 ms on the AudioContext clock, so timing stays sample-accurate even if the main thread
 * stalls. Beat visuals are reported through `onBeat` at the moment the beat actually sounds.
 */
export interface SchedulerSettings {
  bpm: number;
  /** Clicks per beat (1 = quarter, 2 = eighth, 3 = triplet, 4 = sixteenth). */
  sub: number;
  /** One flag per beat in the bar. */
  accents: boolean[];
}

export interface Clock {
  currentTime: number;
}

export interface SchedulerHooks {
  click(time: number, beat: number, subIndex: number, accent: boolean): void;
  onBeat(beat: number): void;
}

export const LOOKAHEAD_MS = 25;
export const HORIZON_S = 0.12;

export class BeatScheduler {
  private nextTime = 0;
  private beat = 0;
  private subIndex = 0;
  private timer: ReturnType<typeof setInterval> | null = null;
  private raf = 0;
  private queue: { time: number; beat: number }[] = [];

  constructor(
    private clock: Clock,
    private settings: () => SchedulerSettings,
    private hooks: SchedulerHooks,
  ) {}

  start(): void {
    this.stop();
    this.nextTime = this.clock.currentTime + 0.08;
    this.beat = 0;
    this.subIndex = 0;
    this.timer = setInterval(() => this.tick(), LOOKAHEAD_MS);
    this.tick();
    if (typeof requestAnimationFrame !== "undefined") this.raf = requestAnimationFrame(this.draw);
  }

  stop(): void {
    if (this.timer) clearInterval(this.timer);
    this.timer = null;
    if (this.raf && typeof cancelAnimationFrame !== "undefined") cancelAnimationFrame(this.raf);
    this.raf = 0;
    this.queue = [];
  }

  get running(): boolean {
    return this.timer !== null;
  }

  /** Schedule every click up to the horizon. Exposed for tests. */
  tick(): void {
    const s = this.settings();
    const beats = s.accents.length;
    while (this.nextTime < this.clock.currentTime + HORIZON_S) {
      if (this.beat >= beats) this.beat = 0;
      const accent = this.subIndex === 0 && s.accents[this.beat];
      this.hooks.click(this.nextTime, this.beat, this.subIndex, accent);
      if (this.subIndex === 0) this.queue.push({ time: this.nextTime, beat: this.beat });
      this.nextTime += 60 / s.bpm / s.sub;
      this.subIndex++;
      if (this.subIndex >= s.sub) {
        this.subIndex = 0;
        this.beat = (this.beat + 1) % beats;
      }
    }
  }

  private draw = () => {
    const now = this.clock.currentTime;
    let latest: number | null = null;
    while (this.queue.length && this.queue[0].time <= now) {
      latest = this.queue.shift()!.beat;
    }
    if (latest !== null) this.hooks.onBeat(latest);
    if (this.timer) this.raf = requestAnimationFrame(this.draw);
  };
}
