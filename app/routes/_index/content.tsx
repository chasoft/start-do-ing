/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion"

/* COMPONENTS & UTILS */
import { ContentWrapper } from "~/components"
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
	const urlSharingData = useUrlSharingData(HOME, { fullscreen: false })
	return (
		<ContentWrapper urlSharingData={urlSharingData}>
			<motion.div className={className} layoutId={layoutId}>
				<div className="h-full p-2 sm:p-4 xl:p-6">
					<h1 className="text-lg font-semibold sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 2xl:mb-8">
						Welcome to Startdo.ing Space
					</h1>
					<p className="columns-2">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
						nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
						Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
						eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
						in culpa qui officia deserunt mollit anim id est laborum.
					</p>
				</div>
			</motion.div>
		</ContentWrapper>
	)
}
