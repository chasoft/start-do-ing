/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import clsx from "clsx"

/* COMPONENTS & UTILS */

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function CellGridLeft({ className }: { className?: string }) {
	return (
		<div className={clsx("h-full", className)}>
			<div className="size-full"></div>
		</div>
	)
}
