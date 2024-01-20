/* FRAMEWORK */
import { Link } from "@remix-run/react";

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion";
import clsx from "clsx";

/* COMPONENTS & UTILS */

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */
import { EMPTY_BLOCK } from "~/constants";

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

export function EmptyGridCell({ className }: { className?: string }) {
	return (
		<motion.div className={clsx("h-full", EMPTY_BLOCK.color.bg, className)} layoutId={EMPTY_BLOCK.id}>
			<Link to={EMPTY_BLOCK.to} className="block h-full">
				<div className="p-2">
					<p>layoutId: {EMPTY_BLOCK.id}</p>
				</div>
			</Link>
		</motion.div>
	)
}