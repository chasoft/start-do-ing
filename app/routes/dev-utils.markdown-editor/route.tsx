/* FRAMEWORK */
import { Link } from "@remix-run/react"
import { type MetaFunction } from "@remix-run/cloudflare"

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { ErrorBoundaryBase } from "~/components/ErrorBoundaryBase"
import { getBlockMetaData } from "~/utils"
import { DevUtilsMarkdownEditorContent } from "./content"
import type { CustomRouteHandle } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { DEV_UTILS_BLOCKS } from "~/data"
import { DEV_UTILS_MARKDOWN_EDITOR } from "./metadata"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

const layoutId = "dev-utils-markdown-editor"

export const meta: MetaFunction = () => {
	const { title, description } = getBlockMetaData(DEV_UTILS_BLOCKS, layoutId)
	return [{ title }, { name: "description", content: description }]
}

export const handle: CustomRouteHandle = {
	layoutId,
	breadcrumb: () => (
		<Link to={DEV_UTILS_MARKDOWN_EDITOR.to}>{DEV_UTILS_MARKDOWN_EDITOR.title}</Link>
	)
}

export default function DevUtilsMarkdownEditorRoute() {
	return <DevUtilsMarkdownEditorContent />
}

export const ErrorBoundary = ErrorBoundaryBase(layoutId)
