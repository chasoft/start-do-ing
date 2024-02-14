/* FRAMEWORK */
import { useLocation } from "@remix-run/react"

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion"
import clsx from "clsx"

/* COMPONENTS & UTILS */
import { CellGridLink } from "."
import type { Block } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */

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
	return (
		<motion.div className={clsx("h-full relative block", className)} layoutId={layoutId}>
			<CellGridLink to={metaData.to} blockIndex={blockIndex}>
				<div className="flex flex-col p-2">
					<h2 className="flex items-start gap-2 text-base font-semibold sm:text-xl line-clamp-1">
						{metaData.icon && <span>{metaData.icon.data}</span>}{" "}
						<span>{metaData.title}</span>
					</h2>
					<div className="flex flex-col grow">
						{metaData.description && (
							<span className="text-sm sm:text-base line-clamp-2">
								{metaData.description}
							</span>
						)}
					</div>
				</div>
			</CellGridLink>
		</motion.div>
	)
}
