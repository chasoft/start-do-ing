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
import { SIDE_BLOCKS } from "~/data";

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/


/**
 * NavigationGrid is used in `nested routes`,
 * it will persists the state for the whole branch.
 */
export function NavigationGrid({ GridCell, blocks, children }: { GridCell: NavigationGridCells, blocks: Block<unknown>[], children: React.ReactNode }) {
	const isMobileWindowSize = useIsMobileWindowSize();
	const [layouts, updateLayouts] = useState(() => [...getDynamicBlocks(blocks as Block<PageId>[])])
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const layoutIds = layouts.map((block) => block.id) as any[]
	const breakpoint = useBreakpoint()
	const currenLayoutId = useCurrentLayoutId()

	React.useLayoutEffect(() => {
		updateLayouts(getBlocks(blocks as Block<PageId>[], currenLayoutId))
	}, [currenLayoutId, updateLayouts, breakpoint, blocks])

	return (
		<>
			<motion.div
				className={clsx(
					"grid grid-cols-4 md:grid-cols-5 2xl:grid-cols-6 3xl:grid-cols-7",
					"gap-2 xl:gap-3 p-2 xl:p-3", "min-h-svh 2xl:max-h-dvh",
					"grid-rows-[150px_minmax(300px,1fr)_150px]",
				)}
				initial={{ opacity: isMobileWindowSize ? 1 : 0 }}
				animate={{ opacity: isMobileWindowSize ? 0 : 1 }}
			>
				{/* Row 1 */}
				<GridCell layoutId={layoutIds[0]} blockIndex={0} className="col-span-2" />
				<GridCell layoutId={layoutIds[1]} blockIndex={1} />
				<GridCell layoutId={layoutIds[2]} blockIndex={2} />
				<GridCell layoutId={layoutIds[3]} blockIndex={3} className="hidden md:block" />
				<GridCell layoutId={layoutIds[4]} blockIndex={4} className="hidden 2xl:block" />
				<GridCell layoutId={layoutIds[5]} blockIndex={5} className="hidden 3xl:block" />
				{/* Row 2 */}
				<GridCell layoutId={SIDE_BLOCKS[0].id} blockIndex={20} className={clsx("aspect-h-2 aspect-w-2", { "hidden md:block": "display" })} />
				<div className="grid col-span-4 gap-4 md:col-span-3 2xl:col-span-4 3xl:col-span-5 grid-cols-subgrid">
					<div className="h-full col-span-4 col-start-1 overflow-hidden md:col-span-3 2xl:col-span-4 3xl:col-span-5">
						{children}
					</div>
				</div>
				<GridCell layoutId={SIDE_BLOCKS[1].id} blockIndex={21} className={clsx("aspect-h-2 aspect-w-2", { "hidden md:block": "display" })} />
				{/* Row 3 */}
				<GridCell layoutId={layoutIds[6]} blockIndex={30} />
				<GridCell layoutId={layoutIds[7]} blockIndex={31} />
				<GridCell layoutId={layoutIds[8]} blockIndex={32} />
				<GridCell layoutId={layoutIds[9]} blockIndex={33} className={clsx({ "hidden md:block": "display" })} />
				<GridCell layoutId={layoutIds[10]} blockIndex={34} className={clsx({ "hidden 2xl:block": "display" })} />
				<GridCell layoutId={layoutIds[11]} blockIndex={35} className={clsx({ "hidden 3xl:block": "display" })} />
				<GridCell layoutId="last" blockIndex={100} />
			</motion.div>
		</>
	)
}