/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { CellIntro, CellItem } from "~/components"
import type { GridCellProps } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { RANDOM_MAGIC_WHEEL } from "./metadata"
import { RANDOM } from "../random/metadata"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function RandomMagicWheelCellIntro() {
	return (
		<CellIntro metaData={RANDOM_MAGIC_WHEEL} upTo={RANDOM.to}>
			.... INTRO... SETTINGS...RandomMagicWheelCell
		</CellIntro>
	)
}

export function RandomMagicWheelCell({ className }: GridCellProps) {
	return <CellItem className={className} metaData={RANDOM_MAGIC_WHEEL} />
}
