/* FRAMEWORK */
import { Link } from "@remix-run/react"

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion"
import { ScrollArea } from "@mantine/core"
import { useHover } from "@mantine/hooks"
import clsx from "clsx"

/* COMPONENTS & UTILS */
import { CellGridEmpty } from "."
import { getBlockColor, getDynamicBlocks, getIcon } from "~/utils"
import type { Block, PageId } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { EMPTY_LAYOUT_ID } from "~/data"
import { IconMoreHorizontal } from "./icons"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

type CellGridLastProps = {
	className?: string
	blocks?: Block<PageId>[]
	blockIndex: number
}

//TODO: refactor... CellGridLast & CellGroup has the same behavior (more..)
// - extract the logic to commonize the logic
export function CellGridLast({ className, blocks, blockIndex }: CellGridLastProps) {
	const { hovered: menuHovered, ref: menuRef } = useHover()
	const { hovered: targetHovered, ref: targetRef } = useHover()

	const isLastGridCellBlocksEmpty =
		!blocks || blocks.every((block) => block.id === EMPTY_LAYOUT_ID)

	if (isLastGridCellBlocksEmpty) {
		return <CellGridEmpty />
	}

	const showMoreButton = blocks.length > 4

	const childMenuItems = blocks.map((block, idx) => {
		const key = block.id === EMPTY_LAYOUT_ID ? Math.random() : block.id
		return (
			<li key={key}>
				<Link to={block.to}>{`${idx + 1}. ${block.title}`}</Link>
			</li>
		)
	})

	const { bgColor } = getBlockColor(blockIndex)

	return (
		<div className="relative h-full overflow-hidden">
			<div className={clsx("grid h-full grid-cols-2 grid-rows-2 gap-2", className)}>
				{getDynamicBlocks(blocks, 4)
					.slice(0, 4)
					.map((block, idx) => {
						if (block.id === EMPTY_LAYOUT_ID) {
							return <CellGridEmpty key={Math.random()} />
						}
						const { bgColor } = getBlockColor(blockIndex + idx)
						const Icon = getIcon(block.icon?.data)
						return (
							<Link
								key={block.to}
								to={block.to}
								className={clsx(
									"flex flex-col items-center justify-center rounded-lg border-2 p-1",
									"bg-opacity-60 transition-all hover:bg-opacity-100",
									bgColor
								)}
							>
								<Icon size={18} />
								<span className="line-clamp-2 text-xs">{block.title}</span>
							</Link>
						)
					})}
			</div>
			<motion.div
				className={clsx("absolute inset-0 rounded-lg bg-opacity-60", bgColor, {
					"!hidden": !showMoreButton
				})}
				initial={
					targetHovered || menuHovered
						? { x: "100%", y: "100%", opacity: 0 }
						: { x: 0, y: 0, opacity: 1 }
				}
				animate={
					targetHovered || menuHovered
						? { x: 0, y: 0, opacity: 1 }
						: { x: "100%", y: "100%", opacity: 0 }
				}
				transition={{ type: "just" }}
				ref={menuRef}
			>
				<ScrollArea className="flex h-full flex-col gap-2">
					<ul className="menu">{childMenuItems}</ul>
				</ScrollArea>
			</motion.div>

			<div
				role="button"
				className={clsx(
					"absolute bottom-0 right-0 m-1 hidden size-6 place-content-center rounded-lg bg-opacity-60 hover:bg-opacity-100 lg:grid lg:size-8",
					bgColor,
					{ "!hidden": showMoreButton === false }
				)}
				title="More..."
				ref={targetRef}
			>
				<IconMoreHorizontal />
			</div>
		</div>
	)
}
