/* FRAMEWORK */
import { Link } from "@remix-run/react";

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion";
import clsx from "clsx";

/* COMPONENTS & UTILS */

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */
import { COUNT_DOWN } from "./metadata";

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

export function CountDownGridCell({ className }: { className?: string }) {
	return (
		<motion.div className={clsx("h-full", COUNT_DOWN.color.bg, className)} layoutId={COUNT_DOWN.id}>
			<Link to={COUNT_DOWN.to} className="block h-full">
				<div className="p-2">
					Count down Block
					<p>layoutId: {COUNT_DOWN.id}</p>
				</div>
			</Link>
		</motion.div>
	)
}