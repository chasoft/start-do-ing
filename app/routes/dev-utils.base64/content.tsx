/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { ContentWrapper } from "~/components"
import { useUrlSharingData } from "~/utils"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { DEV_UTILS_BASE64 } from "./metadata"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function DevUtilsBase64Content({ className }: { className?: string }) {
	const urlSharingData = useUrlSharingData(DEV_UTILS_BASE64)
	return (
		<ContentWrapper urlSharingData={urlSharingData}>
			<div className={className}>
				<div className="h-full p-2 sm:p-4 xl:p-6">
					<h1 className="text-lg font-semibold sm:text-2xl">Base64</h1>
				</div>
			</div>
		</ContentWrapper>
	)
}
