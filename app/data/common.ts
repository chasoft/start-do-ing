/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import { ABOUT } from "~/routes/about/metadata"
import {
	BLOG,
	BLOG_AI,
	BLOG_CHESS,
	BLOG_PHILOSOPHY,
	BLOG_PROGRAMMING,
	BLOG_TRAVEL
} from "~/routes/blog/metadata"
import { DASHBOARD } from "~/routes/dashboard/metadata"
import { DASHBOARD_SETTINGS } from "~/routes/dashboard.settings._index/metadata"
import { DATE_TIME } from "~/routes/date-time/metadata"
import { DATE_TIME_ANALOG_CLOCK } from "~/routes/date-time.analog-clock/metadata"
import { DATE_TIME_CALCULATOR } from "~/routes/date-time.calculator/metadata"
import { DATE_TIME_CALENDAR } from "~/routes/date-time.calendar/metadata"
import { DATE_TIME_COUNT_DOWN } from "~/routes/date-time.count-down/metadata"
import { DATE_TIME_DIGITAL_CLOCK } from "~/routes/date-time.digital-clock/metadata"
import { DEV_UTILS } from "~/routes/dev-utils/metadata"
import { DEV_UTILS_BASE64 } from "~/routes/dev-utils.base64/metadata"
import { DEV_UTILS_CURL_CONVERTER } from "~/routes/dev-utils.curl-converter/metadata"
import { DEV_UTILS_HASH_GENERATOR } from "~/routes/dev-utils.hash-generator/metadata"
import { DEV_UTILS_LOREM_IPSUM_GENERATOR } from "~/routes/dev-utils.lorem-ipsum-generator/metadata"
import { DEV_UTILS_MARKDOWN_EDITOR } from "~/routes/dev-utils.markdown-editor/metadata"
import { DEV_UTILS_SQL_FORMATTER } from "~/routes/dev-utils.sql-formatter/metadata"
import { DEV_UTILS_STRING_CONVERTER } from "~/routes/dev-utils.string-converter/metadata"
import { DOMAINS } from "~/routes/domains/metadata"
import { DOMAINS_BUILDER } from "~/routes/domains.builder/metadata"
import { DOMAINS_EXTENSIONS } from "~/routes/domains.extensions/metadata"
import { DOMAINS_WHOIS } from "~/routes/domains.whois/metadata"
import { HOME } from "~/routes/_index/metadata"
import { KAHOOT } from "~/routes/kahoot/metadata"
import { KAHOOT_QUIZ } from "~/routes/kahoot.quiz/metadata"
import { LANGUAGES } from "~/routes/languages/metadata"
import { LANGUAGES_100_POPULAR_CHINESE_WORDS } from "~/routes/languages.100-popular-chinese-words/metadata"
import { LANGUAGES_CHINESE_CHARACTERS } from "~/routes/languages.chinese-characters/metadata"
import { LANGUAGES_VIETNAMESE_READING_FOR_KIDS } from "~/routes/languages.vietnamese-reading-for-kids/metadata"
import { MATHS } from "~/routes/maths/metadata"
import { MATHS_EMPTY_1 } from "~/routes/maths.empty-1/metadata"
import { MATHS_EMPTY_2 } from "~/routes/maths.empty-2/metadata"
import { MATHS_EMPTY_3 } from "~/routes/maths.empty-3/metadata"
import { MATHS_EMPTY_4 } from "~/routes/maths.empty-4/metadata"
import { OTHERS } from "~/routes/others/metadata"
import { OTHERS_RUNNING_TEXT } from "~/routes/others.running-text/metadata"
import { RANDOM } from "~/routes/random/metadata"
import { RANDOM_BY_GROUPS } from "~/routes/random.by-groups/metadata"
import { RANDOM_LOTTERY } from "~/routes/random.lottery/metadata"
import { RANDOM_MAGIC_WHEEL } from "~/routes/random.magic-wheel/metadata"
import { RANDOM_NUMBER } from "~/routes/random.number/metadata"
import { RANDOM_PASSWORD } from "~/routes/random.password/metadata"
import { RANDOM_USERNAME } from "~/routes/random.username/metadata"
import { URL_SHORTENER } from "~/routes/url-shortener/metadata"
import { URL_SHORTENER_INDEX } from "~/routes/url-shortener._index/metadata"
import type {
	Block,
	BlogLayoutId,
	Breakpoint,
	DashboardLayoutId,
	DateTimeLayoutId,
	DevUtilsLayoutId,
	DomainsLayoutId,
	GroupId,
	KahootLayoutId,
	LanguagesLayoutId,
	MathsLayoutId,
	OthersLayoutId,
	RandomLayoutId,
	UrlShortenerLayoutId
} from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export const SITE = {
	title: "Start-Do-Ing",
	description:
		"Welcome to Startdo.ing! Where you can find useful and interesting resources to help you get started.",
	url: "https://startdo.ing"
}

export const breakpoints: Breakpoint[] = ["xs", "sm", "md", "lg", "xl", "2xl", "3xl"]

// 1
export const HOME_BLOCKS: Block<GroupId>[] = [
	HOME,
	// ABOUT,
	// BLOG,
	DATE_TIME,
	DEV_UTILS,
	DOMAINS,
	KAHOOT,
	LANGUAGES,
	MATHS,
	RANDOM,
	URL_SHORTENER,
	OTHERS
]

// 2
export const BLOG_BLOCKS: Block<BlogLayoutId>[] = [
	BLOG,
	BLOG_AI,
	BLOG_CHESS,
	BLOG_PHILOSOPHY,
	BLOG_PROGRAMMING,
	BLOG_TRAVEL
]

// 3
export const DATE_TIME_BLOCKS: Block<DateTimeLayoutId>[] = [
	DATE_TIME,
	DATE_TIME_ANALOG_CLOCK,
	DATE_TIME_CALCULATOR,
	DATE_TIME_CALENDAR,
	DATE_TIME_COUNT_DOWN,
	DATE_TIME_DIGITAL_CLOCK
]

// 4
export const DEV_UTILS_BLOCKS: Block<DevUtilsLayoutId>[] = [
	DEV_UTILS,
	DEV_UTILS_BASE64,
	DEV_UTILS_CURL_CONVERTER,
	DEV_UTILS_HASH_GENERATOR,
	DEV_UTILS_LOREM_IPSUM_GENERATOR,
	DEV_UTILS_MARKDOWN_EDITOR,
	DEV_UTILS_SQL_FORMATTER,
	DEV_UTILS_STRING_CONVERTER
]

// 5
export const DOMAINS_BLOCKS: Block<DomainsLayoutId>[] = [
	DOMAINS,
	DOMAINS_BUILDER,
	DOMAINS_EXTENSIONS,
	DOMAINS_WHOIS
]

// 6
export const KAHOOT_BLOCKS: Block<KahootLayoutId>[] = [KAHOOT, KAHOOT_QUIZ]

// 7
export const LANGUAGES_BLOCKS: Block<LanguagesLayoutId>[] = [
	LANGUAGES,
	LANGUAGES_100_POPULAR_CHINESE_WORDS,
	LANGUAGES_CHINESE_CHARACTERS,
	LANGUAGES_VIETNAMESE_READING_FOR_KIDS
]

// 8
export const MATHS_BLOCKS: Block<MathsLayoutId>[] = [
	MATHS,
	MATHS_EMPTY_1,
	MATHS_EMPTY_2,
	MATHS_EMPTY_3,
	MATHS_EMPTY_4
]

// 9
export const RANDOM_BLOCKS: Block<RandomLayoutId>[] = [
	RANDOM,
	RANDOM_BY_GROUPS,
	RANDOM_LOTTERY,
	RANDOM_MAGIC_WHEEL,
	RANDOM_NUMBER,
	RANDOM_PASSWORD,
	RANDOM_USERNAME
]

// 10
export const URL_SHORTENER_BLOCKS: Block<UrlShortenerLayoutId>[] = [
	URL_SHORTENER,
	URL_SHORTENER_INDEX
]

// 11
export const OTHERS_BLOCKS: Block<OthersLayoutId>[] = [OTHERS, OTHERS_RUNNING_TEXT]

export const DASHBOARD_BLOCKS: Block<DashboardLayoutId>[] = [
	DASHBOARD,
	DASHBOARD_SETTINGS
]

export const ABOUT_BLOCKS: Block<"about">[] = [ABOUT]

// export const blocks: Record<GroupId, Block<PageId>[]> = {
//   home: HOME_BLOCKS, //(1)
//   blog: BLOG_BLOCKS, //(2)
//   "date-time": DATE_TIME_BLOCKS, //(3)
//   "dev-utils": DEV_UTILS_BLOCKS, //(4)
//   domains: DOMAINS_BLOCKS, //(5)
//   kahoot: KAHOOT_BLOCKS, //(6)
//   languages: LANGUAGES_BLOCKS, //(7)
//   maths: MATHS_BLOCKS, //(8)
//   random: RANDOM_BLOCKS, //(9)
//   "url-shortener": URL_SHORTENER_BLOCKS, //(10)
//   others: OTHERS_BLOCKS, //(11)
//   about: ABOUT_BLOCKS,
//   dashboard: DASH_BLOCKS,
// };

export const DEFAULT_BLOCK: Block<"home"> = HOME

export const DEFAULT_SHARING_IMAGE = "https://startdo.ing/static/images/sharing.png"
