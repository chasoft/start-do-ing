/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { ContentWrapper } from "~/components"
import { useHelpContents, useUrlSharingData } from "~/utils"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { QUIZ } from "../quiz/metadata"
import { helpContents } from "./helpContents"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function QuizIndexContent({ className }: { className?: string }) {
	const urlSharingData = useUrlSharingData(QUIZ)
	useHelpContents(helpContents)
	return (
		<ContentWrapper urlSharingData={urlSharingData} helpContents={helpContents}>
			<div className={className}>
				<div className="h-full p-2 sm:p-4 xl:p-6">
					<h1 className="text-lg font-semibold sm:text-2xl">Online Quiz Games</h1>
				</div>
			</div>
		</ContentWrapper>
	)
}
