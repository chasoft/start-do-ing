/* FRAMEWORK */
import { Link } from "@remix-run/react"

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function CellGridLink({
	to,
	children
}: {
	to: string
	children: React.ReactNode
}) {
	return (
		<Link
			to={to}
			className="relative block h-full transition-all bg-pink-200 border-2 border-transparent rounded-lg bg-opacity-30 hover:bg-opacity-60 hover:outline-pink-300 outline-pink-200 hover:border-blue-300"
		>
			{children}
		</Link>
	)
}
