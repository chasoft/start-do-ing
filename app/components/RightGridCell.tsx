/* FRAMEWORK */
import { Link } from "@remix-run/react";

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion";
import clsx from "clsx";

/* COMPONENTS & UTILS */

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */
import { SIDE_BLOCKS } from "~/constants";

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

export function RightGridCell({ className }: { className?: string }) {
	return (
		<motion.div className={clsx("h-full", SIDE_BLOCKS[1].color.bg, className)} layoutId={SIDE_BLOCKS[1].id}>
			<Link to={SIDE_BLOCKS[1].to} className="block h-full">
				<div className="p-2">
					<p>layoutId: {SIDE_BLOCKS[1].id}</p>
				</div>
			</Link>
		</motion.div>
	)
}