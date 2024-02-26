/* FRAMEWORK */
import { Link, useLocation } from "@remix-run/react"

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion"

/* COMPONENTS & UTILS */

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { HOME } from "~/routes/_index/metadata"
import { IconHome } from "@tabler/icons-react"
import { URLS } from "~/data/urls"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/
export function HomeLink() {
	const { pathname } = useLocation()
	const isHome = pathname === URLS.home.to

	return (
		<motion.div layoutId="homeLink">
			{!isHome && (
				<Link to={HOME.to}>
					<IconHome className="h-6 w-6 transition-all hover:scale-125 active:scale-110 active:text-blue-900" />
				</Link>
			)}
		</motion.div>
	)
}
