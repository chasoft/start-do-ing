/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion"
import clsx from "clsx"

/* COMPONENTS & UTILS */
import { CellGridEmpty, CellGridLast, CellGridLeft, RightGridCell } from "~/components"
import { UrlShortenerGroupCell } from "./grid-cell"
import { URLShortenerIndexCell } from "../url-shortener._index/grid-cell"
import type { GridCellsProps, UrlShortenerLayoutId } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { BLOCK_NOT_FOUND } from "~/data"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function UrlShortenerGridCells({
	className,
	layoutId,
	blockIndex
}: GridCellsProps<UrlShortenerLayoutId>): JSX.Element {
	switch (layoutId) {
		/**********************************************************************
		 *
		 *  CONTENT BLOCKS
		 *
		 *********************************************************************/
		case "url-shortener":
			return (
				<div className={clsx(className)}>
					<UrlShortenerGroupCell blockIndex={blockIndex} />
				</div>
			)
		case "url-shortener-index":
			return (
				<div className={clsx(className)}>
					<URLShortenerIndexCell blockIndex={blockIndex} />
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
						<div className="grid h-full text-lg text-red-900 md:text-xl place-content-center">
							BLOCK NOT FOUND
							<p>{layoutId}</p>
						</div>
					</motion.div>
				</div>
			)
	}
}
