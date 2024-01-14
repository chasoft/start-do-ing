import { Link } from "@remix-run/react";
import { motion } from "framer-motion";
import { TLayoutId } from "~/data/constants";

export function HomeBlock({ className, display, bgColor, layoutId }: { className?: string, display?: string, bgColor: string, layoutId?: TLayoutId }) {
	return (
		<div className={`${className ?? ""} ${display ?? ""}`}>
			<motion.div initial={false} className={`h-full ${bgColor}`} layoutId={layoutId}>
				<Link to="/" className="block h-full">
					<div className="p-2">
						Home Block<p>layoutId: {layoutId}</p>
					</div>
				</Link>
			</motion.div>
		</div>
	)
}