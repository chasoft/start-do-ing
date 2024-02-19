/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { CellIntro, CellItem } from "~/components"
import type { GridCellProps } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { VIETNAM_TRAFFIC_LAW } from "./metadata"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function VietnamTrafficLawCellIntro({ blockIndex }: { blockIndex: number }) {
	return (
		<CellIntro
			metaData={VIETNAM_TRAFFIC_LAW}
			upTo={VIETNAM_TRAFFIC_LAW.to}
			blockIndex={blockIndex}
		>
			.... INTRO... SETTINGS...VietnamTrafficLawCell
		</CellIntro>
	)
}

export function VietnamTrafficLawCell({ className, blockIndex }: GridCellProps) {
	return (
		<CellItem
			className={className}
			metaData={VIETNAM_TRAFFIC_LAW}
			blockIndex={blockIndex}
		/>
	)
}
