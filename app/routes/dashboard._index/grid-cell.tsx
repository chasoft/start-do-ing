/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion";
import clsx from "clsx";

/* COMPONENTS & UTILS */
import { CellGridLink } from "~/components";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */
import { DASHBOARD } from "../dashboard/metadata";

/***************************************************************************
 * 
 *  START
 *  
 **************************************************************************/

export function DashboardIndexCell({ className }: { className?: string }) {
	return (
		<motion.div className={clsx("h-full", className)} layoutId={DASHBOARD.id}>
			<CellGridLink to={DASHBOARD.to}>
				<div className="grid h-full p-2 place-content-center">
					<h2 className="text-lg font-semibold sm:text-2xl line-clamp-1">{DASHBOARD.title}</h2>
					<span>{DASHBOARD.description}</span>
				</div>
			</CellGridLink>
		</motion.div>
	)
}
