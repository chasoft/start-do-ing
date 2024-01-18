import { Link, Outlet } from "@remix-run/react";

export default function RandomLayoutRoute() {
	return (
		<>
			<div className="bg-blue-200 h-full grid place-content-center">
				<h1>RandomLayout</h1>
				<ul className="flex gap-2">
					<li>
						<Link to="/random">Random</Link>
					</li>
				</ul>
				<Outlet />
			</div>
		</>
	)
}