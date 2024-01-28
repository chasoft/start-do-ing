/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion";
import clsx from "clsx";

/* COMPONENTS & UTILS */
import { EmptyGridCell, LastGridCell, LeftGridCell, RightGridCell } from "~/components";
import { Languages100PopularChineseWordsCell } from "../languages.100-popular-chinese-words/grid-cell";
import { LanguagesChineseCharactersCell } from "../languages.chinese-characters/grid-cell";
import { LanguagesGroupCell } from "./grid-cell";
import { LanguagesVietnameseReadingForKidsCell } from "../languages.vietnamese-reading-for-kids/grid-cell";
import type { GridCellsProps, LanguagesLayoutId } from "~/utils/types";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */
import { BLOCK_NOT_FOUND } from "~/data";

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

export function LanguagesGridCells({ className, isFirstCell, layoutId }: GridCellsProps<LanguagesLayoutId>): JSX.Element {
	switch (layoutId) {
		/**********************************************************************
		 * 
		 *  CONTENT BLOCKS
		 * 
		 *********************************************************************/
		case "languages":
			return (
				<div className={clsx(className)}>
					<LanguagesGroupCell isFirstCell={isFirstCell} />
				</div>
			)
		case "100-popular-chinese-words":
			return (
				<div className={clsx(className)}>
					<Languages100PopularChineseWordsCell isFirstCell={isFirstCell} />
				</div>
			)
		case "chinese-characters":
			return (
				<div className={clsx(className)}>
					<LanguagesChineseCharactersCell isFirstCell={isFirstCell} />
				</div>
			)
		case "vietnamese-reading-for-kids":
			return (
				<div className={clsx(className)}>
					<LanguagesVietnameseReadingForKidsCell isFirstCell={isFirstCell} />
				</div>
			)
		case "empty":
			return (
				<div className={clsx(className)}>
					<EmptyGridCell />
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
					<LeftGridCell />
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
					<LastGridCell />
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