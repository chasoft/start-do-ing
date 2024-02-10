/* FRAMEWORK */
import React, { useEffect, useMemo } from "react"
import { useMatches, useSearchParams } from "@remix-run/react"

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { getMediaBreakpoint, getUrlSharingData } from "."
import type { Block, CustomRouteHandle } from "./types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { DEFAULT_BLOCK } from "~/data"
import { useMediaQuery } from "@mantine/hooks"
import { urlSharingDataAtom } from "~/atoms/globals"
import { useSetAtom } from "jotai"

/***************************************************************************
 *
 *  HOOKS
 *
 **************************************************************************/

export const useIsomorphicLayoutEffect =
	typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect

export function useBreakpoint() {
	const [breakpoint, setBreakpoint] = React.useState(() => getMediaBreakpoint()[0])

	useIsomorphicLayoutEffect(() => {
		function updateBreakpoint() {
			setBreakpoint(getMediaBreakpoint()[0])
		}
		window.addEventListener("resize", updateBreakpoint)
		updateBreakpoint()
		return () => window.removeEventListener("resize", updateBreakpoint)
	}, [])

	return breakpoint
}

export function useCurrentLayoutId() {
	const matches = useMatches()
	const activeHandle = matches[matches.length - 1].handle as CustomRouteHandle
	const currenLayoutId = activeHandle.layoutId ?? DEFAULT_BLOCK.id
	return currenLayoutId
}

export function useIsFullscreen() {
	const [searchParams] = useSearchParams()
	const isFullScreen = searchParams.get("full") === "true"
	return isFullScreen
}

export function useIsShowMobileButtons() {
	const isShowMobileButtons = useMediaQuery("(max-width: 768px)")
	return isShowMobileButtons
}

export function useIsMobileWindowSize() {
	const isMobileWindowSize = useMediaQuery("(max-width: 1024px)")
	return isMobileWindowSize
}

export function useUrlSharingData(
	block: Block<unknown>,
	options: { fullscreen?: boolean } | undefined
) {
	const setUrlSharingData = useSetAtom(urlSharingDataAtom)

	const urlSharingData = useMemo(
		() => getUrlSharingData(block, { fullscreen: options?.fullscreen ?? true }),
		[block, options?.fullscreen]
	)

	useEffect(() => {
		setUrlSharingData(urlSharingData)
	}, [urlSharingData, setUrlSharingData])

	return urlSharingData
}
