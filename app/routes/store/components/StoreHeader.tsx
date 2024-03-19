/* FRAMEWORK */
import { Link } from "@remix-run/react"

/* THIRD-PARTY PACKAGES */
import {
	HoverCard,
	Group,
	Button,
	UnstyledButton,
	Text,
	SimpleGrid,
	ThemeIcon,
	Anchor,
	Divider,
	Center,
	Box,
	Burger,
	Drawer,
	Collapse,
	ScrollArea,
	rem,
	useMantineTheme,
	Image
} from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"

/* COMPONENTS & UTILS */

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import classes from "./StoreHeader.module.css"
import {
	IconNotification,
	IconCode,
	IconBook,
	IconChartPie3,
	IconFingerprint,
	IconCoin,
	IconChevronDown
} from "@tabler/icons-react"
import { FW } from "~/data"
import { URLS } from "~/data/urls"
import Logo from "~/assets/logo-startdoing.svg"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

const mockdata = [
	{
		icon: IconCode,
		title: "Open source",
		description: "This Pokémon’s cry is very loud and distracting"
	},
	{
		icon: IconCoin,
		title: "Free for everyone",
		description: "The fluid of Smeargle’s tail secretions changes"
	},
	{
		icon: IconBook,
		title: "Documentation",
		description: "Yanma is capable of seeing 360 degrees without"
	},
	{
		icon: IconFingerprint,
		title: "Security",
		description: "The shell’s rounded shape and the grooves on its."
	},
	{
		icon: IconChartPie3,
		title: "Analytics",
		description: "This Pokémon uses its flying ability to quickly chase"
	},
	{
		icon: IconNotification,
		title: "Notifications",
		description: "Combusken battles with the intensely hot flames it spews"
	}
]

export function StoreHeader() {
	const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
		useDisclosure(false)
	const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false)
	const theme = useMantineTheme()

	const links = mockdata.map((item) => (
		<UnstyledButton className={classes.subLink} key={item.title}>
			<Group wrap="nowrap" align="flex-start">
				<ThemeIcon size={34} variant="default" radius="md">
					<item.icon
						style={{ width: rem(22), height: rem(22) }}
						color={theme.colors.blue[6]}
					/>
				</ThemeIcon>
				<div>
					<Text size="sm" fw={FW.SEMI_BOLD}>
						{item.title}
					</Text>
					<Text size="xs" c="dimmed">
						{item.description}
					</Text>
				</div>
			</Group>
		</UnstyledButton>
	))

	return (
		<Box pb={120}>
			<header className={classes.header}>
				<Group justify="space-between" h="100%">
					<div className="flex text-xl font-bold">
						<Link to={URLS.home.to}>
							<Image src={Logo} className="size-7" />
						</Link>
						<span className="mx-2 text-gray-400">/</span>
						<Link to={URLS.store.to} className="">
							{URLS.store.label}
						</Link>
					</div>

					<Group h="100%" gap={0} visibleFrom="sm">
						<Link to={URLS.home.to} className={classes.link}>
							{URLS.home.label}
						</Link>
						<HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
							<HoverCard.Target>
								<Link to="#" className={classes.link}>
									<Center inline>
										<Box component="span" mr={5}>
											Features
										</Box>
										<IconChevronDown
											style={{ width: rem(16), height: rem(16) }}
											color={theme.colors.blue[6]}
										/>
									</Center>
								</Link>
							</HoverCard.Target>

							<HoverCard.Dropdown style={{ overflow: "hidden" }}>
								<Group justify="space-between" px="md">
									<Text fw={FW.SEMI_BOLD}>Features</Text>
									<Anchor href="#" fz="xs">
										View all
									</Anchor>
								</Group>

								<Divider my="sm" />

								<SimpleGrid cols={2} spacing={0}>
									{links}
								</SimpleGrid>

								<div className={classes.dropdownFooter}>
									<Group justify="space-between">
										<div>
											<Text fw={FW.SEMI_BOLD} fz="sm">
												Get started
											</Text>
											<Text size="xs" c="dimmed">
												Their food sources have decreased, and their numbers
											</Text>
										</div>
										<Button variant="default">Get started</Button>
									</Group>
								</div>
							</HoverCard.Dropdown>
						</HoverCard>
						<Link to="#" className={classes.link}>
							Learn
						</Link>
						<Link to="#" className={classes.link}>
							Academy
						</Link>
					</Group>

					<Group visibleFrom="sm">
						<Button variant="default">Log in</Button>
						<Button>Sign up</Button>
					</Group>

					<Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
				</Group>
			</header>

			<Drawer
				opened={drawerOpened}
				onClose={closeDrawer}
				size="100%"
				padding="md"
				title="Navigation"
				hiddenFrom="sm"
				zIndex={1000000}
			>
				<ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
					<Divider my="sm" />
					<Link to={URLS.home.to} className={classes.link}>
						{URLS.home.label}
					</Link>
					<UnstyledButton className={classes.link} onClick={toggleLinks}>
						<Center inline>
							<Box component="span" mr={5}>
								Features
							</Box>
							<IconChevronDown
								style={{ width: rem(16), height: rem(16) }}
								color={theme.colors.blue[6]}
							/>
						</Center>
					</UnstyledButton>
					<Collapse in={linksOpened}>{links}</Collapse>
					<Link to="#" className={classes.link}>
						Learn
					</Link>
					<Link to="#" className={classes.link}>
						Academy
					</Link>

					<Divider my="sm" />

					<Group justify="center" grow pb="xl" px="md">
						<Button variant="default">Log in</Button>
						<Button>Sign up</Button>
					</Group>
				</ScrollArea>
			</Drawer>
		</Box>
	)
}
