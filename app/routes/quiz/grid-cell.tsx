/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { getMenuItemsFromBlocks } from "~/utils"
import { CellGroup, CellIntro } from "~/components"
import type { GridCellProps } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { QUIZ } from "./metadata"
import { QUIZ_BLOCKS } from "~/data"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

const dropdownMenuItems = getMenuItemsFromBlocks(QUIZ_BLOCKS)

export function QuizGroupCellIntro({ blockIndex }: { blockIndex: number }) {
	return (
		<CellIntro metaData={QUIZ} upTo={QUIZ.to} blockIndex={blockIndex}>
			.... INTRO... SETTINGS...QuizGroupCell
		</CellIntro>
	)
}

export function QuizGroupCell({ className, blockIndex }: GridCellProps) {
	return (
		<CellGroup
			blockIndex={blockIndex}
			className={className}
			dropdownMenuItems={dropdownMenuItems}
			metaData={QUIZ}
		/>
	)
}
