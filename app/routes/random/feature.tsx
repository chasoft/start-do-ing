import { motion } from "framer-motion";

export function RandomLayoutFeature({ className, layoutId }: { className?: string, layoutId: string }) {
	return (
		<motion.div className={`${className} bg-red-500`} layoutId={layoutId}>
			<h1>Random Feature</h1>
		</motion.div>
	)
}