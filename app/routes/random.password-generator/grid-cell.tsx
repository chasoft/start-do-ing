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
		<motion.div className={clsx("h-full", PASSWORD_GENERATOR.color.bg, className)} layoutId={PASSWORD_GENERATOR.id}>
			<Link to={PASSWORD_GENERATOR.to} className="block h-full">
				<div className="p-2">
					Password Generator Block
					<p>layoutId: {PASSWORD_GENERATOR.id}</p>
				</div>
			</Link>
		</motion.div>
	)
}