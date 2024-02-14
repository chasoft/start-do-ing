/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { CellIntro, CellItem } from "~/components"
import type { GridCellProps } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { DATE_TIME_ANALOG_CLOCK } from "./metadata"
import { DATE_TIME } from "../date-time/metadata"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function DateTimeAnalogClockCellIntro({ blockIndex }: { blockIndex: number }) {
	return (
		<CellIntro
			metaData={DATE_TIME_ANALOG_CLOCK}
			upTo={DATE_TIME.to}
			blockIndex={blockIndex}
		>
			.... INTRO... SETTINGS...DateTimeAnalogClockCell
		</CellIntro>
	)
}

export function DateTimeAnalogClockCell({ className, blockIndex }: GridCellProps) {
	return (
		<CellItem
			className={className}
			metaData={DATE_TIME_ANALOG_CLOCK}
			blockIndex={blockIndex}
		/>
	)
}
