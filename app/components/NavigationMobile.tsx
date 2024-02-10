/* FRAMEWORK */
import React from "react"

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion"

/* COMPONENTS & UTILS */

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function NavigationMobile({ children }: { children: React.ReactNode }) {
	return <motion.div className="p-2">{children}</motion.div>
}
