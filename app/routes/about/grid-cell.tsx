/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion"
import clsx from "clsx"

/* COMPONENTS & UTILS */
import { CellGridLink } from "~/components"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { ABOUT } from "./metadata"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function AboutGridCell({ className }: { className?: string }) {
	return (
		<motion.div className={clsx("h-full", className)} layoutId={ABOUT.id}>
			<CellGridLink to={ABOUT.to}>
				<div className="grid h-full p-2 place-content-center">
					<h2 className="text-lg font-semibold sm:text-2xl line-clamp-1">About</h2>
					<span className="line-clamp-2">
						A quick & dirty introduction about the site
					</span>
				</div>
			</CellGridLink>
		</motion.div>
	)
}
