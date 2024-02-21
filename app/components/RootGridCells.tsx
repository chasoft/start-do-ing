/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import clsx from "clsx"

/* COMPONENTS & UTILS */
import { CellGridEmpty, CellGridLast, CellGridLeft } from "."
import { DateTimeGroupCell } from "~/routes/date-time/grid-cell"
import { DevUtilsGroupCell } from "~/routes/dev-utils/grid-cell"
import { DomainsGroupCell } from "~/routes/domains/grid-cell"
import { HomeGridCellIntro } from "~/routes/_index/grid-cell"
import { QuizGroupCell } from "~/routes/quiz/grid-cell"
import { LanguagesGroupCell } from "~/routes/languages/grid-cell"
import { MathsGroupCell } from "~/routes/maths/grid-cell"
import { OthersGroupCell } from "~/routes/others/grid-cell"
import { RandomGroupCell } from "~/routes/random/grid-cell"
import { SupportGridCellIntro } from "~/routes/support/grid-cell"
import { UrlShortenerGroupCell } from "~/routes/url-shortener/grid-cell"
import type { GridCellsProps, GroupId } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { EMPTY_LAYOUT_ID } from "~/data"
import { BooksGridCellIntro } from "~/routes/books/grid-cell"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function RootGridCells({
	className,
	layoutId,
	blockIndex,
	lastGridCellBlocks
}: GridCellsProps<GroupId>): JSX.Element {
	switch (layoutId) {
		/**********************************************************************
		 *
		 *  CONTENT BLOCKS
		 *
		 *********************************************************************/
		case "home":
			return (
				<div className={clsx(className)}>
					<HomeGridCellIntro blockIndex={blockIndex} />
				</div>
			)
		case "date-time":
			return (
				<div className={clsx(className)}>
					<DateTimeGroupCell blockIndex={blockIndex} />
				</div>
			)
		case "dev-utils":
			return (
				<div className={clsx(className)}>
					<DevUtilsGroupCell blockIndex={blockIndex} />
				</div>
			)
		case "domains":
			return (
				<div className={clsx(className)}>
					<DomainsGroupCell blockIndex={blockIndex} />
				</div>
			)
		case "quiz":
			return (
				<div className={clsx(className)}>
					<QuizGroupCell blockIndex={blockIndex} />
				</div>
			)
		case "languages":
			return (
				<div className={clsx(className)}>
					<LanguagesGroupCell blockIndex={blockIndex} />
				</div>
			)
		case "maths":
			return (
				<div className={clsx(className)}>
					<MathsGroupCell blockIndex={blockIndex} />
				</div>
			)
		case "random":
			return (
				<div className={clsx(className)}>
					<RandomGroupCell blockIndex={blockIndex} />
				</div>
			)
		case "url-shortener":
			return (
				<div className={clsx(className)}>
					<UrlShortenerGroupCell blockIndex={blockIndex} />
				</div>
			)
		case "others":
			return (
				<div className={clsx(className)}>
					<OthersGroupCell blockIndex={blockIndex} />
				</div>
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
		 *  ROOT BLOCKS
		 *
		 *********************************************************************/
		case "support":
			return (
				<div className={clsx(className)}>
					<SupportGridCellIntro blockIndex={blockIndex} />
				</div>
			)
		case "books":
			return (
				<div className={clsx(className)}>
					<BooksGridCellIntro blockIndex={blockIndex} />
				</div>
			)
		/**********************************************************************
		 *
		 *  FIX BLOCKS
		 *
		 *********************************************************************/
		default:
			return (
				<div className={clsx(className)}>
					<CellGridEmpty />
				</div>
			)
	}
}
