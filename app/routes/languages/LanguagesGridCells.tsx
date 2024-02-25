/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import clsx from "clsx"

/* COMPONENTS & UTILS */
import {
	CellGridEmpty,
	CellGridLast,
	CellGridLeft,
	CellGridRight,
	CellIntroSwitcher
} from "~/components"
import {
	Languages100PopularChineseWordsCell,
	Languages100PopularChineseWordsCellIntro
} from "../languages.100-popular-chinese-words/grid-cell"
import {
	LanguagesChineseCharactersCell,
	LanguagesChineseCharactersCellIntro
} from "../languages.chinese-characters/grid-cell"
import { LanguagesGroupCell, LanguagesGroupCellIntro } from "./grid-cell"
import {
	LanguagesVietnameseReadingForKidsCell,
	LanguagesVietnameseReadingForKidsCellIntro
} from "../languages.vietnamese-reading-for-kids/grid-cell"
import type { GridCellsProps, LanguagesLayoutId } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { EMPTY_LAYOUT_ID } from "~/data"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function LanguagesGridCells({
	className,
	layoutId,
	blockIndex,
	isIntroBlock,
	lastGridCellBlocks
}: GridCellsProps<LanguagesLayoutId>): JSX.Element {
	switch (layoutId) {
		/**********************************************************************
		 *
		 *  CONTENT BLOCKS
		 *
		 *********************************************************************/
		case "languages":
			return (
				<CellIntroSwitcher
					contentBlock={<LanguagesGroupCell blockIndex={blockIndex} />}
					introBlock={<LanguagesGroupCellIntro blockIndex={blockIndex} />}
					isIntroBlock={isIntroBlock}
					className={className}
				/>
			)
		case "100-popular-chinese-words":
			return (
				<CellIntroSwitcher
					contentBlock={<Languages100PopularChineseWordsCell blockIndex={blockIndex} />}
					introBlock={
						<Languages100PopularChineseWordsCellIntro blockIndex={blockIndex} />
					}
					isIntroBlock={isIntroBlock}
					className={className}
				/>
			)
		case "chinese-characters":
			return (
				<CellIntroSwitcher
					contentBlock={<LanguagesChineseCharactersCell blockIndex={blockIndex} />}
					introBlock={<LanguagesChineseCharactersCellIntro blockIndex={blockIndex} />}
					isIntroBlock={isIntroBlock}
					className={className}
				/>
			)
		case "vietnamese-reading-for-kids":
			return (
				<CellIntroSwitcher
					contentBlock={<LanguagesVietnameseReadingForKidsCell blockIndex={blockIndex} />}
					introBlock={
						<LanguagesVietnameseReadingForKidsCellIntro blockIndex={blockIndex} />
					}
					isIntroBlock={isIntroBlock}
					className={className}
				/>
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
		case "last":
			return (
				<div className={clsx(className)}>
					<CellGridLast blocks={lastGridCellBlocks} blockIndex={blockIndex} />
				</div>
			)
		/**********************************************************************
		 *
		 *  EMPTY BLOCK
		 *  If layoutId is not recognized, it means that this block is empty.
		 *
		 *********************************************************************/
		case EMPTY_LAYOUT_ID:
			return (
				<div className={clsx(className)}>
					<CellGridEmpty />
				</div>
			)
		default:
			return (
				<div className={clsx(className)}>
					<CellGridEmpty />
				</div>
			)
	}
}
