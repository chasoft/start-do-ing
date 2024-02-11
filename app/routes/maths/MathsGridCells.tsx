/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion"
import clsx from "clsx"

/* COMPONENTS & UTILS */
import { CellGridEmpty, CellGridLast, CellGridLeft, RightGridCell } from "~/components"
import { MathsEmpty1Cell } from "../maths.empty-1/grid-cell"
import { MathsEmpty2Cell } from "../maths.empty-2/grid-cell"
import { MathsEmpty3Cell } from "../maths.empty-3/grid-cell"
import { MathsEmpty4Cell } from "../maths.empty-4/grid-cell"
import type { GridCellsProps, MathsLayoutId } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { BLOCK_NOT_FOUND } from "~/data"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function MathsGridCells({
	className,
	layoutId
}: GridCellsProps<MathsLayoutId>): JSX.Element {
	switch (layoutId) {
		/**********************************************************************
		 *
		 *  CONTENT BLOCKS
		 *
		 *********************************************************************/
		case "maths-empty-1":
			return (
				<div className={clsx(className)}>
					<MathsEmpty1Cell />
				</div>
			)
		case "maths-empty-2":
			return (
				<div className={clsx(className)}>
					<MathsEmpty2Cell />
				</div>
			)
		case "maths-empty-3":
			return (
				<div className={clsx(className)}>
					<MathsEmpty3Cell />
				</div>
			)
		case "maths-empty-4":
			return (
				<div className={clsx(className)}>
					<MathsEmpty4Cell />
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
