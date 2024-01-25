/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion";
import clsx from "clsx";

/* COMPONENTS & UTILS */
import { GridCellLink } from "~/components";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */
import { RANDOM_USERNAME } from "./metadata";

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

export function RandomUsernameCell({ className }: { className?: string }) {
	return (
		<motion.div className={clsx("h-full", className)} layoutId={RANDOM_USERNAME.id}>
			<GridCellLink to={RANDOM_USERNAME.to}>
				<div className="grid h-full p-2 place-content-center">
					<h2 className="text-lg font-semibold sm:text-2xl line-clamp-1">Username Generator</h2>
					<span className="line-clamp-2">Get your new secured username</span>
				</div>
			</GridCellLink>
		</motion.div>
	)
}