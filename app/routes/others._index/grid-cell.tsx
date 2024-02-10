/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion"
import clsx from "clsx"

/* COMPONENTS & UTILS */
import { CellGridLink } from "~/components"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { OTHERS } from "../others/metadata"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function OthersIndexCell({ className }: { className?: string }) {
	return (
		<motion.div className={clsx("h-full", className)} layoutId={OTHERS.id}>
			<CellGridLink to={OTHERS.to}>
				<div className="grid h-full p-2 place-content-center">
					<h2 className="text-lg font-semibold sm:text-2xl line-clamp-1">Others</h2>
					<span>What? Others!</span>
				</div>
			</CellGridLink>
		</motion.div>
	)
}
