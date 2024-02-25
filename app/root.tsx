/* FRAMEWORK */
import React from "react"
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	useNavigation
} from "@remix-run/react"
import { cssBundleHref } from "@remix-run/css-bundle"
import type { LinksFunction } from "@remix-run/cloudflare"

/* THIRD-PARTY PACKAGES */
import { Provider as JotaiProvider } from "jotai"
import { ColorSchemeScript, MantineProvider } from "@mantine/core"
import { Notifications } from "@mantine/notifications"
import { nprogress, NavigationProgress } from "@mantine/nprogress"

/* STYLING */
import "@mantine/carousel/styles.css"
import "@mantine/core/styles.css"
import "@mantine/core/styles/Text.css"
import "@mantine/notifications/styles.css"
import "@mantine/nprogress/styles.css"
import stylesheet from "~/tailwind.css"

/* COMPONENTS */
import { MyAppShell } from "./components/MyAppShell"

/* UTILS */
import { theme } from "./utils"

/* TRANSLATIONS */

/* DATA */

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

interface DocumentProps {
	children: React.ReactNode
}

export const links: LinksFunction = () => [
	...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
	{ rel: "stylesheet", href: stylesheet }
]

function Document({ children }: DocumentProps) {
	const transition = useNavigation()

	React.useEffect(() => {
		// when the state is idle then we can to complete the progress bar
		if (transition.state === "idle") nprogress.complete()
		// and when it's something else it means it's either submitting a form or
		// waiting for the loaders of the next location so we start it
		else nprogress.start()
	}, [transition.state])

	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="theme-color" media="(prefers-color-scheme: light)" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
				<ColorSchemeScript />
			</head>
			<body>
				<MantineProvider theme={theme}>
					<NavigationProgress />
					<Notifications />
					<JotaiProvider>
						<MyAppShell>{children}</MyAppShell>
					</JotaiProvider>
					<ScrollRestoration />
					<Scripts />
					<LiveReload />
				</MantineProvider>
			</body>
		</html>
	)
}

export default function App() {
	return (
		<Document>
			<Outlet />
		</Document>
	)
}
