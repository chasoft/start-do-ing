/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion"
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
		>
			.... INTRO... SETTINGS...DateTimeCalculatorCell
		</CellIntro>
	)
}

export function DateTimeCalculatorCell({ className }: GridCellProps) {
	return (
		<motion.div className={clsx("h-full", className)} layoutId={DATE_TIME_CALCULATOR.id}>
			<div className="grid grid-cols-2 gap-1 lg:gap-2 h-full">
				<div className="bg-blue-300 rounded-lg hover:bg-blue-400 cursor-pointer grid place-content-center">
					1
				</div>
				<div className="bg-blue-300 rounded-lg hover:bg-blue-400 cursor-pointer grid place-content-center">
					2
				</div>
				<div className="bg-blue-300 rounded-lg hover:bg-blue-400 cursor-pointer grid place-content-center">
					3
				</div>
				<div className="bg-blue-300 rounded-lg hover:bg-blue-400 cursor-pointer grid place-content-center">
					4
				</div>
			</div>
		</motion.div>
	)
}
