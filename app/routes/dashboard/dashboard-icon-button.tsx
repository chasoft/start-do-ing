
/* FRAMEWORK */
import { Link } from "@remix-run/react";

/* THIRD-PARTY PACKAGES */
import clsx from "clsx";

/* COMPONENTS & UTILS */
import { IconSettingsOutline } from "~/components/icons";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */
import { SETTINGS } from "../dashboard.settings._index/metadata";

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

export function DashboardIconButton({ className }: { className?: string }) {
	return (
		<Link to={SETTINGS.to}>
			<IconSettingsOutline className={clsx(className)} />
		</Link>
	)
}