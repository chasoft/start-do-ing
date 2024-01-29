/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion"
import clsx from "clsx"

/* COMPONENTS & UTILS */
import { getDropdownPosition, isFirstCell } from "~/utils"
import { GridCellDropdownMenu, CellGridLink } from "."
import { HomeLink } from "./HomeLink"
import type { Block } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

type CellGroupProps = {
	className?: string
	blockIndex: number
	metaData: Block<string>
	dropdownMenuItems?: Array<{ title: string; to: string }>
}

export function CellGroup({ className, blockIndex, dropdownMenuItems, metaData }: CellGroupProps) {
	const dropdownPosition = getDropdownPosition(blockIndex)
	return (
		<motion.div className={clsx("h-full relative block", className)} layoutId={metaData.id}>
			<CellGridLink to={metaData.to}>
				<div className="grid h-full p-2 place-content-center">
					<h2 className="text-base font-semibold sm:text-xl line-clamp-1">{metaData.title}</h2>
					{metaData.description && <span className="text-sm line-clamp-2 sm:text-base">{metaData.description}</span>}
				</div>
				{isFirstCell(blockIndex) && <HomeLink />}
			</CellGridLink>
			<GridCellDropdownMenu position={dropdownPosition} items={dropdownMenuItems} />
		</motion.div>
	)
}
