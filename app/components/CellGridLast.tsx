/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion"
import clsx from "clsx"

/* COMPONENTS & UTILS */
import { DashboardLink } from "~/routes/dashboard/dashboard-icon-button"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { LAST_BLOCK } from "~/data"
import { CellGridLink } from "."

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function CellGridLast({ className }: { className?: string }) {
	return (
		<motion.div
			className={clsx("relative block h-full rounded-lg", className)}
			layoutId={LAST_BLOCK.id}
		>
			<CellGridLink to={LAST_BLOCK.to}>
				<div className="flex flex-col p-2">
					<h2 className="text-base font-semibold sm:text-xl line-clamp-1">
						{LAST_BLOCK.title}
					</h2>
					<span className="text-sm line-clamp-2">{LAST_BLOCK.description}</span>
				</div>

				<div className="absolute bottom-0 right-2 sm:bottom-3 sm:right-3">
					<DashboardLink className="w-6 h-6 text-gray-700 transition-all hover:scale-125 active:text-blue-900 active:scale-110" />
				</div>
			</CellGridLink>
		</motion.div>
	)
}
