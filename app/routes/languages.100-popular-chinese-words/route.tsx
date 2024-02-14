/* FRAMEWORK */
import { Link } from "@remix-run/react"
import { type MetaFunction } from "@remix-run/cloudflare"

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { ErrorBoundaryBase } from "~/components/ErrorBoundaryBase"
import { getBlockMetaData } from "~/utils"
import { Languages100PopularChineseWordsContent } from "./content"
import type { CustomRouteHandle } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { LANGUAGES_100_POPULAR_CHINESE_WORDS } from "./metadata"
import { LANGUAGES_BLOCKS } from "~/data"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

const layoutId = "100-popular-chinese-words"

export const meta: MetaFunction = () => {
	const { title, description } = getBlockMetaData(LANGUAGES_BLOCKS, layoutId)
	return [{ title }, { name: "description", content: description }]
}

export const handle: CustomRouteHandle = {
	layoutId,
	breadcrumb: () => (
		<Link to={LANGUAGES_100_POPULAR_CHINESE_WORDS.to}>
			{LANGUAGES_100_POPULAR_CHINESE_WORDS.title}
		</Link>
	)
}

export default function Languages100PopularChineseWordsRoute() {
	return <Languages100PopularChineseWordsContent layoutId={layoutId} />
}

export const ErrorBoundary = ErrorBoundaryBase(layoutId)
