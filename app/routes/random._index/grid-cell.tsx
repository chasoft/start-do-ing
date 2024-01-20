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
		<motion.div className={clsx("h-full", RANDOM.color.bg, className)} layoutId={RANDOM.id}>
			<Link to={RANDOM.to} className="block h-full">
				Random
			</Link>
		</motion.div>
	)
}
