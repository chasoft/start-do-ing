/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion";
import clsx from "clsx";

/* COMPONENTS & UTILS */

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */
import { HOME } from "./metadata";
import homeIcon from "~/assets/svg/home.svg"
import { GridCellLink } from "~/components";

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

export function HomeGridCell({ className }: { className?: string }) {
	return (
		<motion.div className={clsx("h-full", className)} layoutId={HOME.id}>
			<GridCellLink to={HOME.to}>
				<div className="grid h-full p-2 place-content-center">
					<h2 className="text-lg font-semibold sm:text-2xl line-clamp-1">Home</h2>
					<span className="line-clamp-2">Site introduction</span>
				</div>
				<img src={homeIcon} alt="home" className="absolute w-6 h-6 bottom-2 right-2 sm:bottom-3 sm:right-3" />
			</GridCellLink>
		</motion.div>
	)
}