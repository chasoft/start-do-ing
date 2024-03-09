/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { CellIntro } from "~/components"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { DATE_TIME_COUNT_DOWN_TIME } from "./metadata"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function DateTimeCountDownTimeCellIntro({ blockIndex }: { blockIndex: number }) {
	return (
		<CellIntro
			metaData={DATE_TIME_COUNT_DOWN_TIME}
			upTo={DATE_TIME_COUNT_DOWN_TIME.to}
			blockIndex={blockIndex}
		/>
	)
}
