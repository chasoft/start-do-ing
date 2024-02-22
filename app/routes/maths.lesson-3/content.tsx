/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { ContentWrapper } from "~/components"
import { useUrlSharingData } from "~/utils"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { MATHS_3 } from "./metadata"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function MathsEmpty3Content({ className }: { className?: string }) {
	const urlSharingData = useUrlSharingData(MATHS_3)
	return (
		<ContentWrapper urlSharingData={urlSharingData}>
			<div className={className}>
				<div className="h-full p-2 sm:p-4 xl:p-6">
					<h1 className="text-lg font-semibold sm:text-2xl">Maths Empty 3</h1>
				</div>
			</div>
		</ContentWrapper>
	)
}
