/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion"
import { Text } from "@mantine/core"
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
	return (
		<CellIntro metaData={SUPPORT} upTo={SUPPORT.to} blockIndex={blockIndex}>
			<Text>Support my work</Text>
		</CellIntro>
	)
}

export function SupportGridCell({ className }: { className?: string }) {
	return (
		<motion.div className={clsx("h-full", className)} layoutId={SUPPORT.id}>
			<CellGridLink to={SUPPORT.to} blockIndex={0}>
				<div className="grid h-full p-2 place-content-center">
					<h2 className="text-lg font-semibold sm:text-2xl line-clamp-1">Support</h2>
					<span className="line-clamp-2">Support my work</span>
				</div>
			</CellGridLink>
		</motion.div>
	)
}
