/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

function Buttons() {
	return (
		<div className="absolute top-2 right-2">
			<button className="px-2 py-1 text-black bg-gray-200 rounded-md hover:bg-gray-400 active:bg-gray-500 active:text-white">FULL</button>
		</div>
	)
}
export function ContentWrapper({ children }: { children: React.ReactNode }) {
	return (
		<div className="relative w-full h-full p-2 border-2 rounded-xl">
			<Buttons />
			{children}
		</div>
	)
}