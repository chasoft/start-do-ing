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
			className={clsx("h-full", MAGIC_WHEEL.color.bg, className)}
			layoutId={MAGIC_WHEEL.id}
		>
			<Link to={MAGIC_WHEEL.to} className="block h-full">
				<div className="p-2">
					Magic Wheel Block<p>layoutId: {MAGIC_WHEEL.id}</p>
				</div>
			</Link>
		</motion.div>
	)
}