/* FRAMEWORK */
import { Link } from "@remix-run/react"

/* THIRD-PARTY PACKAGES */
import { Text } from "@mantine/core"
import Markdown from "react-markdown"

/* COMPONENTS & UTILS */
import { getIcon } from "~/utils"
import { ReleaseWithMetadata } from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { IconTag } from "@tabler/icons-react"
import { FW } from "~/data"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export function ReleaseTimeline({
	releases
}: {
	releases: Array<[string, Array<ReleaseWithMetadata>]>
}) {
	if (releases.length === 0) {
		return <p>There is no updates.</p>
	}
	return (
		<ul className="timeline timeline-vertical timeline-compact timeline-snap-icon mb-10 lg:mb-0">
			{releases.map((release, idx) => (
				<li key={idx} className="w-full">
					<div className="timeline-middle">
						<IconTag size={18} className="-mt-1 mb-1" />
					</div>
					<div className="timeline-end mb-3 lg:min-w-[640px]">
						<time>
							<Text size="sm">{release[0]}</Text>
						</time>
						{release[1].map((releaseDetail, idx) => {
							const Icon = getIcon(releaseDetail.icon?.data)
							return (
								<div
									key={`${release[0]}-${idx}`}
									className="flex gap-1 rounded-lg bg-opacity-50 p-2 hover:bg-gray-200"
								>
									{Boolean(releaseDetail.icon) && (
										<span>
											<Icon size={16} className="mt-[2px]" />
										</span>
									)}
									<div>
										<Link
											to={releaseDetail.to}
											className="flex items-center gap-1 hover:text-blue-600"
										>
											<Text size="sm" fw={FW.SEMI_BOLD}>
												{releaseDetail.title}
											</Text>
										</Link>
										<Markdown className="prose prose-sm prose-p:mb-0 prose-ul:mt-0 prose-li:my-0 prose-li:pl-0">
											{releaseDetail.description}
										</Markdown>
									</div>
								</div>
							)
						})}
					</div>
					<hr />
				</li>
			))}
		</ul>
	)
}
