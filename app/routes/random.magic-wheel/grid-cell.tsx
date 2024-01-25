/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion";
import clsx from "clsx";

/* COMPONENTS & UTILS */
import { GridCellLink } from "~/components";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */
import { RANDOM_MAGIC_WHEEL } from "./metadata";

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

export function RandomMagicWheelCell({ className }: { className?: string }) {
	return (
		<motion.div className={clsx("h-full", className)} layoutId={RANDOM_MAGIC_WHEEL.id}>
			<GridCellLink to={RANDOM_MAGIC_WHEEL.to}>
				<div className="grid h-full p-2 place-content-center">
					<h2 className="text-lg font-semibold sm:text-2xl line-clamp-1">Magic Wheel</h2>
					<span className="line-clamp-2">...</span>
				</div>
			</GridCellLink>
		</motion.div>
	)
}