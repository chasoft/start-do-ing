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
import "@mantine/core/styles/global.css"
import "@mantine/core/styles/UnstyledButton.css"
import "@mantine/core/styles/VisuallyHidden.css"
import "@mantine/core/styles/Paper.css"
import "@mantine/core/styles/CloseButton.css"
import "@mantine/core/styles/Loader.css"
import "@mantine/core/styles/ModalBase.css"
import "@mantine/core/styles/Flex.css"
import "@mantine/core/styles/Container.css"
import "@mantine/core/styles/Group.css"
import "@mantine/core/styles/AppShell.css"
import "@mantine/core/styles/Burger.css"
import "@mantine/core/styles/ScrollArea.css"
import "@mantine/core/styles/Tabs.css"
import "@mantine/core/styles/Overlay.css"
import "@mantine/core/styles/Tooltip.css"
import "@mantine/core/styles/Timeline.css"
import "@mantine/core/styles/Input.css"
import "@mantine/core/styles/Drawer.css"
import "@mantine/core/styles/Dialog.css"
import "@mantine/core/styles/Modal.css"
import "@mantine/core/styles/Popover.css"
import "@mantine/core/styles/Card.css"
import "@mantine/core/styles/NumberInput.css"
import "@mantine/core/styles/Slider.css"
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
	{ rel: "stylesheet", href: stylesheet },
	{ rel: "icon", href: "/icon.ico", sizes: "32x32" },
	{ rel: "icon", href: "/icon.svg", type: "image/svg+xml" }
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
