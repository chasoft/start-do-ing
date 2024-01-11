import { Link, Outlet } from "@remix-run/react";
import { ErrorBoundaryBase } from "~/components/ErrorBoundaryBase";

export default function RandomLayoutRoute() {
	return (
		<>
			<div className="bg-blue-200 h-full">
				<h1>RandomLayout</h1>
				<ul className="flex gap-2">
					<li>
						<Link to="/random">Random</Link>
					</li>
					<li>
						<Link to="/random/password-generator">Password</Link>
					</li>
				</ul>
				<Outlet />
			</div>
		</>
	)
}

export const ErrorBoundary = ErrorBoundaryBase("RANDOM")
