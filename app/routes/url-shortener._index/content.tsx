/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { ContentWrapper } from "~/components"
import { useUrlSharingData } from "~/utils"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { URL_SHORTENER } from "../url-shortener/metadata"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function URLShortenerIndexContent({ className }: { className?: string }) {
	const urlSharingData = useUrlSharingData(URL_SHORTENER)
	return (
		<ContentWrapper urlSharingData={urlSharingData}>
			<div className={className}>
				<div className="h-full p-2 sm:p-4 xl:p-6">
					<h1 className="text-lg font-semibold sm:text-2xl">URL Shortener</h1>
				</div>
			</div>
		</ContentWrapper>
	)
}
