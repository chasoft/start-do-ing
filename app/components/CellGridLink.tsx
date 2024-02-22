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
	className,
	children
}: {
	to: string
	blockIndex: number
	className?: string
	children: React.ReactNode
}) {
	const { bgColor, borderColor } = getBlockColor(blockIndex)
	return (
		<NavLink
			to={to}
			className={({ isActive, isPending }) =>
				clsx(
					"relative block h-full transition-all",
					bgColor,
					isActive ? `${borderColor}` : isPending ? "bg-opacity-30" : "bg-opacity-60",
					className
				)
			}
		>
			{children}
		</NavLink>
	)
}
