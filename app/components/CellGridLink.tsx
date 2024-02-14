/* FRAMEWORK */
import { NavLink } from "@remix-run/react"

/* THIRD-PARTY PACKAGES */
import clsx from "clsx"

/* COMPONENTS & UTILS */
import { getBlockColor } from "~/utils"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function CellGridLink({
	to,
	blockIndex,
	children
}: {
	to: string
	blockIndex: number
	children: React.ReactNode
}) {
	const { bgColor, borderColor } = getBlockColor(blockIndex)
	return (
		<NavLink
			to={to}
			className={({ isActive, isPending }) =>
				clsx(
					"relative block h-full border-2 rounded-lg transition-all",
					bgColor,
					`hover:bg-opacity-100`,
					isActive ? `${borderColor}` : isPending ? "bg-opacity-30" : "bg-opacity-60"
				)
			}
		>
			{children}
		</NavLink>
	)
}
