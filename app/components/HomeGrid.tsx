import React from "react";
import { useMatches } from "@remix-run/react";
import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { layoutsAtom, layoutsPropsAtom } from "~/atoms/globals";
import { TLayoutId, TRouteHandle, BLOCKS, getBlocks, EMPTY_ID, SIDE_BLOCKS_PROPS } from "~/data/constants";
import { HomeBlock } from "~/routes/_index/block";
import { AboutBlock } from "~/routes/about/block";
import { RandomBlock } from "~/routes/random._index/block";
import { PasswordGeneratorBlock } from "~/routes/random.password-generator/block";

function Block({ className, display, bgColor, layoutId, children }: { className?: string, display?: string, bgColor: string, layoutId?: TLayoutId, children?: React.ReactNode }) {
	const cn = `${className ?? ""} ${layoutId !== EMPTY_ID ? "cursor-pointer" : ""} transition-all`
	switch (layoutId) {
		case "home":
			return <HomeBlock className={cn} display={display} bgColor={bgColor} layoutId={layoutId} />
		case "about":
			return <AboutBlock className={cn} display={display} bgColor={bgColor} layoutId={layoutId} />
		case "random":
			return <RandomBlock className={cn} display={display} bgColor={bgColor} layoutId={layoutId} />
		case "password-generator":
			return <PasswordGeneratorBlock className={cn} display={display} bgColor={bgColor} layoutId={layoutId} />
		default:
			return (
				<div className={`h-full ${display}`}>
					<motion.div initial={false} className={`${cn} ${bgColor} h-full p-2`} layoutId={layoutId}>
						{children}<p>layoutId: {layoutId}</p>
					</motion.div>
				</div>
			);
	}
}



export function HomeGrid({ children }: { children: React.ReactNode }) {
	const [, updateLayouts] = useAtom(layoutsAtom)
	const [layoutsProps] = useAtom(layoutsPropsAtom)

	const matches = useMatches();
	const activeHandle = matches[matches.length - 1].handle as TRouteHandle;
	const currentLayoutId = activeHandle.layoutId

	const currentLayout = BLOCKS.find(meta => meta.id === currentLayoutId) ?? BLOCKS[0]

	React.useLayoutEffect(() => {
		console.log(getBlocks())
		updateLayouts(
			getBlocks().filter(layout => layout.id !== currentLayoutId)
		)
	}, [currentLayoutId, updateLayouts])

	return (
		<div className="grid grid-cols-4 md:grid-cols-5 2xl:grid-cols-6 3xl:grid-cols-7 gap-2 xl:gap-3 p-2 xl:p-3 min-h-svh 2xl:max-h-dvh grid-rows-[minmax(80px,100px)_minmax(300px,1fr)_minmax(80px,120px)] sm:grid-rows-[minmax(100px,150px)_minmax(300px,1fr)_minmax(80px,120px)] md:grid-rows-[minmax(100px,200px)_minmax(300px,1fr)_minmax(50px,150px)]">

			{/* Row 1 */}
			<Block className="col-span-2" {...layoutsProps[0]} />
			<Block {...layoutsProps[1]} />
			<Block {...layoutsProps[2]} />
			<Block display="hidden md:block" {...layoutsProps[3]} />
			<Block display="hidden 2xl:block" {...layoutsProps[4]} />
			<Block display="hidden 3xl:block" {...layoutsProps[5]} />
			{/* Row 2 */}
			<Block className="aspect-h-2 aspect-w-2" display="hidden md:block" {...SIDE_BLOCKS_PROPS[0]} />
			<div className="col-span-4 md:col-span-3 2xl:col-span-4 3xl:col-span-5 grid grid-cols-subgrid gap-4">
				<div className="col-start-1 col-span-4 md:col-span-3 2xl:col-span-4 3xl:col-span-5 h-full">
					<Block className="h-full" bgColor={currentLayout.color.primaryBg} layoutId={currentLayoutId}>
						{children}
					</Block>
				</div>
			</div>
			<Block className="aspect-h-2 aspect-w-2" display="hidden md:block" {...SIDE_BLOCKS_PROPS[1]} />
			{/* Row 3 */}
			<Block {...layoutsProps[8]} />
			<Block {...layoutsProps[9]} />
			<Block {...layoutsProps[10]} />
			<Block display="hidden md:block" {...layoutsProps[11]} />
			<Block display="hidden 2xl:block" {...layoutsProps[12]} />
			<Block display="hidden 3xl:block" {...layoutsProps[13]} />
			<Block bgColor="bg-red-200" />
		</div>
	)
}