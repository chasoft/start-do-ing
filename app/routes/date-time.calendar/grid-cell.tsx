/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { CellIntro, CellItem } from "~/components"
import type { GridCellProps } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { DATE_TIME_CALENDAR } from "./metadata"
import { DATE_TIME } from "../date-time/metadata"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function DateTimeCalendarCellIntro() {
	return (
		<CellIntro metaData={DATE_TIME_CALENDAR} upTo={DATE_TIME.to}>
			.... INTRO... SETTINGS...DateTimeCalendarCell
		</CellIntro>
	)
}

export function DateTimeCalendarCell({ className }: GridCellProps) {
	return <CellItem className={className} metaData={DATE_TIME_CALENDAR} />
}
