/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { ContentWrapper } from "~/components"
import { useUrlSharingData } from "~/utils"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { BLOG } from "../blog/metadata"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function BlogIndexContent({ className }: { className?: string }) {
	//TODO: Blog yet implemented yet
	const urlSharingData = useUrlSharingData(BLOG)
	return (
		<ContentWrapper urlSharingData={urlSharingData}>
			<div className={className}>
				<div className="h-full p-2 sm:p-4 xl:p-6">
					<h1 className="text-lg font-semibold sm:text-2xl">Blog</h1>
				</div>
			</div>
		</ContentWrapper>
	)
}
