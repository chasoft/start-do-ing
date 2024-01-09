import { ErrorBoundaryBase } from "~/components/ErrorBoundaryBase";

export async function loader() {
	return "RandomPasswordRoute"
}

export default function RandomPasswordRoute() {
	return (
		<>
			<div>
				Password Generator
			</div>
		</>
	)
}

export const ErrorBoundary = ErrorBoundaryBase("Password Generator")
