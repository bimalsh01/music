import { PitchDetector } from "pitchy";
import { getAudioContext } from "./context";

/** Ignore readings outside the useful range of every supported instrument. */
export const MIN_FREQ = 25;
export const MAX_FREQ = 2200;
const MIN_CLARITY = 0.9;
const MIN_RMS = 0.012;

export interface MicInput {
  /** Latest pitch in Hz, or -1 when nothing clear is heard. */
  read(): number;
  stop(): void;
}

/** Pitch of a time-domain buffer (McLeod Pitch Method via pitchy), or -1. */
export function detectPitch(detector: PitchDetector<Float32Array>, buf: Float32Array, sampleRate: number): number {
  let rms = 0;
  for (let i = 0; i < buf.length; i++) rms += buf[i] * buf[i];
  if (Math.sqrt(rms / buf.length) < MIN_RMS) return -1;
  const [pitch, clarity] = detector.findPitch(buf, sampleRate);
  if (clarity < MIN_CLARITY || pitch < MIN_FREQ || pitch > MAX_FREQ) return -1;
  return pitch;
}

/**
 * Ask for the microphone and return a reader. Rejects if permission is denied or no mic exists.
 * Processing is turned off so the instrument's pitch reaches the analyser untouched.
 */
export async function openMic(lowInstrument: boolean): Promise<MicInput> {
  if (!navigator.mediaDevices?.getUserMedia) throw new Error("no-mic");
  const stream = await navigator.mediaDevices.getUserMedia({
    audio: { echoCancellation: false, noiseSuppression: false, autoGainControl: false },
  });
  const ctx = getAudioContext();
  const src = ctx.createMediaStreamSource(stream);
  const analyser = ctx.createAnalyser();
  analyser.fftSize = lowInstrument ? 4096 : 2048;
  src.connect(analyser);
  const buf = new Float32Array(analyser.fftSize);
  const detector = PitchDetector.forFloat32Array(analyser.fftSize);
  return {
    read() {
      analyser.getFloatTimeDomainData(buf);
      return detectPitch(detector, buf, ctx.sampleRate);
    },
    stop() {
      stream.getTracks().forEach((t) => t.stop());
      try {
        src.disconnect();
      } catch {
        // already disconnected
      }
    },
  };
}
