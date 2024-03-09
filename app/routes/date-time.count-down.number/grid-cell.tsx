/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { CellIntro } from "~/components"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { DATE_TIME_COUNT_DOWN_NUMBER } from "./metadata"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function DateTimeCountDownNumberCellIntro({ blockIndex }: { blockIndex: number }) {
	return (
		<CellIntro
			metaData={DATE_TIME_COUNT_DOWN_NUMBER}
			upTo={DATE_TIME_COUNT_DOWN_NUMBER.to}
			blockIndex={blockIndex}
		/>
	)
}
