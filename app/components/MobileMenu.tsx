import { NavLink } from "@remix-run/react"
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
import { Block } from "~/utils/types"

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
				{blocks.slice(1).map((block) => (
					// eslint-disable-next-line jsx-a11y/click-events-have-key-events
					<li key={block.to} onClick={onClick}>
						<NavLink
							to={block.to}
							className={({ isActive, isPending }) =>
								isActive ? "active group" : isPending ? "pending group" : "group"
							}
						>
							<span>{block.title}</span>
							{block.tag && <span className="font-mono badge badge-sm">{block.tag}</span>}
						</NavLink>
					</li>
				))}
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
			<li>
				<a href="/theme-generator/" className="group">
					<span>
						<svg
							className="w-5 h-5 text-fuchsia-400"
							width="18"
							height="18"
							viewBox="0 0 48 48"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M20.1005 8.1005L24.3431 12.3431M30 4V10V4ZM39.8995 8.1005L35.6569 12.3431L39.8995 8.1005ZM44 18H38H44ZM39.8995 27.8995L35.6569 23.6569L39.8995 27.8995ZM30 32V26V32ZM20.1005 27.8995L24.3431 23.6569L20.1005 27.8995ZM16 18H22H16Z"
								stroke="currentColor"
								strokeWidth="4"
								strokeLinecap="butt"
								strokeLinejoin="bevel"
							></path>
							<path
								d="M29.5856 18.4143L5.54395 42.4559"
								stroke="currentColor"
								strokeWidth="4"
								strokeLinecap="butt"
								strokeLinejoin="bevel"
							></path>
						</svg>
					</span>
					<span>Theme Generator</span>
				</a>
			</li>
			<li></li>
			<li>
				<a href="/store/" className="group">
					<span>
						<svg
							className="w-5 h-5"
							width="18"
							height="18"
							viewBox="0 0 48 48"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M40.0391 22V42H8.03906V22"
								stroke="currentColor"
								strokeWidth="4"
								strokeLinecap="butt"
								strokeLinejoin="bevel"
							></path>
							<path
								d="M5.84231 13.7766C4.31276 17.7377 7.26307 22 11.5092 22C14.8229 22 17.5276 19.3137 17.5276 16C17.5276 19.3137 20.2139 22 23.5276 22H24.546C27.8597 22 30.546 19.3137 30.546 16C30.546 19.3137 33.2518 22 36.5655 22C40.8139 22 43.767 17.7352 42.2362 13.7723L39.2337 6H8.84523L5.84231 13.7766Z"
								fill="none"
								stroke="currentColor"
								strokeWidth="4"
								strokeLinejoin="bevel"
							></path>
						</svg>
					</span>
					<span>Store</span>{" "}
					<span className="font-mono badge badge-sm badge-primary">new</span>
				</a>
			</li>
			<li>
				<a href="/blog/" className="group">
					<span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							className="w-5 h-5"
						>
							<path d="M3.75 3a.75.75 0 00-.75.75v.5c0 .414.336.75.75.75H4c6.075 0 11 4.925 11 11v.25c0 .414.336.75.75.75h.5a.75.75 0 00.75-.75V16C17 8.82 11.18 3 4 3h-.25z"></path>
							<path d="M3 8.75A.75.75 0 013.75 8H4a8 8 0 018 8v.25a.75.75 0 01-.75.75h-.5a.75.75 0 01-.75-.75V16a6 6 0 00-6-6h-.25A.75.75 0 013 9.25v-.5zM7 15a2 2 0 11-4 0 2 2 0 014 0z"></path>
						</svg>
					</span>
					<span>Blog</span>
				</a>
			</li>
			<li>
				<a href="/resources/videos/" className="group">
					<span>
						<svg
							width="18"
							height="18"
							viewBox="0 0 48 48"
							className="w-5 h-5"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"
								fill="none"
								stroke="currentColor"
								strokeWidth="4"
								strokeLinejoin="bevel"
							></path>
							<path
								d="M20 24V17.0718L26 20.5359L32 24L26 27.4641L20 30.9282V24Z"
								fill="none"
								stroke="currentColor"
								strokeWidth="4"
								strokeLinejoin="bevel"
							></path>
						</svg>
					</span>
					<span>Resources</span>
				</a>
			</li>
			<li></li>
			<li>
				<a
					href="/tailwindplay/"
					target="_blank"
					rel="noopener noreferrer"
					className="group"
				>
					<span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="w-5 h-5"
							fill="none"
							viewBox="0 0 54 33"
						>
							<g clipPath="url(#prefix__clip0)">
								<path
									fill="currentColor"
									fillRule="evenodd"
									d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
									clipRule="evenodd"
								></path>
							</g>
							<defs>
								<clipPath id="prefix__clip0">
									<path fill="#fff" d="M0 0h54v32.4H0z"></path>
								</clipPath>
							</defs>
						</svg>
					</span>
					<span>Playground</span>
					<svg
						width="12"
						height="12"
						className="transition-opacity duration-300 ease-out opacity-0 group-hover:opacity-100"
						viewBox="0 0 48 48"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M19 11H37V29"
							stroke="currentColor"
							strokeWidth="4"
							strokeLinecap="butt"
							strokeLinejoin="bevel"
						></path>
						<path
							d="M11.5439 36.4559L36.9997 11"
							stroke="currentColor"
							strokeWidth="4"
							strokeLinecap="butt"
							strokeLinejoin="bevel"
						></path>
					</svg>
				</a>
			</li>
			<li>
				<a
					href="https://github.com/saadeghi/daisyui"
					target="_blank"
					rel="noopener noreferrer"
					className="group"
				>
					<span>
						<svg
							width="18"
							height="18"
							className="w-5 h-5"
							viewBox="0 0 48 48"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M29.3444 30.4765C31.7481 29.977 33.9292 29.1108 35.6247 27.8391C38.5202 25.6676 40 22.3136 40 18.9999C40 16.6752 39.1187 14.505 37.5929 12.6668C36.7427 11.6425 39.2295 3.99989 37.02 5.02919C34.8105 6.05848 31.5708 8.33679 29.8726 7.83398C28.0545 7.29565 26.0733 6.99989 24 6.99989C22.1992 6.99989 20.4679 7.22301 18.8526 7.6344C16.5046 8.23237 14.2591 5.99989 12 5.02919C9.74086 4.05848 10.9736 11.9632 10.3026 12.7944C8.84119 14.6051 8 16.7288 8 18.9999C8 22.3136 9.79086 25.6676 12.6863 27.8391C14.6151 29.2857 17.034 30.2076 19.7401 30.6619"
								stroke="currentColor"
								strokeWidth="4"
								strokeLinecap="butt"
							></path>
							<path
								d="M19.7397 30.6619C18.5812 31.937 18.002 33.1478 18.002 34.2944C18.002 35.441 18.002 38.3464 18.002 43.0106"
								stroke="currentColor"
								strokeWidth="4"
								strokeLinecap="butt"
							></path>
							<path
								d="M29.3446 30.4766C30.4423 31.9174 30.9912 33.211 30.9912 34.3576C30.9912 35.5042 30.9912 38.3885 30.9912 43.0107"
								stroke="currentColor"
								strokeWidth="4"
								strokeLinecap="butt"
							></path>
							<path
								d="M6 31.2155C6.89887 31.3254 7.56554 31.7387 8 32.4554C8.65169 33.5303 11.0742 37.518 13.8251 37.518C15.6591 37.518 17.0515 37.518 18.0024 37.518"
								stroke="currentColor"
								strokeWidth="4"
								strokeLinecap="butt"
							></path>
						</svg>
					</span>
					<span>GitHub</span>
					<svg
						width="12"
						height="12"
						className="transition-opacity duration-300 ease-out opacity-0 group-hover:opacity-100"
						viewBox="0 0 48 48"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M19 11H37V29"
							stroke="currentColor"
							strokeWidth="4"
							strokeLinecap="butt"
							strokeLinejoin="bevel"
						></path>
						<path
							d="M11.5439 36.4559L36.9997 11"
							stroke="currentColor"
							strokeWidth="4"
							strokeLinecap="butt"
							strokeLinejoin="bevel"
						></path>
					</svg>
				</a>
			</li>
			<li onClick={onClick}>
				<NavLink
					to="/support"
					className={({ isActive, isPending }) =>
						isActive ? "active group" : isPending ? "pending group" : "group"
					}
				>
					<span>
						<svg
							width="18"
							className="w-5 h-5"
							height="18"
							viewBox="0 0 48 48"
							fill="#456"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M15 8C8.92487 8 4 12.9249 4 19C4 30 17 40 24 42.3262C31 40 44 30 44 19C44 12.9249 39.0751 8 33 8C29.2797 8 25.9907 9.8469 24 12.6738C22.0093 9.8469 18.7203 8 15 8Z"
								fill="none"
								stroke="currentColor"
								strokeWidth="4"
								strokeLinecap="butt"
								strokeLinejoin="bevel"
							></path>
						</svg>
					</span>
					<span>Support startdo.ing</span>
				</NavLink>
			</li>
		</ul>
	)
}
