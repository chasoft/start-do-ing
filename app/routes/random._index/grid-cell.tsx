import { Link } from "@remix-run/react";
import { LayoutId } from "~/utils/types";

export function RandomGridCell({ className, display }: { className?: string, display?: string, bgColor: string, layoutId?: LayoutId }) {
	return (
		<div className={`${className ?? ""} ${display ?? ""}`}>
			<Link to={`/random`}>
				Random
			</Link>
		</div>
	)
}