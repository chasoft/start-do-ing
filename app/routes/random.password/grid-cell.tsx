/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { CellIntro, CellItem } from "~/components"
import type { GridCellProps } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { RANDOM_PASSWORD } from "./metadata"
import { RANDOM } from "../random/metadata"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function RandomPasswordCellIntro() {
	return (
		<CellIntro metaData={RANDOM_PASSWORD} upTo={RANDOM.to}>
			.... INTRO... SETTINGS...RandomPasswordCell
		</CellIntro>
	)
}

export function RandomPasswordCell({ className }: GridCellProps) {
	return <CellItem className={className} metaData={RANDOM_PASSWORD} />
}
