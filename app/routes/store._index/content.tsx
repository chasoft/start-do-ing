/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { ContentWrapper } from "~/components"
import { useUrlSharingData } from "~/utils"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { STORE } from "../store/metadata"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function StoreIndexContent({ className }: { className?: string }) {
	//TODO: Store yet implemented yet
	const urlSharingData = useUrlSharingData(STORE)
	return (
		<ContentWrapper urlSharingData={urlSharingData}>
			<div className={className}>
				<div className="h-full p-2 sm:p-4 xl:p-6">
					<h1 className="text-lg font-semibold sm:text-2xl">Store</h1>
					<div>Store is under construction</div>
				</div>
			</div>
		</ContentWrapper>
	)
}
