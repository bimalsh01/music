export const THEME_KEY = "music-tools-theme";
export const THEME_COLOR = { dark: "#090A0A", light: "#FBF7F0" } as const;
export type Theme = keyof typeof THEME_COLOR;

/** Runs in <head> before first paint so a saved light theme never flashes dark. */
export const themeBootScript = `try{if(localStorage.getItem("${THEME_KEY}")==="light")document.documentElement.dataset.theme="light"}catch(e){}`;
