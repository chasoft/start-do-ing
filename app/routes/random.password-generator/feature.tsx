import { motion } from "framer-motion";

export function PasswordGeneratorFeature({ className, layoutId }: { className?: string, layoutId: string }) {
	return (
		<motion.div className={className} layoutId={layoutId}>
			<h1>Password Generator Feature</h1>
		</motion.div>
	)
}