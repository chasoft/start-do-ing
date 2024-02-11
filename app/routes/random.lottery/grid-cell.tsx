/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { CellIntro, CellItem } from "~/components"
import type { GridCellProps } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { RANDOM_LOTTERY } from "./metadata"
import { RANDOM } from "../random/metadata"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function RandomLotteryCellIntro() {
	return (
		<CellIntro metaData={RANDOM_LOTTERY} upTo={RANDOM.to}>
			.... INTRO... SETTINGS...RandomLotteryCell
		</CellIntro>
	)
}

export function RandomLotteryCell({ className }: GridCellProps) {
	return <CellItem className={className} metaData={RANDOM_LOTTERY} />
}
