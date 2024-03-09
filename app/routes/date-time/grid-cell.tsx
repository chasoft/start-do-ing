/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import clsx from "clsx"

/* COMPONENTS & UTILS */
import { getMenuItemsFromBlocks, isLayoutGroupId } from "~/utils"
import { CellGridEmpty, CellGroup, CellIntro, CellItem } from "~/components"
import type { GridCellProps } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { DATE_TIME } from "./metadata"
import { DATE_TIME_BLOCKS } from "~/data"
import { DATE_TIME_COUNT_DOWN_DATE } from "../date-time.count-down.date/metadata"
import { DATE_TIME_COUNT_DOWN_NUMBER } from "../date-time.count-down.number/metadata"
import { DATE_TIME_COUNT_DOWN_TIME } from "../date-time.count-down.time/metadata"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

const dropdownMenuItems = getMenuItemsFromBlocks(
	DATE_TIME_BLOCKS.filter((block) => !isLayoutGroupId(block.id))
)

export function DateTimeGroupCellIntro({ blockIndex }: { blockIndex: number }) {
	return <CellIntro metaData={DATE_TIME} upTo={DATE_TIME.to} blockIndex={blockIndex} />
}

/**
 * DateTimeCountDownCell is used for all count down cells
 */
export function DateTimeCountDownCell({ className, blockIndex }: GridCellProps) {
	return (
		<div className={clsx("h-full", className)}>
			<div className="grid h-full grid-cols-2 gap-1 lg:gap-2">
				<CellItem
					className={className}
					metaData={DATE_TIME_COUNT_DOWN_NUMBER}
					blockIndex={blockIndex}
				/>
				<CellItem
					className={className}
					metaData={DATE_TIME_COUNT_DOWN_TIME}
					blockIndex={blockIndex + 1}
				/>
				<CellItem
					className={className}
					metaData={DATE_TIME_COUNT_DOWN_DATE}
					blockIndex={blockIndex + 2}
				/>
				<CellGridEmpty />
			</div>
		</div>
	)
}

export function DateTimeGroupCell({ className, blockIndex }: GridCellProps) {
	return (
		<CellGroup
			blockIndex={blockIndex}
			className={className}
			dropdownMenuItems={dropdownMenuItems}
			metaData={DATE_TIME}
		/>
	)
}
