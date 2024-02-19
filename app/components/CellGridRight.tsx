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

export function CellGridRight({ className }: { className?: string }) {
	return (
		<motion.div className={clsx("h-full", className)} layoutId={SIDE_BLOCKS.RIGHT.id}>
			<Link
				to={SIDE_BLOCKS.RIGHT.to}
				className="block h-full bg-gray-200 rounded-lg bg-opacity-60 hover:bg-opacity-70"
			>
				<div className="p-2">CellGridRight</div>
				https://vuejs.org

				Special sponsors
				...
				platinum sponsors
				...
				gold sponsors

				https://vuejs.org/sponsor

			</Link>
		</motion.div>
	)
}
