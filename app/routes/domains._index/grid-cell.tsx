/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion"
import clsx from "clsx"

/* COMPONENTS & UTILS */
import { CellGridLink } from "~/components"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { DOMAINS } from "../domains/metadata"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function DomainsIndexCell({ className }: { className?: string }) {
	return (
		<motion.div className={clsx("h-full", className)} layoutId={DOMAINS.id}>
			<CellGridLink to={DOMAINS.to}>
				<div className="grid h-full p-2 place-content-center">
					<h2 className="text-lg font-semibold sm:text-2xl line-clamp-1">Domains</h2>
					<span>What? Domains what?</span>
				</div>
			</CellGridLink>
		</motion.div>
	)
}
