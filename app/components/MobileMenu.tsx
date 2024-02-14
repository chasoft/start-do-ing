/* FRAMEWORK */
import { NavLink } from "@remix-run/react"

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { Block } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import {
	DATE_TIME_BLOCKS,
	DEV_UTILS_BLOCKS,
	DOMAINS_BLOCKS,
	KAHOOT_BLOCKS,
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
	return (
		<details open>
			<summary className="group">
				<span>{blocks[0].icon?.data}</span>
				{blocks[0].title}
			</summary>
			<ul>
				{blocks.slice(1).map((block) => {
					const key = block.id === "empty" ? Math.random() : (block.id as string)
					return (
						<li key={key} onClick={onClick} aria-hidden="true">
							<NavLink
								to={block.to}
								className={({ isActive, isPending }) =>
									isActive ? "active group" : isPending ? "pending group" : "group"
								}
							>
								<span>{block.title}</span>
								{block.tag && (
									<span className="font-mono badge badge-sm">{block.tag}</span>
								)}
							</NavLink>
						</li>
					)
				})}
			</ul>
		</details>
	)
}

export function MobileMenu({ onClick }: { onClick: () => void }) {
	return (
		<ul className="py-3 menu">
			<li>
				<MobileMenuItem blocks={DATE_TIME_BLOCKS} onClick={onClick} />
			</li>
			<li>
				<MobileMenuItem blocks={DEV_UTILS_BLOCKS} onClick={onClick} />
			</li>
			<li>
				<MobileMenuItem blocks={DOMAINS_BLOCKS} onClick={onClick} />
			</li>
			<li>
				<MobileMenuItem blocks={KAHOOT_BLOCKS} onClick={onClick} />
			</li>
			<li>
				<MobileMenuItem blocks={LANGUAGES_BLOCKS} onClick={onClick} />
			</li>
			<li>
				<MobileMenuItem blocks={MATHS_BLOCKS} onClick={onClick} />
			</li>
			<li>
				<MobileMenuItem blocks={RANDOM_BLOCKS} onClick={onClick} />
			</li>
			<li>
				<MobileMenuItem blocks={URL_SHORTENER_BLOCKS} onClick={onClick} />
			</li>
			<li>
				<MobileMenuItem blocks={OTHERS_BLOCKS} onClick={onClick} />
			</li>
			<li></li>
			<li onClick={onClick} aria-hidden="true">
				<a href={URLS.store.to} className="group">
					<IconShoppingCart size={18} />
					<span>{URLS.store.label}</span>{" "}
					<span className="font-mono badge badge-sm badge-primary">new</span>
				</a>
			</li>
			<li onClick={onClick} aria-hidden="true">
				<a href={URLS.blog.to} className="group">
					<IconRss size={18} />
					<span>{URLS.blog.label}</span>
				</a>
			</li>
			<li onClick={onClick} aria-hidden="true">
				<NavLink
					to={URLS.support.to}
					className={({ isActive, isPending }) =>
						isActive ? "active group" : isPending ? "pending group" : "group"
					}
				>
					<IconHeart size={18} />
					<span>{URLS.support.label} startdo.ing</span>
				</NavLink>
			</li>
		</ul>
	)
}
