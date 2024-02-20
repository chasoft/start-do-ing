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

const demoBackgroundImageUrl = `url("https://images.unsplash.com/photo-1597698063932-9450882bb1be")`

export function CellGridLeft({ className }: { className?: string }) {
	return (
		<motion.div className={clsx("h-full", className)} layoutId={SIDE_BLOCKS.LEFT.id}>
			<div className="w-full h-full rounded-lg border border-red-500 bg-leftBlock1 bg-cover">
				something
			</div>
		</motion.div>
	)
}
