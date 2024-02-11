/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import clsx from "clsx"

/* COMPONENTS & UTILS */
import { getMenuItemsFromBlocks } from "~/utils"
import { CellGroup, CellItem } from "~/components"
import type { GridCellProps } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import {
	BLOG,
	BLOG_AI,
	BLOG_CHESS,
	BLOG_PHILOSOPHY,
	BLOG_PROGRAMMING,
	BLOG_TRAVEL
} from "./metadata"
import { BLOG_BLOCKS } from "~/data"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

const dropdownMenuItems = getMenuItemsFromBlocks(BLOG_BLOCKS)

export function BlogGroupCell({ className }: GridCellProps) {
	return (
		<CellGroup
			className={className}
			dropdownMenuItems={dropdownMenuItems}
			metaData={BLOG}
		/>
	)
}

export function BlogAICell({ className }: GridCellProps) {
	return <CellItem className={className} metaData={BLOG_AI} />
}

export function BlogChessCell({ className }: GridCellProps) {
	return <CellItem className={className} metaData={BLOG_CHESS} />
}

export function BlogPhilosophyCell({ className }: GridCellProps) {
	return <CellItem className={className} metaData={BLOG_PHILOSOPHY} />
}

export function BlogProgrammingCell({ className }: GridCellProps) {
	return <CellItem className={className} metaData={BLOG_PROGRAMMING} />
}

export function BlogTravelCell({ className }: GridCellProps) {
	return <CellItem className={className} metaData={BLOG_TRAVEL} />
}
