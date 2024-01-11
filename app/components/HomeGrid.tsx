import React from "react";
import { useMatches } from "@remix-run/react";
import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { inactiveLayoutIdListAtom } from "~/atoms/globals";
import { TLayoutId, TRouteHandle, layoutIdList } from "~/data/constants";
import { HomeBlock } from "~/routes/_index/block";
import { AboutBlock } from "~/routes/about/block";
import { RandomBlock } from "~/routes/random._index/block";
import { PasswordGeneratorBlock } from "~/routes/random.password-generator/block";

function Block({ className, display, bgColor, layoutId, children }: { className?: string, display?: string, bgColor: string, layoutId?: TLayoutId, children?: React.ReactNode }) {
	const cn = `${className ?? ""} cursor-pointer rounded-lg transition-all`
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
					<motion.div className={`${cn} ${bgColor} h-full`} layoutId={layoutId}>
						{children}<p>layoutId: {layoutId}</p>
					</motion.div>
				</div>
			);
	}
}

export function HomeGrid({ children }: { children: React.ReactNode }) {
	const [inactiveLayoutIdList, updateInactiveLayoutIdList] = useAtom(inactiveLayoutIdListAtom)

	const matches = useMatches();
	const activeHandle = matches[matches.length - 1].handle as TRouteHandle;
	const currentLayoutId = activeHandle.layoutId

	const currentLayoutMeta = layoutIdList.find(meta => meta.id === currentLayoutId) ?? layoutIdList[0]


	React.useLayoutEffect(() => {
		updateInactiveLayoutIdList(
			layoutIdList.filter(layoutId => layoutId.id !== currentLayoutId)
		)
	}, [currentLayoutId, updateInactiveLayoutIdList])

	console.log("logger", { currentLayoutId, inactiveLayoutIdList, main: currentLayoutMeta["primaryBgColor"] })

	return (
		<div className="grid grid-cols-4 md:grid-cols-5 gap-2 xl:gap-3 p-1 xl:p-2 min-h-svh 2xl:max-h-dvh border-2 border-red-500 grid-rows-[minmax(100px,200px)_1fr_minmax(80px,100px)] sm:grid-rows-[minmax(100px,200px)_1fr_minmax(50px,150px)]">
			<Block className="col-span-2" bgColor={inactiveLayoutIdList[0]["bgColor"]} layoutId={inactiveLayoutIdList[0]["id"]} />
			<Block className="" bgColor={inactiveLayoutIdList[1]["bgColor"]} layoutId={inactiveLayoutIdList[1]["id"]} />
			<Block className="col-span-1" bgColor={inactiveLayoutIdList[2]["bgColor"]} layoutId={inactiveLayoutIdList[2]["id"]} />
			<Block display="hidden md:block" bgColor={inactiveLayoutIdList[10]["bgColor"]} layoutId={inactiveLayoutIdList[10]["id"]} />
			<Block display="hidden md:block" bgColor={inactiveLayoutIdList[3]["bgColor"]} layoutId={inactiveLayoutIdList[3]["id"]} />
			<div className="col-span-4 md:col-span-3 grid grid-cols-subgrid gap-4">
				<div className="col-start-1 col-span-4 md:col-span-3 h-full">
					<Block className="h-full" bgColor={currentLayoutMeta["primaryBgColor"]} layoutId={currentLayoutId}>
						{children}
					</Block>
				</div>
			</div>
			<Block className="aspect-h-2 aspect-w-2" display="hidden md:block" bgColor={inactiveLayoutIdList[4]["bgColor"]} layoutId={inactiveLayoutIdList[4]["id"]} />
			<Block className="col-span-2 md:col-span-1 rounded-bl-md xl:rounded-bl-lg" bgColor={inactiveLayoutIdList[5]["bgColor"]} layoutId={inactiveLayoutIdList[5]["id"]} />
			<Block bgColor={inactiveLayoutIdList[6]["bgColor"]} layoutId={inactiveLayoutIdList[6]["id"]} />
			<Block bgColor={inactiveLayoutIdList[7]["bgColor"]} layoutId={inactiveLayoutIdList[7]["id"]} />
			<Block display="hidden md:block" bgColor={inactiveLayoutIdList[8]["bgColor"]} layoutId={inactiveLayoutIdList[8]["id"]} />
			<Block className="rounded-br-md xl:rounded-br-lg" bgColor={inactiveLayoutIdList[9]["bgColor"]} layoutId={inactiveLayoutIdList[9]["id"]} />
		</div>
	)
}