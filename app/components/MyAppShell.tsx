import { AppShell, Burger, Group, Image, ScrollArea, Skeleton, Text } from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import Logo from '~/assets/startdoing-logo.svg'
import { useIsFullscreen } from '~/utils';

export function MyAppShell({ children }: { children: React.ReactNode }) {
	const [opened, { toggle }] = useDisclosure();
	const isFullScreen = useIsFullscreen()
	const isMobileWindowSize = useMediaQuery('(max-width: 640px)');

	return (
		<AppShell
			header={{ height: 60 }}
			navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened }, }}
			disabled={isFullScreen || !isMobileWindowSize}
		>
			<AppShell.Header>
				<Group h="100%" px="md">
					<Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
					<Group gap="xs">
						<Image src={Logo} className='w-7 h-7' />
						<Text fw={700}>Startdo.ing</Text>
					</Group>
				</Group>
			</AppShell.Header>
			<AppShell.Navbar p="md">
				<AppShell.Section>Navbar header</AppShell.Section>
				<AppShell.Section grow my="md" component={ScrollArea}>
					60 links in a scrollable section
					{Array(60)
						.fill(0)
						.map((_, index) => (
							<Skeleton key={index} h={28} mt="sm" animate={false} />
						))}
				</AppShell.Section>
				<AppShell.Section>Navbar footer – always at the bottom</AppShell.Section>
			</AppShell.Navbar>
			<AppShell.Main>{children}</AppShell.Main>
		</AppShell>
	);
}