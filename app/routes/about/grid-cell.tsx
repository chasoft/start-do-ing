/* FRAMEWORK */
import { Link } from "@remix-run/react";

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion";
import clsx from "clsx";

/* COMPONENTS & UTILS */

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */
import { ABOUT } from "./metadata";

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

export function AboutGridCell({ className }: { className?: string }) {
	return (
		<motion.div className={clsx("h-full", ABOUT.color.bg, className)} layoutId={ABOUT.id}>
			<Link to={ABOUT.to} className="block h-full">
				<div className="p-2">
					About Block<p>layoutId: {ABOUT.id}</p>
				</div>
			</Link>
		</motion.div>
	)
}