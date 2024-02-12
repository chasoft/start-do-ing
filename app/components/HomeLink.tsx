/* FRAMEWORK */
import { Link, useLocation } from "@remix-run/react"

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion"

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
	const { pathname } = useLocation()
	const isHome = pathname === "/"

	return (
		<motion.div layoutId="homeLink">
			{isHome ? (
				<IconHome className="w-24 h-24 text-pink-50" />
			) : (
				<Link to={HOME.to}>
					<IconHome className="w-6 h-6 transition-all hover:scale-125 active:text-blue-900 active:scale-110" />
				</Link>
			)}
		</motion.div>
	)
}
