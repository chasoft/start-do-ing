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

/* ASSETS & DATA IMPORT */

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
		<motion.div
			className={clsx("h-full relative block overflow-hidden", className)}
			layoutId={metaData.id}
		>
			<CellGridLink to={metaData.to}>
				<div className="flex flex-col p-2">
					<h2 className="text-base font-semibold sm:text-xl line-clamp-1">
						{metaData.title}
					</h2>
					<div className="flex flex-col grow">
						{metaData.description && (
							<span className="text-sm line-clamp-2 sm:text-base">
								{metaData.description}
							</span>
						)}
					</div>
				</div>
				{isFirstCell(blockIndex) && <HomeLink />}
			</CellGridLink>
		</motion.div>
	)
}
