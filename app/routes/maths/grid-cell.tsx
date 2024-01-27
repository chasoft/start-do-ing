/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion";
import clsx from "clsx";

/* COMPONENTS & UTILS */
import { GridCellLink } from "~/components";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */
import { MATHS } from "./metadata";

/***************************************************************************
 * 
 *  START
 *  
 **************************************************************************/

export function MathsGroupCell({ className }: { className?: string }) {
	return (
		<motion.div className={clsx("h-full", className)} layoutId={MATHS.id}>
			<GridCellLink to={MATHS.to}>
				<div className="grid h-full p-2 place-content-center">
					<h2 className="text-lg font-semibold sm:text-2xl line-clamp-1">Maths Group</h2>
					<span>What? Maths Group what?</span>
				</div>
			</GridCellLink>
		</motion.div>
	)
}
