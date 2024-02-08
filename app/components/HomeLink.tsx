/* FRAMEWORK */
import { Link } from "@remix-run/react";

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { IconHome } from "./icons";

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */
import { HOME } from "~/routes/_index/metadata";

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/
export function HomeLink() {
	return (
		<Link to={HOME.to} className="absolute top-0 right-0 p-2">
			<IconHome className="w-6 h-6 transition-all hover:scale-125 active:text-blue-900 active:scale-110" />
		</Link>
	)
}