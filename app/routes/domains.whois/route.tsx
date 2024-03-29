/* FRAMEWORK */
import { Link } from "@remix-run/react"
import { type MetaFunction } from "@remix-run/cloudflare"

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { ErrorBoundaryBase } from "~/components/ErrorBoundaryBase"
import { getBlockMetaData } from "~/utils"
import { DomainsWhoisContent } from "./content"
import type { CustomRouteHandle } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { DOMAINS_BLOCKS } from "~/data"
import { DOMAINS_WHOIS } from "./metadata"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

const layoutId = "domains-whois"

export const meta: MetaFunction = () => {
	const { title, description } = getBlockMetaData(DOMAINS_BLOCKS, layoutId)
	return [{ title }, { name: "description", content: description }]
}

export const handle: CustomRouteHandle = {
	layoutId,
	breadcrumb: () => <Link to={DOMAINS_WHOIS.to}>{DOMAINS_WHOIS.title}</Link>
}

export default function DomainsWhoisRoute() {
	return <DomainsWhoisContent />
}

export const ErrorBoundary = ErrorBoundaryBase(layoutId)
