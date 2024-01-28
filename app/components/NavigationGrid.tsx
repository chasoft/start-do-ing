/* FRAMEWORK */
import React, { useState } from "react";

/* THIRD-PARTY PACKAGES */
import { AnimatePresence } from "framer-motion";
import clsx from "clsx";

/* COMPONENTS & UTILS */
import { getBlocks, useBreakpoint, useCurrentLayoutId } from "~/utils";
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
	const [layouts, updateLayouts] = useState([...blocks])
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const layoutIds = layouts.map((block) => block.id) as any[]
	const breakpoint = useBreakpoint()
	const currenLayoutId = useCurrentLayoutId()

	React.useLayoutEffect(() => {
		updateLayouts(getBlocks(blocks as Block<PageId>[], currenLayoutId))
	}, [currenLayoutId, updateLayouts, breakpoint, blocks])

	return (
		<AnimatePresence initial={false}>
			<div
				className={clsx(
					"grid grid-cols-4 md:grid-cols-5 2xl:grid-cols-6 3xl:grid-cols-7",
					"gap-2 xl:gap-3 p-2 xl:p-3", "min-h-svh 2xl:max-h-dvh",
					"grid-rows-[minmax(80px,100px)_minmax(300px,1fr)_minmax(80px,120px)]",
					"sm:grid-rows-[minmax(100px,150px)_minmax(300px,1fr)_minmax(80px,120px)]",
					"md:grid-rows-[minmax(100px,200px)_minmax(300px,1fr)_minmax(50px,150px)]",
					"bg-[url('https://images.unsplash.com/photo-1531219572328-a0171b4448a3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover"
				)}
			>
				{/* Row 1 */}
				<GridCell layoutId={layoutIds[0]} isFirstCell={true} className="col-span-2" />
				<GridCell layoutId={layoutIds[1]} />
				<GridCell layoutId={layoutIds[2]} />
				<GridCell layoutId={layoutIds[3]} className="hidden md:block" />
				<GridCell layoutId={layoutIds[4]} className="hidden 2xl:block" />
				<GridCell layoutId={layoutIds[5]} className="hidden 3xl:block" />
				{/* Row 2 */}
				<GridCell layoutId={SIDE_BLOCKS[0].id} className={clsx("aspect-h-2 aspect-w-2", { "hidden md:block": "display" })} />
				<div className="grid col-span-4 gap-4 md:col-span-3 2xl:col-span-4 3xl:col-span-5 grid-cols-subgrid">
					<div className="h-full col-span-4 col-start-1 overflow-hidden md:col-span-3 2xl:col-span-4 3xl:col-span-5">
						{children}
					</div>
				</div>
				<GridCell layoutId={SIDE_BLOCKS[1].id} className={clsx("aspect-h-2 aspect-w-2", { "hidden md:block": "display" })} />
				{/* Row 3 */}
				<GridCell layoutId={layoutIds[6]} />
				<GridCell layoutId={layoutIds[7]} />
				<GridCell layoutId={layoutIds[8]} />
				<GridCell layoutId={layoutIds[9]} className={clsx({ "hidden md:block": "display" })} />
				<GridCell layoutId={layoutIds[10]} className={clsx({ "hidden 2xl:block": "display" })} />
				<GridCell layoutId={layoutIds[11]} className={clsx({ "hidden 3xl:block": "display" })} />
				<GridCell layoutId="last" />
			</div>
		</AnimatePresence>
	)
}