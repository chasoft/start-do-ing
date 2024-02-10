/* FRAMEWORK */
import { Link } from "@remix-run/react"

/* THIRD-PARTY PACKAGES */
import clsx from "clsx"

/* COMPONENTS & UTILS */
import { IconSettingsOutline } from "~/components/icons"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { DASHBOARD_SETTINGS } from "../dashboard.settings._index/metadata"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function DashboardLink({ className }: { className?: string }) {
	return (
		<Link to={DASHBOARD_SETTINGS.to}>
			<IconSettingsOutline className={clsx(className)} />
		</Link>
	)
}
