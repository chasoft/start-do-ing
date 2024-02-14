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

export function RandomMagicWheelCellIntro({ blockIndex }: { blockIndex: number }) {
	return (
		<CellIntro metaData={RANDOM_MAGIC_WHEEL} upTo={RANDOM.to} blockIndex={blockIndex}>
			.... INTRO... SETTINGS...RandomMagicWheelCell
		</CellIntro>
	)
}

export function RandomMagicWheelCell({ className, blockIndex }: GridCellProps) {
	return (
		<CellItem
			className={className}
			metaData={RANDOM_MAGIC_WHEEL}
			blockIndex={blockIndex}
		/>
	)
}
