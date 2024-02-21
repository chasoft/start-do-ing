/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion"
import clsx from "clsx"

/* COMPONENTS & UTILS */
import {
	CellGridEmpty,
	CellGridLast,
	CellGridLeft,
	CellIntroSwitcher
} from "~/components"
import { UrlShortenerGroupCell, UrlShortenerGroupCellIntro } from "./grid-cell"
import type { GridCellsProps, UrlShortenerLayoutId } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { BLOCK_NOT_FOUND, EMPTY_LAYOUT_ID } from "~/data"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function UrlShortenerGridCells({
	className,
	layoutId,
	blockIndex,
	isIntroBlock,
	lastGridCellBlocks
}: GridCellsProps<UrlShortenerLayoutId>): JSX.Element {
	switch (layoutId) {
		/**********************************************************************
		 *
		 *  CONTENT BLOCKS
		 *
		 *********************************************************************/
		case "url-shortener":
			return (
				<CellIntroSwitcher
					contentBlock={<UrlShortenerGroupCell blockIndex={blockIndex} />}
					introBlock={<UrlShortenerGroupCellIntro blockIndex={blockIndex} />}
					isIntroBlock={isIntroBlock}
					className={className}
				/>
			)
		case "url-shortener-index":
			return (
				<CellIntroSwitcher
					contentBlock={<UrlShortenerGroupCellIntro blockIndex={blockIndex} />}
					introBlock={<UrlShortenerGroupCellIntro blockIndex={blockIndex} />}
					isIntroBlock={isIntroBlock}
					className={className}
				/>
			)
		case EMPTY_LAYOUT_ID:
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
		// case "right":
		// 	return (
		// 		<div className={clsx(className)}>
		// 			<CellGridRight />
		// 		</div>
		// 	)
		case "last":
			return (
				<div className={clsx(className)}>
					<CellGridLast blocks={lastGridCellBlocks} blockIndex={blockIndex} />
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
						className={clsx("h-full rounded-lg bg-gray-200")}
						layoutId={BLOCK_NOT_FOUND}
					>
						<div className="grid h-full place-content-center text-lg text-red-900 md:text-xl">
							BLOCK NOT FOUND
							<p>{layoutId}</p>
						</div>
					</motion.div>
				</div>
			)
	}
}
