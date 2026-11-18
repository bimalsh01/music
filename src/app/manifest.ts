import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Music Tools",
    short_name: "Music Tools",
    description: "Tuner, metronome and chord lookup that work the second the page opens.",
    start_url: "/",
    display: "standalone",
    background_color: "#090A0A",
    theme_color: "#090A0A",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
