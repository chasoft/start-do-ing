/* FRAMEWORK */
import { Outlet } from "@remix-run/react"

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { BlogHeader } from "./components/BlogHeader"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

//TODO: Blog section is just dummy layout
export default function BlogGroupRoute() {
	return (
		<>
			<BlogHeader />
			<div>
				<Outlet />
			</div>
		</>
	)
}
