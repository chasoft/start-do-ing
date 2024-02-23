/* FRAMEWORK */
import { Outlet } from "@remix-run/react"

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { StoreHeader } from "./components/StoreHeader"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

//TODO: Store section is just dummy layout
export default function StoreGroupRoute() {
	return (
		<>
			<StoreHeader />
			<div>
				<Outlet />
			</div>
		</>
	)
}
