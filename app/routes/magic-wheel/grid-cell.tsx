/* FRAMEWORK */
import { Link } from "@remix-run/react";

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion";
import clsx from "clsx";

/* COMPONENTS & UTILS */

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */
import { MAGIC_WHEEL } from "./metadata";

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

export function MagicWheelGridCell({ className }: { className?: string }) {
	return (
		<motion.div
			className={clsx("h-full", className)}
			layoutId={MAGIC_WHEEL.id}
		>
			<Link to={MAGIC_WHEEL.to} className="relative block h-full transition-colors bg-pink-100 rounded-lg hover:bg-pink-200 hover:outline-pink-300 outline-pink-200 outline-2 hover:outline-2 outline">
				<div className="p-2">
					Magic Wheel Block<p>layoutId: {MAGIC_WHEEL.id}</p>
				</div>
			</Link>
		</motion.div>
	)
}