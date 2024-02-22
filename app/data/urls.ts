/**
 * Centralize the urls for the app.
 * - Url to blocks => respective `metadata.ts`
 * - Url to others => URLS (this file)
 */

export const URLS = {
	home: { to: "/", label: "Home" },
	blog: { to: "/blog", label: "Blog" },
	store: { to: "/store", label: "Store" },
	support: { to: "/support", label: "Support Startdo.ing" },
	quotes: { to: "/quotes", label: "Quotes" }
} as const
