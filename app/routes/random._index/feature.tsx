import { motion } from "framer-motion";

export function RandomIndexFeature({ className, layoutId }: { className?: string, layoutId: string }) {
	return (
		<motion.div className={className} layoutId={layoutId}>
			<h1>Random Feature Index Feature</h1>
		</motion.div>
	)
}