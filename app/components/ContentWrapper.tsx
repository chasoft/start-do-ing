/* FRAMEWORK */

import { Link } from "@remix-run/react"
import { IconExpand } from "./icons"

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

function FullScreenButton() {
	const url = new URL(window.location.href)
	url.searchParams.set("full", "true")
	const fullUrl = url.href;
	return (
		<Link to={fullUrl} className="absolute top-2 right-2 sm:top-3 sm:right-3">
			<IconExpand className="w-6 h-6 text-gray-700 hover:scale-125 active:scale-150 transition-all cursor-pointer" />
		</Link>
	)
}

export function ContentWrapper({ children }: { children: React.ReactNode }) {
	return (
		<div className="relative w-full h-full p-2 rounded-lg">
			<FullScreenButton />
			{children}
		</div>
	)
}