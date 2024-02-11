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
import { MathsEmpty1Cell, MathsEmpty1CellIntro } from "../maths.empty-1/grid-cell"
import { MathsEmpty2Cell, MathsEmpty2CellIntro } from "../maths.empty-2/grid-cell"
import { MathsEmpty3Cell, MathsEmpty3CellIntro } from "../maths.empty-3/grid-cell"
import { MathsEmpty4Cell, MathsEmpty4CellIntro } from "../maths.empty-4/grid-cell"
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
	layoutId,
	isIntroBlock
}: GridCellsProps<MathsLayoutId>): JSX.Element {
	switch (layoutId) {
		/**********************************************************************
		 *
		 *  CONTENT BLOCKS
		 *
		 *********************************************************************/
		case "maths-empty-1":
			return (
				<CellIntroSwitcher
					contentBlock={<MathsEmpty1Cell />}
					introBlock={<MathsEmpty1CellIntro />}
					isIntroBlock={isIntroBlock}
					className={className}
				/>
			)
		case "maths-empty-2":
			return (
				<CellIntroSwitcher
					contentBlock={<MathsEmpty2Cell />}
					introBlock={<MathsEmpty2CellIntro />}
					isIntroBlock={isIntroBlock}
					className={className}
				/>
			)
		case "maths-empty-3":
			return (
				<CellIntroSwitcher
					contentBlock={<MathsEmpty3Cell />}
					introBlock={<MathsEmpty3CellIntro />}
					isIntroBlock={isIntroBlock}
					className={className}
				/>
			)
		case "maths-empty-4":
			return (
				<CellIntroSwitcher
					contentBlock={<MathsEmpty4Cell />}
					introBlock={<MathsEmpty4CellIntro />}
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
