/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { CellIntro, CellItem } from "~/components"
import type { GridCellProps } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { OTHERS_RUNNING_TEXT } from "./metadata"
import { OTHERS } from "../others/metadata"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function OthersRunningTextCellIntro() {
	return (
		<CellIntro metaData={OTHERS_RUNNING_TEXT} upTo={OTHERS.to}>
			.... INTRO... SETTINGS...OthersRunningTextCell
		</CellIntro>
	)
}

export function OthersRunningTextCell({ className }: GridCellProps) {
	return <CellItem className={className} metaData={OTHERS_RUNNING_TEXT} />
}
