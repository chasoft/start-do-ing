/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import clsx from "clsx";
import { motion } from "framer-motion";

/* COMPONENTS & UTILS */
import { GridCellLink } from "~/components";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */
import { HOME } from "./metadata";

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

export function HomeGridCell({ className }: { className?: string }) {
	return (
		<motion.div className={clsx("h-full", className)} layoutId={HOME.id}>
			<GridCellLink to={HOME.to}>
				<div className="grid h-full p-2 place-content-center">
					<h2 className="text-lg font-semibold sm:text-2xl line-clamp-1">Home</h2>
					<span className="line-clamp-2">Site introduction</span>
				</div>
			</GridCellLink>
		</motion.div>
	)
}