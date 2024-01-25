/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { motion } from "framer-motion"

/* COMPONENTS & UTILS */
import { HomeFeature } from "~/routes/_index/content"
import { AboutFeature } from "~/routes/about/content"
import { CountDownFeature } from "~/routes/count-down/feature"
import { MagicWheelFeature } from "~/routes/magic-wheel/content"
import { RandomIndexContent } from "~/routes/random._index/content"
import { PasswordGeneratorContent } from "~/routes/random.password-generator/content"
import type { PageId } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */
import { BLOCK_NOT_FOUND } from "~/constants"

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

export function Features({ className, layoutId }: { className?: string, layoutId?: PageId }) {
	const cn = `${className ?? ""} ${layoutId !== BLOCK_NOT_FOUND ? "cursor-pointer" : ""} transition-all`
	switch (layoutId) {
		case "home":
			return <HomeFeature className={cn} layoutId={layoutId} />
		case "about":
			return <AboutFeature className={cn} layoutId={layoutId} />
		case "random":
			return <RandomIndexContent className={cn} layoutId={layoutId} />
		case "password-generator":
			return <PasswordGeneratorContent className={cn} layoutId={layoutId} />
		case "count-down":
			return <CountDownFeature className={cn} layoutId={layoutId} />
		case "magic-wheel":
			return <MagicWheelFeature className={cn} layoutId={layoutId} />
		default:
			return (
				<div className={`h-full`}>
					<motion.div className={`${cn} h-full p-2`} layoutId={layoutId}>
						<p>{`I don't know why you can reach here`}: {layoutId}</p>
					</motion.div>
				</div>
			);
	}
}