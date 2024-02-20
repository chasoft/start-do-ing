/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { Text } from "@mantine/core"
import { motion } from "framer-motion"
import clsx from "clsx"

/* COMPONENTS & UTILS */
import { getIcon } from "~/utils"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { FW, GRAY, SIDE_BLOCKS } from "~/data"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function CellGridRight({ className }: { className?: string }) {
	const Icon = getIcon(SIDE_BLOCKS.RIGHT.icon?.data)
	return (
		<motion.div className={clsx("h-full", className)} layoutId={SIDE_BLOCKS.RIGHT.id}>
			<div
				className={clsx(
					"block h-full rounded-lg bg-opacity-60 hover:bg-opacity-70 border-2 transition-all",
					GRAY.bgColor,
					GRAY.borderColor
				)}
			>
				<div className="flex flex-col p-2">
					<h2 className="flex items-start gap-2">
						{SIDE_BLOCKS.RIGHT.icon && <Icon size={24} className="mt-[2px]" />}{" "}
						<Text size="lg" fw={FW.SEMI_BOLD}>
							{SIDE_BLOCKS.RIGHT.title}
						</Text>
					</h2>
					<div className="flex flex-col grow">
						{SIDE_BLOCKS.RIGHT.description && (
							<Text size="md" lineClamp={3}>
								{SIDE_BLOCKS.RIGHT.description}
							</Text>
						)}
					</div>
				</div>
			</div>
		</motion.div>
	)
}
