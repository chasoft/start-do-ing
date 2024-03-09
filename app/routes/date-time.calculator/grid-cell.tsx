/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { CellIntro, CellItem } from "~/components"
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

export function DateTimeCalculatorCell({ className, blockIndex }: GridCellProps) {
	return (
		<CellItem
			className={className}
			metaData={DATE_TIME_CALCULATOR}
			blockIndex={blockIndex}
		/>
	)
}
