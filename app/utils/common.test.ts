/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { describe, expect, test } from "@jest/globals"

/* COMPONENTS & UTILS */
import { getAllReleaseUpdates } from "./common"
import { Block } from "./types"
import { IconBlank } from "~/components/icons"

/* ASSETS & DATA IMPORT */

/***************************************************************************
 *
 *  TEST
 *
 **************************************************************************/

const dummyRepeatedData = {
	id: "string",
	icon: { data: IconBlank, color: "string" },
	description: "string",
	group: [],
	favorite: false,
	color: {
		text: "string",
		bgNormal: "string",
		bgLighter: "string",
		bgDarker: "string"
	}
}

const TEST_BLOCKS: Block<string>[] = [
	{
		...dummyRepeatedData,
		title: "Block 1",
		to: "/block-1",
		updates: [
			{
				date: new Date("2024/2/1").getTime(),
				description: "string",
				version: "string"
			},
			{
				date: new Date("2024/1/5").getTime(),
				description: "string",
				version: "string"
			}
		]
	},
	{
		...dummyRepeatedData,
		title: "Block 2",
		to: "/block-2",
		updates: [
			{
				date: new Date("2024/2/1").getTime(),
				description: "string",
				version: "string"
			},
			{
				date: new Date("2024/3/5").getTime(),
				description: "string",
				version: "string"
			}
		]
	},
	{
		...dummyRepeatedData,
		title: "Block 3",
		to: "/block-3",
		updates: [
			{
				date: new Date("2024/2/1").getTime(),
				description: "string",
				version: "string"
			},
			{
				date: new Date("2024/1/5").getTime(),
				description: "string",
				version: "string"
			}
		]
	}
]

describe("getAllReleaseUpdates function", () => {
	test("works as expected", () => {
		const d = getAllReleaseUpdates(TEST_BLOCKS)
		expect(d).toStrictEqual({
			"2024/01/05": [
				{
					date: "2024/01/05",
					description: "string",
					icon: {
						color: "string",
						data: null
					},
					title: "Block 1",
					to: "/block-1",
					version: "string"
				},
				{
					date: "2024/01/05",
					description: "string",
					icon: {
						color: "string",
						data: null
					},
					title: "Block 3",
					to: "/block-3",
					version: "string"
				}
			],
			"2024/02/01": [
				{
					date: "2024/02/01",
					description: "string",
					icon: {
						color: "string",
						data: null
					},
					title: "Block 1",
					to: "/block-1",
					version: "string"
				},
				{
					date: "2024/02/01",
					description: "string",
					icon: {
						color: "string",
						data: null
					},
					title: "Block 2",
					to: "/block-2",
					version: "string"
				},
				{
					date: "2024/02/01",
					description: "string",
					icon: {
						color: "string",
						data: null
					},
					title: "Block 3",
					to: "/block-3",
					version: "string"
				}
			],
			"2024/03/05": [
				{
					date: "2024/03/05",
					description: "string",
					icon: {
						color: "string",
						data: null
					},
					title: "Block 2",
					to: "/block-2",
					version: "string"
				}
			]
		})
	})
})
