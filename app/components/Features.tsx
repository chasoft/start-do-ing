import { motion } from "framer-motion"
import { EMPTY_ID } from "~/constants"
import { HomeFeature } from "~/routes/_index/feature"
import { AboutFeature } from "~/routes/about/feature"
import { CountDownFeature } from "~/routes/count-down/feature"
import { MagicWheelFeature } from "~/routes/magic-wheel/feature"
import { RandomHomeFeature } from "~/routes/random._index/feature"
import { PasswordGeneratorFeature } from "~/routes/random.password-generator/feature"
import { LayoutId } from "~/utils/types"

export function Features({ className, layoutId }: { className?: string, layoutId?: LayoutId }) {
	const cn = `${className ?? ""} ${layoutId !== EMPTY_ID ? "cursor-pointer" : ""} transition-all`
	switch (layoutId) {
		case "home":
			return <HomeFeature className={cn} layoutId={layoutId} />
		case "about":
			return <AboutFeature className={cn} layoutId={layoutId} />
		case "random":
			return <RandomHomeFeature className={cn} layoutId={layoutId} />
		case "password-generator":
			return <PasswordGeneratorFeature className={cn} layoutId={layoutId} />
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