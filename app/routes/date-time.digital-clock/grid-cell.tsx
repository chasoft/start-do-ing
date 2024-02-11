/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { CellIntro, CellItem } from "~/components"
import type { GridCellProps } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { DATE_TIME_DIGITAL_CLOCK } from "./metadata"
import { DATE_TIME } from "../date-time/metadata"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function DateTimeDigitalClockCellIntro() {
	return (
		<CellIntro metaData={DATE_TIME_DIGITAL_CLOCK} upTo={DATE_TIME.to}>
			.... INTRO... SETTINGS...DateTimeDigitalClockCellIntro
		</CellIntro>
	)
}

export function DateTimeDigitalClockCell({ className }: GridCellProps) {
	return <CellItem className={className} metaData={DATE_TIME_DIGITAL_CLOCK} />
}
