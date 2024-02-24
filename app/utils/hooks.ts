/* FRAMEWORK */
import React, { useEffect, useMemo } from "react"
import { useMatches, useSearchParams } from "@remix-run/react"

/* THIRD-PARTY PACKAGES */
import { useMediaQuery } from "@mantine/hooks"
import { useSetAtom } from "jotai"

/* COMPONENTS & UTILS */
import { getMediaBreakpoint, getUrlSharingData } from "."
import type { Block, CustomRouteHandle } from "./types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { DEFAULT_BLOCK, searchParamsSettings } from "~/data"
import { urlSharingDataAtom } from "~/atoms/globals"

/***************************************************************************
 *
 *  HOOKS
 *
 **************************************************************************/

export const useIsomorphicLayoutEffect =
	typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect

export function useBreakpoint() {
	const [breakpoint, setBreakpoint] = React.useState(() => getMediaBreakpoint())

	useIsomorphicLayoutEffect(() => {
		function updateBreakpoint() {
			setBreakpoint(getMediaBreakpoint())
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
	const currentLayoutId = activeHandle.layoutId ?? DEFAULT_BLOCK.id
	const isGroup = activeHandle.isGroup ?? false
	return { currentLayoutId, isGroup }
}

export function useIsFullscreen() {
	const [searchParams] = useSearchParams()
	const isFullScreen =
		searchParams.get(searchParamsSettings.view.key) ===
		searchParamsSettings.view.values.fullscreen
	return isFullScreen
}

export function useIsMobileWindowSize() {
	const isMobileWindowSize = useMediaQuery("(max-width: 1024px)")
	return isMobileWindowSize
}

export function useUrlSharingData(block: Block<unknown>, fullscreen: boolean = true) {
	const setUrlSharingData = useSetAtom(urlSharingDataAtom)

	const urlSharingData = useMemo(
		() => getUrlSharingData(block, { fullscreen }),
		[block, fullscreen]
	)

	useEffect(() => {
		setUrlSharingData(urlSharingData)
	}, [urlSharingData, setUrlSharingData])

	return urlSharingData
}
