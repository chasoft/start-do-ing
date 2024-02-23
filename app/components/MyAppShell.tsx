/* FRAMEWORK */
import { Link, useLocation } from "@remix-run/react"

/* THIRD-PARTY PACKAGES */
import { AppShell, Burger, Group, Image, ScrollArea, Text } from "@mantine/core"
import { useAtomValue } from "jotai"
import { useDisclosure } from "@mantine/hooks"
import sample from "lodash/sample"

/* COMPONENTS & UTILS */
import { FullScreenButton, SharingButton } from "."
import { MobileMenu } from "./MobileMenu"
import { useIsFullscreen, useIsMobileWindowSize } from "~/utils"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { FW, SITE } from "~/data"
import { URLS } from "~/data/urls"
import { urlSharingDataAtom } from "~/atoms/globals"
import Logo from "~/assets/logo-startdoing.svg"
import React, { useLayoutEffect } from "react"
import { BACKGROUNDS } from "~/data/background"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

const HEADER_HEIGHT = 60
const NAVBAR_WIDTH = 300

/**
 * This block creates overly effect for menu items in the bottom
 * when scrolling down.
 */
function OverlayMobileMenu() {
	return (
		<div className="pointer-events-none sticky bottom-0 flex h-40 bg-base-100 [mask-image:linear-gradient(transparent,#000000)]"></div>
	)
}

export function MyAppShell({ children }: { children: React.ReactNode }) {
	const [backgroundImage, setBackgroundImage] = React.useState<string>("")
	const [opened, { toggle, close }] = useDisclosure()
	const isFullScreen = useIsFullscreen()
	const isMobileWindowSize = useIsMobileWindowSize()
	const urlSharingData = useAtomValue(urlSharingDataAtom)

	useLayoutEffect(function randomBackgroundImage() {
		setBackgroundImage(sample(BACKGROUNDS) ?? BACKGROUNDS[0])
	}, [])

	/**
	 * We use completely different layout for blog 😉
	 */
	const { pathname } = useLocation()
	const isBlog = pathname.startsWith(URLS.blog.to)
	if (isBlog) {
		return children
	}

	return (
		<AppShell
			header={{ height: HEADER_HEIGHT }}
			navbar={{ width: NAVBAR_WIDTH, breakpoint: "lg", collapsed: { mobile: !opened } }}
			disabled={isFullScreen || !isMobileWindowSize}
			// className="bg-cover bg-left-block-1"
			style={{
				backgroundImage: `url('${backgroundImage}')`,
				backgroundPosition: "center"
			}}
		>
			<AppShell.Header>
				<Group h="100%" px="md">
					<Burger opened={opened} onClick={toggle} hiddenFrom="lg" size="sm" />
					<Link to={URLS.home.to} className="flex gap-2" onClick={close}>
						<Image src={Logo} className="h-7 w-7" />
						<Text fw={FW.EXTRA_BOLD}>{SITE.title}</Text>
					</Link>
					<div className="ml-auto flex gap-1 lg:hidden">
						{urlSharingData.url !== "" && <SharingButton data={urlSharingData} />}
						<FullScreenButton />
					</div>
				</Group>
			</AppShell.Header>
			<AppShell.Navbar>
				<AppShell.Section grow component={ScrollArea}>
					<MobileMenu onClick={close} />
					<OverlayMobileMenu />
				</AppShell.Section>
				<AppShell.Section className="flex justify-between p-3" hiddenFrom="md">
					<Text size="xs">{SITE.email}</Text>
					<Link to={URLS.support.to}>
						<Text size="xs" onClick={close}>
							{SITE.makeWithLove}
						</Text>
					</Link>
				</AppShell.Section>
			</AppShell.Navbar>
			<AppShell.Main>{children}</AppShell.Main>
		</AppShell>
	)
}
