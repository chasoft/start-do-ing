/* FRAMEWORK */
import { Link } from "@remix-run/react"
import { useMemo } from "react"

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion"
import { ScrollArea } from "@mantine/core"
import { useHover } from "@mantine/hooks"
import clsx from "clsx"

/* COMPONENTS & UTILS */
import { CellGridLink } from "."
import { HomeLink } from "./HomeLink"
import { isFirstCell } from "~/utils"
import type { Block } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { IconMoreHorizontal } from "./icons"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

type CellGroupProps = {
	className?: string
	blockIndex: number
	metaData: Block<string>
	dropdownMenuItems?: Array<{
		title: string
		to: string
		icon?: {
			data: React.ReactNode
			color?: string
		}
	}>
}

export function CellGroup({
	className,
	blockIndex,
	dropdownMenuItems,
	metaData
}: CellGroupProps) {
	const { hovered: menuHovered, ref: menuRef } = useHover()
	const { hovered: targetHovered, ref: targetRef } = useHover()

	const iconLinks = useMemo(
		() =>
			dropdownMenuItems
				?.filter((i) => !!i.icon)
				.slice(0, 4) // max display 4 icons
				.map((i) => (
					<Link
						key={i.to}
						to={i.to}
						className="p-1 bg-blue-100 rounded-md hover:bg-blue-300"
					>
						{i.icon?.data}
					</Link>
				)),
		[dropdownMenuItems]
	)

	const childMenuItems = useMemo(
		() =>
			dropdownMenuItems?.map((i, idx) => (
				<li key={i.to}>
					<Link to={i.to}>{`${idx + 1}. ${i.title}`}</Link>
				</li>
			)),
		[dropdownMenuItems]
	)

	const showMoreButton = (childMenuItems?.length ?? 0) > (iconLinks?.length ?? 0)

	return (
		<motion.div className={clsx("h-full relative block overflow-hidden", className)}>
			<CellGridLink to={metaData.to}>
				<div className="flex flex-col p-2">
					<h2 className="text-base font-semibold sm:text-xl line-clamp-1">
						{metaData.title}
					</h2>
					<div className="flex flex-col grow">
						{metaData.description && (
							<span className="text-sm line-clamp-2 sm:text-base">
								{metaData.description}
							</span>
						)}
					</div>
				</div>
				<div className="absolute hidden gap-1 pt-3 bottom-2 left-2 lg:flex grow">
					{/* Show IconLinks, max 4 icons */}
					{iconLinks}
				</div>
				{isFirstCell(blockIndex) && <HomeLink />}
			</CellGridLink>

			{!isFirstCell(blockIndex) && showMoreButton && (
				<>
					<motion.div
						className="absolute inset-0 bg-yellow-200 rounded-lg"
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

					{showMoreButton && (
						<div
							role="button"
							className="absolute bottom-0 right-0 hidden w-6 h-6 m-1 rounded-lg lg:h-8 lg:w-8 hover:bg-gray-300 hover:bg-opacity-50 lg:grid place-content-center"
							title="More..."
							ref={targetRef}
						>
							<IconMoreHorizontal />
						</div>
					)}
				</>
			)}
		</motion.div>
	)
}
