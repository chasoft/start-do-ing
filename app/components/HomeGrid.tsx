/* FRAMEWORK */
import React from "react";

/* THIRD-PARTY PACKAGES */
import { AnimatePresence } from "framer-motion";
import { useAtomValue, useSetAtom } from "jotai";
import clsx from "clsx";

/* COMPONENTS & UTILS */
import { getBlocks, useBreakpoint, useCurrentLayoutId, } from "~/utils";
import { GridCell } from "./GridCell";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */
import { SIDE_BLOCKS } from "~/constants";
import { layoutsAtom, layoutsPropsAtom } from "~/atoms/globals";

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

export function HomeGrid({ children }: { children: React.ReactNode }) {
	const updateLayouts = useSetAtom(layoutsAtom)
	const layoutIds = useAtomValue(layoutsPropsAtom)
	const breakpoint = useBreakpoint()
	const currenLayoutId = useCurrentLayoutId()

	React.useLayoutEffect(() => {
		updateLayouts(getBlocks(currenLayoutId))
	}, [currenLayoutId, updateLayouts, breakpoint])

	return (
		<AnimatePresence initial={false}>
			<div
				className={clsx(
					"grid grid-cols-4 md:grid-cols-5 2xl:grid-cols-6 3xl:grid-cols-7",
					"gap-2 xl:gap-3 p-2 xl:p-3", "min-h-svh 2xl:max-h-dvh",
					"grid-rows-[minmax(80px,100px)_minmax(300px,1fr)_minmax(80px,120px)]",
					"sm:grid-rows-[minmax(100px,150px)_minmax(300px,1fr)_minmax(80px,120px)]",
					"md:grid-rows-[minmax(100px,200px)_minmax(300px,1fr)_minmax(50px,150px)]"
				)}
			>
				{/* Row 1 */}
				<GridCell className="col-span-2" layoutId={layoutIds[0]} />
				<GridCell layoutId={layoutIds[1]} />
				<GridCell layoutId={layoutIds[2]} />
				<GridCell className="hidden md:block" layoutId={layoutIds[3]} />
				<GridCell className="hidden 2xl:block" layoutId={layoutIds[4]} />
				<GridCell className="hidden 3xl:block" layoutId={layoutIds[5]} />
				{/* Row 2 */}
				<GridCell className={clsx("aspect-h-2 aspect-w-2", { "hidden md:block": "display" })} layoutId={SIDE_BLOCKS[0].id} />
				<div className="grid col-span-4 gap-4 md:col-span-3 2xl:col-span-4 3xl:col-span-5 grid-cols-subgrid">
					<div className="h-full col-span-4 col-start-1 overflow-hidden md:col-span-3 2xl:col-span-4 3xl:col-span-5">
						{children}
					</div>
				</div>
				<GridCell className={clsx("aspect-h-2 aspect-w-2", { "hidden md:block": "display" })} layoutId={SIDE_BLOCKS[0].id} />
				{/* Row 3 */}
				<GridCell layoutId={layoutIds[6]} />
				<GridCell layoutId={layoutIds[7]} />
				<GridCell layoutId={layoutIds[8]} />
				<GridCell className={clsx({ "hidden md:block": "display" })} layoutId={layoutIds[9]} />
				<GridCell className={clsx({ "hidden 2xl:block": "display" })} layoutId={layoutIds[10]} />
				<GridCell className={clsx({ "hidden 3xl:block": "display" })} layoutId={layoutIds[11]} />
				<GridCell layoutId="last" />
			</div>
		</AnimatePresence>
	)
}