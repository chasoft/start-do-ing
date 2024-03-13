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
			{releases.map(([releaseTime, releaseDetails], idx) => {
				return (
					<li key={idx} className="w-full">
						<div className="timeline-middle">
							<IconTag size={18} className="-mt-1 mb-1" />
						</div>
						<div className="timeline-end mb-3 w-[calc(100%-10px)] sm:w-[calc(100%-50px)]">
							<time>
								<Text size="sm">{releaseTime}</Text>
							</time>
							{releaseDetails.map((release, idx) => {
								const Icon = getIcon(release.icon?.data)
								return (
									<Link
										key={`${releaseTime}-${idx}`}
										to={release.to}
										className="group flex gap-1 rounded-lg bg-opacity-50 p-2 transition-all hover:bg-gray-200"
									>
										{!!release.icon && (
											<span>
												<Icon size={16} className="mt-[2px]" />
											</span>
										)}
										<div>
											<Text
												size="sm"
												fw={FW.SEMI_BOLD}
												className="flex items-center gap-1 group-hover:text-blue-800"
											>
												{`${release.title} - ${release.version}`}
											</Text>
											<Markdown className="prose prose-sm text-slate-700 prose-p:mb-0 prose-ul:mt-0 prose-li:my-0 prose-li:pl-0">
												{release.description}
											</Markdown>
										</div>
									</Link>
								)
							})}
						</div>
						<hr />
					</li>
				)
			})}
		</ul>
	)
}
