/* FRAMEWORK */
import { Link } from "@remix-run/react"

/* THIRD-PARTY PACKAGES */
import { Button, ScrollArea, Text } from "@mantine/core"
import clsx from "clsx"

/* COMPONENTS & UTILS */
import { getIcon } from "~/utils"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { FW, GRAY_LIGHT, SIDE_BLOCKS, SITE } from "~/data"
import { IconReload } from "@tabler/icons-react"
import { URLS } from "~/data/urls"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function CellGridRight({
	className,
	isLastGridCellBlocksEmpty
}: {
	className?: string
	isLastGridCellBlocksEmpty: boolean
}) {
	const Icon = getIcon(SIDE_BLOCKS.RIGHT.icon?.data)
	return (
		<div className={clsx("h-full flex-col border-red-600", className)}>
			<div
				className={clsx(
					"gap-4 rounded-lg border-2 bg-opacity-60 transition-all hover:bg-opacity-70",
					GRAY_LIGHT.bgColor,
					GRAY_LIGHT.borderColor
				)}
			>
				<div className="flex h-full flex-col gap-2 overflow-hidden p-2">
					<h2 className="flex items-start gap-2">
						<Link to={URLS.quotes.to} className="flex gap-2 hover:text-blue-600">
							{SIDE_BLOCKS.RIGHT.icon && <Icon size={24} className="mt-[2px]" />}{" "}
							<Text size="lg" fw={FW.SEMI_BOLD}>
								Random quote
							</Text>
						</Link>
					</h2>
					<div className="relative flex flex-col rounded-lg bg-white p-4 pb-8">
						<ScrollArea>
							<Text size="md">
								{`You are the sum total of everything you've ever seen, heard, eaten, smelled, been told, forgot—it's all there. Everything influences each of us, and because of that I try to make sure that my experiences are positive.`}
							</Text>
						</ScrollArea>
						<Text size="md" className="absolute bottom-2 right-4 italic">
							{" "}
							- Auther
						</Text>
					</div>
					<Button
						variant="outline"
						radius="md"
						leftSection={<IconReload className="text-blue-500" />}
					>
						Next quote
					</Button>
				</div>
			</div>
			{isLastGridCellBlocksEmpty && (
				<div className="flex w-full grow items-end justify-center bg-green-200 text-xs hover:fill-blue-500 hover:text-blue-500">
					<Link to={URLS.support.to}>{SITE.makeWithLove}</Link>
				</div>
			)}
		</div>
	)
}
