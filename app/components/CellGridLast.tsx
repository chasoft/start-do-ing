/* FRAMEWORK */
import { Link } from "@remix-run/react"

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion"
import { ScrollArea } from "@mantine/core"
import { useHover } from "@mantine/hooks"
import clsx from "clsx"

/* COMPONENTS & UTILS */
import { CellGridEmpty } from "."
import type { Block, PageId } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { IconMoreHorizontal } from "./icons"
import { getDynamicBlocks } from "~/utils"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

type CellGridLastProps = {
	className?: string
	blocks?: Block<PageId>[]
}

//TODO: refactor... CellGridLast & CellGroup has the same behavior (more..)
// - extract the logic to commonize the logic
export function CellGridLast({ className, blocks }: CellGridLastProps) {
	const { hovered: menuHovered, ref: menuRef } = useHover()
	const { hovered: targetHovered, ref: targetRef } = useHover()

	if (!blocks || blocks.length === 0) {
		return <CellGridEmpty />
	}

	const showMoreButton = blocks.length > 4

	console.log("logger", blocks.length, showMoreButton)

	const childMenuItems = blocks.map((i, idx) => (
		<li key={i.to}>
			<Link to={i.to}>{`${idx + 1}. ${i.title}`}</Link>
		</li>
	))

	return (
		<div className="relative overflow-hidden h-full">
			<div className={clsx("grid grid-cols-2 grid-rows-2 h-full gap-2", className)}>
				{getDynamicBlocks(blocks, 4)
					.slice(0, 4)
					.map((block) => {
						if (block.id === "empty") {
							return <CellGridEmpty key={Math.random()} />
						}
						return (
							<Link
								key={block.to}
								to={block.to}
								className={clsx(
									"grid place-content-center p-1",
									clsx(
										"transition-all bg-pink-200 border-2 rounded-lg hover:bg-opacity-60 hover:outline-pink-300 outline-pink-200 hover:border-blue-300"
									)
								)}
							>
								{block.title}
							</Link>
						)
					})}
			</div>
			<motion.div
				className={clsx("absolute inset-0 bg-yellow-200 rounded-lg", {
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
				<ScrollArea className="flex flex-col h-full gap-2">
					<ul className="menu">{childMenuItems}</ul>
				</ScrollArea>
			</motion.div>

			<div
				role="button"
				className={clsx(
					"absolute bottom-0 right-0 hidden w-6 h-6 m-1 rounded-lg lg:h-8 lg:w-8 hover:bg-gray-300 hover:bg-opacity-50 lg:grid place-content-center",
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
