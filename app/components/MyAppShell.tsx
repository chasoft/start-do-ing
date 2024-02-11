/* FRAMEWORK */
import { Link, useLocation } from "@remix-run/react"

/* THIRD-PARTY PACKAGES */
import { AppShell, Burger, Group, Image, ScrollArea, Text } from "@mantine/core"
import { useAtomValue } from "jotai"
import { useDisclosure } from "@mantine/hooks"

/* COMPONENTS & UTILS */
import { FullScreenButton, SharingButton } from "."
import { MobileMenu } from "./MobileMenu"
import { useIsFullscreen, useIsMobileWindowSize, useIsShowMobileButtons } from "~/utils"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { urlSharingDataAtom } from "~/atoms/globals"
import Logo from "~/assets/startdoing-logo.svg"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function MyAppShell({ children }: { children: React.ReactNode }) {
	const [opened, { toggle, close }] = useDisclosure()
	const isFullScreen = useIsFullscreen()
	const isMobileWindowSize = useIsMobileWindowSize()
	const isShowMobileButtons = useIsShowMobileButtons()
	const urlSharingData = useAtomValue(urlSharingDataAtom)

	/**
	 * We use completely different layout for blog
	 */
	const { pathname } = useLocation()
	const isBlog = pathname.startsWith("/blog")
	if (isBlog) {
		return children
	}

	return (
		<AppShell
			header={{ height: 60 }}
			navbar={{ width: 300, breakpoint: "md", collapsed: { mobile: !opened } }}
			disabled={isFullScreen || !isMobileWindowSize}
		>
			<AppShell.Header>
				<Group h="100%" px="md">
					<Burger opened={opened} onClick={toggle} hiddenFrom="md" size="sm" />
					<Link to={"/"} className="flex gap-2">
						<Image src={Logo} className="w-7 h-7" />
						<Text fw={700}>Startdo.ing</Text>
					</Link>
					{isShowMobileButtons && (
						<div className="flex gap-1 ml-auto">
							{urlSharingData.url !== "" && <SharingButton data={urlSharingData} />}
							<FullScreenButton />
						</div>
					)}
				</Group>
			</AppShell.Header>
			<AppShell.Navbar>
				<AppShell.Section grow component={ScrollArea}>
					<MobileMenu onClick={close} />
				</AppShell.Section>
				<AppShell.Section className="flex justify-between p-3" hiddenFrom="md">
					<Text size="xs">hi@startdo.ing</Text>
					<Text size="xs">Make with 💖 by Brian Cao</Text>
				</AppShell.Section>
			</AppShell.Navbar>
			<AppShell.Main>{children}</AppShell.Main>
		</AppShell>
	)
}
