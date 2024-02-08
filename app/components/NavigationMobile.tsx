/* FRAMEWORK */
import React, { useState } from "react";

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion";
import clsx from "clsx";

/* COMPONENTS & UTILS */
import { getBlocks, getDynamicBlocks, useBreakpoint, useCurrentLayoutId, useIsMobileWindowSize } from "~/utils";
import type { Block, NavigationGridCells, PageId } from "~/utils/types";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */

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

	const isMobileWindowSize = useIsMobileWindowSize();

	React.useLayoutEffect(() => {
		updateLayouts(getBlocks(blocks as Block<PageId>[], currenLayoutId))
	}, [currenLayoutId, updateLayouts, breakpoint, blocks])

	return (
		<motion.div
			className="h-full col-span-4 col-start-1 overflow-hidden md:col-span-3 2xl:col-span-4 3xl:col-span-5"
			initial={{ opacity: isMobileWindowSize ? 1 : 0 }}
			animate={{ opacity: isMobileWindowSize ? 0 : 1 }}
		>
			<div className="mb-4">
				{layouts.map((block) => block.id).join(", ")}
			</div>
			<div>{children}</div>
		</motion.div>
	)
}