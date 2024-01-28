/* FRAMEWORK */
import { Link } from "@remix-run/react"

/* THIRD-PARTY PACKAGES */
import clsx from "clsx"

/* COMPONENTS & UTILS */
import IconMore from "./icons/IconMore"

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

type Position = "top-right" | "bottom-left" | "bottom-right"

type DropdownMenuProps = {
	position: Position
	items: Array<{
		title: string
		to: string
		icon?: string	//TODO: implement icon for menu item
	}>
}

const positionCss: Record<Position, string> = {
	"top-right": "top-0 right-0",
	"bottom-left": "bottom-0 left-0",
	"bottom-right": "bottom-0 right-0",
}

const dropdownPositionCss: Record<Position, string> = {
	"top-right": "dropdown-top dropdown-end",
	"bottom-left": "dropdown-end",
	"bottom-right": "dropdown-bottom dropdown-end",
}

export function GridCellDropdownMenu({ position, items }: DropdownMenuProps) {
	if (typeof window === "undefined")
		return null

	if (window.location.pathname !== "/")
		return null

	if (items.length === 0)
		return null

	return (
		<div className={clsx("absolute", positionCss[position])}>
			<div className={clsx("dropdown dropdown-hover", dropdownPositionCss[position])}>
				<div tabIndex={0} role="button" className="btn m-1" title="More..."><IconMore /></div>
				<ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
					{items.map(({ title, to }) => (
						<li key={to}><Link to={to}>{title}</Link></li>
					))}
				</ul>
			</div>
		</div>
	)
}