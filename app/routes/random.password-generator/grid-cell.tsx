/* FRAMEWORK */
import { Link } from "@remix-run/react";

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion";
import clsx from "clsx";

/* COMPONENTS & UTILS */

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */
import { PASSWORD_GENERATOR } from "./metadata";

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

export function PasswordGeneratorGridCell({ className }: { className?: string }) {
	return (
		<motion.div className={clsx("h-full", className)} layoutId={PASSWORD_GENERATOR.id}>
			<Link to={PASSWORD_GENERATOR.to} className="relative block h-full transition-colors bg-pink-100 rounded-lg hover:bg-pink-200 hover:outline-pink-300 outline-pink-200 outline-2 hover:outline-2 outline">
				<div className="p-2">
					Password Generator Block
					<p>layoutId: {PASSWORD_GENERATOR.id}</p>
				</div>
			</Link>
		</motion.div>
	)
}