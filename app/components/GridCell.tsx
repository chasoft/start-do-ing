import { motion } from "framer-motion";
import { AboutGridCell } from "~/routes/about/grid-cell";
import { EMPTY_ID } from "~/constants";
import { HomeGridCell } from "~/routes/_index/grid-cell";
import { LayoutId } from "~/utils";
import { MagicWheelGridCell } from "~/routes/magic-wheel/grid-cell";
import { PasswordGeneratorGridCell } from "~/routes/random.password-generator/grid-cell";
import { RandomGridCell } from "~/routes/random._index/grid-cell";
import { CountDownGridCell } from "~/routes/count-down/grid-cell";


export function GridCell({ className, display, bgColor, layoutId }: { className?: string, display?: string, bgColor: string, layoutId?: LayoutId }) {
	const cn = `${className ?? ""} ${layoutId !== EMPTY_ID ? "cursor-pointer" : ""} transition-all`
	switch (layoutId) {
		case "home":
			return <HomeGridCell className={cn} display={display} bgColor={bgColor} layoutId={layoutId} />
		case "about":
			return <AboutGridCell className={cn} display={display} bgColor={bgColor} layoutId={layoutId} />
		case "random":
			return <RandomGridCell className={cn} display={display} bgColor={bgColor} layoutId={layoutId} />
		case "password-generator":
			return <PasswordGeneratorGridCell className={cn} display={display} bgColor={bgColor} layoutId={layoutId} />
		case "count-down":
			return <CountDownGridCell className={cn} display={display} bgColor={bgColor} layoutId={layoutId} />
		case "magic-wheel":
			return <MagicWheelGridCell className={cn} display={display} bgColor={bgColor} layoutId={layoutId} />
		default:
			return (
				<div className={`h-full ${display}`}>
					<motion.div className={`${cn} ${bgColor} h-full p-2`} layoutId={layoutId}>
						<p>Others layoutId: {layoutId}</p>
					</motion.div>
				</div>
			);
	}
}