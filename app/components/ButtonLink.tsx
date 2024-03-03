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

export function ButtonLink({
	to,
	icon,
	className,
	children
}: {
	to: string
	icon?: React.ReactNode
	children: string
	className?: string
}) {
	return (
		<NavLink
			to={to}
			className={({ isActive, isPending }) =>
				clsx(
					"group flex items-center gap-2 rounded-lg border-2 bg-opacity-60 px-2 py-1 transition-all",
					className,
					`hover:bg-white hover:bg-opacity-40`,
					isActive
						? "bg-opacity-80"
						: isPending
							? "bg-opacity-30"
							: "border-transparent bg-opacity-0"
				)
			}
		>
			{!!icon && icon}
			<span>{children}</span>
		</NavLink>
	)
}
