/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion"
import clsx from "clsx"

/* COMPONENTS & UTILS */
import { CellGridLink, CellIntro } from "~/components"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { SUPPORT } from "./metadata"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function SupportGridCellIntro({ blockIndex }: { blockIndex: number }) {
	return <CellIntro metaData={SUPPORT} upTo={SUPPORT.to} blockIndex={blockIndex} />
}

export function SupportGridCell({ className }: { className?: string }) {
	return (
		<motion.div className={clsx("h-full", className)} layoutId={SUPPORT.id}>
			<CellGridLink to={SUPPORT.to} blockIndex={0}>
				<div className="grid h-full place-content-center p-2">
					<h2 className="line-clamp-1 text-lg font-semibold sm:text-2xl">Support</h2>
					<span className="line-clamp-2">Support my work</span>
				</div>
			</CellGridLink>
		</motion.div>
	)
}
