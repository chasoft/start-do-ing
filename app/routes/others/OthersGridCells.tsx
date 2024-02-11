/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion"
import clsx from "clsx"

/* COMPONENTS & UTILS */
import {
	CellGridEmpty,
	CellGridLeft,
	CellGridRight,
	CellIntroSwitcher
} from "~/components"
import { OthersGroupCell, OthersGroupCellIntro } from "./grid-cell"
import {
	OthersRunningTextCell,
	OthersRunningTextCellIntro
} from "../others.running-text/grid-cell"
import type { GridCellsProps, OthersLayoutId } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { BLOCK_NOT_FOUND } from "~/data"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function OthersGridCells({
	className,
	layoutId,
	isIntroBlock
}: GridCellsProps<OthersLayoutId>): JSX.Element {
	switch (layoutId) {
		/**********************************************************************
		 *
		 *  CONTENT BLOCKS
		 *
		 *********************************************************************/
		case "others":
			return (
				<CellIntroSwitcher
					contentBlock={<OthersGroupCell />}
					introBlock={<OthersGroupCellIntro />}
					isIntroBlock={isIntroBlock}
					className={className}
				/>
			)
		case "others-running-text":
			return (
				<CellIntroSwitcher
					contentBlock={<OthersRunningTextCell />}
					introBlock={<OthersRunningTextCellIntro />}
					isIntroBlock={isIntroBlock}
					className={className}
				/>
			)
		case "empty":
			return (
				<div className={clsx(className)}>
					<CellGridEmpty />
				</div>
			)
		/**********************************************************************
		 *
		 *  FEATURED BLOCKS
		 *
		 *********************************************************************/
		case "left":
			return (
				<div className={clsx(className)}>
					<CellGridLeft />
				</div>
			)
		case "right":
			return (
				<div className={clsx(className)}>
					<CellGridRight />
				</div>
			)
		/**********************************************************************
		 *
		 *  FIX BLOCKS
		 *
		 *********************************************************************/
		default:
			return (
				<div className={clsx(className, "h-full")}>
					<motion.div
						className={clsx("h-full bg-gray-200 rounded-lg")}
						layoutId={BLOCK_NOT_FOUND}
					>
						<div className="grid h-full text-lg md:text-xl text-red-900 place-content-center">
							BLOCK NOT FOUND
							<p>{layoutId}</p>
						</div>
					</motion.div>
				</div>
			)
	}
}
