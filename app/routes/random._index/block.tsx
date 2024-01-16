import { Link } from "@remix-run/react";
import { motion } from "framer-motion";
import { LayoutId } from "~/utils/types";

export function RandomBlock({ className, display, bgColor, layoutId }: { className?: string, display?: string, bgColor: string, layoutId?: LayoutId }) {
	return (
		<div className={`${className ?? ""} ${display ?? ""}`}>
			<motion.div className={`h-full ${bgColor}`} layoutId={layoutId}>
				<Link to="/random" className="block h-full">
					<div className="p-2">
						Random Block<p>layoutId: {layoutId}</p>
					</div>
				</Link>
			</motion.div>
		</div>
	)
}