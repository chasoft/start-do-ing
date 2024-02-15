/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { Text } from "@mantine/core"

/* COMPONENTS & UTILS */
import { CellGroup, CellIntro } from "~/components"
import { getMenuItemsFromBlocks } from "~/utils"
import type { GridCellProps } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { HOME } from "./metadata"
import { HOME_BLOCKS } from "~/data"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

const dropdownMenuItems = getMenuItemsFromBlocks(HOME_BLOCKS)

export function HomeGridCellIntro({
	className,
	blockIndex
}: {
	className?: string
	blockIndex: number
}) {
	return (
		<CellIntro
			metaData={HOME}
			upTo={HOME.to}
			className={className}
			blockIndex={blockIndex}
		>
			<Text lineClamp={2}>
				{`Unleash your creativity with engaging online tools, called "blocks". Explore, have fun, and share the joy with your friends!`}
			</Text>
		</CellIntro>
	)
}

export function HomeGridCell({ className, blockIndex }: GridCellProps) {
	return (
		<CellGroup
			blockIndex={blockIndex}
			className={className}
			dropdownMenuItems={dropdownMenuItems}
			metaData={HOME}
		/>
	)
}
