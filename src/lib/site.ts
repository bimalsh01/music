/** Brand and contact details, in one place. */
export const BRAND = "WowGuitar";
export const PRODUCTION_URL = "https://www.wowguitar.com";
export const CONTACT_EMAIL = "hello@wowguitar.com";

/** Bump when the page copy is meaningfully revised: drives dateModified and the visible "Updated" line. */
export const CONTENT_UPDATED = "2026-11-19";

/** Plain pages that exist in every language, under the same English slug. */
export const INFO_PAGES = ["about", "contact", "privacy"] as const;
export type InfoPage = (typeof INFO_PAGES)[number];
