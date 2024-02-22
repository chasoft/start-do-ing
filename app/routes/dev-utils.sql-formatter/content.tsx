/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { ContentWrapper } from "~/components"
import { useUrlSharingData } from "~/utils"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { DEV_UTILS_SQL_FORMATTER } from "./metadata"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function DevUtilsSqlFormatterContent({ className }: { className?: string }) {
	const urlSharingData = useUrlSharingData(DEV_UTILS_SQL_FORMATTER)
	return (
		<ContentWrapper urlSharingData={urlSharingData}>
			<div className={className}>
				<div className="h-full p-2 sm:p-4 xl:p-6">
					<h1 className="text-lg font-semibold sm:text-2xl">SQL Formatter</h1>
				</div>
			</div>
		</ContentWrapper>
	)
}
