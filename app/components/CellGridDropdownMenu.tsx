/* FRAMEWORK */
import { Link } from "@remix-run/react"

/* THIRD-PARTY PACKAGES */
import clsx from "clsx"

/* COMPONENTS & UTILS */
import { IconMoreHorizontal } from "./icons"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

type Position = "top-left" | "top-right" | "bottom-left" | "bottom-right"

type DropdownMenuProps = {
	position: Position
	items?: Array<{
		title: string
		to: string
		icon?: string //TODO: implement icon for menu item
	}>
}

const positionCss: Record<Position, string> = {
	/**
	 * There is no `top-left`. The value is the same as `top-right`.
	 */
	"top-left": "top-0 right-0",
	"top-right": "top-0 right-0",
	"bottom-left": "bottom-0 left-0",
	"bottom-right": "bottom-0 right-0"
}

const dropdownPositionCss: Record<Position, string> = {
	"top-left": "dropdown-top",
	"top-right": "dropdown-top dropdown-end",
	"bottom-left": "dropdown-end",
	"bottom-right": "dropdown-bottom dropdown-end"
}

export function GridCellDropdownMenu({ position, items }: DropdownMenuProps) {
	if (typeof window === "undefined") return null

	if (window.location.pathname !== "/") return null

	if (!items || items.length === 0) return null

	return (
		<div className={clsx("absolute", positionCss[position])}>
			<div className={clsx("dropdown dropdown-hover", dropdownPositionCss[position])}>
				<div
					tabIndex={0}
					role="button"
					className="m-1 w-6 h-6 lg:h-8 lg:w-8 hover:bg-gray-300 hover:bg-opacity-50 rounded-lg grid place-content-center"
					title="More..."
				>
					<IconMoreHorizontal />
				</div>
				<ul
					tabIndex={0}
					className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-lg w-52"
				>
					{items.map(({ title, to }) => (
						<li key={to}>
							<Link to={to}>{title}</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}
