let ctx: AudioContext | null = null;

/**
 * One shared AudioContext, created lazily. Call it from a user gesture (tap/click) the first
 * time: iOS Safari only starts audio inside a gesture.
 */
export function getAudioContext(): AudioContext {
  if (!ctx) {
    const AC =
      window.AudioContext ??
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    ctx = new AC();
  }
  if (ctx.state === "suspended") void ctx.resume();
  return ctx;
}
