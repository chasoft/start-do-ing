import type { UrlData } from "~/utils/types"

/**
 * Centralize the urls for the app.
 * - Url to blocks => respective `metadata.ts`
 * - Url to others => URLS (this file)
 */

export const URLS: Record<string, UrlData> = {
	home: { to: "/", label: "Home", description: "Visit the homepage" },
	blog: {
		to: "/blog",
		label: "Blog",
		description: "Read articles about beautiful earth and human"
	},
	store: {
		to: "/store",
		label: "Store",
		description: "Shop great selected products/services"
	},
	support: {
		to: "/support",
		label: "Support Startdo.ing",
		description: "Buy me a coffee, big or small is appreciate"
	}
}

export const HOME_URLS = ["/", "/support"]
