/* FRAMEWORK */
import { NavLink } from "@remix-run/react"

/* THIRD-PARTY PACKAGES */
import clsx from "clsx"

/* COMPONENTS & UTILS */
import { Block } from "~/utils/types"
import { getIcon } from "~/utils"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import {
	DATE_TIME_BLOCKS,
	DEV_UTILS_BLOCKS,
	DOMAINS_BLOCKS,
	EMPTY_LAYOUT_ID,
	QUIZ_BLOCKS,
	LANGUAGES_BLOCKS,
	MATHS_BLOCKS,
	OTHERS_BLOCKS,
	RANDOM_BLOCKS,
	URL_SHORTENER_BLOCKS
} from "~/data"
import { IconHeart, IconRss, IconShoppingCart } from "@tabler/icons-react"
import { URLS } from "~/data/urls"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

function MobileMenuItem({
	blocks,
	onClick
}: {
	blocks: Block<unknown>[]
	onClick: () => void
}) {
	if (blocks.length === 0) return null

	if (blocks.length === 1) {
		return (
			<li onClick={onClick} aria-hidden>
				<NavLink
					to={blocks[0].to}
					className={({ isActive, isPending }) =>
						clsx("group", isActive ? "active" : isPending ? "pending" : "")
					}
				>
					<span>{blocks[0].title}</span>
					{Boolean(blocks[0].tag) && (
						<span className="badge badge-sm font-mono">{blocks[0].tag}</span>
					)}
				</NavLink>
			</li>
		)
	}

	const Icon = getIcon(blocks[0]?.icon?.data)

	return (
		<details open>
			<summary className="group">
				{Boolean(blocks[0].icon) && <Icon size={16} />}
				{blocks[0].title}
			</summary>
			<ul>
				{blocks.slice(1).map((block) => {
					const key = block.id === EMPTY_LAYOUT_ID ? Math.random() : (block.id as string)
					const Icon = getIcon(block.icon?.data)
					return (
						<li key={key} onClick={onClick} aria-hidden>
							<NavLink
								to={block.to}
								className={({ isActive, isPending }) =>
									clsx("group", isActive ? "active" : isPending ? "pending" : "")
								}
							>
								{Boolean(block.icon) && <Icon size={16} />}
								<span>{block.title}</span>
								{Boolean(block.tag) && (
									<span className="badge badge-sm font-mono">{block.tag}</span>
								)}
							</NavLink>
						</li>
					)
				})}
			</ul>
		</details>
	)
}

const menuBlocks = [
	DATE_TIME_BLOCKS,
	DEV_UTILS_BLOCKS,
	DOMAINS_BLOCKS,
	QUIZ_BLOCKS,
	LANGUAGES_BLOCKS,
	MATHS_BLOCKS,
	RANDOM_BLOCKS,
	URL_SHORTENER_BLOCKS,
	OTHERS_BLOCKS
]

const extraMenuItems = [
	{
		icon: <IconShoppingCart size={18} />,
		urlData: URLS.store,
		badge: <span className="badge badge-primary badge-sm font-mono">new</span>
	},
	{
		icon: <IconRss size={18} />,
		urlData: URLS.blog,
		badge: null
	},
	{
		icon: <IconHeart size={18} />,
		urlData: URLS.support,
		badge: null
	}
]

export function MobileMenu({ onClick }: { onClick: () => void }) {
	return (
		<ul className="menu py-3">
			{menuBlocks.map((blocks, idx) => (
				<li key={idx}>
					<MobileMenuItem blocks={blocks} onClick={onClick} />
				</li>
			))}
			<li>{/* line separator */}</li>
			{extraMenuItems.map((i, idx) => (
				<li key={idx} onClick={onClick} aria-hidden>
					<NavLink
						to={i.urlData.to}
						className={({ isActive, isPending }) =>
							clsx("group", isActive ? "active" : isPending ? "pending" : "")
						}
					>
						{i.icon}
						<span>{i.urlData.label} </span>
						{Boolean(i.badge) && i.badge}
					</NavLink>
				</li>
			))}
		</ul>
	)
}
