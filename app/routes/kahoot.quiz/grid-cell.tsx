/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { CellItem } from "~/components"
import type { GridCellProps } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { KAHOOT_QUIZ } from "./metadata"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function KahootQuizCell({ className }: GridCellProps) {
	return <CellItem className={className} metaData={KAHOOT_QUIZ} />
}
