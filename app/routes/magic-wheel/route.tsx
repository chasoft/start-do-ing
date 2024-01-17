import { ErrorBoundaryBase } from "~/components/ErrorBoundaryBase";
import { CustomRouteHandle } from "~/utils/types";

export const handle: CustomRouteHandle = {
	layoutId: "magic-wheel"
};

export default function MagicWheelLayoutRoute() {
	return (
		<>
			<div className="bg-blue-200 h-full">
				<h1>MagicWheel Layout</h1>
			</div>
		</>
	)
}

export const ErrorBoundary = ErrorBoundaryBase("MAGIC-WHEEL")
