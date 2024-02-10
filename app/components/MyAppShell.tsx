import { AppShell, Burger, Group, Image, ScrollArea, Text } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { Link } from "@remix-run/react"
import Logo from "~/assets/startdoing-logo.svg"
import { useIsFullscreen, useIsMobileWindowSize, useIsShowMobileButtons } from "~/utils"
import { MobileMenu } from "./MobileMenu"
import { FullScreenButton, SharingButton } from "."
import { urlSharingDataAtom } from "~/atoms/globals"
import { useAtomValue } from "jotai"

export function MyAppShell({ children }: { children: React.ReactNode }) {
	const [opened, { toggle, close }] = useDisclosure()
	const isFullScreen = useIsFullscreen()
	const isMobileWindowSize = useIsMobileWindowSize()
	const isShowMobileButtons = useIsShowMobileButtons()
	const urlSharingData = useAtomValue(urlSharingDataAtom)
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
