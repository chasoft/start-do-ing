/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion"
import clsx from "clsx"

/* COMPONENTS & UTILS */
import { getBlockColor } from "~/utils"
import { GoUpLink, HomeLink, HomeLinks } from "."
import type { Block } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { homeLabel } from "~/routes/_index/metadata"
import { SITE } from "~/data"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

type CellIntroProps = {
	className?: string
	metaData: Block<string>
	upTo: string
	blockIndex: number
	children: React.ReactNode
}

export function CellIntro({
	className,
	metaData,
	upTo,
	blockIndex,
	children
}: CellIntroProps) {
	const showGoUpLink = metaData.to !== upTo
	const { bgColor } = getBlockColor(blockIndex)
	return (
		<motion.div
			className={clsx(
				"relative block h-full overflow-hidden rounded-lg border-2 bg-opacity-60 transition-all",
				bgColor,
				className
			)}
		>
			<div className="flex flex-col p-2">
				<h2 className="text-base font-semibold sm:text-xl line-clamp-1">
					{metaData.title == homeLabel ? SITE.title : metaData.title}
				</h2>
				<div className="flex flex-col grow">
					{metaData.description && (
						<span className="text-sm line-clamp-2 sm:text-base">
							{metaData.description}
						</span>
					)}
				</div>
				<div>{children}</div>
			</div>
			<div className="absolute top-0 right-0 flex gap-2 p-2">
				<HomeLink />
				{showGoUpLink && <GoUpLink upTo={upTo} />}
			</div>
			<HomeLinks />
		</motion.div>
	)
}
