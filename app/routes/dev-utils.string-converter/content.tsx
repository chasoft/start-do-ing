/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { ContentWrapper } from "~/components"
import { useUrlSharingData } from "~/utils"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { DEV_UTILS_STRING_CONVERTER } from "./metadata"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function DevUtilsStringConverterContent({ className }: { className?: string }) {
	const urlSharingData = useUrlSharingData(DEV_UTILS_STRING_CONVERTER)
	return (
		<ContentWrapper urlSharingData={urlSharingData}>
			<div className={className}>
				<div className="h-full p-2 sm:p-4 xl:p-6">
					<h1 className="text-lg font-semibold sm:text-2xl">String Converter</h1>
				</div>
			</div>
		</ContentWrapper>
	)
}
