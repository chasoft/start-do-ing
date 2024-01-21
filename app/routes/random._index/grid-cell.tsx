/* FRAMEWORK */
import { Link } from "@remix-run/react";

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion";
import clsx from "clsx";

/* COMPONENTS & UTILS */

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */
import { RANDOM } from "./metadata";

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

export function RandomGridCell({ className }: { className?: string }) {
	return (
		<motion.div className={clsx("h-full", className)} layoutId={RANDOM.id}>
			<Link to={RANDOM.to} className="relative block h-full transition-colors bg-pink-100 rounded-lg hover:bg-pink-200 hover:outline-pink-300 outline-pink-200 outline-2 hover:outline-2 outline">
				Random
			</Link>
		</motion.div>
	)
}
