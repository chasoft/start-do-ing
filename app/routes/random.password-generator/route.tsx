import { ErrorBoundaryBase } from "~/components/ErrorBoundaryBase";
import { CustomRouteHandle } from "~/utils/types";

export const handle: CustomRouteHandle = {
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
