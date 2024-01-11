import { Link } from "@remix-run/react";
import { motion } from "framer-motion";
import { TLayoutId } from "~/data/constants";

export function HomeBlock({ className, bgColor, layoutId }: { className?: string, bgColor: string, layoutId?: TLayoutId }) {
	return (
		<div className={`${className ?? ""}`}>
			<motion.div className={`h-full ${bgColor}`} layoutId={layoutId}>
				<Link to="/" className="block h-full">
					<div className="p-2">
						Home Block<p>layoutId: {layoutId}</p>
					</div>
				</Link>
			</motion.div>
		</div>
	)
}