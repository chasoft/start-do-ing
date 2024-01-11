import { ErrorBoundaryBase } from "~/components/ErrorBoundaryBase";
import { TRouteHandle } from "~/data/constants"

export const handle: TRouteHandle = {
	layoutId: "password-generator"
};

export default function RandomPasswordRoute() {
	return (
		<>
			Password Generator
		</>
	)
}

export const ErrorBoundary = ErrorBoundaryBase("Password Generator")
