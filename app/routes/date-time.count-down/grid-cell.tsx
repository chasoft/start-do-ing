/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { CellIntro, CellItem } from "~/components"
import type { GridCellProps } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { DATE_TIME_COUNT_DOWN } from "./metadata"
import { DATE_TIME } from "../date-time/metadata"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function DateTimeCountDownCellIntro() {
	return (
		<CellIntro metaData={DATE_TIME_COUNT_DOWN} upTo={DATE_TIME.to}>
			.... INTRO... SETTINGS...DateTimeCountDownCell
		</CellIntro>
	)
}

export function DateTimeCountDownCell({ className }: GridCellProps) {
	return <CellItem className={className} metaData={DATE_TIME_COUNT_DOWN} />
}
