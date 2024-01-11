import { ErrorBoundaryBase } from "~/components/ErrorBoundaryBase";
import { TRouteHandle } from "~/data/constants";

export const handle: TRouteHandle = {
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
