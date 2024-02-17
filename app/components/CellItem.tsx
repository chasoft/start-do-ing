/* FRAMEWORK */
import { useLocation } from "@remix-run/react"

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion"
import { Text } from "@mantine/core"
import clsx from "clsx"

/* COMPONENTS & UTILS */
import { CellGridLink } from "."
import { getIcon } from "~/utils"
import type { Block } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { FW } from "~/data"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

type CellItemProps = {
	className?: string
	metaData: Block<string>
	blockIndex: number
}

export function CellItem({ className, metaData, blockIndex }: CellItemProps) {
	const { pathname } = useLocation()
	const isHome = pathname === metaData.to
	const layoutId = isHome ? undefined : metaData.to
	const Icon = getIcon(metaData.icon?.data)
	return (
		<motion.div className={clsx("h-full relative block", className)} layoutId={layoutId}>
			<CellGridLink to={metaData.to} blockIndex={blockIndex}>
				<div className="flex flex-col p-2">
					<h2 className="flex items-start gap-2">
						{metaData.icon && <Icon size={24} className="mt-[2px]" />}{" "}
						<Text size="lg" fw={FW.SEMI_BOLD}>
							{metaData.title}
						</Text>
					</h2>
					<div className="flex flex-col grow">
						{metaData.description && (
							<Text size="md" lineClamp={2}>
								{metaData.description}
							</Text>
						)}
					</div>
				</div>
			</CellGridLink>
		</motion.div>
	)
}
