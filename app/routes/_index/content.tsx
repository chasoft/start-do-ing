/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion"
import { ScrollArea } from "@mantine/core"
import clsx from "clsx"

/* COMPONENTS & UTILS */
import { ContentWrapper, ReleaseUpdates } from "~/components"
import { useUrlSharingData } from "~/utils"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { HOME } from "./metadata"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

//TODO: layoutId is tring, need to change
export function HomeFeature({
	className,
	layoutId
}: {
	className?: string
	layoutId: string
}) {
	const urlSharingData = useUrlSharingData(HOME, false)
	return (
		<ContentWrapper urlSharingData={urlSharingData}>
			<motion.div className={clsx("h-full", className)} layoutId={layoutId}>
				<ScrollArea className="h-full p-2 sm:p-4 xl:p-6">
					<ReleaseUpdates />
				</ScrollArea>
			</motion.div>
		</ContentWrapper>
	)
}
