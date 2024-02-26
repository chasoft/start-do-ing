/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { ContentWrapper } from "~/components"
import { useHelpContents, useUrlSharingData } from "~/utils"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { LANGUAGES_100_POPULAR_CHINESE_WORDS } from "./metadata"
import { helpContents } from "./helpContents"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function Languages100PopularChineseWordsContent({
	className
}: {
	className?: string
}) {
	const urlSharingData = useUrlSharingData(LANGUAGES_100_POPULAR_CHINESE_WORDS)
	useHelpContents(helpContents)
	return (
		<ContentWrapper urlSharingData={urlSharingData} helpContents={helpContents}>
			<div className={className}>
				<div className="h-full p-2 sm:p-4 xl:p-6">
					<h1 className="text-lg font-semibold sm:text-2xl">100 Popular Chinese Words</h1>
				</div>
			</div>
		</ContentWrapper>
	)
}
