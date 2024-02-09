/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion";
import clsx from "clsx";

/* COMPONENTS & UTILS */
import { CellGridLink } from "~/components";

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { SUPPORT } from "./metadata";

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

export function SupportGridCell({ className }: { className?: string }) {
	return (
		<motion.div className={clsx("h-full", className)} layoutId={SUPPORT.id}>
			<CellGridLink to={SUPPORT.to}>
				<div className="grid h-full p-2 place-content-center">
					<h2 className="text-lg font-semibold sm:text-2xl line-clamp-1">Support</h2>
					<span className="line-clamp-2">Support my work</span>
				</div>
			</CellGridLink>
		</motion.div>
	)
}