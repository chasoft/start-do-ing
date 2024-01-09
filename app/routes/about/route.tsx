import { ErrorBoundaryBase } from "~/components/ErrorBoundaryBase";

export default function AboutRoute() {
	return (
		<>
			<div>
				About
			</div>
		</>
	)
}

export const ErrorBoundary = ErrorBoundaryBase("About")
