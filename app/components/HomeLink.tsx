/* FRAMEWORK */
import { Link } from "@remix-run/react"

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { HOME } from "~/routes/_index/metadata"
import { IconHome } from "@tabler/icons-react"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/
export function HomeLink() {
	return (
		<Link to={HOME.to}>
			<IconHome className="w-6 h-6 transition-all hover:scale-125 active:text-blue-900 active:scale-110" />
		</Link>
	)
}
