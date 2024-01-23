/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion";
import clsx from "clsx";

/* COMPONENTS & UTILS */
import { GridCellLink } from "~/components";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */
import { MAGIC_WHEEL } from "./metadata";

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

export function MagicWheelGridCell({ className }: { className?: string }) {
	return (
		<motion.div
			className={clsx("h-full", className)}
			layoutId={MAGIC_WHEEL.id}
		>
			<GridCellLink to={MAGIC_WHEEL.to}>
				<div className="grid h-full p-2 place-content-center">
					<h2 className="text-lg font-semibold sm:text-2xl line-clamp-1">Magic wheel</h2>
					<span className="line-clamp-2">Your wheel of magic</span>
				</div>
			</GridCellLink>
		</motion.div>
	)
}