/* FRAMEWORK */
import { NavLink } from "@remix-run/react"
import clsx from "clsx"

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
		<NavLink
			to={to}
			className={({ isActive, isPending }) =>
				clsx(
					"relative block h-full transition-all bg-pink-200 border-2 rounded-lg hover:bg-opacity-60 hover:outline-pink-300 outline-pink-200 hover:border-blue-300",
					isActive
						? "bg-opacity-60 border-blue-500"
						: isPending
							? "bg-opacity-50 border-blue-200"
							: "bg-opacity-30 border-transparent"
				)
			}
		>
			{children}
		</NavLink>
	)
}
