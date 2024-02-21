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
			<div className="h-full w-full rounded-lg border-2 border-gray-200 bg-left-block-1 bg-cover"></div>
		</motion.div>
	)
}
