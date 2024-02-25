/* FRAMEWORK */
import { Link, useLocation } from "@remix-run/react"
import { useMemo } from "react"

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion"
import { ScrollArea, Text, Tooltip } from "@mantine/core"
import { useHover } from "@mantine/hooks"
import clsx from "clsx"

/* COMPONENTS & UTILS */
import { CellGridLink } from "."
import { getIcon } from "~/utils"
import type { Block, TablerIconComponent } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { FW } from "~/data"
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
			data: TablerIconComponent
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
				.map((i) => {
					const Icon = getIcon(i.icon?.data)
					return (
						<Tooltip key={i.to} label={i.title}>
							<Link
								to={i.to}
								className="rounded-md bg-white bg-opacity-0 p-2 text-gray-800 hover:bg-opacity-40 hover:text-blue-600 active:bg-opacity-80"
							>
								<Icon size={24} />
							</Link>
						</Tooltip>
					)
				}),
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
	const Icon = getIcon(metaData.icon?.data)

	return (
		<div className={clsx("relative block h-full overflow-hidden", className)}>
			<div
				className={clsx(
					"group relative block h-full rounded-lg transition-all",
					`bg-white/20 backdrop-blur-[2px] hover:backdrop-blur-md`
				)}
			>
				<CellGridLink to={metaData.to} blockIndex={blockIndex}>
					<div className="flex flex-col p-2">
						<h2 className="flex items-start gap-2">
							{Boolean(metaData.icon) && <Icon size={24} className="mt-[2px]" />}{" "}
							<Text size="lg" fw={FW.SEMI_BOLD}>
								{metaData.title}
							</Text>
						</h2>
						<div className="flex grow flex-col">
							{metaData.description ? (
								<Text size="md" lineClamp={2}>
									{metaData.description}
								</Text>
							) : null}
						</div>
					</div>
				</CellGridLink>
				{isHome && (
					<div className="absolute bottom-2 left-2 hidden grow lg:flex">{iconLinks}</div>
				)}
			</div>

			{isHome && showMoreButton && (
				<>
					<motion.div
						className="absolute inset-0 rounded-lg bg-yellow-200"
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

					{showMoreButton && (
						<div
							role="button"
							className="absolute bottom-0 right-0 m-1 hidden h-6 w-6 place-content-center rounded-lg hover:bg-gray-300 hover:bg-opacity-50 lg:grid lg:h-8 lg:w-8"
							title="More..."
							ref={targetRef}
						>
							<IconMoreHorizontal />
						</div>
					)}
				</>
			)}
		</div>
	)
}
