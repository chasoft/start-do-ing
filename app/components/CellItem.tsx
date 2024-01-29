/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion"
import clsx from "clsx"

/* COMPONENTS & UTILS */
import { CellGridLink } from "."
import { HomeLink } from "./HomeLink"
import { isFirstCell } from "~/utils"
import type { Block } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

type CellItemProps = {
	className?: string
	blockIndex: number
	metaData: Block<string>
}

export function CellItem({ className, blockIndex, metaData }: CellItemProps) {
	return (
		<motion.div className={clsx("h-full", className)} layoutId={metaData.id}>
			<CellGridLink to={metaData.to}>
				<div className="grid h-full p-2 place-content-center">
					<h2 className="text-base font-semibold sm:text-xl line-clamp-1">{metaData.title}</h2>
					{metaData.description && <span className="text-sm line-clamp-2 sm:text-base">{metaData.description}</span>}
				</div>
				{isFirstCell(blockIndex) && <HomeLink />}
			</CellGridLink>
		</motion.div>
	)
}
