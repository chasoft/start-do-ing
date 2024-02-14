/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { ButtonLink } from "."

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { IconHeart, IconRss, IconShoppingCart } from "@tabler/icons-react"
import { URLS } from "~/data/urls"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/
export function HomeLinks() {
	return (
		<div className="absolute hidden gap-1 bottom-2 left-2 lg:flex grow">
			<ButtonLink
				to={URLS.store.to}
				icon={
					<IconShoppingCart
						size={18}
						className="group-hover:text-amber-600 transition-all"
					/>
				}
			>
				{URLS.store.label}
			</ButtonLink>
			<ButtonLink
				to={URLS.blog.to}
				icon={<IconRss size={18} className="group-hover:text-blue-700 transition-all" />}
			>
				{URLS.blog.label}
			</ButtonLink>
			<ButtonLink
				to={URLS.support.to}
				icon={<IconHeart size={18} className="group-hover:fill-red-400 transition-all" />}
			>
				{URLS.store.label}
			</ButtonLink>
		</div>
	)
}
