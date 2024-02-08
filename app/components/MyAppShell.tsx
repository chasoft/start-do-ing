import { AppShell, Burger, Group, Image, ScrollArea, Skeleton, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Link } from '@remix-run/react';
import Logo from '~/assets/startdoing-logo.svg'
import { useIsFullscreen, useIsMobileWindowSize } from '~/utils';
import { MobileMenu } from './MobileMenu';

export function MyAppShell({ children }: { children: React.ReactNode }) {
	const [opened, { toggle }] = useDisclosure();
	const isFullScreen = useIsFullscreen()
	const isMobileWindowSize = useIsMobileWindowSize();

	return (
		<AppShell
			header={{ height: 60 }}
			navbar={{ width: 300, breakpoint: 'md', collapsed: { mobile: !opened }, }}
			disabled={isFullScreen || !isMobileWindowSize}
		>
			<AppShell.Header>
				<Group h="100%" px="md">
					<Burger opened={opened} onClick={toggle} hiddenFrom="md" size="sm" />
					<Link to={"/"} className="flex gap-2">
						<Image src={Logo} className='w-7 h-7' />
						<Text fw={700}>Startdo.ing</Text>
					</Link>
				</Group>
			</AppShell.Header>
			<AppShell.Navbar>
				<AppShell.Section grow component={ScrollArea}>
					<MobileMenu />
				</AppShell.Section>
				<AppShell.Section className="flex justify-between p-3" hiddenFrom="md">
					<Text size="xs">
						hi@startdo.ing
					</Text>
					<Text size="xs">
						Make with 💖 by Brian Cao
					</Text>
				</AppShell.Section>
			</AppShell.Navbar>
			<AppShell.Main>{children}</AppShell.Main>
		</AppShell>
	);
}