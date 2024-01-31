/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { FullScreenButton, SharingButton } from ".";
import type { UrlSharingData } from "~/utils/types";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

export function ContentWrapper({ urlSharingData, children }: { urlSharingData: UrlSharingData, children: React.ReactNode }) {
	return (
		<div className="relative w-full h-full p-2 lg:p-4 rounded-lg">
			<div className="absolute top-0 right-0 sm:top-1 sm:right-1 flex">
				<SharingButton data={urlSharingData} />
				<FullScreenButton />
			</div>
			<div className="h-full w-full">
				{children}
			</div>
		</div>
	)
}