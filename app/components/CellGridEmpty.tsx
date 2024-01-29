/* FRAMEWORK */
import { Link } from "@remix-run/react";

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion";
import clsx from "clsx";

/* COMPONENTS & UTILS */

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */
import { EMPTY_BLOCK } from "~/data";

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

export function CellGridEmpty({ className }: { className?: string }) {
	return (
		<motion.div className={clsx("h-full", className)} layoutId={EMPTY_BLOCK.id}>
			<Link to={EMPTY_BLOCK.to} className="block h-full bg-gray-200 bg-opacity-50 rounded-lg hover:bg-opacity-70">
				<div className="p-2">
					<p></p>
				</div>
			</Link>
		</motion.div>
	)
}