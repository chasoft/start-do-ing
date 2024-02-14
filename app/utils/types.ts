export type CustomRouteHandle = Partial<{
	layoutId: PageId
	isGroup: boolean
	breadcrumb: () => JSX.Element
}>

export type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl"

export type EmptyLayoutId = "404"

export type GroupId =
	| "home" //(1)
	| "blog" //(2)
	| "date-time" //(3)
	| "dev-utils" //(4)
	| "domains" //(5)
	| "kahoot" //(6)
	| "languages" //(7)
	| "maths" //(8)
	| "random" //(9)
	| "url-shortener" //(10)
	| "others" //(11)
	| "support"
	| "dashboard"

export type BlogLayoutId =
	| "blog"
	| "AI"
	| "chess"
	| "philosophy"
	| "programming"
	| "travel"

export type DateTimeLayoutId =
	| "date-time"
	| "date-time-analog-clock"
	| "date-time-calculator"
	| "date-time-calendar"
	| "date-time-count-down"
	| "date-time-digital-clock"

export type DevUtilsLayoutId =
	| "dev-utils"
	| "dev-utils-base64"
	| "dev-utils-curl-converter"
	| "dev-utils-hash-generator"
	| "dev-utils-lorem-ipsum-generator"
	| "dev-utils-markdown-editor"
	| "dev-utils-sql-formatter"
	| "dev-utils-string-converter"

export type DomainsLayoutId =
	| "domains"
	| "domains-builder"
	| "domains-extensions"
	| "domains-whois"

export type KahootLayoutId = "kahoot" | "kahoot-quiz"

export type LanguagesLayoutId =
	| "languages"
	| "100-popular-chinese-words"
	| "chinese-characters"
	| "vietnamese-reading-for-kids"

export type MathsLayoutId =
	| "maths"
	| "maths-empty-1"
	| "maths-empty-2"
	| "maths-empty-3"
	| "maths-empty-4"

export type RandomLayoutId =
	| "random"
	| "random-by-groups"
	| "random-lottery"
	| "random-magic-wheel"
	| "random-number"
	| "random-password"
	| "random-username"

export type UrlShortenerLayoutId = "url-shortener" | "url-shortener-index"

export type OthersLayoutId = "others" | "others-running-text"

export type PageId =
	| GroupId
	| DashboardLayoutId
	| BlogLayoutId
	| DateTimeLayoutId
	| DevUtilsLayoutId
	| DomainsLayoutId
	| KahootLayoutId
	| LanguagesLayoutId
	| MathsLayoutId
	| RandomLayoutId
	| UrlShortenerLayoutId
	| OthersLayoutId
	| SystemLayoutId
	| FeatureLayoutId

export type FeatureLayoutId = "left" | "right" | "last"
export type SystemLayoutId = "empty" | "404"
export type DashboardLayoutId = "dashboard" | "settings"

export interface GridCellProps {
	className?: string
	blockIndex: number
	icon?: {
		data: React.ReactNode
		color?: string
	}
}

export interface GridCellsProps<TLayout> {
	className?: string
	layoutId?: TLayout | FeatureLayoutId | SystemLayoutId | DashboardLayoutId
	isIntroBlock?: boolean
	blockIndex: number
	lastGridCellBlocks?: Block<PageId>[]
}

export interface GridCellsFunction<T> {
	(props: GridCellsProps<T>): JSX.Element
}

export type NavigationGridCells =
	| GridCellsFunction<GroupId>
	| GridCellsFunction<DateTimeLayoutId>
	| GridCellsFunction<DevUtilsLayoutId>
	| GridCellsFunction<DomainsLayoutId>
	| GridCellsFunction<KahootLayoutId>
	| GridCellsFunction<LanguagesLayoutId>
	| GridCellsFunction<MathsLayoutId>
	| GridCellsFunction<RandomLayoutId>
	| GridCellsFunction<UrlShortenerLayoutId>
	| GridCellsFunction<OthersLayoutId>
	| GridCellsFunction<SystemLayoutId>
	| GridCellsFunction<FeatureLayoutId>
	| GridCellsFunction<unknown>

export type Block<TLayout> = {
	/**
	 * layout animation based on id
	 */
	id: TLayout
	/**
	 * introduction information of the block
	 */
	icon?: {
		data: React.ReactNode
		color?: string
	}
	title: string
	description: string
	image?: string
	to: string
	/**
	 * organizing blocks by tags and/or favorite
	 */
	group: GroupId[]
	favorite: boolean
	/**
	 * highlight
	 */
	tag?: string
	tagColor?: string
	/**
	 * decoration color of the block
	 */
	color: {
		text: string
		bgNormal: string
		bgLighter: string
		bgDarker: string
	}
	/**
	 * versioning is required to keep track of the changes made to the block
	 */
	versioning: {
		releaseDate: Date
		major: number
		minor: number
	}
}

export type UrlSharingData = {
	image: string
	title: string
	description: string
	url: string
}

export type TColor = {
	bgColor: string
	borderColor: string
}
