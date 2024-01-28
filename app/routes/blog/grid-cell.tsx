/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion";
import clsx from "clsx";

/* COMPONENTS & UTILS */
import { getMenuItemsFromBlocks, isFirstCell, isFirstRow } from "~/utils";
import { GridCellDropdownMenu } from "~/components/GridCellDropdownMenu";
import { GridCellLink } from "~/components";
import { HomeLink } from "~/components/HomeLink";
import type { GridCellProps } from "~/utils/types";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */
import { BLOG, BLOG_AI, BLOG_CHESS, BLOG_PHILOSOPHY, BLOG_PROGRAMMING, BLOG_TRAVEL } from "./metadata";
import { BLOG_BLOCKS } from "~/data";

/***************************************************************************
 * 
 *  START
 *  
 **************************************************************************/

const dropdownMenuItems = getMenuItemsFromBlocks(BLOG_BLOCKS)

export function BlogGroupCell({ className, blockIndex }: GridCellProps) {
	const dropdownPosition = isFirstRow(blockIndex) ? "bottom-right" : "top-right"
	return (
		<motion.div className={clsx("h-full relative block", className)} layoutId={BLOG.id}>
			<GridCellLink to={BLOG.to}>
				<div className="grid h-full p-2 place-content-center">
					<h2 className="text-lg font-semibold sm:text-2xl line-clamp-1">Blog Group</h2>
					<span>What? Blog Group what?</span>
				</div>
				{isFirstCell(blockIndex) && <HomeLink />}
			</GridCellLink>
			<GridCellDropdownMenu position={dropdownPosition} items={dropdownMenuItems} />
		</motion.div>
	)
}

export function BlogAICell({ className, blockIndex }: GridCellProps) {
	return (
		<motion.div className={clsx("h-full", className)} layoutId={BLOG_AI.id}>
			<GridCellLink to={BLOG_AI.to}>
				<div className="grid h-full p-2 place-content-center">
					<h2 className="text-lg font-semibold sm:text-2xl line-clamp-1">Blog AI</h2>
					<span>What? Blog AI what?</span>
				</div>
				{isFirstCell(blockIndex) && <HomeLink />}
			</GridCellLink>
		</motion.div>
	)
}

export function BlogChessCell({ className, blockIndex }: GridCellProps) {
	return (
		<motion.div className={clsx("h-full", className)} layoutId={BLOG_CHESS.id}>
			<GridCellLink to={BLOG_CHESS.to}>
				<div className="grid h-full p-2 place-content-center">
					<h2 className="text-lg font-semibold sm:text-2xl line-clamp-1">Blog Chess</h2>
					<span>What? Blog Chess what?</span>
				</div>
				{isFirstCell(blockIndex) && <HomeLink />}
			</GridCellLink>
		</motion.div>
	)
}

export function BlogPhilosophyCell({ className, blockIndex }: GridCellProps) {
	return (
		<motion.div className={clsx("h-full", className)} layoutId={BLOG_PHILOSOPHY.id}>
			<GridCellLink to={BLOG_PHILOSOPHY.to}>
				<div className="grid h-full p-2 place-content-center">
					<h2 className="text-lg font-semibold sm:text-2xl line-clamp-1">Blog Philosophy</h2>
					<span>What? Blog Philosophy what?</span>
				</div>
				{isFirstCell(blockIndex) && <HomeLink />}
			</GridCellLink>
		</motion.div>
	)
}

export function BlogProgrammingCell({ className, blockIndex }: GridCellProps) {
	return (
		<motion.div className={clsx("h-full", className)} layoutId={BLOG_PROGRAMMING.id}>
			<GridCellLink to={BLOG_PROGRAMMING.to}>
				<div className="grid h-full p-2 place-content-center">
					<h2 className="text-lg font-semibold sm:text-2xl line-clamp-1">Blog Programming</h2>
					<span>What? Blog Programming what?</span>
				</div>
				{isFirstCell(blockIndex) && <HomeLink />}
			</GridCellLink>
		</motion.div>
	)
}

export function BlogTravelCell({ className, blockIndex }: GridCellProps) {
	return (
		<motion.div className={clsx("h-full", className)} layoutId={BLOG_TRAVEL.id}>
			<GridCellLink to={BLOG_TRAVEL.to}>
				<div className="grid h-full p-2 place-content-center">
					<h2 className="text-lg font-semibold sm:text-2xl line-clamp-1">Blog Travel</h2>
					<span>What? Blog Travel what?</span>
				</div>
				{isFirstCell(blockIndex) && <HomeLink />}
			</GridCellLink>
		</motion.div>
	)
}
