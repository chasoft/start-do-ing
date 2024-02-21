/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion"
import { Image, Text } from "@mantine/core"
import clsx from "clsx"

/* COMPONENTS & UTILS */
import { getBlockColor, getIcon } from "~/utils"
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
	children?: React.ReactNode
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
	const Icon = getIcon(metaData.icon?.data)
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
					<div className="flex items-center gap-2">
						{metaData.icon?.logo ? (
							<Image src={metaData.icon?.logo} className="h-8 w-8" />
						) : (
							<Icon size={24} />
						)}
						<span>
							{metaData.title == homeLabel ? `Welcome to ${SITE.title}` : metaData.title}
						</span>
					</div>
				</Text>
				<div className="flex grow flex-col">
					{metaData.description && (
						<Text size="md" lineClamp={2}>
							{metaData.description}
						</Text>
					)}
				</div>
				{children && <div>{children}</div>}
			</div>
			<div className="absolute right-0 top-0 flex gap-2 p-2">
				<HomeLink />
				{showGoUpLink && <GoUpLink upTo={upTo} />}
			</div>
			<HomeLinks />
		</motion.div>
	)
}
