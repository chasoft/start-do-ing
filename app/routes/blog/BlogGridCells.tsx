/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion";
import clsx from "clsx";

/* COMPONENTS & UTILS */
import { BlogAICell, BlogChessCell, BlogGroupCell, BlogPhilosophyCell, BlogProgrammingCell, BlogTravelCell } from "./grid-cell";
import { CellGridEmpty, CellGridLast, CellGridLeft, RightGridCell } from "~/components";
import type { BlogLayoutId, GridCellsProps } from "~/utils/types";

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { BLOCK_NOT_FOUND } from "~/data";

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

export function BlogGridCells({ className, layoutId, blockIndex }: GridCellsProps<BlogLayoutId>): JSX.Element {
	switch (layoutId) {
		/**********************************************************************
		 * 
		 *  CONTENT BLOCKS
		 * 
		 *********************************************************************/
		case "blog":
			return (
				<div className={clsx(className)}>
					<BlogGroupCell blockIndex={blockIndex} />
				</div>
			)
		case "AI":
			return (
				<div className={clsx(className)}>
					<BlogAICell blockIndex={blockIndex} />
				</div>
			)
		case "chess":
			return (
				<div className={clsx(className)}>
					<BlogChessCell blockIndex={blockIndex} />
				</div>
			)
		case "philosophy":
			return (
				<div className={clsx(className)}>
					<BlogPhilosophyCell blockIndex={blockIndex} />
				</div>
			)
		case "programming":
			return (
				<div className={clsx(className)}>
					<BlogProgrammingCell blockIndex={blockIndex} />
				</div>
			)
		case "travel":
			return (
				<div className={clsx(className)}>
					<BlogTravelCell blockIndex={blockIndex} />
				</div>
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
					<RightGridCell />
				</div>
			)
		case "last":
			return (
				<div className={clsx(className)}>
					<CellGridLast />
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
					<motion.div className={clsx("h-full bg-gray-200 rounded-lg")} layoutId={BLOCK_NOT_FOUND}>
						<div className="grid h-full text-lg md:text-xl text-red-900 place-content-center">
							BLOCK NOT FOUND
							<p>{layoutId}</p>
						</div>
					</motion.div>
				</div>
			);
	}
}