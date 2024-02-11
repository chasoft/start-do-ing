/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import clsx from "clsx"

/* COMPONENTS & UTILS */
import { CellGridEmpty, CellGridLeft, CellGridRight } from "."
import { DateTimeGroupCell } from "~/routes/date-time/grid-cell"
import { DevUtilsGroupCell } from "~/routes/dev-utils/grid-cell"
import { DomainsGroupCell } from "~/routes/domains/grid-cell"
import { HomeGridCellIntro } from "~/routes/_index/grid-cell"
import { KahootGroupCell } from "~/routes/kahoot/grid-cell"
import { LanguagesGroupCell } from "~/routes/languages/grid-cell"
import { MathsGroupCell } from "~/routes/maths/grid-cell"
import { OthersGroupCell } from "~/routes/others/grid-cell"
import { RandomGroupCell } from "~/routes/random/grid-cell"
import { UrlShortenerGroupCell } from "~/routes/url-shortener/grid-cell"
import type { GridCellsProps, GroupId } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function RootGridCells({
	className,
	layoutId
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
					<HomeGridCellIntro />
				</div>
			)
		case "date-time":
			return (
				<div className={clsx(className)}>
					<DateTimeGroupCell />
				</div>
			)
		case "dev-utils":
			return (
				<div className={clsx(className)}>
					<DevUtilsGroupCell />
				</div>
			)
		case "domains":
			return (
				<div className={clsx(className)}>
					<DomainsGroupCell />
				</div>
			)
		case "kahoot":
			return (
				<div className={clsx(className)}>
					<KahootGroupCell />
				</div>
			)
		case "languages":
			return (
				<div className={clsx(className)}>
					<LanguagesGroupCell />
				</div>
			)
		case "maths":
			return (
				<div className={clsx(className)}>
					<MathsGroupCell />
				</div>
			)
		case "random":
			return (
				<div className={clsx(className)}>
					<RandomGroupCell />
				</div>
			)
		case "url-shortener":
			return (
				<div className={clsx(className)}>
					<UrlShortenerGroupCell />
				</div>
			)
		case "others":
			return (
				<div className={clsx(className)}>
					<OthersGroupCell />
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
				<div className={clsx(className)}>
					<CellGridEmpty />
				</div>
			)
	}
}
