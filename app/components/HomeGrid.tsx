import React from "react";
import { Outlet, useMatches } from "@remix-run/react";

import { AnimatePresence } from "framer-motion";
import { useAtomValue, useSetAtom } from "jotai";
import clsx from "clsx";

import { DEFAULT_BLOCK, SIDE_BLOCKS_PROPS } from "~/constants";
import { CustomRouteHandle, getBlocks, useBreakpoint, } from "~/utils";
import { layoutsAtom, layoutsPropsAtom } from "~/atoms/globals";
import { GridCell } from "./GridCell";

export function HomeGrid() {
	const updateLayouts = useSetAtom(layoutsAtom)
	const layoutsProps = useAtomValue(layoutsPropsAtom)
	const breakpoint = useBreakpoint()

	const matches = useMatches();
	const activeHandle = matches[matches.length - 1].handle as CustomRouteHandle;
	const currenLayoutId = activeHandle.layoutId ?? DEFAULT_BLOCK.id;

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
				<GridCell className="col-span-2" {...layoutsProps[0]} />
				<GridCell {...layoutsProps[1]} />
				<GridCell {...layoutsProps[2]} />
				<GridCell display="hidden md:block" {...layoutsProps[3]} />
				<GridCell display="hidden 2xl:block" {...layoutsProps[4]} />
				<GridCell display="hidden 3xl:block" {...layoutsProps[5]} />
				{/* Row 2 */}
				<GridCell className="aspect-h-2 aspect-w-2" display="hidden md:block" {...SIDE_BLOCKS_PROPS[0]} />
				<div className="col-span-4 md:col-span-3 2xl:col-span-4 3xsl:col-span-5 grid grid-cols-subgrid gap-4">
					<div className="col-start-1 col-span-4 md:col-span-3 2xl:col-span-4 3xl:col-span-5 h-full">
						<Outlet />
					</div>
				</div>
				<GridCell className="aspect-h-2 aspect-w-2" display="hidden md:block" {...SIDE_BLOCKS_PROPS[1]} />
				{/* Row 3 */}
				<GridCell {...layoutsProps[6]} />
				<GridCell {...layoutsProps[7]} />
				<GridCell {...layoutsProps[8]} />
				<GridCell display="hidden md:block" {...layoutsProps[9]} />
				<GridCell display="hidden 2xl:block" {...layoutsProps[10]} />
				<GridCell display="hidden 3xl:block" {...layoutsProps[11]} />
				<GridCell bgColor="bg-red-200" />
			</div>
		</AnimatePresence>
	)
}