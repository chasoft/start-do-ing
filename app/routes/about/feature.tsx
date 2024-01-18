import { motion } from "framer-motion";

export function AboutFeature({ className, layoutId }: { className?: string, layoutId: string }) {
	return (
		<motion.div className={className} layoutId={layoutId}>
			<h1 className="text-5xl">About Feature</h1>
		</motion.div>
	)
}