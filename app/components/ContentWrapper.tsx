/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import clsx from "clsx"

/* COMPONENTS & UTILS */
import { FullScreenButton, SharingButton } from "."
import { useIsFullscreen, useIsMobileWindowSize, useIsShowMobileButtons } from "~/utils"
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
	const isShowMobileButtons = useIsShowMobileButtons()

	return (
		<div
			className={clsx("relative h-full w-full", {
				"rounded-lg p-2 lg:p-4": !isMobileWindowSize,
				className
			})}
		>
			{(!isShowMobileButtons || isFullScreen) && (
				<div className="absolute top-0 right-0 flex sm:top-1 sm:right-1">
					<SharingButton data={urlSharingData} />
					<FullScreenButton />
				</div>
			)}
			<div className="w-full h-full">{children}</div>
		</div>
	)
}
