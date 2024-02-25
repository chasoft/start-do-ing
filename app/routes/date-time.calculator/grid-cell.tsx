/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import clsx from "clsx"

/* COMPONENTS & UTILS */
import { CellIntro } from "~/components"
import type { GridCellProps } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { DATE_TIME } from "../date-time/metadata"
import { DATE_TIME_CALCULATOR } from "./metadata"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function DateTimeCalculatorCellIntro({ blockIndex }: { blockIndex: number }) {
	return (
		<CellIntro
			metaData={DATE_TIME_CALCULATOR}
			upTo={DATE_TIME.to}
			blockIndex={blockIndex}
		/>
	)
}

export function DateTimeCalculatorCell({ className }: GridCellProps) {
	return (
		<div className={clsx("h-full", className)}>
			<div className="grid h-full grid-cols-2 gap-1 lg:gap-2">
				<div className="grid cursor-pointer place-content-center rounded-lg bg-blue-300 hover:bg-blue-400">
					1
				</div>
				<div className="grid cursor-pointer place-content-center rounded-lg bg-blue-300 hover:bg-blue-400">
					2
				</div>
				<div className="grid cursor-pointer place-content-center rounded-lg bg-blue-300 hover:bg-blue-400">
					3
				</div>
				<div className="grid cursor-pointer place-content-center rounded-lg bg-blue-300 hover:bg-blue-400">
					4
				</div>
			</div>
		</div>
	)
}
