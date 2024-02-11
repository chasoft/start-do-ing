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
import { DomainsBuilderCell, DomainsBuilderCellIntro } from "../domains.builder/grid-cell"
import {
	DomainsExtensionsCell,
	DomainsExtensionsCellIntro
} from "../domains.extensions/grid-cell"
import { DomainsGroupCell, DomainsGroupCellIntro } from "./grid-cell"
import { DomainsWhoiCell, DomainsWhoiCellIntro } from "../domains.whois/grid-cell"
import type { DomainsLayoutId, GridCellsProps } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { BLOCK_NOT_FOUND } from "~/data"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function DomainsGridCells({
	className,
	layoutId,
	isIntroBlock
}: GridCellsProps<DomainsLayoutId>): JSX.Element {
	switch (layoutId) {
		/**********************************************************************
		 *
		 *  CONTENT BLOCKS
		 *
		 *********************************************************************/
		case "domains":
			return (
				<CellIntroSwitcher
					contentBlock={<DomainsGroupCell />}
					introBlock={<DomainsGroupCellIntro />}
					isIntroBlock={isIntroBlock}
					className={className}
				/>
			)
		case "domains-builder":
			return (
				<CellIntroSwitcher
					contentBlock={<DomainsBuilderCell />}
					introBlock={<DomainsBuilderCellIntro />}
					isIntroBlock={isIntroBlock}
					className={className}
				/>
			)
		case "domains-extensions":
			return (
				<CellIntroSwitcher
					contentBlock={<DomainsExtensionsCell />}
					introBlock={<DomainsExtensionsCellIntro />}
					isIntroBlock={isIntroBlock}
					className={className}
				/>
			)
		case "domains-whois":
			return (
				<CellIntroSwitcher
					contentBlock={<DomainsWhoiCell />}
					introBlock={<DomainsWhoiCellIntro />}
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
