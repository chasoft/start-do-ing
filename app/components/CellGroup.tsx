/* FRAMEWORK */
import { Link, useLocation } from "@remix-run/react"
import { useMemo } from "react"

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion"
import { ScrollArea, Tooltip } from "@mantine/core"
import { useHover } from "@mantine/hooks"
import clsx from "clsx"

/* COMPONENTS & UTILS */
import { CellGridLink } from "."
import type { Block } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { IconMoreHorizontal } from "./icons"
import { URLS } from "~/data/urls"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

type CellGroupProps = {
	className?: string
	metaData: Block<string>
	blockIndex: number
	dropdownMenuItems: Array<{
		title: string
		to: string
		icon?: {
			data: React.ReactNode
			color?: string
		}
	}>
}

const iconDisplayLimit = 4

export function CellGroup({
	className,
	dropdownMenuItems,
	metaData,
	blockIndex
}: CellGroupProps) {
	const { hovered: menuHovered, ref: menuRef } = useHover()
	const { hovered: targetHovered, ref: targetRef } = useHover()
	const { pathname } = useLocation()
	const isHome = pathname === URLS.home.to
	const iconLinks = useMemo(
		() =>
			dropdownMenuItems
				.filter((i) => !!i.icon)
				.slice(0, iconDisplayLimit)
				.map((i) => (
					<Tooltip key={i.to} label={i.title}>
						<Link
							to={i.to}
							className="p-2 text-gray-500 bg-white bg-opacity-0 rounded-md hover:bg-opacity-40 hover:text-gray-800 active:bg-opacity-80"
						>
							{i.icon?.data}
						</Link>
					</Tooltip>
				)),
		[dropdownMenuItems]
	)

	const childMenuItems = useMemo(
		() =>
			dropdownMenuItems.map((i, idx) => (
				<li key={i.to}>
					<Link to={i.to}>{`${idx + 1}. ${i.title}`}</Link>
				</li>
			)),
		[dropdownMenuItems]
	)

	const showMoreButton = childMenuItems.length > iconLinks.length

	return (
		<motion.div className={clsx("relative block h-full overflow-hidden", className)}>
			<CellGridLink to={metaData.to} blockIndex={blockIndex}>
				<div className="flex flex-col p-2">
					<h2 className="flex gap-2 items-start text-base font-semibold sm:text-xl line-clamp-1">
						{metaData.icon && <span>{metaData.icon.data}</span>}{" "}
						<span>{metaData.title}</span>
					</h2>
					<div className="flex flex-col grow">
						{metaData.description && (
							<span className="text-sm line-clamp-2 sm:text-base">
								{metaData.description}
							</span>
						)}
					</div>
				</div>
			</CellGridLink>
			{isHome && (
				<div className="absolute hidden bottom-2 left-2 grow lg:flex">{iconLinks}</div>
			)}

			{isHome && showMoreButton && (
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
