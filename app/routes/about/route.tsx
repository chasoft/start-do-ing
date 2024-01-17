import { ErrorBoundaryBase } from "~/components/ErrorBoundaryBase";
import { CustomRouteHandle } from "~/utils/types";

export const handle: CustomRouteHandle = {
	layoutId: "about"
};

export default function AboutRoute() {
	return (
		<>
			About
		</>
	)
}

export const ErrorBoundary = ErrorBoundaryBase("About")
