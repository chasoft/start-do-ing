/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion"
import clsx from "clsx"

/* COMPONENTS & UTILS */
import { CellGridLink } from "~/components"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { DEV_UTILS } from "../dev-utils/metadata"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function DevUtilsIndexCell({ className }: { className?: string }) {
	return (
		<motion.div className={clsx("h-full", className)} layoutId={DEV_UTILS.id}>
			<CellGridLink to={DEV_UTILS.to}>
				<div className="grid h-full p-2 place-content-center">
					<h2 className="text-lg font-semibold sm:text-2xl line-clamp-1">Dev Utils</h2>
					<span>What? DevUtils what?</span>
				</div>
			</CellGridLink>
		</motion.div>
	)
}
