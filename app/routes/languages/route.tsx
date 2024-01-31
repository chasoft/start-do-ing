/* FRAMEWORK */
import { Outlet } from "@remix-run/react";

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { NavigationGrid } from "~/components";
import { LanguagesGridCells } from "./LanguagesGridCells";
import { useIsFullscreen } from "~/utils";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */
import { LANGUAGES_BLOCKS } from "~/data";

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

export default function LanguagesGroupRoute() {
	const [isFullScreen] = useIsFullscreen()

	if (isFullScreen) {
		return <Outlet />
	}

	return (
		<NavigationGrid blocks={LANGUAGES_BLOCKS} GridCell={LanguagesGridCells}>
			<div className="h-full bg-blue-200 bg-opacity-50 rounded-lg">
				<Outlet />
			</div>
		</NavigationGrid>
	)
}
