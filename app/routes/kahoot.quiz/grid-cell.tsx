/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { CellIntro, CellItem } from "~/components"
import type { GridCellProps } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { KAHOOT_QUIZ } from "./metadata"
import { KAHOOT } from "../kahoot/metadata"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function KahootQuizCellIntro() {
	return (
		<CellIntro metaData={KAHOOT_QUIZ} upTo={KAHOOT.to}>
			.... INTRO... SETTINGS...DateTimeAnalogClockCell
		</CellIntro>
	)
}

export function KahootQuizCell({ className }: GridCellProps) {
	return <CellItem className={className} metaData={KAHOOT_QUIZ} />
}
