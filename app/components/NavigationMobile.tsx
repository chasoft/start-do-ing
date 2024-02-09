/* FRAMEWORK */
import React, { useState } from "react";
import { Link } from "@remix-run/react";

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion";

/* COMPONENTS & UTILS */
import { getBlocks, getDynamicBlocks, useBreakpoint, useCurrentLayoutId } from "~/utils";
import type { Block, NavigationGridCells, PageId } from "~/utils/types";

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

/**
 * NavigationGrid is used in `nested routes`,
 * it will persists the state for the whole branch.
 */
export function NavigationMobile({ GridCell, blocks, children }: { GridCell: NavigationGridCells, blocks: Block<unknown>[], children: React.ReactNode }) {
	const [layouts, updateLayouts] = useState(() => [...getDynamicBlocks(blocks as Block<PageId>[])])
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const breakpoint = useBreakpoint()
	const currenLayoutId = useCurrentLayoutId()

	React.useEffect(() => {
		updateLayouts(getBlocks(blocks as Block<PageId>[], currenLayoutId))
	}, [currenLayoutId, updateLayouts, breakpoint, blocks])

	return (
		<motion.div className="p-2">
			<div className="flex flex-wrap gap-2 mb-4">
				{layouts.filter(l => l.id !== "empty").map((block) => (
					<span key={block.id} className="py-1 badge badge-lg hover:badge-primary">
						<Link to={block.to}>
							{block.title}
						</Link>
					</span>
				))}
			</div>
			<div>
				{children}
			</div>
		</motion.div>
	)
}