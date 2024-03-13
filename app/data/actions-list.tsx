/* FRAMEWORK */
import type { NavigateFunction } from "@remix-run/react"

/* THIRD-PARTY PACKAGES */
import { rem } from "@mantine/core"
import type { SpotlightActionData, SpotlightActionGroupData } from "@mantine/spotlight"

/* COMPONENTS & UTILS */
import { extraMenuItems } from "~/components"
import { getIcon } from "~/utils"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { allBlocks } from "."
import { URLS } from "./urls"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export const getActionsList = (
	navigate: NavigateFunction
): (SpotlightActionGroupData | SpotlightActionData)[] => {
	const actions = allBlocks.map(([group, ...blocks]) => {
		const actions = blocks.map((block) => {
			const Icon = getIcon(block.icon?.data)
			const action = {
				id: block.id,
				label: block.title,
				description: block.description,
				onClick: () => navigate(block.to),
				leftSection: <Icon style={{ width: rem(24), height: rem(24) }} stroke={1.5} />
			}
			return action
		})
		return { group: group.title, actions }
	})

	const extraActionItems = extraMenuItems.map((menuItem) => ({
		id: menuItem.id,
		label: menuItem.urlData.label,
		description: menuItem.urlData.description,
		onClick: () => navigate(menuItem.urlData.to),
		leftSection: menuItem.icon
	}))

	const extraActionGroup = { group: URLS.home.label, actions: extraActionItems }

	return [extraActionGroup, ...actions]
}
