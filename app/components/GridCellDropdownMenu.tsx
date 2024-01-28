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
		title: string,
		to: string,
		icon?: string,	//TODO: implement icon for menu item
	}>
}

const positionCss: Record<Position, string> = {
	"top-right": "top-0 right-0",
	"bottom-left": "bottom-0 left-0",
	"bottom-right": "bottom-0 right-0",
}

export function GridCellDropdownMenu({ position, items }: DropdownMenuProps) {
	if (typeof window === "undefined")
		return null

	if (window.location.pathname !== "/")
		return null

	return (
		<div className={clsx("absolute", positionCss[position])}>
			<details className="dropdown">
				<summary className="m-1 btn"><IconMore /></summary>
				<ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
					{items.map(({ title, to }) => (
						<li key={to}><Link to={to}>{title}</Link></li>
					))}
				</ul>
			</details>
		</div>
	)
}