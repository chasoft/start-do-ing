/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion"
import clsx from "clsx"

/* COMPONENTS & UTILS */
import {
	CellGridEmpty,
	CellGridLast,
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
	blockIndex,
	isIntroBlock,
	lastGridCellBlocks
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
					contentBlock={<DomainsGroupCell blockIndex={blockIndex} />}
					introBlock={<DomainsGroupCellIntro blockIndex={blockIndex} />}
					isIntroBlock={isIntroBlock}
					className={className}
				/>
			)
		case "domains-builder":
			return (
				<CellIntroSwitcher
					contentBlock={<DomainsBuilderCell blockIndex={blockIndex} />}
					introBlock={<DomainsBuilderCellIntro blockIndex={blockIndex} />}
					isIntroBlock={isIntroBlock}
					className={className}
				/>
			)
		case "domains-extensions":
			return (
				<CellIntroSwitcher
					contentBlock={<DomainsExtensionsCell blockIndex={blockIndex} />}
					introBlock={<DomainsExtensionsCellIntro blockIndex={blockIndex} />}
					isIntroBlock={isIntroBlock}
					className={className}
				/>
			)
		case "domains-whois":
			return (
				<CellIntroSwitcher
					contentBlock={<DomainsWhoiCell blockIndex={blockIndex} />}
					introBlock={<DomainsWhoiCellIntro blockIndex={blockIndex} />}
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
