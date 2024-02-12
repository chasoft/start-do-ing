/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion"
import clsx from "clsx"

/* COMPONENTS & UTILS */
import { GoUpLink, HomeLink } from "."
import type { Block } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

type CellIntroProps = {
	className?: string
	metaData: Block<string>
	upTo: string
	children: React.ReactNode
}

export function CellIntro({ className, metaData, upTo, children }: CellIntroProps) {
	const showGoUpLink = metaData.to !== upTo
	return (
		<motion.div
			className={clsx(
				"h-full relative block overflow-hidden bg-pink-200 border-2 rounded-lg",
				className
			)}
		>
			<div className="flex flex-col p-2">
				<h2 className="text-base font-semibold sm:text-xl line-clamp-1">
					{metaData.title}
				</h2>
				<div className="flex flex-col grow">
					{metaData.description && (
						<span className="text-sm line-clamp-2 sm:text-base">
							{metaData.description}
						</span>
					)}
				</div>
				<div>{children}</div>
			</div>
			<div className="absolute top-0 right-0 p-2 flex gap-2">
				<HomeLink />
				{showGoUpLink && <GoUpLink upTo={upTo} />}
			</div>
		</motion.div>
	)
}
