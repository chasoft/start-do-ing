/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */
import { Button, NumberInput } from "@mantine/core"

/* COMPONENTS & UTILS */
import { ContentWrapper } from "~/components"
import { useUrlSharingData } from "~/utils"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { RANDOM_NUMBER } from "./metadata"
import { helpContents } from "./helpContents"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

function RandomNumberForm() {
	return (
		<div>
			<NumberInput variant="filled" label="Min" placeholder="Input min value" />
			<NumberInput variant="filled" label="Max" placeholder="Input max value" />
			<Button>Generate</Button>
		</div>
	)
}

export function RandomNumberContent({ className }: { className?: string }) {
	const urlSharingData = useUrlSharingData(RANDOM_NUMBER)
	return (
		<ContentWrapper urlSharingData={urlSharingData} helpContents={helpContents}>
			<div className={className}>
				<div className="h-full p-2 sm:p-4 xl:p-6">
					<h1 className="text-lg font-semibold sm:text-2xl">Random Number</h1>

					<RandomNumberForm />
				</div>
			</div>
		</ContentWrapper>
	)
}
