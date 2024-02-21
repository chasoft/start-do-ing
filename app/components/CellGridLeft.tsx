/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion"
import clsx from "clsx"

/* COMPONENTS & UTILS */

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { SIDE_BLOCKS } from "~/data"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function CellGridLeft({ className }: { className?: string }) {
	return (
		<motion.div className={clsx("h-full", className)} layoutId={SIDE_BLOCKS.LEFT.id}>
			<div className="w-full h-full bg-cover border border-red-500 rounded-lg bg-leftBlock1">
				<span>1</span>
				<span>2</span>
				<span>3</span>
				<span>4</span>
			</div>
		</motion.div>
	)
}
