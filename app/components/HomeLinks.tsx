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
		<div className="absolute bottom-2 left-2 hidden grow gap-1 lg:flex">
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
		</div>
	)
}
