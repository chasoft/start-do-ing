import { motion } from "framer-motion";

export function CountDownFeature({ className, layoutId }: { className?: string, layoutId: string }) {
	return (
		<motion.div className={className} layoutId={layoutId}>
			<h1>Count Down Feature</h1>
		</motion.div>
	)
}