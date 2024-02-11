/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { CellIntro, CellItem } from "~/components"
import type { GridCellProps } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { RANDOM_USERNAME } from "./metadata"
import { RANDOM } from "../random/metadata"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function RandomUsernameCellIntro() {
	return (
		<CellIntro metaData={RANDOM_USERNAME} upTo={RANDOM.to}>
			.... INTRO... SETTINGS...RandomUsernameCell
		</CellIntro>
	)
}

export function RandomUsernameCell({ className }: GridCellProps) {
	return <CellItem className={className} metaData={RANDOM_USERNAME} />
}
