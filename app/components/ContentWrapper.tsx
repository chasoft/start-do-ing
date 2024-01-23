/* FRAMEWORK */

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
	return (
		<div className="absolute top-2 right-2">
			<button
				title="Expand to full page"
				className="w-8 h-8 px-2 py-1 text-black bg-gray-200 rounded-md hover:bg-gray-400 hover:bg-opacity-60 active:bg-gray-500 active:text-white"
			>
				<IconExpand />
			</button>
		</div>
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