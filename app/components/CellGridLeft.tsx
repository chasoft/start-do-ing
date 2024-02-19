/* FRAMEWORK */
import { Link } from "@remix-run/react"

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
			<Link
				to={SIDE_BLOCKS.LEFT.to}
				className="block h-full bg-gray-200 rounded-lg bg-opacity-60 hover:bg-opacity-70"
			>
				<div className="p-2">CellGridLeft</div>




				Random ads

			</Link>
		</motion.div>
	)
}
