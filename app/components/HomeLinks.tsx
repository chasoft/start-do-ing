/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { Kbd } from "@mantine/core"
import { openSpotlight } from "@mantine/spotlight"

/* COMPONENTS & UTILS */
import { ButtonLink } from "."

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { IconHeart, IconRss, IconSearch, IconShoppingCart } from "@tabler/icons-react"
import { URLS } from "~/data/urls"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/
export function HomeLinks() {
	return (
		<div className="absolute bottom-2 left-2 hidden w-[calc(100%-16px)] grow gap-1 lg:flex">
			<ButtonLink
				to={URLS.store.to}
				icon={
					<IconShoppingCart
						size={18}
						className="transition-all group-hover:text-amber-600"
					/>
				}
			>
				{URLS.store.label}
			</ButtonLink>
			<ButtonLink
				to={URLS.blog.to}
				icon={<IconRss size={18} className="transition-all group-hover:text-blue-700" />}
			>
				{URLS.blog.label}
			</ButtonLink>
			<ButtonLink
				to={URLS.support.to}
				icon={<IconHeart size={18} className="transition-all group-hover:fill-red-400" />}
			>
				{URLS.support.label.split(" ")[0]}
			</ButtonLink>
			<button
				className="group ml-auto flex items-center gap-2 rounded-lg border-2 border-transparent bg-opacity-60 px-2 py-1 transition-all hover:bg-white hover:bg-opacity-40"
				onClick={openSpotlight}
			>
				<IconSearch size={18} className="transition-all group-hover:text-purple-700" />
				<span className="leading-[0]">
					<Kbd>⌘</Kbd>+<Kbd>K</Kbd>
				</span>
			</button>
		</div>
	)
}
