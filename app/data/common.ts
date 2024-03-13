/* FRAMEWORK */

/* THIRD-PARTY PACKAGES */

/* COMPONENTS & UTILS */
import type {
	Block,
	Breakpoint,
	DateTimeLayoutId,
	DevUtilsLayoutId,
	DomainsLayoutId,
	GroupId,
	QuizLayoutId,
	LanguagesLayoutId,
	MathsLayoutId,
	OthersLayoutId,
	RandomLayoutId,
	UrlShortenerLayoutId
} from "~/utils/types"

/* TRANSLATIONS IMPORT */

/* ASSETS & DATA IMPORT */
import { DATE_TIME, DATE_TIME_COUNT_DOWN } from "~/routes/date-time/metadata"
import { DATE_TIME_ANALOG_CLOCK } from "~/routes/date-time.analog-clock/metadata"
import { DATE_TIME_CALCULATOR } from "~/routes/date-time.calculator/metadata"
import { DATE_TIME_CALENDAR } from "~/routes/date-time.calendar/metadata"
import { DATE_TIME_COUNT_DOWN_DATE } from "~/routes/date-time.count-down.date/metadata"
import { DATE_TIME_COUNT_DOWN_NUMBER } from "~/routes/date-time.count-down.number/metadata"
import { DATE_TIME_COUNT_DOWN_TIME } from "~/routes/date-time.count-down.time/metadata"
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
import { KAHOOT_QUIZ } from "~/routes/quiz.kahoot/metadata"
import { LANGUAGES } from "~/routes/languages/metadata"
import { LANGUAGES_100_POPULAR_CHINESE_WORDS } from "~/routes/languages.100-popular-chinese-words/metadata"
import { LANGUAGES_CHINESE_CHARACTERS } from "~/routes/languages.chinese-characters/metadata"
import { LANGUAGES_VIETNAMESE_READING_FOR_KIDS } from "~/routes/languages.vietnamese-reading-for-kids/metadata"
import { MATHS } from "~/routes/maths/metadata"
import { MATHS_1 } from "~/routes/maths.lesson-1/metadata"
import { MATHS_2 } from "~/routes/maths.lesson-2/metadata"
import { MATHS_3 } from "~/routes/maths.lesson-3/metadata"
import { MATHS_4 } from "~/routes/maths.lesson-4/metadata"
import { OTHERS } from "~/routes/others/metadata"
import { OTHERS_RUNNING_TEXT } from "~/routes/others.running-text/metadata"
import { QUIZ } from "~/routes/quiz/metadata"
import { RANDOM } from "~/routes/random/metadata"
import { RANDOM_BY_GROUPS } from "~/routes/random.by-groups/metadata"
import { RANDOM_LOTTERY } from "~/routes/random.lottery/metadata"
import { RANDOM_MAGIC_WHEEL } from "~/routes/random.magic-wheel/metadata"
import { RANDOM_NUMBER } from "~/routes/random.number/metadata"
import { RANDOM_PASSWORD } from "~/routes/random.password/metadata"
import { RANDOM_USERNAME } from "~/routes/random.username/metadata"
import { URL_SHORTENER } from "~/routes/url-shortener/metadata"
import { VIETNAM_TRAFFIC_LAW } from "~/routes/quiz.vietnam-traffic-law/metadata"

/***************************************************************************
 *
 *  START
 *
 **************************************************************************/

export const SITE = {
	title: "Startdo.ing",
	description: `Unleash your creativity with Startdo.ing's collection of engaging online tools, called "blocks". Explore, have fun, and share the joy with your friends!`,
	url: "https://startdo.ing",
	email: "hi@startdo.ing",
	makeWithLove: "Make with 💖 by Brian Cao"
} as const

export const breakpoints: Breakpoint[] = ["xs", "sm", "md", "lg", "xl", "2xl", "3xl"]

/**
 * The order of blocks is important. It is the display order of the blocks.
 */
export const HOME_BLOCKS: Block<GroupId>[] = [
	HOME,
	RANDOM,
	DATE_TIME,
	QUIZ,
	LANGUAGES,
	DOMAINS,
	DEV_UTILS,
	MATHS,
	URL_SHORTENER,
	OTHERS
]

/**
 * 1. Note that, the first item is "group", not "block feature"
 */
export const DATE_TIME_BLOCKS: Block<DateTimeLayoutId>[] = [
	DATE_TIME,
	DATE_TIME_CALENDAR,
	DATE_TIME_COUNT_DOWN,
	DATE_TIME_COUNT_DOWN_DATE,
	DATE_TIME_COUNT_DOWN_TIME,
	DATE_TIME_COUNT_DOWN_NUMBER,
	DATE_TIME_ANALOG_CLOCK,
	DATE_TIME_DIGITAL_CLOCK,
	DATE_TIME_CALCULATOR
]

/**
 * 2. Note that, the first item is "group", not "block feature"
 */
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

/**
 * 3. Note that, the first item is "group", not "block feature"
 */
export const DOMAINS_BLOCKS: Block<DomainsLayoutId>[] = [
	DOMAINS,
	DOMAINS_BUILDER,
	DOMAINS_EXTENSIONS,
	DOMAINS_WHOIS
]

/**
 * 4. Note that, the first item is "group", not "block feature"
 */
export const QUIZ_BLOCKS: Block<QuizLayoutId>[] = [QUIZ, VIETNAM_TRAFFIC_LAW, KAHOOT_QUIZ]

/**
 * 5. Note that, the first item is "group", not "block feature"
 */
export const LANGUAGES_BLOCKS: Block<LanguagesLayoutId>[] = [
	LANGUAGES,
	LANGUAGES_100_POPULAR_CHINESE_WORDS,
	LANGUAGES_CHINESE_CHARACTERS,
	LANGUAGES_VIETNAMESE_READING_FOR_KIDS
]

/**
 * 6. Note that, the first item is "group", not "block feature"
 */
export const MATHS_BLOCKS: Block<MathsLayoutId>[] = [
	MATHS,
	MATHS_1,
	MATHS_2,
	MATHS_3,
	MATHS_4
]

/**
 * 7. Note that, the first item is "group", not "block feature"
 */
export const RANDOM_BLOCKS: Block<RandomLayoutId>[] = [
	RANDOM,
	RANDOM_BY_GROUPS,
	RANDOM_LOTTERY,
	RANDOM_MAGIC_WHEEL,
	RANDOM_NUMBER,
	RANDOM_PASSWORD,
	RANDOM_USERNAME
]

/**
 * 8. Note that, the first item is "group", not "block feature"
 */
export const URL_SHORTENER_BLOCKS: Block<UrlShortenerLayoutId>[] = [URL_SHORTENER]

/**
 * 9. Note that, the first item is "group", not "block feature"
 */
export const OTHERS_BLOCKS: Block<OthersLayoutId>[] = [OTHERS, OTHERS_RUNNING_TEXT]

export const BOOKS_BLOCKS: Block<GroupId>[] = []

/**
 * Note: when using `allBlocks`,
 * remember that the first item is "group", not "block feature".
 */
export const allBlocks = [
	DATE_TIME_BLOCKS,
	DEV_UTILS_BLOCKS,
	DOMAINS_BLOCKS,
	QUIZ_BLOCKS,
	LANGUAGES_BLOCKS,
	MATHS_BLOCKS,
	RANDOM_BLOCKS,
	URL_SHORTENER_BLOCKS,
	OTHERS_BLOCKS
]

export const DEFAULT_BLOCK: Block<"home"> = HOME

export const DEFAULT_SHARING_IMAGE = "https://startdo.ing/static/images/sharing.png"

/**
 * STYLING CONSTANTS
 */

// FW -> Font Weight
export const FW = {
	NORMAL: 400,
	SEMI_BOLD: 500,
	BOLD: 600,
	EXTRA_BOLD: 700,
	BLACK: 900
} as const

export const LIMIT_LATEST_RELEASE_DATES = 30

export const DATE_FORMAT = {
	forSearchParam: "YYYY-MM-DD",
	/**
	 * Heatmap component only support format `YYYY/MM/DD`
	 * Other that that would cause the component to not work as expected.
	 * Eg: `YYYY-MM-DD` is not a valid date format.
	 */
	forHeatmap: "YYYY/MM/DD",
	forDisplay: "MMM DD, YYYY"
} as const
