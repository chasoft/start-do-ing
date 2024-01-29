/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion";
import clsx from "clsx";

/* COMPONENTS & UTILS */
import { CellGridLink } from "~/components";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */
import { KAHOOT } from "../kahoot/metadata";

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

export function KahootIndexCell({ className }: { className?: string }) {
	return (
		<motion.div className={clsx("h-full", className)} layoutId={KAHOOT.id}>
			<CellGridLink to={KAHOOT.to}>
				<div className="grid h-full p-2 place-content-center">
					<h2 className="text-lg font-semibold sm:text-2xl line-clamp-1">Kahoot</h2>
					<span>What? Kahoot what?</span>
				</div>
			</CellGridLink>
		</motion.div>
	)
}
