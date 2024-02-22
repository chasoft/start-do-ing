/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import clsx from "clsx"

/* COMPONENTS & UTILS */
import { ContentWrapper, HomeTabs } from "~/components"
import { useUrlSharingData } from "~/utils"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { HOME } from "./metadata"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function HomeFeature({ className }: { className?: string }) {
	const urlSharingData = useUrlSharingData(HOME, false)
	return (
		<ContentWrapper urlSharingData={urlSharingData}>
			<div className={clsx("h-full", className)}>
				<HomeTabs />
			</div>
		</ContentWrapper>
	)
}
