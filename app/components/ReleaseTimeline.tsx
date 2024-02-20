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
	return (
		<ul className="mb-10 timeline timeline-snap-icon timeline-compact timeline-vertical lg:mb-0">
			{releases.map((release, idx) => (
				<li key={idx} className="w-full">
					<div className="timeline-middle">
						<IconTag size={18} className="mb-1 -mt-1" />
					</div>
					<div className="lg:min-w-[640px] mb-3 timeline-end">
						<time>
							<Text size="sm">{release[0]}</Text>
						</time>
						{release[1].map((releaseDetail, idx) => {
							const Icon = getIcon(releaseDetail.icon?.data)
							return (
								<div
									key={`${release[0]}-${idx}`}
									className="flex gap-1 p-2 bg-opacity-50 rounded-lg hover:bg-gray-200"
								>
									{releaseDetail.icon && (
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
										<Markdown className="prose-sm prose prose-p:mb-0 prose-li:my-0 prose-li:pl-0 prose-ul:mt-0">
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
