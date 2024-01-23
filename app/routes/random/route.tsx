/* FRAMEWORK */
import { Outlet } from "@remix-run/react";

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */

/* TRANSLATIONS IMPORT */

/* DATA IMPORT */

/***************************************************************************
 * 
 *  START
 * 
 **************************************************************************/

// export const handle: CustomRouteHandle = {
// 	breadcrumb: () => <Link to={RANDOM.to}>{RANDOM.title}</Link>,
// };

export default function RandomLayoutRoute() {
	// const matches = useMatches();
	// const breadcrumbs = matches.reduce((acc, curr) => {
	// 	if (!curr.handle) return acc
	// 	const handle = curr.handle as CustomRouteHandle
	// 	return handle.breadcrumb
	// 		? [...acc, handle.breadcrumb()]
	// 		: acc
	// }, [] as CustomRouteHandle[])

	return (
		<>
			<div className="h-full bg-blue-200 bg-opacity-50 rounded-lg">
				{/* <header>
					<ol>
						{breadcrumbs.map((match, index) => (
							<li key={index}>
								{match.handle.breadcrumb}
							</li>
						))}
					</ol>
				</header> */}
				<Outlet />
			</div>
		</>
	)
}
