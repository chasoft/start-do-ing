import { motion } from "framer-motion";

export function MagicWheelFeature({ className, layoutId }: { className?: string, layoutId: string }) {
	return (
		<motion.div className={className} layoutId={layoutId}>
			<h1>Magic Wheel Feature</h1>
		</motion.div>
	)
}