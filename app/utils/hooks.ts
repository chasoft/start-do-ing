/* FRAMEWORK */
import React, { useCallback, useEffect, useMemo } from "react"
import { useMatches, useSearchParams } from "@remix-run/react"

/* THIRD-PARTY PACKAGES */
import { useMediaQuery } from "@mantine/hooks"
import { useSetAtom } from "jotai"

/* COMPONENTS & UTILS */
import { getMediaBreakpoint, getUrlSharingData } from "."
import type { Block, CustomRouteHandle, MarkdownString, PageId } from "./types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { DEFAULT_BLOCK, SPR } from "~/data"
import { helpContentsAtom, urlSharingDataAtom } from "~/atoms/globals"

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
	const isFullScreen = searchParams.get(SPR.view.key) === SPR.view.values.fullpage
	return isFullScreen
}

export function useIsMobileWindowSize() {
	const isMobileWindowSize = useMediaQuery("(max-width: 1024px)")
	return isMobileWindowSize
}

export function useUrlSharingData(block: Block<PageId>, fullpage: boolean = true) {
	const setUrlSharingData = useSetAtom(urlSharingDataAtom)

	const urlSharingData = useMemo(
		() => getUrlSharingData(block, { viewFullpage: fullpage }),
		[block, fullpage]
	)

	useEffect(() => {
		setUrlSharingData(urlSharingData)
	}, [urlSharingData, setUrlSharingData])

	return urlSharingData
}

export function useHelpContents(helpContents: MarkdownString) {
	const setHelpContents = useSetAtom(helpContentsAtom)

	useEffect(() => {
		setHelpContents(helpContents)
	}, [helpContents, setHelpContents])

	return helpContents
}

export function useToggleSearchParams({ key, value }: { key: string; value: string }) {
	const [searchParams, setSearchParams] = useSearchParams()
	const opened = searchParams.get(key) === value

	const open = useCallback(() => {
		setSearchParams((prev) => {
			prev.set(key, value)
			return prev
		})
	}, [key, setSearchParams, value])

	const close = useCallback(() => {
		setSearchParams((prev) => {
			prev.delete(key)
			return prev
		})
	}, [key, setSearchParams])

	return [opened, { open, close }] as const
}

export function useTabsSearchParams<T>({
	keys,
	defaultKey
}: {
	keys: readonly T[]
	defaultKey: T
}) {
	const [searchParams, setSearchParams] = useSearchParams()
	const currentParam = searchParams.get(SPR.tab.key) as T
	const selectedTabKey =
		currentParam === defaultKey || !keys.includes(currentParam)
			? defaultKey
			: currentParam

	const onChangeTab = useCallback(
		(tabKey: string | null) => {
			const _tabKey = tabKey as T
			if (_tabKey !== defaultKey) {
				setSearchParams((prev) => {
					prev.set(SPR.tab.key, tabKey ?? "")
					return prev
				})
			} else {
				setSearchParams((prev) => {
					prev.delete(SPR.tab.key)
					return prev
				})
			}
		},
		[defaultKey, setSearchParams]
	)

	return [selectedTabKey, onChangeTab] as const
}
