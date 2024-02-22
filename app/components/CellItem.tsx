/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
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
	const Icon = getIcon(metaData.icon?.data)
	return (
		<div className={clsx("relative block h-full", className)}>
			<div
				className={clsx(
					"group relative block h-full rounded-lg border-2 transition-all",
					`bg-white/20 backdrop-blur-[2px] hover:backdrop-blur-md`
				)}
			>
				<CellGridLink to={metaData.to} blockIndex={blockIndex}>
					<div className="flex flex-col p-2">
						<h2 className="flex items-start gap-2">
							{metaData.icon && <Icon size={24} className="mt-[2px]" />}{" "}
							<Text size="lg" fw={FW.SEMI_BOLD}>
								{metaData.title}
							</Text>
						</h2>
						<div className="flex grow flex-col">
							{metaData.description && (
								<Text size="md" lineClamp={2}>
									{metaData.description}
								</Text>
							)}
						</div>
					</div>
				</CellGridLink>
			</div>
		</div>
	)
}
