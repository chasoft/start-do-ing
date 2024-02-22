/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { ContentWrapper } from "~/components"
import { useUrlSharingData } from "~/utils"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { DEV_UTILS_LOREM_IPSUM_GENERATOR } from "./metadata"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function DevUtilsLoremIpsumGeneratorContent({
	className
}: {
	className?: string
}) {
	const urlSharingData = useUrlSharingData(DEV_UTILS_LOREM_IPSUM_GENERATOR)
	return (
		<ContentWrapper urlSharingData={urlSharingData}>
			<div className={className}>
				<div className="h-full p-2 sm:p-4 xl:p-6">
					<h1 className="text-lg font-semibold sm:text-2xl">Lorem Ipsum Generator</h1>
				</div>
			</div>
		</ContentWrapper>
	)
}
