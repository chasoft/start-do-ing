/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion";
import clsx from "clsx";

/* COMPONENTS & UTILS */
import { GridCellLink } from "~/components";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */
import { RANDOM_LOTTERY } from "./metadata";

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

export function RandomLotteryCell({ className }: { className?: string }) {
	return (
		<motion.div className={clsx("h-full", className)} layoutId={RANDOM_LOTTERY.id}>
			<GridCellLink to={RANDOM_LOTTERY.to}>
				<div className="grid h-full p-2 place-content-center">
					<h2 className="text-lg font-semibold sm:text-2xl line-clamp-1">Lottery Generator</h2>
					<span className="line-clamp-2">...</span>
				</div>
			</GridCellLink>
		</motion.div>
	)
}