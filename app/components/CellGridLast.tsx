/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion";
import clsx from "clsx";

/* COMPONENTS & UTILS */
import { DashboardLink } from "~/routes/dashboard/dashboard-icon-button";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */
import { LAST_BLOCK } from "~/data";
import { CellGridLink } from ".";

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

export function CellGridLast({ className }: { className?: string }) {
	return (
		<motion.div className={clsx("relative block h-full rounded-lg", className)} layoutId={LAST_BLOCK.id}>
			<CellGridLink to={LAST_BLOCK.to}>
				<div className="grid h-full p-2 place-content-center">
					<h2 className="text-lg font-semibold sm:text-2xl line-clamp-1">Dashboard</h2>
					<span className="line-clamp-2">Control and/or pre-setup your data/settings</span>
				</div>
				<div className="absolute bottom-0 right-2 sm:bottom-3 sm:right-3">
					<DashboardLink className="w-6 h-6 text-gray-700 hover:scale-125 active:text-blue-900 active:scale-110 transition-all" />
				</div>
			</CellGridLink>
		</motion.div>
	)
}