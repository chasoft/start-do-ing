/* FRAMEWORK */
import React, { useMemo, useState } from "react"

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion"
import clsx from "clsx"

/* COMPONENTS & UTILS */
import {
	getBlocks,
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
	const [layouts, updateLayouts] = useState(() => [
		...getBlocks(blocks as Block<PageId>[])
	])
	const layoutIds = useMemo(
		() =>
			isGroup
				? // eslint-disable-next-line @typescript-eslint/no-explicit-any
					(layouts.map((block) => block.id) as any[])
				: // eslint-disable-next-line @typescript-eslint/no-explicit-any
					[currentLayoutId, ...(layouts.slice(1).map((block) => block.id) as any[])],
		[currentLayoutId, isGroup, layouts]
	)
	const breakpoint = useBreakpoint()

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
				<GridCell layoutId={layoutIds[0]} className="col-span-2" isIntroBlock={true} />
				<GridCell layoutId={layoutIds[1]} />
				<GridCell layoutId={layoutIds[2]} />
				<GridCell layoutId={layoutIds[3]} />
				<GridCell layoutId={layoutIds[4]} className="hidden 2xl:block" />
				<GridCell layoutId={layoutIds[5]} className="hidden 3xl:block" />
				{/* Row 2 */}
				<GridCell
					layoutId={SIDE_BLOCKS[0].id}
					className={clsx("aspect-h-2 aspect-w-2", { "hidden xl:block": "display" })}
				/>
				<div className="grid col-span-5 gap-4 xl:col-span-3 2xl:col-span-4 3xl:col-span-5 grid-cols-subgrid">
					<div className="h-full col-span-5 col-start-1 overflow-hidden xl:col-span-3 2xl:col-span-4 3xl:col-span-5">
						{children}
					</div>
				</div>
				<GridCell
					layoutId={SIDE_BLOCKS[1].id}
					className={clsx("aspect-h-2 aspect-w-2", { "hidden xl:block": "display" })}
				/>
				{/* Row 3 */}
				<GridCell layoutId={layoutIds[6]} />
				<GridCell layoutId={layoutIds[7]} />
				<GridCell layoutId={layoutIds[8]} />
				<GridCell layoutId={layoutIds[9]} />
				<GridCell
					layoutId={layoutIds[10]}
					className={clsx({ "hidden 2xl:block": "display" })}
				/>
				<GridCell
					layoutId={layoutIds[11]}
					className={clsx({ "hidden 3xl:block": "display" })}
				/>
				<GridCell layoutId="last" />
			</motion.div>
		</>
	)
}
