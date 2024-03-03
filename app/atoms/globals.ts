/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { atom } from "jotai"

/* COMPONENTS & UTILS */
import { MarkdownString, UrlSharingData } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { EMPTY_LAYOUT_ID } from "~/data"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export const urlSharingDataAtom = atom<UrlSharingData>({
	layoutId: EMPTY_LAYOUT_ID,
	image: "",
	title: "",
	description: "",
	url: ""
})

export const helpContentsAtom = atom<MarkdownString>("")
