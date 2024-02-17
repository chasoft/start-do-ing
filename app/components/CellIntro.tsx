/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion"
import { Text } from "@mantine/core"
import clsx from "clsx"

/* COMPONENTS & UTILS */
import { getBlockColor } from "~/utils"
import { GoUpLink, HomeLink, HomeLinks } from "."
import type { Block } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { homeLabel } from "~/routes/_index/metadata"
import { FW, SITE } from "~/data"

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
				<Text component="h2" size="lg" fw={FW.SEMI_BOLD} lineClamp={1}>
					{metaData.title == homeLabel ? `Welcome to ${SITE.title}` : metaData.title}
				</Text>
				<div className="flex flex-col grow">
					{metaData.description && (
						<Text size="md" lineClamp={2}>
							{metaData.description}
						</Text>
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
