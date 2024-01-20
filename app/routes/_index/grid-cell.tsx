/* FRAMEWORK */
import { Link } from "@remix-run/react";

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion";
import clsx from "clsx";

/* COMPONENTS & UTILS */

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */
import { HOME } from "./metadata";

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

export function HomeGridCell({ className }: { className?: string }) {
	return (
		<motion.div className={clsx("h-full", HOME.color.bg, className)} layoutId={HOME.id}>
			<Link to="/" className="block h-full">
				<div className="p-2">
					Home Block<p>layoutId: {HOME.id}</p>
				</div>
			</Link>
		</motion.div>
	)
}