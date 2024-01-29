/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion";
import clsx from "clsx";

/* COMPONENTS & UTILS */
import { CellGridLink } from "~/components";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */
import { RANDOM } from "../random/metadata";

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

export function RandomIndexCell({ className }: { className?: string }) {
	return (
		<motion.div className={clsx("h-full", className)} layoutId={RANDOM.id}>
			<CellGridLink to={RANDOM.to}>
				<div className="grid h-full p-2 place-content-center">
					<h2 className="text-lg font-semibold sm:text-2xl line-clamp-1">Random</h2>
					<span>What? Random what?</span>
				</div>
			</CellGridLink>
		</motion.div>
	)
}
