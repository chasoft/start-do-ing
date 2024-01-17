import { Link } from "@remix-run/react";
import { motion } from "framer-motion";
import { LayoutId } from "~/utils/types";

export function MagicWheelBlock({ className, display, bgColor, layoutId }: { className?: string, display?: string, bgColor: string, layoutId?: LayoutId }) {
	return (
		<div className={`${className ?? ""} ${display ?? ""}`}>
			<motion.div className={`h-full ${bgColor}`} layoutId={layoutId}>
				<Link to="/magic-wheel" className="block h-full">
					<div className="p-2">
						Magic Wheel Block<p>layoutId: {layoutId}</p>
					</div>
				</Link>
			</motion.div>
		</div>
	)
}