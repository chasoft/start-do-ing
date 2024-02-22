/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { ContentWrapper } from "~/components"
import { useUrlSharingData } from "~/utils"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { RANDOM_USERNAME } from "./metadata"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function RandomUsernameContent({ className }: { className?: string }) {
	const urlSharingData = useUrlSharingData(RANDOM_USERNAME)
	return (
		<ContentWrapper urlSharingData={urlSharingData}>
			<div className={className}>
				<div className="h-full p-2 sm:p-4 xl:p-6">
					<h1 className="text-lg font-semibold sm:text-2xl">Username</h1>
				</div>
			</div>
		</ContentWrapper>
	)
}
