import { Link } from "@remix-run/react";
import { motion } from "framer-motion";
import { TLayoutId } from "~/data/constants";

export function PasswordGeneratorBlock({ className, bgColor, layoutId }: { className?: string, bgColor: string, layoutId?: TLayoutId }) {
	return (
		<div className={`${className ?? ""}`}>
			<motion.div className={`h-full ${bgColor}`} layoutId={layoutId}>
				<Link to="/random/password-generator" className="block h-full">
					<div className="p-2">
						Password Generator Block
						<p>layoutId: {layoutId}</p>
					</div>
				</Link>
			</motion.div>
		</div>
	)
}