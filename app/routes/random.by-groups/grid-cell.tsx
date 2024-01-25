/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion";
import clsx from "clsx";

/* COMPONENTS & UTILS */
import { GridCellLink } from "~/components";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */
import { RANDOM_BY_GROUPS } from "./metadata";

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

export function RandomByGroupsCell({ className }: { className?: string }) {
	return (
		<motion.div className={clsx("h-full", className)} layoutId={RANDOM_BY_GROUPS.id}>
			<GridCellLink to={RANDOM_BY_GROUPS.to}>
				<div className="grid h-full p-2 place-content-center">
					<h2 className="text-lg font-semibold sm:text-2xl line-clamp-1">Random By Groups</h2>
					<span className="line-clamp-2">Random By Groups</span>
				</div>
			</GridCellLink>
		</motion.div>
	)
}