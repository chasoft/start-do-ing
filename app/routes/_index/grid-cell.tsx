/* FRAMEWORK */
import { Link } from "@remix-run/react";

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion";
import clsx from "clsx";

/* COMPONENTS & UTILS */

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */
import { HOME } from "./metadata";
import homeIcon from "~/assets/svg/home.svg"

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

export function HomeGridCell({ className }: { className?: string }) {
	return (
		<motion.div className={clsx("h-full", className)} layoutId={HOME.id}>
			<Link to="/" className="relative block h-full transition-colors bg-pink-100 rounded-lg hover:bg-pink-200 hover:outline-pink-300 outline-pink-200 outline-2 hover:outline-2 outline">
				<div className="p-2">
					Home Block<p>layoutId: {HOME.id}</p>
				</div>
				<img src={homeIcon} alt="home" className="absolute w-6 h-6 bottom-2 right-2" />
			</Link>
		</motion.div>
	)
}