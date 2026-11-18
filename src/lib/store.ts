"use client";

import { useEffect } from "react";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type { Naming } from "@/lib/music/notes";

const noStorage: Storage = {
  length: 0,
  clear: () => {},
  getItem: () => null,
  key: () => null,
  removeItem: () => {},
  setItem: () => {},
};

/** Settings remembered between visits (per browser). */
interface Settings {
  a4: number;
  sound: boolean;
  /** Chord-chart naming override; null = follow the page language. */
  naming: Naming | null;
  volume: number;
  flash: boolean;
  set: (patch: Partial<Omit<Settings, "set">>) => void;
}

export const useSettings = create<Settings>()(
  persist(
    (set) => ({
      a4: 440,
      sound: true,
      naming: null,
      volume: 0.8,
      flash: true,
      set: (patch) => set(patch),
    }),
    {
      name: "music-tools-settings",
      // Only touch localStorage in the browser (the static build runs this module in Node).
      storage: createJSONStorage(() => (typeof window === "undefined" ? noStorage : window.localStorage)),
      partialize: ({ a4, sound, naming, volume, flash }) => ({ a4, sound, naming, volume, flash }),
      // Rehydrate after mount so the static HTML and the first client render match.
      skipHydration: true,
    },
  ),
);

export function useRehydrateSettings(): void {
  useEffect(() => {
    void useSettings.persist.rehydrate();
  }, []);
}
