/* FRAMEWORK */
import React, { useState } from "react"

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion"
import clsx from "clsx"

/* COMPONENTS & UTILS */
import {
	getBlocks,
	getLastGridCellBlocks,
	useBreakpoint,
	useCurrentLayoutId,
	useIsMobileWindowSize
} from "~/utils"
import type { Block, NavigationGridCells, PageId } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { SIDE_BLOCKS } from "~/data"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

/**
 * NavigationGrid is used in `nested routes`,
 * it will persists the state for the whole branch.
 */
export function NavigationGrid({
	GridCell,
	blocks,
	children
}: {
	GridCell: NavigationGridCells
	blocks: Block<unknown>[]
	children: React.ReactNode
}) {
	const { currentLayoutId, isGroup } = useCurrentLayoutId()
	const isMobileWindowSize = useIsMobileWindowSize()
	const breakpoint = useBreakpoint()
	const [layouts, updateLayouts] = useState(() => [
		...getBlocks(blocks as Block<PageId>[])
	])
	const layoutIds = isGroup
		? // eslint-disable-next-line @typescript-eslint/no-explicit-any
		(layouts.map((block) => block.id) as any[])
		: // eslint-disable-next-line @typescript-eslint/no-explicit-any
		[currentLayoutId, ...(layouts.slice(1).map((block) => block.id) as any[])]

	const lastGridCellBlocks = getLastGridCellBlocks(layouts)
	const activeBlockIndex = layouts.findIndex(({ id }) => id === currentLayoutId)

	React.useEffect(() => {
		updateLayouts(getBlocks(blocks as Block<PageId>[]))
	}, [updateLayouts, breakpoint, blocks])

	return (
		<>
			<motion.div
				className={clsx(
					"grid grid-cols-5 2xl:grid-cols-6 3xl:grid-cols-7",
					"gap-3 p-2 2xl:p-3",
					"min-h-svh 2xl:max-h-dvh",
					"grid-rows-[150px_minmax(300px,1fr)_150px]"
				)}
				initial={{ opacity: isMobileWindowSize ? 1 : 0 }}
				animate={{ opacity: isMobileWindowSize ? 0 : 1 }}
			>
				{/* Row 1 */}
				<GridCell
					blockIndex={activeBlockIndex}
					layoutId={layoutIds[0]}
					className="col-span-2"
					isIntroBlock={true}
				/>
				<GridCell blockIndex={1} layoutId={layoutIds[1]} />
				<GridCell blockIndex={2} layoutId={layoutIds[2]} />
				<GridCell blockIndex={3} layoutId={layoutIds[3]} />
				<GridCell blockIndex={4} layoutId={layoutIds[4]} className="hidden 2xl:block" />
				<GridCell blockIndex={5} layoutId={layoutIds[5]} className="hidden 3xl:block" />
				{/* Row 2 */}
				<GridCell
					layoutId={SIDE_BLOCKS.LEFT.id}
					blockIndex={6}
					className="hidden aspect-h-2 aspect-w-2 xl:block"
				/>
				<div className="col-span-4 gap-4 xl:col-span-3 2xl:col-span-4 3xl:col-span-5">
					<div className="h-full overflow-hidden">{children}</div>
				</div>
				<GridCell
					layoutId={SIDE_BLOCKS.RIGHT.id}
					blockIndex={7}
					className="hidden aspect-h-2 aspect-w-2 lg:block"
				/>
				{/* Row 3 */}
				<GridCell blockIndex={6} layoutId={layoutIds[6]} />
				<GridCell blockIndex={7} layoutId={layoutIds[7]} />
				<GridCell blockIndex={8} layoutId={layoutIds[8]} />
				<GridCell blockIndex={9} layoutId={layoutIds[9]} />
				<GridCell blockIndex={10} layoutId={layoutIds[10]} className="hidden 2xl:block" />
				<GridCell blockIndex={11} layoutId={layoutIds[11]} className="hidden 3xl:block" />
				<GridCell
					blockIndex={12}
					layoutId="last"
					lastGridCellBlocks={lastGridCellBlocks}
				/>
			</motion.div>
		</>
	)
}


//TODO: fix bug, layout not keep stable height when resize the windows.