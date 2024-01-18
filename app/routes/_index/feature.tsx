import { motion } from "framer-motion";

export function HomeFeature({ className, layoutId }: { className?: string, layoutId: string }) {
	return (
		<motion.div className={className} layoutId={layoutId}>
			<h1>Home Feature</h1>
		</motion.div>
	)
}