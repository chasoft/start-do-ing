/* FRAMEWORK */
import { Link } from "@remix-run/react";

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import IconHome from "./icons/IconHome";

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
		<Link to={HOME.to} className="absolute p-2 top-0 left-0">
			<IconHome className="w-6 h-6 lg:w-8 lg:h-8  hover:scale-125 active:text-blue-900 active:scale-110 transition-all" />
		</Link>
	)
}