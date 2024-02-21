/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import clsx from "clsx"

/* COMPONENTS & UTILS */
import { FullScreenButton, SharingButton } from "."
import { useIsFullscreen, useIsMobileWindowSize } from "~/utils"
import type { UrlSharingData } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function ContentWrapper({
	urlSharingData,
	children,
	className
}: {
	urlSharingData: UrlSharingData
	children: React.ReactNode
	className?: string
}) {
	const isFullScreen = useIsFullscreen()
	const isMobileWindowSize = useIsMobileWindowSize()

	return (
		<div
			className={clsx(
				"relative h-full w-full transition-all",
				{
					"rounded-lg border-2 border-gray-100 p-2": !isMobileWindowSize && !isFullScreen
				},
				className
			)}
		>
			{(!isMobileWindowSize || isFullScreen) && (
				<div className="absolute right-0 top-0 z-[9999] flex sm:right-1 sm:top-1">
					<SharingButton data={urlSharingData} />
					<FullScreenButton />
				</div>
			)}
			<div className="h-full w-full">{children}</div>
		</div>
	)
}
