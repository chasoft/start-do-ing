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

export function RandomPasswordCellIntro({ blockIndex }: { blockIndex: number }) {
	return (
		<CellIntro metaData={RANDOM_PASSWORD} upTo={RANDOM.to} blockIndex={blockIndex}>
			.... INTRO... SETTINGS...RandomPasswordCell
		</CellIntro>
	)
}

export function RandomPasswordCell({ className, blockIndex }: GridCellProps) {
	return (
		<CellItem className={className} metaData={RANDOM_PASSWORD} blockIndex={blockIndex} />
	)
}
