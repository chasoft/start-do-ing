/* FRAMEWORK */
import { Link } from "@remix-run/react"
import { type MetaFunction } from "@remix-run/cloudflare"

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { ErrorBoundaryBase } from "~/components/ErrorBoundaryBase"
import { getBlockMetaData } from "~/utils"
import { LanguagesChineseCharactersContent } from "./content"
import type { CustomRouteHandle } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { LANGUAGES_BLOCKS } from "~/data"
import { LANGUAGES_CHINESE_CHARACTERS } from "./metadata"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

const layoutId = "chinese-characters"

export const meta: MetaFunction = () => {
	const { title, description } = getBlockMetaData(LANGUAGES_BLOCKS, layoutId)
	return [{ title }, { name: "description", content: description }]
}

export const handle: CustomRouteHandle = {
	layoutId,
	breadcrumb: () => (
		<Link to={LANGUAGES_CHINESE_CHARACTERS.to}>{LANGUAGES_CHINESE_CHARACTERS.title}</Link>
	)
}

export default function LanguagesChineseCharactersRoute() {
	return <LanguagesChineseCharactersContent />
}

export const ErrorBoundary = ErrorBoundaryBase(layoutId)
