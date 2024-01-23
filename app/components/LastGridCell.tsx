/* FRAMEWORK */
import { Link } from "@remix-run/react";

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion";
import clsx from "clsx";

/* COMPONENTS & UTILS */

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */
import { LAST_BLOCK } from "~/constants";

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

export function LastGridCell({ className }: { className?: string }) {
	return (
		<motion.div className={clsx("h-full rounded-lg", className)} layoutId={LAST_BLOCK.id}>
			<Link to={LAST_BLOCK.to} className="block h-full bg-gray-200 bg-opacity-50 rounded-lg hover:bg-opacity-70">
				<div className="p-2">
					<p></p>
				</div>
			</Link>
		</motion.div>
	)
}