/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion";
import clsx from "clsx";

/* COMPONENTS & UTILS */
import { GridCellLink } from "~/components";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */
import { MATHS_EMPTY_1 } from "./metadata";

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

export function MathsEmpty1Cell({ className }: { className?: string }) {
	return (
		<motion.div className={clsx("h-full", className)} layoutId={MATHS_EMPTY_1.id}>
			<GridCellLink to={MATHS_EMPTY_1.to}>
				<div className="grid h-full p-2 place-content-center">
					<h2 className="text-lg font-semibold sm:text-2xl line-clamp-1">MathsEmpty1</h2>
					<span className="line-clamp-2">MathsEmpty1</span>
				</div>
			</GridCellLink>
		</motion.div>
	)
}