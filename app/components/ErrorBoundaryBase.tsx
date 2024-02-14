/* FRAMEWORK */
import { isRouteErrorResponse, useRouteError } from "@remix-run/react"

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

function ErrorBox({ children }: { children: React.ReactNode }) {
	return <div>{children}</div>
}

export function ErrorBoundaryBase(location: string) {
	return function ErrorBoundary() {
		const error = useRouteError()

		if (isRouteErrorResponse(error)) {
			return (
				<ErrorBox>
					<h1>
						{`[${location}] `}
						{error.status} {error.statusText}
					</h1>
					<p>{error.data}</p>
				</ErrorBox>
			)
		} else if (error instanceof Error) {
			return (
				<ErrorBox>
					<h1>{`[${location}] `}Error</h1>
					<p>{error.message}</p>
					<p>The stack trace is:</p>
					<pre>{error.stack}</pre>
				</ErrorBox>
			)
		} else {
			return (
				<ErrorBox>
					<h1>{`[${location}] `}Unknown Error</h1>
				</ErrorBox>
			)
		}
	}
}
